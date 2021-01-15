import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';

import FirstFormPageReducer from '../../components/FirstFormPage/reducer/firstFormPage.reducer';
import SecondFormPageReducer from '../../components/SecondFormPage/reducer/secondFormPage.reducer';

const stepper = combineReducers({
  firstStep: FirstFormPageReducer,
  secondStep: SecondFormPageReducer,
});

const rootReducer = combineReducers({
  form: formReducer,
  stepper,
});

export default rootReducer;
