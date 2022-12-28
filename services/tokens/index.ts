import jwt from 'jsonwebtoken';
import UserDTO from '../../dto/user';

class TokenService {
  tokenGen(payload: UserDTO) {
    const accessToken = jwt.sign(payload, 'jwt-access-secret-key', {
      expiresIn: '15s',
    });
    const refreshToken = jwt.sign(payload, 'jwt-refresh-secret-key', {
      expiresIn: '30s',
    });
    return {
      accessToken,
      refreshToken,
    };
  }

  async tokenSave(userId: string, refreshToken: string) {}
}

export default new TokenService();
