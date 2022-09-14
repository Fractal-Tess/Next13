import { type Theme } from '$types';

import React, { type SetStateAction, type Dispatch } from 'react';

type ThemeContext = {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
};

export const ThemeContext = React.createContext<ThemeContext | null>(null);
