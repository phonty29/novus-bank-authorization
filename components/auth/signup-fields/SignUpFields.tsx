import { useState } from 'react';
import AccountType from '../../../enums/AccountType';
import AuthMessages from '../../../enums/AuthMessages';
import SignUpStages from '../../../enums/SignUpStages';
import useSignUpContext from '../../../state/auth/SignUpContext';
import Buttons from './Buttons';
import CreationForm from './CreationForm';
import IdentificationForm, { IdentificationFields, validateIdentificationFields } from './IdentificationForm';
import SignUpFieldsHelp from './SignUpFieldsHelp';
import SuccessForm from './SuccessForm';
import VerificationForm from './VerificationForm';

export interface ISignUpFields {}

const SignUpFields: React.FC<ISignUpFields> = () => {
  const {currentStage, nextStage} = useSignUpContext();
  const [identificationFields, setIdentificationFields] = useState<IdentificationFields>({
    accountType: AccountType.SELF,
    phoneNumber: "",
    email: ""
  });
  const validateCurrentField = () => {
    switch (currentStage) {
      case SignUpStages.IDENTIFICATION: return validateIdentificationFields(identificationFields);
      default:
        return true;
    }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateCurrentField()) 
      nextStage();
  }
  return (
    <div className="sign-up-fields">
      <form className="fields-form" onSubmit={handleSubmit}>
        {currentStage === SignUpStages.IDENTIFICATION && <IdentificationForm state={identificationFields} setState={setIdentificationFields}/>}
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

{
  /* <div className="input-field mb-7">
<label htmlFor="field-photo" className="label-text">
  Take a selfie
  <span className="text-purple"> *</span>
</label>
<input
  type="file"
  id="field-photo"
  name="field-photo"
  className="photo-input"
/>
<div className="photo-input-frame">
  <svg xmlns="http://www.w3.org/2000/svg" width="76" height="76" viewBox="0 0 76 76" fill="none" >
    <circle cx="38" cy="38" r="38" fill="url(#paint0_linear_627_32)" />
    <defs>
      <linearGradient id="paint0_linear_627_32" x1="38" y1="0" x2="38" y2="76" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00B34A"/>
        <stop offset="1" stopColor="#076F32"/>
      </linearGradient>
    </defs>
    <image href="/photo-img.svg" x="50%" y="50%" transform="translate(-18.5,-16.5)"/>
  </svg>
</div>
</div> */
}
