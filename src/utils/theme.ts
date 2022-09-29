import { type ThemeState } from '$context/ThemeToggle';
import { type Theme, themes } from '$types';
import { parse } from 'cookie';
import Cookies from 'js-cookie';

export const getThemeFromCookie = (
  cookie: string | undefined
): Theme | null => {
  if (!cookie) return null;
  const { theme } = parse(cookie) as {
    theme: string | undefined;
  };
  if (!theme) return null;

  if (isTheme(theme)) {
    return theme;
  } else {
    console.log(`Received invalid theme: ${theme}`);
    return null;
  }
};

const ONE_YEAR = 1000 * 86400 * 365;

export const toggleTheme = (themeContext: ThemeState | null) => {
  if (!themeContext) {
    throw new Error('Theme context must be within ThemeContextProvider');
  }
  const nextTheme = themeContext.theme === 'dark' ? 'light' : 'dark';
  themeContext.setTheme(nextTheme);
  Cookies.set('theme', nextTheme, {
    path: '/',
    expires: new Date(new Date().getTime() + ONE_YEAR)
  });
};

const isTheme = (theme: string): theme is Theme => {
  return themes.includes(theme as Theme);
};
