import CheckService from '@api-server/check';
import AuthMessages from '@utils/enums/AuthMessages';
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
  let isEmailAvailable: boolean = false;
  switch (req.method) {
    case 'POST':
      try {
        isEmailAvailable = await CheckService.checkEmail(req.body);
        return res.status(200).json({isEmailAvailable});
      } catch (error) {
          if (error instanceof AuthError) 
              return res.status(error.status).json({isEmailAvailable, message: error.message})
          return res.status(500).json({isEmailAvailable, message: AuthMessages.AUTH_SERVER_ERROR });
      }
    default:
      return res.status(400).json({isEmailAvailable, message: AuthMessages.AUTH_BAD_REQUEST});
  }
}
