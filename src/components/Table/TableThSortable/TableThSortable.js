import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import classes from './TableThSortable.module.scss';

const TableThSortable = ({ sortDirection }) => (
  <div className={classes.sortBy}>
    <i
      className={clsx(
        classes.sortByAsc,
        sortDirection === 'desc' && classes.sortByAscActive,
      )}
    />
    <i
      className={clsx(
        classes.sortByDesc,
        sortDirection === false && classes.sortByDescActive,
      )}
    />
  </div>
);

TableThSortable.propTypes = {
  sortDirection: PropTypes.string.isRequired,
};

export default TableThSortable;
