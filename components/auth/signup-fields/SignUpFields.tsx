import { useAuthContext } from '@state/auth/AuthContext';
import { useFieldsContext } from '@state/auth/FieldsContext';
import { useSignUpContext } from '@state/auth/SignUpContext';
import SignUpStages from '@utils/enums/SignUpStages';
import ActivationForm from './activation/ActivationForm';
import Buttons from './buttons/Buttons';
import ConfirmationForm from './confirmation/ConfirmationForm';
import SignUpFieldsHelp from './help-info/SignUpFieldsHelp';
import PersonalInfoForm from './personal-info/PersonalInfoForm';
import UserInfoForm from './user-info/UserInfoForm';

export interface ISignUpFields {}

const SignUpFields: React.FC<ISignUpFields> = () => {
  const { currentStage, nextStage } = useSignUpContext();
  const { validateFields } = useFieldsContext();
  const {alertMessage} = useAuthContext();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isCurrentFieldValid = await validateFields(currentStage);
    if (isCurrentFieldValid) nextStage();
  };

  return (
    <div className="sign-up-fields">
      <form className="fields-form" onSubmit={handleSubmit}>
        {currentStage === SignUpStages.PERSONAL_INFO && <PersonalInfoForm />}
        {currentStage === SignUpStages.USER_INFO && <UserInfoForm />}
        {currentStage === SignUpStages.ACTIVATION && <ActivationForm />}
        {currentStage === SignUpStages.CONFIRMATION && <ConfirmationForm />}
        <p className="alert-message">
          {alertMessage}
        </p>
        <Buttons />
      </form>
      <SignUpFieldsHelp />
    </div>
  );
};

export default SignUpFields;
