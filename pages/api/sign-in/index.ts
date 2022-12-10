import { NextApiRequest, NextApiResponse } from "next";
import SignInMessages from "../../../enums/SignInMessages";
import SignInService from '../../../services/sign-in';
import User from "../../../types/auth/users";

interface SignInRequestData extends NextApiRequest {
  body: User;
}

export type SignInResponseData = {
  refreshToken?: string;
  accessToken?: string;
  message: SignInMessages;
}

const {signIn} = SignInService;

export default async function handler(
    req: SignInRequestData,
    res: NextApiResponse<SignInResponseData>
  ) {
    const {
      body: { username, password },
    } = req;

    if (! (username && password)) 
        res.status(400).json({message: SignInMessages.SIGN_IN_EMPTY_FIELD});

    switch (req.method) {
        case 'POST':
            try {
                let tokens = await signIn(req.body);
                if (tokens) 
                    res.status(200).json({...tokens, message: SignInMessages.SIGN_IN_SUCCESS});
                else 
                    res.status(401).json({message: SignInMessages.SIGN_IN_UNAUTHORIZED});
            } catch (error) {
                res.status(500).json({message: SignInMessages.SIGN_IN_OTHER_PROBLEMS});
            }
            break;
            
        default:
            break;
    }
}