---
title: 硕士学习笔记
author: Jay Liu
description: 硕士阶段的研究进展、文献阅读、实验分析与阶段计划记录。
pubDate: 2022-01-01
tags:
  - study
---

电子探针

二次离子质谱仪

## Memo

确定变形后的取向，再计算 mprime 或者 GND 等等

**两张图：变形之后的取向差的变化，根据变形后的取向计算的mp或者sf等**

**作为创新点，放入introduction：文献计算多采用初始EBSD信息，缺少变形后的考虑，而变形对晶粒取向有较大影响**

## Read list

| 简介                                                                                                                                                                                                                                                                                | 加入时间   | 解决时间 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | -------- |
| [晶体塑性有限元和相场结合](https://www.dierk-raabe.com/joint-crystal-plasticity-and-phase-field-models/#:~:text=Projects%20where%20we%20combine%20crystal%20plasticity%20with%20phase%20field%20simulations%20to%20simulate%20coupled%20chemo%2Dstructural%2Dmechanical%20problems) | 2024-11-12 |          |
| [晶体塑性的本构模型](https://www.dierk-raabe.com/constitutive-modeling/#:~:text=Constitutive%20Modeling%20in,in%20Crystal%20Plasticity)                                                                                                                                             | 2024-11-12 |          |
| https://www.dierk-raabe.com/                                                                                                                                                                                                                                                        |            |          |

## 2024-12-30 至 2025-01-06

**_相关性热图，相关性分析_**

不仅要单独分析应变，还要考虑其他因素，综合分析

sigma_11 + far field stress

## 2024-11-17 至 2024-11-23

1. 全部晶界数据统计，再回代寻找标记开裂晶界
2. SR EBSD 重建DREAM3D，参考[A multiscale investigation into the effect of grain size on void evolution and ductile fracture: Experiments and crystal plasticity modeling](https://www.sciencedirect.com/science/article/pii/S0749641919303274?via%3Dihub#bib45)与历史实验数据，修改部分本构参数，进行拉伸仿真，屈服强度58MPa，抗拉强度421MPa，真实应力数据未知？
3. **_晶界数据统计：绘制不同热处理对比（SR、HIP等），统一横坐标间距_**
4. 塑性本构

## 2024-11-23 至 2024-11-29

1. 微区全晶界特征统计——SR+HIP
2. 软硬/大小区分
3. 仿真结果
4. 一条晶界上，部分开裂，部分未开裂，影响因素

## 2024-12-09 至 2024-12-16

1. 比较不同ebsd数据仿真得到的应力-应变曲线
2.

## 2024-12-16 至 2024-12-22

https://ww2.mathworks.cn/help/matlab/ref/saveas.html?searchHighlight=bmp%20%E5%AF%BC%E5%87%BA&s_tid=srchtitle_support_results_2_bmp%2520%25E5%25AF%25BC%25E5%2587%25BA

> ### R2023b: 以后的版本将不支持 BMP、HDF、PBM、PCX、PGM 和 PPM 文件
>
> 以后的版本将不再支持 BMP、HDF、PBM、PCX、PGM 和 PPM 文件格式。
>
> 要使用这些格式之一导出图，请改用 [`imwrite`](https://ww2.mathworks.cn/help/matlab/ref/imwrite.html) 函数。例如，创建一个线图，并使用 [`getframe`](https://ww2.mathworks.cn/help/matlab/ref/getframe.html) 函数捕获当前图窗的内容。然后将内容保存为 BMP 文件。

```matlab
plot([0 3 2 4 1]);
F = getframe(gcf);
imwrite(F.cdata,"myplot.bmp");
```

但是这个保存的`.bmp`文件效果很差，不好用

目前对EBSD开裂晶界数据的统计中，去除了晶界长度小于10的数据。

有个问题：总晶界数为808，但是忽略了8个，只剩800个，

原来的 grain(i,j) 对，保存的序号是gB序号

改变思路，不使用图片差值计算匹配差异，改为保存变量数据.mat格式进行计算

存在问题：SEM图片标记时，标准并未完全统一，尤其是以下情况，单一长晶界并未完全开裂

> 原始图片缺失：`项目 1 样品 1 区 8 SR-150x-1um-SSRT-2-scan.jpg`

> 原始图片缺失：`image-20241220144127082.png`

还有问题是

## 论文&理论学习

### LAGB & HAGB -GBAPD

Oxidation test :

| 变量 | 参数   |
| ---- | ------ |
| 压强 | 19 MPa |
| 温度 | 350 ℃  |
|      |        |

|          |     |            |
| -------- | --- | ---------- |
| 1.8 ppm  | H   | H2         |
| 2 ppm    | Li  | LiOH       |
| 1000 ppm | B   | boric acid |

1. 目的：系统性研究LAGB中DIGM和PIO的关系以及氧化动力学
2. 材料：镍基600
3. 实验：氧化测试（350℃，19MPa，水，H，加锂，硼酸）
4. 针对7个LAGB定性分析
   1. 晶界氧化
   2. 晶界迁移区
   3. 元素迁移
   4. GBAPD
5. 关键结论：
   1. LAGB中影响DIGM的临界晶界角度取向差-8.8°
   2. 高GBAPD对于溶质原子扩散起到抑制作用，对于PIO敏感性降低
6. 问题：
   1. 数据量过少
   2. GBAPD随PIO/DIGM分布不能充分反映其影响

### Paraview

1. 文件路径不能包含特殊字符，否则打不开

## 组会 20241026

### 焊接接头应力腐蚀-预测

力学
电极-古特曼：晶界、晶粒尺寸、电流
应力对电极（腐蚀作用）的影响
水化学劣化
平衡电位与腐蚀
机械-电化学理论
裂纹尖端水化学-力学参数？
水化学条件
裂纹扩展，FA模型

## 硕士研究计划 20241112

1. 课题背景 2. 工程背景，核用压水堆（材料316?）合金服役环境苛刻、特殊，存在影响材料服役性能的应力腐蚀问题，3. 学术背景，其与晶界特征紧密相关，尚不明确，亟需晶界工程针对性改善
2. 主要方向：（材料316?）应力腐蚀开裂的萌生仿真计算
3. 期望目标：完成建模输入晶粒形貌尺寸取向，完成在压水堆一回路模拟服役环境下的应力腐蚀开裂的萌生计算，提供应力应变等数据分布，并通过EBSD数据进行验证，此两步骤反复进行，获得SCC萌生仿真数据，为晶界工程提供指导
4. 前期工作EBSD数据统计与优化7. 文献
   1. Predict
   2. Feng XY
   3. 力学、：CPFEM / spectral，dream3d（建模/重建），damask（计算）；
   4. dream3d，damask的学习与初步使用
5. 后续规划
6. 位错密度
7. 温度场，600℃
8. 腐蚀电位引入，次临界，加氢、氧
9. 仿真模拟为主，damask，晶体塑性有限元，实验为辅

## 论文&理论学习

567

---

平行是怎么看的

> 原始图片缺失：`image-20241112153331047.png`

---

far-field strain??

```python
        if len(ffstrain) != Ninc: raise ValueError("ffstrain dimension %d and increments %d not match" %(len(ffstrain), Ninc))

    ave_sigma = {}
    for phase in res._visible['phases']: ave_sigma[phase] = []
    ave_sigma['All'] = []
    for ni, inc in enumerate(res._visible['increments']):
        if args.strain == None: ffstrain.append(0.1/Ninc*ni)
```

尚老师绘应力应变图里面选用了far-field strain，均匀变化

---

## 工具调用

- [[DREAM3D]]
- [[damask]]
- [[mtex]]
- [[cycle-tempo]]

## new

1 ppm 近似于 10 cc(STP)/kg

> 原始图片缺失：`clip_image002.jpg`
