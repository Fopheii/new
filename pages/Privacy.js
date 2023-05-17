/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
const Privacy = () => {
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
      <div className="container">
        <div className="text-justify pt-5">
          <h1 className="h1 font-weight-bold mb-4 mt-4 privacy-policy">
            {" "}
            Privacy Policy
          </h1>
          <h2 className="terms-h2" style={{ display: "flex" }}>
            <strong>What Does This Privacy Policy Cover?</strong>
          </h2>
          <p className="mb-3" style={{
              color: "#4a4a4a",
              wordSpacing: "0.2em",
              lineHeight: "1.5",
              fontSize: "15px",
              textAlign: "justify",
            }}
          >
            Downloaderi pays much attention to keeping your private information
            safe. Please take a moment to familiarize yourself with our privacy
            practices and contact us if you have any questions. We are looking
            forward to your advice. The email address of downloaderi is{" "}
            <a
              href="#"
              className="__cf_email__"
              data-cfemail="1464667d6275776d54707b637a787b757071667d3a777b793a"
            >
              [email&nbsp;protected]
            </a>
          </p>
          <h2 className="terms-h2"
          style={{ display: "flex", marginTop: '25px' }}>
            <strong>Personal identification information</strong>
          </h2>
          <p className="mb-3" style={{
              color: "#4a4a4a",
              wordSpacing: "0.2em",
              lineHeight: "1.5",
              fontSize: "15px",
              textAlign: "justify",
            }}
          >
            We may collect personal identification information from Users in a
            variety of ways, including, but not limited to, when Users visit our
            site, fill out a form, and in connection with other activities,
            services, features or resources we make available on our Site. Users
            may visit our Site anonymously. We will collect personal
            identification information from Users only if they voluntarily
            submit such information to us. Users can always refuse to supply
            personally identification information, except that it may prevent
            them from engaging in certain Site related activities..
          </p>
          <h2 className="terms-h2" style={{ display: "flex", marginTop: '25px' }}>
            <strong>Non-personal identification information</strong>
          </h2>
          <p className="mb-3" style={{
              color: "#4a4a4a",
              wordSpacing: "0.2em",
              lineHeight: "1.5",
              fontSize: "15px",
              textAlign: "justify",
            }}
          >
            We may collect non-personal identification information about Users
            whenever they interact with our Site. Non-personal identification
            information may include the browser name, the type of computer and
            technical information about Users means of connection to our Site,
            such as the operating system and the Internet service providers
            utilized and other similar information.
          </p>
          <h2 className="terms-h2" style={{ display: "flex", marginTop: '25px' }}>
            <strong>Cookies</strong>
          </h2>
          <p className="mb-3" style={{
              color: "#4a4a4a",
              wordSpacing: "0.2em",
              lineHeight: "1.5",
              fontSize: "15px",
              textAlign: "justify",
            }}
          >
            Like many websites, this website sets and uses cookies to enhance
            your user experience — to remember your personal settings, for
            instance. Advertisements may display on this website and, if so, may
            set and access cookies on your computer; such cookies are subject to
            the privacy policy of the parties providing the advertisement.
            However, the parties providing the advertising do not have access to
            this site's cookies. These parties usually use
            non-personally-identifiable or anonymous codes to obtain information
            about your visits to this site. For more information about this type
            of online advertising, about cookies, and about how to turn this
            feature off, please click here:{" "}
            <a
              href="https://optout.networkadvertising.org/"
              target="_blank"
              rel="noreferrer"
            >
              https://optout.networkadvertising.org/
            </a>
            Please note that turning off advertising cookies won’t mean that you
            are not served any advertising, merely that it will not be tailored
            to your interests.
          </p>
          <h2 className="terms-h2" style={{ display: "flex", marginTop: '25px' }}>
            <strong>Logs</strong>
          </h2>
          <p className="mb-3" style={{
              color: "#4a4a4a",
              wordSpacing: "0.2em",
              lineHeight: "1.5",
              fontSize: "15px",
              textAlign: "justify",
            }}
          >
            As is true with most websites and services delivered over the
            Internet, we gather certain information and store it in log files
            when you interact with our Sites and Services. This information
            includes internet protocol (IP) addresses as well as browser type,
            internet service provider, URLs of referring/exit pages, operating
            system, date/time stamp, information you search for, locale and
            language preferences, identification numbers associated with your
            devices, your mobile carrier, and system configuration information.
            Occasionally, we connect personal information to information
            gathered in our log files as necessary to improve our Sites and
            Services. In such a case, we would treat the combined information in
            accordance with this Policy.
          </p>
          <h2 className="terms-h2" style={{ display: "flex", marginTop: '25px' }}>
            <strong>
              CCPA Privacy Rights (Do Not Sell My Personal Information)
            </strong>
          </h2>
          <p className="mb-3" style={{
              color: "#4a4a4a",
              wordSpacing: "0.2em",
              lineHeight: "1.5",
              fontSize: "15px",
              textAlign: "justify",
            }}
          >
            Under the CCPA, among other rights, California consumers have the
            right to: Request that a business that collects a consumer's
            personal data disclose the categories and specific pieces of
            personal data that a business has collected about consumers. Request
            that a business delete any personal data about the consumer that a
            business has collected. Request that a business that sells a
            consumer's personal data, not sell the consumer's personal data. If
            you make a request, we have one month to respond to you. If you
            would like to exercise any of these rights, please contact us.
          </p>
          <h2 className="terms-h2" style={{ display: "flex", marginTop: '25px' }}>
            <strong>GDPR Data Protection Rights</strong>
          </h2>
          <p className="mb-3" style={{
              color: "#4a4a4a",
              wordSpacing: "0.2em",
              lineHeight: "1.5",
              fontSize: "15px",
              textAlign: "justify",
            }}
          >
            We would like to make sure you are fully aware of all of your data
            protection rights. Every user is entitled to the following: The
            right to access – You have the right to request copies of your
            personal data. We may charge you a small fee for this service. The
            right to rectification – You have the right to request that we
            correct any information you believe is inaccurate. You also have the
            right to request that we complete the information you believe is
            incomplete. The right to erasure – You have the right to request
            that we erase your personal data, under certain conditions. The
            right to restrict processing – You have the right to request that we
            restrict the processing of your personal data, under certain
            conditions. The right to object to processing – You have the right
            to object to our processing of your personal data, under certain
            conditions. The right to data portability – You have the right to
            request that we transfer the data that we have collected to another
            organization, or directly to you, under certain conditions. If you
            make a request, we have one month to respond to you. If you would
            like to exercise any of these rights, please contact us.
          </p>
          <h2 className="terms-h2" style={{ display: "flex", marginTop: '25px' }}>
            <strong>Children’s Personal Information</strong>
          </h2>
          <p className="mb-3" style={{
              color: "#4a4a4a",
              wordSpacing: "0.2em",
              lineHeight: "1.5",
              fontSize: "15px",
              textAlign: "justify",
            }}
          >
            We do not knowingly collect any personal information from children
            under the age of 13. If you are under the age of 13, please do not
            submit any personal information through our Sites, Applications or
            Services. We encourage parents and legal guardians to monitor their
            children’s Internet usage and to help enforce this Policy by
            instructing their children never to provide personal information
            through the Sites, Applications or Services without their
            permission. If you have reason to believe that a child under the age
            of 13 has provided personal information to us through the Sites,
            Applications or Services, please contact us at{" "}
            <a
              href="#"
              className="__cf_email__"
              data-cfemail="1b6b69726d7a78625b7f746c7577747a7f7e697235787476"
            >
              [email&nbsp;protected]
            </a>
            , and we will use commercially reasonable efforts to delete that
            information.
          </p>
          <h2 className="terms-h2" style={{ display: "flex", marginTop: '25px' }}>
            <strong>How we use collected information</strong>
          </h2>
          <p className="mb-3" style={{
              color: "#4a4a4a",
              wordSpacing: "0.2em",
              lineHeight: "1.5",
              fontSize: "15px",
              textAlign: "justify",
            }}
          >
            We may also use that information to operate, maintain and improve
            features and functionality of the Site. We use cookies to store
            information to enhance user experiences. For example, we may provide
            personalized content and information, monitor the effectiveness of
            the Site and monitor aggregate metrics such as the number of
            visitors and page views. We may aggregate your non-personal
            information with non-personal information of other members and
            users, and disclose such information to advertisers and other
            third-parties for marketing and promotional purposes.
          </p>
          <h2 className="terms-h2" style={{ display: "flex", marginTop: '25px' }}>
            <strong>Advertising</strong>
          </h2>
          <p className="mb-3" style={{
              color: "#4a4a4a",
              wordSpacing: "0.2em",
              lineHeight: "1.5",
              fontSize: "15px",
              textAlign: "justify",
            }}
          >
            Ads appearing on our site may be delivered to Users by advertising
            partners, who may set cookies. These cookies allow the ad server to
            recognize your computer each time they send you an online
            advertisement to compile non personal identification information
            about you or others who use your computer. This information allows
            ad networks to, among other things, deliver targeted advertisements
            that they believe will be of most interest to you. This privacy
            policy does not cover the use of cookies by any advertisers.
          </p>
          <h2 className="terms-h2" style={{ display: "flex", marginTop: '25px' }}>
            <strong>Google Adsense</strong>
          </h2>
          <p className="mb-3" style={{
              color: "#4a4a4a",
              wordSpacing: "0.2em",
              lineHeight: "1.5",
              fontSize: "15px",
              textAlign: "justify",
            }}
          >
            Some of the ads may be served by Google. Google's use of the DART
            cookie enables it to serve ads to Users based on their visit to our
            Site and other sites on the Internet. DART uses "non personally
            identifiable information" and does NOT track personal information
            about you, such as your name, email address, physical address, etc.
            You may opt out of the use of the DART cookie by visiting the Google
            ad and content network privacy policy at{" "}
            <a href="#" target="_blank" rel="noreferrer">
              {" "}
              https://policies.google.com/technologies/ads
            </a>
          </p>
          <h2 className="terms-h2" style={{ display: "flex", marginTop: '25px' }}>
            <strong>Changes to this privacy policy</strong>
          </h2>
          <p className="mb-3" style={{
              color: "#4a4a4a",
              wordSpacing: "0.2em",
              lineHeight: "1.5",
              fontSize: "15px",
              textAlign: "justify",
            }}
          >
            We have the discretion to update this privacy policy at any time.
            When we do, we will revise the updated date at the beginning of this
            page. We encourage Users to frequently check this page for any
            changes to stay informed about how we are helping to protect the
            personal information we collect. You acknowledge and agree that it
            is your responsibility to review this privacy policy periodically
            and become aware of modifications.
          </p>
          <h2 className="terms-h2" style={{ display: "flex", marginTop: '25px' }}>
            <strong>Your acceptance of these terms</strong>
          </h2>
          <p className="mb-3" style={{
              color: "#4a4a4a",
              wordSpacing: "0.2em",
              lineHeight: "1.5",
              fontSize: "15px",
              textAlign: "justify",
            }}
          >
            We will use your information following this Privacy Policy. You
            agree to all the statements mentioned in this Privacy Policy once
            you visit Savett. What we collect from you is non-personal, which
            means it does not contain your real name, address, phone number, and
            other private information. We just save your browsing preferences,
            which records how you interact with our website. Depending on this
            information, we could find which aspects of our website need to
            change and improve. After that, we can optimize our service and give
            you a better browsing experience. If there are some legal issues,
            like track abuse, we will disclose the information we collect timely
            under the request of the law, without any hesitation. We guarantee
            that all the service provided by us is secure without any cheat or
            virus. What we collect from you is only used on our website, which
            will not be shared on the Internet. This statement may be amended if
            necessary. How we use the information is subject to the Privacy
            Policy of the time when the information is used. Your continued use
            of the Site following the posting of changes to this policy will be
            deemed your acceptance of those changes.
          </p>
          <p className="mb-3">Last Revised:&nbsp;2022-07-25</p>
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

export default Privacy;
