import RegistrationService from '@api-server/registration';
import AuthMessages from '@utils/enums/AlertMessages';
import PageRoutes from '@utils/enums/PageRoutes';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const { userId } = req.query;
    switch (req.method) {
        case 'GET':
        try {
            let isActivationSuccessfull = await RegistrationService.activate(userId as string);
            if (isActivationSuccessfull)
                res.redirect(`${process.env.BASE_URL}${PageRoutes.SIGN_IN}`);
            else 
                res.status(400).json({message: "This link is broken"});
        } catch (error) {
            res.status(500).json({ isUsernameAvailable: false, message: AuthMessages.SIGN_IN_OTHER_PROBLEMS });
        }
        break;

        default:
        break;
    }
}