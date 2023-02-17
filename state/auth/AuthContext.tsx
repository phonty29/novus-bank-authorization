import { default as AlertMessages, default as AuthMessages } from '@utils/enums/AuthMessages';
import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';

interface IAuthProvider extends React.ComponentPropsWithoutRef<'div'> {}

interface IAuthContext {
  alertMessage: AuthMessages;
  setAlertMessage: Dispatch<SetStateAction<AuthMessages>>;
}

const authInitialState: IAuthContext = {
    alertMessage: AlertMessages.AUTH_EMPTY_FIELDS,
    setAlertMessage: () => {}
}

const AuthContext = createContext<IAuthContext>(authInitialState);

const AuthProvider: React.FC<IAuthProvider> = ({ children }) => {
  const [alertMessage, setAlertMessage] = useState<AuthMessages>(authInitialState.alertMessage);
  
  return (
    <AuthContext.Provider
      value={{
        alertMessage,
        setAlertMessage
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuthContext() {
  return useContext(AuthContext);
}

export default AuthProvider;