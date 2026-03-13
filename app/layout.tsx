import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'osigc-static',
  description: 'osigc-static — consulting',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
