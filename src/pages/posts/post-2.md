---
layout: ../../layouts/MarkdownPostLayout.astro
title: FIB操作笔记
author: 杰
description: 'FIB 样品制备与显微操作流程的个人实验笔记。'
image:
  url: 'https://docs.astro.build/assets/arc.webp'
  alt: 'The Astro logo on a dark background with a purple gradient arc.'
pubDate: 2026-04-10
tags: ['FIB', 'Note']
---

在学习 Astro 大约一周后，我决定尝试些新的东西。我编写并导入了一个小组件！

离子束轰击样品，导致粒子与基体粘连

切穿的话，有明显的缝

减薄的时候需要考虑样品厚度，过厚的话要取出样品再进行减薄

nav-cam

Auto点掉

stage 倒数第二个 take nav photo

铜网右侧小孔一般是正的

iSPI 离子束工作自动刷新

粗切 21nA 52°

细切2.5nA 52°

U切 2.5nA 0°

细切的时候，画的方框应该在阴影白色交界处，尤其是负角度，适当远离，否则切P

TC4，Ti551，Ti80

Thermo Fisher Scientific Helios 5 CX DualBeam

为方便，使用电镜代替该设备，同时用SEM代替电子束，FIB代替离子束

**像差简介**

**设备概览**

离子束电子束分布，镀层，Easylift等等

**实验流程**

- 实验准备

准备样品

准备操作工具

检查电镜是否正常（真空度等），确认电子

- 安装样品

泄掉Chamber真空

使用导电胶安装样品到T形台上

T形台固定于Shuttle上

使用固定底座安装铜网到rowbar上，将rowbar固定于shuttle上

确认样品已经固定牢固之后，并确认真空泄掉之后，打开仓门，将shuttle固定于STEM Holder上，确认完毕后关闭仓门，抽取真空。

- 电镜观察

真空SEM先观察，寻找样品，逐次调整工作距离

调整Eucentric

电子束观察，调整Stage Z

- 切取粗坯

镀层

粗切

细切

U切

进焊切退

提出

- 修整铜柱

拉平铜网水平线，Rotation 180度，tilt 52度，

中间挖大坑，

端部切小平台

进焊切退

- 离子减薄
- 结束实验

**快捷操作**

Ctrl+S1，使用S1模式进行拍照

Ctrl+E，回到电子束正对位置

Ctrl+I，回到离子束正对位置

Ctrl+Shift+Z，拍摄导航照片

鼠标右键左右拖动，调整聚焦

Shift+鼠标右键左右拖动，调整X方向像散

Shift+鼠标右键上下拖动，调整Y方向像散
