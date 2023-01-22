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
import { useSignUpContext } from './SignUpContext';

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
  validateFields: (currentStage: string) => new Promise(() => true),
  prepareData: () => {},
  isActivationLinkSend: false,
  setIsActivationLinkSend: () => {}
});

const FieldsProvider: React.FC<IFieldsProvider> = ({ children }) => {
  const [personalInfoState, setPersonalInfoState] = useState<IPersonalInfoFields>(personalInfoFieldsInitialState);
  const [userInfoState, setUserInfoState] = useState<IUserInfoFields>(userInfoFieldsInitialState);
  const [activationState, setActivationState] = useState<IActivationFields>(activationFieldsInitialState);
  const [confirmationState, setConfirmationState] = useState<IConfirmationFields>(confirmationFieldsInitialState);
  const [isActivationLinkSend, setIsActivationLinkSend] = useState<boolean>(false);
  const {setUserData} = useSignUpContext();
  const {setAlertMessage} = useAuthContext();

  const validateFields = async (currentStage: string) => {
    switch (currentStage) {
      case SignUpStages.PERSONAL_INFO:
        return validatePersonalInfoFields(personalInfoState, setAlertMessage);
      case SignUpStages.USER_INFO:
        const isUserInfoValid: boolean = await validateUserInfoFields(userInfoState, setAlertMessage);
        return isUserInfoValid;
      case SignUpStages.ACTIVATION:
        const isActivationFieldsValid: boolean = await validateActivationFields(activationState, setAlertMessage);
        if (isActivationFieldsValid) {
          prepareData();
          return true;
        } else return false;
      default:
        return false;
    }
  };

  const prepareData = () => {
    setUserData({
      credentials: {
        username: userInfoState.userFields.username,
        password: userInfoState.userFields.password
      },
      personalInformation: personalInfoState,
      accountInformation: activationState
    });
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
        prepareData,
        isActivationLinkSend, 
        setIsActivationLinkSend
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

