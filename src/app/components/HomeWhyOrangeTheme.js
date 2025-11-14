import React from 'react';
import { CheckCircleFill } from 'react-bootstrap-icons';

const HomeWhyOrangeTheme = () => {
  return (
     <section
          className="why-sec2 overflow-hidden space"
          style={{background:'url("assets/img/bg/why_bg_2.jpg")'}}
          data-bg-src="assets/img/bg/why_bg_2.jpg"
          id="WhyAlma"
        >
          <div className="container">
            <div className="why-content">
              <div className="title-area mb-30">
                <span className="sub-title style1">Why Choose Us</span>
                <h2 className="sec-title">
                  Constructing Success Stories One Project at a Time
                </h2>
              </div>
              <div className="checklist list-two-column">
                <ul>
                  <li><CheckCircleFill size={'2rem'} color="orange" className="me-1"></CheckCircleFill>Powerfull Product Strategy</li>
                  <li><CheckCircleFill size={'2rem'} color="orange" className="me-1"></CheckCircleFill>Quality Control System</li>
                  <li><CheckCircleFill size={'2rem'} color="orange" className="me-1"></CheckCircleFill>Professional Team Works</li>
                  <li><CheckCircleFill size={'2rem'} color="orange" className="me-1"></CheckCircleFill>Award Winning Projects</li>
                </ul>
              </div>
              <div className="feature-circle-wrap">
            <div className="feature-circle">
              <div className="progressbar" data-path-color="#F68A0A">
                <div className="circle" data-percent="85"><canvas width="125" height="125" style={{height: '100px', width: '100px'}}></canvas>
                  <div className="circle-num">100%</div>
                </div>
              </div>
              <div className="media-body">
                <h3 className="box-title">Project Success Rate</h3>
              </div>
            </div>
            <div className="feature-circle">
              <div className="progressbar" data-path-color="#F68A0A">
                <div className="circle" data-percent="95"><canvas width="125" height="125" style={{height: '100px', width: '100px'}}></canvas>
                  <div className="circle-num">100%</div>
                </div>
              </div>
              <div className="media-body">
                <h3 className="box-title">Client Satisfaction</h3>
              </div>
            </div>
          </div>
              <div className="btn-group style1">
                <div className="feature-wrapper">
                  <div className="feature-icon">
                    <a href="tel:+966533090700">
                      <i className="fa-regular fa-phone"></i>
                    </a>
                  </div>
                  <div className="media-body">
                    <span className="header-info_label">Call Us Any Time</span>
                    <p className="header-info_link">
                      <a href="tel:+966533090700">+966 53 309 0700</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default HomeWhyOrangeTheme
