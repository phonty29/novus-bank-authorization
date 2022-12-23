export interface ISignUpFields {
  currentField: string;
}

const SignUpFields: React.FC<ISignUpFields> = ({ currentField }) => {
  return <div>{currentField}</div>;
};

export default SignUpFields;
