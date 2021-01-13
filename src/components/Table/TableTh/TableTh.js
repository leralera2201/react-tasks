import React from 'react';
import PropTypes from 'prop-types';

import TableThSortable from '../TableThSortable';

import classes from './TableTh.module.scss';

const TableTh = ({ column, sortHandler, sortDirection }) => (
  <th onClick={() => sortHandler(column)} className={classes.sortingTh}>
    {column.title}
    {column.sorter && <TableThSortable sortDirection={sortDirection} />}
  </th>
);

TableTh.propTypes = {
  column: PropTypes.shape({
    title: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
    sorter: PropTypes.func,
    sortDirections: PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool,
    ])),
  }).isRequired,
  sortHandler: PropTypes.func.isRequired,
  sortDirection: PropTypes.string.isRequired,
};

export default TableTh;
