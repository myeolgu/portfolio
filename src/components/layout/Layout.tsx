import React from 'react';
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
      <Modal />
    </>
  );
};

export default Layout;
