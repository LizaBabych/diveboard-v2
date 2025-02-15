import { InferredActionsType } from '../../types/inferActionsType';
import { InitialDiveDataStateType } from '../../types/diveDataStatetype';

export const diveDataReducer = (
  state: InitialDiveDataStateType,
  action: InferredActionsType,
): InitialDiveDataStateType => {
  switch (action.type) {
    case 'set-step':
      return {
        ...state,
        step: action.payload.step,
      };
    case 'set-first-step-data':
      return {
        ...state,
        firstStep: action.payload.firstStepData,
      };
    case 'set-second-step-data':
      return {
        ...state,
        secondStep: action.payload.secondStepData,
      };
    case 'set-third-step-data':
      return {
        ...state,
        thirdStep: action.payload.thirdStepData,
      };
    case 'set-fourth-step-data':
      return {
        ...state,
        fourthStep: action.payload.fourthStepData,
      };
    case 'set-fifth-step-data':
      return {
        ...state,
        fifthStep: action.payload.fifthStepData,
      };
    case 'set-sixth-step-data':
      return {
        ...state,
        sixthStep: action.payload.sixthStepData,
      };
    case 'set-seventh-step-data':
      return {
        ...state,
        seventhStep: action.payload.seventhStepData,
      };
    case 'set-eighth-step-data':
      return {
        ...state,
        eighthStep: action.payload.eighthStepData,
      };
    case 'set-ninth-step-data':
      return {
        ...state,
        ninthStep: action.payload.ninthStepData,
      };

    default:
      throw new Error('invalid action');
  }
};
