import React, { useEffect, useRef } from 'react';
import { SITE } from '../config';

export const TravelingSparkle: React.FC = () => {
  const starRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const star = starRef.current;
    if (!star) return;

    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ttElements = Array.from(document.querySelectorAll<HTMLElement>('.tt'));
    if (ttElements.length === 0) return;

    const state = {
      x: window.innerWidth * 0.12,
      y: 160,
      vx: 0,
      vy: 0,
      i: 0,
      mode: 'dock' as 'dock' | 'ride' | 'fly',
      lastSparkTime: 0,
      lastY: window.scrollY,
      vel: 0,
      flyStart: 0,
    };

    const getAnchor = (h: HTMLElement) => {
      const r = h.getBoundingClientRect();
      const isCenter = window.getComputedStyle(h).textAlign === 'center' || h.classList.contains('text-center') || h.closest('.text-center') !== null;
      return {
        x: r.left + (isCenter ? r.width / 2 : 22),
        y: r.top - 34,
        top: r.top,
        bottom: r.bottom,
      };
    };

    const clampY = (y: number) => Math.min(window.innerHeight - 60, Math.max(70, y));

    const spawnDot = (x: number, y: number, far = 40) => {
      if (document.hidden) return;
      const d = document.createElement('i');
      d.className = 'pt';
      d.setAttribute('aria-hidden', 'true');
      d.style.left = `${x}px`;
      d.style.top = `${y}px`;
      d.style.setProperty('--dx', `${(Math.random() - 0.5) * far}px`);
      d.style.setProperty('--dy', `${(Math.random() - 0.5) * far}px`);
      document.body.appendChild(d);
      setTimeout(() => {
        if (d.parentNode) d.parentNode.removeChild(d);
      }, 1200);
    };

    const landOnTitle = (h: HTMLElement) => {
      for (let i = 0; i < 16; i++) {
        spawnDot(state.x, state.y, 140);
      }
      h.classList.add('lit');
    };

    const pickIndex = () => {
      let activeIndex = 0;
      const currentTTs = Array.from(document.querySelectorAll<HTMLElement>('.tt'));
      currentTTs.forEach((h, i) => {
        const top = h.getBoundingClientRect().top;
        if (top < window.innerHeight * 0.7) {
          activeIndex = i;
        }
      });
      return activeIndex;
    };

    let prevTime = performance.now();
    let animId: number;

    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - prevTime) / 1000);
      prevTime = now;

      state.vel = Math.abs(window.scrollY - state.lastY) / Math.max(dt, 0.001);
      state.lastY = window.scrollY;

      const currentTTs = Array.from(document.querySelectorAll<HTMLElement>('.tt'));
      if (currentTTs.length === 0) {
        animId = requestAnimationFrame(tick);
        return;
      }

      const targetIndex = pickIndex();
      if (targetIndex !== state.i) {
        state.i = targetIndex;
        state.mode = 'fly';
        state.flyStart = now;
        star.classList.add('flying');
      }

      const activeElement = currentTTs[state.i] || currentTTs[0];
      const anchor = getAnchor(activeElement);
      const isDesktop = window.innerWidth > 820;
      const rideX = isDesktop ? window.innerWidth * 0.05 : 22;
      const rideY = window.innerHeight * 0.38 + Math.sin(now / 700) * 14;
      const visible = anchor.bottom > 80 && anchor.top < window.innerHeight - 40;

      let tx = 0;
      let ty = 0;
      let k = 70;
      let c = 2 * Math.sqrt(k) * 0.62;

      if (state.mode === 'fly') {
        tx = anchor.x;
        ty = clampY(anchor.y);
        k = 75;
        c = 2 * Math.sqrt(k) * 0.62;

        if (Math.hypot(state.x - tx, state.y - ty) < 12 && visible) {
          state.mode = 'dock';
          star.classList.remove('flying');
          landOnTitle(activeElement);
        }
      } else if (state.mode === 'dock') {
        tx = anchor.x;
        ty = anchor.y;
        k = 220;
        c = 2 * Math.sqrt(k);

        if (!visible) {
          state.mode = 'ride';
        }
      } else {
        // RIDE
        tx = rideX;
        ty = rideY;
        k = 36;
        c = 2 * Math.sqrt(k) * 0.8;

        if (visible && anchor.top < window.innerHeight * 0.7) {
          state.mode = 'fly';
          star.classList.add('flying');
        }
      }

      // Smooth parabolic arc deviation during flight
      const dist = Math.hypot(tx - state.x, ty - state.y);
      const side = state.mode === 'fly' ? Math.sin(Math.min(1, dist / 500) * Math.PI) * 110 : 0;
      const ax = (tx - state.x) * k - state.vx * c + side * k * 0.004;
      const ay = (ty - state.y) * k - state.vy * c;

      if (still) {
        state.x = tx;
        state.y = ty;
      } else {
        state.vx += ax * dt;
        state.vy += ay * dt;
        state.x += state.vx * dt;
        state.y += state.vy * dt;
      }

      star.style.transform = `translate3d(${state.x}px, ${state.y}px, 0)`;

      // Sparkles trailing while riding or flying
      if (!still && state.mode !== 'dock' && now - state.lastSparkTime > (state.mode === 'fly' ? 24 : Math.max(60, 220 - state.vel / 8))) {
        state.lastSparkTime = now;
        spawnDot(state.x, state.y, state.mode === 'fly' ? 44 : 26);
      }

      animId = requestAnimationFrame(tick);
    };

    const snapToFirst = () => {
      const currentTTs = Array.from(document.querySelectorAll<HTMLElement>('.tt'));
      if (currentTTs[0]) {
        const a = getAnchor(currentTTs[0]);
        state.x = a.x;
        state.y = clampY(a.y);
        state.vx = 0;
        state.vy = 0;
        star.style.transform = `translate3d(${state.x}px, ${state.y}px, 0)`;
        currentTTs[0].classList.add('lit');
      }
    };

    window.addEventListener('resize', snapToFirst);
    // Initial delay to ensure elements are rendered
    const timeout = setTimeout(() => {
      snapToFirst();
      animId = requestAnimationFrame(tick);
    }, 150);

    return () => {
      window.removeEventListener('resize', snapToFirst);
      clearTimeout(timeout);
      cancelAnimationFrame(animId);
      // Clean up any remaining spark dots
      document.querySelectorAll('.pt').forEach((el) => el.remove());
    };
  }, []);

  return (
    <div id="star" ref={starRef} aria-hidden="true">
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20 0L24.5 15.5L40 20L24.5 24.5L20 40L15.5 24.5L0 20L15.5 15.5L20 0Z"
          fill="#FFF3C9"
        />
        <circle cx="20" cy="20" r="4" fill="#FFFFFF" />
      </svg>
    </div>
  );
};
