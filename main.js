// Smooth reveal on scroll
const observer = new IntersectionObserver(
  (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
  { threshold: 0.15 }
);

document.querySelectorAll('.diferencial, .area, .sobre, .atendimento')
  .forEach(el => { el.classList.add('fade-in'); observer.observe(el); });
