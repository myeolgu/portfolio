import React from 'react';
import Header from './Header';
import Modal from './Modal';
import CustomCursor from '../ui/CustomCursor';

const Layout = ({ children }) => {
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
