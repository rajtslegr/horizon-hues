import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <div className="flex h-screen items-center justify-center bg-black px-4 md:py-48 md:px-32">
    <main className="flex w-full flex-col justify-center rounded border-black bg-neutral-900 p-4 shadow md:my-96 md:h-full">
      {children}
    </main>
  </div>
);

export default Layout;
