import { Dispatch, SetStateAction } from "react";
import IUserData from "./IUserData";

interface ISignUpContext {
    currentStage: string;
    stages: string[];
    nextStage: () => void;
    prevStage: () => void;
    userData: IUserData;
    setUserData: Dispatch<SetStateAction<IUserData>>;
}

export default ISignUpContext;