import React, { useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import Helmet from '../components/Helmet';
import ProductList from '../components/ProductList';
import ProductView from '../components/ProductView';
import Section, { SectionBody, SectionTittle } from '../components/Section';
import useProductDetail from '../hook/useProductDetail';

Product.propTypes = {};

function Product(props) {
  const {
    params: { id },
    url,
  } = useRouteMatch();

  const { product, loading } = useProductDetail(id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  if (loading) {
    return '';
  }

  return (
    <Helmet title="Product page">
      <Section>
        <SectionBody>
          <ProductView product={product} />
        </SectionBody>
      </Section>
      <Section>
        <SectionTittle>Related Products</SectionTittle>
        <SectionBody>
          <ProductList product={product} />
        </SectionBody>
      </Section>
    </Helmet>
  );
}

export default Product;
