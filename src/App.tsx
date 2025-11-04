import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import { ModalProvider } from './context/ModalContext';
import Main from './pages/Main';

const App: React.FC = () => {
  return (
    <ModalProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ModalProvider>
  );
};

export default App;
