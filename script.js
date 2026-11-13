const root = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const scrollTop = document.getElementById('scroll-top');

const savedTheme = localStorage.getItem('anjali-theme');
if (savedTheme === 'light') root.setAttribute('data-theme', 'light');

function refreshIcons() {
  if (window.lucide) lucide.createIcons();
}
refreshIcons();

themeToggle.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  root.setAttribute('data-theme', next);
  localStorage.setItem('anjali-theme', next);
  themeIcon.setAttribute('data-lucide', next === 'light' ? 'moon' : 'sun');
  refreshIcons();
});

menuToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.innerHTML = open ? '<i data-lucide="x"></i>' : '<i data-lucide="menu"></i>';
  refreshIcons();
});

navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.innerHTML = '<i data-lucide="menu"></i>';
  refreshIcons();
}));

window.addEventListener('scroll', () => {
  scrollTop.classList.toggle('visible', window.scrollY > 450);
});
scrollTop.addEventListener('click', () => window.scrollTo({top: 0, behavior: 'smooth'}));
document.getElementById('year').textContent = new Date().getFullYear();
