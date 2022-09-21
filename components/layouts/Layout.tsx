import Header from '$components/core/Header';
import Footer from '$components/core/Footer';
import type { Theme } from '$types';
import { PropsWithChildren } from 'react';
import ThemeWrapper from '$components/theme/ThemeWrapper';

type Props = {
  cookieTheme: Theme | null;
} & PropsWithChildren;

export default function MainLayout({ cookieTheme, children }: Props) {
  return (
    <ThemeWrapper cookieTheme={cookieTheme}>
      <Header />
      <div className="bg-base-200 flex-1 grid grid-cols-1 grid-rows-1">
        {children}
      </div>
      <Footer />
    </ThemeWrapper>
  );
}
