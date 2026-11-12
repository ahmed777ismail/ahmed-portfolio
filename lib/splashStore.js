'use client';

import { useSyncExternalStore } from 'react';

let state = {
  phase: 'intro', // 'intro' | 'docking' | 'landed' | 'done'
  siteReady: false,
};

const listeners = new Set();

function emitChange() {
  for (const listener of listeners) {
    listener();
  }
}

export const splashStore = {
  getState() {
    return state;
  },
  setPhase(nextPhase) {
    if (state.phase === nextPhase) return;
    state = { ...state, phase: nextPhase };
    emitChange();
  },
  markSiteReady() {
    if (state.siteReady) return;
    state = { ...state, siteReady: true };
    emitChange();
  },
  subscribe(listener) {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },
};

export function useSplashStore(selector = (s) => s) {
  const selectedState = useSyncExternalStore(
    splashStore.subscribe,
    () => selector(splashStore.getState()),
    () => selector(splashStore.getState())
  );
  return selectedState;
}

useSplashStore.getState = splashStore.getState;
useSplashStore.subscribe = splashStore.subscribe;
useSplashStore.setPhase = splashStore.setPhase;

