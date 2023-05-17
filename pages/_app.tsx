
import Script from 'next/script'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState, useEffect } from "react"





export default function App({ Component, pageProps }: AppProps) {
  //      useEffect(() => {
  //   var ads = document.getElementsByClassName('adsbygoogle').length;
  //   console.log(ads);
  //   for (var i = 0; i < ads; i++) {
  //     try {
  //       (window.adsbygoogle = window.adsbygoogle || []).push({});
  //     } catch (e) {}
  //   }
  // }, []);


return (

<>
<Script async src={`https://pagead2.googlesyndication.com/pagead/js/
adsbygoogle.js?client=ca-pub-4835686518321000`}
crossOrigin="anonymous" strategy="lazyOnload"
/>

{/* <Script id="Adsense-id" data-ad-client="ca-pub-4835686518321000" async={true}   strategy="beforeInteractive" crossOrigin="anonymous"  onError={ (e) => { console.error('Script failed to load', e) }}  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"/> */}

{/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4835686518321000"
   crossOrigin="anonymous"></script> */}
     <Component {...pageProps} />

</> );
}
