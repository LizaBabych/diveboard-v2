import {
  SixthStepType,
  FifthStepType,
  FirstStepType,
  SecondStepType,
  ThirdStepType,
  SeventhStepType,
  EighthStepType,
  NinthStepType,
  FourthStepType,
} from '../types/stepTypes';

import { StepType } from '../types/commonTypes';

const firstStep: FirstStepType = {
  overview: undefined,
  diveReviews: undefined,
  diveActivities: undefined,
};

const secondStep: SecondStepType = {
  parameters: undefined,
  advancedParameters: undefined,
  tanks: undefined,
};

const thirdStep: ThirdStepType = {
  spot: {
    country: undefined,
    name: undefined,
    lat: undefined,
    lng: undefined,
  },
};

const fourthStep: FourthStepType = {};

const fifthStep: FifthStepType = {
  diveCenter: undefined,
  guideName: undefined,
  buddies: undefined,
};

const sixthStep: SixthStepType = {
  files: undefined,
  mediaUrl: undefined,
};

const seventhStep: SeventhStepType = {
  gears: undefined,
};

const eighthStep: EighthStepType = {};

const ninthStep: NinthStepType = {
  publishingMode: undefined,
};

export const initialDiveDataState = {
  step: 1 as StepType,
  firstStep,
  secondStep,
  thirdStep,
  fourthStep,
  fifthStep,
  sixthStep,
  seventhStep,
  eighthStep,
  ninthStep,
};
