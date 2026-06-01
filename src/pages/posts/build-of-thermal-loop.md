---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Build of Thermal Loop'
author: 'Jay Liu'
description: '部分做功 压气机做功 WIN1 WIN8 WIN11 WIN17 WOUT 程序设计思路 程序设计思路 1. 验证程序 1. 简单循环 2. 再压缩循环 2. 主程序 1. 根据循环流程图构建回路矩阵'
pubDate: 2023-03-01
tags: ['thermal', 'engineering', 'notes']
---

# 部分做功

压气机做功

W_IN1

$$
P_5 = P_{21} = P_{30} = P_{6} = P_{7} = P_{17} = P_{8}
\
P_4 = P_{2} = P_{1} = P_{11} = P_{10} = P_{34} = P_{33}
\
T_4 = T_4
\
s(P_5,T_5) = s(P_4,T_4)/ISEN \to T_5
\
W_{IN1} = S_4S_5(1-S_1)*(h_5-h_4)
$$

W_IN8

$$
P_{20} = P_{38} = P_{12} = P_{7} = P_{17} = P_{8}
\
P_{3} = P_{31} = P_{1} = P_{11} = P_{10} = P_{34} = P_{33}
\
T_{20} = T_{38} = T_{12} = T_{6}
\
s(P_{20},T_{20}) = s(P_3,T_3)/ISEN \to T_3
\
W_{IN8} = S_4S_5S_1*(h_{20}-h_3)
$$

W_IN11

$$
P_{22} = P_{35} = P_{8}
\
P_{16} = P_{14} = P_{13}
\
T_{22} = T_{35} = T_{8}
\
s(P_{22},T_{22}) = s(P_{16},T_{16})/ISEN \to T_{16}
\
W_{IN11} = (1-S_4)*(h_{22}-h_{16})
$$

W_IN17

$$
P_{27} = P_{35} = P_{8}
\
P_{29} = P_{26} = P_{37} = P_{25}
\
T_{27} = T_{35} = T_{8}
\
s(P_{29},T_{29}) = s(P_{27},T_{27})/ISEN \to T_{29}
\
W_{IN11} = S_4(1-S_5)*(h_{27}-h_{29})
$$

W_OUT

$$
P_{13} = P_{13}
\
P_{9} = P_{9}
\
T_{9} = T_{9}
\
s(P_{13},T_{13}) = s(P_{9},T_{9})/ISEN \to T_{13}
\
W_{OUT12} = 1*(h_{9}-h_{13})
\
P_{15} = P_{13}
\
T_{15} = T_{13}
\
P_{25} = P_{25}
\
s(P_{25},T_{25}) = s(P_{15},T_{15})/ISEN \to T_{25}
\
W_{OUT14} = S_4*(h_{15}-h_{25})
\
P_{36} = P_{25}
\
T_{36} = T_{25}
\
P_{33} = P_{33}
\
s(P_{33},T_{33}) = s(P_{36},T_{36})/ISEN \to T_{33}
\
W_{OUT18} = S_4S_5*(h_{36}-h_{33})
$$

# 程序设计思路

程序设计思路

1. 验证程序
   1. 简单循环
   2. 再压缩循环
2. 主程序
   1. 根据循环流程图构建回路矩阵
   2. 设定部分参数
   3. 根据设备工作的物理过程解算剩余参数
   4. 计算设备功率及效率
   5. 检查与校正
3. 参数分析
   1. 分流系数
      1. 选择某个分流系数进行随机调整
      2. 运行主程序
   2. 初始状态参数
      1. 选择某个初始状态参数进行随机调整
      2. 运行主程序
4. GA
   1. 分流系数
      1. 将分流系数表设为种群个体基因
      2. 设置遗传算法基础参数，设置效率为适应度函数
      3. 运行主程序，迭代
   2. 初始状态参数
      1. 将初始状态参数设为种群个体基因
      2. 设置遗传算法基础参数，设置效率为适应度函数
      3. 运行主程序，迭代
   3. 全变量
      1. 将分流系数表、初始状态参数设为种群个体基因
      2. 设置遗传算法基础参数，设置效率为适应度函数
      3. 运行主程序，迭代

# LOOP

## code of loop

xxx-apparatus

000-split on

001-turbine/compressor

010-spliter

011-reheater-xxx-encrypt from 001 to 110 (6 might be enough)

100-exheater/cooler/heater

101-mixer

110-pipe

111-split off

## example

001-011001-100-001011-001-100

Author: [Jayliu](https://Jayliu9218.github.io)

Link: [https://jayliu9218.github.io/2023/05/23/%E6%A0%B8%E7%94%B5%E7%83%AD%E5%8A%9B%E5%AD%A6%E5%BE%AA%E7%8E%AF/](https://jayliu9218.github.io/2023/05/23/核电热力学循环/)

Copyright Notice: All articles in this blog are licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) unless stating additionally.

[Nuclear](https://jayliu9218.github.io/tags/Nuclear/)
