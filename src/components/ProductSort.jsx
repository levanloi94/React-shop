import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs } from '@mui/material';
import { makeStyles } from '@mui/styles';

ProductSort.propTypes = {
  currentSort: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};
const useStyle = makeStyles({});

function ProductSort({ currentSort, onChange }) {
  const handleSortChange = (e, newValue) => {
    if (onChange) onChange(newValue);
  };

  const classes = useStyle();

  return (
    <div className="product-sort">
      <Tabs value={currentSort} onChange={handleSortChange} aria-label="disabled tabs example">
        <Tab label="Price: Low To Hight" value="asc"></Tab>
        <Tab label="Price: Hight To Low" value="desc"></Tab>
      </Tabs>
    </div>
  );
}

export default ProductSort;
