import {
  createContext, useContext,
  useState
} from 'react';
import SignUpStages from '../../lib/enums/SignUpStages';
import IActivationFields, { activationFieldsInitialState, validateActivationFields } from '../../lib/types/auth/IActivationFields';
import IConfirmationFields, { confirmationFieldsInitialState } from '../../lib/types/auth/IConfirmationFields';
import IFieldsContext from '../../lib/types/auth/IFieldsContext';
import IPersonalInfoFields, { personalInfoFieldsInitialState, validatePersonalInfoFields } from '../../lib/types/auth/IPersonalInfoFields';
import IUserInfoFields, { userInfoFieldsInitialState, validateUserInfoFields } from '../../lib/types/auth/IUserInfoFields';
import { useAuthContext } from './AuthContext';

interface IFieldsProvider extends React.ComponentPropsWithoutRef<'div'> {}

const FieldsContext = createContext<IFieldsContext>({
  personalInfoState: personalInfoFieldsInitialState,
  setPersonalInfoState: () => {},
  userInfoState: userInfoFieldsInitialState,
  setUserInfoState: () => {},
  activationState: activationFieldsInitialState,
  setActivationState: () => {},
  confirmationState: confirmationFieldsInitialState,
  setConfirmationState: () => {},
  validateFields: (currentStage: string) => true,
});

const FieldsProvider: React.FC<IFieldsProvider> = ({ children }) => {
  const [personalInfoState, setPersonalInfoState] = useState<IPersonalInfoFields>(personalInfoFieldsInitialState);
  const [userInfoState, setUserInfoState] = useState<IUserInfoFields>(userInfoFieldsInitialState);
  const [activationState, setActivationState] = useState<IActivationFields>(activationFieldsInitialState);
  const [confirmationState, setConfirmationState] = useState<IConfirmationFields>(confirmationFieldsInitialState);
  const {setAlertMessage} = useAuthContext();

  const validateFields = (currentStage: string) => {
    switch (currentStage) {
      case SignUpStages.PERSONAL_INFO:
        return validatePersonalInfoFields(personalInfoState, setAlertMessage);
      case SignUpStages.USER_INFO:
        return validateUserInfoFields(userInfoState, setAlertMessage);
      case SignUpStages.ACTIVATION:
        return validateActivationFields(activationState, setAlertMessage);
      default:
        return true;
    }
  };

  return (
    <FieldsContext.Provider
      value={{
        personalInfoState,
        setPersonalInfoState,
        userInfoState,
        setUserInfoState,
        activationState,
        setActivationState,
        confirmationState,
        setConfirmationState,
        validateFields,
      }}
    >
      {children}
    </FieldsContext.Provider>
  );
};

export function useFieldsContext() {
  return useContext(FieldsContext);
}

export default FieldsProvider;
