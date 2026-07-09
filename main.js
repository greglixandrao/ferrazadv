// Smooth reveal on scroll
const observer = new IntersectionObserver(
  (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
  { threshold: 0.15 }
);

document.querySelectorAll('.diferencial, .area, .sobre, .atendimento')
  .forEach(el => { el.classList.add('fade-in'); observer.observe(el); });

// Mobile menu toggle
const header = document.querySelector('.header');
const toggleBtn = document.querySelector('.header__toggle');
const menuLinks = document.querySelectorAll('.header__link');

if (toggleBtn && header) {
  toggleBtn.addEventListener('click', () => {
    const isOpen = header.classList.toggle('header--open');
    toggleBtn.setAttribute('aria-expanded', isOpen);
  });

  // Close menu when clicking a link
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      header.classList.remove('header--open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });

  // Close menu when clicking outside the nav container (overlay click)
  document.addEventListener('click', (e) => {
    if (header.classList.contains('header--open')) {
      const container = document.querySelector('.header__container');
      if (e.target === header || !header.contains(e.target)) {
        header.classList.remove('header--open');
        toggleBtn.setAttribute('aria-expanded', 'false');
      }
    }
  });
}

// Copy to clipboard
document.querySelectorAll('.footer__copy-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const text = btn.getAttribute('data-copy');
    navigator.clipboard.writeText(text).then(() => {
      btn.classList.add('copied');
      setTimeout(() => btn.classList.remove('copied'), 1500);
    });
  });
});