import '../styles/globals.css';
import NextApp, {
  AppContext,
  AppInitialProps,
  AppProps as NextAppProps,
} from 'next/app';
import { defaultTheme, Theme, themes } from '$types';

import { useState } from 'react';
import { ThemeContext } from '$context/ThemeToggle';
import { getThemeFromCookie } from '$utils';
import Header from '$components/core/Header';

type AppProps = { cookieTheme: Theme | null };
type CombineProps<T> = AppProps & T;

export function App({
  Component,
  pageProps,
  cookieTheme,
}: CombineProps<NextAppProps>) {
  const [theme, setTheme] = useState<Theme>(cookieTheme || defaultTheme);

  return (
    <div className={`${theme} min-h-screen`} data-theme={theme}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Header />
        <Component {...pageProps} />
      </ThemeContext.Provider>
    </div>
  );
}

App.getInitialProps = async (
  context: AppContext
): Promise<CombineProps<AppInitialProps>> => {
  const cookieTheme = getThemeFromCookie(context.ctx.req?.headers.cookie);
  const ctx = await NextApp.getInitialProps(context);
  return { ...ctx, cookieTheme };
};

export default App;
