import React from 'react';
import PropTypes from 'prop-types';
import Slider from '@mui/material/Slider';
import { Typography } from '@mui/material';
import Button from '../Button';
FilterByPrice.propTypes = {
  onChange: PropTypes.func,
};

function valuetext(value) {
  return `${value}°C`;
}

function FilterByPrice({ onChange }) {
  const [value, setValue] = React.useState([0, 500000]);

  const handlePriceChange = (e, newPrice) => {
    setValue(newPrice);
  };

  const handleSubmitPrice = () => {
    onChange(value);
  };
  return (
    <div>
      <Typography style={{ padding: '12px 0', fontSize: '19px', fontWeight: 'bold' }}>
        Price
      </Typography>
      <div style={{ marginBottom: '15px' }}>
        From{' '}
        <span style={{ fontWeight: 'bold' }}>
          {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value[0])}-
        </span>
        To{' '}
        <span style={{ fontWeight: 'bold' }}>
          {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value[1])}
        </span>
      </div>
      <Button size="sm" onClick={handleSubmitPrice}>
        ok
      </Button>

      <div style={{ width: '80%' }}>
        <Slider
          getAriaLabel={() => 'Temperature range'}
          value={value}
          onChange={handlePriceChange}
          min={0}
          max={500000}
          step={10000}
          size="small"
        />
      </div>
    </div>
  );
}

export default FilterByPrice;
