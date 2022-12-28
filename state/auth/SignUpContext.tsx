import { createContext } from "react";

interface ISignUpContext extends React.ComponentPropsWithoutRef<'div'> {}

const SignUpContext = createContext<ISignUpContext>({});

export const SignUpProvider: React.FC<ISignUpContext> = ({ children }) => {
    return (
        <SignUpContext.Provider value={{}}>
            {children}
        </SignUpContext.Provider>
    );

};

export default SignUpContext;