import LogService from '@api-server/log';
import AuthError from '@utils/helpers/auth-error';
import ICredentials from '@utils/types/auth/ICredentials';
import { NextApiRequest, NextApiResponse } from 'next';

interface ISignInRequestData extends NextApiRequest {
  body: ICredentials;
}

export type ISignInResponseData = {
  refreshToken?: string;
  accessToken?: string;
  message: string;
};

export default async function handler(
  req: ISignInRequestData,
  res: NextApiResponse<ISignInResponseData>
) {

  switch (req.method) {
    case 'POST':
      try {
        let tokens = await LogService.in(req.body);
        res.status(200).json({ ...tokens, message: "Пользователь успешно идентицифирован" });
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
