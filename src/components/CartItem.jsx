import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart, updateQuanTity } from '../redux/Cart/cartSlide';
import formatPrice from '../utils/numberWithCommas';

const CartItem = (props) => {
  const dispatch = useDispatch();

  const itemRef = useRef(null);

  const [item, setItem] = useState(props.item);
  const [quantity, setQuantity] = useState(props.item.quantity);

  useEffect(() => {
    setItem(props.item);
    setQuantity(props.item.quantity);
  }, [props.item]);

  const updateQuantity = (opt) => {
    if (opt === '+') {
      const action = updateQuanTity({
        id: item.id,
        quantity: quantity + 1,
      });
      dispatch(action);
    }
    if (opt === '-') {
      const action = updateQuanTity({
        id: item.id,
        quantity: quantity - 1 < 1 ? 1 : quantity - 1,
      });
      dispatch(action);
    }
  };

  const removeCartItem = () => {
    console.log('removeCartItem');
    const action = removeFromCart(item.id);
    dispatch(action);
  };

  return (
    <div className="cart__item" ref={itemRef}>
      <div className="cart__item__image">
        <img src={item.product.image01} alt="" />
      </div>
      <div className="cart__item__info">
        <div className="cart__item__info__name">
          <Link to={`/catalog/${item.product.id}`}>
            {`${item.product.title} - ${item.color} - ${item.size}`}
          </Link>
        </div>
        <div className="cart__item__info__price">{formatPrice(item.product.salePrice)}</div>
        <div className="cart__item__info__quantity">
          <div className="product-info-item-quantity">
            <div className="product-info-item-quantity-btn" onClick={() => updateQuantity('-')}>
              <i className="bx bx-minus"></i>
            </div>
            <div className="product-info-item-quantity-input">{quantity}</div>
            <div className="product-info-item-quantity-btn" onClick={() => updateQuantity('+')}>
              <i className="bx bx-plus"></i>
            </div>
          </div>
        </div>
        <div className="cart__item__del">
          <i className="bx bx-trash" onClick={() => removeCartItem()}></i>
        </div>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.object,
};

export default CartItem;
