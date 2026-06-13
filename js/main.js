/* ============================================================
   PORTFOLIO — Matheo Silva | main.js
   ============================================================ */

/* ── 1. Navbar scroll ── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('is-scrolled', window.scrollY > 20);
}, { passive: true });

/* ── 2. Scroll reveal ── */
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
revealEls.forEach(el => observer.observe(el));

/* ── 3. Formulaire contact ── */
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = this.querySelector('.form-submit');
    btn.textContent = 'Envoi…';
    btn.disabled = true;
    setTimeout(() => {
      document.getElementById('formSuccess').style.display = 'block';
      btn.style.display = 'none';
      this.reset();
    }, 900);
  });
}
