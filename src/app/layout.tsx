import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Sidebar from '@/app/components/Sidebar';
import Header from '@/app/components/Header';
import Aside from '@/app/components/Aside';
import BottomPlayer from './components/player/BottomPlayer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Melo',
  description: 'Good tunez stay melo',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {/* Static sidebar for desktop */}
        <Sidebar />
        <div className='xl:pl-72'>
          {/* Sticky header */}
          <Header />
          <main className='lg:pr-96 pb-4 overflow-y-auto'>{children}</main>
          <Aside />
        </div>
        <BottomPlayer />
      </body>
    </html>
  );
}
