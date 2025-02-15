import React, { FC, useContext, useState } from 'react';
import { Dropdown } from '../../../../../Dropdown/Dropdawn';
import { SaveThisButton } from '../SaveThisButton';
import { MarginWrapper } from '../../../../../MarginWrapper';
import { AuthStatusContext } from '../../../../../../layouts/AuthLayout';
import { EditContext } from '../../../EditContextWrapper';
import { PreferencesType } from '../../../../../../firebase/firestore/models';
import {
  firestorePreferencesService,
} from '../../../../../../firebase/firestore/firestoreServices/firestorePreferencesService';

type Props = {
  preferences: PreferencesType;
  setPreferences: React.Dispatch<React.SetStateAction<PreferencesType>>;
};
export const EditedPreferencesLanguage: FC<Props> = ({
  preferences,
  setPreferences,
}) => {
  const [loading, setLoading] = useState(false);
  const { userAuth } = useContext(AuthStatusContext);
  const { setEditedSettings } = useContext(EditContext);
  const [language, setLanguage] = useState(preferences.language);

  const setLanguagePreferences = () => {
    setLoading(true);
    firestorePreferencesService.setLanguage(language, userAuth.uid);
    setPreferences({
      ...preferences,
      language,
    });
    setLoading(false);
    setEditedSettings({
      settingsBlock: '',
      settingsItem: '',
    });
  };

  return (
    <div>
      <Dropdown
        item={language}
        setItem={setLanguage}
        allItems={['English', 'Italian', 'Spanish', 'German']}
        width={196}
      />

      <MarginWrapper top={10} display="block">
        <SaveThisButton
          onClick={setLanguagePreferences}
          loading={loading}
          disabled={loading}
        />
      </MarginWrapper>

    </div>
  );
};
