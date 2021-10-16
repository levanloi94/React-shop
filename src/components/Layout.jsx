import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Routes from '../routes/Routes';
import Footer from './Footer';
import BackToTop from './BackToTop';
import ProductViewModal from './ProductViewModal';

Layout.propTypes = {};

function Layout(props) {
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <div>
            <Header {...props} />
            <div className="container">
              <div className="main">
                <Routes />
              </div>
            </div>
            <Footer />
            <BackToTop />
            <ProductViewModal />
          </div>
        )}
      />
    </BrowserRouter>
  );
}

export default Layout;
