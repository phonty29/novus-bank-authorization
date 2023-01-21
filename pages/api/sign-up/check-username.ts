import { NextApiRequest, NextApiResponse } from 'next';
import AuthMessages from '../../../lib/enums/AlertMessages';
import signUpService from '../../../services/sign-up';

interface CheckUsernameRequestData extends NextApiRequest {
  body: {username: string};
}

export type CheckUsernameResponseData = {
  isUsernameAvailable: boolean;
  message?: AuthMessages;
};

export default async function handler(
  req: CheckUsernameRequestData,
  res: NextApiResponse<CheckUsernameResponseData>
) {
  const {
    body: { username },
  } = req;

  if (!(username))
    res.status(400).json({ isUsernameAvailable: false, message: AuthMessages.SIGN_IN_EMPTY_FIELD });

  switch (req.method) {
    case 'POST':
      try {
        let isUsernameAvailable = await signUpService.checkUsername(req.body);
        if (isUsernameAvailable)
          res.status(200).json({isUsernameAvailable});
        else
             res
            .status(409)
            .json({ isUsernameAvailable, message: AuthMessages.SIGN_UP_USERNAME_UNAVAILABLE });
      } catch (error) {
        res
          .status(500)
          .json({ isUsernameAvailable: false, message: AuthMessages.SIGN_IN_OTHER_PROBLEMS });
      }
      break;

    default:
      break;
  }
}