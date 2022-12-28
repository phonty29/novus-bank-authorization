import { createContext, useContext, useState } from "react";
import { IdentificationFields } from "../../components/auth/signup-fields/IdentificationForm";
import AccountType from "../../enums/AccountType";

interface ISignUpContext extends React.ComponentPropsWithoutRef<'div'> {}

const SignUpContext = createContext<ISignUpContext>({});

export const SignUpProvider: React.FC<ISignUpContext> = ({ children }) => {
    const [identificationFields, setIdentificationFields] = useState<IdentificationFields>({
        accountType: AccountType.SELF,
        phoneNumber: "",
        email: ""
    });
    
    return (
        <SignUpContext.Provider value={{}}>
            {children}
        </SignUpContext.Provider>
    );

};

export function useSignUpContext() {
    return useContext(SignUpContext);
}

export default SignUpContext;