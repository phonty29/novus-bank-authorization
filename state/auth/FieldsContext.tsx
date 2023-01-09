import {
  createContext, useContext,
  useState
} from 'react';
import SignUpStages from '../../lib/enums/SignUpStages';
import ICreationFields, {
  creationFieldsInitialState, validateCreationFields
} from '../../lib/types/auth/ICreationFields';
import IdentificationFields, {
  identificationFieldsInitialState, validateIdentificationFields
} from '../../lib/types/auth/IdentificationFields';
import IFieldsContext from '../../lib/types/auth/IFieldsContext';
import ISuccessFields, { successFieldsInitialState, validateSuccessFields } from '../../lib/types/auth/ISuccessFields';
import IVerificationFields, {
  verificationFieldsFieldsInitialState
} from '../../lib/types/auth/IVerificationFields';
import { useAuthContext } from './AuthContext';

interface IFieldsProvider extends React.ComponentPropsWithoutRef<'div'> {}

const FieldsContext = createContext<IFieldsContext>({
  identificationState: identificationFieldsInitialState,
  setIdentificationState: () => {},
  verificationState: verificationFieldsFieldsInitialState,
  setVerificationState: () => {},
  creationState: creationFieldsInitialState,
  setCreationState: () => {},
  successState: successFieldsInitialState,
  setSuccessState: () => {},
  validateFields: (currentStage: string) => true,
});

const FieldsProvider: React.FC<IFieldsProvider> = ({ children }) => {
  const [identificationState, setIdentificationState] =
    useState<IdentificationFields>(identificationFieldsInitialState);
  const [verificationState, setVerificationState] =
    useState<IVerificationFields>(verificationFieldsFieldsInitialState);
  const [creationState, setCreationState] = useState<ICreationFields>(
    creationFieldsInitialState
  );
  const [successState, setSuccessState] = useState<ISuccessFields>(successFieldsInitialState);
  const {setAlertMessage} = useAuthContext();

  const validateFields = (currentStage: string) => {
    switch (currentStage) {
      case SignUpStages.IDENTIFICATION:
        return validateIdentificationFields(identificationState, setAlertMessage);
      case SignUpStages.CREATION:
        return validateCreationFields(creationState, setAlertMessage);
      case SignUpStages.SUCCESS:
        return validateSuccessFields(successState, setAlertMessage);
      default:
        return true;
    }
  };

  return (
    <FieldsContext.Provider
      value={{
        identificationState,
        setIdentificationState,
        verificationState,
        setVerificationState,
        creationState,
        setCreationState,
        successState, 
        setSuccessState,
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
