import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import Button from './Button';

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  img01: PropTypes.string.isRequired,
  img02: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  salePrice: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
};

function ProductCard(props) {
  return (
    <div className="product-card">
      <div className="product-card-img">
        <img src={props.img01} alt="" />
        <img src={props.img02} alt="" />
      </div>
      <h3 className="product-card-name">{props.name}</h3>
      <div className="product-card-price">
        {/* {props.price} */}
        {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
          props.salePrice
        )}
        <span className="product-card-price-old">
          <del>{props.price}</del>
        </span>
      </div>
      <div className="product-card-btn">
        <Link to={`/catalog/${props.id}`}>
          <Button size="sm" icon="bx bx-cart" animation={true}>
            Buy
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
