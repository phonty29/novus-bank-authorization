import IActivationFields, { activationFieldsInitialState } from "./IActivationFields";
import IPersonalInfoFields, { personalInfoFieldsInitialState } from "./IPersonalInfoFields";
import IUser from "./IUser";

interface IUserData {
    credentials: IUser;
    personalInformation: IPersonalInfoFields;
    accountInformation: IActivationFields;
    isActivated: false;
}

export const userDataInitialState: IUserData = {
    credentials: {
        username: "",
        password: ""
    },
    personalInformation: personalInfoFieldsInitialState,
    accountInformation: activationFieldsInitialState,
    isActivated: false
}
  
export default IUserData;
  