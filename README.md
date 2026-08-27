# Jay Liu — Personal Website

Astro 静态学术主页，用于展示研究方向、学术动态、论文、科研技术笔记、项目和个人简历。线上地址为 <https://jayliu.netlify.app>。

## 常用命令

```sh
npm install
npm run dev
npm run check
npm run preview
```

`npm run check` 会依次检查格式、Astro/TypeScript 模板类型、生成静态站点，并验证构建产物中的站内链接和统一界面契约。

## 项目结构

```text
src/
├── components/       # Header、Navigation、Footer
├── config/           # 站点导航、社交链接和公共配置
├── content/          # posts、publications 与 news 内容集合
├── layouts/          # 全站和文档布局
├── lib/              # 文档、项目的排序与列表数据转换
├── pages/            # 学术首页、论文、文档、项目和动态详情路由
└── styles/           # 主题、共享组件、Portfolio 与响应式样式
archive/hexo-source/  # 旧 Hexo 源稿，仅供迁移追溯
public/               # favicon 和公开下载的简历 PDF
resume/               # 本地私有 LaTeX 简历目录；整体不进入 Git
```

## 新增文章

在 `src/content/posts/` 新建 Markdown 文件。文件名会成为 `/posts/<文件名>` 路由。

```yaml
---
title: '文章标题'
description: '用于列表和 SEO 的摘要'
pubDate: 2026-07-20
author: 'Jay Liu'
tags: ['research', 'microscopy']
image:
  url: 'https://example.com/cover.webp'
  alt: '封面图说明'
---
```

`title` 和 `pubDate` 必填；其余字段可选。字段由 `src/content.config.ts` 验证，分类规则集中在 `src/lib/posts.ts`。

## 维护项目列表

Projects 页面展示 GitHub 公开仓库的静态快照，数据集中维护在 `src/lib/projects.ts`。每个条目包含仓库名、展示标题、README 摘要、主要语言、标签和 GitHub URL；卡片直接打开对应仓库，不生成站内项目详情页。

新增或调整项目时，应同步更新数组顺序与 `scripts/check-ui-contract.mjs` 中的预期仓库链接。页面构建期间不会调用 GitHub API。

## 学术信息

- 个人介绍、研究兴趣和教育经历集中在 `src/config/site.ts` 的 `academicProfile`。
- 论文位于 `src/content/publications/`，自动生成首页代表性论文和 `/publications/` 年份索引。
- 学术动态位于 `src/content/news/`，按日期倒序显示在首页。
- 头像当前使用可替换占位区，后续可改为 `public/` 下的公开图片。

## 简历与部署

- 对外下载文件固定为 `public/resume-en.pdf` 和 `public/resume-zh_CN.pdf`。
- `resume/` 是本地私有目录，包含 LaTeX 源文件、字体和构建产物，整个目录不会进入 Git。
- 更新简历后，将最终 PDF 复制到 `public/`，再运行 `npm run check`。
- Netlify 使用 `npm run build` 构建，发布目录为 `dist/`。
