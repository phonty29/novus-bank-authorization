import { SignInResponseData } from '@pages/api/log/in';
import { useAuthContext } from '@state/auth/AuthContext';
import ApiRoutes from '@utils/enums/ApiRoutes';
import PageRoutes from '@utils/enums/PageRoutes';
import ClientService from '@utils/helpers/fetch-utils';
import ICredentials from '@utils/types/auth/ICredentials';
import Link from 'next/link';
import { useState } from 'react';

export interface ISignInForm extends React.ComponentPropsWithoutRef<'div'> {}

const SignInForm: React.FC<ISignInForm> = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const {alertMessage, setAlertMessage} = useAuthContext();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data: ICredentials = { username, password };
    const signInResponse: SignInResponseData = await ClientService.post(data, ApiRoutes.LOG_IN);
    if (signInResponse.accessToken && signInResponse.refreshToken) {
      alert(`${signInResponse.message}`);
      console.log(signInResponse.accessToken);
      console.log(signInResponse.refreshToken);
    } else {
      setAlertMessage(signInResponse.message);
    }
  };

  return (
    <form className="sign-in-form" onSubmit={handleSubmit}>
      <div className="links-sign-in">
        <div className="link-sign-in">
          <Link href={`${PageRoutes.SIGN_IN}`}>Sign in</Link>
        </div>
        <div className="link-sign-in green-btn rounded-tr-2xl">
          <Link href={`${PageRoutes.SIGN_UP}`}>Registration</Link>
        </div>
      </div>
      <div className="input-field">
        <label htmlFor="username" className="label-text">
          Username
          <span className="text-purple"> *</span>
        </label>
        <input
          type="text"
          id="username"
          name="username"
          className="auth-input"
          placeholder={'John Doe'}
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          required
        />
      </div>
      <div className="input-field">
        <label htmlFor="password" className="label-text">
          Password
          <span className="text-purple"> *</span>
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="auth-input"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
        />
      </div>
      <div className="text-center items-mb">
        <Link href="/" className="text-xs text-black underline">
          Forgot password?
        </Link>
      </div>
      <p className="alert-message text-center">{alertMessage}</p>      
      <button className="sign-in-btn">
        Sign In
      </button>
    </form>
  );
};

export default SignInForm;
