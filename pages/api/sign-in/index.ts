import { NextApiRequest, NextApiResponse } from 'next';
import AuthMessages from '../../../lib/enums/AlertMessages';
import IUser from '../../../lib/types/auth/IUser';
import SignInService from '../../../services/sign-in';
//REPLACE IUser with IUserCredentials
interface SignInRequestData extends NextApiRequest {
  body: IUser;
}

export type SignInResponseData = {
  refreshToken?: string;
  accessToken?: string;
  message: AuthMessages;
};

const { signIn } = SignInService;

export default async function handler(
  req: SignInRequestData,
  res: NextApiResponse<SignInResponseData>
) {
  const {
    body: { username, password },
  } = req;

  if (!(username && password))
    res.status(400).json({ message: AuthMessages.SIGN_IN_EMPTY_FIELD });

  switch (req.method) {
    case 'POST':
      try {
        let tokens = await signIn(req.body);
        if (tokens)
          res
            .status(200)
            .json({ ...tokens, message: AuthMessages.SIGN_IN_SUCCESS });
        else
          res
            .status(401)
            .json({ message: AuthMessages.SIGN_IN_UNAUTHORIZED });
      } catch (error) {
        res
          .status(500)
          .json({ message: AuthMessages.SIGN_IN_OTHER_PROBLEMS });
      }
      break;

    default:
      break;
  }
}
