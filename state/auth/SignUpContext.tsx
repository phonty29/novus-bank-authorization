import SignUpStages from '@utils/enums/SignUpStages';
import ISignUpContext from '@utils/types/auth/ISignUpContext';
import IUserData, { userDataInitialState } from '@utils/types/auth/IUserData';
import { createContext, useContext, useState } from 'react';

interface ISignUpProvider extends React.ComponentPropsWithoutRef<'div'> {}

const SignUpContext = createContext<ISignUpContext>({
  currentStage: '',
  stages: [],
  nextStage: () => {},
  prevStage: () => {},
  userData: userDataInitialState,
  setUserData: () => {}
});

const SignUpProvider: React.FC<ISignUpProvider> = ({ children }) => {
  const [stageIndex, setStageIndex] = useState<number>(0);
  const [userData, setUserData] = useState<IUserData>(userDataInitialState);

  const signUpStages = Object.values(SignUpStages).map((key) => key);
  const prevStage = () => {
    if (stageIndex === 0) setStageIndex(3);
    else setStageIndex(stageIndex - 1);
  };
  const nextStage = () => {
    if (stageIndex === signUpStages.length - 1) setStageIndex(0);
    else setStageIndex(stageIndex + 1);
  };

  return (
    <SignUpContext.Provider
      value={{
        currentStage: signUpStages[stageIndex],
        stages: signUpStages,
        nextStage,
        prevStage,
        userData,
        setUserData
      }}
    >
      {children}
    </SignUpContext.Provider>
  );
};

export function useSignUpContext() {
  return useContext(SignUpContext);
}

export default SignUpProvider;
