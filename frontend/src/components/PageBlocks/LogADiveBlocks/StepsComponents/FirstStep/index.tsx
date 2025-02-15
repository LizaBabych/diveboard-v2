import React, {
  FC, useContext, useEffect, useState,
} from 'react';
import { Overview } from './Overview';
import { DiveReviews } from './DiveReviews';
import { DiveActivities } from './DiveTypeAndActivities';
import { StepsNavigation } from '../../StepsNavigation';
import { setStepErrors } from '../../LogDiveHelpers/stepsErrors/setStepErrors';
import { LogDiveDataContext } from '../../LogDiveData/logDiveContext';
import { StepProps } from '../../types/commonTypes';
import { FirstStepType } from '../../types/stepTypes';
import { FirstStepErrors } from '../../types/errorTypes';
import styles from '../../styles.module.scss';

export const FirstStep: FC<StepProps> = ({
  step,
  setStep,
}) => {
  const { setStepData, getStepData } = useContext(LogDiveDataContext);

  // overview
  const [overview, setOverview] = useState<FirstStepType['overview']>({
    diveNumber: 0,
    notes: '',
    tripName: '',
  });

  const [overviewErrors, setOverviewErrors] = useState<FirstStepErrors>({
    diveNumberError: '',
  });

  const setErrors = () => setStepErrors({
    stepType: 1,
    data: overview,
    errors: overviewErrors,
    setErrors: setOverviewErrors,
  });

  // dives reviews
  const [diveReviews, setDiveReviews] = useState<FirstStepType['diveReviews']>({
    overReview: 5,
    diveDifficulty: 5,
    marineLifeQuality: 5,
    wreck: undefined,
    bigFish: undefined,
  });

  // dive activities
  const [diveActivities, setDiveActivities] = useState<
  Omit<FirstStepType['diveActivities'], 'other'>>({
    recreational: false,
    training: false,
    nightDive: false,
    drift: false,
    deepDive: false,
    wreck: false,
    cave: false,
    reef: false,
    photo: false,
    research: false,
  });

  const [other, setOther] = useState('');

  const firstStepData: FirstStepType = {
    overview: { ...overview, diveNumber: +overview.diveNumber },
    diveReviews,
    diveActivities: { ...diveActivities, other: other.split(',') },
  };

  useEffect(() => {
    const data = getStepData(1) as FirstStepType;
    if (Object.values(data).every((item) => !!item)) {
      setOverview(data.overview);
      setDiveReviews(data.diveReviews);
      setDiveActivities(data.diveActivities);
    }
  }, [step]);

  if (step !== 1) {
    return null;
  }

  return (
    <>
      <div className={styles.container}>
        <Overview
          overviewData={overview}
          setOverviewData={setOverview}
          overviewDataErrors={overviewErrors}
          setOverviewDataErrors={setOverviewErrors}
        />

        <DiveReviews
          diveReviews={diveReviews}
          setDiveReviews={setDiveReviews}
        />

        <DiveActivities
          diveActivities={diveActivities}
          setDiveActivities={setDiveActivities}
          other={other}
          setOther={setOther}
        />

      </div>
      <StepsNavigation
        setStep={setStep}
        setErrors={setErrors}
        setStepData={() => {
          setStepData(1, firstStepData);
        }}
      />
    </>
  );
};
