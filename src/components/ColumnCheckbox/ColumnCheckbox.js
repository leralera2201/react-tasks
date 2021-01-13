import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import classes from './ColumnCheckbox.module.scss';

const ColumnCheckbox = ({ columns, chosenColumn, onChange }) => (
  <div className={clsx('mb20', classes.checkboxes)}>
    <div className={classes.checkboxesText}>Choose Columns</div>
    <div>
      <label htmlFor="all">All</label>
      <input
        type="checkbox"
        id="all"
        name=""
        checked={chosenColumn === ''}
        onChange={onChange}
      />
    </div>
    {
      columns.map((column) => (
        <div key={column.key}>
          <label htmlFor={column.key}>{column.title}</label>
          <input
            type="checkbox"
            id={column.key}
            name={column.key}
            checked={chosenColumn === column.key}
            onChange={onChange}
          />
        </div>
      ))
    }
  </div>
);

ColumnCheckbox.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
    sorter: PropTypes.func,
    sortDirections: PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool,
    ])),
  })).isRequired,
  chosenColumn: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ColumnCheckbox;
