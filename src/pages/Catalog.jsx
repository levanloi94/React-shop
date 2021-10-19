import { Pagination } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import productApi from '../api/productApi';
import Button from '../components/Button';
import FilterViewer from '../components/FilterViewer';
import Grid from '../components/Grid';
import Helmet from '../components/Helmet';
import ProductCard from '../components/ProductCard';
import ProductFilters from '../components/ProductFilters';
import ProductSkeletonList from '../components/ProductSkeletonList';
import ProductSort from '../components/ProductSort';
import SearchModal from '../components/SearchModal';
import SearchView from '../components/SearchView';

Catalog.propTypes = {};

const useStyle = makeStyles({
  pagination: {
    marginTop: '30px',
  },
});

function Catalog(props) {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 12,
    _sort: 'salePrice',
    _order: 'asc',
    // slug_like: 'shirt',
  });
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 10,
  });

  const [searchFilter, setSearchFilter] = useState({});

  const classes = useStyle();
  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await productApi.getAll(filters);
        setProductList(data);
        setPagination(pagination);
      } catch (error) {
        console.log('Can not get product list', error.message);
      }

      setLoading(false);
    })();
  }, [filters]);

  const handlePageChange = (e, page) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      _page: page,
    }));
  };

  const handleSortChange = (newSortValue) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      _order: newSortValue,
    }));
  };

  const handleFilterChange = (newFilters) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }));
  };

  const setNewFilters = (newFilters) => {
    setFilters(newFilters);
  };

  const filterRef = useRef(null);

  const showHideFilter = () => filterRef.current.classList.toggle('active');

  const searchFilterSlice = useSelector((state) => state.search.searchFilter);

  useEffect(() => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...searchFilterSlice,
    }));
  }, [searchFilterSlice]);

  return (
    <Helmet title="Catalog page">
      <div className="catalog">
        <div className="catalog-filter" ref={filterRef}>
          <div className="catalog-filter-close" onClick={showHideFilter}>
            <i className="bx bx-left-arrow-alt"></i>
          </div>
          <ProductFilters filters={filters} onChange={handleFilterChange} />
        </div>
        <div className="catalog-content">
          <div className="catalog-btn-mb">
            <Button size="sm" onClick={showHideFilter}>
              Filters
            </Button>
          </div>

          {filters.slug_like ? <SearchView filters={filters} /> : ''}

          <ProductSort currentSort={filters._order} onChange={handleSortChange} />

          <FilterViewer filters={filters} onChange={setNewFilters} />
          {loading ? (
            <ProductSkeletonList length={12} />
          ) : (
            <Grid col={3} mdCol={2} smCol={2} gap={20}>
              {productList.map((item, index) => (
                <div key={index}>
                  <ProductCard
                    id={item.id}
                    img01={item.image01}
                    img02={item.image02}
                    name={item.title}
                    price={Number.parseInt(item.price)}
                    salePrice={Number.parseInt(item.salePrice)}
                    slug={item.slug}
                  />
                </div>
              ))}
            </Grid>
          )}
          <Pagination
            className={classes.pagination}
            count={Math.ceil(pagination._totalRows / pagination._limit)}
            page={pagination._page}
            onChange={handlePageChange}
            shape="rounded"
            color="primary"
            size="large"
          />
        </div>
      </div>
    </Helmet>
  );
}

export default Catalog;
