import SignUpStages from '../../../lib/enums/SignUpStages';
import { useAuthContext } from '../../../state/auth/AuthContext';
import { useFieldsContext } from '../../../state/auth/FieldsContext';
import { useSignUpContext } from '../../../state/auth/SignUpContext';
import ActivationForm from './activation/ActivationForm';
import Buttons from './Buttons';
import ConfirmationForm from './confirmation/ConfirmationForm';
import PersonalInfoForm from './personal-info/PersonalInfoForm';
import SignUpFieldsHelp from './SignUpFieldsHelp';
import UserInfoForm from './user-info/UserInfoForm';

export interface ISignUpFields {}

const SignUpFields: React.FC<ISignUpFields> = () => {
  const { currentStage, nextStage } = useSignUpContext();
  const { validateFields } = useFieldsContext();
  const {alertMessage} = useAuthContext();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateFields(currentStage)) nextStage();
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
