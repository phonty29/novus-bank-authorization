import jwt from 'jsonwebtoken';
import { ObjectId } from 'mongodb';

const JWT_ACCESS_SECRET_KEY = "jwt-access-secret-key";
const JWT_REFRESH_SECRET_KEY = "jwt-refresh-secret-key";

class TokenService {
  generateTokens(payload: {id: ObjectId}) {
    const accessToken = jwt.sign(payload, JWT_ACCESS_SECRET_KEY, {
      expiresIn: '15s',
    });
    const refreshToken = jwt.sign(payload, JWT_REFRESH_SECRET_KEY, {
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
