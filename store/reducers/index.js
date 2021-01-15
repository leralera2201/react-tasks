import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';

import FirstFormPageReducer from '../../components/FirstFormPage/reducer/FirstFormPage.reducer';
import SecondFormPageReducer from '../../components/SecondFormPage/reducer/SecondFormPage.reducer';

const stepper = combineReducers({
  firstStep: FirstFormPageReducer,
  secondStep: SecondFormPageReducer,
});

const rootReducer = combineReducers({
  form: formReducer,
  stepper,
});

export default rootReducer;
