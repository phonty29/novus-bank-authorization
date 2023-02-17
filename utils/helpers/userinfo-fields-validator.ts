import { ICheckUsernameResponseData } from "@pages/api/check-middlewares/username";
import ApiRoutes from "@utils/enums/ApiRoutes";
import AuthMessages from "@utils/enums/AuthMessages";
import IUserInfoFields from "@utils/types/auth/IUserInfoFields";
import { Dispatch, SetStateAction } from "react";
import ClientService from "./fetch-utils";

const validateUserInfoFields = async(
    userInfoState: IUserInfoFields,
    setAlertMessage: Dispatch<SetStateAction<AuthMessages>>
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
        setAlertMessage(AuthMessages.USERNAME_WRONG_FORMAT);
    else if (!isPasswordValid) 
        setAlertMessage(AuthMessages.PASSWORD_WRONG_FORMAT);
    else if (!isPasswordConfirmationValid)
        setAlertMessage(AuthMessages.PASSWORDS_DONT_MATCH);
    else if (!isUsernameAvailable && message)
        setAlertMessage(message);

    return (
        isUsernameValid &&
        isPasswordValid &&
        isPasswordConfirmationValid &&
        isUsernameAvailable
    );
}

export default validateUserInfoFields;