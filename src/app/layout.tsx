import type { Metadata } from 'next';
//import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import localFont from 'next/font/local';
//const inter = Inter({ subsets: ['latin'] });

const myFont = localFont({
  src: [
    {
      path: './fonts/Aileron-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: './fonts/Aileron-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Aileron-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/Aileron-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],

  display: 'swap',
});

export const metadata: Metadata = {
  title: 'GODOY + FERESIN ARQUITECTAS | Estudio de Arquitectura',
  description:
    'Godoy Feresin Arquitectas es un estudio de arquitectura localizado en la ciudad de Parana - Entre Rios - Argentina',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={myFont.className}>
      <body className="flex flex-col min-h-screen">
        {/* <Header /> */}
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
