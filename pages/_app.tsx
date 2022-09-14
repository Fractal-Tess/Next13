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
import Footer from '$components/core/Footer';

type AppProps = { cookieTheme: Theme | null };
type CombineProps<T> = AppProps & T;

export function App({
  Component,
  pageProps,
  cookieTheme,
}: CombineProps<NextAppProps>) {
  const [theme, setTheme] = useState<Theme>(cookieTheme || defaultTheme);

  return (
    <div className={`${theme} min-h-screen flex flex-col`} data-theme={theme}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Header />
        <div className="bg-base-200 flex-1 grid grid-cols-1 grid-rows-1">
          <Component {...pageProps} />
        </div>
        <Footer />
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
