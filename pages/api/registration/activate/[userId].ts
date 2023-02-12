import RegistrationService from '@api-server/registration';
import PageRoutes from '@utils/enums/PageRoutes';
import AuthError from '@utils/helpers/auth-error';
import { NextApiRequest, NextApiResponse } from 'next';

export type IActivationResponse = {
    message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IActivationResponse>
) {
    const { userId } = req.query;
    switch (req.method) {
        case 'GET':
            try {
                await RegistrationService.activate(userId as string);
                res.redirect(`${process.env.BASE_URL}${PageRoutes.SIGN_IN}`);
            } catch (error) {
                if (error instanceof AuthError) 
                    res.status(error.status).json({message: error.message})
                res.status(500).json({ message: "Произошла ошибка сервера" });
            }
            break;
        default:
            res.status(400).json({message: "Неверный запрос"});
            break;
    }
}