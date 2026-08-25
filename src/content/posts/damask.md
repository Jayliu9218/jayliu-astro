---
title: DAMASK 操作笔记
author: Jay Liu
description: DAMASK 晶体塑性模拟的环境配置、参数设置、报错处理与结果预测笔记。
pubDate: 2026-04-10
tags:
  - note
  - damask
---

## 在 WSL 中运行 DAMASK

修改cpu分配，一个任务占用一半

### 2025-09-22

晶体模拟参数，考虑大量数据预测

## 唯象模型本构参数意义

好的，我们来分析一下这两个文件。

sigma11.csv 文件记录了不同工况下的单轴拉伸应力-应变曲线数据。
yaml.csv 文件则定义了这些工况所使用的材料本构模型参数。

通过对比这两个文件，我们可以分析特定材料参数对宏观力学响应（应力-应变曲线）的影响。这些参数主要属于一个基于晶体塑性理论的唯象幂律（phenopowerlaw）模型。

以下是几个关键参数对力学响应影响的分析：

1.  **初始滑移系强度 (`xi_0_sl.0`)**:
    - **物理意义**: 该参数代表了材料开始塑性变形的临界分切应力（CRSS），直接决定了材料的初始屈服强度。
    - **数据对比**:
      - `CM\1`: `xi_0_sl.0` = 180 MPa
      - `CM\1-1`: `xi_0_sl.0` = 120 MPa
      - `CM\1-5`: `xi_0_sl.0` = 50 MPa
    - **影响分析**: 从 sigma11.csv 中可以看到，`CM\1` 的屈服强度最高，其次是 `CM\1-1`，`CM\1-5` 的屈服强度最低。这与 `xi_0_sl.0` 参数的大小顺序完全对应。**结论：`xi_0_sl.0` 值越高，材料的屈服强度越高。**

2.  **饱和滑移系强度 (`xi_inf_sl.0`)**:
    - **物理意义**: 该参数代表了材料在发生大量塑性变形后，由于加工硬化达到饱和状态时的临界分切应力。它主要影响材料后期（大应变下）的流动应力。
    - **数据对比**:
      - `CM\1-1`: `xi_inf_sl.0` = 450 MPa
      - `CM\1-3`: `xi_inf_sl.0` = 400 MPa
    - **影响分析**: 对比 `CM\1-1` 和 `CM\1-3` 的应力-应变曲线，它们的初始屈服行为相似（因为 `xi_0_sl.0` 相同），但在塑性变形阶段，`CM\1-1` 的应力随着应变的增加而增长得更多，最终的流动应力更高。**结论：`xi_inf_sl.0` 值越高，材料的后期加工硬化能力越强，大应变下的流动应力越高。**

3.  **初始硬化模量 (`h_0_sl-sl.0`)**:
    - **物理意义**: 该参数描述了塑性变形初期材料的加工硬化速率。
    - **数据对比**:
      - `SR-2\3`: `h_0_sl-sl.0` = 800 MPa
      - `SR-2\5-`: `h_0_sl-sl.0` = 1000 MPa
      - `SR-2\4-`: `h_0_sl-sl.0` = 1300 MPa
    - **影响分析**: 观察 sigma11.csv 中这三组数据的曲线，在屈服之后，`SR-2\4-` 的应力上升最快，`SR-2\3` 的应力上升最慢。这表明 `h_0_sl-sl.0` 越大，初始加工硬化阶段的斜率越大。**结论：`h_0_sl-sl.0` 决定了材料进入塑性阶段后的初始硬化速率。**

4.  **硬化指数 (`a_sl.0`)**:
    - **物理意义**: 这个指数描述了从初始硬化状态向饱和状态过渡的快慢。它控制了应力-应变曲线在屈服后“拐弯”的剧烈程度。
    - **数据对比**:
      - `CM\1`: `a_sl.0` = 1.85
      - `CM\1-1`: `a_sl.0` = 2.55
      - `SR-2\5-`: `a_sl.0` = 3.25
    - **影响分析**: `a_sl.0` 越大，意味着滑移系强度从 `xi_0` 增长到 `xi_inf` 所需的累积滑移量越小，即硬化得越快。从曲线上看，`SR-2\5-` 在屈服后很快就进入了应力平稳增长的阶段，而 `CM\1` 的硬化过程则更为平缓。**结论：`a_sl.0` 越大，材料越快地达到加工硬化饱和，应力-应变曲线的“膝部”越尖锐。**

### 总结

yaml.csv 中的本构参数与 sigma11.csv 中的力学响应有明确的对应关系：

- **`xi_0_sl.0`** 控制 **屈服强度**。
- **`xi_inf_sl.0`** 控制 **后期流动应力** 的上限。
- **`h_0_sl-sl.0`** 和 **`a_sl.0`** 共同控制了从屈服到后期流动应力之间的 **加工硬化行为**（曲线的形状）。

通过系统地调整这些参数，就可以对材料的应力-应变行为进行标定和预测。

python包

- neper
- DAMASK - SPARKS （蒙卡模拟晶粒生长）

### 基本操作

### 报错

| 报错编号  | 报错信息                                    | 解决方案                                                          |
| --------- | ------------------------------------------- | ----------------------------------------------------------------- |
| error 950 | max number of cutbacks exceeded, terminaing | 应该和载荷设置有关，查看输出文件可以发现小增量时，应变已经接近于1 |
|           |                                             |                                                                   |
|           |                                             |                                                                   |

### 变量定义

