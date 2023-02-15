import AccountType from '@utils/enums/AccountType';

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
