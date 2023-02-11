import CheckService from '@api-server/check';
import AuthMessages from '@utils/enums/AlertMessages';
import { NextApiRequest, NextApiResponse } from 'next';

interface CheckEmailRequestData extends NextApiRequest {
  body: {email: string};
}

export type CheckEmailResponseData = {
  isEmailAvailable: boolean;
  message?: AuthMessages;
};

export default async function handler(
  req: CheckEmailRequestData,
  res: NextApiResponse<CheckEmailResponseData>
) {
  switch (req.method) {
    case 'POST':
      try {
        let isEmailAvailable = await CheckService.checkEmail(req.body);
        if (isEmailAvailable)
          res.status(200).json({isEmailAvailable});
        else
          res.status(409).json({ isEmailAvailable, message: AuthMessages.SIGN_UP_EMAIL_UNAVAILABLE });
      } catch (error) {
        res.status(500).json({ isEmailAvailable: false, message: AuthMessages.SIGN_IN_OTHER_PROBLEMS });
      }
      break;

    default:
      break;
  }
}
