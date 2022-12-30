import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";
import SignUpStages from "../../enums/SignUpStages";
import IdentificationFields, { identificationFieldsInitialState } from "../../types/auth/IdentificationFields";

interface IFieldsProvider extends React.ComponentPropsWithoutRef<'div'> {}

interface IFieldsContext {
    identificationState: IdentificationFields;
    setIdentificationState: Dispatch<SetStateAction<IdentificationFields>>;
    validateFields: (s: string) => boolean;
}

const FieldsContext = createContext<IFieldsContext>({
    identificationState: identificationFieldsInitialState,
    setIdentificationState: () => {},
    validateFields: (currentStage: string) => true
});

const FieldsProvider: React.FC<IFieldsProvider> = ({ children }) => {
    const [identificationState, setIdentificationState] = useState<IdentificationFields>(identificationFieldsInitialState);

    const validateIdentificationFields = (): boolean => {
        const validPhoneRegex: RegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im; //eslint-disable-line
        const validEmailRegex: RegExp =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; //eslint-disable-line
        return validPhoneRegex.test(identificationState.phoneNumber) && validEmailRegex.test(identificationState.email);
    };

    const validateFields = (currentStage: string) => {
        switch (currentStage) {
          case SignUpStages.IDENTIFICATION: return validateIdentificationFields();
          default:
            return true;
        }
      }

    return (
        <FieldsContext.Provider value={{
            identificationState,
            setIdentificationState,
            validateFields
        }}>
            {children}
        </FieldsContext.Provider>
    );
};

export function useFieldsContext() {
    return useContext(FieldsContext);
}

export default FieldsProvider;