import AccountType from "../../enums/AccountType";

interface IdentificationFields {
    accountType: string;
    phoneNumber: string;
    email: string;
}

export const identificationFieldsInitialState = {
    accountType: AccountType.SELF,
    phoneNumber: "",
    email: ""
}

export default IdentificationFields;