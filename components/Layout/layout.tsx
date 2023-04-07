import { Footer } from '@/components/Footer';

export function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
}
