import type { NextApiRequest, NextApiResponse } from 'next';
import users from '../../../users.json';

interface IFakeApiUserRequestData extends NextApiRequest {
  body: { username?: string, password?: string };
}

export type IFakeApiUserResponseData = {
  result: boolean;
}

export default function handler(
    req: IFakeApiUserRequestData,
    res: NextApiResponse<IFakeApiUserResponseData>
  ) {
    const {
      body: { username, password },
    } = req;
  
    if (req.method === 'POST' && username && password) {
      users.forEach(user => {
        if (user.username == username && user.password == password)
          res.status(200).json({result: true});
      })
      res.status(401).json({result: false});
    } 
    else res.status(400).json({result: false});
  }