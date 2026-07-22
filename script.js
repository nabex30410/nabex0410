const menuButton = document.querySelector('.menuButton');
const nav = document.querySelector('.nav');
menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('navOpen');
  menuButton.setAttribute('aria-expanded', String(open));
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('navOpen')));
document.querySelector('.contactForm')?.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const type = data.get('type') || 'ご相談';
  const subject = `【NABEX Webサイト】${type}`;
  const body = [
    `お名前：${data.get('name') || ''}`,
    `会社名・店舗名：${data.get('company') || ''}`,
    `メールアドレス：${data.get('email') || ''}`,
    `電話番号：${data.get('tel') || ''}`,
    `お問い合わせ内容：${type}`,
    '',
    'ご相談内容：',
    data.get('message') || ''
  ].join('\n');
  const status = form.querySelector('.formSuccess');
  if (status) status.hidden = false;
  window.location.href = `mailto:nabex202608@nabex.biz?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
