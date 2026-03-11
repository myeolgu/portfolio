import React, { useState } from 'react';
import '../styles/style.scss';
import '../styles/globals.css';

import Layout from '../components/layout/Layout';
import Intro from '../components/ui/Intro';

function MyApp({ Component, pageProps }) {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <>
      {!introComplete && (
        <Intro onComplete={() => setIntroComplete(true)} />
      )}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
