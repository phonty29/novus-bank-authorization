import Link from 'next/link';
import { useState } from 'react';
import AuthMessages from '../../../lib/enums/AlertMessages';
import ApiRoutes from '../../../lib/enums/ApiRoutes';
import User from '../../../lib/types/auth/IUser';
import { SignInResponseData } from '../../../pages/api/sign-in';

export interface ISignInForm extends React.ComponentPropsWithoutRef<'div'> {}
//const USERS_ROUTE = `/api/sign-in`; //I will create another folder and file for holding all routes

const SignInForm: React.FC<ISignInForm> = () => {
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [alertMessage, setAlertMessage] = useState<AuthMessages>(
    AuthMessages.SIGN_IN_EMPTY_FIELD
  );

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data: User = { username, password };
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
    if (signInResponse.accessToken) {
      alert(`${signInResponse.message}`);
      console.log(signInResponse.accessToken);
      console.log(signInResponse.refreshToken);
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
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
      <div className="input-field mb-5">
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
      <div className="input-field mb-7">
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
      <button className="green-btn rounded-lg min-w-full py-3 mb-7">
        Sign In
      </button>
      <div className="text-center flex-auto">
        <Link href="/" className="text-xs text-black underline">
          Forgot password ?
        </Link>
      </div>
      {!isFormValid && <p className="alert-message">{alertMessage}</p>}
    </form>
  );
};

export default SignInForm;
