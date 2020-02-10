import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import styles from './About.module.css';
import Title from '../../Title/Title';

const getImage = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

const About = () => {
  const { defaultBcg } = useStaticQuery(getImage);
  const defaultImage = defaultBcg.childImageSharp.fluid;

  return (
    <div>
      <Title title="About" subtitle="Us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <Img fluid={defaultImage} alt="Awesome Landscape" />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>Explore the Difference</h4>
          <p>
            Maybe the journey isn't so much about becoming anything. Maybe it's
            about unbecoming everything that isn't really you, so you can be who
            you were meant to be in the first place.
          </p>
          <p>
            Two roads diverged in a wood, and I - I took the one less traveled
            by, and that has made all the difference.
          </p>
          <button type="button" className="btnPrimary">
            Read More
          </button>
        </article>
      </div>
    </div>
  );
};

export default About;
