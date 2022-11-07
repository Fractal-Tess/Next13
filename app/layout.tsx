import './globals.css';
import Header from '$components/header/Header';
import Footer from '$components/footer/Footer';
import ThemeProvider from 'src/context/ThemeProvider';
import type { PropsWithChildren } from 'react';
import { themeFromCookie } from '$utils/theme';

export default function RootLayout({ children }: PropsWithChildren) {
  const theme = themeFromCookie();

  return (
    <html>
      <head>
        <title>Next.js-13</title>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <ThemeProvider cookieTheme={theme}>
          <div className="flex flex-col bg-gradient-to-t from-base-300 to-base-100 min-h-screen">
            <Header />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
