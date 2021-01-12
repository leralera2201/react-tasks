import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import UsersTable from '../../components/UsersTable';
import Loader from '../../components/Loader';
import Search from '../../components/Search';
import ColumnCheckbox from '../../components/ColumnCheckbox';
import Empty from '../../components/Empty';
import Error from '../../components/Error';
import Modal from '../../components/Modal';

import {
  usersFetchDataItemSelector,
  usersFetchDataSortedSelector,
  usersFetchErrorSelector,
  usersFetchIsStatusInProgress,
} from './selectors/users.selectors';
import fetchUsers from './thunks/users.thunks';
import { searchUsers, sortUsers } from './actions/users.actions';

const userProperties = {
  firstName: 'first_name',
  lastName: 'last_name',
  email: 'email',
  entityType: 'entity_type',
};

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortOrder: '',
      columns: {
        [userProperties.firstName]: {
          label: 'First name',
        },
        [userProperties.lastName]: {
          label: 'Last name',
        },
        [userProperties.email]: {
          label: 'Email',
        },
        [userProperties.entityType]: {
          label: 'Entity type',
        },
      },
      choosenColumn: '',
      isOpenModal: false,
      modalUser: null,
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

  closeModal = () => {
    this.setState({ isOpenModal: false });
  };

  openModal = (user) => {
    this.setState({ isOpenModal: true, modalUser: user });
  };

  render() {
    const {
      sortOrder, columns, choosenColumn, isOpenModal, modalUser,
    } = this.state;

    const {
      loading, error, users, sortedUsers,
    } = this.props;

    return (
      <div>
        {isOpenModal && <Modal closeModal={this.closeModal} user={modalUser} />}
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
            openModal={this.openModal}
          />
        )}
        {!error && !loading && sortedUsers.length === 0 && (
          <Empty />
        )}
        {!error && !loading && users.length === 0 && (
          <Empty />
        )}
        {error && <Error error={error} /> }
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
  searchUsersByEmail: (searchText) => dispatch(searchUsers(searchText)),
  sortUsersByName: (order) => dispatch(sortUsers(order)),
});

const userShape = PropTypes.shape({
  id: PropTypes.number,
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  email: PropTypes.string,
  entity_type: PropTypes.string,
});

Users.propTypes = {
  loading: PropTypes.bool.isRequired,
  users: PropTypes.arrayOf(userShape).isRequired,
  error: PropTypes.string,
  sortedUsers: PropTypes.arrayOf(userShape).isRequired,
  getUsers: PropTypes.func.isRequired,
  searchUsersByEmail: PropTypes.func.isRequired,
  sortUsersByName: PropTypes.func.isRequired,
};

Users.defaultProps = {
  error: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
