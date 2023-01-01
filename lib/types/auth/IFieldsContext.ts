import { Dispatch, SetStateAction } from "react";
import ICreationFields from "./ICreationFields";
import IdentificationFields from "./IdentificationFields";
import ISuccessFields from "./ISuccessFields";
import IVerificationFields from "./IVerificationFields";

interface IFieldsContext {
    identificationState: IdentificationFields;
    setIdentificationState: Dispatch<SetStateAction<IdentificationFields>>;
    verificationState: IVerificationFields;
    setVerificationState: Dispatch<SetStateAction<IVerificationFields>>;
    creationState: ICreationFields;
    setCreationState: Dispatch<SetStateAction<ICreationFields>>;
    successState: ISuccessFields;
    setSuccessState: Dispatch<SetStateAction<ISuccessFields>>;
    validateFields: (s: string) => boolean;
}

export default IFieldsContext;