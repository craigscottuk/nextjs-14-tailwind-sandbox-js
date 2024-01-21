import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'nextjs-14-tailwind-sandbox-js',
  description: 'Next.js 14 and Tailwind CSS in a JavaScript sandbox.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
