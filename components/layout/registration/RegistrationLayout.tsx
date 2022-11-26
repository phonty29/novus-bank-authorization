import Head from 'next/head';
import FooterRegistration from '../../auth/footer/FooterRegistration';
import HeaderRegistration from '../../auth/header/HeaderRegistration';

export interface IRegistrationLayout extends React.ComponentPropsWithoutRef<'div'> {
  
}

const RegistrationLayout: React.FC<IRegistrationLayout> = ({children, ...divProps}) => {
  return (
    <>
      <Head>
        <title>Bekonomix Registration</title>
      </Head>
      <div {...divProps}>
        <HeaderRegistration />
        <main>
          {children}
        </main>
        <FooterRegistration />
      </div>
    </>
  );
};

export default RegistrationLayout;
