import AlertMessages from '@utils/enums/AlertMessages';
import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';

interface IAuthProvider extends React.ComponentPropsWithoutRef<'div'> {}

interface IAuthContext {
  alertMessage: AlertMessages;
  setAlertMessage: Dispatch<SetStateAction<AlertMessages>>;
}

const authInitialState: IAuthContext = {
    alertMessage: AlertMessages.SIGN_IN_EMPTY_FIELD,
    setAlertMessage: () => {}
}

const AuthContext = createContext<IAuthContext>(authInitialState);

const AuthProvider: React.FC<IAuthProvider> = ({ children }) => {
  const [alertMessage, setAlertMessage] = useState<AlertMessages>(authInitialState.alertMessage);
  
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