import Head from "next/head";
import React from "react";
import Script from "next/script";
import "../styles/globals.css";
import type { AppProps } from "next/app";



function CustomApp({ Component, pageProps, }: AppProps) {

    return (
        <>
            <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS="G-HG67SWCXZS"}`} />

            <Script strategy="lazyOnload">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag("js", new Date());
                    gtag("config", "${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS="G-HG67SWCXZS"}", {
                    page_path: window.location.pathname,
                    });
                `}
            </Script>
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Head>

            <Component {...pageProps} />
        </>
    );
}

export default CustomApp;