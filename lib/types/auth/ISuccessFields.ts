import { Dispatch, SetStateAction } from "react";
import AlertMessages from "../../enums/AlertMessages";
import User from "./IUser";

interface ISuccessFields {
    userFields: User;
    repeatedPassword: string;
    emailNotification: boolean;
}

export const successFieldsInitialState: ISuccessFields = {
    userFields: {
        username: "",
        password: ""
    },
    repeatedPassword: "",
    emailNotification: false
};

export const validateSuccessFields = (successState: ISuccessFields, setAlertMessage: Dispatch<SetStateAction<AlertMessages>>): boolean => {
    const validUsernameRegex: RegExp = /^[a-zA-Z0-9]+$/; //eslint-disable-line
    const validPasswordRegex: RegExp = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/; //eslint-disable-line
    const isUsernameValid: boolean = validUsernameRegex.test(successState.userFields.username);
    const isPasswordValid: boolean = validPasswordRegex.test(successState.userFields.password);
    const isPasswordConfirmationValid: boolean = successState.repeatedPassword === successState.userFields.password;
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

export default ISuccessFields;
