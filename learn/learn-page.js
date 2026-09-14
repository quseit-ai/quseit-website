// 教程页:从 i18n 字典渲染 6 分类 × 2 教程卡
// 字典 key 约定:learn.tut.tag.N (N=1..6) / learn.tut.cN.M.{t,d,l,m} (M=1..2)
(function () {
  const grid = document.getElementById('tutGrid');
  if (!grid || !window.QI18N) return;

  // QI18N 没暴露字典,我用 i18n.js 里 en/zh 的全局变量
  // 改成:通过 DOM 元素已经渲染的中文 fallback 拿 zh,通过 lang 切换拿 en
  // 简化:直接从全局抓 — i18n.js 没暴露字典,所以我用反向:触发一次 apply 切到 en/zh 拿值
  // 但更稳:在 i18n.js 里我加个 _getDict() 暴露。这里直接用 dataset + 已渲染的 DOM 文案。

  // 取值 helper:从 i18n 字典直接读(我会在 i18n.js 末尾暴露 window._QDict)
  const D = window._QDict;
  if (!D) { console.warn('learn-page: window._QDict missing'); return; }

  // 卡片 → 详情页 映射(cat-index + '-' + card-index)。
  // 没在表里的卡片保持 href="#"(尚未发布对应教程)。
  // 改这里不需要碰 i18n 字典。
  const LINK_MAP = {
    '1-1': 'tutorials/first-skill-5min.html',  // 创作者入门 > 5 分钟创建第一个智能体
    '3-1': 'tutorials/book-to-skill-clarify.html',  // 技能构建 > 从已有文档生成技能
  };

  const lang = QI18N.current();
  const pick = (k) => D[lang][k] || D.zh[k] || k;

  const total = 6;
  const perCat = 2;
  let html = '';
  for (let n = 1; n <= total; n++) {
    const tag = pick(`learn.tut.tag.${n}`);
    html += `<section class="learn-cat" data-cat="${n}">`;
    html += `<div class="learn-cat-head">`;
    html += `<span class="learn-cat-num">SECTION ${String(n).padStart(2,'0')}</span>`;
    html += `<h2 class="learn-cat-title">${tag}</h2>`;
    html += `</div>`;
    html += `<div class="tut-grid">`;
    for (let m = 1; m <= perCat; m++) {
      const t = pick(`learn.tut.c${n}.${m}.t`);
      const d = pick(`learn.tut.c${n}.${m}.d`);
      const l = pick(`learn.tut.c${n}.${m}.l`);
      const tm = pick(`learn.tut.c${n}.${m}.m`);
      const href = LINK_MAP[`${n}-${m}`] || '#';
      html += `<a class="tut-card" href="${href}" data-i18n-skip>`;
      html += `<div class="tut-card-tags"><span class="tut-level">${l}</span><span class="tut-time">· ${tm}</span></div>`;
      html += `<h3>${t}</h3>`;
      html += `<p>${d}</p>`;
      html += `<span class="tut-cta">READ MORE</span>`;
      html += `</a>`;
    }
    html += `</div></section>`;
  }
  grid.innerHTML = html;

  // 监听语言切换,重新渲染
  window.addEventListener('quseit:lang', e => {
    const newLang = e.detail.lang;
    const newPick = (k) => D[newLang][k] || D.zh[k] || k;
    grid.querySelectorAll('.learn-cat').forEach(cat => {
      const n = cat.dataset.cat;
      cat.querySelector('.learn-cat-title').textContent = newPick(`learn.tut.tag.${n}`);
      cat.querySelectorAll('.tut-card').forEach((card, idx) => {
        const m = idx + 1;
        const tags = card.querySelectorAll('.tut-card-tags span');
        tags[0].textContent = newPick(`learn.tut.c${n}.${m}.l`);
        tags[1].textContent = '· ' + newPick(`learn.tut.c${n}.${m}.m`);
        card.querySelector('h3').textContent = newPick(`learn.tut.c${n}.${m}.t`);
        card.querySelector('p').textContent = newPick(`learn.tut.c${n}.${m}.d`);
      });
    });
  });
})();
