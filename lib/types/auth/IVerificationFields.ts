import VerificationMethod from "../../enums/VerificationMethod";

interface IVerificationFields {
    verificationMethod: VerificationMethod;
}

export const verificationFieldsFieldsInitialState: IVerificationFields = {
    verificationMethod: VerificationMethod.BEFORE_CHOICE
}

export default IVerificationFields;