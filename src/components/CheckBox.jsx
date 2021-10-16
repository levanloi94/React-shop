import React, { useRef } from 'react';
import PropTypes from 'prop-types';

CheckBox.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
};

function CheckBox(props) {
  const inputRef = useRef(null);

  const onChange = () => {
    if (props.onChange) {
      props.onChange(inputRef.current);
    }
  };

  return (
    <label className="custom-checkbox">
      <input type="checkbox" ref={inputRef} onChange={onChange} checked={props.checked} />
      <span className="custom-checkbox-checkmark">
        <i className="bx bx-check"></i>
      </span>
      {props.label}
    </label>
  );
}

export default CheckBox;
