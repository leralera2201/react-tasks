import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Loader from '../../components/Loader';
import Search from '../../components/Search';
import ColumnCheckbox from '../../components/ColumnCheckbox';
import Empty from '../../components/Empty';
import Error from '../../components/Error';
import Modal from '../../components/Modal';
import Table from '../../components/Table';

import {
  usersFetchDataItemSelector,
  usersFetchDataSortedSelector,
  usersFetchErrorSelector,
  usersFetchIsStatusInProgress,
} from './selectors/users.selectors';
import fetchUsers from './thunks/users.thunks';
import { searchUsers, sortUsers } from './actions/users.actions';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortDirection: 'asc',
      chosenColumn: '',
      isOpenModal: false,
      modalUser: null,
      columns: [
        {
          title: '#',
          key: 'id',
        },
        {
          title: 'Name',
          key: 'first_name',
          sorter: (a, b) => {
            const { sortDirection } = this.state;
            if (sortDirection === 'asc') {
              return a.first_name > b.first_name ? 1 : -1;
            }
            if (sortDirection === 'desc') {
              return a.first_name < b.first_name ? 1 : -1;
            }
            return 0;
          },
          sortDirections: ['asc', 'desc', false],
        },
        {
          title: 'Surname',
          key: 'last_name',
        },
        {
          title: 'Email',
          key: 'email',
          sorter: (a, b) => {
            const { sortDirection } = this.state;
            if (sortDirection === 'asc') {
              return a.email > b.email ? 1 : -1;
            }
            if (sortDirection === 'desc') {
              return a.email < b.email ? 1 : -1;
            }
            return 0;
          },
          sortDirections: ['asc', 'desc', false],
        },
        {
          title: 'Entity type',
          key: 'entity_type',
        },
      ],
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
    this.setState({ chosenColumn: name });
  };

  closeModal = () => {
    this.setState({ isOpenModal: false, modalUser: null });
  };

  openModal = (user) => {
    this.setState({ isOpenModal: true, modalUser: user });
  };

  sortHandler = (column) => {
    const { sorter, sortDirections } = column;
    const { sortUsersByName } = this.props;
    if (sorter) {
      sortUsersByName(sorter);
      this.changeSortDirection(sortDirections);
    }
  };

  changeSortDirection = (sortDirections) => {
    const { sortDirection } = this.state;
    let sortDirectionIndex = sortDirections.findIndex((direction) => direction === sortDirection);
    if (sortDirectionIndex === sortDirections.length - 1) {
      sortDirectionIndex = -1;
    }
    this.setState({
      sortDirection: sortDirections[sortDirectionIndex + 1],
    });
  }

  render() {
    const {
      columns, chosenColumn, isOpenModal, modalUser, sortDirection,
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
              chosenColumn={chosenColumn}
              columns={columns}
              onChange={this.checkHandler}
            />
          </>
        )}
        {loading && <Loader />}
        {!loading && !error && sortedUsers.length > 0 && (
          <Table
            columns={columns}
            data={sortedUsers}
            sortDirection={sortDirection}
            sortHandler={this.sortHandler}
            openModal={this.openModal}
            chosenColumn={chosenColumn}
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
