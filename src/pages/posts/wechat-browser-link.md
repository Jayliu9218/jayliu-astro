---
layout: ../../layouts/MarkdownPostLayout.astro
title: '浏览器打开微信链接问题记录'
author: 'Jay Liu'
description: '浏览器打开微信链接提示：“请在微信客户端打开链接” 问题 在使用外部浏览器打开微信内的部分链接进行调试工作时，原链接加载1s后跳转至[外部链接](https://open.weixin.qq.com/connect/oauth2/aut...'
pubDate: 2024-01-01
tags: ['WeChat', 'web', 'debugging']
---

# 浏览器打开微信链接提示：“请在微信客户端打开链接”

## 问题

在使用外部浏览器打开微信内的部分链接进行调试工作时，原链接加载1s后跳转至[外部链接](https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxfeedf38d2d43e19c&redirect_uri=http://nmllg1.baofu.info/login?front_url=aHR0cDovL25tbGwxLmJhb2Z1LmluZm8vIy8&user_id=&response_type=code&scope=snsapi_base&state=STATE&connect_redirect=1#wechat_redirect)，并出现“请在微信客户端打开链接”的提示。

[![image-20240828183053567](https://pic.imgdb.cn/item/66db1b4dd9c307b7e9aa9ec1.png)](https://pic.imgdb.cn/item/66db1b4dd9c307b7e9aa9ec1.png)

## 解决思路

对[外部链接](https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxfeedf38d2d43e19c&redirect_uri=http://nmllg1.baofu.info/login?front_url=aHR0cDovL25tbGwxLmJhb2Z1LmluZm8vIy8&user_id=&response_type=code&scope=snsapi_base&state=STATE&connect_redirect=1#wechat_redirect)的源代码进行分析后发现，“请在微信客户端打开链接”的提示源于跳转后链接内代码对浏览器`ua`的判断，若`ua`内没有`micromessenger`的字样则进行该提示，所以单纯修改`ua`无法解决上述跳转问题。

```

```

```
<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0">
    </head>
    <body>
        <script type="text/javascript">
            var ua = navigator.userAgent.toLowerCase();
            var isWeixin = ua.indexOf('micromessenger') != -1;
            var isAndroid = ua.indexOf('android') != -1;
            var isIos = (ua.indexOf('iphone') != -1) || (ua.indexOf('ipad') != -1);
            if (!isWeixin) {
                document.head.innerHTML = '<title>抱歉，出错了</title><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0"><link rel="stylesheet" type="text/css" href="https://res.wx.qq.com/open/libs/weui/0.4.1/weui.css">';
                document.body.innerHTML = '<div class="weui_msg"><div class="weui_icon_area"><i class="weui_icon_info weui_icon_msg"></i></div><div class="weui_text_area"><h4 class="weui_msg_title">请在微信客户端打开链接</h4></div></div>';
            }
        </script>
    </body>
</html>
```

进一步地，考虑到使用微信链接时不可避免的涉及到登录微信账号，那么在进入链接时必然存在对账号合法性的判断。此处使用`fiddler`进行抓包获取登录`header`信息并提取，以[匿名聊天](https://nmll1.baofu.info/)为例，具体操作为：

1. 电脑登录微信，点击进入此链接；
2. 打开`fiddler`，通过`ctrl`+`X`清楚页面信息；
3. 刷新1中的链接，返回`fiddler`，在`Insepectors`内的`Raw`判断跳转链接，此处为[跳转链接](https://wxlb.duomiao.pro/nmll/room?invite_user_id=66cde7bc1bc91799086990&room_id=)。当然，由于此时还没有添加登录信息，网页会显示“您还没有登录”；
4. 同样在`Raw`内可以看到一系列键值对信息，这便是所需的`header`，在`Inspectors`的`Headers`也可以看到；
5. 使用`Chrome`浏览器的`Modheader`拓展将4中的信息填入，之后便可以进入3中跳转的链接；

Author: [Jayliu](https://Jayliu9218.github.io)

Link: https://jayliu9218.github.io/2024/09/06/Wechat/

Copyright Notice: All articles in this blog are licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) unless stating additionally.

[Wechat](https://jayliu9218.github.io/tags/Wechat/)
