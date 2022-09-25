import { ThemeContext } from '$context/ThemeToggle';
import { PropsWithChildren, useState } from 'react';
import { defaultTheme, Theme } from '$types';

type Props = {
  cookieTheme: Theme | null;
} & PropsWithChildren;

export default function ThemeWrapper({ children, cookieTheme }: Props) {
  const [theme, setTheme] = useState<Theme>(cookieTheme || defaultTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={theme} data-theme={theme}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
