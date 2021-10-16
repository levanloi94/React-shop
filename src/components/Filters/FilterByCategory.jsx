import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import categoryApi from '../../api/categoryApi';
import { makeStyles } from '@mui/styles';

FilterByCategory.propTypes = {
  onChange: PropTypes.func,
};

const useStyle = makeStyles({
  categoryItem: {
    marginBottom: '12px',
    cursor: 'pointer',
    transition: '0.3s ease',
    textTransform: 'uppercase',
    '&:hover': {
      color: '#1976d2',
    },
  },
});

function FilterByCategory({ onChange }) {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await categoryApi.getAll();
        setCategoryList(res);
      } catch (error) {
        console.log('Failed to fetch caatgory list', error);
      }
    })();
  }, []);

  const handleCategoryClick = (category) => {
    if (onChange) {
      onChange(category.id);
    }
  };

  const classes = useStyle();

  return (
    <Box>
      <Typography style={{ padding: '12px 0', fontSize: '19px', fontWeight: 'bold' }}>
        Category
      </Typography>
      <ul>
        {categoryList.map((item, index) => (
          <li
            className={classes.categoryItem}
            key={item.id}
            onClick={() => handleCategoryClick(item)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default FilterByCategory;
