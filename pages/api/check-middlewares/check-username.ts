import CheckService from '@api-server/check';
import AuthMessages from '@utils/enums/AlertMessages';
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
  switch (req.method) {
    case 'POST':
      try {
        let isUsernameAvailable = await CheckService.checkUsername(req.body);
        if (isUsernameAvailable)
          res.status(200).json({isUsernameAvailable});
        else
          res.status(409).json({ isUsernameAvailable, message: AuthMessages.SIGN_UP_USERNAME_UNAVAILABLE });
      } catch (error) {
        res.status(500).json({ isUsernameAvailable: false, message: AuthMessages.SIGN_IN_OTHER_PROBLEMS });
      }
      break;

    default:
      break;
  }
}