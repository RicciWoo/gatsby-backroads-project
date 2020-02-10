import React from 'react';
import { graphql } from 'gatsby';

import Blog from '../components/Blog/Blog';

export default ({ data }) => {
  const { blogBcg } = data;
  const blogImage = blogBcg.childImageSharp.fluid;

  return <Blog image={blogImage} />;
};

export const query = graphql`
  query {
    blogBcg: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
