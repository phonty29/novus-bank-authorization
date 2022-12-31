import VerificationMethod from "../../enums/VerificationMethod";

interface IVerificationFields {
    verificationMethod: VerificationMethod;
}

export const verificationFieldsFieldsInitialState = {
    verificationMethod: VerificationMethod.BEFORE_CHOICE
}

export default IVerificationFields;