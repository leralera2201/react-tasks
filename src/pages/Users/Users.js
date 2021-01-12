import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import UsersTable from '../../components/Table';
import Loader from '../../components/Loader';
import Search from '../../components/Search';
import ColumnCheckbox from '../../components/ColumnCheckbox';

import {
  usersFetchDataItemSelector,
  usersFetchDataSortedSelector,
  usersFetchErrorSelector,
  usersFetchIsStatusInProgress,
} from './selectors/users.selectors';
import fetchUsers from './thunks/users.thunks';
import { searchUsers, sortUsers } from './actions/users.actions';
import classes from './Users.module.scss';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortOrder: '',
      columns: {
        first_name: {
          label: 'First name',
        },
        last_name: {
          label: 'Last name',
        },
        email: {
          label: 'Email',
        },
        entity_type: {
          label: 'Entity type',
        },
      },
      choosenColumn: '',
    };
  }

  componentDidMount() {
    const { getUsers } = this.props;
    getUsers();
  }

  changeHandler = (event) => {
    const { value } = event.target;
    const { searchUsersByEmail } = this.props;
    searchUsersByEmail(value);
  };

  checkHandler = (event) => {
    const { name } = event.target;
    this.setState({ choosenColumn: name });
  };

  sortHandler = () => {
    const { sortOrder } = this.state;
    const { sortUsersByName } = this.props;
    let order = '';
    if (sortOrder === '') {
      order = 'asc';
    } else if (sortOrder === 'asc') {
      order = 'desc';
    }
    this.setState({ sortOrder: order });
    sortUsersByName(order);
  };

  render() {
    const {
      loading, error, users, sortedUsers,
    } = this.props;
    const {
      sortOrder, columns, choosenColumn,
    } = this.state;
    return (
      <div>
        {!loading && (
          <>
            <Search onChange={this.changeHandler} />
            <ColumnCheckbox
              choosenColumn={choosenColumn}
              columns={columns}
              onChange={this.checkHandler}
            />
          </>
        )}
        {loading && <Loader />}
        {!loading && !error && sortedUsers.length > 0 && (
          <UsersTable
            users={sortedUsers}
            sortUsers={this.sortHandler}
            sortOrder={sortOrder}
            choosenColumn={choosenColumn}
            columns={columns}
          />
        )}
        {!error && !loading && sortedUsers.length === 0 && (
          <div className={classes.noUsers}>No such users</div>
        )}
        {!error && !loading && users.length === 0 && (
          <div className={classes.noUsers}>No users</div>
        )}
        {error && <div>{error}</div>}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: usersFetchIsStatusInProgress(state),
  users: usersFetchDataItemSelector(state),
  error: usersFetchErrorSelector(state),
  sortedUsers: usersFetchDataSortedSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  getUsers: () => dispatch(fetchUsers()),
  searchUsersByEmail: (word) => dispatch(searchUsers(word)),
  sortUsersByName: (order) => dispatch(sortUsers(order)),
});

Users.propTypes = {
  loading: PropTypes.bool.isRequired,
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  error: PropTypes.string,
  sortedUsers: PropTypes.arrayOf(PropTypes.object).isRequired,
  getUsers: PropTypes.func.isRequired,
  searchUsersByEmail: PropTypes.func.isRequired,
  sortUsersByName: PropTypes.func.isRequired,
};

Users.defaultProps = {
  error: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
