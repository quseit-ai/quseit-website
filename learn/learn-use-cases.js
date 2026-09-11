// 用例页:渲染 6 个行业场景卡
(function () {
  const grid = document.getElementById('casesGrid');
  if (!grid || !window._QDict) return;

  const D = window._QDict;
  const pick = (k, lang) => (D[lang][k] || D.zh[k] || k);
  const langNow = QI18N.current();
  const total = 6;

  function render(lang) {
    const p = k => pick(k, lang);
    let html = '';
    for (let n = 1; n <= total; n++) {
      const tag = p(`learn.use.${n}.tag`);
      const title = p(`learn.use.${n}.title`);
      const scenario = p(`learn.use.${n}.scenario`);
      html += `<article class="usecase-card" data-case="${n}">`;
      html += `<div class="usecase-tag mono">${tag}</div>`;
      html += `<h2 class="usecase-title">${title}</h2>`;
      html += `<p class="usecase-scenario">${scenario}</p>`;
      html += `<ol class="usecase-steps">`;
      for (let s = 1; s <= 5; s++) {
        const step = p(`learn.use.${n}.s${s}`);
        html += `<li><span class="step-num mono">${String(s).padStart(2,'0')}</span><span>${step}</span></li>`;
      }
      html += `</ol>`;
      html += `</article>`;
    }
    grid.innerHTML = html;
  }

  render(langNow);
  window.addEventListener('quseit:lang', e => render(e.detail.lang));
})();
