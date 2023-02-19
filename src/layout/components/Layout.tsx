import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <main className="flex h-screen items-center justify-center">{children}</main>
);

export default Layout;
