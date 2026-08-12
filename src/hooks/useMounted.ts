import { useSyncExternalStore } from 'react';

const emptySubscribe = () => () => {};

/**
 * Returns false during SSR and the first client render, true thereafter.
 *
 * Used to gate reduced-motion / scroll-value swaps so the server and first
 * client render stay identical (no hydration mismatch), then the client applies
 * the reduced state after mount. Uses `useSyncExternalStore` rather than
 * `useState` + `useEffect` so it does not call setState inside an effect.
 */
export function useMounted(): boolean {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}
