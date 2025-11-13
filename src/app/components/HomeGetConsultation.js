import React from 'react'

const HomeGetConsultation = () => {
  return (
      <section
          className="space"
          data-overlay="title"
          data-opacity="9"
          data-bg-src="assets/img/bg/cta_bg_1.jpg"
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <div className="title-area text-center mb-0 text-lg-start">
                  <span className="sub-title style1 mb-20">
                    Get Consultation
                  </span>
                  <h2 className="sec-title text-white">
                    Get A Free Consultation Contact Us
                    <span className="text-theme">!</span>
                  </h2>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="cta-group justify-content-lg-end justify-content-center">
                  <a
                    className="th-btn style1 th-icon"
                    onClick={(event) => {
                      gotoContactUs(event);
                    }}
                  >
                    Work With Us
                    <i className="fa-regular fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default HomeGetConsultation
