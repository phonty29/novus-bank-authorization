import { ICheckEmailResponseData } from "@pages/api/check-middlewares/email";
import ApiRoutes from "@utils/enums/ApiRoutes";
import AuthMessages from "@utils/enums/AuthMessages";
import IActivationFields from "@utils/types/auth/IActivationFields";
import { Dispatch, SetStateAction } from "react";
import ClientService from "./fetch-utils";

const validateActivationFields = async (
    activationState: IActivationFields, 
    setAlertMessage: Dispatch<SetStateAction<AuthMessages>>
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
      setAlertMessage(AuthMessages.PHONE_WRONG_FORMAT);
    else if (!isEmailValid) 
      setAlertMessage(AuthMessages.EMAIL_WRONG_FORMAT);
    else if (!isEmailAvailable && message)
      setAlertMessage(message);
    else 
      setAlertMessage(AuthMessages.AUTH_EMPTY_FIELDS);
    return (
      isPhoneValid &&
      isEmailValid &&
      isEmailAvailable
    );
};

export default validateActivationFields;