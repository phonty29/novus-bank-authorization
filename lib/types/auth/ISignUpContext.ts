interface ISignUpContext {
    currentStage: string;
    stages: string[];
    nextStage: () => void;
    prevStage: () => void;
}

export default ISignUpContext;