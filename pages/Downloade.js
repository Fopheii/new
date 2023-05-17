/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import { useRouter } from "next/router";
import useDownloader from "react-use-downloader";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import AdBanner from "./AdBanner";
import Link from 'next/link';

const Download = () => {
  const [audioLink, setAudioLink] = useState('')
  const [videoClicked, setVideoClicked] = useState(false)
  const [audioclicked, setAudioClicked] = useState(false)
  const router = useRouter();
  const data = router.query;
  const fileUrl = data.video;
  const audioUrl = data.music;
  const downloadSound = async () => {
    try {
      const response = await fetch(audioUrl);
      const blob = await response.blob();

      // Use the blob as needed, such as creating a download link
       setAudioLink(URL.createObjectURL(blob));
    } catch (error) {
      console.error("Failed to download sound:", error);
    }
  };

  useEffect(() => {
    downloadSound()
  })

  function myFunction() {
    var element = document.getElementById("myDIV");
    element.classList.toggle("show");
  }
  const handleVideoClick = () => {
    setVideoClicked(true);
    setTimeout(() => {
      setVideoClicked(false);
    }, 500);
  }

  const handleAudioClick = () => {
    setAudioClicked(true);
    setTimeout(() => {
      setAudioClicked(false);
    }, 500);
  }


  return (
    <div>
      {/* <NavBar /> */}
      <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="navbar-left">
            <a className="navbar-brand" href="https://downloaderi.com" title="TikTok Downloader">
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
      <AdBanner />
      <div className="container" data-id="Video">
        <div className="row download-box">
          <div className="col-12 col-md-6">
            <div className="down-left">
              <div className="user-avatar">
                <img src={data.cover} alt="thumbnail" id="thumbnail" />
              </div>
              <div className="user-info">
                <div className="user-fullname">{data.description}</div>
                <div className="user-username">{data.author}</div>
              </div>
            </div>
            <a href="/" className="btn btn-main btn-back btn-backpc">
              <svg
                width="20"
                height="21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#a)">
                  <path
                    d="M14.708 6.286A6.631 6.631 0 0 0 10 4.328a6.658 6.658 0 0 0-6.658 6.666A6.658 6.658 0 0 0 10 17.661c3.108 0 5.7-2.125 6.442-5h-1.734A4.992 4.992 0 0 1 10 15.994c-2.758 0-5-2.241-5-5 0-2.758 2.242-5 5-5a4.93 4.93 0 0 1 3.517 1.484l-2.684 2.683h5.834V4.328l-1.959 1.958Z"
                    fill="#fff"
                  ></path>
                </g>
                <defs>
                  <clipPath id="a">
                    <path
                      fill="#fff"
                      transform="translate(0 .994)"
                      d="M0 0h20v20H0z"
                    ></path>
                  </clipPath>
                </defs>
              </svg>
              Download other video
            </a>
          </div>

          <div className="col-12 col-md-4 offset-md-2">
            <div className="down-right">
                <a
                  href={fileUrl}
                  download={"Downloaderi.com__" + data.videoid + ".mp4"}
                  className={`btn active btn-one btn-secon mb-2 btn-main ${videoClicked ? 'btn-clicked' : ''}`}
                  onClick = {handleVideoClick}
                  // onClick={downloadVideo}
                >
                  Download Video
                </a>
              <a
                href={audioLink}
                download={"Downloaderi.com__" + data.videoid + ".mp3"}
                className={`btn active btn-one btn-secon mb-2 btn-main ${audioclicked ? 'btn-clicked' : ''}`}
                onClick = {handleAudioClick}
              >
                Download Sound
              </a>

              <a href="/" className="btn btn-main btn-back">
                <svg
                  width="20"
                  height="21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#a)">
                    <path
                      d="M14.708 6.286A6.631 6.631 0 0 0 10 4.328a6.658 6.658 0 0 0-6.658 6.666A6.658 6.658 0 0 0 10 17.661c3.108 0 5.7-2.125 6.442-5h-1.734A4.992 4.992 0 0 1 10 15.994c-2.758 0-5-2.241-5-5 0-2.758 2.242-5 5-5a4.93 4.93 0 0 1 3.517 1.484l-2.684 2.683h5.834V4.328l-1.959 1.958Z"
                      fill="#fff"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path
                        fill="#fff"
                        transform="translate(0 .994)"
                        d="M0 0h20v20H0z"
                      ></path>
                    </clipPath>
                  </defs>
                </svg>
                Download other video
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
      <footer>
        <div className="copyright">
        <div className="container">
        <div className="copyright-link">
        <ul className="list-unstyled">
        <li>
        <Link href="/Privacy">Privacy Policy</Link>
        </li>
        <li><Link href="/Terms">Terms of Service</Link></li>
        <li><Link href="/Contact">Contact</Link></li>
        </ul>
        </div>
        <div className="copyright-text">© 2019 - 2023 (v17) <a href="https://downloaderi.com" title="Downloaderi">Downloaderi</a>. All rights reserved.</div>
        </div>
        </div>
      </footer>
    </div>
  );
};

export default Download;
