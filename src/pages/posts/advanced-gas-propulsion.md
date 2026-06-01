---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Advanced Gas Propulsion'
author: 'Jay Liu'
description: '周文武（[zhouww@sjtu.edu.cn](mailto:zhouww@sjtu.edu.cn)）机动学院A楼825 研究兴趣：航发/燃机先进冷却技术、先进流动实验测量与诊断技术'
pubDate: 2023-02-16
tags: ['course', 'propulsion', 'thermal']
---

周文武（[zhouww@sjtu.edu.cn](mailto:zhouww@sjtu.edu.cn)）机动学院A楼825

研究兴趣：航发/燃机先进冷却技术、先进流动实验测量与诊断技术

# 目录

[toc]

# WEEK1-2023-02-16

[返回顶部](# 目录)

## 参考教材

1. Elements of Propulsion
2. 航空发动机：飞机的心脏
3. Fundamentals of Jet Propulsion with Applications

## 考核

1. 出勤 10 （随机抽查、课堂测验）
2. 作业 25 （有附加题20分，满分取100分）
3. 项目报告 25 （介绍发动机新技术等）
4. 期末考试 40 （半开卷，A4纸一面）
5. 第2周分组，组员学期固定，参与课堂测试，累积得分最高有发动机壁纸奖励
6. 没有课件，必须做笔记

---

## 绪论

### 燃气推进技术分类

### 飞行器发动机分类

1. 涡轮发动机 Aero Engine Mach 0-4
   1. 涡喷：压气机+燃烧室+涡轮+喷嘴
   2. 涡扇：风扇+压气机+燃烧室+涡轮+喷嘴
   3. 涡桨：桨叶+压气机+燃烧室+涡轮+喷嘴
2. 亚燃冲压 Ramjet Mach 2-5
   1. 进气道：高马赫数飞行（Ma7来流总温$2100K$）
   2. 冷却通道：再生冷却，典型热流密度$2MW/m^2$
   3. 燃烧室：超声速燃烧&气动加热（总温高达$4000K$）
3. **超燃冲压 Scramjet Mach 5-10**

### 经济效益

### 发展历史

1. 活塞式
2. 航空涡轮喷气 Frank Whittle

## 基本原理

1. **Brayton Cycle（布雷登循环）**
2. 涡轮喷气发动机（WP）【耗油率极高】：进气道进气——压气机增压——燃烧室加热——涡轮膨胀做功带动压气机——尾喷管膨胀加速——排气
3. 涡轮风扇发动机（WS）【经济性更好】：涵道比：外/内涵道空气流量之比
4. 涡轴发动机（WZ）：喷气速度较低，基本不产生推力，更多能量转化为旋翼转动的机械能
5. 涡桨发动机
6. 冲压发动机

### 关键技术 / 特点

1. 超高安全性与可靠性：整体与零件——鸟击实验、吞冰实验
2. 极高转速（$\rm 10^4$级RPM）：叶片承受巨大离心力
3. 极高温度（$\rm 2000K$）
4. 燃烧室稳定：压气机来流快
5. 工艺极限：零件数量多、加工精度高

目前提高发动机性能最有效的方法：**提高涡轮入口温度**

### 三大技术（入口温度$\gg$高温合金耐受温度）

1. 材料技术
   1. 高温下仍保持强度
   2. 单晶叶片（等轴晶——定向晶——单晶）【合格率低】
2. 冷却技术
   1. **核心技术——涡轮叶片**
   2. 气膜冷却
   3. 内部冷却
3. 涂层技术

---

# WEEK2-2023-02-23

[返回顶部](# 先进燃气推进技术)

## 可压缩流基本知识

### 一维流动假设

1. 忽略其他二维因素，全局设计考虑
2. 亚音速近似结果好于超音速（激波？）
3. CFD$\to$DNS

### 控制体法

1. **CV & CS**
2. 简化非线性方程
3. 物性参数已知
4. **稳态流动方程（无加速，非变循环）**
5. 电磁力等作用忽略不计
6. Mach Number 对于压缩性的影响

## 守恒方程

1. continity equation
   $$
   \frac{\partial}{ {\partial{t} }}\oiiint_{V}\rho dV+\oiint_S{\rho \vec{u}\cdot\vec{n}dS}=0
   $$
   one-dimentional
   $$
   \rho _i u_i A_i = \rho_e u_e A_e
   $$
2. momentum equation
   $$
   \vec{F}*E-\oiint_S{p\hat{n}dS}+\oiint_S{\vec{\sigma}dS+\oiiint_V{\rho \vec{f}dV} }=\frac{\partial}{ {\partial{t} }}\oiiint*{V}\rho \vec{u}dV+\oiint_S{\rho \vec{u}(\vec{u}\cdot\vec{n})dS}
   $$
   one-dimentional
   $$
   \rho_i u_i^2 A_i+p_i A_i + F_x=\rho_e u_e^2 A_e+p_e A_e
   $$
3. energy equation
   $$
   \dot{Q}*{in}-\dot{W}*{out}=\frac{\partial}{\partial  t}{\oiiint_V}{\rho(e+\frac{u^2}{2}+gz)dV}+{\oiint_S}{\rho(e+\frac{u^2}{2}+gz)(\vec{u}\cdot \hat{n})dS}
   $$
   one-dimentional
   $$
   \rho_i u_i A_i(h_i+\frac{u_i^2}{2})-\dot{W}*{out}+\dot{Q}*{in}=\rho_e u_e A_e+p_e A_e(h_e+\frac{u_e^2}{2})
   $$

### Typical State Paremeter

1. 焓 enthaply
2. 内能
3. 熵 entropy
4. 音速
   $$
   p\nu ^\kappa =C=p\rho^{-\kappa}\xRightarrow{}dp\rho  ^{-\kappa}-\kappa p \rho  ^{-\kappa-1}d\rho=0\xRightarrow{}\frac{dp}{d\rho}=\kappa p\nu=\kappa RT
   $$

$$
\xRightarrow{}\alpha=\sqrt{(\frac{\partial p}{\partial \rho})_s}=\sqrt{\frac{dp}{d \rho} }=\sqrt{\kappa RT}
$$

5. 马赫数 $M=u/ \alpha$

## 由理想气体到一般气体

## 滞止

1. **来流被等熵绝热引导到静止状态**
2. 滞止焓
3. 滞止温度
   $$
   T_{01}=T_1+\frac{u^2}{2c_p}
   $$

$$
\frac{T_{01} }{T_1}=1+\frac{u^2}{2T_1}\frac{1}{c_p}=1+\frac{u^2}{2} \frac{\kappa-1}{T_1\kappa R}=1+\frac{\kappa-1}{2}M_1^2
$$

1. 滞止压力
   $$
   c_p\ln \left( \frac{T_{01} }{T_1} \right) -R\ln \left( \frac{p_{01} }{p_1} \right) =0\xRightarrow{}\left( \frac{T_{01} }{T_1}  \right) ^{c_p}=\left( \frac{p_{01} }{p_1} \right) ^R \xRightarrow{}  \frac{p_{01} }{p_1}=\left( \frac{T_{01} }{T_1} \right)  ^{\frac{\kappa}{\kappa -1} }
   $$

$$
\frac{p_{01} }{p_1}=(1+\frac{\kappa-1}{2}M_1^2)^{\frac{\kappa}{\kappa-1} }
$$

### 发动机气体过程

1. Intake——Compression——Combustion——Exhaust
2. 假设**等熵绝热**流动
3. 滞止焓为定值
4. 与介质种类无关

## 质量流量函数 D(M) 质量守恒+理想气体状态方程+代换整理

1. continity equation
   $$
   \dot{m}=\rho _1u_1A_1=\rho _2u_2A_2=\frac{p_1}{RT_1}u_1A_1
   $$

$$
\dot{m}=\frac{p_1}{RT_1}u_1A_1\cdot\frac{p_{01} }{p_{01}  }\frac{\sqrt{T_{01} }}{\sqrt{T_{01} }}\frac{\sqrt{\kappa}  }{\sqrt{\kappa} }=\frac{u_1}{\sqrt{\kappa RT_1} }\sqrt{\frac{T_{01}  }{T_1} }\frac{p_1}{p_{01} }\sqrt{\frac{\kappa}{R}  }\frac{p_{01}A_1}{\sqrt{T_{01} }}=\sqrt{\frac{\kappa}{R}  }\frac{p_{01}A_1}{\sqrt{T_{01} }}\frac{M_1}{\left( 1+\frac{\kappa  -1}{2}M_1^2 \right) ^{\frac{\kappa +1}{2(\kappa-1)}  }}=\sqrt{\frac{\kappa}{R} }\cdot \frac{p_{01}A_1}{\sqrt{T_{01} }}\cdot  D_1\left( M \right)
$$

$$
D\left( M \right) =\frac{M}{\left( 1+\frac{\kappa -1}{2}M^2  \right) ^{\frac{\kappa +1}{2\left( \kappa -1 \right)}  }}=\sqrt{\frac{R}{\kappa} }\frac{\sqrt{T_0} }{p_0A}\dot{m}
$$

$$
A_1D_1\left( M \right) =A_2D_2\left( M \right) =\sqrt{\frac{R}{\kappa} }\frac{\sqrt{T_{01} }}{p_{01} }\dot{m}
$$

1. Property of $D(M)$ and $D(M)$ of MACH
2. **ONE D(M) TO TWO MACH:one is sub velocity another is beyond velocity**
3. before 1 increase,after 1 decrease $\xRightarrow{}D(1)=D(M)|_{max}$

---

# WEEK3-2023-03-02

[返回顶部](# 先进燃气推进技术)

## Calc:From Mach Number to D(M)

$$
M\rightarrow T_0,P_0\rightarrow \dot{m}\rightarrow D\left( M \right) \rightarrow
$$

## 推力方程 G(M)

1. momentum equation
   $$
   \rho *1u*{1}^{2}A_1+p_1A_1+F_x=\rho *2u*{2}^{2}A_2+p_2A_2
   $$

$$
\dot{m}u_1+p_1A_1+F_x=\dot{m}u_2+p_2A_2
$$

$$
p_1A_1\left( \frac{ {u_1}^2}{RT_1}+1 \right) +F_x=p_2A_2\left( \frac{ {u_2}^2}{RT_2}+1 \right)
$$

1. with an identity equation and stagnation parameter of p
   $$
   \frac{u^2}{RT}=\frac{u^2}{RT}\frac{\kappa}{\kappa}=\kappa \frac{u^2}{\alpha ^2}=\kappa M^2
   $$

$$
p_{01}=p_1\left( 1+\frac{\kappa -1}{2}{M_1}^2 \right) ^{\frac{\kappa}{\kappa -1} }
$$

3. simplify

$$
p_{01}A_1\frac{\left( {\kappa M_1}^2+1 \right)}{\left( 1+\frac{\kappa -1}{2}{M_1}^2 \right)  ^{\frac{\kappa}{\kappa -1} }}+F_x=p_{02}A_2\frac{\left( {\kappa M_2}^2+1 \right)}{\left( 1+\frac{\kappa -1}{2}{M_2}^2 \right)  ^{\frac{\kappa}{\kappa -1} }}
$$

4. define

$$
G\left( M \right) =\frac{\left( \kappa M^2+1 \right)}{\left( 1+\frac{\kappa -1}{2}M^2 \right) ^{\frac{\kappa}{\kappa -1} }}
$$

5. Property of G(M) curve

1. $G(1)=G(M)|_{max}$

## one-dimentional non isentropic flow

1. 非等熵流动
   $$
   Tds=dh-\frac{dp}{\rho}\xrightarrow{}\triangle s=s_2-s_1=c_pln(\frac{T_2}{T_1})-Rln(\frac{p_2}{p_1})
   $$

## 激波

1. Mach Angle with Mach Line
   $$
   sin\beta = \frac{\alpha}{u} = \frac{1}{M}
   $$

### 激波 Property

1. too thin about 厚度几个分子自由程
2. **不可逆**

### 前后变化

1. $s_2>s_1$
2. $M_1>1>M_2$
3. $A_1=A_2$
4. 质量：从超音速到亚音速的变换，满足连续性方程，质量流量守恒
   $$
   \dot{m}=\rho_{1}u_1A_1=\rho_{2}u_2A_2=\frac{p_{01}A_1}{\sqrt{T_{01} }}\sqrt{\frac{\kappa}{R} }D_1=\frac{p_{02}A_2}{\sqrt{T_{02}  }}\sqrt{\frac{\kappa}{R} }D_2
   $$
5. **能量：滞止温度不变，厚度忽略不涉及热量传递和做功，滞止压力变化**
   $$
   \dot{W}=\dot{Q}=0 \xrightarrow{} T_{01}=T_{02} \xrightarrow{} \dot{m}\sqrt{T_{01}  }\sqrt{\frac{R}{\kappa} }=\dot{m}\sqrt{T_{02} }\sqrt{\frac{R}{\kappa}  }=p_{01}A_1D_1=p_{02}A_2D_2
   $$

$$
Tds=dh-\frac{dp}{\rho}\xrightarrow{}\triangle  s=s_2-s_1=c_pln(\frac{T_{02} }{T_{01} })-Rln(\frac{p_{02} }{p_{01}  })=-Rln(\frac{p_{02} }{p_{01} })>0
$$

1. 动量：
   $$
   p_{01}A_1G_1=p_{02}A_2G_2
   $$
2. define $N(M)$
   $$
   \frac{G_1}{D_1}=N_1=\frac{G_2}{D_2}=N_2
   $$

---

# WEEK4-2023-03-09

[返回顶部](# 先进燃气推进技术)

## 激波前后计算

### 物理解释

1. 能量方程与熵方程结合
2. 激波熵增加在物理意义上的解释
3. $G(M)$的变化

### 静压与静温计算

1. 静压
   $$
   \frac{p_2}{p_1}=\frac{p_{02} }{p_{01}  }(\frac{1+\frac{\kappa-1}{2}M_1^2}{1+\frac{\kappa-1}{2}M_2^2})^{\frac{\kappa}{\kappa-1}  }=\frac{G_1}{G_2}(\frac{1+\frac{\kappa-1}{2}M_1^2}{1+\frac{\kappa-1}{2}M_2^2})^{\frac{\kappa}{\kappa-1} }=\frac{1+\kappa M_1^2}{1+\kappa M_2^2}
   $$
2. 静温
   $$
   \frac{T_2}{T_1}=\frac{T_{02} }{T_{01}  }(\frac{1+\frac{\kappa-1}{2}M_1^2}{1+\frac{\kappa-1}{2}M_2^2})^{\frac{\kappa}{\kappa-1} }=\frac{G_1}{G_2}(\frac{1+\kappa M_1^2}{1+\kappa  M_2^2})=(\frac{1+\frac{\kappa-1}{2}M_1^2}{1+\frac{\kappa-1}{2}M_2^2})^{\frac{\kappa}{\kappa-1} }
   $$

## 斜激波计算

1. 斜激波垂直分量前后马赫数满足正激波的马赫数关系
   $\theta$是流动改变角度，$\beta$是激波与流动方向夹角

$$
tan(\theta)=2cot(\beta)\frac{M_2^2sin^2(\beta)-1}{M_1^2(\kappa+cos(2\beta))+2}
$$

1. 马赫数计算

$$
M_{1n}=M_1sin(\beta)
$$

$$
\frac{M_{1n} }{N(M_{1n})} = \frac{M_{2n} }{N(M_{2n})}
$$

$$
M_2=\frac{M_{2n} }{sin(\beta - \theta)}
$$

## 例题2

已知激波前参数$p_1,T_1,M_1$，求激波后参数
**_Solution:_**

$$
Firstly\ N(M)=\frac{G(M)}{D(M)}=\frac{1+\kappa M^2}{M\sqrt{1+\frac{\kappa-1}{2}M^2} }
$$

$$
We\ can\ get\ M_2\ from\ this\ equation
$$

$$
Then\ calculate\ T_{01}\ and\ p_{01}\ while\ T_{02}=T_{01}
$$

$$
With\ M\ we\ can\ get\ N(M)\ and\ D(M)
$$

$$
It's\ easy\ to\ get\ p_{02}\ p_2\ T_2\ then
$$

$$
However,\ it's\ not\ always\ accurate\ to\ do\ so\ as:
$$

$$
\lim_{M\to \infty}N(M)=\lim_{M\to \infty}\frac{1+\kappa  M^2}{M\sqrt{1+\frac{\kappa-1}{2}M^2} }=\lim_{M\to \infty}\frac{\kappa  M^2}{M^2\cdot \sqrt{\frac{\kappa-1}{2} }}=\frac{\sqrt  2\kappa}{\sqrt{\kappa-1} }
$$

$$
We\ set\ \kappa=1.4\ if\ it's\ air
$$

$$
So\ \lim_{M\to \infty}N(M)=3.1305\ which\ means\ if\ N(M)\ is\  3.1306,no\ matter\ how\ enormous\ M\ is,there\ can\ never\ be\ another\  M\ matched\ with\ it
$$

## 燃气轮机循环

### 气体热力过程

### 布雷登热力循环

[![brayton](https://ts1.cn.mm.bing.net/th/id/R-C.0452bbc9879b020e232c7e03afc3089e?rik=sdrXWzBYcDy0aw&riu=http://www.denaircompressor.com/uploads/allimg/111011/1_111011112247_1.png&ehk=UzdQ0KgWGFS4C2qfVnV8LpZC9txNLwqSa7EJrwANmhY=&risl=&pid=ImgRaw&r=0)](https://ts1.cn.mm.bing.net/th/id/R-C.0452bbc9879b020e232c7e03afc3089e?rik=sdrXWzBYcDy0aw&riu=http://www.denaircompressor.com/uploads/allimg/111011/1_111011112247_1.png&ehk=UzdQ0KgWGFS4C2qfVnV8LpZC9txNLwqSa7EJrwANmhY=&risl=&pid=ImgRaw&r=0)

1. 效率
   $$
   \eta = \frac{W_{out} }{Q_{in} }=\frac{Q_{in}-Q_{out} }{Q_{in} }=1-\frac{Q_{out} }{Q_{in} }
   $$
2. 假设是理想气体
   $$
   \eta = 1-\frac{mc_p (T_4-T_1)}{mc_p (T_3-T_2)}=1-\frac{T_1}{T_2}\frac{\frac{T_4}{T_1}-1}{\frac{T_3}{T_2}-1}
   $$
3. 从$p-\nu$图得到
   $$
   \frac{p_2}{p_1}=\frac{p_3}{p_4}\xRightarrow{}\frac{T_2}{T_1}=\frac{T_3}{T_4} \xrightarrow{} \frac{T_3}{T_2}=\frac{T_4}{T_1}
   $$
4. 化简
   $$
   \eta = 1-\frac{T_1}{T_2}
   $$

## 例题3

已知$q,p_1,T_1,p_2$，求$T_2,T_3,T_4,p_3,p_4,\eta$

# WEEK5-2023-3-16

[返回顶部](# 先进燃气推进技术)

## 理想循环分析-涡喷

### 常用术语定义

压比

$$
\pi=\frac{p_{0,exit} }{p_{0,inlet} }
$$

温比

$$
\tau=\frac{T_{0,exit} }{T_{0,inlet} }
$$

e.g.

$$
\pi_c=\frac{p_{0,3} }{p_{0,2} }
$$

$$
\tau_c=\frac{T_{0,3} }{T_{0,2} }
$$

### 理想状态 位置0处温度和压力

$$
\tau_r=\frac{T_{0,0} }{T_{0} }=1+\frac{\kappa-1}{2}M_0^2
$$

$$
\pi_r=\frac{p_{0,0} }{p_{0} }=(1+\frac{\kappa-1}{2}M_0^2)^{\frac{\kappa}{\kappa-1} }
$$

## 不同部件

### 进气道：滞止参数均没有发生变化

$$
\tau_d=\frac{T_{0,2} }{T_{0,0} }=1,\pi_d=\tau_d^{\frac{\kappa}{\kappa-1} }=1
$$

### 压气机compressor：等熵过程

$$


$$

### 燃烧室burner：定压过程（假设无损失）

Rayleigh流动

### 涡轮tuibine：等熵过程

### 喷管nuzzle：等熵过程

# WEEK6-2023-3-23

[返回顶部](# 先进燃气推进技术)

## 出入口关系推导推力

出口温度

$$
\frac{T_{09} }{T_9}=T_0 \frac{T_{00} }{T_0}\frac{T_{02} }{T_{00} }\frac{T_{03}  }{T_{02} }\frac{T_{04} }{T_{03} }\frac{T_{05} }{T_{04} }\frac{T_{09}  }{T_{05} }\frac{1}{T_{9} }=\frac{T_0}{t_9}\tau_c \tau_b \tau_t
$$

同理，从压力角度

$$
\frac{T_{09} }{T_9}=(\frac{p_{09} }{p_9})^{\frac{\gamma-1}{\gamma} }=(p_0  \frac{p_{00} }{p_0}\frac{p_{02} }{p_{00} }\frac{p_{03} }{p_{02}  }\frac{p_{04} }{p_{03} }\frac{p_{05} }{p_{04} }\frac{p_{09} }{p_{05}  }\frac{1}{p_{9} })^{\frac{\gamma-1}{\gamma} }=
$$

由上可以得到

$$
\frac{T_9}{T_0}=\tau_b
$$

从马赫数到速度

$$
\frac{T_{09} }{T_9}=1+\frac{\gamma-1}{2}M_9^2=\tau_r \tau_c \tau_t
\
\tau_r =1+\frac{\gamma-1}{2}M_0^2
\
\frac{M_9}{M_0}=\sqrt{\frac{\tau_r \tau_c \tau_t-1}{\tau_r-1} }
\
\frac{u_9}{u_0}=\frac{M_9\sqrt{\gamma RT_9} }{M_0\sqrt{\gamma RT_0} }=\sqrt{\frac{\tau_b(\tau_r \tau_c \tau_t-1)}{\tau_r-1} }
$$

得到推力

$$
T=\dot{m}(u_9-u_0)=\dot{m}u_0(\sqrt{\frac{\tau_b(\tau_r \tau_c \tau_t-1)}{\tau_r-1} }-1)
$$

单位推力

$$
\frac{T}{\dot{m}g}=\frac{u_0}{g}(\sqrt{\frac{\tau_b(\tau_r \tau_c \tau_t-1)}{\tau_r-1} }-1)
$$

## 做功分析

压气机做功等于涡轮做功（二者共轴），在$\dot{m}*f\ll \dot{m}\*0$的情况下

$$
\dot{m}\*{cp}(T*{03}-T_{02})=\dot{m}*{cp}(T*{04}-T_{05})
\
\frac{1}{T_{03} }(T_{03}-T_{02})=\frac{1}{T_{03} }(T_{04}-T_{05})
\
1-\frac{T_{02} }{T_{03} }=\frac{T_{04} }{T_{03} }-\frac{T_{05} }{T_{03} }
\
1-\frac{1}{\tau_c}=\tau_b(1-\tau_t)
\
\tau_t=1-\frac{\tau_c-1}{\tau_c \tau_t}
$$

代入单位推力

## 燃油耗油率

$$
S=\frac{\dot{m}_f}{T}
$$

对于油气比：燃烧室能量守恒

分析耗油率与局部件性能关系

## 涡轮入口温度

最低温度

最高温度

定义

$$
\tau_\lambda =\frac{T_{04} }{T_0}=\tau_r\tau_c\tau_b
$$

## 例题4

[> ? Hexo ????????img.png)](<c:\Users\Jayliu\Pictures\Screenshots\屏幕截图(61).png>)

## 例题5

[> ? Hexo ????????img.png)](<c:\Users\Jayliu\Pictures\Screenshots\屏幕截图(60).png>)

从定义出发

$$
ssssfff
$$

# WEEK7-2023-3-30

[返回顶部](# 先进燃气推进技术)

## 加力燃烧室

### 温压关系

假设理想燃烧，总压无损失，温度高，音速高，马赫数低

$$
\pi_{ab}=\frac{p_{07} }{p_{05} }=1
$$

燃烧增加的能量体现在温度比上

$$
\tau_{ab}=\frac{T_{07} }{T_{06} }=\frac{T_{08} }{T_{06} }=\frac{T_{09} }{T_{06} }
\
\frac{u_9}{u_0}=\frac{M_9}{M_0}\sqrt{\frac{T_9}{T_0} }
\
T_{09}=T_9(1+\frac{\gamma-1}{2}M_9^2)=T_0\tau_{\lambda,ab}
\
p_{09}=p_0\pi_r\pi_c\pi_t
\
\frac{p_{09} }{p_0}=(1+\frac{\gamma-1}{2}M_9^2)^{\frac{\gamma}{\gamma-1}  }=\pi_r\pi_c\pi_t=(\tau_r\tau_c\tau_t)^{\frac{\gamma}{\gamma-1} }
\
\frac{T_9}{T_0}=\frac{\tau_{\lambda,ab} }{\tau_r\tau_c\tau_t}=\tau_{ab}\tau_b
$$

### 推力计算

$$
M_9^2=\frac{2}{\gamma-1}(\tau_r\tau_c\tau_t-1)
\
\frac{T}{\dot{m}g}=\frac{a_0}{g}{[\frac{2}{\gamma-1}\tau_{ab}\tau_b(\tau_r\tau_c\tau_t-1)]^{\frac{1}{2} }-M_0}
\
$$

### 耗油率计算

能量守恒，得到加力燃烧室单位耗油率

$$
\dot{m}*{\rm f,ab}\Delta H_B=c_pT*{09}(\dot{m}+\dot{m}*f+\dot{m}*{f,ab})-c_pT_{06}(\dot{m}+\dot{m}*{f})=c_p\dot{m}(T*{09}-T_{06})
$$

由于

$$
T_{07}=T_0\tau_{\lambda,ab}
\
T_{06}=T_0\tau_{\lambda}\tau_t
$$

得到加力燃烧室油气比

$$
f_{ ab}=\frac{\dot{m}*{ f,ab} }{\dot{m} }=\frac{c_pT_0}{\Delta H*{B} }(\tau_{\lambda,ab}-\tau_{\lambda}\tau_{t})
$$

总油气比

$$
f_{total}=\frac{\dot{m}*f+\dot{m}*{f,ab} }{\dot{m} }
$$

## 理想循环分析-涡扇

> Fan，3'——风扇出口，9'——喷嘴出口

> 涵道比（bypass ratio）$\beta=\frac{\dot{m}*{\rm F} }{\dot{m}*{\rm c} }$

### 推力计算

$$
T=\dot{m}*{ c}(u_9-u_0)+\dot{m}*{ F}(u_{9'}-u_0)+(p_9-p_0)A_9+(p_{9'}-p_0)A_{9'}
$$

假设风扇、核心机尾喷管完全膨胀

$$
T=\dot{m}*{ c}(u_9-u_0)+\dot{m}*{ F}(u_{9'}-u_0)
$$

将涵道比代入推力方程

$$
\frac{T}{\dot{m}g}=\frac{a_0M_0}{1+\beta}[(\frac{u_0}{u_0}-1)+\beta(\frac{u_{9'} }{u_0}-1)]
$$

其中，与涡喷一样

$$
\frac{u_9}{u_0}=\frac{M_9}{M_0}\sqrt{\frac{T_9}{T_0} }=\sqrt{\frac{\tau_{ b}(\tau_{ r} \tau_{ c} \tau_{t}-1)}{\tau_{ r}-1} }
$$

### 状态关系式

$$
\frac{T_{09'} }{T_{9'} }=(1+\frac{\gamma-1}{2}M_{9'}^2)=\frac{T_0}{T_{9'} }\tau_{  r}\tau_{ F}\ ,\ \tau_{ F}=\frac{T_{03'} }{T_{02'} }
\
\frac{p_{09'} }{p_{9'} }=(1+\frac{\gamma-1}{2}M_{9'}^2)^{\frac{\gamma}{\gamma-1} }=\pi_{r}\pi_{ F}
$$

得到马赫数关系

$$
\frac{M_{9'} }{M_0}=\frac{1}{M_0}\sqrt{\frac{2}{\gamma-1}(\tau_{r}\tau_{F}-1)}=\frac{u_{9'} }{u_0}
$$

## 例题 6

[> ? Hexo ????????image-20230406130735876](c:\Users\Jayliu\AppData\Roaming\Typora\typora-user-images\image-20230406130735876.png)

[> ? Hexo ????????image-20230406130751254](c:\Users\Jayliu\AppData\Roaming\Typora\typora-user-images\image-20230406130751254.png)

$$
u_9 = \frac{2}{3}
$$

# WEEK8-2023-4-6

Author: [Jayliu](https://Jayliu9218.github.io)

Link: [https://jayliu9218.github.io/2023/10/28/%E5%85%88%E8%BF%9B%E6%8E%A8%E8%BF%9B%E6%8A%80%E6%9C%AF/](https://jayliu9218.github.io/2023/10/28/先进推进技术/)

Copyright Notice: All articles in this blog are licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) unless stating additionally.

[course](https://jayliu9218.github.io/tags/course/)
