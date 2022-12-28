import { ISignUpFields } from './SignUpFields';

const base: ISignUpFields = {
  currentField: 'Hello world!',
  switchNext: () => {},
  switchPrev: () => {}
};

export const mockSignUpFieldsProps = {
  base,
};
