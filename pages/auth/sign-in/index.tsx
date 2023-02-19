import SignInForm from '@components/auth/signin-form/SignInForm';
import PrimaryLayout from '@components/layout/primary/PrimaryLayout';
import Footer from '@components/navigation/footer/Footer';
import { NextPageWithLayout } from '@pages/page';

export interface ISignIn {}

const SignIn: NextPageWithLayout<ISignIn> = () => {
  return (
    <main className="sign-in-layout">
      <SignInForm/>
      <Footer fontColor='text-white'/>
    </main>
  );
};

export default SignIn;

SignIn.getLayout = (page) => {
  return (
    <PrimaryLayout title="Bekonomix Sign-in" justify="items-center">
      {page}
    </PrimaryLayout>
  );
};
