import { PropsWithChildren } from 'react';
import Header from '$components/header/Header';
import Footer from '$components/footer/Footer';
import type { Theme } from '$types';
import ThemeProvider from '$components/theme/ThemeProvider';

type Props = {
  cookieTheme: Theme | null;
} & PropsWithChildren;

export default function BaseLayout({ cookieTheme, children: page }: Props) {
  return (
    <ThemeProvider cookieTheme={cookieTheme}>
      <div className="bg-gradient-to-t from-base-300 to-base-100 min-h-screen flex flex-col">
        <Header />
        {page}
        <Footer />
      </div>
    </ThemeProvider>
  );
}
