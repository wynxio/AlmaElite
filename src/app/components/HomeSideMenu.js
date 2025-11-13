import React from 'react'

const HomeSideMenu = () => {
  return (
    <div className="sidemenu-wrapper sidemenu-info">
          <div className="sidemenu-content">
            <button className="closeButton sideMenuCls">
              <i className="far fa-times"></i>
            </button>
            <div className="widget">
              <div className="th-widget-about">
                <div className="about-logo">
                  <a href="#">
                    <img src="assets/img/logo/LogoAlma1.png" alt="Alma Elite" />
                  </a>
                </div>
                <p className="about-text">
                  Construction services offer tailored solutions to meet the
                  unique needs and specifications of each project.
                </p>
                <div className="th-social style2">
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

            <div className="widget">
              <h3 className="widget_title">Contact Us</h3>
              <div className="th-widget-about">
                <h4 className="footer-info-title">Address Location</h4>
                <p className="footer-info">
                  <i className="fas fa-map-marker-alt"></i>Dammam KSA
                </p>
                <h4 className="footer-info-title">Phone Number</h4>
                <p className="footer-info">
                  <i className="fa-sharp fa-solid fa-phone"></i>
                  <a className="text-inherit" href="tel:+966533090700">
                    +966 53 309 0700
                  </a>
                </p>
                <h4 className="footer-info-title">Email Address</h4>
                <p className="footer-info">
                  <i className="fas fa-envelope"></i>
                  <a className="text-inherit" href="mailto:info@Alma Elite.com">
                    info@almaeliteksa.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
  )
}

export default HomeSideMenu
