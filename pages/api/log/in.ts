import logService from '@api-server/log';
import AuthMessages from '@utils/enums/AlertMessages';
import ICredentials from '@utils/types/auth/ICredentials';
import { NextApiRequest, NextApiResponse } from 'next';

interface SignInRequestData extends NextApiRequest {
  body: ICredentials;
}

export type ISignInResponseData = {
  refreshToken?: string;
  accessToken?: string;
  message: AuthMessages;
};

export default async function handler(
  req: SignInRequestData,
  res: NextApiResponse<ISignInResponseData>
) {

  switch (req.method) {
    case 'POST':
      try {
        let tokens = await logService.in(req.body as ICredentials);
        if (tokens)
          res.status(200).json({ ...tokens, message: AuthMessages.SIGN_IN_SUCCESS });
        else
          res.status(401).json({ message: AuthMessages.SIGN_IN_UNAUTHORIZED });
      } catch (error) {
        res.status(500).json({ message: AuthMessages.SIGN_IN_OTHER_PROBLEMS });
      }
      break;
    default:
      break;
  }
}
