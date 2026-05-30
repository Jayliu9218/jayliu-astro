# 两相流动与传热

[toc]

## WEEK1-1-2023-02-13

### 考核

1. 20 作业+线上
2. 30 两次实验
3. 50 期末考试

------

## WEEK1-2-2023-02-16

### concept

1. 含气量 $x=\frac{G_g}{G}=$
2. 准静态平衡含气量
3. gas/liquid superficial velocity 气相/液相折算速度，气相/液相 $V_g=\frac{G_g}{\rho _g}$
   gas/liquid actual velocity 气相/液相真实速度 $u_g=\frac{V_g}{\alpha}$，$u_l=\frac{V_l}{1-\alpha}$

### 流型

1. 连续相 or 弥散相以及相对大小

------

## WEEK3-2023-03-02

### 漂移流模型

1. for liquid $\frac{dp}{dz}+\rho _l g=\frac{F}{1-\alpha}$
2. for gas $\frac{dp}{dz}+\rho _g g =-\frac{F}{\alpha}$
3. 消除相互作用力，上式$F$存有负号
4. 泡状流应用例子
   1. $u_s=u_b(1-\alpha)\ ,\ j_{gl}=u_s \alpha (1-\alpha) \xrightarrow{} j_{gl}=u_b\alpha (1-\alpha)^2$
   2. Drift flux can also be written as:$j_{gl}=(1-\alpha)V_g+\alpha V_l\xrightarrow{}j_{gl}|*{\alpha=0}=V_g\ ,\ j*{gl}|_{\alpha=1}=V_l$
   3. For flooding the superficial velocities are:$V_g=2u_b\alpha ^2(1-\alpha)\ ,\ V_l=-u_b(1-2\alpha)(1-\alpha)^2$

| 2    | 2    |
| ---- | ---- |
| 2    | 2    |
| 2    | 2    |

1. Example of plug flow 
   1. $u_p=0.35(gd)^{0.5}$
   2. $j_{gl}=\alpha (0.2j+u_p)\xrightarrow{} j=V_g+V_l\ and\  j_{gl}=(1-\alpha)V_g-\alpha V_l\xrightarrow{} \alpha  u_p=(1-1.2\alpha)V_g-1.2\alpha  V_l\xrightarrow{}\alpha=\frac{V_g}{u_p+1.2(V_g+V_l)}$
   3. Correlations due profile effects
      1. $u=\frac{}{}$
      2. 

# 1 沸腾传热基础

