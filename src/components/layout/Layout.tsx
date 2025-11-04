import Lenis from 'lenis';
import React, { useEffect } from 'react';
import Footer from './Footer';
import Header from './Header';
import Modal from './Modal';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  useEffect(() => {
    // Lenis smooth scrolling 초기화
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 클린업
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Header />
      <main className="main">{children}</main>
      <Footer />
      <Modal />
    </>
  );
};

export default Layout;
