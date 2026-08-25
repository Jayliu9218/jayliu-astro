---
title: 微分方程数值解法基础教程
author: Jay Liu
description: 微分方程数值方法课程笔记，涵盖误差、收敛性、稳定性与 Runge–Kutta 方法。
pubDate: 2023-10-09
tags:
  - course
  - math
---

林群

第三版

## 2023-10-09

### 误差分析

1. 替代误差——相容性：差商替代微商；
2. 舍入误差——稳定性：充分小步长扰动；
3. 跳跃误差——收敛性：整体截断误差（局部截断误差、差分解在不同积分曲线上的跳跃）扰动；

### 数值方法相容且稳定，则必收敛

不考虑局部替代误差，得到稳定性，再结合相容性即得收敛性。

### 线性多步法

1. 线性组合思想构造多点差商逼近微分方程，展开$u(t+jh),u'(t+jh)$表示局部截断误差$L[u(t),t]$；
   1. 对于方程$\Sigma_{j=0}^{k}\alpha_ju_{(m+j)} = h\Sigma_{j=0}^{k}{\beta_jf(t_{m+j},u_{m+j})}$：
   2. $c_0=\Sigma_{j=0}^{k}{\alpha_j} = \alpha_0+\alpha_1+\alpha_2+\dots+\alpha_k$
   3. $c_1 =  \Sigma_{j=0}^{k}{(j\alpha_{j}-\beta_j)}=\alpha_1+2\alpha_2+3\alpha_3+\dots+k\alpha_k-(\beta_0+\beta_1+\beta_2+\dots\beta_k)$
   4. $\dots$
   5. 为保证相容性$L[u(t),t]=O(h)$，需要$c_0=c_1=0$；
2. 局部截断误差$L[u(t)],t]$阶数对应于LMS方法的阶数（若阶数为$k$，则前项$u^{(i)}(i\leq k)$系数均为0）；
3. Gronwall不等式与根条件；
4. 相容性、稳定性与收敛性的证明；

### 绝对稳定性

### Runge–Kutta 法
