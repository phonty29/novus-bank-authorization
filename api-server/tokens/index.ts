import ExpireTime from '@utils/enums/ExpireTime';
import ITokens from '@utils/types/auth/ITokens';
import jwt from 'jsonwebtoken';


class TokenService {
  generateTokens(payload: any): ITokens {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET_KEY as string, {
      expiresIn: ExpireTime.ACCESS_TOKEN,
    });
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET_KEY as string, {
      expiresIn: ExpireTime.REFRESH_TOKEN,
    });
    return {
      accessToken,
      refreshToken,
    };
  }

  async saveToken(userId: string, refreshToken: string) {}
}

export default new TokenService();
