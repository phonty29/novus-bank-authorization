import signUpService from '@api-server/registration';
import AuthMessages from '@utils/enums/AlertMessages';
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
