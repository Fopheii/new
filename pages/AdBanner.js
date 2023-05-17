import { useEffect, useState } from "react";

const AdBanner = (props) => {
  const [showAd, setShowAd] = useState(false);

  useEffect(() => {
    console.log('entered')
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      setShowAd(true);
    } catch (err) {
      console.log(err);
      setShowAd(false);
    }
  }, []);

  return (
    <>
      <>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4835686518321000"
          crossOrigin="anonymous"
        ></script>
      </>
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-4835686518321000"
          data-ad-slot="4343762703"
          data-ad-format="auto"
          data-full-width-responsive="true"
          // data-ad-status="unfilled"
          {...props}
        ></ins>
    </>
  );
};

export default AdBanner;
