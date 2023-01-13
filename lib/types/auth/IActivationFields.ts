import { Dispatch, SetStateAction } from 'react';
import AccountType from '../../enums/AccountType';
import AlertMessages from '../../enums/AlertMessages';

interface IActivationFields {
  accountType: string;
  phoneNumber: string;
  email: string;
}

export const activationFieldsInitialState: IActivationFields = {
  accountType: AccountType.SELF,
  phoneNumber: '',
  email: '',
};

export const validateActivationFields = (
  activationState: IActivationFields, 
  setAlertMessage: Dispatch<SetStateAction<AlertMessages>>
): boolean => {
  const validPhoneRegex: RegExp =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im; //eslint-disable-line
  const validEmailRegex: RegExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; //eslint-disable-line
  const isPhoneValid = validPhoneRegex.test(activationState.phoneNumber);
  const isEmailValid = validEmailRegex.test(activationState.email);
  if (!isPhoneValid) 
    setAlertMessage(AlertMessages.SIGN_UP_WRONG_PHONE_FORMAT);
  else if (!isEmailValid) 
    setAlertMessage(AlertMessages.SIGN_UP_WRONG_EMAIL_FORMAT);
  else 
    setAlertMessage(AlertMessages.SIGN_IN_EMPTY_FIELD);
  
  if (!validPhoneRegex.test(activationState.phoneNumber))
    setAlertMessage(AlertMessages.SIGN_UP_WRONG_PHONE_FORMAT);
  return (
    isPhoneValid &&
    isEmailValid
  );
};

export default IActivationFields;
