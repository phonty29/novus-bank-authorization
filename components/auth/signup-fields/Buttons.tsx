import { useEffect, useState } from 'react';
import SignUpStages from '../../../lib/enums/SignUpStages';
import { useFieldsContext } from '../../../state/auth/FieldsContext';
import { useSignUpContext } from '../../../state/auth/SignUpContext';

export interface IButtons extends React.ComponentPropsWithRef<'div'> {}

const Buttons: React.FC<IButtons> = () => {
  const { currentStage, prevStage } = useSignUpContext();
  const {personalInfoState, userInfoState, activationState, confirmationState} = useFieldsContext();
  const [isPersonalInfoForm, setIsPersonalInfoForm] = useState<boolean>(true);
  const [isConfirmationForm, setIsConfirmationForm] = useState<boolean>(true);
  useEffect(() => {
    setIsPersonalInfoForm(currentStage === SignUpStages.PERSONAL_INFO);
    setIsConfirmationForm(currentStage === SignUpStages.CONFIRMATION);
  }, [currentStage]);
  return (
    <div className={`sign-up-buttons ${!isPersonalInfoForm ? '' : 'block'}`}>
      {!isPersonalInfoForm && (
        <button type="button" className="sign-up-button" onClick={prevStage}>
          Back
        </button>
      )}
      <button type="submit" className="green-btn sign-up-button" onClick={() => {
        if (isConfirmationForm) 
          console.log(
            {
              ...personalInfoState,
              ...userInfoState,
              ...activationState,
              ...confirmationState
            }
          )
      }}>
        Continue
      </button>
    </div>
  );
};

export default Buttons;
