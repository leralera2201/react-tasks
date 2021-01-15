import { createSelector } from 'reselect'

export const stepperRootSelector = state => state.stepper;

export const firstStepSelector = createSelector(
  stepperRootSelector,
  ({ firstStep }) => firstStep
);

export const firstStepIsCompletedSelector = createSelector(
  firstStepSelector,
  ({ isCompleted }) => isCompleted
);
