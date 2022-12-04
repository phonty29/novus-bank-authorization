import { NextApiRequest, NextApiResponse } from "next";
import AlertMessages from "../../../enums/AlertMessages";
import clientPromise from "../../../lib/mongodb";
import User from "../../../types/auth/users";

interface IFakeApiUserRequestData extends NextApiRequest {
  body: User;
}

export type IFakeApiUserResponseData = {
  success: boolean;
  message?: AlertMessages;
}

export default async function handler(
    req: IFakeApiUserRequestData,
    res: NextApiResponse<IFakeApiUserResponseData>
  ) {
    const {
      body: { username, password },
    } = req;
    
    let users;
    try {
      const client = await clientPromise;
      const database = client.db("auth");
      users = await database
           .collection("users")
           .find({})
           .toArray();
    } catch (error) {
      res.status(500).json({success: false, message: AlertMessages.SIGN_IN_OTHER_PROBLEMS});
    }
  
    if (req.method === 'POST' && username && password) {
      users?.forEach(user => {
        if (user.username == username && user.password == password)
          res.status(200).json({success: true});
      })
      res.status(401).json({success: false, message: AlertMessages.SIGN_IN_WRONG_DATA});
    } 
    else res.status(400).json({success: false, message: AlertMessages.SIGN_IN_FIELD_IS_EMPTY});
  }