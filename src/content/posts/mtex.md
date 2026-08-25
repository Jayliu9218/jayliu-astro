---
title: MTEX 学习笔记
author: Jay Liu
description: MTEX 晶界数据结构、EBSD 数据处理与取向分析笔记。
pubDate: 2022-01-01
tags:
  - study
---

## `grainBoundary` 类源码分析

基于您提供的 `grainBoundary.m` 源码，以下是对该 MATLAB 类的详细分析。这个类是 MTEX 库的核心组件，用于表示和操作晶界（grain boundaries）数据，常用于 EBSD（电子背散射衍射）分析中的晶粒重建。

### 1. 类概述

- **定义**：`classdef grainBoundary < phaseList & dynProp`
  - 继承自 `phaseList`（相位列表）和 `dynProp`（动态属性），支持相位管理和动态属性扩展。
- **用途**：表示晶界段的列表，每个段存储位置、邻接晶粒 ID、EBSD 测量 ID、旋转等信息。典型访问方式：`grains.boundary`。
- **关键概念**：
  - **顶点 (Vertices)**：晶界的几何点（X、Y 坐标）。
  - **面 (Faces)**：晶界段，由两个顶点连接。
  - **段 (Segments)**：每个面代表一个晶界段。

### 2. 主要属性

- **存储属性**（与数据行数匹配）：
  - `F`：面列表（每行 [v1, v2]，索引到顶点 `V`）。
  - `grainId`：邻接晶粒的 ID（每行 [id1, id2]）。
  - `ebsdId`：邻接 EBSD 数据的 ID。
  - `misrotation`：邻接 EBSD 像素间的旋转（misorientation）。
- **通用属性**：
  - `scanUnit`：扫描单位（默认 'um'）。
  - `triplePoints`：三重点列表（晶界交汇点）。
- **依赖属性**（通过 getter 计算）：
  - `misorientation`：邻接测量间的取向差（基于 `misrotation`）。
  - `direction`：晶界段的方向（`vector3d`）。
  - `midPoint`：段的中点坐标。
  - `I_VF`、`I_FG`、`A_F`、`A_V`：邻接矩阵（顶点-面、面-晶粒、面-面、顶点-顶点）。
  - `componentId`、`componentSize`：连通组件 ID 和大小。
  - `x`、`y`、`z`：顶点的坐标。
  - `allV`：所有顶点列表。
  - `V`：晶界部分的顶点（未实现）。
  - `N`：伪 3D 数据的法向。
  - `plottingConvention`：绘图约定。

### 3. 关键方法

- **构造函数**：`grainBoundary(V, F, ebsdInd, grainId, phaseId, mori, CSList, phaseMap, ebsdId, varargin)`
  - 输入：顶点 `V`、面 `F`、EBSD 索引、晶粒 ID、相位 ID、旋转等。
  - 处理：确保 `V` 为 `vector3d`，赋值属性，计算三重点（除非禁用）。
  - 排序：按相位 ID 和晶粒 ID 排序，确保一致性。
- **getter 方法**：
  - `get.direction(gB)`：计算段方向（`gB.allV(gB.F(:,1)) - gB.allV(gB.F(:,2))`），归一化并设为轴对称。
  - `get.midPoint(gB)`：计算段中点（平均两个顶点）。
  - `get.I_VF(gB)`：顶点-面邻接矩阵。
  - `get.A_V(gB)`：顶点-顶点邻接矩阵（基于面连接）。
  - `get.componentId(gB)`：连通组件 ID（基于面邻接）。
- **其他方法**：
  - `cat(dim, varargin)`：拼接多个 `grainBoundary` 对象，移除重复面。
  - `hasPhase` / `hasPhaseId`：检查相位。
  - `hasGrain`：检查晶粒。
  - `update(gB, grains)`：更新相位 ID。
  - `loadobj`：从 .mat 文件加载时的兼容性处理。

### 4. 与 `calcMeanDirection` 的联系

- `calcMeanDirection` 函数依赖 `gB.F` 和 `gB.allV`，计算平滑方向。
- 它使用 `gB.I_VF` 和 `gB.A_V`（依赖属性）来找到邻居顶点。
- 输出向量数量等于 `length(gB)`（即面数量），每个向量对应一个段的方向。
- 如果有 10 个顶点，面数量可能为 10（闭合晶界）或 9（线性），取决于拓扑。

### 5. 潜在问题和注意事项

- **未实现部分**：`get.V(gB)` 抛出错误，需实现。
- **性能**：邻接矩阵计算（如 `A_V`）使用稀疏矩阵，适合大规模数据。
- **兼容性**：`loadobj` 处理旧版本 MTEX 的兼容性。
- **使用场景**：常用于晶粒边界分析，如取向差、迁移模拟。

注意数据导入的reference frame

`convertEulerToSpatial` or the reverse

MTEX计算mP时，使用初始计算的平均值和后续截取微区进行分析的值相差比较大

| mP = 0.4-                                   | mP = 0.                                     |     |
| ------------------------------------------- | ------------------------------------------- | --- |
| 原始图片缺失：`image-20241120002623082.png` | 原始图片缺失：`image-20241120002832047.png` |     |
| 原始图片缺失：`image-20241119235748454.png` | 原始图片缺失：`image-20241119235807547.png` |     |
|                                             |                                             |     |
|                                             |                                             |     |

mP的计算，与微区选择存在关联性

---

MTEX EBSD数据处理，坏点填充，平滑处理

|                                             |                                             |     |
| ------------------------------------------- | ------------------------------------------- | --- |
| 原始图片缺失：`image-20241120155201512.png` | 原始图片缺失：`image-20241120160343635.png` |     |
|                                             |                                             |     |
|                                             |                                             |     |

s

---
