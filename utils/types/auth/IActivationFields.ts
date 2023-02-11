import { ICheckEmailResponseData } from '@pages/api/check-middlewares/check-email';
import AccountType from '@utils/enums/AccountType';
import AlertMessages from '@utils/enums/AlertMessages';
import ApiRoutes from '@utils/enums/ApiRoutes';
import ClientService from '@utils/helpers/fetch-utils';
import { Dispatch, SetStateAction } from 'react';

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

export const validateActivationFields = async (
  activationState: IActivationFields, 
  setAlertMessage: Dispatch<SetStateAction<AlertMessages>>
) => {
  const validPhoneRegex: RegExp =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im; //eslint-disable-line
  const validEmailRegex: RegExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; //eslint-disable-line
  const isPhoneValid = validPhoneRegex.test(activationState.phoneNumber);
  const isEmailValid = validEmailRegex.test(activationState.email);
  const data: {email: string} = { email: activationState.email };
  const {isEmailAvailable, message}: ICheckEmailResponseData = await ClientService.post(data, ApiRoutes.CHECK_EMAIL);
  if (!isPhoneValid) 
    setAlertMessage(AlertMessages.SIGN_UP_WRONG_PHONE_FORMAT);
  else if (!isEmailValid) 
    setAlertMessage(AlertMessages.SIGN_UP_WRONG_EMAIL_FORMAT);
  else if (!isEmailAvailable)
    setAlertMessage(message as AlertMessages);
  else 
    setAlertMessage(AlertMessages.SIGN_IN_EMPTY_FIELD);
  return (
    isPhoneValid &&
    isEmailValid &&
    isEmailAvailable
  );
};

export default IActivationFields;
