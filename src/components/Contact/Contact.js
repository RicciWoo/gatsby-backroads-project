import React from 'react';

import Layout from '../Layout/Layout';
import StyledBackground from '../StyledBackground/StyledBackground';
import ContactForm from './ContactForm/ContactForm';

const Contact = ({ image }) => {
  return (
    <Layout>
      <StyledBackground image={image} />
      <ContactForm />
    </Layout>
  );
};

export default Contact;
