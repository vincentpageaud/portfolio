import { useRef } from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

import '@styles/globals.css';
import '@styles/locomotive-scroll.css';

const MyApp: React.ReactNode = ({ Component, pageProps }: AppProps) => {
  const containerRef = useRef(null);
  const { asPath } = useRouter();

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        tablet: {
          breakpoint: 0, // <---- Fixes The Issue 🎉
        },
      }}
      watch={[asPath]}
      containerRef={containerRef}
    >
      <div data-scroll-container ref={containerRef}>
        <Component {...pageProps} />
      </div>
    </LocomotiveScrollProvider>
  );
};

export default MyApp;
