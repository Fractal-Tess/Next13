import Header from '$components/core/Header';
import Footer from '$components/core/Footer';
import type { Theme } from '$types';
import { PropsWithChildren } from 'react';
import ThemeWrapper from '$components/theme/ThemeWrapper';
import AnimateInView from '$components/animation/AnimateInView';

type Props = {
  cookieTheme: Theme | null;
} & PropsWithChildren;

export default function MainLayout({ cookieTheme, children: page }: Props) {
  return (
    <ThemeWrapper cookieTheme={cookieTheme}>
      <AnimateInView>
        <div className="bg-gradient-to-t from-base-300 to-base-100 min-h-screen flex flex-col">
          <Header />
          {page}
          <Footer />
        </div>
      </AnimateInView>
    </ThemeWrapper>
  );
}
