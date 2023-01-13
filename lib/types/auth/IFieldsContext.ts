import { Dispatch, SetStateAction } from "react";
import IActivationFields from "./IActivationFields";
import IConfirmationFields from "./IConfirmationFields";
import IPersonalInfoFields from "./IPersonalInfoFields";
import IUserInfoFields from "./IUserInfoFields";

interface IFieldsContext {
    personalInfoState: IPersonalInfoFields;
    setPersonalInfoState: Dispatch<SetStateAction<IPersonalInfoFields>>;
    userInfoState: IUserInfoFields;
    setUserInfoState: Dispatch<SetStateAction<IUserInfoFields>>;
    activationState: IActivationFields;
    setActivationState: Dispatch<SetStateAction<IActivationFields>>;
    confirmationState: IConfirmationFields;
    setConfirmationState: Dispatch<SetStateAction<IConfirmationFields>>;
    validateFields: (s: string) => boolean;
}

export default IFieldsContext;