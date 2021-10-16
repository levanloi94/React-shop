import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import colorsApi from '../../api/colorsApi';

FilterByColor.propTypes = {
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
  title: {
    fontSize: '19px',
  },
});

function FilterByColor({ onChange }) {
  const [colorList, setColorList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await colorsApi.getAll();
        setColorList(res);
      } catch (error) {
        console.log('Failed to fetch caatgory list', error);
      }
    })();
  }, []);

  const handleColorClick = (color) => {
    if (onChange) {
      onChange(color.color);
    }
  };

  const classes = useStyle();

  return (
    <Box>
      <Typography style={{ padding: '12px 0', fontSize: '19px', fontWeight: 'bold' }}>
        Color
      </Typography>
      <ul>
        {colorList.map((item, index) => (
          <li className={classes.categoryItem} key={item.id} onClick={() => handleColorClick(item)}>
            {item.display}
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default FilterByColor;
