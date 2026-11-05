// Mobile nav toggle and footer year. No external libraries used.
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('site-nav');

toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});

document.getElementById('year').textContent = new Date().getFullYear();
