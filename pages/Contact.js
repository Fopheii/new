import Link from "next/link";

const Contact = () => {
    function myFunction() {
        var element = document.getElementById("myDIVContact");
        element.classList.toggle("show");
    }
  return (
    <div>
      {/* <Navbar /> */}
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
                <ul className="dropdown-menu dropdown-lang" id="myDIVContact">
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
      {/* <div className="container">
        <div className="columns">
          <div className="column is-12">
            <h1>Contact</h1>
            <form action="" method="POST">
              <div className="mb-3">
                <label htmlFor="your-name" className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  name="your-name"
                  className="form-control"
                  id="your-name"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="content" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  name="content"
                  id="content"
                  rows="3"
                ></textarea>
              </div>
              <div className="mb-3"></div>
              <button
                type="submit"
                name="btn-send"
                value="submit"
                className="btn btn-main"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div> */}
      <div className="container" style={{marginTop: '25px', minHeight: '70vh'}}>
        <h2 style={{marginBottom: '20px', color: '#293a46'}}>Contact us</h2>
        <div className="contact-info">
          <span style={{color: '#293a46'}}>
              We are here to answer any questions or inquiries that you may have. Reach out to us and we will respond as soon as possible. In the mean time please have a look at our <a href="/Terms" className="contact-terms-link">terms of service</a>.
          </span>
          <span style={{color: '#293a46', marginTop: '15px'}}>
              <b>Mail:</b> <a href="mailto:Contact@downloaderi.com" className="contact-terms-link"> Contact@downloaderi.com</a>
          </span>
          </div>
        <h2 style={{marginTop: '20px', fontSize: '22px', color: '#293a46'}}>
            Follow Us
        </h2>
        <div>
        <a href="https://instagram.com/downloaderi" target="_blank" rel="noopener noreferrer">
          <img src="/instagram.svg" alt="insta logo" style={{ width: '25px' }} />
        </a>
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
};

export default Contact;
