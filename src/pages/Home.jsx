import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import productApi from '../api/productApi';
import heroSliderData from '../assets/fake-data/hero-slider';
import policy from '../assets/fake-data/policy';
import Grid from '../components/Grid';
import Helmet from '../components/Helmet';
import HeroSlider from '../components/HeroSlider';
import PolicyCard from '../components/PolicyCard';
import ProductCard from '../components/ProductCard';
import Section, { SectionBody, SectionTittle } from '../components/Section';

// import 'swiper/css';

Home.propTypes = {};

function Home(props) {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await productApi.getAll();
        setProductList(data);
      } catch (error) {
        console.log('Can not get product list', error.message);
      }
    })();
  }, []);

  return (
    <Helmet title="Home page">
      {/* Hero slide */}
      <HeroSlider data={heroSliderData} control={true} auto={true} />
      {/* End Hero slide */}

      {/* Policy section */}
      <Section>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {policy.map((item, index) => (
              <Link to="/policy" key={index}>
                <PolicyCard key={index} name={item.name} desc={item.description} icon={item.icon} />
              </Link>
            ))}
          </Grid>
        </SectionBody>
      </Section>
      {/* End Policy section */}

      {/* best selling section */}
      <SectionTittle>Top Selling Products</SectionTittle>
      <SectionBody>
        <Grid col={4} mdCol={2} smCol={2} gap={20}>
          {productList
            .filter((x) => x.isPopular === true)
            .map((item, index) => (
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
            ))}
        </Grid>

        {/* <Slider {...settings}>
          {productData.getProducts(8).map((item, index) => (
            <ProductCard
              id={item.id}
              key={index}
              img01={item.image01}
              img02={item.image02}
              name={item.title}
              price={item.price}
              slug={item.slug}
            />
          ))}
        </Slider> */}
      </SectionBody>
      {/* End best selling section */}

      {/* new arrival section */}
      <SectionTittle>New Arrival Products</SectionTittle>
      <SectionBody>
        <Grid col={4} mdCol={2} smCol={2} gap={20}>
          {productList
            .filter((x) => x.isNew === true)
            .map((item, index) => (
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
            ))}
        </Grid>
      </SectionBody>
      {/* end new arrival section */}

      {/* banner section */}
      {/* <Section>
        <SectionBody>
          <Link to="/catalog">
            <img src={banner} alt="" />
          </Link>
        </SectionBody>
      </Section> */}
      {/* end banner section*/}

      {/* Popular section */}
      {/* <SectionTittle>Popular Products</SectionTittle>
      <SectionBody>
        <Grid col={4} mdCol={2} smCol={2} gap={20}>
          {productData.getProducts(4).map((item, index) => (
            <ProductCard
              key={index}
              img01={item.image01}
              img02={item.image02}
              name={item.title}
              price={item.price}
              slug={item.slug}
            />
          ))}
        </Grid>
      </SectionBody> */}
      {/* End Popular section */}
    </Helmet>
  );
}

export default Home;
