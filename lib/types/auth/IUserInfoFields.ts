import { Dispatch, SetStateAction } from "react";
import AlertMessages from "../../enums/AlertMessages";
import IUser from "./IUser";

interface IUserInfoFields {
    userFields: IUser;
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

export const validateUserInfoFields = (userInfoState: IUserInfoFields, setAlertMessage: Dispatch<SetStateAction<AlertMessages>>): boolean => {
    const validUsernameRegex: RegExp = /^[a-zA-Z0-9]+$/; //eslint-disable-line
    const validPasswordRegex: RegExp = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/; //eslint-disable-line
    const isUsernameValid: boolean = validUsernameRegex.test(userInfoState.userFields.username);
    const isPasswordValid: boolean = validPasswordRegex.test(userInfoState.userFields.password);
    const isPasswordConfirmationValid: boolean = userInfoState.repeatedPassword === userInfoState.userFields.password;
    if (!isUsernameValid) 
        setAlertMessage(AlertMessages.SIGN_UP_WRONG_USERNAME_FORMAT);
    else if (!isPasswordValid) 
        setAlertMessage(AlertMessages.SIGN_UP_WRONG_PASSWORD_FORMAT);
    else if (!isPasswordConfirmationValid)
        setAlertMessage(AlertMessages.SIGN_IN_PASSWORD_DOES_NOT_MATCH);
    else 
        setAlertMessage(AlertMessages.SIGN_IN_EMPTY_FIELD);

    return (
        isUsernameValid &&
        isPasswordValid &&
        isPasswordConfirmationValid
    );
}

export default IUserInfoFields;
