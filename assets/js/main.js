/* ==========================================================================
   CLYCK Photobooths — main.js
   Progressive enhancement only. The page is complete without this file:
   every reveal state has a visible default in CSS, and if GSAP fails to
   load we drop the `js` class so those defaults come back.
   ========================================================================== */
(() => {
  const html = document.documentElement;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hasGsap = typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined';

  /* ---- no library → the plain document, nothing hidden ------------------ */
  if (!hasGsap) { html.classList.remove('js'); return; }

  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ ignoreMobileResize: true });

  /* ---- 1. smooth scroll foundation (must come before any scene) --------- */
  let lenis = null;
  if (!reduce && typeof window.Lenis !== 'undefined') {
    lenis = new Lenis({ duration: 1.05, smoothWheel: true });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  }

  /* anchors work with or without Lenis */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      if (lenis) lenis.scrollTo(target, { duration: 1.1 });
      else target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
      history.replaceState(null, '', id);
    });
  });

  /* ---- 2. the nav returns only after the hero has left the top edge ---- */
  const hero = document.querySelector('.hero');
  const nav = document.getElementById('nav');
  if (hero && nav && 'IntersectionObserver' in window) {
    new IntersectionObserver(
      ([entry]) => nav.classList.toggle('is-in', !entry.isIntersecting),
      { threshold: 0 }
    ).observe(hero);
  }

  if (reduce) { ScrollTrigger.refresh(); return; }   /* alternative cut: static, no scrub */

  /* ---- 3. entrance families (one per content kind, not one for all) ---- */
  const io = { start: 'top 88%', once: true };

  gsap.utils.toArray('[data-reveal]').forEach((el) => {
    gsap.fromTo(el, { opacity: 0, y: 26 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: el, ...io } });
  });

  gsap.utils.toArray('[data-reveal-mask]').forEach((el) => {
    const lines = el.children;
    gsap.fromTo(lines, { yPercent: 105 },
      { yPercent: 0, duration: 1.05, ease: 'power3.out', stagger: 0.09,
        scrollTrigger: { trigger: el, start: 'top 92%', once: true } });
  });

  gsap.utils.toArray('[data-reveal-img]').forEach((el) => {
    gsap.fromTo(el, { scale: 1.045 },
      { scale: 1, duration: 1.3, ease: 'power2.out', scrollTrigger: { trigger: el, ...io } });
  });

  gsap.utils.toArray('[data-reveal-wipe]').forEach((el) => {
    gsap.fromTo(el, { clipPath: 'inset(0 100% 0 0)' },
      { clipPath: 'inset(0 0% 0 0)', duration: 1.05, ease: 'power3.out',
        scrollTrigger: { trigger: el, ...io } });
  });

  gsap.utils.toArray('[data-stagger]').forEach((list) => {
    gsap.fromTo(list.children, { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', stagger: 0.06,
        scrollTrigger: { trigger: list, ...io } });
  });

  /* ---- 4. hero: letterbox opens, the still settles -------------------- */
  gsap.to('.hero__bar', { scaleY: 1, duration: 1, ease: 'power3.out', stagger: 0.09, delay: 0.05 });
  gsap.fromTo('.hero__media img', { scale: 1.055 },
    { scale: 1, duration: 1.8, ease: 'power2.out', delay: 0.05 });
  gsap.fromTo('.hero__strip', { opacity: 0, yPercent: -3 },
    { opacity: 1, yPercent: 0, duration: 1.2, ease: 'power3.out', delay: 0.35 });

  /* ---- 5. depth parallax (scene 2 and the gallery band) --------------- */
  gsap.utils.toArray('[data-parallax-layer]').forEach((el) => {
    if (el.closest('.band__row')) return;                 /* band drifts sideways */
    const speed = parseFloat(el.dataset.speed || '0.5');
    const scene = el.closest('section') || el;
    gsap.fromTo(el, { yPercent: 4 * speed }, {
      yPercent: -9 * speed, ease: 'none',
      scrollTrigger: { trigger: scene, start: 'top bottom', end: 'bottom top', scrub: 0.5 },
    });
  });

  gsap.utils.toArray('.band__item[data-speed]').forEach((el) => {
    const speed = parseFloat(el.dataset.speed || '1');
    gsap.fromTo(el, { xPercent: 7 * speed }, {
      xPercent: -7 * speed, ease: 'none',
      scrollTrigger: { trigger: '.band', start: 'top bottom', end: 'bottom top', scrub: 0.6 },
    });
  });

  /* ---- 6. THE PEAK — the print leaves the slot and develops ----------- */
  const paper = document.querySelector('.print__paper');
  if (paper) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.print',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.5,
        invalidateOnRefresh: true,
      },
    });

    /* out of the slot: paper travel owns the first two thirds.
       Pixel-based (not yPercent) because GSAP composes its own transform on top
       of whatever CSS left there — a percentage here double-applies the offset. */
    tl.fromTo(paper, { y: () => -paper.offsetHeight * 1.01 },
      { y: 0, duration: 0.66, ease: 'none' }, 0);
    /* the frames develop as they clear the slot */
    tl.fromTo('[data-cover]', { yPercent: 0 }, {
      yPercent: -101, duration: 0.2, ease: 'power1.inOut', stagger: 0.05,
    }, 0.22);
    /* the darkroom breathes a little over the whole scene */
    tl.fromTo('.print__bg', { scale: 1.08 }, { scale: 1, duration: 1, ease: 'none' }, 0);
    tl.fromTo('.print__bg-veil', { opacity: 0.72 }, { opacity: 0.95, duration: 1, ease: 'none' }, 0);

    /* a small pointer parallax on the paper — the print feels like an object */
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      const stage = document.querySelector('.print__stage');
      const box = document.querySelector('.print__out');
      let raf = 0, tx = 0, ty = 0, cx = 0, cy = 0;
      const rotY = gsap.quickTo(paper, 'rotateY', { duration: 0.5, ease: 'power2.out' });
      const rotX = gsap.quickTo(paper, 'rotateX', { duration: 0.5, ease: 'power2.out' });
      const draw = () => {
        raf = 0;
        rotY(tx * 1.6); rotX(-ty * 1.2);
      };
      if (stage && box) {
        stage.addEventListener('pointermove', (e) => {
          const r = box.getBoundingClientRect();
          tx = ((e.clientX - r.left) / r.width - 0.5) * 2;
          ty = ((e.clientY - r.top) / r.height - 0.5) * 2;
          if (!raf) raf = requestAnimationFrame(draw);
        }, { passive: true });
      }
    }
  }

  /* ---- 7. the form: inline validation, then a mailto handoff ---------- */
  const form = document.getElementById('aanvraag');
  if (form) {
    const status = document.getElementById('form-status');
    const messages = {
      naam: 'Vul je naam in, zodat we weten wie we antwoorden.',
      email: 'Vul een e-mailadres in waar we je op kunnen bereiken.',
      emailInvalid: 'Dit lijkt geen compleet e-mailadres. Controleer het even.',
      datum: 'Kies de datum van het feest.',
      locatie: 'Vul de plaats of zaal in.',
      soort: 'Kies het soort feest.',
    };

    const setError = (field, message) => {
      const wrap = field.closest('.field');
      const slot = form.querySelector(`[data-error-for="${field.name}"]`);
      if (message) { wrap.setAttribute('data-invalid', ''); }
      else { wrap.removeAttribute('data-invalid'); }
      if (slot) slot.textContent = message || '';
      field.setAttribute('aria-invalid', message ? 'true' : 'false');
    };

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let firstBad = null;
      const data = new FormData(form);

      for (const field of form.querySelectorAll('input[required], select[required]')) {
        const value = String(data.get(field.name) || '').trim();
        let message = '';
        if (!value) message = messages[field.name] || 'Dit veld is nog leeg.';
        else if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(value)) message = messages.emailInvalid;
        setError(field, message);
        if (message && !firstBad) firstBad = field;
      }

      if (firstBad) {
        status.textContent = 'Er mist nog iets — de velden hierboven staan aangegeven.';
        firstBad.focus();
        return;
      }

      const lines = [
        'Aanvraag photobooth CLYCK',
        '',
        `Naam: ${data.get('naam')}`,
        `E-mail: ${data.get('email')}`,
        `Datum: ${data.get('datum')}`,
        `Locatie: ${data.get('locatie')}`,
        `Soort feest: ${data.get('soort')}`,
        `Gewenste uitvoering: ${data.get('uitvoering') || 'weet ik nog niet'}`,
        '',
        'Bericht:',
        String(data.get('bericht') || '').trim() || '(geen)',
      ];
      const href = 'mailto:info@clyckphotobooths.nl'
        + `?subject=${encodeURIComponent('Aanvraag photobooth — ' + data.get('datum'))}`
        + `&body=${encodeURIComponent(lines.join('\n'))}`;

      status.textContent = 'Je mailprogramma opent met de aanvraag erin. Verstuur die mail en we nemen contact op.';
      window.location.href = href;
      form.querySelector('button[type="submit"]').disabled = true;
      setTimeout(() => { form.querySelector('button[type="submit"]').disabled = false; }, 4000);
    });

    form.addEventListener('input', (e) => {
      if (e.target.closest('.field')?.hasAttribute('data-invalid')) setError(e.target, '');
    });
  }

  /* ---- 8. recalculate once fonts and images have landed -------------- */
  if (document.fonts?.ready) document.fonts.ready.then(() => ScrollTrigger.refresh());
  window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
})();
