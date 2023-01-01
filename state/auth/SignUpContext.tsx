import { createContext, useContext, useState } from 'react';
import SignUpStages from '../../lib/enums/SignUpStages';

interface ISignUpProvider extends React.ComponentPropsWithoutRef<'div'> {}

interface ISignUpContext {
  currentStage: string;
  stages: string[];
  nextStage: () => void;
  prevStage: () => void;
}

const SignUpContext = createContext<ISignUpContext>({
  currentStage: '',
  stages: [],
  nextStage: () => {},
  prevStage: () => {},
});

const SignUpProvider: React.FC<ISignUpProvider> = ({ children }) => {
  const [stageIndex, setStageIndex] = useState<number>(0);

  const signUpStages = Object.keys(SignUpStages).map((key) => key);
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
