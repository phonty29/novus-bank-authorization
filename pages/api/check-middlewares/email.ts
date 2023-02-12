import CheckService from '@api-server/check';
import AuthError from '@utils/helpers/auth-error';
import { NextApiRequest, NextApiResponse } from 'next';

interface ICheckEmailRequestData extends NextApiRequest {
  body: {email: string};
}

export type ICheckEmailResponseData = {
  message?: string;
};

export default async function handler(
  req: ICheckEmailRequestData,
  res: NextApiResponse<ICheckEmailResponseData>
) {
  switch (req.method) {
    case 'POST':
      try {
        await CheckService.checkEmail(req.body);
        res.status(200).json({});
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
