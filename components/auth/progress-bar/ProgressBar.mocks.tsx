import SignUpStages from '../../../enums/SignUpStages';
import { IProgressBar } from './ProgressBar';

const base: IProgressBar = {
  currentStage: SignUpStages.IDENTIFICATION,
  stages: [],
};

export const mockProgressBarProps = {
  base,
};
