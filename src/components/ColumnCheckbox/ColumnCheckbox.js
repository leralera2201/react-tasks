import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import classes from './ColumnCheckbox.module.scss';

const ColumnCheckbox = ({ columns, choosenColumn, onChange }) => (
  <div className={clsx('mb20', classes.checkboxes)}>
    <div>
      <label htmlFor="all">All</label>
      <input
        type="checkbox"
        id="all"
        name=""
        checked={choosenColumn === ''}
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
            checked={choosenColumn === fieldName}
            onChange={onChange}
          />
        </div>
      ))
    }
  </div>
);

ColumnCheckbox.propTypes = {
  columns: PropTypes.objectOf(PropTypes.object).isRequired,
  choosenColumn: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ColumnCheckbox;
