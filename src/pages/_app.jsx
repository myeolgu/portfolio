import React, { useState } from 'react';
import '../styles/base/reset.scss';
import '../styles/base/fonts.scss';
import '../styles/base/common.scss';
import '../styles/style.scss';
import '../styles/Modal.scss';

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
