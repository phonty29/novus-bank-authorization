import { NextApiRequest, NextApiResponse } from "next";
import AlertMessages from "../../../enums/AlertMessages";
import SignInService from '../../../services/sign-in';
import User from "../../../types/auth/users";

interface SignInRequestData extends NextApiRequest {
  body: User;
}

export type SignInResponseData = {
  success: boolean;
  message?: AlertMessages;
}

const {getUser} = SignInService;

export default async function handler(
    req: SignInRequestData,
    res: NextApiResponse<SignInResponseData>
  ) {
    const {
      body: { username, password },
    } = req;
    if (! (username && password)) 
        res.status(400).json({success: false, message: AlertMessages.SIGN_IN_FIELD_IS_EMPTY});

    switch (req.method) {
        case 'POST':
            try {
                let user = await getUser(req.body);
                if (user) 
                    res.status(200).json({success: true});
                else 
                    res.status(401).json({success: false, message: AlertMessages.SIGN_IN_WRONG_DATA});
            } catch (error) {
                res.status(500).json({success: false, message: AlertMessages.SIGN_IN_OTHER_PROBLEMS});
            }
            break;
        default:
            break;
    }
}