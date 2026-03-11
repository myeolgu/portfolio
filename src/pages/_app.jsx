import React from 'react';
import '../styles/base/reset.scss';
import '../styles/base/fonts.scss';
import '../styles/base/common.scss';
import '../styles/style.scss';
import '../styles/Modal.scss';

import Layout from '../components/layout/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
