# 《计算流体力学入门》

John D Anderon

姚朝晖 

# 2023-10-22

## 控制体方程

1. 空间固定，有限控制体：
2. 随流体运动，有限控制体：
3. 空间固定，无穷小流体：
4. 随流体运动，无穷小流体：

# 2023-10-23

## 物质导数

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

## 速度散度 $\nabla \cdot V$

$$
\frac{D{V}}{}
$$

Author: [Jayliu](https://Jayliu9218.github.io)

Link: [https://jayliu9218.github.io/2023/10/23/%E8%AE%A1%E7%AE%97%E6%B5%81%E4%BD%93%E5%8A%9B%E5%AD%A6/](https://jayliu9218.github.io/2023/10/23/计算流体力学/)

Copyright Notice: All articles in this blog are licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) unless stating additionally.

[course](https://jayliu9218.github.io/tags/course/)