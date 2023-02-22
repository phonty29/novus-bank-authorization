import { useSignUpContext } from '@state/auth/SignUpContext';
import SignUpStages from '@utils/enums/SignUpStages';
import { useEffect, useState } from 'react';
import ProgressLine from './line/ProgressLine';

export interface IProgressBar extends React.ComponentProps<'div'> {}
export interface IProgressBullet extends React.ComponentPropsWithoutRef<'div'> {
  state: string;
  label: string;
}

const ProgressBar: React.FC<IProgressBar> = () => {
  const { currentStage, stages } = useSignUpContext();
  const [progressItemStates, setProgressItemsState] = useState<string[]>([
    'on-progress',
    'empty',
    'empty',
    'empty',
  ]);
  useEffect(() => {
    switch (currentStage) {
      case SignUpStages.PERSONAL_INFO:
        setProgressItemsState(['on-progress', 'empty', 'empty', 'empty']);
        break;
      case SignUpStages.USER_INFO:
        setProgressItemsState(['success', 'on-progress', 'empty', 'empty']);
        break;
      case SignUpStages.ACTIVATION:
        setProgressItemsState(['success', 'success', 'on-progress', 'empty']);
        break;
      case SignUpStages.CONFIRMATION:
        setProgressItemsState(['success', 'success', 'success', 'on-progress']);
        break;
      default:
        break;
    }
  }, [currentStage]);

  return (
    <div className="sign-up-progress-bar">
      {progressItemStates.map((state, index) => {
        return (
          <ProgressBullet key={index} state={state} label={stages[index]} />
        );
      })}
      <ProgressLine className={`progress-line`} stage={currentStage} />
    </div>
  );
};

const ProgressBullet: React.FC<IProgressBullet> = ({ state, label }) => {
  return (
    <div className="progress-item">
      <div className={`${state}`}></div>
      <span className="progress-item-label">{label}</span>
    </div>
  );
};

export default ProgressBar;
