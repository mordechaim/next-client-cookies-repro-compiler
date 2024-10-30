import { CookiesProvider } from 'next-client-cookies/server';

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <CookiesProvider>{children}</CookiesProvider>
      </body>
    </html>
  );
}
