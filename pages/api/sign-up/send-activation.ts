import { NextApiRequest, NextApiResponse } from 'next';
import AuthMessages from '../../../lib/enums/AlertMessages';
import IUserData from '../../../lib/types/auth/IUserData';
import signUpService from '../../../services/sign-up';

interface SendActivationRequestData extends NextApiRequest {
  body: IUserData;
}

export type SendActivationResponseData = {
  isSendActivationSuccessfull?: boolean;
  message?: AuthMessages;
};

export default async function handler(
  req: SendActivationRequestData,
  res: NextApiResponse<SendActivationResponseData>
) {
  switch (req.method) {
    case 'POST':
      try {
        let isSendActivationSuccessfull = await signUpService.sendActivation(req.body);
        res.status(200).json({ isSendActivationSuccessfull });
      } catch (error) {
        res.status(500).json({ message: AuthMessages.SIGN_IN_OTHER_PROBLEMS });
      }
      break;
    default:
      break;
  }
}
