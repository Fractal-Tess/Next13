import '../styles/globals.css';
import NextApp, {
  AppContext,
  AppInitialProps,
  AppProps as NextAppProps,
} from 'next/app';
import { defaultTheme, Theme, themes } from '$types';

import { useState } from 'react';
import cookie from 'cookie';
import { ThemeContext } from '$context/ThemeToggle';
import Header from 'components/core/Header';

type AppProps = { cookieTheme: Theme | null };
type CombineProps<T> = AppProps & T;

export function App({
  Component,
  pageProps,
  cookieTheme,
}: CombineProps<NextAppProps>) {
  const [theme, setTheme] = useState<Theme>(cookieTheme || defaultTheme);
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Header />
        <Component {...pageProps} />
      </ThemeContext.Provider>
    </>
  );
}

App.getInitialProps = async (
  context: AppContext
): Promise<CombineProps<AppInitialProps>> => {
  const { theme } = cookie.parse(context.ctx.req?.headers.cookie || '') as {
    theme: string | undefined;
  };
  let cookieTheme: Theme | null = null;
  if (theme) {
    if (themes.includes(theme as Theme)) {
      cookieTheme = theme as Theme;
    } else console.log(`Received invalid theme: ${theme}`);
  }
  const ctx = await NextApp.getInitialProps(context);
  return { ...ctx, cookieTheme };
};

export default App;
