import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import sizeApi from '../../api/sizeApi';

FilterBySize.propTypes = {
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

function FilterBySize({ onChange }) {
  const [sizeList, setSizeList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await sizeApi.getAll();
        setSizeList(res);
      } catch (error) {
        console.log('Failed to fetch size list', error);
      }
    })();
  }, []);

  const handleColorClick = (size) => {
    if (onChange) {
      onChange(size.size);
    }
  };

  const classes = useStyle();

  return (
    <Box>
      <Typography style={{ padding: '12px 0', fontSize: '19px', fontWeight: 'bold' }}>
        Size
      </Typography>
      <ul>
        {sizeList.map((item, index) => (
          <li className={classes.categoryItem} key={item.id} onClick={() => handleColorClick(item)}>
            {item.display}
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default FilterBySize;
