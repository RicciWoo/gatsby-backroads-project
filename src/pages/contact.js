import React from 'react';
import { graphql } from 'gatsby';

import Contact from '../components/Contact/Contact';

export default ({ data }) => {
  const { contactBcg } = data;
  const contactImage = contactBcg.childImageSharp.fluid;

  return <Contact image={contactImage} />;
};

export const query = graphql`
  query {
    contactBcg: file(relativePath: { eq: "contactBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
