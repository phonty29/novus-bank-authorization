import Link from 'next/link';
import { useState } from 'react';

export interface ISignInForm extends React.ComponentPropsWithoutRef<'div'> {
  usernamePlaceholder: string;
  passwordPlaceholder: string;
}

const SignInForm: React.FC<ISignInForm> = ({
  usernamePlaceholder='phonty29',
}) => {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();

  return (
    <form className='sign-in-form'>
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
          placeholder={usernamePlaceholder} 
          value={username}
          onChange={(e) => {setUsername(e.target.value)}}
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
        />
      </div>
      <button className='green-btn rounded-lg min-w-full py-3 mb-7'>
        Sign In
      </button>
      <div className='text-center flex-auto'>
        <Link href='/' className='text-xs text-black'>Forgot password ?</Link>
      </div>
      <p className='alert-message'>
        Fields marked with * are mandatory
      </p>
    </form>
  );
};

export default SignInForm;
