import Head from 'next/head';
import AuthProvider from '../../../state/auth/AuthContext';

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {
  justify?: 'items-center' | 'items-start' | 'items-end';
  title?: string;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({
  children,
  justify = 'items-center', //by default all items are centered
  title = 'Bekonomix', //by default a page has 'Bekonomix' title
  ...divProps
}) => {
  return (
    <AuthProvider>
      <Head>
        <title>{title}</title>
      </Head>
      <div
        {...divProps}
        className={`min-h-screen flex flex-col font-roboto ${justify}`}
      >
        {children}
      </div>
    </AuthProvider>
  );
};

export default PrimaryLayout;
