import { useFieldsContext } from '@state/auth/FieldsContext';
import { useSignUpContext } from '@state/auth/SignUpContext';
import SignUpStages from '@utils/enums/SignUpStages';
import { useEffect, useState } from 'react';

export interface IButtons extends React.ComponentPropsWithRef<'div'> {}

const Buttons: React.FC<IButtons> = () => {
  const { currentStage, prevStage } = useSignUpContext();
  const {isActivationLinkSend} = useFieldsContext();
  const [isPersonalInfoForm, setIsPersonalInfoForm] = useState<boolean>(true);
  const [isConfirmationForm, setIsConfirmationForm] = useState<boolean>(true);
  useEffect(() => {
    setIsPersonalInfoForm(currentStage === SignUpStages.PERSONAL_INFO);
    setIsConfirmationForm(currentStage === SignUpStages.CONFIRMATION);
  }, [currentStage]);
  return (
    <div className={`sign-up-buttons ${!isPersonalInfoForm ? '' : 'block'}`}>
      {!isActivationLinkSend && !isPersonalInfoForm && (
        <button type="button" className="sign-up-button" onClick={prevStage}>
          Back
        </button>
      )}
      {!isConfirmationForm && (
        <button type="submit" className="green-btn sign-up-button">
          Continue
        </button>
      )}
    </div>
  );
};

export default Buttons;
