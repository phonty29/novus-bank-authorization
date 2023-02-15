import AlertMessages from "@utils/enums/AlertMessages";
import IPersonalInfoFields from "@utils/types/auth/IPersonalInfoFields";
import { Dispatch, SetStateAction } from "react";

const validatePersonalInfoFields = (
    personalInfoState: IPersonalInfoFields, 
    setAlertMessage: Dispatch<SetStateAction<string>>
): boolean => {
    const isAgeNotRestricted: boolean = new Date().getFullYear() - personalInfoState.dateOfBirth.getFullYear() > 16;
    if (!isAgeNotRestricted) 
      setAlertMessage(AlertMessages.SIGN_UP_AGE_RESTRICTED);
    else 
      setAlertMessage(AlertMessages.SIGN_IN_EMPTY_FIELD);
    return isAgeNotRestricted;
}

export default validatePersonalInfoFields;