# Jay Liu — Personal Website

Astro 静态个人主页，用于发布科研技术笔记、项目索引和个人简历。线上地址为 <https://jayliu.netlify.app>。

## 常用命令

```sh
npm install
npm run dev
npm run check
npm run preview
```

`npm run check` 会依次检查格式、Astro/TypeScript 模板类型、生成静态站点并验证构建产物中的站内链接。

## 项目结构

```text
src/
├── components/       # Header、Navigation、Footer
├── config/           # 站点导航、社交链接和公共配置
├── content/posts/    # 当前发布的 Markdown 文章
├── layouts/          # 全站和文章布局
├── lib/              # 文章排序、分类与日期格式化
├── pages/            # 首页、Blog、About 和动态文章路由
└── styles/           # 主题、基础、站点、Portfolio 与响应式样式
archive/hexo-source/  # 旧 Hexo 源稿，仅供迁移追溯
public/               # favicon 和公开下载的简历 PDF
resume/               # 本地 LaTeX 简历源文件；中间产物被忽略
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

## 简历与部署

- 对外下载文件固定为 `public/resume-en.pdf` 和 `public/resume-zh_CN.pdf`。
- `resume/` 中保留 LaTeX 源文件和字体，本地构建产生的 PDF、日志和辅助文件不会进入 Git。
- 更新简历后，将最终 PDF 复制到 `public/`，再运行 `npm run check`。
- Netlify 使用 `npm run build` 构建，发布目录为 `dist/`。
