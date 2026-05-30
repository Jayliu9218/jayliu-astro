---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Windows 任务计划程序开关机设定'
author: 'Jay Liu'
description: 'Windows 任务计划程序设定开机关机 解决办法 原因 想设置自动开机，查找到 [告别手动开机！Windows 10自动开机设置全攻略，轻松一步开启高效工作生活！](https://www.oryoy.com/news/gaobies...'
pubDate: 2024-01-01
tags: ['Windows', 'automation', 'system']
---
# Windows 任务计划程序设定开机关机 解决办法

## 原因

想设置自动开机，查找到 [告别手动开机！Windows 10自动开机设置全攻略，轻松一步开启高效工作生活！](https://www.oryoy.com/news/gao-bie-shou-dong-kai-ji-windows-10-zi-dong-kai-ji-she-zhi-quan-gong-lve-qing-song-yi-bu-kai-qi-gao.html)，跟着里面的设置进行，其中一步为 `在程序/脚本设置中，选择“浏览”，找到并选择Windows系统自带的“shutdown”程序，参数为“/s /t 0”，表示立即关机，点击“下一步”。`，显然，这一步引入关机操作，并且没有延时，即造成“开机即关机”死循环。

## 解决思路

首先因为数据都在，所以不能直接重装，考虑绕过这个策略。

此外，使用微PE进入安全模式后，删除了 `C:\Windows\System32\Tasks` 对应的任务，但是并不起作用，后来验证是缓存到了注册表的 `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Schedule\TaskCache\Tree`中

### 1 安全模式禁用 `Task Scheduler`

先禁用整个 Task Scheduler 服务。

1. 在微PE里进入注册表编辑器（regedit）。

2. 加载系统注册表：

   - 选中 `HKEY_LOCAL_MACHINE` → 文件 → 加载配置单元
   - 打开 `C:\Windows\System32\config\SYSTEM`，加载为 `OfflineSystem`。

3. 找到：

   ```bash
   HKEY_LOCAL_MACHINE\OfflineSystem\ControlSet001\Services\Schedule
   ```

   把 `Start` 值改为 `4` （禁用）。

4. 卸载配置单元，重启。

### 2 删除缓存的注册表

位置在 `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Schedule\TaskCache\Tree`

### 3 重启恢复 `Task Scheduler`

跟1类似，反过来操作即可。





# wsl 更新失败

在 windows功能 关闭wsl

重启开启wsl
