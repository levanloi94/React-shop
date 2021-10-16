import React from 'react';
import productData from '../assets/fake-data/products';
import Button from './Button';
import ProductView from './ProductView';

ProductViewModal.propTypes = {};

function ProductViewModal(props) {
  const product = productData.getProductBySlug('quan-jean-phong-cach-18');
  return (
    <div className={`product-modal `}>
      <div className="product-modal-content">
        <ProductView product={product} />
        <div className="product-modal-content-close">
          <Button size="sm">Close</Button>
        </div>
      </div>
    </div>
  );
}

export default ProductViewModal;
