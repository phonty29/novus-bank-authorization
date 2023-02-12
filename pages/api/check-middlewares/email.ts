import CheckService from '@api-server/check';
import AuthMessages from '@utils/enums/AlertMessages';
import AuthError from '@utils/helpers/auth-error';
import { NextApiRequest, NextApiResponse } from 'next';

interface ICheckEmailRequestData extends NextApiRequest {
  body: {email: string};
}

export type ICheckEmailResponseData = {
  isEmailAvailable: boolean;
  message?: AuthMessages;
};

export default async function handler(
  req: ICheckEmailRequestData,
  res: NextApiResponse<ICheckEmailResponseData>
) {
  switch (req.method) {
    case 'POST':
      try {
        let isEmailAvailable = await CheckService.checkEmail(req.body);
        res.status(200).json({isEmailAvailable});
      } catch (error) {
          if (error instanceof AuthError) 
              return res.status(error.status).json({message: error.message, errors: error.errors})
          return res.status(500).json({ message: AuthMessages.SIGN_IN_OTHER_PROBLEMS });
      }
       break;

    default:
      break;
  }
}
