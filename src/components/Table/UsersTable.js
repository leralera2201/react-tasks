import React, { useMemo } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import classes from './UsersTable.module.scss';

const UsersTable = ({
  users, sortOrder, sortUsers, choosenColumn, columns,
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
  ), []);

  return (
    <table className={classes.table}>
      <thead>
        <tr>
          <th>#</th>
          {choosenColumn && choosenColumn === 'first_name' && name}
          {choosenColumn && choosenColumn !== 'first_name' && <th>{columns[choosenColumn].label}</th>}
          {!choosenColumn && (
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
          <tr key={user.id}>
            <td>{index + 1}</td>
            {choosenColumn && choosenColumn === 'entity_type' && <td style={{ backgroundColor: user.entity_type }} />}
            {choosenColumn && choosenColumn !== 'entity_type' && <td>{user[choosenColumn]}</td> }
            {!choosenColumn && (
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

UsersTable.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  sortOrder: PropTypes.string.isRequired,
  sortUsers: PropTypes.func.isRequired,
  choosenColumn: PropTypes.string.isRequired,
  columns: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default UsersTable;
