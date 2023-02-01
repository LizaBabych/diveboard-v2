import React, { FC, useContext } from 'react';
import { Input } from '../../../../../Input/CommonInput';
import { InputLabelWrapper } from '../../../inputLabelWrapper';
import { Dropdown } from '../../../../../Dropdown/Dropdawn';
import { setParams } from '../../../LogDiveHelpers/setParams/setParams';
import { SecondStepType } from '../../../types/stepTypes';
import styles from './styles.module.scss';
import { useWindowWidth } from '../../../../../../hooks/useWindowWidth';
import { AuthStatusContext } from '../../../../../../layouts/AuthLayout';
import { CurrentVariants, VisibilityVariants } from '../dropdownItems';

type Props = {
  advancedParameters: SecondStepType['advancedParameters'];
  setAdvancedParameters: (res: SecondStepType['advancedParameters']) => void;
};

export const AdvancedParameters: FC<Props> = ({
  advancedParameters,
  setAdvancedParameters,
}) => {
  const isMobile = useWindowWidth(500, 768);
  const {
    userAuth,
  } = useContext(AuthStatusContext);

  const params = setParams(
    advancedParameters,
    setAdvancedParameters,
  );

  return (
    <div className={styles.advancedParametersWrapper}>
      <h2>Advanced parameters</h2>
      <div className={styles.content}>
        <InputLabelWrapper label="Surface temp" mode={isMobile ? 'half' : 'common'}>
          <Input
            type="number"
            value={advancedParameters.surfaceTemp ? `${advancedParameters.surfaceTemp}` : ''}
            setValue={(val) => params('surfaceTemp', +(val as string))}
            height={48}
            width={isMobile ? 768 : 165}
            placeholder={userAuth.settings.preferences.unitSystem === 'METRIC' ? 'ºC' : 'ºF'}
          />
        </InputLabelWrapper>

        <InputLabelWrapper label="Bottom Temp" mode={isMobile ? 'half' : 'common'}>
          <Input
            type="number"
            value={advancedParameters.bottomTemp ? `${advancedParameters.bottomTemp}` : ''}
            setValue={(val) => params('bottomTemp', +(val as string))}
            height={48}
            width={isMobile ? 768 : 165}
            placeholder={userAuth.settings.preferences.unitSystem === 'METRIC' ? 'ºC' : 'ºF'}
          />
        </InputLabelWrapper>

        <InputLabelWrapper label="Weights" mode={isMobile ? 'half' : 'common'}>
          <Input
            type="number"
            value={advancedParameters.weights ? `${advancedParameters.weights}` : ''}
            setValue={(val) => params('weights', +(val as string))}
            height={48}
            width={isMobile ? 768 : 165}
            placeholder={userAuth.settings.preferences.unitSystem === 'METRIC' ? 'kg' : 'lbs'}
          />
        </InputLabelWrapper>

        <InputLabelWrapper label="Water visibility:" mode={isMobile ? 'half' : 'common'}>
          <Dropdown
            item={advancedParameters.waterVisibility || ''}
            setItem={(val) => params(
              'waterVisibility',
              val as typeof advancedParameters.waterVisibility,
            )}
            allItems={VisibilityVariants}
            width={isMobile ? 768 : 165}
          />
        </InputLabelWrapper>

        <InputLabelWrapper label="Current" mode={isMobile ? 'half' : 'common'}>
          <Dropdown
            item={advancedParameters.current || ''}
            setItem={
              (val) => params(
                'current',
                val as typeof advancedParameters.current,
              )
            }
            allItems={CurrentVariants}
            width={isMobile ? 768 : 165}
          />
        </InputLabelWrapper>

        <InputLabelWrapper label="Altitude" mode={isMobile ? 'half' : 'common'}>
          <Input
            type="number"
            value={advancedParameters.altitude ? `${advancedParameters.altitude}` : ''}
            setValue={(val) => params(
              'altitude',
              +(val as string),
            )}
            height={48}
            width={isMobile ? 768 : 165}
            placeholder={userAuth.settings.preferences.unitSystem === 'METRIC' ? 'm' : 'ft'}
          />
        </InputLabelWrapper>

        <InputLabelWrapper label="Water type" mode={isMobile ? 'half' : 'common'}>
          <Dropdown
            item={advancedParameters.waterType || ''}
            setItem={
              (val) => params(
                'waterType',
                val as typeof advancedParameters.waterType,
              )
            }
            allItems={['salt', 'fresh']}
            width={isMobile ? 768 : 165}
          />
        </InputLabelWrapper>
      </div>

    </div>
  );
};
