'use client';

import { useEffect } from 'react';

export default function ScrollRestoration() {
  useEffect(() => {
    // Disable browser's automatic scroll restoration on load/refresh
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    // Immediately pin scroll position to the top
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    // Also enforce on subsequent frames to override any delayed browser scroll restoration
    const raf1 = requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    });

    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 150);

    return () => {
      cancelAnimationFrame(raf1);
      clearTimeout(timer);
    };
  }, []);

  return null;
}

