import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import AlertMessages from '../../../enums/AlertMessages';

export interface ISignInForm extends React.ComponentPropsWithoutRef<'div'> {}

const SignInForm: React.FC<ISignInForm> = () => {
  const router = useRouter();
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [alertMessage, setAlertMessage] = useState<string>(AlertMessages.FIELD_IS_EMPTY);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(`something`);
    setIsFormValid(true);
    setAlertMessage(AlertMessages.SIGN_IN_OTHER);
  };

  return (
    <form className='sign-in-form' onSubmit={handleSubmit}>
      <div className='links-sign-in'>
        <div className='link-sign-in'>
          <Link href='/'>Sign in</Link>
        </div>
        <div className='link-sign-in green-btn rounded-tr-2xl'>
          <Link href='/'>Registration</Link>
        </div>
      </div>
      <div className='input-field mb-5'>
        <label htmlFor='username' className='label-text'>
          Username
          <span className='text-purple'> *</span>
        </label>
        <input 
          type='text' 
          id='username' 
          name='username' 
          className='auth-input' 
          placeholder={"John Doe"} 
          value={username}
          onChange={(e) => {setUsername(e.target.value)}}
          required
        />
      </div>
      <div className='input-field mb-7'>    
        <label htmlFor='password' className='label-text'>
          Password
          <span className='text-purple'> *</span>
        </label>
        <input 
          type='password' 
          id='password' 
          name='password' 
          className='auth-input' 
          value={password}
          onChange={(e) => {setPassword(e.target.value)}}
          required
        />
      </div>
      <button className='green-btn rounded-lg min-w-full py-3 mb-7'>
        Sign In
      </button>
      <div className='text-center flex-auto'>
        <Link href='/' className='text-xs text-black underline'>Forgot password ?</Link>
      </div>
      {
        !isFormValid &&
        <p className='alert-message'>
          {alertMessage}
        </p>
      }
    </form>
  );
};

export default SignInForm;
