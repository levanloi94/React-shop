import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Routes from '../routes/Routes';
import BackToTop from './BackToTop';
import Footer from './Footer';
import Header from './Header';
import ProductViewModal from './ProductViewModal';
import SearchModal from './SearchModal';

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
            <SearchModal />
          </div>
        )}
      />
    </BrowserRouter>
  );
}

export default Layout;
