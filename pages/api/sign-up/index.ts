import { NextApiRequest, NextApiResponse } from 'next';
import SignUpService from '../../../services/sign-up';

interface SignUpRequestData extends NextApiRequest {}

export type SignUpResponseData = {
  message: string;
};

const { signUp } = SignUpService;

export default async function handler(
  req: SignUpRequestData,
  res: NextApiResponse<SignUpResponseData>
) {
  switch (req.method) {
    case 'GET':
      res.status(200).json({ message: 'Hello world!' });
      break;

    default:
      break;
  }
}
