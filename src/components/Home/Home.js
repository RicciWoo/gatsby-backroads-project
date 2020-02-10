import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import Layout from '../Layout/Layout';
import SEO from '../SEO/SEO';
import StyledBackground from '../StyledBackground/StyledBackground';
import Banner from '../Banner/Banner';
import About from './About/About';
import Services from './Services/Services';
import FeaturedTours from './FeaturedTours/FeaturedTours';

const Home = ({ image }) => (
  <Layout>
    <SEO title="Home" />
    <StyledBackground home image={image}>
      <Banner
        title="Continue Exploring"
        info='"We live in a wonderful world that is full of beauty, charm and adventure. There is no end to the adventures that we can have if only we seek them with our eyes open." -- Jawaharlal Nehru'
      >
        <AniLink to="/tours" className="btnWhite">
          Explore Tours
        </AniLink>
      </Banner>
    </StyledBackground>
    <About />
    <Services />
    <FeaturedTours />
  </Layout>
);

export default Home;
