import AccountType from '@components/auth/signup-fields/utils/enums/AccountType';

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

export default IActivationFields;
