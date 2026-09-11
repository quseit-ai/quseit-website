// ========== QUSEIT 创作者官网国际化（默认简体中文，可切换英文） ==========
//
// 架构：zh 和 en 在此文件中明确声明并互为镜像。
// 任何新增 key 必须 zh + en 同时存在。
// HTML 模板通过 [data-i18n] / [data-i18n-alt] / [data-i18n-attr] 引用 key。
// 运行时 zh 字典不再从 DOM 反向抓取 —— 这是为了支持多页面共享 i18n.js。
//
(function () {
  const en = {
    'meta.title': 'QUSEIT — AI Publishing Platform for Knowledge Workers',
    'meta.desc': 'Turn your knowledge into AI agents. Create an agent, publish it as a standalone app and API with one click, and let anyone use your expertise and skills.',

    'brand.tag': 'Creator',
    'nav.how': 'How It Works',
    'nav.audience': 'Who Uses It',
    'nav.features': 'Features',
    'nav.contact': 'Contact',
    'nav.docs': 'Docs',
    'nav.try': 'Start Building',
    'nav.enterprise': 'For FDEs',

    'hero.kicker': '<span class="kicker-dot"></span>AI AGENT PLATFORM FOR KNOWLEDGE WORKERS',
    'hero.title1': 'Turn Your Knowledge',
    'hero.title2': 'Into Your Own',
    'hero.title3': '<em>“AI Agent”</em>',
    'hero.sub': 'Create your AI agent and <strong>publish with one click</strong> as a standalone app and API,<br>so anyone can use your expertise and skills.',
    'hero.action1': 'Start Building',
    'hero.action2': 'See the 3 Steps <span class="arrow">→</span>',
    'hero.imgAlt': 'QUSEIT Creator Edition',
    'hero.caption': '<span class="mono">FIG.01</span> Your knowledge, open for business',

    'how.title': 'Publish Your AI Agent in 3 Steps<br><span class="sec-sub">From creation to sharing — under 5 minutes</span>',
    's1.h3': 'Create an Agent',
    's1.desc': 'Pick a skill template and configure your AI agent. Built-in professional scenarios, ready out of the box.',
    's1.foot': 'No code — configure through conversation',
    's2.h3': 'One-Click Publish',
    's2.desc': 'Auto-generates a Service Page chat interface and an OpenAI-compatible API. Zero deployment needed.',
    's2.foot': 'No ops — published means live',
    's3.h3': 'Share the Link',
    's3.desc': 'Showcase all your agents on your Storefront personal toolbox — one link to share with anyone.',
    's3.foot': 'Your knowledge starts working for you',

    'aud.title': "Who's Using QUSEIT<br><span class=\"sec-sub\">Anyone who turns their craft into an always-on service</span>",
    'a1.h3': 'Industry Consultants',
    'a1.desc': 'Turn legal, finance, or medical expertise into an AI advisor — first-pass analysis, document review, and 24/7 Q&A.',
    'a1.chip': 'Contract Review Agent',
    'a2.h3': 'Content Creators',
    'a2.desc': 'Turn creative skills into AI tools — auto copywriting, article polishing, and multi-platform adaptation.',
    'a2.chip': 'Copywriting Assistant',
    'a3.h3': 'Indie Developers',
    'a3.desc': 'Turn product ideas into AI agents — go from spec to a working, QA-checked prototype in days.',
    'a3.chip': 'Idea-to-Prototype',
    'a4.h3': 'Corporate Trainers',
    'a4.desc': 'Turn internal SOPs and playbooks into AI coaches — onboard new hires faster, scale expert knowledge.',
    'a4.chip': 'SOP Coach Agent',

    'feat.title': 'Product Features<br><span class="sec-sub">Designed for you at every step, from publishing to sharing</span>',
    'f1.label': 'PUBLISH & INTEGRATE',
    'f1.h3': 'Publish & Integrate',
    'f1.p': 'Your agent is more than a chat box — it is a capability usable in any way.',
    'f1.a': '<b>Service Page</b>A standalone chat page — anyone with the link can chat with your agent; password protection and visit stats supported',
    'f1.b': '<b>OpenAI-Compatible API</b>A standard API auto-generated — third-party tools like Cursor and ChatBox integrate your agent directly',
    'f1.foot': 'Published means live — zero deployment',
    'f2.label': 'PERSONAL BRANDING',
    'f2.h3': 'Personal Branding',
    'f2.p': 'All your agents converge into a personal homepage — a one-of-a-kind knowledge brand.',
    'f2.a': '<b>Storefront</b>Your personal AI toolbox, showcasing all agents like a Linktree; custom theme color, bio, and ordering',
    'f2.b': '<b>Theme Customization</b>5 theme colors to build your personal brand; custom display name, title, and avatar',
    'f2.foot': 'One link for all your expertise',

    'contact.title': 'Start Building Your<br><em>AI Agent</em>',
    'contact.sub': 'From zero to published in 5 minutes. Your knowledge deserves to be used by more people.',
    'contact.l1': '<b>Start Building</b>Visit agent.quseit.com and create your first agent for free',
    'contact.l2': '<b>Enterprise Deployment</b>Need a team edition or private deployment? See the enterprise edition',
    'contact.l3': '<b>Custom Skills</b>Tailor-made AI skills for your business scenarios',
    'ch1.label': 'WECHAT · CONSULTING',
    'ch1.desc': 'Search to add, and mention “QUSEIT”',
    'ch2.label': 'EMAIL · CONTACT',
    'ch2.desc': 'Enterprise deployment, custom skills, partnerships — reply within 1 business day',
    'ch3.label': 'COMPANY · ABOUT US',
    'ch3.desc': 'Beijing Quseit Information Technology Co., Ltd.<br>A1839, 1/F, Building 1, Yard 2, Yongcheng North Road, Haidian, Beijing',
    'ch.btn': 'Copy',
    'ch.tip': 'Try it yourself at agent.quseit.com; for partnerships, reach us via the channels above',

    'footer.slogan': 'AI agent platform for knowledge workers',

    // ===== Nav: Learn dropdown =====
    'nav.learn': 'Learn',
    'nav.learn.tutorials': 'Tutorials',
    'nav.learn.courses': 'Courses',
    'nav.learn.use-cases': 'Use Cases',

    // ===== learn/tutorials.html =====
    'learn.tut.meta.title': 'Tutorials — QUSEIT Academy',
    'learn.tut.meta.desc': 'Step-by-step guides for building, testing, and publishing AI agents on QUSEIT.',
    'learn.tut.h1': 'Tutorials',
    'learn.tut.sub': 'Hands-on guides covering QUSEIT from your first skill to enterprise deployment.',

    // 6 categories
    'learn.tut.tag.1': 'Getting Started',
    'learn.tut.tag.2': 'QBuilder Desktop',
    'learn.tut.tag.3': 'Skill Building',
    'learn.tut.tag.4': 'AI Fluency',
    'learn.tut.tag.5': 'Deliver & Launch',
    'learn.tut.tag.6': 'More Ways to Use QUSEIT',

    // category 1 — Getting Started (2 cards)
    'learn.tut.c1.1.t': 'Create your first agent in 5 minutes',
    'learn.tut.c1.1.d': 'Walk through the wizard, configure a simple Q&A skill, and publish a shareable link.',
    'learn.tut.c1.1.l': 'Beginner',
    'learn.tut.c1.1.m': '5 min read',
    'learn.tut.c1.2.t': 'Tour the QUSEIT dashboard',
    'learn.tut.c1.2.d': 'A guided tour of the chat surface, skill list, model switcher, and the publish button.',
    'learn.tut.c1.2.l': 'Beginner',
    'learn.tut.c1.2.m': '4 min read',

    // category 2 — QBuilder Desktop
    'learn.tut.c2.1.t': 'Install QBuilder on Windows',
    'learn.tut.c2.1.d': 'Download the desktop build, configure your provider, and connect it to your QUSEIT account.',
    'learn.tut.c2.1.l': 'Beginner',
    'learn.tut.c2.1.m': '6 min read',
    'learn.tut.c2.2.t': 'Build offline with a local model',
    'learn.tut.c2.2.d': 'Wire up a local LLM endpoint so you can iterate on skills without burning API credits.',
    'learn.tut.c2.2.l': 'Intermediate',
    'learn.tut.c2.2.m': '8 min read',

    // category 3 — Skill Building
    'learn.tut.c3.1.t': 'Generate a skill from your existing documents',
    'learn.tut.c3.1.d': 'Drop in PDFs or markdown and let the doc-to-skill pipeline extract reusable knowledge.',
    'learn.tut.c3.1.l': 'Intermediate',
    'learn.tut.c3.1.m': '10 min read',
    'learn.tut.c3.2.t': 'Build a skill via the YAO framework',
    'learn.tut.c3.2.d': 'Author a skill from scratch using QUSEIT\'s composition framework — inputs, tools, prompts.',
    'learn.tut.c3.2.l': 'Advanced',
    'learn.tut.c3.2.m': '15 min read',

    // category 4 — AI Fluency
    'learn.tut.c4.1.t': 'Add automated QA to your agent',
    'learn.tut.c4.1.d': 'Set up test cases, compare outputs, and run regression checks before each publish.',
    'learn.tut.c4.1.l': 'Intermediate',
    'learn.tut.c4.1.m': '9 min read',
    'learn.tut.c4.2.t': 'Run a content factory pipeline',
    'learn.tut.c4.2.d': 'Configure batch generation, quotas, and multi-platform formatting for one-to-many output.',
    'learn.tut.c4.2.l': 'Advanced',
    'learn.tut.c4.2.m': '12 min read',

    // category 5 — Deliver & Launch
    'learn.tut.c5.1.t': 'Publish a Service Page for your agent',
    'learn.tut.c5.1.d': 'Generate a standalone chat page with password protection, stats, and a custom subdomain.',
    'learn.tut.c5.1.l': 'Beginner',
    'learn.tut.c5.1.m': '6 min read',
    'learn.tut.c5.2.t': 'Wire your agent into a real workflow',
    'learn.tut.c5.2.d': 'Use the OpenAI-compatible API to plug your agent into Cursor, Slack, or your own backend.',
    'learn.tut.c5.2.l': 'Intermediate',
    'learn.tut.c5.2.m': '11 min read',

    // category 6 — More Ways
    'learn.tut.c6.1.t': 'Five industry playbooks',
    'learn.tut.c6.1.d': 'Reference architectures for teachers, consultants, creators, developers, and trainers.',
    'learn.tut.c6.1.l': 'Intermediate',
    'learn.tut.c6.1.m': '14 min read',
    'learn.tut.c6.2.t': 'Run a team on QUSEIT Enterprise',
    'learn.tut.c6.2.d': 'Provision seats, share skills across a workspace, and enforce brand and policy guardrails.',
    'learn.tut.c6.2.l': 'Advanced',
    'learn.tut.c6.2.m': '13 min read',

    // ===== 下载页(download.html) =====
    'dl.meta.title': 'Download QBuilder — Desktop Builder for AI Agents',
    'dl.meta.desc': 'Download QBuilder to your computer and build AI agents locally. Available for Windows, Linux, and macOS.',
    'dl.kicker': '<span class="kicker-dot"></span>QBUILDER · DESKTOP BUILDER FOR AGENTS',
    'dl.title1': 'Build Your Agents',
    'dl.title2': 'Right on Your <em>Desktop</em>',
    'dl.title3': '<em>“Desktop”</em>',
    'dl.sub': 'QBuilder is the desktop builder from QUSEIT.<br>Build, debug, and publish your AI agents locally — no browser needed.',
    'dl.action1': 'Download Desktop <span class="arrow">↓</span>',
    'dl.action2': 'See Workflows <span class="arrow">→</span>',
    'dl.imgAlt': 'QBuilder desktop screenshot',
    'dl.caption': '<span class="mono">FIG.01</span> QBuilder desktop · dashboard',

    'dl.wf.title': 'Key Workflows<br><span class="sec-sub">From a single skill to a full project, QBuilder has you covered</span>',
    'dl.wf.sub': 'From a single skill to a full project, QBuilder has you covered',
    'dl.wf.s1.h3': 'Skill Building',
    'dl.wf.s1.desc': 'Build an executable AI skill from zero to one, with built-in templates and visual orchestration.',
    'dl.wf.s1.foot': 'Wizard · Doc-to-skill · Framework-ready',
    'dl.wf.s2.h3': 'Software Project',
    'dl.wf.s2.desc': 'Compose multiple skills into a full project workflow that crosses files and steps.',
    'dl.wf.s2.foot': 'Multi-step · Context chaining',
    'dl.wf.s3.h3': 'Quality Assurance',
    'dl.wf.s3.desc': 'Run test cases automatically, compare outputs, and regression-check before delivery.',
    'dl.wf.s3.foot': 'Auto-test · Regression check',
    'dl.wf.s4.h3': 'Content Factory',
    'dl.wf.s4.desc': 'Batch generation, quota management, and multi-channel adaptation turn one skill into production-grade output.',
    'dl.wf.s4.foot': 'Batch · Multi-channel',
    'dl.wf.s5.h3': 'Deliver & Launch',
    'dl.wf.s5.desc': 'Publish to QUSEIT in one click — get a shareable link without any deployment or ops.',
    'dl.wf.s5.foot': 'Publish equals live · Link equals service',

    'dl.pl.title': 'Download for Desktop<br><span class="sec-sub">Windows is live · Linux and macOS are on the way</span>',
    'dl.pl.sub': 'Windows is live · Linux and macOS are on the way',
    'dl.pl.win.h3': 'Windows',
    'dl.pl.win.note': 'Windows 10 / 11 · x64',
    'dl.pl.win.btn': 'Download .zip',
    'dl.pl.win.foot': 'v1.0.0 · 2026-09',
    'dl.pl.lin.h3': 'Linux',
    'dl.pl.lin.note': 'Ubuntu / Debian · x64',
    'dl.pl.lin.btn': 'Coming Soon',
    'dl.pl.lin.foot': 'COMING SOON',
    'dl.pl.mac.h3': 'macOS',
    'dl.pl.mac.note': 'macOS 12+ · Apple Silicon / Intel',
    'dl.pl.mac.btn': 'Coming Soon',
    'dl.pl.mac.foot': 'COMING SOON',
    'dl.pl.tip': 'For enterprise deployment or bulk licensing, contact <a href="mailto:ceo@quseit.com">ceo@quseit.com</a>.'
  };

  const zh = {
    'meta.title': 'QUSEIT — AI 发布平台 · 知识工作者的 AI 智能体平台',
    'meta.desc': '把你的知识变成 AI 智能体。创建 Agent,一键发布为独立 App 和 API,让任何人都能使用你的专业知识和技能。',

    'brand.tag': '创作者',
    'nav.how': '发布流程',
    'nav.audience': '适用人群',
    'nav.features': '产品特性',
    'nav.contact': '联系我们',
    'nav.docs': '开发文档',
    'nav.try': '立即构建',
    'nav.enterprise': '面向 FDE',

    'hero.kicker': '<span class="kicker-dot"></span>AI AGENT PLATFORM · 知识工作者的 AI 发布平台',
    'hero.title1': '把你的知识',
    'hero.title2': '变成',
    'hero.title3': '<em>「AI 智能体」</em>',
    'hero.sub': '创建你的 AI 智能体,<strong>一键发布</strong>为独立 App 和 API,<br>让任何人都能使用你的专业知识和技能。',
    'hero.action1': '立即构建',
    'hero.action2': '了解发布流程 <span class="arrow">→</span>',
    'hero.imgAlt': 'QUSEIT 创作者',
    'hero.caption': '<span class="mono">FIG.01</span> 你的知识,即将上线营业',

    'how.title': '三步发布你的 AI 智能体<br><span class="sec-sub">从创建到分享,全程不到 5 分钟</span>',
    's1.h3': '创建 Agent',
    's1.desc': '选择技能模板,配置你的 AI 智能体。内置多种专业场景,开箱即用。',
    's1.foot': '无需代码,对话式配置',
    's2.h3': '一键发布',
    's2.desc': '自动生成 Service Page 对话页面和 OpenAI 兼容 API,无需任何部署。',
    's2.foot': '零运维,发布即上线',
    's3.h3': '分享链接',
    's3.desc': '通过 Storefront 个人工具箱展示所有 Agent,一个链接分享给任何人。',
    's3.foot': '你的知识,开始为你工作',

    'aud.title': '谁在用 QUSEIT<br><span class="sec-sub">任何想把自己的一技之长变成 7×24 在线服务的人</span>',
    'a1.h3': '行业顾问 / 咨询师',
    'a1.desc': '把法律、财税、医疗等专业知识变成 AI 顾问,提供初步分析、文档审查和全天候答疑。',
    'a1.chip': '合同审查助手',
    'a2.h3': '内容创作者',
    'a2.desc': '把创作能力变成 AI 工具,自动生成文案、润色文章、适配多平台内容。',
    'a2.chip': '文案创作助手',
    'a3.h3': '独立开发者',
    'a3.desc': '把产品想法变成 AI 智能体,从需求到可用的、带 QA 的原型只需几天。',
    'a3.chip': '想法到原型',
    'a4.h3': '企业培训师',
    'a4.desc': '把内部 SOP 与业务手册变成 AI 教练,加速新员工上手,规模化传递专家经验。',
    'a4.chip': 'SOP 教练助手',

    'feat.title': '产品特性<br><span class="sec-sub">从发布到分享,每个环节都为你设计</span>',
    'f1.label': 'PUBLISH & INTEGRATE',
    'f1.h3': '发布与集成',
    'f1.p': '你的 Agent 不只是一个对话框,而是可被任何方式使用的能力。',
    'f1.a': '<b>Service Page</b>独立对话页面,任何人打开链接就能和你的 Agent 聊天;支持密码保护、访问统计',
    'f1.b': '<b>OpenAI 兼容 API</b>自动生成标准 API,Cursor、ChatBox 等第三方工具可直接集成你的 Agent',
    'f1.foot': '发布即上线,无需任何部署',
    'f2.label': 'PERSONAL BRANDING',
    'f2.h3': '个人品牌',
    'f2.p': '让所有 Agent 汇聚成你的个人主页,成为独一无二的知识品牌。',
    'f2.a': '<b>Storefront</b>个人 AI 工具箱,像 Linktree 一样展示你所有的 Agent;自定义主题色、简介、排序',
    'f2.b': '<b>主题定制</b>5 种主题色可选,打造个人品牌;自定义展示名、头衔、头像',
    'f2.foot': '一个链接,装下你的全部专业',

    'contact.title': '开始创建你的<br><em>AI 智能体</em>',
    'contact.sub': '5 分钟,从零到发布。你的知识,值得被更多人使用。',
    'contact.l1': '<b>立即构建</b>访问 agent.quseit.com,免费创建你的第一个 Agent',
    'contact.l2': '<b>企业部署</b>需要团队版 / 私有化部署?查看企业版方案',
    'contact.l3': '<b>技能定制</b>按你的业务场景定制专属 AI 技能',
    'ch1.label': 'WECHAT · 微信咨询',
    'ch1.desc': '搜索添加,备注「QUSEIT」',
    'ch2.label': 'EMAIL · 邮件沟通',
    'ch2.desc': '企业部署、技能定制、合作咨询,1 个工作日内回复',
    'ch3.label': 'COMPANY · 公司信息',
    'ch3.desc': '北京优趣天下信息技术有限公司<br>北京市海淀区永澄北路2号院1号楼一层A1839',
    'ch.btn': '复制',
    'ch.tip': '个人体验请直接访问 agent.quseit.com;合作咨询可通过以上方式联系',

    'footer.slogan': '知识工作者的 AI 智能体平台',

    // ===== Nav: Learn dropdown =====
    'nav.learn': '学习',
    'nav.learn.tutorials': '教程',
    'nav.learn.courses': '课程',
    'nav.learn.use-cases': '用例',

    // ===== learn/tutorials.html =====
    'learn.tut.meta.title': '教程 — QUSEIT 学院',
    'learn.tut.meta.desc': '从创建到发布,QUSEIT 智能体构建的实战指南。',
    'learn.tut.h1': '教程',
    'learn.tut.sub': '从你的第一个技能到企业级部署,带你跑完 QUSEIT 全流程。',

    // 6 个分类
    'learn.tut.tag.1': '创作者入门',
    'learn.tut.tag.2': 'QBuilder 桌面端',
    'learn.tut.tag.3': '技能构建',
    'learn.tut.tag.4': 'AI 进阶',
    'learn.tut.tag.5': '交付发布',
    'learn.tut.tag.6': '更多玩法',

    // 分类 1 — 创作者入门
    'learn.tut.c1.1.t': '5 分钟创建你的第一个智能体',
    'learn.tut.c1.1.d': '走完新手向导,配置一个简单的问答技能,并发布可分享的链接。',
    'learn.tut.c1.1.l': '入门',
    'learn.tut.c1.1.m': '5 分钟阅读',
    'learn.tut.c1.2.t': 'QUSEIT 仪表盘导览',
    'learn.tut.c1.2.d': '带你认识对话界面、技能列表、模型切换器和发布按钮。',
    'learn.tut.c1.2.l': '入门',
    'learn.tut.c1.2.m': '4 分钟阅读',

    // 分类 2 — QBuilder 桌面端
    'learn.tut.c2.1.t': '在 Windows 上安装 QBuilder',
    'learn.tut.c2.1.d': '下载桌面端,配置你的模型服务,并连接到 QUSEIT 账号。',
    'learn.tut.c2.1.l': '入门',
    'learn.tut.c2.1.m': '6 分钟阅读',
    'learn.tut.c2.2.t': '使用本地模型离线构建',
    'learn.tut.c2.2.d': '接入本地大语言模型端点,无需消耗 API 额度即可调试技能。',
    'learn.tut.c2.2.l': '进阶',
    'learn.tut.c2.2.m': '8 分钟阅读',

    // 分类 3 — 技能构建
    'learn.tut.c3.1.t': '从已有文档生成技能',
    'learn.tut.c3.1.d': '丢入 PDF 或 Markdown,文档转技能流水线自动抽取可复用的知识。',
    'learn.tut.c3.1.l': '进阶',
    'learn.tut.c3.1.m': '10 分钟阅读',
    'learn.tut.c3.2.t': '用 YAO 框架从零构建技能',
    'learn.tut.c3.2.d': '使用 QUSEIT 组合框架 —— 输入、工具、提示词 —— 亲手写一个技能。',
    'learn.tut.c3.2.l': '高级',
    'learn.tut.c3.2.m': '15 分钟阅读',

    // 分类 4 — AI 进阶
    'learn.tut.c4.1.t': '为你的智能体加自动化 QA',
    'learn.tut.c4.1.d': '设置测试用例、对比输出,在每次发布前自动跑回归校验。',
    'learn.tut.c4.1.l': '进阶',
    'learn.tut.c4.1.m': '9 分钟阅读',
    'learn.tut.c4.2.t': '运行内容工厂流水线',
    'learn.tut.c4.2.d': '配置批处理、配额管理、多平台格式适配,把单一技能放大为产线。',
    'learn.tut.c4.2.l': '高级',
    'learn.tut.c4.2.m': '12 分钟阅读',

    // 分类 5 — 交付发布
    'learn.tut.c5.1.t': '为你的智能体发布 Service Page',
    'learn.tut.c5.1.d': '生成独立的对话页面,支持密码保护、访问统计和自定义子域名。',
    'learn.tut.c5.1.l': '入门',
    'learn.tut.c5.1.m': '6 分钟阅读',
    'learn.tut.c5.2.t': '把智能体接到真实业务流',
    'learn.tut.c5.2.d': '用 OpenAI 兼容 API 把智能体接入 Cursor、Slack 或你自己的后端。',
    'learn.tut.c5.2.l': '进阶',
    'learn.tut.c5.2.m': '11 分钟阅读',

    // 分类 6 — 更多玩法
    'learn.tut.c6.1.t': '五大行业实战手册',
    'learn.tut.c6.1.d': '面向教师、咨询师、内容创作者、开发者、培训师的可参考架构。',
    'learn.tut.c6.1.l': '进阶',
    'learn.tut.c6.1.m': '14 分钟阅读',
    'learn.tut.c6.2.t': '在 QUSEIT 企业版上运营团队',
    'learn.tut.c6.2.d': '分配席位、跨工作空间共享技能,统一品牌与合规策略。',
    'learn.tut.c6.2.l': '高级',
    'learn.tut.c6.2.m': '13 分钟阅读',

    // ===== 下载页(download.html) =====
    'dl.meta.title': '下载 QBuilder — 桌面端智能体构建工具',
    'dl.meta.desc': '把 QBuilder 桌面端下载到你的电脑,本地构建你的 AI 智能体。支持 Windows / Linux / macOS。',
    'dl.kicker': '<span class="kicker-dot"></span>QBUILDER · DESKTOP BUILDER FOR AGENTS',
    'dl.title1': '桌面端智能体构建工具',
    'dl.title2': '<em>QBuilder</em> 正式发布',
    'dl.title3': '<em>「桌面端」</em>',
    'dl.sub': 'QBuilder 是 QUSEIT 推出的桌面端智能体构建工具。<br>本地构建、调试、发布你的 AI 智能体,无需打开浏览器。',
    'dl.action1': '下载桌面端 <span class="arrow">↓</span>',
    'dl.action2': '了解核心工作流 <span class="arrow">→</span>',
    'dl.imgAlt': 'QBuilder 桌面端截图',
    'dl.caption': '<span class="mono">FIG.01</span> QBuilder 桌面端 · 仪表盘',

    'dl.wf.title': '关键工作流<br><span class="sec-sub">从单个技能到完整项目,QBuilder 陪你跑完每一步</span>',
    'dl.wf.sub': '从单个技能到完整项目,QBuilder 陪你跑完每一步',
    'dl.wf.s1.h3': '技能构建',
    'dl.wf.s1.desc': '从 0 到 1 搭建一个可执行的 AI 技能,内置多种专业模板与可视化编排。',
    'dl.wf.s1.foot': '向导式 · 从文档生成 · 框架对接',
    'dl.wf.s2.h3': '软件项目',
    'dl.wf.s2.desc': '把多个技能组装成完整的项目工作流,跨文件、跨步骤协同完成复杂任务。',
    'dl.wf.s2.foot': '多步骤编排 · 上下文串联',
    'dl.wf.s3.h3': '质量保障',
    'dl.wf.s3.desc': '自动跑测试用例、对比输出、回归校验,让你的智能体在交付前先通过 QA。',
    'dl.wf.s3.foot': '自动化测试 · 回归校验',
    'dl.wf.s4.h3': '内容工厂',
    'dl.wf.s4.desc': '批量生成、配额管理、多平台适配,把单一技能放大为可量产的内容生产线。',
    'dl.wf.s4.foot': '批处理 · 多渠道分发',
    'dl.wf.s5.h3': '交付上线',
    'dl.wf.s5.desc': '一键发布到 QUSEIT 平台,生成可分享链接,无需任何部署和运维。',
    'dl.wf.s5.foot': '发布即上线 · 链接即服务',

    'dl.pl.title': '下载桌面端<br><span class="sec-sub">Windows 正式版已上线 · Linux 与 macOS 正在路上</span>',
    'dl.pl.sub': 'Windows 正式版已上线 · Linux 与 macOS 正在路上',
    'dl.pl.win.h3': 'Windows',
    'dl.pl.win.note': 'Windows 10 / 11 · x64',
    'dl.pl.win.btn': '下载 .zip',
    'dl.pl.win.foot': 'v1.0.0 · 2026-09',
    'dl.pl.lin.h3': 'Linux',
    'dl.pl.lin.note': 'Ubuntu / Debian · x64',
    'dl.pl.lin.btn': '即将推出',
    'dl.pl.lin.foot': 'COMING SOON',
    'dl.pl.mac.h3': 'macOS',
    'dl.pl.mac.note': 'macOS 12+ · Apple Silicon / Intel',
    'dl.pl.mac.btn': '即将推出',
    'dl.pl.mac.foot': 'COMING SOON',
    'dl.pl.tip': '如需企业版部署或团队批量授权,请联系 <a href="mailto:ceo@quseit.com">ceo@quseit.com</a>。'
  };

  // ===== 复制按钮提示语 =====
  const tips = {
    wechat: {
      zh: '微信号 yhc-startup 已复制,去微信添加好友吧',
      en: 'WeChat ID yhc-startup copied — add us on WeChat!'
    },
    email: {
      zh: '邮箱 ceo@quseit.com 已复制,快发邮件给我吧',
      en: 'Email ceo@quseit.com copied — drop us a message!'
    }
  };

  const copiedLabel = { zh: '已复制 ✓', en: 'Copied ✓' };

  // ===== 引擎 =====
  const els = document.querySelectorAll('[data-i18n]');
  const altEls = document.querySelectorAll('[data-i18n-alt]');
  const attrEls = document.querySelectorAll('[data-i18n-attr]');
  const titleEl = document.querySelector('title[data-i18n]') || document.querySelector('title');
  const metaDesc = document.querySelector('meta[name="description"]');
  const btn = document.getElementById('langSwitch');

  // 抓首屏初始 zh 文案(meta + title,用于 fallback)
  const initZhTitle = titleEl ? titleEl.textContent : '';
  const initZhDesc = metaDesc ? metaDesc.content : '';
  const initPageMetaTitle = document.querySelector('meta[property="page-meta-title"]');
  const initPageTitle = initPageMetaTitle ? initPageMetaTitle.getAttribute('content') : null;

  let lang = localStorage.getItem('qagent-lang') || 'zh';

  // 单页专属 meta.title:download 页有 'dl.meta.title',主页有 'meta.title'
  // 优先匹配 page-specific,fallback 到通用 'meta.title'
  const pageKey = initPageTitle; // download.html 通过 <meta property="page-meta-title" content="dl"> 标注
  function pickMetaTitle() {
    if (pageKey === 'dl') return lang === 'en' ? en['dl.meta.title'] : zh['dl.meta.title'];
    if (pageKey === 'learn') return lang === 'en' ? en['learn.tut.meta.title'] : zh['learn.tut.meta.title'];
    return lang === 'en' ? en['meta.title'] : zh['meta.title'];
  }
  function pickMetaDesc() {
    if (pageKey === 'dl') return lang === 'en' ? en['dl.meta.desc'] : zh['dl.meta.desc'];
    if (pageKey === 'learn') return lang === 'en' ? en['learn.tut.meta.desc'] : zh['learn.tut.meta.desc'];
    return lang === 'en' ? en['meta.desc'] : zh['meta.desc'];
  }

  function apply(l) {
    lang = l;
    document.documentElement.lang = l === 'en' ? 'en' : 'zh-CN';
    els.forEach(el => {
      const k = el.dataset.i18n;
      el.innerHTML = lang === 'en' ? (en[k] ?? zh[k]) : zh[k];
    });
    altEls.forEach(el => {
      const k = el.dataset.i18nAlt;
      el.alt = lang === 'en' ? (en[k] ?? '') : ''; // zh fallback:用当前已渲染的 alt
    });
    attrEls.forEach(el => {
      const k = el.dataset.i18nKey;
      const attr = el.dataset.i18nAttr;
      if (!attr || !k) return;
      el.setAttribute(attr, lang === 'en' ? (en[k] ?? zh[k]) : zh[k]);
    });
    if (titleEl) titleEl.textContent = pickMetaTitle();
    if (metaDesc) metaDesc.content = pickMetaDesc();
    btn.textContent = lang === 'en' ? '中文' : 'EN';
    localStorage.setItem('qagent-lang', lang);
    // notify main.js for image swap etc.
    window.dispatchEvent(new CustomEvent('quseit:lang', { detail: { lang } }));
  }

  btn.addEventListener('click', () => apply(lang === 'en' ? 'zh' : 'en'));

  // 供 main.js 使用的接口
  window.QI18N = {
    tip: key => tips[key][lang],
    copied: () => copiedLabel[lang],
    copyLabel: () => (lang === 'en' ? 'Copy' : '复制'),
    current: () => lang
  };

  // 暴露完整字典给页面级 JS(learn-page.js 等)使用
  // 注意:仅在浏览器环境暴露,不要在 server-side import 时被引用
  window._QDict = { en, zh };

  if (lang === 'en') apply('en');
})();
