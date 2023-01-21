import IActivationFields, { activationFieldsInitialState } from "./IActivationFields";
import ICredentials from "./ICredentials";
import IPersonalInfoFields, { personalInfoFieldsInitialState } from "./IPersonalInfoFields";

interface IUserData {
    credentials: ICredentials;
    personalInformation: IPersonalInfoFields;
    accountInformation: IActivationFields;
}

export const userDataInitialState: IUserData = {
    credentials: {
        username: "",
        password: ""
    },
    personalInformation: personalInfoFieldsInitialState,
    accountInformation: activationFieldsInitialState
}
  
export default IUserData;
  