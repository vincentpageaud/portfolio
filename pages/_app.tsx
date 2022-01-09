import { AppProps } from 'next/app';

import '../styles/globals.css';

const MyApp: React.ReactNode = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
