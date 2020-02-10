import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import styles from './TourItems.module.css';
import Title from '../Title/Title';
import TourItem from './TourItem/TourItem';

const TourItemsFeatured = ({ tours }) => {
  return (
    <section className={styles.tours}>
      <Title title="Featured" subtitle="Tours" />
      <div className={styles.center}>
        {tours.map(({ node }) => {
          return <TourItem key={node.id} tour={node} />;
        })}
      </div>
      <AniLink fade to="/tours" className="btnPrimary">
        All Tours
      </AniLink>
    </section>
  );
};

export default TourItemsFeatured;
