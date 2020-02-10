import React from 'react';
import Img from 'gatsby-image';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { FaMoneyBillWave, FaMap } from 'react-icons/fa';
import { graphql } from 'gatsby';

import styles from './TourTemplate.module.css';
import Layout from '../../components/Layout/Layout';
import SEO from '../../components/SEO/SEO';
import StyledBackground from '../../components/StyledBackground/StyledBackground';
import Day from '../../components/TourItems/TourItem/Day/Day';

const TourTemplate = ({ data }) => {
  const {
    name,
    price,
    country,
    days,
    start,
    description: { description },
    images,
    journey,
  } = data.tour;

  const [mainImage, ...tourImages] = images;

  return (
    <Layout>
      <SEO title={name} />
      <StyledBackground image={mainImage.fluid} />
      <section className={styles.template}>
        <div className={styles.center}>
          <div className={styles.images}>
            {tourImages.map((item, index) => {
              return (
                <Img
                  key={index}
                  fluid={item.fluid}
                  alt="Single Tour"
                  className={styles.image}
                />
              );
            })}
          </div>
          <h2>{name}</h2>
          <div className={styles.info}>
            <p>
              <FaMoneyBillWave className={styles.icon} />
              Starting from ${price}
            </p>
            <p>
              <FaMap className={styles.icon} />
              {country}
            </p>
          </div>
          <h4>Starts on: {start}</h4>
          <h4>Duration: {days} Days</h4>
          <p className={styles.desc}>{description}</p>
          <h2>Daily Schedule</h2>
          <div className={styles.journey}>
            {journey.map((item, index) => {
              return <Day key={index} day={item.day} info={item.info} />;
            })}
          </div>
          <AniLink fade to="/tours" className="btnPrimary">
            Back to Tours
          </AniLink>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    tour: contentfulTour(slug: { eq: $slug }) {
      name
      price
      country
      days
      start(formatString: "dddd MMMM Do, YYYY")
      description {
        description
      }
      journey {
        day
        info
      }
      images {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`;

export default TourTemplate;
