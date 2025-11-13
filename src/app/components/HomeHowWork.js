import React from 'react'

const HomeHowWork = () => {
  return (
   
        <section className="space" id="How-We-Work">
          <div className="container">
            <div
              className="process-area"
              data-bg-src="assets/img/bg/process_bg_1.jpg"
            >
              <div className="process-content">
                <div className="title-area mb-25">
                  <span className="sub-title style1">Work Process</span>
                  <h2 className="sec-title text-white">How It Work</h2>
                  <p className="sec-text">
                    The pre-construction phase involves site preparation,
                    acquiring necessary permits, and establishing a construct.
                  </p>
                </div>
                <div>
                  <a
                    className="th-btn style1 th-icon"
                    onClick={(event) => {
                      gotoContactUs(event);
                    }}
                  >
                    Get In Touch
                    <i className="fa-regular fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
              <div className="process-box_wrap">
                <div className="process-box">
                  <div className="process-box_icon">
                    <img
                      src="assets/img/icon/process_1_1.svg"
                      alt="service image"
                    />
                  </div>
                  <div className="process-box_content">
                    <p className="box-number">STEP -01</p>
                    <h3 className="box-title">Project Research</h3>
                    <p className="process-box_text">
                      In the initial phases, architects and designers play a
                      crucia
                    </p>
                  </div>
                </div>
                <div className="process-box">
                  <div className="process-box_icon">
                    <img
                      src="assets/img/icon/process_1_2.svg"
                      alt="service image"
                    />
                  </div>
                  <div className="process-box_content">
                    <p className="box-number">STEP -02</p>
                    <h3 className="box-title">Design Build</h3>
                    <p className="process-box_text">
                      Vulnerable for web iterate process before meta services
                    </p>
                  </div>
                </div>
                <div className="process-box">
                  <div className="process-box_icon">
                    <img
                      src="assets/img/icon/process_1_3.svg"
                      alt="service image"
                    />
                  </div>
                  <div className="process-box_content">
                    <p className="box-number">STEP -03</p>
                    <h3 className="box-title">Starting Work</h3>
                    <p className="process-box_text">
                      Of setting for web iterate process before meta services
                    </p>
                  </div>
                </div>
                <div className="process-box">
                  <div className="process-box_icon">
                    <img
                      src="assets/img/icon/process_1_4.svg"
                      alt="service image"
                    />
                  </div>
                  <div className="process-box_content">
                    <p className="box-number">STEP -04</p>
                    <h3 className="box-title">Finished Work</h3>
                    <p className="process-box_text">
                      Getting on for web iterate process before meta services
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default HomeHowWork
