import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import productApi from '../api/productApi';
import ProductCard from './ProductCard';

ProductList.propTypes = {
  product: PropTypes.object.isRequired,
};

function ProductList({ product }) {
  const [productList, setProductList] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  useEffect(() => {
    (async () => {
      try {
        const data = await productApi.getAll({ categoryId: product.categoryId });
        setProductList(data);
      } catch (error) {
        console.log('Can not get product list', error.message);
      }
    })();
  }, []);

  return (
    <div className="product-slide">
      <Slider {...settings}>
        {productList.map((item, index) => (
          <div key={index}>
            <ProductCard
              id={item.id}
              key={index}
              img01={item.image01}
              img02={item.image02}
              name={item.title}
              price={Number.parseInt(item.price)}
              salePrice={Number.parseInt(item.salePrice)}
              slug={item.slug}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ProductList;
