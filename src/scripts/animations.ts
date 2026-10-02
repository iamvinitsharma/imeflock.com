// Scroll & hover animations ported from the Nimo theme (GSAP + ScrollTrigger + SplitText + Lenis).
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { CustomEase } from 'gsap/CustomEase';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase, MotionPathPlugin);
gsap.config({ nullTargetWarn: false });
CustomEase.create('ease1', '0, 0, 0.2, 1');

const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const $$ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) => [...root.querySelectorAll<T>(sel)] as T[];

/* ---------- smooth scroll ---------- */
let lenis: Lenis | null = null;
if (!reduce) {
  lenis = new Lenis({ duration: 1, easing: (t) => 1 - Math.pow(1 - t, 4) });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis!.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
  document.addEventListener('click', (e) => {
    const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href*="#"]');
    if (!a || a.pathname !== location.pathname || !a.hash) return;
    const target = document.querySelector(a.hash);
    if (!target) return;
    e.preventDefault();
    lenis!.scrollTo(target as HTMLElement, { offset: -110, duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    history.replaceState(null, '', a.hash);
  });
}
export const scrollToTop = () => (lenis ? lenis.scrollTo(0) : scrollTo({ top: 0 }));

/* ---------- hover effects (always on) ---------- */
// magnetic: inner icon of buttons follows the cursor
$$('.btn, .magnetic').forEach((el) => {
  const inner = el.querySelector<HTMLElement>('.ic, i') ?? el;
  const strength = el.classList.contains('magnetic') ? 18 : 30;
  el.addEventListener('mousemove', (e) => {
    const r = el.getBoundingClientRect();
    gsap.to(inner, { x: ((e.clientX - r.left) / r.width - 0.5) * strength, y: ((e.clientY - r.top) / r.height - 0.5) * strength, duration: 1, ease: 'elastic.out(1,0.3)' });
  });
  el.addEventListener('mouseleave', () => gsap.to(inner, { x: 0, y: 0, duration: 1, ease: 'elastic.out(1,0.3)' }));
});

// menu links: letters flip on hover
$$('.menu .lbl').forEach((el) => {
  const split = new SplitText(el, { type: 'chars' });
  el.closest('a')!.addEventListener('mouseenter', () => {
    split.chars.forEach((c, i) => gsap.fromTo(c, { rotateY: i % 2 ? 180 : -180 }, { rotateY: 0, duration: 0.6, ease: 'ease1' }));
  });
});

if (!reduce) init();

function init() {
  const intro = document.getElementById('preloader')?.classList.contains('skip') ? 0 : 1.5;
  /* hero: characters swing in */
  $$('.split-hero').forEach((el, i) => {
    const split = new SplitText(el, { type: 'chars' });
    gsap.set(el, { perspective: 400 });
    gsap.fromTo(split.chars, { rotateY: 90, opacity: 0 }, { rotateY: 0, opacity: 1, duration: 2, ease: 'elastic.out(1,0.45)', stagger: 0.07, delay: intro + 0.15 + i * 0.35 });
  });
  gsap.from('.hero .award, .hero-bottom > *', { y: 40, opacity: 0, duration: 1, ease: 'power3.out', stagger: 0.12, delay: intro + 0.9 });

  /* section titles: grey → white fill, line by line, tied to scroll */
  $$('.reveal-text').forEach((el) => {
    SplitText.create(el, {
      type: 'lines',
      linesClass: 'rt-line',
      autoSplit: true,
      onSplit: (self) =>
        gsap.timeline().add(
          self.lines.map((line) =>
            gsap.to(line, { backgroundPositionX: '0%', ease: 'none', scrollTrigger: { trigger: line, scrub: 1, start: 'top 85%', end: 'bottom 55%' } })
          )
        ),
    });
  });

  /* labels: letters slide in from the right */
  $$('.label').forEach((el) => {
    // .label is a flex row (dot + text), so split an inner span to keep word spacing
    const inner = document.createElement('span');
    inner.className = 'label-t';
    inner.append(...el.childNodes);
    el.append(inner);
    const split = new SplitText(inner, { type: 'words,chars' });
    gsap.from(split.chars, { x: 50, opacity: 0, duration: 0.4, ease: 'ease1', stagger: 0.02, scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none reverse' } });
  });

  /* generic fade-up, batched so siblings stagger */
  ScrollTrigger.batch('.rv', {
    start: 'top 88%',
    onEnter: (els) => gsap.to(els, { opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.12, overwrite: true }),
  });

  /* images wipe in left → right */
  $$('.clip-lr').forEach((el) => {
    gsap.fromTo(el, { clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' }, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', ease: 'ease1', duration: 1.1, scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none reverse' } });
  });

  /* counters */
  $$('[data-count]').forEach((el) => {
    const obj = { v: 0 };
    gsap.to(obj, { v: +el.dataset.count!, duration: 2, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 90%' }, onUpdate: () => (el.textContent = Math.round(obj.v) + (el.dataset.suffix || '')) });
  });

  /* parallax & scroll rotation */
  gsap.to('.hero-bg', { yPercent: 25, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
  gsap.to('.hero-person', { yPercent: 12, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
  // hero social ring turns as the hero scrolls away; icons stay upright
  gsap.fromTo('.hero-ring .ring', { rotation: 0 }, { rotation: -100, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1 } });
  gsap.fromTo('.hero-ring .ring a', { rotation: 0 }, { rotation: 100, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1 } });
  $$('.rotate-scroll').forEach((el) => gsap.fromTo(el, { rotation: 0 }, { rotation: 360, ease: 'none', scrollTrigger: { trigger: el, scrub: 3 } }));
  $$('.parallax-y').forEach((el) => gsap.from(el, { yPercent: 30, ease: 'none', scrollTrigger: { trigger: el, end: 'top 10%', scrub: 3 } }));
  $$('.parallax-img').forEach((el) => gsap.fromTo(el, { objectPosition: '50% 0%' }, { objectPosition: '50% 100%', ease: 'none', scrollTrigger: { trigger: el, scrub: 3 } }));

  /* steps: number lights up, line fills, card swings open */
  const tl = document.getElementById('timeline');
  if (tl) {
    gsap.to('#timeline .progress', { scaleY: 1, ease: 'none', scrollTrigger: { trigger: tl, start: 'top 60%', end: 'bottom 60%', scrub: true } });
    $$('.step', tl).forEach((step, i) => {
      const t = gsap.timeline({ scrollTrigger: { trigger: step, start: 'top 80%', end: 'top 40%', scrub: true } });
      t.to(step.querySelector('.num'), { backgroundColor: '#d6f345', color: '#000', duration: 0.3 })
        .fromTo(step.querySelector('.card'), { rotateY: i % 2 ? 70 : -70, opacity: 0.2 }, { rotateY: 0, opacity: 1, duration: 1 }, '<');
    });
  }

  /* testimonials: avatar ring turns with scroll, faces stay upright */
  const ring = document.querySelector('.testi-ring');
  if (ring) {
    const st = { trigger: '.testi', start: 'top bottom', end: 'bottom top', scrub: true };
    gsap.fromTo(ring, { rotation: 40 }, { rotation: -40, ease: 'none', scrollTrigger: st });
    gsap.fromTo('.testi-ring img', { rotation: -40 }, { rotation: 40, ease: 'none', scrollTrigger: st });
  }

  /* handshake clip: play the first second, then hold the frame */
  $$<HTMLVideoElement>('video.play-once').forEach((v) => {
    v.addEventListener('timeupdate', () => v.currentTime >= 1 && v.pause());
    ScrollTrigger.create({ trigger: v, start: 'top 85%', onEnter: () => { v.currentTime = 0; v.play(); }, onEnterBack: () => { v.currentTime = 0; v.play(); } });
  });

  /* form placeholders type themselves */
  $$<HTMLInputElement>('.type-ph').forEach((input, i) => {
    const text = input.placeholder;
    input.placeholder = '';
    ScrollTrigger.create({
      trigger: input, start: 'top 90%', once: true,
      onEnter: () => { let n = 0; const tick = () => { input.placeholder = text.slice(0, ++n); if (n < text.length) setTimeout(tick, 60); }; setTimeout(tick, i * 250); },
    });
  });

  /* desktop-only choreography */
  gsap.matchMedia().add('(min-width: 992px)', () => {
    // portfolio cards fly in from a stacked pile
    $$('.portfolio-grid.fly').forEach((grid) => {
      const items = $$('.work-item', grid);
      const t = gsap.timeline({ scrollTrigger: { trigger: grid, start: 'top 95%', end: 'top 30%', scrub: 1 } });
      items.forEach((it, i) => {
        const col = i % 2, row = Math.floor(i / 2);
        t.from(it, { x: col ? -260 : 260, y: -220 - row * 260, scale: 0.7, rotate: col ? 5 : -5, ease: 'none' }, 0);
      });
    });
    // why-choose tiles rise with a slight tilt
    gsap.from('.bento .tile', { y: 120, rotateX: -15, opacity: 0, transformPerspective: 1200, stagger: 0.08, ease: 'power3.out', duration: 1.2, scrollTrigger: { trigger: '.bento', start: 'top 85%' } });
  });

  birds();
  addEventListener('load', () => ScrollTrigger.refresh());
}

/* ================= Limeflock bird ================= */
function birds() {
  /* cursor bird: trails the pointer, faces its direction, flaps faster when moving, perches on links */
  const cb = document.getElementById('cursor-bird');
  if (cb && matchMedia('(hover: hover) and (pointer: fine)').matches) {
    const svg = cb.querySelector<HTMLElement>('.lf-bird')!;
    const xTo = gsap.quickTo(cb, 'x', { duration: 0.9, ease: 'power3.out' });
    const yTo = gsap.quickTo(cb, 'y', { duration: 0.9, ease: 'power3.out' });
    const rTo = gsap.quickTo(cb, 'rotation', { duration: 0.6, ease: 'power2.out' });
    let lx = 0, ly = 0, idle: number;
    addEventListener('mousemove', (e) => {
      const dx = e.clientX - lx, dy = e.clientY - ly;
      lx = e.clientX; ly = e.clientY;
      cb.classList.add('on');
      xTo(e.clientX + 18); yTo(e.clientY + 14);
      if (Math.abs(dx) > 2) cb.classList.toggle('left', dx < 0);
      rTo(gsap.utils.clamp(-25, 25, dy * 1.5) * (dx < 0 ? -1 : 1));
      svg.style.setProperty('--flap', Math.hypot(dx, dy) > 6 ? '.28s' : '.55s');
      clearTimeout(idle);
      idle = window.setTimeout(() => { rTo(0); svg.style.setProperty('--flap', '.9s'); }, 160);
    }, { passive: true });
    document.addEventListener('mouseleave', () => cb.classList.remove('on'));
    document.addEventListener('mouseover', (e) => cb.classList.toggle('perch', !!(e.target as HTMLElement).closest('a, button, .btn')));
  }

  /* hero flock: little birds crossing the hero at different heights, sizes and speeds */
  const flock = document.getElementById('hero-flock');
  if (flock) {
    const W = () => flock.clientWidth, H = () => flock.clientHeight;
    $$('.fb', flock).forEach((b, i) => {
      const size = gsap.utils.random(22, 52);
      b.style.width = size + 'px';
      b.style.opacity = String(0.45 + size / 100);
      b.querySelector<HTMLElement>('.lf-bird')!.style.setProperty('--flap', gsap.utils.random(0.35, 0.6) + 's');
      const fly = () => {
        const y0 = gsap.utils.random(0.08, 0.55) * H();
        gsap.fromTo(b, { x: -80, y: y0 }, {
          x: W() + 80, y: y0 + gsap.utils.random(-120, 60), duration: gsap.utils.random(9, 17) * (40 / size) ** 0.4,
          ease: 'none', onComplete: fly,
        });
      };
      gsap.delayedCall(i * 1.6 + gsap.utils.random(0, 1.5), fly);
      gsap.to(b.firstElementChild, { yPercent: gsap.utils.random(-60, 60), duration: gsap.utils.random(1.5, 2.5), ease: 'sine.inOut', yoyo: true, repeat: -1 });
    });
  }

  /* flight path: bird follows the dotted route with scroll, trail draws behind it, stops light up */
  const flight = document.getElementById('flight');
  if (flight) {
    const stops = $$('.fp-stop', flight);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: flight.querySelector('.flight-stage'), start: 'top 85%', end: 'bottom 25%', scrub: 1,
        onUpdate: (st) => stops.forEach((s) => s.classList.toggle('on', st.progress >= +s.dataset.at!)),
      },
    });
    tl.to('.fp-bird', { motionPath: { path: '#fp-path', align: '#fp-path', alignOrigin: [0.5, 0.6], autoRotate: true }, ease: 'none' }, 0)
      .to('.fp-trail', { strokeDashoffset: 0, ease: 'none' }, 0);
  }

  /* showcase bird: feathers fan open on scroll, head turns toward the cursor */
  const show = document.getElementById('bird-show');
  if (show) {
    const wing = show.querySelector('.bs-bird .b-wing');
    // wing opens from a tucked position as the section scrolls in
    gsap.timeline({ scrollTrigger: { trigger: show, start: 'top 85%', end: 'center 50%', scrub: 1 } })
      .from(wing, { rotation: 28, scaleY: 0.55, ease: 'none' }, 0)
      .from('.bs-glow', { scale: 0.4, opacity: 0, ease: 'none' }, 0);
    const body = show.querySelector('.bs-bird .b-body');
    const tiltTo = gsap.quickTo(body, 'rotation', { duration: 0.8, ease: 'power3.out' });
    show.closest('section')!.addEventListener('mousemove', (e) => {
      const r = show.getBoundingClientRect();
      const dy = (e.clientY - (r.top + r.height * 0.35)) / r.height;
      tiltTo(gsap.utils.clamp(-14, 14, dy * 22));
    });
    // a few wingbeats when hovered
    show.addEventListener('mouseenter', () => gsap.fromTo(wing, { rotation: 0, scaleY: 1 }, { rotation: 18, scaleY: 0.6, duration: 0.2, yoyo: true, repeat: 3, ease: 'sine.inOut' }));
  }
}
