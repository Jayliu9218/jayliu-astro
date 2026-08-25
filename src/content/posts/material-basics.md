---
title: 材料科学基础
author: Jay Liu
description: 材料科学基础笔记，涵盖应力应变、织构、位错、施密德因子与滑移系。
pubDate: 2022-01-01
tags:
  - study
---

## 工程应力工程应变 & 真实应力真实应变 & Von Mises

ture stress 和 true strain 分别代表什么，和常规的stress 或者engineering stress有什么区别

?

---

什么是 von mises 应变和应力

s

拉伸应力图采用$\sigma_{11}$，等效应力取平均值，之前的计算全部采用的是$\sigma$，**_有问题，需要修改_**

```python
            if args.stresslabel == 'sigma11':
                dataset = f['/'.join([inc,'phase',phase,'mechanical','sigma'])]
                stressdata = dataset[:, 0, 0]/1.0e6
            if args.stresslabel == 'vonMises':
                dataset = f['/'.join([inc, 'phase', phase, 'mechanical', 'sigma_vM'])]
                stressdata = dataset[:]/1.0e6
```

第四强度理论的强度条件

https://innovationspace.ansys.com/courses/wp-content/uploads/sites/5/2020/05/Lesson-3-Engineering-Strain-and-True-Strain.pdf

> 原始图片缺失：`image-20241128213725845.png`

> 原始图片缺失：`image-20241128214108166.png`

nominal & engineering 标称与工程，除以初始截面

true 除以目前的截面

von mises

https://en.wikipedia.org/wiki/Finite_strain_theory#Compatibility_of_the_right_Cauchy%E2%80%93Green_deformation_tensor

https://damask-multiphysics.org/documentation/processing_tools/post-processing.html#damask.Result.add_strain

> 原始图片缺失：`image-20241129220105580.png`

> 原始图片缺失：`image-20241129220027675.png`

## 取向矩阵

$$

\begin{aligned}
n_{\theta} &= \left( \cos \theta ,\sin \theta ,0 \right) \\
n_{\phi} &= \left( \cos \phi ,0,-\sin \phi \right) \\[4pt]
n_{\alpha} &= n_{\phi}\times n_{\theta} \\
&=\left| \begin{matrix}
	i&		j&		k\\
	\cos \phi&		0&		-\sin \phi\\
	\cos \theta&		\sin \theta&		0\\
\end{matrix} \right| \\
&=-\sin \phi \cos \theta \cdot j+\cos \phi \sin \theta \cdot k+\sin \phi \sin \theta \cdot i \\
&=\left( \sin \phi \sin \theta ,-\sin \phi \cos \theta ,\cos \phi \sin \theta \right) \\[4pt]
\cos \alpha &=\frac{n_{\alpha}\cdot \left( 1,0,0 \right)}{\left| \alpha \right|\cdot 1} \\
&=\frac{\sin \phi \sin \theta}{\sqrt{\sin ^2\phi \cos ^2\theta +\cos ^2\phi \sin ^2\theta +\sin ^2\phi \sin ^2\theta}} \\
&=\sqrt{\frac{\sin ^2\phi \sin ^2\theta}{\sin ^2\phi \cos ^2\theta +\cos ^2\phi \sin ^2\theta +\sin ^2\phi \sin ^2\theta}} \\
&=\sqrt{\frac{1}{\cot ^2\theta +\cot ^2\phi +1}}
\end{aligned}


$$

https://www.jishulink.com/post/1926107

> 原始图片缺失：`image-20241225212515110.png`

标反了，应该是2\*phi\*1

### 极图

> 原始图片缺失：`image-20241030192011319.png`

### 反极图

> 原始图片缺失：`image-20241030193214174.png`

### 典型织构

> 原始图片缺失：`image-20241030194604647.png`

### 六方金属织构（镁、锌、钛等）

> 原始图片缺失：`image-20241030195622847.png`

### 晶面间距的推导

### 电子衍射与倒易点阵

### 刃位错、螺位错

> 原始图片缺失：`image-20241123131740062.png`

## Schmid Factor（施密德因子）

**Reference**

[[学术干货][EBSD][TSL OIM软件]Schmid因子相关](https://www.bilibili.com/video/BV1v54y1f7W8/?spm_id_from=333.1387.upload.video_card.click&vd_source=496c978c9ca078273e95c0be75af9d08)

Schmid 定律

$$
\tau = \frac{F * \rm{cos}(\varphi)}{\frac{A_0}{\rm{cos(\lambda)}}}=\frac{F}{A_0}*m=\sigma *m
$$

$\tau>\tau_{CRSS}$ 时滑移系开动

$m=\rm{cos}(\varphi)\rm{cos}(\lambda)$

注意：

- FCC 单晶
- BCC/HCP 经常出现不匹配的情况
- Taylor 因子

> 原始图片缺失：`image-20250831205617459.png`

手动计算 Schmid 因子

- 假设 FCC 单晶，力轴取向为 [2 7 4]
- 列出 FCC 所有的滑移系
- 挨个计算 Schmid 因子
- 取出 Schmid 因子最大的哪一个
- 理论 SF-IPF

需要说明的问题：

- Schmid 因子代表了分切到某个滑移系的剪切应力的大小，当 Schmid 定律生效时，代表这个滑移系开动的难易程度，仅此而已
- 滑移系开动的难易，可以在一定程度上表征塑性 Plasticity，但是不能表征韧性 Toughness
- 主要对 SCC 单晶有效，多晶和一些特殊结构材料可能有误差
- 对于孪生系的开动有争议，但是有人用他来分析

### 示例

<5, subgrain boundary

5-15, LAGB

\>15, HAGB

https://www.sciencedirect.com/science/article/pii/B9780128135181000060

> 原始图片缺失：`image-20250817212603666.png`

### 知乎

> 原始图片缺失：`image-20250817214218096.png`

EBSD中晶界取向差大小对材料性能的影响? - 嘿嘿嘿呼呼嘿嘿的回答 - 知乎
https://www.zhihu.com/question/316335562/answer/1880915328

## 滑移系

FCC有12个滑移系，{111}<110>

- 为什么{111}只有(1 1 1)(1 -1 1)(-1 -1 1)(-1 1 1)，考虑旋转90度，其他都和这四个平行
- <110>也只有三个\[1 0 -1\]\[0 1 -1\]\[-1 1 0\]

> 原始图片缺失：`image-20250907132513637.png`

滑移面可以旋转90度，得到4个
