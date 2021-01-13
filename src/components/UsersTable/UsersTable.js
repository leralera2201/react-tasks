import React, { useMemo } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import TableBody from '../Table/TableBody';

import classes from './UsersTable.module.scss';

const UsersTable = ({
  users, sortOrder, sortUsers, chosenColumn, columns, openModal,
}) => {
  const name = useMemo(() => (
    <th className={classes.sortingTh} onClick={sortUsers}>
      Name
      <div className={classes.sortBy}>
        <i
          className={clsx(
            classes.sortByAsc,
            sortOrder === 'asc' && classes.sortByAscActive,
          )}
        />
        <i
          className={clsx(
            classes.sortByDesc,
            sortOrder === 'desc' && classes.sortByDescActive,
          )}
        />
      </div>
    </th>
  ), [sortOrder]);

  return (
    <table className={classes.table}>
      <thead>
        <tr>
          <th>#</th>
          {chosenColumn && chosenColumn === 'first_name' && name}
          {chosenColumn && chosenColumn !== 'first_name' && <th>{columns[chosenColumn].label}</th>}
          {!chosenColumn && (
            <>
              {name}
              <th>Surname</th>
              <th>Email</th>
              <th>Entity type</th>
            </>
          )}
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={user.id} onClick={() => openModal(user)}>
            <td>{index + 1}</td>
            {chosenColumn && chosenColumn === 'entity_type' && <td style={{ backgroundColor: user.entity_type }} />}
            {chosenColumn && chosenColumn !== 'entity_type' && <td>{user[chosenColumn]}</td> }
            {!chosenColumn && (
              <>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td style={{ backgroundColor: user.entity_type }} />
              </>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const columnShape = PropTypes.shape({
  label: PropTypes.string.isRequired,
});

UsersTable.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  sortOrder: PropTypes.string.isRequired,
  sortUsers: PropTypes.func.isRequired,
  chosenColumn: PropTypes.string.isRequired,
  columns: PropTypes.shape({
    firstName: columnShape,
    lastName: columnShape,
    email: columnShape,
    entityType: columnShape,
  }).isRequired,
  openModal: PropTypes.func.isRequired,
};

export default UsersTable;
