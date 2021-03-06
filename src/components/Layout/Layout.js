import React from 'react';

import './Layout.css';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

const Layout = ({ children }) => {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
