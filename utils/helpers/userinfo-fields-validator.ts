import { ICheckUsernameResponseData } from "@pages/api/check-middlewares/username";
import AlertMessages from "@utils/enums/AlertMessages";
import ApiRoutes from "@utils/enums/ApiRoutes";
import IUserInfoFields from "@utils/types/auth/IUserInfoFields";
import { Dispatch, SetStateAction } from "react";
import ClientService from "./fetch-utils";

const validateUserInfoFields = async(
    userInfoState: IUserInfoFields,
    setAlertMessage: Dispatch<SetStateAction<string>>
): Promise<Promise<boolean>> => {
    const validUsernameRegex: RegExp = /^[a-zA-Z0-9]+$/; //eslint-disable-line
    const validPasswordRegex: RegExp = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/; //eslint-disable-line
    const isUsernameValid: boolean = validUsernameRegex.test(userInfoState.userFields.username);
    const isPasswordValid: boolean = validPasswordRegex.test(userInfoState.userFields.password);
    const isPasswordConfirmationValid: boolean = userInfoState.repeatedPassword === userInfoState.userFields.password;
    const data: {username: string} = { username: userInfoState.userFields.username };
    const {isUsernameAvailable, message}: ICheckUsernameResponseData = 
                                    await ClientService.post(data, ApiRoutes.CHECK_USERNAME);


    if (!isUsernameValid) 
        setAlertMessage(AlertMessages.SIGN_UP_WRONG_USERNAME_FORMAT);
    else if (!isPasswordValid) 
        setAlertMessage(AlertMessages.SIGN_UP_WRONG_PASSWORD_FORMAT);
    else if (!isPasswordConfirmationValid)
        setAlertMessage(AlertMessages.SIGN_IN_PASSWORD_DOES_NOT_MATCH);
    else if (!isUsernameAvailable)
        setAlertMessage(message);
    else 
        setAlertMessage(AlertMessages.SIGN_IN_EMPTY_FIELD);

    return (
        isUsernameValid &&
        isPasswordValid &&
        isPasswordConfirmationValid &&
        isUsernameAvailable
    );
}

export default validateUserInfoFields;