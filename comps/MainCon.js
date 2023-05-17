/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { BLOCKED_PAGES } from "next/dist/shared/lib/constants";
import AdBanner from "../pages/AdBanner";
import styles from "../styles/MainCon.module.css";
const MainCon = () => {
  useEffect(() => {
    const showBtnClear = () => {
      btnPaste.classList.add("active"),
        (document.querySelector(".btn-paste span").innerHTML = "Clear");
    };
    const showAlert = (e) => {
      alertEL.classList.add("active"), (alertEL.innerHTML = e);
    };
    const hideAlert = (e) => {
      alertEL.classList.remove("active"), (alertEL.innerHTML = "");
    };
    var lang;
    const btnPaste = document.querySelector(".btn-paste"),
      inputUrl = document.getElementById("url");
    btnPaste.addEventListener("click", function () {
      if (btnPaste.classList.contains("active")) {
        setInput("");
        inputUrl.value = "";
        navigator.clipboard && btnPaste.classList.remove("active");
        document.querySelector(".btn-paste span").innerHTML = "Paste";
      } else {
        navigator.clipboard.readText().then(function (e) {
          "" != e
            ? ((inputUrl.value = e), setInput("" + e), showBtnClear())
            : showAlert("");
        });
      }
    }),
      navigator.clipboard && (btnPaste.style.display = "flex"),
      inputUrl.addEventListener("keyup", function (e) {
        inputUrl.value.length > 0 && showBtnClear(), hideAlert();
      });

    const alertEL = document.getElementById("alert");
    return () => {
      btnPaste.replaceWith(btnPaste.cloneNode(true));
    };
  }, []);
  const [isWrongUrl, setIsWrongUrl] = useState(false);
  const [clicked, setClicked] = useState(false);


  const [input, setInput] = useState("");
  const router = useRouter();
  const HandleDownload = async () => {
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 500);
    if (!input.includes("tiktok.com")) {
      setIsWrongUrl(true);
      setTimeout(() => {
        setIsWrongUrl(false);
      }, 2000);
      return;
    } else {
      document.getElementById("ball-loader").style.visibility = "visible";
      document.getElementById("mainForm").style.visibility = "hidden";
      document.getElementById("url");
      const options = {
        method: "GET",
        url: "https://tiktok-downloader-download-tiktok-videos-without-watermark.p.rapidapi.com/vid/index",
        withCredentials: false,
        params: { url: input },
        headers: {
          "X-RapidAPI-Key":
            "3d204a970emshd8658b3f3e32d6dp138ebcjsn7a898b2a7b31",
          "X-RapidAPI-Host":
            "tiktok-downloader-download-tiktok-videos-without-watermark.p.rapidapi.com",
          "Content-Disposition": 'attachment; filename="Downloaderi.com__video.mp4"',
        },
      };

      try {
        const response = await axios.request(options);
        response.data.video = await createBlobUrl(response.data.video);
        router.push(
          {
            pathname: "/Downloade",
            query: response.data,
          },
          "/"
        );
      } catch (e) {
        console.error(e);
      }
      document.getElementById("ball-loader").style.visibility = "hidden";
    }
  };

  const createBlobUrl = async (url) => {
    const response = await fetch(url);
    const blob = await response.blob();
    return window.URL.createObjectURL(blob);
  };

  return (
    <div>
      <div className="hero" id="hero">
        <div className="container">
          <div className="hero-title">
            <h1 className="hero-h1">TikTok Video Downloader</h1>
            <h2 className="hero-h2">Without Watermark. Fast. All devices</h2>
          </div>
          {isWrongUrl && (
            <div className={styles.wrongUrl}>
              <p style={{ width: "100%", marginBottom: "0px" }}>
                Url error. Please check again
              </p>
            </div>
          )}
          <div
            className="hero-form"
            style={{ marginTop: isWrongUrl ? "10px" : "32px" }}
          >
            <form action="abc2.php" name="formurl" method="get" id="mainForm">
              <div className="hero-input">
                <div id="ball-loader" style={{marginTop: '-35px'}}>
                  <i className="img-loader">
                    <div className="please-wait"></div>
                  </i>
                </div>
                <div
                  className="alert alert-warning"
                  role="alert"
                  id="alert"
                ></div>
                <div className="progress-box">
                  <div className="progress-text">
                    Please wait a moment
                    <div className="spinner-grow text-light" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-success"
                      role="progressbar"
                      aria-valuenow="0"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div className="hero-input-left">
                  <div className="icon-link">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.317 3.0441C13.598 1.76308 15.675 1.76308 16.956 3.0441C18.237 4.32511 18.237 6.40205 16.956 7.68306L13.9331 10.7059C12.6521 11.9869 10.5752 11.9869 9.29416 10.7059C9.19999 10.6117 9.11291 10.5135 9.03283 10.4118C8.81933 10.1405 8.42638 10.0937 8.15515 10.3072C7.88392 10.5207 7.83713 10.9137 8.05063 11.1849C8.1612 11.3254 8.2811 11.4606 8.41028 11.5898C10.1794 13.359 13.0478 13.359 14.817 11.5898L17.8399 8.56694C19.609 6.79777 19.609 3.92938 17.8399 2.16021C16.0707 0.391044 13.2023 0.391043 11.4331 2.16021L8.93309 4.66024C8.68902 4.90432 8.68902 5.30005 8.93309 5.54413C9.17717 5.78821 9.5729 5.78821 9.81698 5.54413L12.317 3.0441Z"
                        fill="#C6C6D5"
                      ></path>
                      <path
                        d="M6.06698 9.2941C7.348 8.01308 9.42493 8.01308 10.7059 9.2941C10.8002 9.38831 10.8872 9.48655 10.9673 9.58821C11.1808 9.85944 11.5737 9.90623 11.845 9.69272C12.1162 9.47922 12.163 9.08627 11.9495 8.81504C11.8389 8.67454 11.7189 8.53933 11.5898 8.41021C9.82066 6.64104 6.95227 6.64104 5.1831 8.41021L2.16025 11.4331C0.391082 13.2022 0.391082 16.0706 2.16025 17.8398C3.92942 19.609 6.79781 19.609 8.56698 17.8398L11.067 15.3398C11.3111 15.0957 11.3111 14.7 11.067 14.4559C10.8229 14.2118 10.4272 14.2118 10.1831 14.4559L7.6831 16.9559C6.40208 18.2369 4.32515 18.2369 3.04413 16.9559C1.76312 15.6749 1.76312 13.598 3.04413 12.3169L6.06698 9.2941Z"
                        fill="#C6C6D5"
                      ></path>
                      <path
                        d="M12.317 3.0441C13.598 1.76308 15.675 1.76308 16.956 3.0441C18.237 4.32511 18.237 6.40205 16.956 7.68306L13.9331 10.7059C12.6521 11.9869 10.5752 11.9869 9.29416 10.7059C9.19999 10.6117 9.11291 10.5135 9.03283 10.4118C8.81933 10.1405 8.42638 10.0937 8.15515 10.3072C7.88392 10.5207 7.83713 10.9137 8.05063 11.1849C8.1612 11.3254 8.2811 11.4606 8.41028 11.5898C10.1794 13.359 13.0478 13.359 14.817 11.5898L17.8399 8.56694C19.609 6.79777 19.609 3.92938 17.8399 2.16021C16.0707 0.391044 13.2023 0.391043 11.4331 2.16021L8.93309 4.66024C8.68902 4.90432 8.68902 5.30005 8.93309 5.54413C9.17717 5.78821 9.5729 5.78821 9.81698 5.54413L12.317 3.0441Z"
                        stroke="#C6C6D5"
                        strokeWidth="0.6"
                        strokeLinecap="round"
                      ></path>
                      <path
                        d="M6.06698 9.2941C7.348 8.01308 9.42493 8.01308 10.7059 9.2941C10.8002 9.38831 10.8872 9.48655 10.9673 9.58821C11.1808 9.85944 11.5737 9.90623 11.845 9.69272C12.1162 9.47922 12.163 9.08627 11.9495 8.81504C11.8389 8.67454 11.7189 8.53933 11.5898 8.41021C9.82066 6.64104 6.95227 6.64104 5.1831 8.41021L2.16025 11.4331C0.391082 13.2022 0.391082 16.0706 2.16025 17.8398C3.92942 19.609 6.79781 19.609 8.56698 17.8398L11.067 15.3398C11.3111 15.0957 11.3111 14.7 11.067 14.4559C10.8229 14.2118 10.4272 14.2118 10.1831 14.4559L7.6831 16.9559C6.40208 18.2369 4.32515 18.2369 3.04413 16.9559C1.76312 15.6749 1.76312 13.598 3.04413 12.3169L6.06698 9.2941Z"
                        stroke="#C6C6D5"
                        strokeWidth="0.6"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                  </div>
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    name="url"
                    id="url"
                    type="text"
                    className="form-control"
                    placeholder="Paste TikTok link here"
                    required=""
                    aria-label="Name"
                    autoComplete="off"
                    autoCapitalize="none"
                  />
                  <div className="paste">
                    <button
                      type="button"
                      className="btn btn-paste"
                      style={{ display: "flex" }}
                      // onClick={() => {navigator.clipboard
                      //   .readText()
                      //   .then((clipText) => (setInput(clipText)));}}
                    >
                      <i className="icon icon-paste"></i>
                      <span>Paste</span>
                    </button>
                  </div>
                </div>
                <div className="hero-input-right">
                  <button
                    type="button"
                    className={`btn btn-go ${clicked ? 'btn-clicked' : ''} flex-center`}
                    onClick={() => {
                      HandleDownload();
                    }}
                    disabled={!input}
                  >
                    <i className="icon icon-download"></i>Download
                  </button>
                </div>
              </div>
              <div>
                {/* <ins
                  className="adsbygoogle"
                  style={{ display: "block" }}
                  data-ad-client="ca-pub-4835686518321000"
                  data-ad-slot="4343762703"
                  data-ad-format="auto"
                  data-full-width-responsive="true"
                ></ins> */}
              </div>
              <input name="lang" type="hidden" />{" "}
              <input name="token" type="hidden" />
            </form>
          </div>
        </div>
      </div>
      <hr className="divider_bottom" />
      <AdBanner />
    </div>
  );
};

export default MainCon;
