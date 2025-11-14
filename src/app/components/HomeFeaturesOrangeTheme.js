import React from "react";

const HomeFeaturesOrangeTheme = () => {
  return (
    <div className="feature-area overflow-hidden space-top" id="feature-area">
      <div className="container">
        <div className="title-area">
          <span className="sub-title style1">Our Features</span>
          <h2 className="sec-title">Raising the Bar in Construction</h2>
        </div>
        <div className="row gy-4 justify-content-center">
          <div className="col-md-6 col-xl-4">
            <div className="feature-item th-ani">
              <div className="feature-item_shape"></div>
              <div className="feature-item_shape2"></div>
              <div className="feature-item_icon">
                <img src="assets/img/icon/feature_1_1.svg" alt="icon" />
              </div>
              <div className="media-body">
                <h3 className="box-title">Experienced Workers</h3>
                <p className="feature-item_text">
                  Compliance with building codes, and work to achieve the
                  desired aesthetic and functional goals.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4">
            <div className="feature-item th-ani">
              <div className="feature-item_shape"></div>
              <div className="feature-item_shape2"></div>
              <div className="feature-item_icon">
                <img src="assets/img/icon/feature_1_2.svg" alt="icon" />
              </div>
              <div className="media-body">
                <h3 className="box-title">
                  2<span className="text-theme">+</span> Years Experience
                </h3>
                <p className="feature-item_text">
                  It sounds like you have accumulated a wealth of experience
                  over the course of 2+ years
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4">
            <div className="feature-item th-ani">
              <div className="feature-item_shape"></div>
              <div className="feature-item_shape2"></div>
              <div className="feature-item_icon">
                <img src="assets/img/icon/feature_1_3.svg" alt="icon" />
              </div>
              <div className="media-body">
                <h3 className="box-title">High Quality Services</h3>
                <p className="feature-item_text">
                  Combining Expertise and Innovation for Superior Results. So we
                  are Setting New Standards in Construction Excellence
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div
        className="shape-mockup jump d-none d-xxl-block"
        data-top="2%"
        data-left="0%"
      >
        <img src="assets/img/shape/shape_3.png" alt="shape" />
      </div> */}
    </div>
  );
};

export default HomeFeaturesOrangeTheme;
