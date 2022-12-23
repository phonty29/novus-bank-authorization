import { useEffect, useState } from 'react';
import SignUpStages from '../../../enums/SignUpStages';
import ProgressLine from './ProgressLine';

export interface IProgressBar extends React.ComponentProps<'div'> {
  currentStage: string;
}
export interface IProgressBullet extends React.ComponentPropsWithoutRef<'div'> {
  state: string;
}

const ProgressBar: React.FC<IProgressBar> = ({
  currentStage = SignUpStages.IDENTIFICATION,
}) => {
  const [progressItemStates, setProgressItemsState] = useState<string[]>([
    'on-progress',
    'empty',
    'empty',
    'empty',
  ]);

  useEffect(() => {
    switch (currentStage) {
      case SignUpStages.IDENTIFICATION:
        setProgressItemsState(['on-progress', 'empty', 'empty', 'empty']);
        break;
      case SignUpStages.VERIFICATION:
        setProgressItemsState(['success', 'on-progress', 'empty', 'empty']);
        break;
      case SignUpStages.CREATION:
        setProgressItemsState(['success', 'success', 'on-progress', 'empty']);
        break;
      case SignUpStages.SUCCESS:
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

export default ProgressBar;
