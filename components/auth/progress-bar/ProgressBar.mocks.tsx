import SignUpStages from '../../../enums/SignUpStages';
import { IProgressBar } from './ProgressBar';

const base: IProgressBar = {
  currentStage: SignUpStages.IDENTIFICATION,
};

export const mockProgressBarProps = {
  base,
};
