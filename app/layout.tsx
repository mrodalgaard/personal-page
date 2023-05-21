import { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: process.env.REACT_APP_WEBSITE_NAME,
  description: process.env.REACT_APP_DESCRIPTION,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
