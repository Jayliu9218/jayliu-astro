---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Conda 基本命令'
author: 'Jay Liu'
description: 'Conda 1. Conda 的基本命令包括环境管理（ conda create, conda activate, conda deactivate, conda env remove）、包管理（conda install, conda...'
pubDate: 2024-01-01
tags: ['conda', 'Python', 'commands']
---
# Conda

1. Conda 的基本命令包括环境管理（

   `conda create`, `conda activate`, `conda deactivate`, `conda env remove`）、包管理（`conda install`, `conda remove`, `conda update`, `conda list`）和系统维护（`conda clean`），用于快速创建、激活、切换和删除环境，以及安装、更新、列出和移除包，还有清理缓存等操作，是管理 Python 和其他语言项目的核心工具。 

   环境管理 (Environment Management)

   - **创建环境**: `conda create --name myenv python=3.9` (创建名为 `myenv` 且包含 Python 3.9 的环境).
   - **激活环境**: `conda activate myenv` (进入名为 `myenv` 的环境).
   - **退出环境**: `conda deactivate` (从当前环境退出).
   - **列出环境**: `conda env list` or `conda info --envs`.
   - **删除环境**: `conda env remove --name myenv`. 

   - 

   包管理 (Package Management)

   - **安装包**: `conda install <package_name>` (例如: `conda install numpy`).
   - **安装指定版本**: `conda install numpy=1.20`.
   - **更新包**: `conda update <package_name>` (更新指定包).
   - **更新所有包**: `conda update --all`.
   - **卸载包**: `conda remove <package_name>`.
   - **列出所有包**: `conda list` (列出当前环境已安装的包). 

   - 

   系统与配置 (System & Configuration)

   - **查看 Conda 版本**: `conda --version`.
   - **查看帮助**: `conda --help` or `conda <command> --help`.
   - **清理缓存**:
     - `conda clean --packages` (删除未使用的包).
     - `conda clean --tarballs` (删除下载的 tar 包).
     - `conda clean --all` (删除所有缓存).
   - **添加/切换镜像源**: `conda config --add channels <mirror_url>` (例如清华源: `conda config --add channels pypi.tuna.tsinghua.edu.cn`). 

   - 

   使用场景示例

   1. **创建一个新环境**并安装 `pandas` 和 `matplotlib`:
      `conda create -n data_analysis python=3.10 pandas matplotlib`
   2. **激活**该环境: `conda activate data_analysis`
   3. **安装** `seaborn`: `conda install seaborn`
   4. **查看**所有包: `conda list`
   5. **卸载** `matplotlib`: `conda remove matplotlib`
   6. **退出**环境: `conda deactivate`
   7. **删除**环境: `conda env remove -n data_analysis`.
