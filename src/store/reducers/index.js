import { combineReducers } from 'redux';

import UserReducer from '../../pages/Users/reducers/users.reducer';

const rootReducer = combineReducers({
  users: UserReducer,
});

export default rootReducer;
