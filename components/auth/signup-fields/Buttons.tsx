import SignUpStages from '../../../lib/enums/SignUpStages';
import { useSignUpContext } from '../../../state/auth/SignUpContext';

export interface IButtons extends React.ComponentPropsWithRef<'div'> {}

const Buttons: React.FC<IButtons> = () => {
  const { currentStage, prevStage } = useSignUpContext();
  return (
    <div className="sign-up-buttons">
      {!(currentStage === SignUpStages.IDENTIFICATION) && (
        <button className="sign-up-button" onClick={prevStage}>
          Back
        </button>
      )}
      <button type="submit" className="green-btn sign-up-button">
        Continue
      </button>
    </div>
  );
};

export default Buttons;
