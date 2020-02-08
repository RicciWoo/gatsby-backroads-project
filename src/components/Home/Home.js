import React from 'react';
import { Link } from 'gatsby';

import Layout from '../Layout/Layout';
import HomeBcg from '../HomeBcg/HomeBcg';
import Banner from '../Banner/Banner';
import About from './About/About';
import Services from './Services/Services';

const Home = () => (
  <Layout>
    <HomeBcg>
      <Banner
        title="Continue Exploring"
        info='"We live in a wonderful world that is full of beauty, charm and adventure. There is no end to the adventures that we can have if only we seek them with our eyes open." -- Jawaharlal Nehru'
      >
        <Link to="/tours" className="btnWhite">
          Explore Tours
        </Link>
      </Banner>
    </HomeBcg>
    <About />
    <Services />
  </Layout>
);

export default Home;
