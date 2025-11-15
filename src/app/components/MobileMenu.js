import React from "react";
import {
  gotoHome,
  gotoAboutUs,
  gotoContactUs,
  gotoHowWeWork,
  gotoWhyUs,
  closeMobileMenu,
  closeSideBarIcon,
  changeLanguageToArabic,
  changeLanguageToEnglish,
} from "./../lib/menus";

const MobileMenu = () => {
  function showSideBar(event) {
    event.preventDefault();
  }
  return (
    
     <div className="th-menu-wrapper">
          <div className="th-menu-area text-center">
            <button className="th-menu-toggle" id="mobilemenusidebarclose" >
              <i className="fal fa-times"></i>
            </button>

            <div className="mobile-logo">
              <a>
                <img src="assets/img/logo/LogoAlma1.png" alt="Alma Elite" />
              </a>
            </div>
            <div className="th-mobile-menu">
              <ul>
                <li>
                  <a
                    onClick={(event) => {
                      gotoHome(event);
                      closeSideBarIcon();
                    }}
                    data-lang="en"
                  >
                    Home1
                  </a>
                  <a
                    onClick={(event) => {
                      gotoHome(event);
                      closeSideBarIcon();
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
                      closeSideBarIcon();
                    }}
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    onClick={(event) => {
                      gotoHowWeWork(event);
                      closeSideBarIcon();
                    }}
                  >
                    How We Work
                  </a>
                </li>
                <li>
                  <a
                    onClick={(event) => {
                      gotoWhyUs(event);
                      closeSideBarIcon();
                    }}
                  >
                    Why Us
                  </a>
                </li>
                <li>
                  <a
                    onClick={(event) => {
                      gotoContactUs(event);
                      closeSideBarIcon();
                    }}
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
     </div>
  );
};

export default MobileMenu;
