import SignUpStages from '@utils/enums/SignUpStages';
import validateActivationFields from '@utils/helpers/activation-fields-validator';
import validatePersonalInfoFields from '@utils/helpers/personal-fields-validator';
import validateUserInfoFields from '@utils/helpers/userinfo-fields-validator';
import IActivationFields, { activationFieldsInitialState } from '@utils/types/auth/IActivationFields';
import IFieldsContext from '@utils/types/auth/IFieldsContext';
import IPersonalInfoFields, { personalInfoFieldsInitialState } from '@utils/types/auth/IPersonalInfoFields';
import IUserInfoFields, { userInfoFieldsInitialState } from '@utils/types/auth/IUserInfoFields';
import {
  createContext, useContext,
  useState
} from 'react';
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
  validateFields: (currentStage: string) => new Promise(() => true),
  prepareData: () => {},
  isActivationLinkSend: false,
  setIsActivationLinkSend: () => {}
});

const FieldsProvider: React.FC<IFieldsProvider> = ({ children }) => {
  const [personalInfoState, setPersonalInfoState] = useState<IPersonalInfoFields>(personalInfoFieldsInitialState);
  const [userInfoState, setUserInfoState] = useState<IUserInfoFields>(userInfoFieldsInitialState);
  const [activationState, setActivationState] = useState<IActivationFields>(activationFieldsInitialState);
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

