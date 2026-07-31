# QUSEIT 个人版官网

QUSEIT 个人版的官方网站源代码。

## 项目简介

QUSEIT 是一个面向知识工作者的 AI Agent 发布平台。个人版专注于让个人创作者、专家、独立开发者把自己的专业知识快速封装为可独立运行的 AI 智能体，并一键发布为独立 App 与 API，供他人使用。

## 网站内容

本仓库是 QUSEIT 个人版的对外宣传站点，包含：

- **首页 Hero**：核心价值主张 ——「把你的知识变成 AI 智能体」
- **三步发布**：创建 Agent → 一键发布 → 分享给他人
- **适用人群**：面向知识工作者、专家、独立创作者
- **产品特性**：介绍平台核心能力
- **联系我们**：合作与体验入口

## 技术栈

- 纯静态站点，无构建依赖
- HTML5 + 原生 CSS + 原生 JavaScript
- 国际化：中英文双语切换（见 `i18n.js`）
- 字体：Noto Serif SC、Noto Sans SC、IBM Plex Mono（通过 Google Fonts 加载）

## 目录结构

```
.
├── index.html      # 站点入口
├── styles.css      # 全局样式
├── main.js         # 交互逻辑
├── i18n.js         # 中英文文案
├── logo.svg        # 站点 Logo
└── asset/
    └── hero.jpg    # Hero 区块配图
```

## 本地预览

直接用浏览器打开 `index.html` 即可，或在本地启动一个静态服务：

```bash
# Python 3
python -m http.server 8080

# Node.js
npx serve .
```

随后访问 `http://localhost:8080`。

## 体验入口

- 平台体验：<https://agent.quseit.com>

## License

© QUSEIT. All rights reserved.
