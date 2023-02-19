import SignUpForm from '@components/auth/signup-form/SignUpForm';
import PrimaryLayout from '@components/layout/primary/PrimaryLayout';
import Footer from '@components/navigation/footer/Footer';
import { NextPageWithLayout } from '@pages/page';
import SignUpProvider from '@state/auth/SignUpContext';
import Image from 'next/image';
import Link from 'next/link';

export interface ISignUp {}

const SignUp: NextPageWithLayout<ISignUp> = () => {
  return (
    <SignUpProvider>
      <div className="sign-up-layout">
        <header className="sign-up-header">
          <Image
            src="/novus_bank_logo.svg"
            alt="Novus Bank logo"
            width="193"
            height="22"
            className="sign-up-logo"
          />
          <Link href="/auth/sign-in" className="link-to-sign-in underline">
            sign in
          </Link>
        </header>
        <SignUpForm />
        <Footer />
      </div>
    </SignUpProvider>
  );
};

export default SignUp;

SignUp.getLayout = (page) => {
  return (
    <PrimaryLayout title="Bekonomix Registration" justify="items-center">
      {page}
    </PrimaryLayout>
  );
};
