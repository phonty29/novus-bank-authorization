import ICredentials from "./ICredentials";

interface IUserInfoFields {
    userFields: ICredentials;
    repeatedPassword: string;
    emailNotification: boolean;
}

export const userInfoFieldsInitialState: IUserInfoFields = {
    userFields: {
        username: "",
        password: ""
    },
    repeatedPassword: "",
    emailNotification: false
};

export default IUserInfoFields;
