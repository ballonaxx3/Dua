// ─────────────────────────────────────────────
// DUA MARKETING — Interacciones del sitio
// ─────────────────────────────────────────────

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ── Preloader: ocultar al cargar (máx. ~1s) ── */
const hidePreloader = () => {
  const preloader = document.getElementById('preloader');
  if (preloader) preloader.classList.add('is-hidden');
};
if (prefersReducedMotion) {
  hidePreloader();
} else if (document.readyState === 'complete') {
  hidePreloader();
} else {
  window.addEventListener('load', hidePreloader, { once: true });
  window.setTimeout(hidePreloader, 1200); // respaldo por si 'load' tarda
}

/* ── Header: fondo al hacer scroll ── */
const header = document.getElementById('siteHeader');
const onScroll = () => header?.classList.toggle('is-scrolled', window.scrollY > 40);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ── Menú móvil ── */
const toggle = document.getElementById('navToggle');
const panel = document.getElementById('mobilePanel');

const closePanel = () => {
  panel?.classList.remove('is-open');
  panel?.setAttribute('hidden', '');
  toggle?.setAttribute('aria-expanded', 'false');
  toggle?.setAttribute('aria-label', 'Abrir menú');
};

const openPanel = () => {
  panel?.removeAttribute('hidden');
  // Doble rAF para que la transición corra desde el estado oculto
  requestAnimationFrame(() => {
    requestAnimationFrame(() => panel?.classList.add('is-open'));
  });
  toggle?.setAttribute('aria-expanded', 'true');
  toggle?.setAttribute('aria-label', 'Cerrar menú');
};

if (toggle && panel) {
  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    isOpen ? closePanel() : openPanel();
  });

  panel.querySelectorAll('a').forEach((link) => link.addEventListener('click', closePanel));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closePanel();
  });

  document.addEventListener('click', (event) => {
    const target = event.target as Node;
    if (panel.classList.contains('is-open') && !panel.contains(target) && !toggle.contains(target)) {
      closePanel();
    }
  });
}

/* ── Reveal on scroll ── */
const revealElements = document.querySelectorAll<HTMLElement>('.reveal');
if ('IntersectionObserver' in window && !prefersReducedMotion) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -48px 0px' }
  );
  revealElements.forEach((el) => observer.observe(el));
} else {
  revealElements.forEach((el) => el.classList.add('is-visible'));
}

/* ── Portafolio: filtros ── */
const filterButtons = document.querySelectorAll<HTMLButtonElement>('[data-filter]');
const workCards = document.querySelectorAll<HTMLElement>('[data-category]');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter ?? 'all';

    filterButtons.forEach((btn) => {
      const active = btn === button;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', String(active));
    });

    workCards.forEach((card) => {
      const matches = filter === 'all' || card.dataset.category === filter;
      card.style.display = matches ? '' : 'none';
    });
  });
});

/* ── Portafolio: lightbox ── */
const lightbox = document.getElementById('workLightbox') as HTMLDialogElement | null;

if (lightbox) {
  const lbImage = lightbox.querySelector<HTMLImageElement>('[data-lb-image]');
  const lbTitle = lightbox.querySelector('[data-lb-title]');
  const lbSummary = lightbox.querySelector('[data-lb-summary]');
  const lbResult = lightbox.querySelector('[data-lb-result]');
  const closeBtn = lightbox.querySelector('[data-lb-close]');

  document.querySelectorAll<HTMLElement>('[data-lightbox]').forEach((card) => {
    card.addEventListener('click', () => {
      if (lbImage) {
        lbImage.src = card.dataset.image ?? '';
        lbImage.alt = card.dataset.title ?? 'Proyecto de Dua Marketing';
      }
      if (lbTitle) lbTitle.textContent = card.dataset.title ?? '';
      if (lbSummary) lbSummary.textContent = card.dataset.summary ?? '';
      if (lbResult) lbResult.textContent = card.dataset.result ?? '';
      lightbox.showModal();
    });
  });

  closeBtn?.addEventListener('click', () => lightbox.close());
  // Clic en el backdrop cierra el diálogo
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) lightbox.close();
  });
}

/* ── Formulario de contacto (Formspree) ── */
const form = document.getElementById('contactForm') as HTMLFormElement | null;

if (form) {
  const submitButton = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  const status = form.querySelector<HTMLElement>('.form-status');
  const defaultButtonLabel = submitButton?.innerHTML ?? 'Enviar Mensaje';

  const showStatus = (message: string, kind: 'ok' | 'error') => {
    if (!status) return;
    status.textContent = message;
    status.className = `form-status is-visible ${kind}`;
  };

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!submitButton) return;

    submitButton.disabled = true;
    submitButton.textContent = 'Enviando…';

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        form.reset();
        showStatus('¡Mensaje enviado! Te responderé en menos de 24h. 🙌', 'ok');
      } else {
        showStatus('Algo salió mal al enviar. Escríbeme directo a mi correo, por favor.', 'error');
      }
    } catch {
      showStatus('Sin conexión. Revisa tu internet e inténtalo de nuevo.', 'error');
    } finally {
      submitButton.disabled = false;
      submitButton.innerHTML = defaultButtonLabel;
    }
  });
}
