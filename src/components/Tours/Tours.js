import React from 'react';

import Layout from '../Layout/Layout';
import StyledBackground from '../StyledBackground/StyledBackground';
import AllTours from './AllTours/AllTours';

const Tours = ({ image }) => {
  return (
    <Layout>
      <StyledBackground image={image} />
      <AllTours />
    </Layout>
  );
};

export default Tours;
