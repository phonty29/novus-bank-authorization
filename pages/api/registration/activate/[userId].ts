import RegistrationService from '@api-server/registration';
import AuthMessages from '@utils/enums/AlertMessages';
import PageRoutes from '@utils/enums/PageRoutes';
import AuthError from '@utils/helpers/auth-error';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const { userId } = req.query;
    switch (req.method) {
        case 'GET':
            try {
                await RegistrationService.activate(userId as string);
                res.redirect(`${process.env.BASE_URL}${PageRoutes.SIGN_IN}`);
            } catch (error) {
                if (error instanceof AuthError) 
                    return res.status(error.status).json({message: error.message, errors: error.errors})
                return res.status(500).json({ isUsernameAvailable: false, message: AuthMessages.SIGN_IN_OTHER_PROBLEMS });
            }
            break;
        default:
            break;
    }
}