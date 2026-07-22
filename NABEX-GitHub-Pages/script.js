const menuButton = document.querySelector('.menuButton');
const nav = document.querySelector('.nav');
menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('navOpen');
  menuButton.setAttribute('aria-expanded', String(open));
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('navOpen')));
document.querySelector('.contactForm')?.addEventListener('submit', event => {
  event.preventDefault();
  document.querySelector('.formSuccess').hidden = false;
});
