/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
const Terms = () => {
  function myFunction() {
    var element = document.getElementById("myDIV");
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
      <div className="container">
        <div className="text-justify pt-5">
          <h1 className="h1 font-weight-bold mb-4 mt-4">
            <i className="fa fa-handshake"></i> Terms &amp; Conditions
          </h1>
          <h2 className="terms-h2" style={{ display: "flex" }}>
            <strong>AGREEMENT TO TERMS</strong>
            <strong></strong>
          </h2>
          <p
            className="mb-3"
            style={{
              color: "#4a4a4a",
              wordSpacing: "0.2em",
              lineHeight: "1.5",
              fontSize: "15px",
              textAlign: "justify",
            }}
          >
            Please review these terms and conditions of use carefully before
            using savett.cc. This document states the terms and conditions
            ("Terms") upon which savett.cc ("we" or "us") will provide service
            to you on its websites, including, without limitation, the above
            listed websites (collectively, the "Website"). These Terms
            constitute a contractual agreement between you and us. By visiting,
            accessing, using, and/or joining (collectively "using") the Website,
            you express your understanding and acceptance of these Terms. As
            used in this document, the terms "you" or "your" refers to you, any
            entity you represent, your or its representatives, successors,
            assigns and affiliates, and any of your or their devices.{" "}
            <span style={{ fontWeight: "600" }}>
              IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF USE, THEN YOU ARE
              EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST CEASE USING
              the WEBSITE.
            </span>
            The information provided on the Site is not intended for
            distribution to or use by any person or entity in any jurisdiction
            or country where such distribution or use would be contrary to law
            or regulation or which would subject us to any registration
            requirement within such jurisdiction or country. Accordingly, those
            persons who choose to access the Site from other locations do so on
            their own initiative and are solely responsible for compliance with
            local laws, if and to the extent local laws are applicable.
          </p>
          <h2 className="terms-h2" style={{ display: "flex" }}>
            <strong>USE LICENSE</strong>
          </h2>
          <p
            className="mb-3"
            style={{
              color: "#4a4a4a",
              wordSpacing: "0.2em",
              lineHeight: "1.5",
              fontSize: "15px",
              textAlign: "justify",
            }}
          >
            Permission is granted to temporarily download one copy of the
            materials on savett.cc's website for personal, non-commercial
            transitory viewing only. This is the grant of a license, not a
            transfer of title, and under this license you agree not to:
            Systematically retrieve data or other content from the Site to
            create or compile, directly or indirectly, a collection,
            compilation, database, or directory without written permission from
            us. Disparage, tarnish, or otherwise harm, in our opinion, us and/or
            the Site. Use any information obtained from the Site in order to
            harass, abuse, or harm another person. Engage in unauthorized
            framing of or linking to the Site. Interfere with, disrupt, or
            create an undue burden on the Site or the networks or services
            connected to the Site. Copy or adapt the Site’s software, including
            but not limited to Flash, PHP, HTML, JavaScript, or other code.
            Decipher, decompile, disassemble, or reverse engineer any of the
            software comprising or in any way making up a part of the Site. Use
            the Site as part of any effort to compete with us or otherwise use
            the Site and/or the Content for any revenue-generating endeavor or
            commercial enterprise.
          </p>
          <h2 className="terms-h2" style={{ display: "flex" }}>
            <strong>TERM AND TERMINATION</strong>
            <strong></strong>
          </h2>
          <p
            className="mb-3"
            style={{
              color: "#4a4a4a",
              wordSpacing: "0.2em",
              lineHeight: "1.5",
              fontSize: "15px",
              textAlign: "justify",
            }}
          >
            These Terms of Use shall remain in full force and effect while you
            use the Site.
            <span style={{ fontWeight: "600" }}>
              {" "}
              WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS OF USE, WE
              RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR
              LIABILITY, DENY ACCESS TO AND USE OF THE SITE (INCLUDING BLOCKING
              CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO
              REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY
              REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE TERMS OF
              USE OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR
              USE OR PARTICIPATION IN THE SITE OR DELETE ANY CONTENT OR
              INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR
              SOLE DISCRETION.
            </span>
          </p>
          <h2 className="terms-h2" style={{ display: "flex" }}>
            <strong>ADVERTISERS</strong>
            <strong></strong>
          </h2>
          <p
            className="mb-3"
            style={{
              color: "#4a4a4a",
              wordSpacing: "0.2em",
              lineHeight: "1.5",
              fontSize: "15px",
              textAlign: "justify",
            }}
          >
            We allow advertisers to display their advertisements and other
            information in certain areas of the Site, such as sidebar
            advertisements or banner advertisements. If you are an advertiser,
            you shall take full responsibility for any advertisements you place
            on the Site and any services provided on the Site or products sold
            through those advertisements. Further, as an advertiser, you warrant
            and represent that you possess all rights and authority to place
            advertisements on the Site, including, but not limited to,
            intellectual property rights, publicity rights, and contractual
            rights. We simply provide the space to place such advertisements,
            and we have no other relationship with advertisers.
          </p>
          <h2 className="terms-h2" style={{ display: "flex" }}>
            <strong>DISCLAIMER</strong>
            <strong></strong>
          </h2>
          <p
            className="mb-3"
            style={{
              color: "#4a4a4a",
              wordSpacing: "0.2em",
              lineHeight: "1.5",
              fontSize: "15px",
              textAlign: "justify",
            }}
          >
            <span>
              THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE
              THAT YOUR USE OF THE SITE AND OUR SERVICES WILL BE AT YOUR SOLE
              RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL
              WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SITE AND
              YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED
              WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
              AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS
              ABOUT THE ACCURACY OR COMPLETENESS OF THE SITE’S CONTENT OR THE
              CONTENT OF ANY WEBSITES LINKED TO THE SITE AND WE WILL ASSUME NO
              LIABILITY OR RESPONSIBILITY FOR ANY
              <ol style={{fontSize: "13px", marginTop: '10px', fontWeight: 'bold'}}>
                <li>
                  ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS
                </li>
                <li>
                  PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER,
                  RESULTING FROM YOUR ACCESS TO AND USE OF THE SITE.
                </li>
                <li>
                  ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR
                  ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION
                  STORED THEREIN.
                </li>
                <li>
                  ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE
                  SITE.
                </li>
                <li>
                  ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE
                  TRANSMITTED TO OR THROUGH THE SITE BY ANY THIRD PARTY, AND/OR
                </li>
                <li>
                  ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR
                  ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE
                  OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE
                  AVAILABLE VIA THE SITE.
                </li>
              </ol>
              WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY
              FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY
              THROUGH THE SITE, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR
              MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING,
              AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR
              MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY
              PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE PURCHASE OF A
              PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU
              SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE
              APPROPRIATE.
            </span>
          </p>
          <h2 className="terms-h2" style={{ display: "flex" }}>
            <strong>LIMITATION OF LIABILITY</strong>
          </h2>
          <p className="mb-3" style={{
              color: "#4a4a4a",
              wordSpacing: "0.2em",
              lineHeight: "1.5",
              fontSize: "15px",
              textAlign: "justify",
            }}
          >
            <span>
              IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE
              LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT,
              CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE
              DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR
              OTHER DAMAGES ARISING FROM YOUR USE OF THE SITE, EVEN IF WE HAVE
              BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </span>
          </p>
          <h2 className="terms-h2" style={{ display: "flex" }}>
            <strong>INDEMNIFICATION AND RELEASE</strong>
          </h2>
          <p className="mb-3" style={{
              color: "#4a4a4a",
              wordSpacing: "0.2em",
              lineHeight: "1.5",
              fontSize: "15px",
              textAlign: "justify",
            }}
          >
            You hereby agree to indemnify us and hold us harmless from any and
            all damages and third-party claims and expenses, including
            attorney’s fees, arising from your use of the Website and/or from
            your breach of these Terms. In the event that you have a dispute
            with one of more other users or any third parties, you hereby
            release us, our officers, employees, agents and successors-in-right
            from claims, demands and damages (actual and consequential) of every
            kind or nature, known and unknown, suspected and unsuspected,
            disclosed and undisclosed, arising out of or in any way related to
            such disputes and/or the Website.
          </p>
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

export default Terms;