[返回顶部](# 两相流动与传热)

## 1.1 气液两相平衡

### （1）表面张力/表面自由能/表面能

### （2）接触角

### （3）比自由焓/比吉布斯自由能

$$
g=h-Ts
$$

根据自由焓降低原理，气液两相平衡时
$$
g_l(T,p)=g_g(T,p)
$$

## 1.2 气液两相平衡

### （1）气液压力 - 比容特性

开尔文关系式
$$
\mathrm{ln}\frac{p_r}{p_{\infty} }=\frac{2\sigma M}{RT\rho r}
$$

### （2）Clausius - Clapeuron 方程

$$
(\frac{dp}{dT})*S=\frac{h*{fg} }{T(v_l-v_g)}
$$

### （3）气液两相稳定平衡条件

## 1.3 气泡稳定存在的条件

## 1.4 成核

## 习题

### 3

$$
\frac{dp}{dT}=\frac{h_{fg} }{T(v_g-v_l)}=\frac{C_0}{T}
\
dp=C_0\frac{dT}{T}\to p=C_0{\rm ln}T+C_1\to p_{\infty}=C_0{\rm ln}T_{S}+C_1,p_{g}=C_0{\rm ln}T_{g}+C_1
\
\to p_g-p_{\infty}=p_{\infty}(-\frac{2\sigma v_l}{r^*R_gT_g})=C_0{\rm ln}\frac{T_g}{T_S}\to T_g=T_S\cdot {\rm exp}[p_{\infty}(-\frac{2\sigma v_l}{r^*R_gT_g})\frac{1}{C_0}]
\
\Delta T_S=T_l-T_S=T_g-T_S=T_S{ {\rm exp}[p_{\infty}(-\frac{2\sigma v_l}{r^*R_gT_g})\frac{1}{C_0}]-1}=T_S\cdot[p_{\infty}(-\frac{2\sigma v_l}{r^*R_gT_g})\frac{1}{C_0}]
$$

### 4

$$
\frac{dp}{dT}=\frac{h_{fg} }{Tv_g}\to \frac{dp}{dT}=\frac{p\cdot h_{fg} }{T^2R_g}\to  \frac{dp}{p}=\frac{h_{fg} }{R_g}\frac{dT}{T^2}
\
{\rm ln}(p)=\frac{h_{fg} }{R_g}\frac{1}{T}+C
\
{\rm ln}(p_S)=\frac{h_{fg} }{R_g}\frac{1}{T_S}+C
$$

# 4 流动欠热泡核沸腾

[返回顶部](# 两相流动与传热)

ONB：Onset of Nucleate Boiling

FDB：Fully Developed Boiling

$x_E$（基于热平衡的空泡份额）与液体平均温度有关，不与$x$（真实空泡份额）重合

## 4.1 单相对流换热

对于均匀加热：
$$
\pi Dqz = \frac{\pi d^2}{4}G\cdot \overline{c}*{pl}[T*{b}(z)-T_{b}(0)]
$$
对于非均匀加热：
$$
\int_0^z q(z)\pi Ddz = \frac{\pi d^2}{4}G\cdot \overline{c}*{pl}[T*{b}(z)-T_{b}(0)]
$$
由DB公式等确定对流换热系数$h$

## 4.2 ONB点的确定

壁面过热度

单相对流——泡核沸腾 转折点：既满足单相对流传热，又满足泡核沸腾传热

## 4.3 FDB点的确定

也叫净蒸气产生开始点（NVG）

### （1）Griffith 5倍热流密度

### （2）Bowring 欠热度

### （3）Levy 气泡脱离壁面准则

# 5 流动饱和泡核沸腾

## 习题

### 1. 有哪三个流动饱和沸腾传热关系式，其所传递的热流密度主要取决于哪两个参量？为什么它们与池内饱和泡核沸腾传热关系式相同？

### 2. 对于壁面所加热流密度为定值的环状流动，壁面上泡核沸腾是怎么样被抑制（停止）的？泡核沸腾被抑制后的传热工况的名称叫什么，其传热机理是什么？

### 3. 复习层流液膜传热的解析式

### 4. 有哪五个液膜传热的经验关系式？

### 5. Chen 关系式的思路是什么？

### 6. 试用以下三式重新计算下方例题

1. $F=\begin{cases}1.0,\ &\frac{1}{X_{\rm tt}  }\leq0.1\2.35(\frac{1}{X_{\rm tt} }+0.213) ^{0.736},\  &\frac{1}{X_{\rm tt} }>0.1\end{cases}$ 
2. $S=\begin{cases}[1+0.12(Re_{\rm TP}^*)^{1.14}]^{-1},\ &Re_{\rm  TP}^*<32.5\ [1+0.42(Re_{\rm TP}^*)^{0.78}]^{-1},\ &32.5\leq  Re_{\rm TP}^*<70 \ 0.1 &Re_{\rm TP}^*\geq70\end{cases}$ 
3. $(p_{\rm w}-p_{\rm s})=\frac{h_{\rm fg}(T_{\rm w}-T_{\rm s})}{T_{\rm s}(v_{\rm g}-v_{\rm l})}$

> 压力 $p=0.143\ \rm MPa$ 的饱和水 - 蒸汽混合物在管径 $D=13\ \rm mm$ 的圆管内沸腾蒸发，已知质量流密度 $G=300\ \rm kg/(m^2\cdot s)$ ，热流密度分别为：（1）$q=0.826\ \rm W/m^2$  ；（2）$q=3.4\times 10^5\ \rm W/m^2$ 。用 Chen 关系式计算含气率 $x=0.2$ 处的壁面温度  $T_{\rm w}$，并分析在这两种热流密度下，泡核沸腾是否受到抑制。

# 6 流动沸腾临界热流密度（CHF）

[返回顶部](# 两相流动与传热)

## 6.1 两种流动沸腾临界热流密度工况及其机理

在壁面高热流密度下，沸腾由

> 欠热泡核沸腾

或

> 低含气率饱和的泡核沸腾

直接进入

> （欠热或饱和）膜态沸腾

### （1）偏离泡核沸腾（DNB）

### （2）干涸或蒸干（Dryout）

## 6.2 均匀热流密度加热、垂直圆管、强制流动、水的临界热流密度

### 6.2.1 临界热流密度的界限值

加热表面温度 $T_\rm W$ 低于饱和温度 $T_\rm S$ ，此时临界热流密度不会发生，临界热流密度最小值为
$$
q_{ {\rm c,min} }=\frac{ {\rm \Delta T_{SUB,in} }}{\frac{4L}{GD\overline{c}*{ {\rm pl} }}+\frac{1}{h*{ {\rm l0} }} }
$$
在供给通道的全部液体蒸发完（$x_E=1$）或蒸发完以前出现，临界热流密度最大值为
$$
q_{ {\rm c,max} }=\frac{GD}{4L}({h_{ {\rm fg} }+\overline{c}*{\rm pl}\Delta T*{\rm SUB,in} })
$$

### 6.2.2 影响临界热流密度 $q_{\rm c}$ 的独立变量

1. 进口欠热度 $T_{\rm SUB,in}$ 
2. 出口含气率 $x_{\rm c}$ 
3. 加热长度 $L$ 
4. 管道内径 $D$ 
5. 质量流密度 $G$ 
6. 压力 $p$

## 习题

### 1. 何谓临界热流密度工况，何谓临界热流密度？

### 2. 有哪两种临界热流密度工，它们各有哪几种机理？

### 3. 在均匀热流密度加热的垂直圆管内水的强制流动中，影响其临界热流密度 $q_{\rm c}$ 的独立变量有哪些？临界热流密度的界限值如何确定？

### 4.

# 9 两相流动导论

[返回顶部](# 两相流动与传热)

## 9.1 导言

## 9.2 描述管内两相流动的参量

## 9.3 两相流流型和流型图

## 9.4 两相流模型处理方法

# 11 气液两相流空泡份额计算

[返回顶部](# 两相流动与传热)

现代压水堆允许堆芯最热通道发生欠热或泡核沸腾

过渡、事故工况下压水堆堆芯和一回路系统可能发生沸腾

## 11.1 单相流模型

### 11.1.1 均匀流 （一维一速度）

$S=1$

$\overline{\alpha}=\beta$

饱和沸腾 $x=x_E=\frac{h-h_f}{h_{fg} }$

### 11.1.2 变密度 （两维一速度）两相流密度沿径向方向变化

在任意截面上 $u_g=u_l$，但考虑到气泡的“趋中效应” $\overline{u}_g\ne\overline{u}_l$

#### （1）Bankoff

$\frac{u}{u_m}=(\frac{y}{R})^{\frac{1}{m} }$，$\frac{\alpha}{\alpha_m}=(\frac{y}{R})^{\frac{1}{n} }$，$y$ 是离管壁面的距离

$\overline{\alpha}=K\beta$

#### （2）Armand 早期关系式

$\overline{\alpha}=C\beta$

#### （3）Thom 修正

在Bankoff关系式中 $x=1,\alpha\ne1$，Thom加入滑移因子 $\varepsilon$

#### （4）Hughmark 关系式

$\overline{\alpha}=K_H\beta$

精度较高、迭代试算

### 11.1.3 漂移流 （两维两速度）

局部体积流密度 $j=\frac{Q}{A}=u$（类比于质量流密度 $G=\frac{\dot{m} }{A}=\rho_0 u$）

相对于局部体积流密度的漂移速度 $j_{gj}=u_g-j,j_{lj}=u_l-j$

截面平均值 $\ll F \gg =\frac{1}{A}\int_AFdA$

加权平均值 $\overline{F}=\frac{\ll \alpha F \gg}{\ll \alpha \gg}=\frac{\frac{1}{A}\int_A\alpha FdA}{\frac{1}{A}\int_A\alpha dA}$

分布参量 $C_0=\frac{\ll \alpha j\gg}{\ll\alpha \gg \ll j \gg}$

#### （1）分布参量的确定

#### （2）漂移速度的确定

1. 气泡浓度影响
2. 不同流型

## 11.2 滑移模型（一维两速度）

### 11.2.1 滑速比

1. 前苏联 1970
2. 前苏联 1971

### 11.2.2 环状流

#### （1）Martinelli-Nelson-Thom 环状流模型

1. 基础：分离流模型
2. 假定：液体全部附于管壁形成液膜，气相与液相分界面光滑
3. 内插法求临界压力和大气压力之间压力的$\alpha$

#### （2）环状流解析计算：气核的流动

1. 气液分界面光滑
2. 气液分界面为波形
3. 气核中夹带液滴
4. 计算液滴夹带率 $E$
5. 迭代试算

## 11.3 混合相 - 单相并流模型

混合相无滑移（速度相同）

## 11.4 影响空泡份额的主要参量

1. 质量含气率
2. 压力
3. 质量流密度
4. 流动方向、流型

# 12 流动过冷沸腾的空泡份额与压降

[返回顶部](# 两相流动与传热)

# 13 两相临界流动

[返回顶部](# 两相流动与传热)

## 13.2 热力学不平衡临界流

### 13.2.3 经验公式

#### （1）孔板

流体在孔道内停留时间极短
$$
G=0.61\sqrt{2\rho_0(p_0-p_b)}
$$

#### （2）短管

#### （3）较长管

# 14 溢流和流动反转

[返回顶部](# 两相流动与传热)

# 15 两相流动不稳定性

[返回顶部](# 两相流动与传热)

## 15.1

## 15.2 水动力不稳定

特点：系统流量周期性漂移

原因：

1. 流量变化
2. 两相流摩擦压降相比单相流大幅增加
3. 气相密度变化导致流速变化

### 15.2.2 压降与质量流量关系推导

稳定性准则：

## 15.3 密度波不稳定

## 15.4 并联通道间的管间脉动

## 15.5 热振荡（核热耦合）

# 16 工质在并联管内的水动力学

[返回顶部](# 两相流动与传热)

# 17 自然循环水动力学计算

[返回顶部](# 两相流动与传热)

## 17.1

冷却流量分配：消除温度不均匀影响

# 18 自然循环的蒸汽净化及汽水分离

[返回顶部](# 两相流动与传热)

Author: [Jayliu](https://Jayliu9218.github.io)

Link: [https://jayliu9218.github.io/2024/01/10/%E4%B8%A4%E7%9B%B8%E6%B5%81%E4%B8%8E%E4%BC%A0%E7%83%AD/](https://jayliu9218.github.io/2024/01/10/两相流与传热/)

Copyright Notice: All articles in this blog are licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) unless stating additionally.

[course](https://jayliu9218.github.io/tags/course/)