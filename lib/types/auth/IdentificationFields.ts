import AccountType from '../../enums/AccountType';

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

export const validateIdentificationFields = (identificationState: IdentificationFields): boolean => {
  const validPhoneRegex: RegExp =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im; //eslint-disable-line
  const validEmailRegex: RegExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; //eslint-disable-line
  return (
    validPhoneRegex.test(identificationState.phoneNumber) &&
    validEmailRegex.test(identificationState.email)
  );
};

export default IdentificationFields;
