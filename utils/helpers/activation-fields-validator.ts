import { ICheckEmailResponseData } from "@pages/api/check-middlewares/email";
import AlertMessages from "@utils/enums/AlertMessages";
import ApiRoutes from "@utils/enums/ApiRoutes";
import IActivationFields from "@utils/types/auth/IActivationFields";
import { Dispatch, SetStateAction } from "react";
import ClientService from "./fetch-utils";

const validateActivationFields = async (
    activationState: IActivationFields, 
    setAlertMessage: Dispatch<SetStateAction<string>>
  ) => {
    const validPhoneRegex: RegExp =
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im; //eslint-disable-line
    const validEmailRegex: RegExp =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; //eslint-disable-line
    const isPhoneValid = validPhoneRegex.test(activationState.phoneNumber);
    const isEmailValid = validEmailRegex.test(activationState.email);
    const data: {email: string} = { email: activationState.email };
    const {isEmailAvailable, message}: ICheckEmailResponseData = await ClientService.post(data, ApiRoutes.CHECK_EMAIL);
    if (!isPhoneValid) 
      setAlertMessage(AlertMessages.SIGN_UP_WRONG_PHONE_FORMAT);
    else if (!isEmailValid) 
      setAlertMessage(AlertMessages.SIGN_UP_WRONG_EMAIL_FORMAT);
    else if (!isEmailAvailable)
      setAlertMessage(message as AlertMessages);
    else 
      setAlertMessage(AlertMessages.SIGN_IN_EMPTY_FIELD);
    return (
      isPhoneValid &&
      isEmailValid &&
      isEmailAvailable
    );
};

export default validateActivationFields;