// 导航滚动状态
const nav = document.getElementById('nav');
addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', scrollY > 10);
}, { passive: true });

// 移动端菜单
const burger = document.getElementById('burger');
burger.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a =>
  a.addEventListener('click', () => nav.classList.remove('open'))
);

// 滚动显现动画
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// 复制联系方式（支持中英双语提示）
const copyTip = document.getElementById('copyTip');
document.querySelectorAll('.copy-btn').forEach(btn => {
  btn.addEventListener('click', async () => {
    const text = btn.dataset.copy;
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // 剪贴板 API 不可用时的降级方案
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      ta.remove();
    }
    btn.textContent = QI18N.copied();
    copyTip.textContent = QI18N.tip(btn.dataset.tipKey);
    copyTip.classList.add('ok');
    setTimeout(() => { btn.textContent = QI18N.copyLabel(); }, 2000);
  });
});

// ===== 下载页：按语言切换截图 src =====
// 监听 i18n.js 派发的 lang 事件；命中 [data-i18n-img-suffix] 元素时切换 src。
// 用法：<img data-i18n-img-suffix="cn" data-i18n-img-base="asset/qbuilder-dashboard" data-i18n-img-ext=".png">
const imgSwapEls = document.querySelectorAll('[data-i18n-img-suffix]');
function swapImages(lang) {
  imgSwapEls.forEach(img => {
    const base = img.dataset.i18nImgBase;
    const ext = img.dataset.i18nImgExt || '.png';
    const suffix = lang === 'en' ? 'en' : img.dataset.i18nImgSuffix;
    const next = `${base}-${suffix}${ext}`;
    if (img.getAttribute('src') !== next) img.src = next;
  });
}
window.addEventListener('quseit:lang', e => swapImages(e.detail.lang));
if (imgSwapEls.length) swapImages(QI18N.current());

// ===== 平台下载:macOS 下拉(点击展开 / 点外部关闭 / Esc 关闭) =====
document.querySelectorAll('.dl-dropdown').forEach(wrap => {
  const toggle = wrap.querySelector('.dl-dropdown-toggle');
  if (!toggle) return;
  const setOpen = open => {
    wrap.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  };
  toggle.addEventListener('click', e => {
    e.stopPropagation();
    setOpen(!wrap.classList.contains('is-open'));
  });
  document.addEventListener('click', e => {
    if (!wrap.contains(e.target)) setOpen(false);
  });
  wrap.addEventListener('keydown', e => {
    if (e.key === 'Escape') { setOpen(false); toggle.focus(); }
  });
  // 选中某一项后收起,避免回到页面时菜单还挂着
  wrap.querySelectorAll('.dl-dropdown-menu a').forEach(a =>
    a.addEventListener('click', () => setOpen(false))
  );
});
