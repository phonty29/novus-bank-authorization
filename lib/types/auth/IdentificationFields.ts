import { Dispatch, SetStateAction } from 'react';
import AccountType from '../../enums/AccountType';
import AlertMessages from '../../enums/AlertMessages';

interface IdentificationFields {
  accountType: string;
  phoneNumber: string;
  email: string;
}

export const identificationFieldsInitialState: IdentificationFields = {
  accountType: AccountType.SELF,
  phoneNumber: '',
  email: '',
};

export const validateIdentificationFields = (
  identificationState: IdentificationFields, 
  setAlertMessage: Dispatch<SetStateAction<AlertMessages>>
): boolean => {
  const validPhoneRegex: RegExp =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im; //eslint-disable-line
  const validEmailRegex: RegExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; //eslint-disable-line
  const isPhoneValid = validPhoneRegex.test(identificationState.phoneNumber);
  const isEmailValid = validEmailRegex.test(identificationState.email);
  if (!isPhoneValid) 
    setAlertMessage(AlertMessages.SIGN_UP_WRONG_PHONE_FORMAT);
  else if (!isEmailValid) 
    setAlertMessage(AlertMessages.SIGN_UP_WRONG_EMAIL_FORMAT);
  else 
    setAlertMessage(AlertMessages.SIGN_IN_EMPTY_FIELD);
  
  if (!validPhoneRegex.test(identificationState.phoneNumber))
    setAlertMessage(AlertMessages.SIGN_UP_WRONG_PHONE_FORMAT);
  return (
    isPhoneValid &&
    isEmailValid
  );
};

export default IdentificationFields;