| Parameter            | Description                                                            | Unit              |
| -------------------- | ---------------------------------------------------------------------- | ----------------- |
| P                    | first Piola-Kirchhoff stress                                           | Pa                |
| F                    | deformation gradient                                                   | 1                 |
| F_e                  | elastic deformation gradient                                           | 1                 |
| F_p                  | plastic deformation gradient                                           | 1                 |
| L_p                  | plastic velocity gradient                                              | 1/s               |
| O                    | crystal orientation as quaternion                                      | q_0 (q_1 q_2 q_3) |
| xi_sl                | resistance against plastic slip                                        | Pa                |
| epsilon_V^0.0(F)     | Seth-Hill strain tensor of order 0.0 based on left stretch tensor of F | 1                 |
| epsilon_V^0.0(F)\_vM | Mises equivalent strain of epsilon_V^0.0                               | 1                 |
| sigma                | Cauchy stress (ture stress) calculated from P and F                    | Pa                |
| sigma_vM             | Mises equivalent stress of sigma and F                                 | Pa                |

### 本构参数定义

xi-$\xi$ -剪切应力

gamma-$\gamma$-剪切应变

| YAML key       | Type   | Default | Description                                    | Possible values                              |
| -------------- | ------ | ------- | ---------------------------------------------- | -------------------------------------------- |
| N_sl           | 1dInt  | []      | number of slip-systems for a given slip family |                                              |
| N_tw           | 1dInt  | []      | number of twin-systems for a given twin family |                                              |
| a_non-Schmid   | 2dReal | []      |                                                |                                              |
| a_sl           | 1dReal |         |                                                |                                              |
| atol_gamma     | Real   | 1.0e-6  |                                                |                                              |
| atol_xi        | Real   | 1.0     |                                                |                                              |
| c_1            | 1dReal |         |                                                |                                              |
| c_2            | 1dReal |         |                                                |                                              |
| c_3            | 1dReal |         |                                                |                                              |
| c_4            | 1dReal |         |                                                |                                              |
| dot_gamma_0_sl | 1dReal |         | reference shear strain rate for slip           |                                              |
| dot_gamma_0_tw | 1dReal |         | reference shear strain rate for twin           |                                              |
| f_sat_sl-tw    | 1dReal |         |                                                |                                              |
| h_0_sl-sl      | 1dReal |         |                                                |                                              |
| h_0_tw-sl      | 1dReal |         |                                                |                                              |
| h_0_tw-tw      | 1dReal |         |                                                |                                              |
| h_sl-sl        | 1dReal |         |                                                | 1.0 for coplanar slip plane and 1.4 for non- |
| h_sl-tw        | 1dReal |         |                                                |                                              |
| h_tw-sl        | 1dReal |         |                                                |                                              |
| h_tw-tw        | 1dReal |         |                                                |                                              |
| n_sl           | 1dReal |         | stress exponent for slip                       |                                              |
| n_tw           | 1dReal |         | stress exponent for twin                       |                                              |
| output         | 1dStr  | []      |                                                | [‘xi_sl’, ‘gamma_sl’, ‘xi_tw’, ‘gamma_tw’]   |
| xi_0_sl        | 1dReal |         | initial critical shear stress for slip         |                                              |
| xi_0_tw        | 1dReal |         | initial critical shear stress for twin         |                                              |
| xi_inf_sl      | 1dReal |         | maximum critical shear stress for slip         |                                              |

### 本构参数

| 晶格类型 | 材料  | 来源                                                                                                                                         |
| -------- | ----- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| FCC      | 黄铜  | https://www.sciencedirect.com/science/article/pii/S1359645412001784?via%3Dihub#s0010:~:text=The%20constitutive%20parameters,0.18%C2%A0GPa.   |
| FCC      | 316LN | A multiscale investigation into the effect of grain size on void evolution and ductile fracture: Experiments and crystal plasticity modeling |
|          |       |                                                                                                                                              |

| SF                     | von mises stain - inc100   | add together                                |
| ---------------------- | -------------------------- | ------------------------------------------- |
| 原始图片缺失：`SF.jpg` | 原始图片缺失：`inc100.png` | 原始图片缺失：`image-20241122184914923.png` |
|                        |                            |                                             |
|                        |                            |                                             |

## 预测（Predict）

[How to explain the ROC curve and ROC AUC score?](https://www.evidentlyai.com/classification-metrics/explain-roc-curve)

1. 目的：对晶界特征造成的应力集中与应变不相容给予定量分析
2. 材料：Mg，
3. SI-GBS, SC-GBS定义：above the 90th percentile
4. GB特征定义：5. $\overline{\varepsilon_{\nu M}}$ : average von Mises strain 6. $\overline{\sigma_{\nu M}}$ : average von Mises stress 7. SI : srain incompatibility
   1. difference of the $\overline{\varepsilon_{\nu M}}$ values on its two sides

   2. SC : stress concentration
      1. average $\overline{\varepsilon_{\nu M}}$ values on its two sides

5. 实验：tensile deformation test
6. 建模：DREAM.3D
7. in the pipeline, stats generator filter, define microstructural statistics such as grain size
8. 128x128x128，grid resolution = 1um
9. in the pipeline, stats generator filter, mean grain size = 6.7um
10. deformed by tension along Z-direction
11. Export DAMASK Files
12. use `geom2vti.py` to convert `.geom` to `.vti`
13.
14. 仿真：DAMASK-CPFFT
15. 结果：
16. texture intensity
17. basal slip & tensile twinning
18. GB features affect the stress and strain

> 原始图片缺失：`image-20241026165051296.png`

Damask，geomgrid如何加载，material indices是什么

---

如何导入欧拉角信息到material.yaml中？
