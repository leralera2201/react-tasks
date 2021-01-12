import data from '../data/MOCK_DATA.json';
import {
  fetchUsersError,
  fetchUsersInProgress,
  fetchUsersSuccess,
} from '../actions/users.actions';

const getUsers = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve(data);
  }, [2000]);
});

const fetchUsers = () => (dispatch) => {
  dispatch(fetchUsersInProgress());
  return getUsers()
    .then((users) => {
      dispatch(fetchUsersSuccess(users));
    })
    .catch((e) => {
      dispatch(fetchUsersError(e));
    });
};

export default fetchUsers;
