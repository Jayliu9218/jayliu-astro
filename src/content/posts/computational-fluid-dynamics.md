---
title: 计算流体力学入门
author: Jay Liu
description: 计算流体力学课程笔记，记录控制体方程、物质导数与速度散度等基础概念。
pubDate: 2023-10-22
tags:
  - cfd
  - course
  - fluid-mechanics
---

John D Anderon

姚朝晖

## 2023-10-22

### 控制体方程

1. 空间固定，有限控制体：
2. 随流体运动，有限控制体：
3. 空间固定，无穷小流体：
4. 随流体运动，无穷小流体：

## 2023-10-23

### 物质导数

物理意义：

$$
f_2 = f_1 + (\frac{\partial f}{\partial x})_1(x_2-x_1) + (\frac{\partial  f}{\partial y})_1(y_2-y_1) + (\frac{\partial f}{\partial z})_1(z_2-z_1) + (\frac{\partial f}{\partial x})*1(t_2-t_1)
\
lim*{t_2\to  t_1}\frac{f_2-f_1}{t_2-t_1} = \frac{Df}{Dt} = u\frac{\partial  f}{\partial x} + v\frac{\partial f}{\partial y} + w\frac{\partial  f}{\partial z} + \frac{\partial f}{\partial t} = \frac{\partial  f}{\partial t} + \nabla \cdot V
\
\frac{Df}{Dt} = \frac{\partial f}{\partial t} + \nabla \cdot V
$$

纯数学，全微分：

$$
df = \frac{\partial f}{\partial x}dx + \frac{\partial f}{\partial y}dy +  \frac{\partial f}{\partial z}dz + \frac{\partial f}{\partial t}dt
\
\frac{df}{dt} = \frac{Df}{Dt} = u\frac{\partial f}{\partial x} + v\frac{\partial  f}{\partial y} + w\frac{\partial f}{\partial z} + \frac{\partial  f}{\partial t}
$$

### 速度散度 $\nabla \cdot V$

$$
\frac{D{V}}{}
$$
