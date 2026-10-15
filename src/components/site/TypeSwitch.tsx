'use client';

import { useEffect, useSyncExternalStore } from 'react';

/**
 * DEVELOPMENT ONLY (rendered from layout.tsx behind NODE_ENV). A small switch,
 * bottom left, to compare headline families on the real pages before one is
 * chosen: IBM Plex Sans (the product's face) or IBM Plex Serif (editorial).
 * Remove once the choice is made and set the default in globals.css.
 */
type Family = 'sans' | 'serif';
const KEY = 'aquon-display';
const EVENT = 'aquon-display-change';

const subscribe = (onChange: () => void) => {
  window.addEventListener(EVENT, onChange);
  return () => window.removeEventListener(EVENT, onChange);
};
const read = (): Family => {
  try {
    return window.localStorage.getItem(KEY) === 'serif' ? 'serif' : 'sans';
  } catch {
    return 'sans';
  }
};

export function TypeSwitch() {
  const family = useSyncExternalStore(subscribe, read, () => 'sans' as Family);

  useEffect(() => {
    const root = document.documentElement;
    if (family === 'serif') root.setAttribute('data-display', 'serif');
    else root.removeAttribute('data-display');
  }, [family]);

  const choose = (next: Family) => {
    try {
      window.localStorage.setItem(KEY, next);
    } catch {
      /* storage blocked: the choice lasts for this view only */
    }
    window.dispatchEvent(new Event(EVENT));
  };

  return (
    <div className="fixed bottom-4 right-4 z-[80] flex items-center gap-1 rounded-full border border-navy/15 bg-white/95 p-1 font-sans text-xs shadow-lg backdrop-blur">
      <span className="px-2 text-gray-text">Headlines</span>
      {(['sans', 'serif'] as const).map((f) => (
        <button
          key={f}
          type="button"
          onClick={() => choose(f)}
          className={
            family === f
              ? 'rounded-full bg-navy px-3 py-1 font-semibold text-cream'
              : 'rounded-full px-3 py-1 text-navy hover:bg-light-gray'
          }
        >
          {f === 'sans' ? 'Plex Sans' : 'Plex Serif'}
        </button>
      ))}
    </div>
  );
}
