import React from 'react';
import PropTypes from 'prop-types';
import { useMemo } from 'react';

import { Chip } from '@mui/material';
import { makeStyles } from '@mui/styles';

FilterViewer.propTypes = {
  filters: PropTypes.object,
  onChange: PropTypes.func,
  categoryList: PropTypes.array,
};
const formatNumber = (number) => {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(number);
};

const useStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexFlow: ' row wrap',
    padding: 0,

    margin: '8px 0',
    listStyle: 'none',
    textTransform: 'uppercase',
    '& > li': {
      margin: 0,
      padding: '4px',
    },
  },
}));
const CATEGORY_LIST = [
  {
    id: 1,
    name: 'T-Shirt',
  },
  {
    id: 2,
    name: 'Shirt',
  },
  {
    id: 3,
    name: 'Jean',
  },
];

const FILTER_LIST = [
  {
    id: 1,
    getLabel: (filters) => CATEGORY_LIST[filters['categoryId'] - 1].name,
    isActive: (filters) => true,
    isVisible: (filters) => filters['categoryId'],
    isRemovable: true,
    onRemove: (filters) => {
      const newFilters = { ...filters };

      delete newFilters['categoryId'];

      return newFilters;
    },
  },
  {
    id: 2,
    getLabel: (filters) => `Color: ${filters['colors_like']}`,
    isActive: (filters) => true,
    isVisible: (filters) => filters['colors_like'],
    isRemovable: true,
    onRemove: (filters) => {
      const newFilters = { ...filters };

      delete newFilters['colors_like'];

      return newFilters;
    },
  },
  {
    id: 3,
    getLabel: (filters) => `Size: ${filters['size_like']}`,
    isActive: (filters) => true,
    isVisible: (filters) => filters['size_like'],
    isRemovable: true,
    onRemove: (filters) => {
      const newFilters = { ...filters };

      delete newFilters['size_like'];

      return newFilters;
    },
  },
  {
    id: 4,
    getLabel: (filters) =>
      `From ${formatNumber(filters.salePrice_gte)} To ${formatNumber(filters.salePrice_lte)}`,
    isActive: (filters) => true,
    isVisible: (filters) =>
      Object.keys(filters).includes('salePrice_lte') &&
      Object.keys(filters).includes('salePrice_gte'),
    isRemovable: true,
    onRemove: (filters) => {
      const newFilters = { ...filters };

      delete newFilters.salePrice_lte;
      delete newFilters.salePrice_gte;
      return newFilters;
    },
    onToggle: (filters) => {},
  },
];

function FilterViewer({ filters = {}, onChange = null, categoryList }) {
  const classes = useStyle();

  const visibleFilters = useMemo(() => {
    return FILTER_LIST.filter((x) => x.isVisible(filters));
  }, [filters]);

  return (
    <ul component="ul" className={classes.root}>
      {visibleFilters.map((x) => (
        <li key={x.id} className="item-animation">
          <Chip
            size="small"
            label={x.getLabel(filters)}
            color={x.isActive(filters) ? 'primary' : 'default'}
            clickable={!x.isRemovable}
            onClick={
              x.isRemovable
                ? null
                : () => {
                    if (!onChange) return;

                    const newFilters = x.onToggle(filters);

                    onChange(newFilters);
                  }
            }
            onDelete={
              x.isRemovable
                ? () => {
                    if (!onChange) return;

                    const newFilters = x.onRemove(filters);

                    onChange(newFilters);
                  }
                : null
            }
          />
        </li>
      ))}
    </ul>
  );
}

export default FilterViewer;
