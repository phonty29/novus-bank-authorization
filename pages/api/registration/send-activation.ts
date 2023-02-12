import signUpService from '@api-server/registration';
import AuthMessages from '@utils/enums/AlertMessages';
import AuthError from '@utils/helpers/auth-error';
import IUserData from '@utils/types/auth/IUserData';
import { NextApiRequest, NextApiResponse } from 'next';

interface ISendActivationRequestData extends NextApiRequest {
  body: IUserData;
}

export type ISendActivationResponseData = {
  isSendActivationSuccessfull?: boolean;
  message?: AuthMessages;
};

export default async function handler(
  req: ISendActivationRequestData,
  res: NextApiResponse<ISendActivationResponseData>
) {
  switch (req.method) {
    case 'POST':
      try {
        await signUpService.sendActivation(req.body);
        res.status(200).json({ isSendActivationSuccessfull: true });
      } catch (error) {
        if (error instanceof AuthError) 
            return res.status(error.status).json({message: error.message, errors: error.errors})
        return res.status(500).json({ isUsernameAvailable: false, message: AuthMessages.SIGN_IN_OTHER_PROBLEMS });
    }
      break;
    default:
      break;
  }
}
