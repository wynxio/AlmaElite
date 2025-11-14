import React from "react";
import { CheckCircleFill } from 'react-bootstrap-icons';

const HomeAboutUsOrangeTheme = () => {
  return (
    <div className="overflow-hidden space" id="aboutus">
      <div className="container">
        <div className="about-title-area">
          <div className="title-area text-center">
            <span className="sub-title">About Alma Elite</span>
            <h2 className="sec-title">
              Empowering Visions Through Solid Construction
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-6">
            <div className="about-wrapper">
              <p className="about-desc">
                Many modern construction companies focus on sustainable building
                practices, incorporating eco-friendly material energy-efficient
                systems.
              </p>
              <div className="checklist mb-40">
                <ul>
                  <li><CheckCircleFill size={'2rem'} color="orange" className="me-1"></CheckCircleFill>We provide 24/7 service</li>
                  <li><CheckCircleFill size={'2rem'} color="orange" className="me-1"></CheckCircleFill>Qualified Agents</li>
                  <li><CheckCircleFill size={'2rem'} color="orange" className="me-1"></CheckCircleFill>Great Technology</li>
                  <li><CheckCircleFill size={'2rem'} color="orange" className="me-1"></CheckCircleFill>2+ Years Experience</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-6">
            <div className="img-box2">
              <div className="img1">
                <img src="assets/img/normal/about_2_1.jpg" alt="About" />
              </div>
              <div className="img2">
                <img src="assets/img/normal/about_2_2.jpg" alt="About" />
              </div>
              <div className="th-experience dance">
                <div className="th-experience_content">
                  <h2 className="experience-year">
                    <span className="counter-number">10</span>k
                  </h2>
                  <p className="experience-text">Customers Satisfied</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6">
            <div className="counter-box-wrap">
              <div className="counter-box">
                <div className="media-body">
                  <h3 className="box-number">
                    <span className="counter-number">2</span>k
                    <span className="text">+</span>
                  </h3>
                  <p className="box-text">Project Completed</p>
                </div>
              </div>
              <div className="counter-box">
                <div className="media-body">
                  <h3 className="box-number">
                    <span className="counter-number">1.5</span>k
                    <span className="text">+</span>
                  </h3>
                  <p className="box-text">Customer Satisfied</p>
                </div>
              </div>
              <div className="counter-box">
                <div className="media-body">
                  <h3 className="box-number">
                    <span className="counter-number">360</span>
                    <span className="text">+</span>
                  </h3>
                  <p className="box-text">Expert Team Members</p>
                </div>
              </div>
              <div className="counter-box">
                <div className="media-body">
                  <h3 className="box-number">
                    <span className="counter-number">85</span>
                    <span className="text">+</span>
                  </h3>
                  <p className="box-text">Awards Winner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div
        className="shape-mockup jump d-none d-xxl-block"
        data-top="0%"
        data-right="0%"
      >
        <img src="assets/img/shape/shape_4.png" alt="shape" />
      </div> */}
    </div>
  );
};

export default HomeAboutUsOrangeTheme;
