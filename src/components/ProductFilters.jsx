import PropTypes from 'prop-types';
import React from 'react';
import FilterByCategory from './Filters/FilterByCategory';
import FilterByColor from './Filters/FilterByColor';
import FilterByPrice from './Filters/FilterByPrice';
import FilterBySize from './Filters/FilterBySize';

ProductFilters.propTypes = {
  filters: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};

function ProductFilters({ filters, onChange }) {
  const handleCategoryChange = (newCategoryId) => {
    if (!onChange) return;
    const newFilters = {
      ...filters,
      categoryId: newCategoryId,
    };
    onChange(newFilters);
  };

  const handleColorChange = (newColor) => {
    if (!onChange) return;

    const newFilters = {
      ...filters,
      colors_like: newColor,
    };
    onChange(newFilters);
  };

  const handlePriceChange = (newPrice) => {
    if (!onChange) return;

    const newFilters = {
      ...filters,
      salePrice_gte: newPrice[0],
      salePrice_lte: newPrice[1],
    };
    onChange(newFilters);
  };

  const handleSizeChange = (newSize) => {
    if (!onChange) return;

    const newFilters = {
      ...filters,
      size_like: newSize,
    };
    onChange(newFilters);
  };

  return (
    <div>
      <FilterByCategory onChange={handleCategoryChange} />
      <FilterByColor onChange={handleColorChange} />
      <FilterBySize onChange={handleSizeChange} />
      <FilterByPrice onChange={handlePriceChange} />
    </div>
  );
}

export default ProductFilters;
