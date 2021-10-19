import React from 'react';
import PropTypes from 'prop-types';

SearchView.propTypes = {};

function SearchView({ filters }) {
  return (
    <div className="catalog-search-view">
      {filters.slug_like ? `Search results for "${filters.slug_like}"` : ''}
    </div>
  );
}

export default SearchView;
