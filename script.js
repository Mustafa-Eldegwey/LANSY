/* ============================================================
   LANSY — Premium Fashion Link-in-Bio
   script.js
   ============================================================ */

/**
 * Update the copyright year dynamically.
 */
function updateCopyrightYear() {
  const yearEl = document.getElementById('copyright-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/**
 * Intersection Observer — triggers CSS entrance animations
 * only when elements scroll into the viewport.
 * (On a link-in-bio page everything is usually visible immediately,
 * but this ensures correct behaviour if the page is ever extended.)
 */
function initScrollAnimations() {
  const targets = document.querySelectorAll('[data-animate]');
  if (!targets.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  targets.forEach((el) => observer.observe(el));
}

/**
 * Keyboard accessibility — allow Enter/Space to activate link cards.
 */
function initCardKeyboardSupport() {
  const cards = document.querySelectorAll('.social-card');
  cards.forEach((card) => {
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      }
    });
  });
}

/**
 * Subtle ripple effect on card click for tactile feedback.
 */
function initRippleEffect() {
  const cards = document.querySelectorAll('.social-card');

  cards.forEach((card) => {
    card.addEventListener('click', function (e) {
      // Don't block navigation — just add visual effect
      const ripple = document.createElement('span');
      ripple.classList.add('ripple');

      const rect = card.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        border-radius: 50%;
        background: rgba(166, 124, 82, 0.12);
        transform: scale(0);
        animation: ripple-expand 0.55s ease-out forwards;
        pointer-events: none;
        z-index: 0;
      `;

      card.appendChild(ripple);

      ripple.addEventListener('animationend', () => ripple.remove());
    });
  });

  // Inject ripple keyframe if not already present
  if (!document.getElementById('ripple-style')) {
    const style = document.createElement('style');
    style.id = 'ripple-style';
    style.textContent = `
      @keyframes ripple-expand {
        to {
          transform: scale(2.5);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
  }
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  updateCopyrightYear();
  initScrollAnimations();
  initCardKeyboardSupport();
  initRippleEffect();
});
