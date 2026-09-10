// ========== QUSEIT 创作者官网国际化（默认简体中文，可切换英文） ==========
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
    'nav.try': 'Start',
    'nav.enterprise': 'Enterprise Agent',

    'hero.kicker': '<span class="kicker-dot"></span>AI AGENT PLATFORM FOR KNOWLEDGE WORKERS',
    'hero.title1': 'Turn Your Knowledge',
    'hero.title2': 'Into Your Own',
    'hero.title3': '<em>“AI Agent”</em>',
    'hero.sub': 'Create your AI agent and <strong>publish with one click</strong> as a standalone app and API,<br>so anyone can use your expertise and skills.',
    'hero.action1': 'Try It Now',
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
    'contact.l1': '<b>Try It Now</b>Visit agent.quseit.com and create your first agent for free',
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

    'footer.slogan': 'AI agent platform for knowledge workers'
  };

  // 复制按钮提示语
  const tips = {
    wechat: {
      zh: '微信号 yhc-startup 已复制，去微信添加好友吧',
      en: 'WeChat ID yhc-startup copied — add us on WeChat!'
    },
    email: {
      zh: '邮箱 ceo@quseit.com 已复制，快发邮件给我吧',
      en: 'Email ceo@quseit.com copied — drop us a message!'
    }
  };

  const copiedLabel = { zh: '已复制 ✓', en: 'Copied ✓' };

  // ===== 引擎 =====
  const els = document.querySelectorAll('[data-i18n]');
  const zh = {};
  els.forEach(el => { zh[el.dataset.i18n] = el.innerHTML; });
  const altEls = document.querySelectorAll('[data-i18n-alt]');
  const zhAlt = {};
  altEls.forEach(el => { zhAlt[el.dataset.i18nAlt] = el.alt; });
  const metaDesc = document.querySelector('meta[name="description"]');
  const zhTitle = document.title;
  const zhDesc = metaDesc.content;
  const btn = document.getElementById('langSwitch');

  let lang = localStorage.getItem('qagent-lang') || 'zh';

  function apply(l) {
    lang = l;
    document.documentElement.lang = l === 'en' ? 'en' : 'zh-CN';
    els.forEach(el => {
      const k = el.dataset.i18n;
      el.innerHTML = l === 'en' ? (en[k] ?? zh[k]) : zh[k];
    });
    altEls.forEach(el => {
      const k = el.dataset.i18nAlt;
      el.alt = l === 'en' ? (en[k] ?? zhAlt[k]) : zhAlt[k];
    });
    document.title = l === 'en' ? en['meta.title'] : zhTitle;
    metaDesc.content = l === 'en' ? en['meta.desc'] : zhDesc;
    btn.textContent = l === 'en' ? '中文' : 'EN';
    localStorage.setItem('qagent-lang', l);
  }

  btn.addEventListener('click', () => apply(lang === 'en' ? 'zh' : 'en'));

  // 供 main.js 使用的接口
  window.QI18N = {
    tip: key => tips[key][lang],
    copied: () => copiedLabel[lang],
    copyLabel: () => (lang === 'en' ? 'Copy' : '复制')
  };

  if (lang === 'en') apply('en');
})();
