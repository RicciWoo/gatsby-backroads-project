import React from 'react';

import Layout from '../Layout/Layout';
import SEO from '../SEO/SEO';
import StyledBackground from '../StyledBackground/StyledBackground';
import ContactForm from './ContactForm/ContactForm';

const Contact = ({ image }) => {
  return (
    <Layout>
      <SEO title="Contact" />
      <StyledBackground image={image} />
      <ContactForm />
    </Layout>
  );
};

export default Contact;
