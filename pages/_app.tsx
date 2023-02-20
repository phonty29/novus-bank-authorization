import { StyledEngineProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import './global.css';
import { NextPageWithLayout } from './page';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <StyledEngineProvider injectFirst>
      {getLayout(<Component {...pageProps} />)}
    </StyledEngineProvider>
  );
}

export default MyApp;
