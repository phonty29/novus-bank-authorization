import { NextApiRequest, NextApiResponse } from 'next';
import AuthMessages from '../../../lib/enums/AlertMessages';
import SignUpService from '../../../services/sign-up';

interface CheckEmailRequestData extends NextApiRequest {
  body: {email: string};
}

export type CheckEmailResponseData = {
  isEmailAvailable: boolean;
  message?: AuthMessages;
};

const { checkEmail } = SignUpService;

export default async function handler(
  req: CheckEmailRequestData,
  res: NextApiResponse<CheckEmailResponseData>
) {
  const {
    body: { email },
  } = req;

  if (!(email))
    res.status(400).json({ isEmailAvailable: false, message: AuthMessages.SIGN_IN_EMPTY_FIELD });

  switch (req.method) {
    case 'POST':
      try {
        let isEmailAvailable = await checkEmail(req.body);
        if (isEmailAvailable)
          res.status(200).json({isEmailAvailable});
        else
             res
            .status(409)
            .json({ isEmailAvailable, message: AuthMessages.SIGN_UP_EMAIL_UNAVAILABLE });
      } catch (error) {
        res
          .status(500)
          .json({ isEmailAvailable: false, message: AuthMessages.SIGN_IN_OTHER_PROBLEMS });
      }
      break;

    default:
      break;
  }
}
