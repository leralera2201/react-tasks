import React from 'react';
import PropTypes from 'prop-types';

import classes from './Search.module.scss';

const Search = ({ onChange }) => (
  <div className={classes.search}>
    <input type="text" placeholder="Search" onChange={onChange} />
  </div>
);

Search.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Search;
