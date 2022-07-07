import "tailwindcss/tailwind.css";
import "../styles/globals.css";

import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={
          "https://www.googletagmanager.com/gtag/js?id=" + process.env.GTAG_ID
        }
      />
      <Script id="my-script" strategy="lazyOnload">
        {`window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag("js", new Date());
                  gtag("config", ${process.env.GTAG_ID});`}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
