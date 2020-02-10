import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import styles from './Error.module.css';
import Layout from '../Layout/Layout';
import Banner from '../Banner/Banner';

const Error = () => {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="Oops, It's a Dead End">
          <AniLink to="/" className="btnWhite">
            Back to Home Page
          </AniLink>
        </Banner>
      </header>
    </Layout>
  );
};

export default Error;
