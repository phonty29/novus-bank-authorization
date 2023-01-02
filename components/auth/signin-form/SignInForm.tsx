import Link from 'next/link';
import { useState } from 'react';
import ApiRoutes from '../../../lib/enums/ApiRoutes';
import IUser from '../../../lib/types/auth/IUser';
import { SignInResponseData } from '../../../pages/api/sign-in';
import { useAuthContext } from '../../../state/auth/AuthContext';

export interface ISignInForm extends React.ComponentPropsWithoutRef<'div'> {}
//const USERS_ROUTE = `/api/sign-in`; //I will create another folder and file for holding all routes

const SignInForm: React.FC<ISignInForm> = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const {alertMessage, setAlertMessage} = useAuthContext();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data: IUser = { username, password };
    const jsonData = JSON.stringify(data);
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: jsonData,
    };

    const response = await fetch(ApiRoutes.SIGN_IN, options);
    const signInResponse: SignInResponseData = await response.json();
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
          <Link href="/">Sign in</Link>
        </div>
        <div className="link-sign-in green-btn rounded-tr-2xl">
          <Link href="/">Registration</Link>
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
      <div className="text-center item-margins">
        <Link href="/" className="text-xs text-black underline">
          Forgot password ?
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
