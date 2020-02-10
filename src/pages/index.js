import React from 'react';
import { graphql } from 'gatsby';

import Home from '../components/Home/Home';

export default ({ data }) => {
  const { defaultBcg } = data;
  const defaultImage = defaultBcg.childImageSharp.fluid;

  return <Home image={defaultImage} />;
};

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
