import { Dispatch, SetStateAction } from 'react';
import countries from '../../data/countries.json';
import playroles from '../../data/playroles.json';
import AlertMessages from '../../enums/AlertMessages';
import Genders from '../../enums/Genders';

interface IPersonalInfoFields {
  role: string;
  firstName: string;
  lastName: string;
  gender: Genders;
  dateOfBirth: Date;
  country: string;
  city: string;
}

export const personalInfoFieldsInitialState: IPersonalInfoFields = {
  role: playroles[0].value,
  firstName: '',
  lastName: '',
  gender: Genders.MALE,
  dateOfBirth: new Date(),
  country: countries[0].name,
  city: '',
};

export const validatePersonalInfoFields = (personalInfoState: IPersonalInfoFields, setAlertMessage: Dispatch<SetStateAction<AlertMessages>>): boolean => {
  const isAgeNotRestricted: boolean = new Date().getFullYear() - personalInfoState.dateOfBirth.getFullYear() > 16;
  if (!isAgeNotRestricted) 
    setAlertMessage(AlertMessages.SIGN_UP_AGE_RESTRICTED);
  else 
    setAlertMessage(AlertMessages.SIGN_IN_EMPTY_FIELD);
  return isAgeNotRestricted;
}

export default IPersonalInfoFields;
