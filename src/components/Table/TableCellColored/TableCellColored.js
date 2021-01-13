import React from 'react';
import PropTypes from 'prop-types';

const TableCellColored = ({ color }) => (
  <td style={{ backgroundColor: color }} />
);

TableCellColored.propTypes = {
  color: PropTypes.string.isRequired,
};

export default TableCellColored;
