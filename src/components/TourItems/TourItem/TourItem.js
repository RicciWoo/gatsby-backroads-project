import React from 'react';
import Img from 'gatsby-image';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import PropTypes from 'prop-types';
import { FaMap } from 'react-icons/fa';
import { useStaticQuery, graphql } from 'gatsby';

import styles from './TourItem.module.css';

const getImage = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

const TourItem = ({ tour }) => {
  const { defaultBcg } = useStaticQuery(getImage);
  const defaultImage = defaultBcg.childImageSharp.fluid;

  const { name, price, country, days, slug, images } = tour;
  const mainImage = images ? images[0].fluid : defaultImage;

  return (
    <article className={styles.tour}>
      <div className={styles.imgContainer}>
        <Img fluid={mainImage} className={styles.img} alt="Single Tour" />
        <AniLink fade className={styles.link} to={`/tours/${slug}`}>
          Details
        </AniLink>
      </div>
      <div className={styles.footer}>
        <h3>{name || 'Default Name'}</h3>
        <div className={styles.info}>
          <h4 className={styles.country}>
            <FaMap className={styles.icon} />
            {country || 'Default Country'}
          </h4>
          <div className={styles.details}>
            <h6>{days || 'Default'} days</h6>
            <h6>from ${price || 'Default Price'}</h6>
          </div>
        </div>
      </div>
    </article>
  );
};

TourItem.propTypes = {
  tour: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    country: PropTypes.string.isRequired,
    days: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
  }),
};

export default TourItem;
