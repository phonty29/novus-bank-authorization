import { useEffect, useState } from 'react';
import styled from 'styled-components';

const STAGES: string[] = [
  'IDENTIFICATION',
  'VERIFICATION',
  'CREATION',
  'SUCCESS',
];

export interface ISignUpForm extends React.ComponentPropsWithoutRef<'div'> {}
interface ILine {
  className: string;
  stage: string;
}
interface IProgressBar extends React.ComponentProps<'div'> {
  currentStage: string;
}
interface IProgressBullet extends React.ComponentPropsWithoutRef<'div'> {
  state: string;
}

const getProgressLineWidth = (stage: string) => {
  switch (stage) {
    case STAGES[0]:
      return '20%';
    case STAGES[1]:
      return '40%';
    case STAGES[2]:
      return '60%';
    case STAGES[3]:
      return '80%';
    default:
      break;
  }
};

const Line: React.FC<ILine> = ({ className, stage }) => {
  return <div className={`${className}`}></div>;
};

const ProgressLine = styled(Line)`
  &::before {
    content: '';
    display: flex;
    align-items: center;
    position: absolute;
    height: 2px;
    left: 0;
    top: 0;
    min-width: 20%;
    background-color: #076f32;
    width: ${(props) => getProgressLineWidth(props.stage)};
  }
`;

const SignUpForm: React.FC<ISignUpForm> = () => {
  const [stageIndex, setStageIndex] = useState<number>(0);

  const goToPreviousStage = () => {
    if (stageIndex === 0) setStageIndex(3);
    else setStageIndex(stageIndex - 1);
  };

  const goToNextStage = () => {
    if (stageIndex === STAGES.length - 1) setStageIndex(0);
    else setStageIndex(stageIndex + 1);
  };

  return (
    <div className="sign-up-form">
      <h1 className="sign-up-label">Signing up for Online Banking</h1>
      <ProgressBar currentStage={STAGES[stageIndex]} />
      {stageIndex > 0 && (
        <button
          className="mt-10 rounded-xl green-btn px-3 mr-5"
          onClick={goToPreviousStage}
        >
          BACK
        </button>
      )}
      <button
        className="mt-10 rounded-xl green-btn px-3"
        onClick={goToNextStage}
      >
        NEXT
      </button>
    </div>
  );
};

export default SignUpForm;

const ProgressBar: React.FC<IProgressBar> = ({ currentStage = STAGES[0] }) => {
  const [progressItemStates, setProgressItemsState] = useState<string[]>([
    'on-progress',
    'empty',
    'empty',
    'empty',
  ]);

  useEffect(() => {
    switch (currentStage) {
      case STAGES[0]:
        setProgressItemsState(['on-progress', 'empty', 'empty', 'empty']);
        break;
      case STAGES[1]:
        setProgressItemsState(['success', 'on-progress', 'empty', 'empty']);
        break;
      case STAGES[2]:
        setProgressItemsState(['success', 'success', 'on-progress', 'empty']);
        break;
      case STAGES[3]:
        setProgressItemsState(['success', 'success', 'success', 'on-progress']);
        break;
      default:
        break;
    }
  }, [currentStage]);

  return (
    <div className="sign-up-progress-bar">
      {progressItemStates.map((state, index) => {
        return <ProgressBullet key={index} state={state} />;
      })}
      <ProgressLine className={`progress-line`} stage={currentStage} />
    </div>
  );
};

const ProgressBullet: React.FC<IProgressBullet> = ({ state }) => {
  return <div className={`${state}`}></div>;
};
