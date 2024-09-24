import React from 'react';
import Script from 'next/script';

const GoogleAnalytics = () => {
  return (
    <>
<Script
        src="https://www.googletagmanager.com/gtag/js?id=G-945CW0SDY8"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-945CW0SDY8');
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;