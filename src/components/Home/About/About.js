import React from 'react';

import Title from '../../Title/Title';
import styles from './About.module.css';
import homeBcg from '../../../images/homeBcg.jpeg';

const About = () => {
  return (
    <div>
      <Title title="About" subtitle="Us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <img src={homeBcg} alt="About Company" />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>Explore the Difference</h4>
          <p>
            Life is a journey that must be traveled no matter how bad the roads
            and accommodations.
          </p>
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
