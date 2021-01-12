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
      Object.entries(columns).map(([fieldName, field]) => (
        <div key={fieldName}>
          <label htmlFor={fieldName}>{field.label}</label>
          <input
            type="checkbox"
            id={fieldName}
            name={fieldName}
            checked={chosenColumn === fieldName}
            onChange={onChange}
          />
        </div>
      ))
    }
  </div>
);

const columnShape = PropTypes.shape({
  label: PropTypes.string.isRequired,
});

ColumnCheckbox.propTypes = {
  columns: PropTypes.shape({
    firstName: columnShape,
    lastName: columnShape,
    email: columnShape,
    entityType: columnShape,
  }).isRequired,
  chosenColumn: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ColumnCheckbox;
