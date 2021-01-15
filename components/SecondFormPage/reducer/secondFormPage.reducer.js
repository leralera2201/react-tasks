import { COMPLETE_SECOND_STEP } from "../action-types/secondFormPage.actionTypes";

const initialState = {
  isCompleted: false,
};

const SecondFormPageReducer = (state = initialState, action) => {
  switch(action.type) {
    case COMPLETE_SECOND_STEP: {
      return { ...state, isCompleted: true }
    }
    default:
      return state;
  }
}

export default SecondFormPageReducer;
