import styled, { css } from 'styled-components';
import SignUpStages from '../../../enums/SignUpStages';

export interface ISignUpForm extends React.ComponentPropsWithoutRef<'div'> {}
interface IProgressBar extends React.ComponentProps<'div'> {
  stage: SignUpStages;
}
interface IProgressBullet extends React.ComponentPropsWithoutRef<''> {
  isEmpty: boolean;
  state?: '' | 'on-stage' | 'success';
}

const Line = styled.div`
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
    ${(props) =>
      props.stage == SignUpStages.IDENTIFICATION &&
      css`
        width: 20%;
      `}
    ${(props) =>
      props.stage == SignUpStages.VERIFICATION &&
      css`
        width: 40%;
      `}
    ${(props) =>
      props.stage == SignUpStages.CREATION &&
      css`
        width: 60%;
      `}
    ${(props) =>
      props.stage == SignUpStages.SUCCESS &&
      css`
        width: 80%;
      `}
  }
`;

const SignUpForm: React.FC<ISignUpForm> = () => {
  return (
    <div className="sign-up-form">
      <h1 className="sign-up-label">Signing up for Online Banking</h1>
      <ProgressBar stage={SignUpStages.CREATION} />
    </div>
  );
};

export default SignUpForm;

const ProgressBar: React.FC<IProgressBar> = ({
  stage = SignUpStages.IDENTIFICATION,
}) => {
  return (
    <div className="sign-up-progress-bar">
      {stage === SignUpStages.IDENTIFICATION && (
        <>
          <ProgressBullet isEmpty={false} state={'on-stage'} />
          <ProgressBullet isEmpty={true} />
          <ProgressBullet isEmpty={true} />
          <ProgressBullet isEmpty={true} />
        </>
      )}
      {stage === SignUpStages.VERIFICATION && (
        <>
          <ProgressBullet isEmpty={false} state={'success'} />
          <ProgressBullet isEmpty={false} state={'on-stage'} />
          <ProgressBullet isEmpty={true} />
          <ProgressBullet isEmpty={true} />
        </>
      )}
      {stage === SignUpStages.CREATION && (
        <>
          <ProgressBullet isEmpty={false} state={'success'} />
          <ProgressBullet isEmpty={false} state={'success'} />
          <ProgressBullet isEmpty={false} state={'on-stage'} />
          <ProgressBullet isEmpty={true} />
        </>
      )}
      {stage === SignUpStages.SUCCESS && (
        <>
          <ProgressBullet isEmpty={false} state={'success'} />
          <ProgressBullet isEmpty={false} state={'success'} />
          <ProgressBullet isEmpty={false} state={'success'} />
          <ProgressBullet isEmpty={false} state={'on-stage'} />
        </>
      )}
      <Line
        stage={stage}
        className="progress-line"
        data-label="progress-line"
      />
    </div>
  );
};

const ProgressBullet: React.FC<IProgressBullet> = ({ isEmpty, state }) => {
  return (
    <>
      {isEmpty ? (
        <div className="empty progress-item"></div>
      ) : (
        <div className={`bg-green ${state} progress-item`}></div>
      )}
    </>
  );
};
