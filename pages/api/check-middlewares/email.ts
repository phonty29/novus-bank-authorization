import CheckService from '@api-server/check';
import AuthError from '@utils/helpers/auth-error';
import { NextApiRequest, NextApiResponse } from 'next';

interface ICheckEmailRequestData extends NextApiRequest {
  body: {email: string};
}

export type ICheckEmailResponseData = {
  isEmailAvailable: boolean;
  message?: string;
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
        res.status(200).json({isEmailAvailable, message: "Данный email доступен"});
      } catch (error) {
          if (error instanceof AuthError) 
              res.status(error.status).json({isEmailAvailable, message: error.message})
          res.status(500).json({isEmailAvailable, message: "Произошла ошибка сервера" });
      }
      break;
    default:
      res.status(400).json({isEmailAvailable, message: "Неверный запрос"});
      break;
  }
}
