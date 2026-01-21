import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Skylap Portfolio Studio',
  description: 'Portfolio for Skylap',
};

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export default Layout;
