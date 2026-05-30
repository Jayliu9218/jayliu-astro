# BiliBili 【小缸和阿灿】全视频下载及处理过程记录

***声明：此记录仅作学习交流，不得进行任何商业用途。***

## 简介

众所周知，小缸和阿灿的团队们最近发生了“离职潮”：阿灿、阿猛、老胡、静静、丽哥都相继宣布离职，团队的运营情况不容乐观。

在此情况下，很多粉丝朋友想要下载他们的视频进行二创纪念，或者是回顾以往几个好伙伴的快乐时光，又或者是担心其公司的不正当处理想要对视频进行备份……也就是迫切地需要：下载视频以及（由于B站特殊的下载机制：加密、文件夹）对B站所下载视频进行处理。

该过程最终处理好的视频我会分享到云盘。

## 结果预览

[![图1【小缸和阿灿】视频下载结果预览](https://pic.imgdb.cn/item/66dc64b1d9c307b7e95e3afb.png)](https://pic.imgdb.cn/item/66dc64b1d9c307b7e95e3afb.png)

[![图2【小缸和阿灿】视频下载结果预览](https://pic.imgdb.cn/item/66dc64b1d9c307b7e95e3b26.png)](https://pic.imgdb.cn/item/66dc64b1d9c307b7e95e3b26.png)

[![图3【小缸和阿灿】视频下载结果预览](https://pic.imgdb.cn/item/66dc64b1d9c307b7e95e3b58.png)](https://pic.imgdb.cn/item/66dc64b1d9c307b7e95e3b58.png)

## 主要过程

### 使用 哔哩哔哩（UWP版）下载全部视频

这个过程比较简单，在微软商店下载UWP版本的哔哩哔哩（注意不是新版），然后在软件里一个一个下载就好了。

由于他们的视频比较多，总共是200个，如果嫌麻烦可以使用按键精灵写个脚本自动完成（后续的解密就用到按键精灵）。

### 对下载得到的视频进行解密

参考视频[【解决】电脑端哔哩哔哩uwp版更新后*下载视频无法播放的问题](https://www.bilibili.com/video/BV1D94y1f7hs/?spm_id_from=333.880.my_history.page.click&vd_source=496c978c9ca078273e95c0be75af9d08)，所得到的视频（应该是4K的加密？）绝大多数都有加密，无法直接使用视频播放器播放，需要使用WinHex进行一些处理。

WinHex下载地址: https://wwp.lanzouq.com/iZhf501pt1bi   密码:crub

[![图4 使用WinHex解密过程](https://pic.imgdb.cn/item/66dc64b1d9c307b7e95e3bf0.png)](https://pic.imgdb.cn/item/66dc64b1d9c307b7e95e3bf0.png)

同时考虑到总体视频数量较多，故使用按键精灵进行脚本录制，自动进行批量解密（这个过程也有一点小问题：存在一些视频是未加密的，需要注意，否则不加判断地解密可能导致原视频无法播放）。

[![图5 使用按键精灵进行批量解密](https://pic.imgdb.cn/item/66dc64b1d9c307b7e95e3b97.png)](https://pic.imgdb.cn/item/66dc64b1d9c307b7e95e3b97.png)

### 对原视频名称进行更改

原视频名称是其对应的编号，看起来很不舒服。

[![图6 原视频名称](https://pic.imgdb.cn/item/66dc64b3d9c307b7e95e3f9f.png)](https://pic.imgdb.cn/item/66dc64b3d9c307b7e95e3f9f.png)

读取`info`文件内的相应信息，得到原视频名称：`Title`，并对视频进行修改。

[![图7 info内的标题信息](https://pic.imgdb.cn/item/66dc64b3d9c307b7e95e3fab.png)](https://pic.imgdb.cn/item/66dc64b3d9c307b7e95e3fab.png)

再通过Python编写程序，批量修改视频名称，思路为：

1. 获取文件夹列表
2. 遍历文件夹，每次进入单个文件夹进行修改
   1. 进入对应文件夹的视频文件夹
   2. 读取info中的标题并对视频进行重命名

[![图8 Python重命名视频标题程序概览](https://pic.imgdb.cn/item/66dc64b3d9c307b7e95e3fdc.png)](https://pic.imgdb.cn/item/66dc64b3d9c307b7e95e3fdc.png)

在这个过程中，还发现了小缸和阿灿在视频标题上的一点点小问题：部分问号使用的是”?”，部分又使用的是”？”，不知道是故意的还是不小心的呢~但是也无伤大雅。

### 将改名后的视频统一路径

尽管改好了名字，每个视频还是单独的处在一个文件夹下，彼此分离，在想观看的时候还是很不方便，因此再次使用Python编程，对其统一路径。

[![图9 Python统一视频路径程序概览](https://pic.imgdb.cn/item/66dc64b3d9c307b7e95e401e.png)](https://pic.imgdb.cn/item/66dc64b3d9c307b7e95e401e.png)

[![图10 Python统一视频路径概览](https://pic.imgdb.cn/item/66dc64b3d9c307b7e95e4037.png)](https://pic.imgdb.cn/item/66dc64b3d9c307b7e95e4037.png)

## 参考

1. [【解决】电脑端哔哩哔哩uwp版更新后*下载视频无法播放的问题](https://www.bilibili.com/video/BV1D94y1f7hs/?spm_id_from=333.880.my_history.page.click&vd_source=496c978c9ca078273e95c0be75af9d08)
2. [用 Python 批量把文件复制到另一个文件夹](https://www.jianshu.com/p/acf27824e901)

## 一些想说的话

其实这个想法的初衷是用他们的素材做一个视频纪念一下小缸和阿灿还有他们的朋友们，很舍不得这样一群搞怪、有想法、正能量、能给别人带来快乐的朋友，也很不想他们分开，但怎么说呢，分开也许是为了更好的重逢吧。人都是向着不断变好前进的，可能现在确实有一些路因为各种各样的原因有些走偏了走歪了，所以没有办法必须要找别的路了。

但不要怕嘛，毕竟他们一直在的，粉丝朋友们也都在的。以后的路会更加艰辛，我们也会走得更加坚定！

加油加油，势必达成！

[![图11 势必达成](https://pic.imgdb.cn/item/66dc64b8d9c307b7e95e4809.png)](https://pic.imgdb.cn/item/66dc64b8d9c307b7e95e4809.png)

Author: [Jayliu](https://Jayliu9218.github.io)

Link: [https://jayliu9218.github.io/2023/08/12/BiliBili-%E5%B0%8F%E7%BC%B8%E5%92%8C%E9%98%BF%E7%81%BF-%E5%85%A8%E8%A7%86%E9%A2%91%E4%B8%8B%E8%BD%BD%E5%8F%8A%E5%A4%84%E7%90%86%E8%BF%87%E7%A8%8B%E8%AE%B0%E5%BD%95/](https://jayliu9218.github.io/2023/08/12/BiliBili-小缸和阿灿-全视频下载及处理过程记录/)

Copyright Notice: All articles in this blog are licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) unless stating additionally.

[Miscellaneous](https://jayliu9218.github.io/tags/Miscellaneous/)