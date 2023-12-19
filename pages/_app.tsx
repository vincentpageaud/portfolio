import { useRef } from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { ContentfulLivePreviewProvider } from '@contentful/live-preview/react';

import '@styles/globals.scss';
import '@styles/locomotive-scroll.scss';

const MyApp: React.ReactNode = ({ Component, pageProps }: AppProps) => {
  const containerRef = useRef(null);
  const { asPath, locale } = useRouter();

  return (
    <ContentfulLivePreviewProvider locale={locale || 'en'}>
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
    </ContentfulLivePreviewProvider>
  );
};

export default MyApp;
