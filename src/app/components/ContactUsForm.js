"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, number, message } = formData;

    // basic validation
    if (!name || !number || !message) {
      toast.error("Please fill in all mandatory fields (Name, Phone, Message)");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone: number,
          messagetext: message,
        }),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", number: "", message: "" });
      } else {
        toast.error(data.error || "Failed to send message");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      toast.error("Something went wrong! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-bottom overflow-hidden">
      <div className="container">
        <div className="row gy-5">
          <div className="col-lg-6">
            <div>
              <div className="title-area mb-30">
                <span className="sub-title style1">Get In Touch</span>
                <h2 className="sec-title">
                  Have An Upcoming Project? Let’s Talk Now!
                </h2>
              </div>
              <form className="contact-form2 style2" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="form-group col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      id="name"
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <i className="fal fa-user"></i>
                  </div>

                  <div className="form-group col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <i className="fal fa-envelope"></i>
                  </div>

                  <div className="form-group col-md-6">
                    <input
                      type="tel"
                      className="form-control"
                      name="number"
                      id="number"
                      placeholder="Phone Number *"
                      value={formData.number}
                      onChange={handleChange}
                    />
                    <i className="fal fa-phone"></i>
                  </div>

                  <div className="form-group col-12">
                    <textarea
                      name="message"
                      id="message"
                      cols="30"
                      rows="3"
                      className="form-control"
                      placeholder="Your Message *"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                    <i className="fal fa-pencil"></i>
                  </div>

                  <div className="form-btn col-12">
                    <button
                      type="submit"
                      className="th-btn th-radius2"
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Send Message"}
                      <i className="fa-regular fa-arrow-right ms-2"></i>
                    </button>
                  </div>
                </div>
              </form>
              <ToastContainer position="bottom-right" />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="contact-image style2">
              <img src="assets/img/normal/contact-image.jpg" alt="Contact Us" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
