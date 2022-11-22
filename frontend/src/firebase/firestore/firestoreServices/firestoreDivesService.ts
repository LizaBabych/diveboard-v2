import {
  collection, doc, setDoc, getDoc,
} from '@firebase/firestore';
import { db } from '../firebaseFirestore';
import { DiveType } from '../models';

export const firestoreDivesService = {
  setDiveData: async (diveData: DiveType, userId: string) => {
    try {
      const ref = doc(collection(db, `Test_Dives/${userId}`, 'userDives'));
      await setDoc(ref, { ...diveData }, { merge: true });
    } catch (e) {
      console.log({ e });
      throw new Error('set  dive data error');
    }
  },

  getDiveData: async (
    userId: string,
    diveId: string,
  ) => {
    try {
      const docRef = doc(db, `Test_Dives/${userId}/userDives`, diveId);
      const docSnap = await getDoc(docRef);
      return docSnap.data();
    } catch (e) {
      console.log(e.message);
      throw new Error('get dive data error');
    }
  },

  updateDiveData: async (
    userId: string,
    diveId: string,
    dive: DiveType,
  ) => {
    try {
      const docRef = doc(db, `Test_Dives/${userId}/userDives`, diveId);
      await setDoc(docRef, { ...dive }, { merge: false });
      return true;
    } catch (e) {
      console.log(e.message);
      throw new Error('update dive data error');
    }
  },

  getDiveField: async (userId: string = '0HmlinuLc5Q6OyRywFWdiod6Ikt1') => {
    const docRef = doc(db, 'Test_Dives', userId);
    const docSnap = await getDoc(docRef);
    console.log(docSnap.data());
    return docSnap.data();
  },
};
