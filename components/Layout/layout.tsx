import { Footer } from '@/components/Footer';
import type { PropsWithChildren } from 'react';

export function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
}
