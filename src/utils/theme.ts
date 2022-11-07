import { type Theme, themes } from '$types/Theme';
import { cookies as nextCookies } from 'next/headers';

const isTheme = (theme: string): theme is Theme =>
  themes.includes(theme as Theme);

export const themeFromCookie = (): Theme | null => {
  const theme = nextCookies().get('theme')?.value;

  if (!theme) return null;

  if (isTheme(theme)) return theme;

  return null;
};
