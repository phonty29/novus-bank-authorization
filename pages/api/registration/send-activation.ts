import signUpService from '@api-server/registration';
import AuthMessages from '@utils/enums/AuthMessages';
import AuthError from '@utils/helpers/auth-error';
import IUserData from '@utils/types/auth/IUserData';
import { NextApiRequest, NextApiResponse } from 'next';

interface ISendActivationRequestData extends NextApiRequest {
  body: IUserData;
}

export type ISendActivationResponseData = {
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
        res.status(200).json({});
      } catch (error) {
        if (error instanceof AuthError) 
            return res.status(error.status).json({message: error.message as AuthMessages})
        return res.status(500).json({ message: AuthMessages.AUTH_SERVER_ERROR });
      }
      break;
    default:
      res.status(400).json({message: AuthMessages.AUTH_BAD_REQUEST});
      break;
  }
}
