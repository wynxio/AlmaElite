import React from 'react'

const TopHeaderBar = () => {
  return (
    <header className="th-header header-layout2">
          <div className="header-top">
            <div className="container th-container">
              <div className="row justify-content-center justify-content-lg-between align-items-center">
                <div className="col-auto">
                  <div className="top-left">
                    <p className="header-notice" data-lang="en">
                      Welcome To The Alma Elite Construction
                    </p>
                    <p className="header-notice nodisplay" data-lang="ar">
                      مرحباً بكم في شركة ألما إيليت للإنشاءات
                    </p>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="header-wrapper">
                    <div className="header-links">
                      <ul>
                        <li>
                          <i className="fa-regular fa-phone"></i>
                          <a href="tel:+12013802737">+966 53 309 0700</a>
                        </li>
                        <li>
                          <i className="fa-regular fa-envelope"></i>
                          <a href="mailto:help@almaeliteksa.com">
                            info@almaeliteksa.com
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="social-links">
                      <span className="social-title">Follow Us:</span>

                      <a href="#">
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="bi bi-twitter-x"></i>
                      </a>
                      <a href="#">
                        <i className="bi bi-instagram"></i>
                      </a>
                    </div>
                    <div className="social-links">
                      <div className="langChanger">
                        <a
                          className="active"
                          id="a_changeEnglish"
                          onClick={(event) => {
                            changeLanguageToEnglish();
                          }}
                        >
                          English
                        </a>
                        <a
                          id="a_changeArabic"
                          onClick={(event) => {
                            changeLanguageToArabic();
                          }}
                        >
                          Arabic
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sticky-wrapper">
            
            <div className="container th-container">
              <div className="menu-area">
                <div className="row align-items-center justify-content-between">
                  <div className="col-auto">
                    <div className="header-logo">
                      <a href="#">
                        <img
                          src="assets/img/logo/LogoAlma1.png"
                          alt="Alma Elite"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-auto">
                    <nav className="main-menu d-none d-lg-inline-block">
                      <ul>
                        <li>
                          <a
                            onClick={(event) => {
                              gotoHome(event);
                            }}
                            data-lang="en"
                          >
                            Home
                          </a>
                          <a
                            onClick={(event) => {
                              gotoHome(event);
                            }}
                            data-lang="ar"
                            className="nodisplay"
                          >
                            الصفحة الرئيسية
                          </a>
                        </li>
                        <li>
                          <a
                            onClick={(event) => {
                              gotoAboutUs(event);
                            }}
                          >
                            About Us
                          </a>
                        </li>
                        <li>
                          <a
                            onClick={(event) => {
                              gotoHowWeWork(event);
                            }}
                          >
                            How We Work
                          </a>
                        </li>
                        <li>
                          <a
                            onClick={(event) => {
                              gotoWhyUs(event);
                            }}
                          >
                            Why Us
                          </a>
                        </li>
                        <li>
                          <a
                            onClick={(event) => {
                              gotoContactUs(event);
                            }}
                          >
                            Contact us
                          </a>
                        </li>
                      </ul>
                    </nav>
                    <button
                      id="mobilemenuclose"
                      type="button"
                      className="th-menu-toggle d-block d-lg-none"
                    >
                      <i className="far fa-bars"></i>
                    </button>
                  </div>
                  <div className="col-auto d-none d-xl-block">
                    <div className="header-button">
                      <a
                        href="#"
                        className="icon-btn sideMenuToggler d-none d-lg-block"
                      >
                        <i className="fa-solid fa-grid"></i>
                      </a>
                      <a
                        href="#"
                        className="th-btn th-icon"
                        onClick={(event) => {
                          gotoContactUs(event);
                        }}
                      >
                        GET A QUOTE
                        <i className="fa-regular fa-arrow-right ms-2"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
  )
}

export default TopHeaderBar
