import { COMPLETE_FIRST_STEP } from "../action-types/firstFormPage.actionTypes";

const initialState = {
  isCompleted: false,
};

const FirstFormPageReducer = (state = initialState, action) => {
  switch(action.type) {
    case COMPLETE_FIRST_STEP: {
      return { ...state, isCompleted: true }
    }
    default:
      return state;
  }
}

export default FirstFormPageReducer;
