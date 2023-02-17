import AuthMessages from "@utils/enums/AuthMessages";
import IPersonalInfoFields from "@utils/types/auth/IPersonalInfoFields";
import { Dispatch, SetStateAction } from "react";

const validatePersonalInfoFields = (
    personalInfoState: IPersonalInfoFields, 
    setAlertMessage: Dispatch<SetStateAction<AuthMessages>>
): boolean => {
    const isAgeNotRestricted: boolean = new Date().getFullYear() - personalInfoState.dateOfBirth.getFullYear() > 16;
    if (!isAgeNotRestricted) 
      setAlertMessage(AuthMessages.AGE_RESTRICTED);
    return isAgeNotRestricted;
}

export default validatePersonalInfoFields;