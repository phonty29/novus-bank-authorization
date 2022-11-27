import SignInForm from '../../../components/auth/signin-form/SignInForm';
import PrimaryLayout from '../../../components/layout/primary/PrimaryLayout';
import { NextPageWithLayout } from '../../page';

export interface ISignIn {}

const SignIn: NextPageWithLayout<ISignIn> = () => {
    return (
        <main className='bg-sign-in min-w-full min-h-screen grid place-items-center'>
            <SignInForm usernamePlaceholder='John Doe'/>
        </main>
    );
};

export default SignIn;

SignIn.getLayout = (page) => {
    return (
      <PrimaryLayout title='Bekonomix Sign-in' justify='items-center'>
        {page}
      </PrimaryLayout>
    );
}