import CheckService from '@api-server/check';
import AuthMessages from '@utils/enums/AuthMessages';
import AuthError from '@utils/helpers/auth-error';
import { NextApiRequest, NextApiResponse } from 'next';

interface ICheckUsernameRequestData extends NextApiRequest {
  body: {username: string};
}

export type ICheckUsernameResponseData = {
  isUsernameAvailable: boolean;
  message?: AuthMessages;
};

export default async function handler(
  req: ICheckUsernameRequestData,
  res: NextApiResponse<ICheckUsernameResponseData>
) {
  let isUsernameAvailable: boolean = false;
  switch (req.method) {
    case 'POST':
      try {
        isUsernameAvailable = await CheckService.checkUsername(req.body);
        res.status(200).json({isUsernameAvailable});
      } catch (error) {
          if (error instanceof AuthError)
            res.status(error.status).json({isUsernameAvailable, message: error.message as AuthMessages});
          res.status(500).json({isUsernameAvailable, message: AuthMessages.AUTH_SERVER_ERROR });
      }
      break;
    default:
      res.status(400).json({isUsernameAvailable, message: AuthMessages.AUTH_BAD_REQUEST});
      break;
  }
}