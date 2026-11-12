import { useCallback, useEffect, useState } from 'react';

const KEY = 'theme';
const query = () => window.matchMedia('(prefers-color-scheme: light)');
const systemTheme = () => (query().matches ? 'light' : 'dark');

function readSaved() {
  try {
    const saved = localStorage.getItem(KEY);
    return saved === 'light' || saved === 'dark' ? saved : null;
  } catch {
    return null; // storage blocked (e.g. private mode)
  }
}

function writeSaved(value) {
  try {
    if (value) localStorage.setItem(KEY, value);
    else localStorage.removeItem(KEY);
  } catch {
    // Storage blocked: the theme still changes for this visit.
  }
}

/**
 * The colour theme. It follows the system setting by default, live (so it switches when the OS does, e.g. at
 * sunset). The toggle overrides it; toggling back to whatever the system is using clears the override, so the
 * site follows the system again. index.html applies the same rule before the first paint.
 */
export function useTheme() {
  // On the server (pre-rendering) there's no document; the real theme is applied before paint by index.html.
  const [theme, setTheme] = useState(() => (typeof document === 'undefined' ? 'dark' : document.documentElement.getAttribute('data-theme') || systemTheme()));

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    // Keep the browser's toolbar colour in step, including when the toggle overrides the system setting.
    const bg = getComputedStyle(document.documentElement).getPropertyValue('--bg').trim();
    document.querySelectorAll('meta[name="theme-color"]').forEach((m) => m.setAttribute('content', bg));
  }, [theme]);

  useEffect(() => {
    const mq = query();
    const onChange = () => {
      if (!readSaved()) setTheme(systemTheme());
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const toggle = useCallback(() => {
    setTheme((current) => {
      const next = current === 'light' ? 'dark' : 'light';
      writeSaved(next === systemTheme() ? null : next);
      return next;
    });
  }, []);

  return [theme, toggle];
}
