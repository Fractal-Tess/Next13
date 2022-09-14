import { type Theme } from '$types';

import React, { type SetStateAction, type Dispatch } from 'react';

export type ThemeState = {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
};

export const ThemeContext = React.createContext<ThemeState | null>(null);
