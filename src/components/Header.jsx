import { Badge, IconButton } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/Logo-2.png';
import { cartItemsCountSelector } from '../redux/Cart/selectors';
import SearchModal from './SearchModal';
import { showModal } from '../redux/Cart/searchSlice';

Header.propTypes = {};

const mainNav = [
  {
    display: 'Home',
    patch: '/',
  },
  {
    display: 'Catalog',
    patch: '/catalog',
  },
  {
    display: 'Accessories',
    patch: '/accessories',
  },
  {
    display: 'Contact',
    patch: '/contact',
  },
];

function Header(props) {
  const { pathname } = useLocation();
  // console.log(pathname.pathname);
  const activeNav = mainNav.findIndex((e) => e.patch === pathname);

  const headerRef = React.useRef(null);

  const cartItemCount = useSelector(cartItemsCountSelector);

  const disPatch = useDispatch();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('shrink');
      } else {
        headerRef.current.classList.remove('shrink');
      }
    });
    return () => {
      window.removeEventListener('scroll');
    };
  }, []);

  const handleShowModal = () => {
    const action = showModal();
    disPatch(action);
  };

  const menuLeft = useRef(null);

  const menuToggle = () => menuLeft.current.classList.toggle('active');

  return (
    <div className="header" ref={headerRef}>
      <div className="container">
        <div className="header-logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>

        <div className="header-menu">
          <div className="header-menu-mobile-toggle" onClick={menuToggle}>
            <i className="bx bx-menu-alt-left"></i>
          </div>
          <div className="header-menu-left" ref={menuLeft}>
            <div className="header-menu-left-close" onClick={menuToggle}>
              <i className="bx bx-chevron-left"></i>
            </div>
            {mainNav.map((item, index) => (
              <div
                className={`header-menu-left-item header-menu-item ${
                  index === activeNav ? 'active' : ''
                }`}
                key={index}
                onClick={menuToggle}
              >
                <Link to={item.patch}>
                  <span>{item.display}</span>
                </Link>
              </div>
            ))}
          </div>

          <div className="header-menu-right">
            <div className="header-menu-right-item header-menu-item" onClick={handleShowModal}>
              <i className="bx bx-search"></i>
            </div>
            <div className="header-menu-right-item header-menu-item">
              <Link to="/cart">
                <Badge badgeContent={cartItemCount} color="primary">
                  <i className="bx bx-shopping-bag"></i>
                </Badge>
              </Link>
            </div>
            {/* <div className="header-menu-right-item header-menu-item">
              <i className="bx bx-user"></i>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
