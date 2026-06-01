---
layout: ../../layouts/MarkdownPostLayout.astro
title: '导出 Cycle Tempo 运行结果为数据表'
author: 'Jay Liu'
description: '导出 Cycle Tempo 运行结果为数据表 将cycle tempo运行结果导出为数据表。 我在使用该软件时并没有发现能直接导出数据表的功能，但发现cycle tempo能在其内部生成运行数据，所以可以利用表格识别功能将其转为最终的...'
pubDate: 2024-01-01
tags: ['Cycle Tempo', 'data workflow', 'engineering']
---

# 导出 Cycle Tempo 运行结果为数据表

将cycle tempo运行结果导出为数据表。

我在使用该软件时并没有发现能直接导出数据表的功能，但发现cycle tempo能在其内部生成运行数据，所以可以利用表格识别功能将其转为最终的数据表。

示例如下

1. 首先，打开工程，并且保证其能正常运行，否则无法得到数据。
2. 之后，运行，再打开菜单栏中的“view”一栏，点击“New Table”
3. 最上边是表头，可以不用管，中间是系统数据和需要显示的数据，最后是管道和需要显示的管道
4. 一般管道就全选，数据的话按需选择，比如这里选择了质量流量，焓值，温度，压力等，这个是进出口的设置，一般也可以就选both，但其实一个设备的出口也会是另一个的入口，所以问题不大
5. 生成数据表，并截图保存，将图片进行表格识别，（这里用到了“白描”，一个很好用的识别网站）
6. 导出为xlxs等数据表格式进行分析

# 伪破解lisence expire问题

```
Your lisence will expire
```

该软件的基本加密思路是：在官方申请获得许可证，运行时联网校验许可证时间。

破解思路：

1. 修改许可证文件，失败

简单修改之后无法正常打开程序，表示许可证错误

1. 修改系统时间，失败

程序需要联网获取时间，关闭网络则无法打开程序

1. 使用`RunAsDate`程序指定运行时间，成功

需要注意的是，Cycle Tempo是32位程序，所以需要对应下载32位的RunAsDate

指定为到期前任意一个时间即可，没有到期提示

Author: [Jayliu](https://Jayliu9218.github.io)

Link: https://jayliu9218.github.io/2023/10/30/Cycle-Tempo/

Copyright Notice: All articles in this blog are licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) unless stating additionally.

[software](https://jayliu9218.github.io/tags/software/)
