import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

function Filter({ value, onFilter }) {
  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" value={value} onChange={onFilter} />
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};

export default Filter;
