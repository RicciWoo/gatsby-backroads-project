import React from 'react';

import Layout from '../Layout/Layout';
import StyledBackground from '../StyledBackground/StyledBackground';
import Posts from './Posts/Posts';

const Blog = ({ image }) => {
  return (
    <Layout>
      <StyledBackground image={image} />
      <Posts />
    </Layout>
  );
};

export default Blog;
