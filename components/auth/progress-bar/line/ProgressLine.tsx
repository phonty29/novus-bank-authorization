import SignUpStages from '@utils/enums/SignUpStages';
import styled from 'styled-components';

export interface ILine {
  className: string;
  stage: string;
}

const getProgressLineWidth = (stage: string) => {
  switch (stage) {
    case SignUpStages.PERSONAL_INFO:
      return '18%';
    case SignUpStages.USER_INFO:
      return '40%';
    case SignUpStages.ACTIVATION:
      return '60%';
    case SignUpStages.CONFIRMATION:
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
    min-width: 18%;
    background-color: #076f32;
    width: ${(props) => getProgressLineWidth(props.stage)};
  }
`;

export default ProgressLine;
