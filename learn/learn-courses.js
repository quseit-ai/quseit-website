// 课程页:渲染 5 个学习路径 × 5 课
(function () {
  const grid = document.getElementById('pathsGrid');
  if (!grid || !window._QDict) return;

  const D = window._QDict;
  const pick = (k, lang) => (D[lang][k] || D.zh[k] || k);
  const langNow = QI18N.current();
  const total = 5;
  const perPath = 5;

  function render(lang) {
    const p = k => pick(k, lang);
    let html = '';
    for (let n = 1; n <= total; n++) {
      const title = p(`learn.course.path.${n}.title`);
      const desc = p(`learn.course.path.${n}.desc`);
      const count = p(`learn.course.path.${n}.count`);
      html += `<section class="learn-cat" data-path="${n}">`;
      html += `<div class="learn-cat-head">`;
      html += `<span class="learn-cat-num">PATH ${String(n).padStart(2,'0')}</span>`;
      html += `<h2 class="learn-cat-title">${title}</h2>`;
      html += `</div>`;
      html += `<p class="path-intro">${desc}</p>`;
      html += `<div class="path-count mono">${count}</div>`;
      html += `<ol class="path-lessons">`;
      for (let m = 1; m <= perPath; m++) {
        const t = p(`learn.course.p${n}.l${m}.t`);
        const d = p(`learn.course.p${n}.l${m}.d`);
        html += `<li class="path-lesson">`;
        html += `<span class="lesson-num mono">${String(m).padStart(2,'0')}</span>`;
        html += `<div class="lesson-body"><h4>${t}</h4><p>${d}</p></div>`;
        html += `</li>`;
      }
      html += `</ol></section>`;
    }
    grid.innerHTML = html;
  }

  render(langNow);
  window.addEventListener('quseit:lang', e => render(e.detail.lang));
})();
