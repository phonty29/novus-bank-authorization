import styled from 'styled-components';
import SignUpStages from '../../../enums/SignUpStages';

export interface ILine {
  className: string;
  stage: string;
}

const getProgressLineWidth = (stage: string) => {
  switch (stage) {
    case SignUpStages.IDENTIFICATION:
      return '20%';
    case SignUpStages.VERIFICATION:
      return '40%';
    case SignUpStages.CREATION:
      return '60%';
    case SignUpStages.SUCCESS:
      return '80%';
    default:
      break;
  }
};

const Line: React.FC<ILine> = ({ className }) => {
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

export default ProgressLine;