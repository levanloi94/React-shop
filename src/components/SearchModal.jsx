import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addFilter, hideModal } from '../redux/Cart/searchSlice';
import { Link } from 'react-router-dom';

SearchModal.propTypes = {};

function SearchModal({ onSubmit = {}, history }) {
  const openModal = useSelector((state) => state.search.showModal);

  const [value, setValue] = useState('');

  const disPatch = useDispatch();

  const handleCloseModal = () => {
    const action = hideModal();
    disPatch(action);
  };

  const handleValueChange = (value) => {
    setValue(value);
  };

  const handleSubmitValue = () => {
    if (!onSubmit) return;

    if (value === '') {
      return;
    } else {
      const searchFilter = {
        slug_like: value,
      };

      const action = addFilter(searchFilter);
      disPatch(action);

      setValue('');
      handleCloseModal();
    }
  };
  

  return (
    <div className={`search-modal ${openModal ? 'active' : ''}`}>
      <div className={`search-modal-content ${openModal ? 'active' : ''}`}>
        <i className="bx bx-x search-modal-close" onClick={handleCloseModal}></i>
        <div className="search-modal-form">
          <input type="text" value={value} onChange={(e) => handleValueChange(e.target.value)} />
          <Link to="/catalog">
            <div className="search-modal-btn" onClick={handleSubmitValue}>
              <i className="bx bx-search"></i>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SearchModal;
