import { type Theme } from '$types';
import { createContext } from 'react';

export type ThemeState = {
  theme: Theme;
  toggleTheme: () => void;
};

export const ThemeCtx = createContext<ThemeState | null>(null);
