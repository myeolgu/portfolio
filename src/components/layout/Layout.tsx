import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Modal from './Modal';
import CustomCursor from '../ui/CustomCursor';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <CustomCursor />
      <Header />
      <main className="main">{children}</main>
      <Footer />
      <Modal />
    </>
  );
};

export default Layout;
