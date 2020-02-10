import React from 'react';

import Layout from '../Layout/Layout';
import SEO from '../SEO/SEO';
import StyledBackground from '../StyledBackground/StyledBackground';
import Posts from './Posts/Posts';

const Blog = ({ image }) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <StyledBackground image={image} />
      <Posts />
    </Layout>
  );
};

export default Blog;
