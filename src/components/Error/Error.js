import React from 'react';
import { Link } from 'gatsby';

import Layout from '../Layout/Layout';
import styles from './Error.module.css';
import Banner from '../Banner/Banner';

const Error = () => {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="Oops, It's a Dead End">
          <Link to="/" className="btnWhite">
            Back to Home Page
          </Link>
        </Banner>
      </header>
    </Layout>
  );
};

export default Error;
