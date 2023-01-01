import AuthMessages from '../../../lib/enums/AuthMessages';
import SignUpStages from '../../../lib/enums/SignUpStages';
import { useFieldsContext } from '../../../state/auth/FieldsContext';
import { useSignUpContext } from '../../../state/auth/SignUpContext';
import Buttons from './Buttons';
import CreationForm from './CreationForm';
import IdentificationForm from './IdentificationForm';
import SignUpFieldsHelp from './SignUpFieldsHelp';
import SuccessForm from './SuccessForm';
import VerificationForm from './VerificationForm';

export interface ISignUpFields {}

const SignUpFields: React.FC<ISignUpFields> = () => {
  const { currentStage, nextStage } = useSignUpContext();
  const { validateFields } = useFieldsContext();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateFields(currentStage)) nextStage();
  };
  return (
    <div className="sign-up-fields">
      <form className="fields-form" onSubmit={handleSubmit}>
        {currentStage === SignUpStages.IDENTIFICATION && <IdentificationForm />}
        {currentStage === SignUpStages.VERIFICATION && <VerificationForm />}
        {currentStage === SignUpStages.CREATION && <CreationForm />}
        {currentStage === SignUpStages.SUCCESS && <SuccessForm />}
        <p className="alert-message-sign-up">
          {AuthMessages.SIGN_IN_EMPTY_FIELD}
        </p>
        <Buttons />
      </form>
      <SignUpFieldsHelp />
    </div>
  );
};

export default SignUpFields;
