import ConfirmationMethod from '../../enums/ConfirmationMethod';

interface IConfirmationFields {
  confirmationMethod: ConfirmationMethod;
}

export const confirmationFieldsInitialState: IConfirmationFields = {
  confirmationMethod: ConfirmationMethod.EMAIL,
};

export default IConfirmationFields;
