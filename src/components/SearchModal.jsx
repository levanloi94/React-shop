import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addFilter, hideModal } from '../redux/Cart/searchSlice';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

SearchModal.propTypes = {};

function SearchModal({ onSubmit = {} }) {
  const openModal = useSelector((state) => state.search.showModal);

  const [value, setValue] = useState('');

  const disPatch = useDispatch();

  const history = useHistory();

  const handleCloseModal = () => {
    const action = hideModal();
    disPatch(action);
  };

  const handleValueChange = (value) => {
    setValue(value);
  };

  const handleSubmitValue = (e) => {
    if (!onSubmit) return;

    e.preventDefault();

    if (value === '') {
      return;
    } else {
      const searchFilter = {
        slug_like: value,
      };

      const action = addFilter(searchFilter);
      disPatch(action);
      history.push('/catalog');

      setValue('');
      handleCloseModal();
    }
  };

  return (
    <div className={`search-modal ${openModal ? 'active' : ''}`}>
      <div className={`search-modal-content ${openModal ? 'active' : ''}`}>
        <i className="bx bx-x search-modal-close" onClick={handleCloseModal}></i>
        <form className="search-modal-form" type="submit" onSubmit={handleSubmitValue}>
          <input type="text" value={value} onChange={(e) => handleValueChange(e.target.value)} />
          <Link to="/catalog">
            <div type="submit" className="search-modal-btn" onClick={handleSubmitValue}>
              <i className="bx bx-search"></i>
            </div>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default SearchModal;
