'use client';

import { useEffect } from 'react';

export default function PointerGlow() {
  useEffect(() => {
    const cards = Array.from(document.querySelectorAll('.interactive-card'));

    const handleMove = (event) => {
      const target = event.currentTarget;
      const rect = target.getBoundingClientRect();
      target.style.setProperty('--x', `${event.clientX - rect.left}px`);
      target.style.setProperty('--y', `${event.clientY - rect.top}px`);
    };

    cards.forEach((card) => card.addEventListener('pointermove', handleMove));
    return () => cards.forEach((card) => card.removeEventListener('pointermove', handleMove));
  }, []);

  return null;
}
