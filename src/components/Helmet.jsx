import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

Helmet.propTypes = {
  title: PropTypes.string.isRequired,
};

function Helmet(props) {
  document.title = 'Yolo - ' + props.title;

  useEffect(() => {
    window.scrollTo(0, 0);
    return <div>{props.children}</div>;
  });

  return <div>{props.children}</div>;
}

export default Helmet;
