import { createSelector } from 'reselect'

export const stepperRootSelector = state => state.stepper;

export const secondStepSelector = createSelector(
  stepperRootSelector,
  ({ secondStep }) => secondStep
);

export const secondStepIsCompletedSelector = createSelector(
  secondStepSelector,
  ({ isCompleted }) => isCompleted
);
