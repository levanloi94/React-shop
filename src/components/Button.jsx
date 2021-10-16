import PropTypes from 'prop-types';
import React from 'react';

Button.propTypes = {
  bgColor: PropTypes.string,
  size: PropTypes.string,
  icon: PropTypes.string,
  animation: PropTypes.bool,
  onClick: PropTypes.func,
};

function Button(props) {
  const bg = props.bgColor ? 'bg-' + props.bgColor : 'bg-main';

  const size = props.size ? 'btn-' + props.size : '';

  const animation = props.animation ? 'btn-animate' : '';

  return (
    <button
      className={`btn ${bg} ${size} ${animation}`}
      onClick={props.onClick ? () => props.onClick() : null}
    >
      <span className="btn-txt">{props.children}</span>
      {props.icon ? (
        <span className="btn-icon">
          <i className={`${props.icon} bx-tada`}></i>
        </span>
      ) : null}
    </button>
  );
}

export default Button;
