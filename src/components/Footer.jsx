import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/Logo-2.png';
import Grid from './Grid';

Footer.propTypes = {};

const footerAboutLinks = [
  {
    display: 'About',
    path: '/about',
  },
  {
    display: 'Contact',
    path: '/about',
  },
  {
    display: 'Careers',
    path: '/about',
  },
  {
    display: 'News',
    path: '/about',
  },
  {
    display: 'Services',
    path: '/about',
  },
];

const footerCustomerLinks = [
  {
    display: 'News',
    path: '/about',
  },
  {
    display: 'News',
    path: '/about',
  },
  {
    display: 'News',
    path: '/about',
  },
];

function Footer(props) {
  return (
    <footer className="footer">
      <div className="container">
        <Grid col={4} mdCol={2} smCol={1} gap={10}>
          <div>
            <div className="footer-title">Switchboard</div>
            <div className="footer-content">
              <p>
                Hotline{' '}
                <strong>
                  <a href="tel:+123456789">123456789</a>
                </strong>
              </p>
              <p>
                Hotline{' '}
                <strong>
                  <a href="tel:+123456789">123456789</a>
                </strong>
              </p>
              <p>
                Hotline{' '}
                <strong>
                  <a href="tel:+123456789">123456789</a>
                </strong>
              </p>
            </div>
          </div>

          <div>
            <div className="footer-title">About us</div>
            <div className="footer-content">
              {footerAboutLinks.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>

          <div>
            <div className="footer-title">Customer care</div>
            <div className="footer-content">
              {footerCustomerLinks.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>

          <div className="footer-about">
            <p>
              <Link to="/">
                <img src={logo} alt="" className="footer-logo" />
              </Link>
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio dicta culpa reiciendis
              totam quos sit sapiente quam mollitia aliquid quia!
            </p>
          </div>
        </Grid>
      </div>
    </footer>
  );
}

export default Footer;
