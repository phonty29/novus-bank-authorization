import signUpService from '@api-server/registration';
import AuthError from '@utils/helpers/auth-error';
import IUserData from '@utils/types/auth/IUserData';
import { NextApiRequest, NextApiResponse } from 'next';

interface ISendActivationRequestData extends NextApiRequest {
  body: IUserData;
}

export type ISendActivationResponseData = {
  message?: string;
};

export default async function handler(
  req: ISendActivationRequestData,
  res: NextApiResponse<ISendActivationResponseData>
) {
  switch (req.method) {
    case 'POST':
      try {
        await signUpService.sendActivation(req.body);
        res.status(200).json({message: "Сообщение удачно отправлено на вашу почту"});
      } catch (error) {
        if (error instanceof AuthError) 
            return res.status(error.status).json({message: error.message })
        return res.status(500).json({ message: "Произошла внутренняя ошибка сервера" });
      }
      break;
    default:
      res.status(400).json({message: "Неверный запрос"});
      break;
  }
}
