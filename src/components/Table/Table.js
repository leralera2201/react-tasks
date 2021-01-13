import React from 'react';
import PropTypes from 'prop-types';

import TableHead from './TableHead';
import TableBody from './TableBody';
import TableTh from './TableTh';
import TableRow from './TableRow';
import TableCell from './TableCell';
import TableCellColored from './TableCellColored';
import classes from './Table.module.scss';

const Table = (
  {
    columns, data, sortHandler, openModal, sortDirection, chosenColumn,
  },
) => {
  const column = columns.find((col) => col.key === chosenColumn);

  return (
    <table className={classes.table}>
      <TableHead>
        <TableRow>
          {column && (
            <TableTh
              column={column}
              sortDirection={sortDirection}
              sortHandler={sortHandler}
            />
          )}
          {!column && columns.map((col) => (
            <TableTh
              key={col.key}
              column={col}
              sortHandler={sortHandler}
              sortDirection={sortDirection}
            />
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((user) => (
          <TableRow key={user.id} openModal={() => openModal(user)}>
            {column && column.key !== 'entity_type' && <TableCell>{user[column.key]}</TableCell>}
            {column && column.key === 'entity_type' && <TableCellColored color={user[column.key]} />}
            {!column && (
              <>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.first_name}</TableCell>
                <TableCell>{user.last_name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCellColored color={user.entity_type} />
              </>
            )}
          </TableRow>
        ))}
      </TableBody>
    </table>
  );
};

Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
    sorter: PropTypes.func,
    sortDirections: PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool,
    ])),
  })).isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    entity_type: PropTypes.string.isRequired,
  })).isRequired,
  sortHandler: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  sortDirection: PropTypes.string.isRequired,
  chosenColumn: PropTypes.string.isRequired,
};

export default Table;
