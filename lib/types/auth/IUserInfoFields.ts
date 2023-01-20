import { Dispatch, SetStateAction } from "react";
import { CheckUsernameResponseData } from "../../../pages/api/sign-up/check-username";
import AlertMessages from "../../enums/AlertMessages";
import ApiRoutes from "../../enums/ApiRoutes";
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

export const validateUserInfoFields = async (userInfoState: IUserInfoFields, setAlertMessage: Dispatch<SetStateAction<AlertMessages>>): Promise<Promise<boolean>> => {
    const validUsernameRegex: RegExp = /^[a-zA-Z0-9]+$/; //eslint-disable-line
    const validPasswordRegex: RegExp = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/; //eslint-disable-line
    const isUsernameValid: boolean = validUsernameRegex.test(userInfoState.userFields.username);
    const isPasswordValid: boolean = validPasswordRegex.test(userInfoState.userFields.password);
    const isPasswordConfirmationValid: boolean = userInfoState.repeatedPassword === userInfoState.userFields.password;

    const data: {username: string} = { username: userInfoState.userFields.username };
    const jsonData = JSON.stringify(data);
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: jsonData,
    };
    const response = await fetch(ApiRoutes.CHECK_USERNAME, options);
    const {isUsernameAvailable, message}: CheckUsernameResponseData = await response.json();

    if (!isUsernameValid) 
        setAlertMessage(AlertMessages.SIGN_UP_WRONG_USERNAME_FORMAT);
    else if (!isPasswordValid) 
        setAlertMessage(AlertMessages.SIGN_UP_WRONG_PASSWORD_FORMAT);
    else if (!isPasswordConfirmationValid)
        setAlertMessage(AlertMessages.SIGN_IN_PASSWORD_DOES_NOT_MATCH);
    else if (!isUsernameAvailable)
        setAlertMessage(message as AlertMessages);
    else 
        setAlertMessage(AlertMessages.SIGN_IN_EMPTY_FIELD);

    return (
        isUsernameValid &&
        isPasswordValid &&
        isPasswordConfirmationValid &&
        isUsernameAvailable
    );
}

export default IUserInfoFields;
