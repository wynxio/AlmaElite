"use client";
import React, { useEffect, useState } from "react";

const HeroAreaOrangeTheme = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // Text and images
  const titles = [
    "Building Dreams, Crafting Realities",
    "Best Construction Company in KSA",
  ];

  const captions = [
    "Raising the Bar in Construction",
    "Strength in Construction",
  ];

  const descriptions = [
    `The construction industry encompasses the planning,
     design, and execution of buildings, infrastructure, and
     related projects.`,
    `Construction companies offer a wide range of services,
     such as pre-construction planning, project management,
     and architectural services.`,
  ];

  const images = [
    "assets/img/hero/hero_bg_2_1.jpg",
    "assets/img/hero/hero_bg_2_2.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade out
      setTimeout(() => {
        setActiveIndex((prev) => (prev === 0 ? 1 : 0)); // Switch content
        setFade(true); // Fade back in
      }, 500); // Fade-out duration
    }, 5000); // Switch every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="th-hero-wrapper hero-2" id="hero">
      <div className="swiper hero-slider-2">
        <div className="swiper-wrapper1">
          <div className="swiper-slide">
            <div className="hero-inner">
              <div
                className={`th-hero-bg transition-all duration-700 ${
                  fade ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  background: `url("${images[activeIndex]}") center/cover no-repeat`,
                  transition: "opacity 0.8s ease-in-out",
                }}
              >
                <img src="assets/img/bg/hero_overlay_1.png" alt="" />
              </div>

              <div className="container">
                <div className="hero-style2">
                  <span
                    className={`sub-title style1 ${
                      fade ? "fade-in" : "fade-out"
                    }`}
                  >
                    {titles[activeIndex]}
                  </span>

                  <h1 className={`hero-title ${fade ? "fade-in" : "fade-out"}`}>
                    {captions[activeIndex]}
                  </h1>

                  <p className={`hero-text ${fade ? "fade-in" : "fade-out"}`}>
                    {descriptions[activeIndex]}
                  </p>

                  <div className="btn-group">
                    <a
                      className="th-btn style1 th-icon"
                      onClick={(event) => gotoContactUs(event)}
                    >
                      Get Started
                      <i className="fa-regular fa-arrow-right ms-2"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroAreaOrangeTheme;
