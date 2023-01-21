import { NextApiRequest, NextApiResponse } from 'next';
import AuthMessages from '../../../lib/enums/AlertMessages';
import IUserData from '../../../lib/types/auth/IUserData';
import SignUpService from '../../../services/sign-up';

interface SendActivationRequestData extends NextApiRequest {
  body: IUserData;
}

export type SendActivationResponseData = {
  responseMessage?: string;
  message?: AuthMessages;
};

const { sendActivation } = SignUpService;

export default async function handler(
  req: SendActivationRequestData,
  res: NextApiResponse<SendActivationResponseData>
) {
  switch (req.method) {
    case 'POST':
      try {
        let responseMessage = await sendActivation(req.body);
        res.status(200).json({ responseMessage });
      } catch (error) {
        res.status(500).json({ message: AuthMessages.SIGN_IN_OTHER_PROBLEMS });
      }
      break;
    default:
      break;
  }
}
