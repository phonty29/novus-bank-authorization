import ProgressBar from '../progress-bar/ProgressBar';
import SignUpFields from '../signup-fields/SignUpFields';

export interface ISignUpForm extends React.ComponentPropsWithoutRef<'div'> {}

const SignUpForm: React.FC<ISignUpForm> = () => {
  return (
    <div className="sign-up-form">
      <h1 className="sign-up-label">Signing up for Online Banking</h1>
      <ProgressBar />
      <SignUpFields />
    </div>
  );
};

export default SignUpForm;
