import React from 'react';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import { useStaticQuery, graphql } from 'gatsby';

const getImage = graphql`
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

const StyledBackground = ({ image, className, children, home }) => {
  const { defaultBcg } = useStaticQuery(getImage);
  const defaultImage = defaultBcg.childImageSharp.fluid;

  return (
    <BackgroundImage
      className={className}
      fluid={image || defaultImage}
      home={home}
    >
      {children}
    </BackgroundImage>
  );
};

export default styled(StyledBackground)`
  min-height: ${props => (props.home ? 'calc(100vh - 62px)' : '50vh')};
  background: ${props =>
    props.home
      ? 'linear-gradient(rgba(63, 208, 212, 0.7), rgba(0, 0, 0, 0.7))'
      : 'none'};
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
`;