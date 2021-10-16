import React from 'react';
import PropTypes from 'prop-types';
import Helmet from '../components/Helmet';
import { useSelector } from 'react-redux';
import { cartItemsCountSelector, cartTotalSelector } from '../redux/Cart/selectors';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import formatPrice from '../utils/numberWithCommas';
import CartItem from '../components/CartItem';

Cart.propTypes = {};

function Cart(props) {
  const cartTotal = useSelector(cartTotalSelector);
  const cartItemCount = useSelector(cartItemsCountSelector);
  const cartProductList = useSelector((state) => state.cart.cartItems);

  return (
    <Helmet title="Cart Page">
      <div className="cart">
        <div className="cart__info">
          <div className="cart__info__txt">
            <p>You have {cartItemCount} products in your cart </p>
            <div className="cart__info__txt__price">
              <span>Total :</span> <span>{formatPrice(Number(cartTotal))}</span>
            </div>
          </div>
          <div className="cart__info__btn">
            <Button size="sm">Order</Button>
            <Link to="/catalog">
              <Button size="sm">Continue shopping</Button>
            </Link>
          </div>
        </div>
        <div className="cart__list">
          {cartProductList.map((item, index) => (
            <CartItem item={item} key={index} />
            // <img src={item.product.image01} alt="" />
          ))}
        </div>
      </div>
    </Helmet>
  );
}

export default Cart;
