import React from 'react';

import Layout from '../Layout/Layout';
import SEO from '../SEO/SEO';
import StyledBackground from '../StyledBackground/StyledBackground';
import AllTours from './AllTours/AllTours';

const Tours = ({ image }) => {
  return (
    <Layout>
      <SEO title="Tours" />
      <StyledBackground image={image} />
      <AllTours />
    </Layout>
  );
};

export default Tours;
