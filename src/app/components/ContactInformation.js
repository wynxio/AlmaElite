import React from 'react'

const ContactInformation = () => {
  return (
    <div className="space" id="ContactUs">
          <div className="container">
            <div className="row gy-40 gx-30">
              <div className="col-xl-4 col-lg-6">
                <div className="title-area mb-30">
                  <h3 className="sec-title">Contact Information</h3>
                </div>
                <div className="contact-info-wrap">
                  <div className="contact-info">
                    <div className="contact-info_icon">
                      <i className="fa-light fa-location-dot"></i>
                    </div>
                    <div className="media-body">
                      <p className="contact-info_label">Our Address</p>
                      <a className="contact-info_link">Dammam , KSA</a>
                    </div>
                  </div>
                  <div className="contact-info">
                    <div className="contact-info_icon">
                      <i className="fa-light fa-phone"></i>
                    </div>
                    <div className="media-body">
                      <p className="contact-info_label">Contact Number</p>
                      <a href="tel:256214203215" className="contact-info_link">
                        Mobile: +966 53 309 0700
                      </a>
                      <a
                        href="mailto:info@konta.com"
                        className="contact-info_link"
                      >
                        Email: info@almaeliteksa.com
                      </a>
                    </div>
                  </div>
                  <div className="contact-info">
                    <div className="contact-info_icon">
                      <i className="fa-light fa-clock"></i>
                    </div>
                    <div className="media-body">
                      <p className="contact-info_label">Working Hours</p>
                      <span className="contact-info_link">
                        Monday - Thursday & Sunday: 8:00 - 15:00
                      </span>
                      <span className="contact-info_link">
                        Friday: <span className="text-theme">Closed</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-8 col-lg-6">
                <div className="contact-map">
                  <iframe
                    loading="lazy"
                    allowFullScreen=""
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3701.53621538481!2d50.04187081534911!3d26.392412827194825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49fc1041d72657%3A0x4ff5c6ef00c046a1!2sDammam%2C%20Eastern%20Province%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default ContactInformation
