import React from 'react';
import PropTypes from 'prop-types';

PolicyCard.propTypes = {
  name: PropTypes.string,
  desc: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

function PolicyCard(props) {
  return (
    <div className="policy-card">
      <div className="policy-card-icon">
        <i className={props.icon}></i>
      </div>
      <div className="policy-card-info">
        <div className="policy-card-info-name">{props.name}</div>
        <div className="policy-card-info-desc">{props.desc}</div>
      </div>
    </div>
  );
}

export default PolicyCard;
