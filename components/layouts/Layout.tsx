import { ThemeContext } from '$context/ThemeToggle';
import Header from '$components/core/Header';
import Footer from '$components/core/Footer';
import { defaultTheme, Theme } from '$types';
import { PropsWithChildren, useState } from 'react';

type Props = {
  cookieTheme: Theme | null;
} & PropsWithChildren;
export default function MainLayout({ cookieTheme, children }: Props) {
  const [theme, setTheme] = useState<Theme>(cookieTheme || defaultTheme);

  return (
    <div className={`${theme} min-h-screen flex flex-col`} data-theme={theme}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Header />
        <div className="bg-base-200 flex-1 grid grid-cols-1 grid-rows-1">
          {children}
        </div>
        <Footer />
      </ThemeContext.Provider>
    </div>
  );
}
