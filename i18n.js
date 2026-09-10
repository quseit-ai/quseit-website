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
    'nav.enterprise': 'Enterprise Agent',

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

    'aud.title': "Who's Using QUSEIT<br><span class=\"sec-sub\">Anyone who wants to productize their knowledge and skills</span>",
    'a1.h3': 'Teachers / Trainers',
    'a1.desc': 'Turn teaching experience into an AI TA — answering questions, grading homework, and planning study 24/7.',
    'a1.chip': 'Math Q&A Assistant',
    'a2.h3': 'Lawyers / Consultants',
    'a2.desc': 'Turn expertise into an AI advisor — preliminary legal analysis, contract review, and consulting Q&A.',
    'a2.chip': 'Contract Review Assistant',
    'a3.h3': 'Content Creators',
    'a3.desc': 'Turn creative skills into AI tools — auto copywriting, article polishing, multi-platform adaptation.',
    'a3.chip': 'Copywriting Assistant',
    'a4.h3': 'Developers / Engineers',
    'a4.desc': 'Turn technical solutions into AI agents — code review, documentation, and technical Q&A.',
    'a4.chip': 'Code Review Assistant',

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

    // ===== 下载页(download.html) =====
    'dl.meta.title': 'Download QBuilder — Desktop Builder for AI Agents',
    'dl.meta.desc': 'Download QBuilder to your computer and build AI agents locally. Available for Windows, Linux, and macOS.',
    'dl.kicker': '<span class="kicker-dot"></span>QBUILDER · DESKTOP BUILDER FOR AGENTS',
    'dl.title1': 'Build Your Agents',
    'dl.title2': 'Right on Your',
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
    'nav.enterprise': '企业智能体',

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

    'aud.title': '谁在用 QUSEIT<br><span class="sec-sub">任何想把知识和技能产品化的人</span>',
    'a1.h3': '教师 / 培训师',
    'a1.desc': '把教学经验变成 AI 助教,24 小时为学生答疑、批改作业、制定学习计划。',
    'a1.chip': '数学答疑助手',
    'a2.h3': '律师 / 咨询师',
    'a2.desc': '把专业知识变成 AI 顾问,为客户提供初步法律分析、合同审查、咨询问答。',
    'a2.chip': '合同审查助手',
    'a3.h3': '内容创作者',
    'a3.desc': '把创作能力变成 AI 工具,自动生成文案、润色文章、适配多平台内容。',
    'a3.chip': '文案创作助手',
    'a4.h3': '开发者 / 工程师',
    'a4.desc': '把技术方案变成 AI 智能体,辅助代码审查、文档编写、技术问答。',
    'a4.chip': '代码审查助手',

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

    // ===== 下载页(download.html) =====
    'dl.meta.title': '下载 QBuilder — 桌面端智能体构建工具',
    'dl.meta.desc': '把 QBuilder 桌面端下载到你的电脑,本地构建你的 AI 智能体。支持 Windows / Linux / macOS。',
    'dl.kicker': '<span class="kicker-dot"></span>QBUILDER · DESKTOP BUILDER FOR AGENTS',
    'dl.title1': '把智能体构建',
    'dl.title2': '搬到你的',
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
    return lang === 'en' ? en['meta.title'] : zh['meta.title'];
  }
  function pickMetaDesc() {
    if (pageKey === 'dl') return lang === 'en' ? en['dl.meta.desc'] : zh['dl.meta.desc'];
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

  if (lang === 'en') apply('en');
})();
