/* eslint-disable @next/next/no-page-custom-font */

import MainCon from "../comps/MainCon";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  function myFunction() {
    var element = document.getElementById("myDIV");
  }
  return (
    <div>
      <Head>
        <meta
          name="description"
          content="TikTok Video Downloader - Downloaderi is one of the best free Download video Tiktok No Watermark tool available online. You can download TikTok video from any device you have."
        ></meta>
        <title>Tiktok Downloader</title>
      </Head>

      {/* <Navbar/> */}
      <>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <div className="navbar-left">
              <a
                className="navbar-brand"
                href="https://downloaderi.com"
                title="TikTok Downloader"
              >
                Downloader<span>i</span>
              </a>
              <a className="navbar-app" href="#">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_316_48)">
                    <path
                      d="M10.6666 0.666656H5.33325C4.22659 0.666656 3.33325 1.55999 3.33325 2.66666V13.3333C3.33325 14.44 4.22659 15.3333 5.33325 15.3333H10.6666C11.7733 15.3333 12.6666 14.44 12.6666 13.3333V2.66666C12.6666 1.55999 11.7733 0.666656 10.6666 0.666656ZM11.3333 12H4.66659V2.66666H11.3333V12ZM9.33325 14H6.66659V13.3333H9.33325V14Z"
                      fill="#112DDD"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_316_48">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Install App
              </a>
            </div>
            <div className="navbar-right">
              <div className="nav-item dropdown">
                <button
                  className="reset-button navbar-btn navbar-lang"
                  type="button"
                  disabled
                  onClick={myFunction}
                >
                  <span>Languages</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1_714)">
                      <path
                        d="M10 18.3333C14.6024 18.3333 18.3333 14.6024 18.3333 10C18.3333 5.39763 14.6024 1.66667 10 1.66667C5.39763 1.66667 1.66667 5.39763 1.66667 10C1.66667 14.6024 5.39763 18.3333 10 18.3333Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1.66667 10H18.3333"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 1.66667C12.0844 3.94863 13.269 6.91003 13.3333 10C13.269 13.09 12.0844 16.0514 10 18.3333C7.9156 16.0514 6.73104 13.09 6.66667 10C6.73104 6.91003 7.9156 3.94863 10 1.66667V1.66667Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_714">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
                <ul className="dropdown-menu dropdown-lang" id="myDIV">
                  <li>
                    <a className="dropdown-item" href="/en">
                      English
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/ID">
                      Bahasa Indonesia
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/vn">
                      Tiếng Việt
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/ms">
                      Bahasa Malaysia
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/jv">
                      Basa Jawa
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/cs">
                      Čeština
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/in">
                      English - India
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/es">
                      Español
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/fr">
                      Français
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/de">
                      German
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/it">
                      Italian
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/hu">
                      Magyar
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/nl">
                      Nederlands
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/pl">
                      Polish
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/pt">
                      Português
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/ro">
                      Română
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/th">
                      Thailand
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/tr">
                      Turkish (Turkey)
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/el">
                      Ελληνικά
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/uk">
                      украї́нська мо́ва
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/ru">
                      Русский
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/ar">
                      عَرَبِيّ
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/ko">
                      한국어
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/ja">
                      日本語
                    </a>
                  </li>{" "}
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <div className="divider">
          <hr className="divider1" />
          <hr className="divider2" />
          <hr className="divider3" />
          <hr className="divider4" />
        </div>
      </>

      <MainCon />

      {/* <Contant/> */}
      <div className="content" id="content">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="h3">Download TikTok video without watermark</div>
              <p
                style={{
                  color: "#4a4a4a",
                  // wordSpacing: "0.2em",
                  // lineHeight: "1.5",
                  fontSize: "15px",
                  // textAlign: "justify",
                }}
              >
                Downloaderi is the ultimate tool for downloading and saving
                TikTok videos to your device. Our website offers a fast,
                reliable, and easy-to-use platform that allows users to download
                TikTok videos without watermark with just one click. With our
                TikTok video downloader, you can save your favorite videos to
                watch offline or share with friends and family. Our platform is
                completely free to use, and it works on all devices, including
                desktops, laptops, tablets, and mobile phones. Whether you're a
                TikTok content creator or a fan of the platform, our TikTok
                video downloader is the perfect solution for accessing and
                sharing TikTok videos. Try it out today and experience the
                convenience of downloading TikTok videos with ease!
              </p>
              <p
                style={{
                  color: "#4a4a4a",
                  // wordSpacing: "0.2em",
                  // lineHeight: "1.5",
                  fontSize: "15px",
                  // textAlign: "justify",
                  marginTop: "15px",
                }}
              >
                Our TikTok video downloader is designed to be user-friendly and
                intuitive. You don't need any technical skills or software
                installation to use our platform. Simply copy the TikTok video
                link you want to download, paste it into our website's search
                bar, and click on the download button. Our website will quickly
                process the video and provide you with a download link. You can
                choose to download the video in various formats MP4, MP3 and
                resolutions, depending on your needs.
              </p>
              {/* <p>
                We offer you the best TikTok video downloader because it's free,
                easy and very fast. There are no limits to how many times you
                can download tiktok videos to your computer or phone. If you
                only want to grab the music from a Tik Tok video, there's also
                an excellent TikTok to MP3 downloader that will work perfectly
                for your needs.
              </p> */}
              {/* <div className="iconapp-box flex-center"><a onclick="if (!window.__cfRLUnblockHandlers) return false; sendEvent('click_link_app_main')" href="https://play.google.com/store/apps/details?id=com.snaptik.tt.downloader.nologo.nowatermark" target="_blank" rel="nofollow noopener" className="link-store"><i className="icon icon-ggplay"></i></a></div> */}
              <h3 className="download-on-mobile-heading">
                Download TikTok video on mobile phone
              </h3>
              <ul
                className=""
                style={{ paddingLeft: "1.5rem", color: "#4a4a4a" }}
              >
                <li id="my-t">
                  {" "}
                  Launch the TikTok app on your phone or browser.
                </li>
                <li id="my-t" style={{ marginTop: "8px" }}>
                  {" "}
                  Play any video that you want to download and copy the link
                </li>

                <li id="my-t" style={{ marginTop: "8px" }}>
                  Download TikTok video without a watermark using your browsers
                  Open your browser and go to downloaderi.com/ When the website
                  comes up, paste the link in the text field on the page.
                </li>
                <li id="my-t" style={{ marginTop: "8px" }}>
                  Click the <b>"Download"</b> button Wait a few seconds, and
                  then save the video. Once the video is downloaded, it will
                  appear in your download folder. And you can proceed to share
                  with friends, watch offline or use it for your compilations or
                  other projects. Easypeasy!
                </li>
              </ul>
              <h3 className="h3" style={{ marginTop: "25px" }}>
                TikTok video downloader without watermark on PC
              </h3>
              <p
                style={{
                  color: "#4a4a4a",
                  // wordSpacing: "0.2em",
                  // lineHeight: "1.5",
                  fontSize: "15px",
                  // textAlign: "justify",
                }}
              >
                It's common to download videos from TikTok, and it's fun to
                share with friends or family, but when the video has watermark,
                it makes your video look bad when you share it with your friend.
                Fortunately, there's an easy way to remove the watermark using
                this Tik Tok Video Downloader on Pc or every device (computers,
                tablets, and mobile) and all operating systems (Windows, Mac,
                Linux, Android, iOS, etc.) The free website service is very easy
                to use. Once you are on the site, open the program (TikTok),
                find the video you want to remove the watermark from, hit the
                Download button, and that's it!
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          {/* <div className="grid">
            <article>
              <div className="text">
                <h3>Tiktok no watermark</h3>
                <p>
                  The video is downloaded right away without a watermark TikTok.
                </p>
              </div>
            </article>
            <article>
              <div className="text">
                <h3>Tiktok song downloader</h3>
                <p>
                  Extract any audio clips from TikTok videos without wasting
                  time searching for them on the internet
                </p>
              </div>
            </article>
            <article>
              <div className="text">
                <h3>No unwanted software</h3>
                <p>
                  No need to install third-party software of plugins for your
                  browser
                </p>
              </div>
            </article>
            <article>
              <div className="text">
                <h3>Tiktok Instant downloads</h3>
                <p>
                  A Tik Tok video of your liking will be save to your device
                  right away with no pauses or delays
                </p>
              </div>
            </article>
            <article>
              <div className="text">
                <h3>Playback on any device</h3>
                <p>
                  Download tiktok materials on your smartphone, laptop, tablet
                  or PC
                </p>
              </div>
            </article>
            <article>
              <div className="text">
                <h3>Everything is free</h3>
                <p>We repeat once more: the videos will cost you nothing</p>
              </div>
            </article>
          </div> */}
          <div className="download-private-container">
            <h3
              className="h3"
              style={{ marginTop: "25px", marginBottom: "20px" }}
            >
              How to download private tiktok video
            </h3>
            <span className="method">
              Method 1: Using a TikTok Video Downloader Website
            </span>
            <ol style={{ paddingLeft: "2.5rem", color: "#4a4a4a" }}>
              <li style={{ marginTop: "8px" }}>
                Ask the owner of the private TikTok video for the video's URL.
              </li>
              <li style={{ marginTop: "8px" }}>
                Go to a TikTok video downloader website, such as Downloaderi.com
              </li>
              <li style={{ marginTop: "8px" }}>
                Paste the video URL into the website's search bar.
              </li>
              <li style={{ marginTop: "8px" }}>
                Click on the "Download" button.
              </li>
              <li style={{ marginTop: "8px" }}>
                Select the video quality you want and click on the "Download"
                button again.
              </li>
              <li style={{ marginTop: "8px" }}>
                The video will start downloading.
              </li>
            </ol>
            <span className="method">Method 2: Using a Screen Recorder</span>
            <ol style={{ paddingLeft: "2.5rem", color: "#4a4a4a" }}>
              <li style={{ marginTop: "8px" }}>
                Follow the private tiktok account.
              </li>
              <li style={{ marginTop: "8px" }}>
                Download a screen recorder app, such as AZ Screen Recorder or DU
                Recorder, from the app store on your phone.
              </li>
              <li style={{ marginTop: "8px" }}>
                Open the screen recorder app and select "Record Video."
              </li>
              <li style={{ marginTop: "8px" }}>
                Open the TikTok app and find the private video you want to
                download.
              </li>
              <li style={{ marginTop: "8px" }}>
                Start playing the video and let it play until the end.
              </li>
              <li style={{ marginTop: "8px" }}>
                Stop the screen recording by tapping on the notification bar and
                selecting "Stop Recording."
              </li>
              <li style={{ marginTop: "8px", marginBottom: "15px" }}>
                The recorded video will be saved to your phone's gallery.
              </li>
            </ol>
          </div>
          <details>
            <summary>Where are TikTok videos saved?</summary>
            The video will be downloaded to a default folder set in browser,
            usually it is «Download». You can select another from the settings,
            just for downloading TikTok videos.
          </details>
          <details>
            <summary>How to download all tiktok videos at once?</summary>
            For now, you can only download videos one by one. Repeat the
            downloading steps for every video you want to save. We're working on
            it, so you can download multiple TikTok videos at once in the
            future.
          </details>
          <details>
            <summary>
              How to save private tiktok videos without watermark?
            </summary>
            To download a private video without watermark you have to follow the
            account first and then copy the link of the video and paste it here
            in Downloaderi.com if you can't download it the first time try
            again.
          </details>
          <details>
            <summary>Are there limits for downloading?</summary>
            You can download as many tiktoks as you want:download all the TikTok
            videos here, If you have space in your device.
          </details>
          <details>
            <summary>In what format can I save Tik Tok video?</summary>
            the videos are saved in MP4, If you want to convert the TikTok video
            without watermark in other format you can download it here and then
            convert the file in another website.
          </details>
          <details className="details-last">
            <summary>How to download tiktok sounds?</summary>
            After pasting a link to TikTok video to our site, press «Download»
            and then select «Download Sound» from the list.
          </details>
        </div>
      </div>

      {/* <Footer/> */}
      <footer>
        <div className="copyright">
          <div className="container">
            <div className="copyright-link">
              <ul className="list-unstyled">
                <li>
                  <Link href="/Privacy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/Terms">Terms of Service</Link>
                </li>
                <li>
                  <Link href="/Contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="copyright-text">
              © 2019 - 2023 (v17){" "}
              <a href="https://downloaderi.com" title="Downloaderi">
                Downloaderi
              </a>
              . All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
