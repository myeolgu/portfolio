import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Main from './pages/Main';
import Intro from './components/ui/Intro';

const App: React.FC = () => {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {showIntro && <Intro onComplete={handleIntroComplete} />}
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
