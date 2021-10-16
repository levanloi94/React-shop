import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import formatPrice from '../utils/numberWithCommas';
import { withRouter } from 'react-router';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/Cart/cartSlide';
ProductView.propTypes = {
  product: PropTypes.object,
};

function ProductView(props) {
  const history = props.history;
  let product = props.product;

  const [previewImg, setPreviewImg] = useState(product.image01);
  const [descExpand, setDescExpand] = useState(false);

  const [color, setColor] = useState(undefined);

  const [size, setSize] = useState(undefined);

  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const updateQuantity = (type) => {
    if (type === 'plus') {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
    }
  };

  const handlesPreviewImg = (img) => {
    setPreviewImg(img);
  };

  useEffect(() => {
    setPreviewImg(product.image01);
    setQuantity(1);
    setColor(undefined);
    setSize(undefined);
  }, [product]);

  const check = () => {
    if (color === undefined) {
      alert('Please choose color');
      return false;
    }

    if (size === undefined) {
      alert('Please choose size');
      return false;
    }

    return true;
  };

  const handleAddToCart = () => {
    if (check()) {
      const action = addToCart({
        id: product.id,
        product,
        color: color,
        size: size,
        quantity: quantity,
      });
      console.log(action);
      dispatch(action);
    }
  };

  const goToCart = () => {
    if (check()) history.push('/cart');
    handleAddToCart();
  };

  return (
    <div className="product">
      <div className="product-img">
        <div className="product-img-list">
          <div className="product-img-list-item">
            <img src={product.image01} alt="" onClick={() => handlesPreviewImg(product.image01)} />
          </div>
          <div className="product-img-list-item" onClick={() => handlesPreviewImg(product.image02)}>
            <img src={product.image02} alt="" />
          </div>
        </div>
        <div className="product-img-main">
          <img src={previewImg} alt="" />
        </div>
        <div className={`product-desc ${descExpand ? 'active' : ''}`}>
          <div className="product-desc-title">Product detail</div>
          <div
            className={`product-desc-content `}
            dangerouslySetInnerHTML={{ __html: product.description }}
          ></div>
          <div className="product-desc-toggle">
            <Button size="sm" onClick={() => setDescExpand(!descExpand)}>
              {descExpand ? 'Collapse' : 'See more'}
            </Button>
          </div>
        </div>
      </div>

      <div className="product-info">
        <h1 className="product-info-title">{product.title}</h1>
        <div className="product-info-item">
          <span className="product-info-item-price">{formatPrice(product.salePrice)}</span>
        </div>
        <div className="product-info-item">
          <div className="product-info-item-title">Colors</div>
          <div className="product-info-item-list">
            {product.colors.map((item, index) => (
              <div
                key={index}
                className={`product-info-item-list-item ${color === item ? 'active' : ''}`}
                onClick={() => setColor(item)}
              >
                <div className={`circle bg-${item}`}></div>
              </div>
            ))}
          </div>
        </div>

        <div className="product-info-item">
          <div className="product-info-item-title">Size</div>
          <div className="product-info-item-list">
            {product.size.map((item, index) => (
              <div
                key={index}
                className={`product-info-item-list-item ${size === item ? 'active' : ''}`}
                onClick={() => setSize(item)}
              >
                <div className="product-info-item-list-item-size">{item}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="product-info-item">
          <div className="product-info-item-title">Quantity</div>
          <div className="product-info-item-quantity">
            <div className="product-info-item-quantity-btn" onClick={() => updateQuantity('minus')}>
              <i className="bx bx-minus"></i>
            </div>
            <div className="product-info-item-quantity-input">{quantity}</div>
            <div className="product-info-item-quantity-btn" onClick={() => updateQuantity('plus')}>
              <i className="bx bx-plus"></i>
            </div>
          </div>
        </div>

        <div className="product-info-item">
          <Button onClick={handleAddToCart}>Add To Cart</Button>
          <Button onClick={() => goToCart()}>Buy</Button>
        </div>
      </div>

      <div className={`product-desc mobile ${descExpand ? 'active' : ''}`}>
        <div className="product-desc-title">Product detail</div>
        <div
          className={`product-desc-content `}
          dangerouslySetInnerHTML={{ __html: product.description }}
        ></div>
        <div className="product-desc-toggle">
          <Button size="sm" onClick={() => setDescExpand(!descExpand)}>
            {descExpand ? 'Collapse' : 'See more'}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default withRouter(ProductView);
