import jwt from 'jsonwebtoken';
import { ObjectId } from 'mongodb';
import ITokens from '../../lib/types/auth/ITokens';


class TokenService {
  generateTokens(payload: {id: ObjectId}): ITokens {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET_KEY as string, {
      expiresIn: '15s',
    });
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET_KEY as string, {
      expiresIn: '30s',
    });
    return {
      accessToken,
      refreshToken,
    };
  }

  async saveToken(userId: string, refreshToken: string) {}
}

export default new TokenService();
