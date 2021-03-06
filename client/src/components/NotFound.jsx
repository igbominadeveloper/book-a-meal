import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from './util/Footer';

const NotFound = () => (
  <main>
    <div
      className="notfound-overlay"
      style={{
        minHeight: 'calc(100vh - 145px)',
        padding: '1rem',
      }}
    >
      <h6
        className="text-center"
        style={{ paddingTop: '60vh' }}
      >
        Either check the url or <NavLink to="/">go home</NavLink>
      </h6>
    </div>
    <Footer />
  </main>
);

export default NotFound;
