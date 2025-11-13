import React from 'react'

const HomeFooter = () => {
  return (
    <footer
          className="footer-wrapper bg-title footer-layout2"
          data-bg-src="assets/img/logo/Alma1.png"
        >
          <div className="footer-area">
            <div className="widget-area">
              <div className="container">
                <div className="row justify-content-between">
                  <div className="col-md-6 col-lg-6 col-xl-4">
                    <div className="widget footer-widget">
                      <div className="th-widget-about">
                        <div className="about-logo">
                          <a href="#">
                            <img
                              src="assets/img/logo/Alma1.png"
                              alt="Alma Elite"
                            />
                          </a>
                        </div>
                        <p className="about-text">
                          Look for contractors with relevant experience, a solid
                          reputation, and proper licensing.
                        </p>
                        <div className="th-widget-contact style2">
                          <div>
                            <h4 className="footer-info-title">Phone Number</h4>
                            <p className="footer-info">
                              <i className="fa-sharp fa-solid fa-phone"></i>
                              <a
                                className="text-inherit"
                                href="tel:+19524357106"
                              >
                                +966 53 309 0700
                              </a>
                            </p>
                          </div>
                          <div>
                            <h4 className="footer-info-title">Email Address</h4>
                            <p className="footer-info">
                              <i className="fas fa-envelope"></i>
                              <a
                                className="text-inherit"
                                href="mailto:info@Alma Elite.com"
                              >
                                info@almaeliteksa.com
                              </a>
                            </p>
                          </div>
                        </div>
                        <div className="mt-30">
                          <h4 className="footer-info-title">
                            Address Location
                          </h4>
                          <p className="footer-info">
                            <i className="fas fa-map-marker-alt"></i>Dammam KSA
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-auto">
                    <div className="widget widget_nav_menu footer-widget">
                      <h3 className="widget_title">Quick Links</h3>
                      <div className="menu-all-pages-container">
                        <ul className="menu">
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
                                gotoWhyUs(event);
                              }}
                            >
                              Why Us
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
                                gotoContactUs(event);
                              }}
                            >
                              Contact Us
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 col-xl-auto">
                    <div className="widget widget_nav_menu footer-widget">
                      <h3 className="widget_title">Our Services</h3>
                      <div className="menu-all-pages-container">
                        <ul className="menu">
                          <li>
                            <a>Building Construction</a>
                          </li>
                          <li>
                            <a> Architecture Design</a>
                          </li>
                          <li>
                            <a>Building Renovation</a>
                          </li>
                          <li>
                            <a>Flooring & Roofing</a>
                          </li>
                          <li>
                            <a>Real Estate</a>
                          </li>
                          <li>
                            <a>Interior Design</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-auto">
                    <div className="widget footer-widget">
                      <h3 className="widget_title">Gallery Post</h3>
                      <div className="sidebar-gallery">
                        <div className="gallery-thumb">
                          <img
                            src="assets/img/widget/gallery_1_1.jpg"
                            alt="Gallery Image"
                          />
                          <a
                            href="assets/img/widget/gallery_1_1.jpg"
                            className="gallery-btn popup-image"
                          >
                            <i className="fab fa-instagram"></i>
                          </a>
                        </div>
                        <div className="gallery-thumb">
                          <img
                            src="assets/img/widget/gallery_1_2.jpg"
                            alt="Gallery Image"
                          />
                          <a
                            href="assets/img/widget/gallery_1_2.jpg"
                            className="gallery-btn popup-image"
                          >
                            <i className="fab fa-instagram"></i>
                          </a>
                        </div>
                        <div className="gallery-thumb">
                          <img
                            src="assets/img/widget/gallery_1_3.jpg"
                            alt="Gallery Image"
                          />
                          <a
                            href="assets/img/widget/gallery_1_3.jpg"
                            className="gallery-btn popup-image"
                          >
                            <i className="fab fa-instagram"></i>
                          </a>
                        </div>
                        <div className="gallery-thumb">
                          <img
                            src="assets/img/widget/gallery_1_4.jpg"
                            alt="Gallery Image"
                          />
                          <a
                            href="assets/img/widget/gallery_1_4.jpg"
                            className="gallery-btn popup-image"
                          >
                            <i className="fab fa-instagram"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="copyright-wrap">
              <div className="container">
                <div className="row justify-content-between align-items-center">
                  <div className="col-lg-6">
                    <p className="copyright-text">
                      Copyright <i className="fal fa-copyright"></i> 2025
                      <a href="#">Alma Elite</a>. All Rights Reserved.
                    </p>
                    <p style={{ fontSize: "10px" }}>
                      Design and Developed By
                      <a
                        target="_blank"
                        href="https://www.wynxiotech.com"
                        style={{ color: "aquamarine", fontSize: "10px" }}
                      >
                        Wynxio Tech
                      </a>
                    </p>
                  </div>
                  <div className="col-lg-6 text-end d-none d-lg-block">
                    <div className="th-social">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
  )
}

export default HomeFooter
