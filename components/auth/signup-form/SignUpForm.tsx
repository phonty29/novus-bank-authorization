import { useState } from 'react';
import SignUpStages from '../../../enums/SignUpStages';
import ProgressBar from '../progress-bar/ProgressBar';
import SignUpFields from '../signup-fields/SignUpFields';

export interface ISignUpForm extends React.ComponentPropsWithoutRef<'div'> {}

const SignUpForm: React.FC<ISignUpForm> = () => {
  const [stageIndex, setStageIndex] = useState<number>(0);
  const signUpStages = Object.keys(SignUpStages).map((key) => key);

  const goToPreviousStage = () => {
    if (stageIndex === 0) setStageIndex(3);
    else setStageIndex(stageIndex - 1);
  };

  const goToNextStage = () => {
    if (stageIndex === signUpStages.length - 1) setStageIndex(0);
    else setStageIndex(stageIndex + 1);
  };

  return (
    <div className="sign-up-form">
      <h1 className="sign-up-label">Signing up for Online Banking</h1>
      <ProgressBar
        currentStage={signUpStages[stageIndex]}
        stages={signUpStages}
      />
      <SignUpFields currentField={signUpStages[stageIndex]} switchNext={goToNextStage} switchPrev={goToPreviousStage} />
    </div>
  );
};

export default SignUpForm;
