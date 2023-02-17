import LogService from '@api-server/log';
import AuthMessages from '@utils/enums/AuthMessages';
import AuthError from '@utils/helpers/auth-error';
import ICredentials from '@utils/types/auth/ICredentials';
import { NextApiRequest, NextApiResponse } from 'next';

interface ISignInRequestData extends NextApiRequest {
  body: ICredentials;
}

export type ISignInResponseData = {
  refreshToken?: string;
  accessToken?: string;
  message: AuthMessages;
};

export default async function handler(
  req: ISignInRequestData,
  res: NextApiResponse<ISignInResponseData>
) {

  switch (req.method) {
    case 'POST':
      try {
        let tokens = await LogService.in(req.body);
        res.status(200).json({ ...tokens, message: AuthMessages.LOG_IN_SUCCESS });
      } catch (error) {
        if (error instanceof AuthError) 
            res.status(error.status).json({message: error.message as AuthMessages})
        res.status(500).json({ message: AuthMessages.AUTH_SERVER_ERROR });
      }
      break;
    default:
      res.status(400).json({message: AuthMessages.AUTH_BAD_REQUEST });
      break;
  }
}
