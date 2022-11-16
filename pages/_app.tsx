import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
       <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID="G-HG67SWCXZS"}`}
      />
       <Script id="google-analytics-script" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag("js", new Date());
          gtag("config", "${process.env.NEXT_PUBLIC_GA_ID="G-HG67SWCXZS"}", {
          page_path: window.location.pathname,
          });
    `}
      </Script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
