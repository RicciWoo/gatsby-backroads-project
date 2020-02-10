import React from 'react';
import { graphql } from 'gatsby';

import Tours from '../components/Tours/Tours';

export default ({ data }) => {
  const { defaultBcg } = data;
  const defaultImage = defaultBcg.childImageSharp.fluid;

  return <Tours image={defaultImage} />;
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
