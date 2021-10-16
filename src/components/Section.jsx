import React from 'react';
import PropTypes from 'prop-types';

Section.propTypes = {};

function Section(props) {
  return <div className="section">{props.children}</div>;
}

export function SectionTittle(props) {
  return <div className="section-title">{props.children}</div>;
}

export function SectionBody(props) {
  return <div className="section-body">{props.children}</div>;
}

export default Section;
