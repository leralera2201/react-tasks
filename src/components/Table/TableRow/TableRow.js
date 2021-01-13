import React from 'react';
import PropTypes from 'prop-types';

const TableRow = ({ children, openModal }) => (
  <tr onClick={openModal}>
    {children}
  </tr>
);

TableRow.propTypes = {
  children: PropTypes.node.isRequired,
  openModal: PropTypes.func,
};

TableRow.defaultProps = {
  openModal: undefined,
};

export default TableRow;
