"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    id: 1,
    avatar: "/assets/img/testimonial/testi_3_1.jpg",
    name: "Kyle Merwin",
    title: "CEO, Example Inc.",
    quote:
      "With construction services, there is a focus on maintaining high-quality standards in materials, workmanship, and overallconstruction practices, ensuring a durable and reliable structure.",
  },
  {
    id: 2,
    avatar: "/assets/img/testimonial/testi_3_2.jpg",
    name: "Alex Jordan",
    title: "CTO, Something Co.",
    quote:
      "Diversity is a cornerstone of our farming philosophy. We carefully select a wide range of crops, ensuring balanced, This not only helps to naturally deter pests and diseases but also promotes soil health by varying the different plants",
  },
  {
    id: 3,
    avatar: "/assets/img/testimonial/testi_3_3.jpg",
    name: "Martin Danial",
    title: "CTO, Something Co.",
    quote:
      "Completely drive innovative value whereas out-of-the-box paradigms.Interactively pursue stand-alone markets after global results. Globally plagiarize intermandated opportunities with. Progressively leverage others multifunctional methods.",
  },
];

export default function TestimonialSlider() {
  const settings = {
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
  };

  return (
    <section
      className="testimonial-area overflow-hidden bg-smoke spacesmall"
      id="testi-sec"
      style={{ backgroundImage: 'url("assets/img/bg/shape_bg_2.png")' }}
       
    >
      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title">Testimonials</span>
          <h2 className="sec-title">What Our Clients Say?</h2>
        </div>
        <div className="testimonialsectioncontainer">
          <Slider {...settings}>
            {testimonials.map((item,index) => (
              <div key={index}>
                <div key={item.id} className="testimonial-grid">
                  <div className="testimonial-author">
                    <div className="author-inner">
                      <img src={item.avatar} alt="" />
                      <h3>{item.name}</h3>
                    </div>
                  </div>
                  <div className="testimonial-content">{item.quote}</div>
                  {/* <img src={item.avatar} alt={item.name} className="avatar" />
            <p className="quote">“{item.quote}”</p>
            <h4 className="name">{item.name}</h4>
            <span className="title">{item.title}</span> */}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>

    // <div className="centerFlex">
    //   <Slider {...settings}>
    //     <div className="testimonial-grid">
    //       <div className="testimonial-author">
    //         <div className="author-inner">
    //           <img src="assets/img/testimonial/testi_3_1.jpg" alt="Author" />
    //           <h3>Kyle Merwin</h3>
    //         </div>
    //       </div>
    //       <div className="testimonial-content">
    //         "With construction services, there is a focus on maintaining
    //         high-quality standards in materials, workmanship, and
    //         overallconstruction practices, ensuring a durable and reliable
    //         structure."
    //       </div>
    //     </div>

    //     <div className="testimonial-grid">
    //       <div className="testimonial-author">
    //         <div className="author-inner">
    //           <img src="assets/img/testimonial/testi_3_2.jpg" alt="Author" />
    //           <h3>Alex Jordan</h3>
    //         </div>
    //       </div>
    //       <div className="testimonial-content">
    //         "Diversity is a cornerstone of our farming philosophy. We carefully
    //         select a wide range of crops, ensuring balanced, This not only helps
    //         to naturally deter pests and diseases but also promotes soil health
    //         by varying the different plants"
    //       </div>
    //     </div>

    //     <div className="testimonial-grid">
    //       <div className="testimonial-author">
    //         <div className="author-inner">
    //           <img src="assets/img/testimonial/testi_3_3.jpg" alt="Author" />
    //           <h3>Martin Danial</h3>
    //         </div>
    //       </div>
    //       <div className="testimonial-content">
    //         "Completely drive innovative value whereas out-of-the-box paradigms.
    //         Interactively pursue stand-alone markets after global results.
    //         Globally plagiarize intermandated opportunities with. Progressively
    //         leverage others multifunctional methods."
    //       </div>
    //     </div>
    //   </Slider>
    // </div>

    // <div className="col-xl-12">
    //   <div
    //     className="testi-slider2"
    //     id="testi-thumb2"

    //   >
    //     <div className="swiper-wrappe">
    //       <div className="swiper-slide">
    //         <div className="testimonial-grid">
    //           <div className="testimonial-author">
    //              <img
    //               src="assets/img/testimonial/testi_3_1.jpg"
    //               alt="Avater"
    //             ></img>
    //           </div>
    //           <div className="testimonial-content">
    //              <h3 className="testi-grid_title">Building Renovations</h3>
    //             <p className="testi-grid_text">
    //               With construction services, there is a focus on maintaining
    //               high-quality standards in materials, workmanship, and overall
    //               construction practices, ensuring a durable and reliable
    //               structure.
    //             </p>
    //             <h6 className="testi-grid_name box-title">Kyle Merwin</h6>
    //             <span className="testi-grid_desig">CO-owner at LionEnergy</span>
    //             <div className="testi-quote mt-50">
    //               <img src="assets/img/icon/quote.svg" alt=""></img>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //        <div className="swiper-slide">
    //         <div className="testi-grid">
    //           <div className="testi-grid_author">
    //             <img
    //               src="assets/img/testimonial/testi_3_2.jpg"
    //               alt="Avater"
    //             ></img>
    //           </div>
    //           <div className="testi-grid_content">
    //             <h3 className="testi-grid_title">Building Renovations</h3>
    //             <p className="testi-grid_text">
    //               Diversity is a cornerstone of our farming philosophy. We
    //               carefully select a wide range of crops, ensuring balanced,
    //               This not only helps to naturally deter pests and diseases but
    //               also promotes soil health by varying the different plants
    //             </p>
    //             <h6 className="testi-grid_name box-title">Alex Jordan</h6>
    //             <span className="testi-grid_desig">E-commerce Solutions</span>
    //             <div className="testi-quote mt-50">
    //               <img src="assets/img/icon/quote.svg" alt=""></img>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="swiper-slide">
    //         <div className="testi-grid">
    //           <div className="testi-grid_author">
    //             <img
    //               src="assets/img/testimonial/testi_3_3.jpg"
    //               alt="Avater"
    //             ></img>
    //           </div>
    //           <div className="testi-grid_content">
    //             <h3 className="testi-grid_title">Building Renovations</h3>
    //             <p className="testi-grid_text">
    //               Completely drive innovative value whereas out-of-the-box
    //               paradigms. Interactively pursue stand-alone markets after
    //               global results. Globally plagiarize intermandated
    //               opportunities with. Progressively leverage others
    //               multifunctional methods.
    //             </p>
    //             <h6 className="testi-grid_name box-title">Martin Danial</h6>
    //             <span className="testi-grid_desig">Disaster Recovery</span>
    //             <div className="testi-quote mt-50">
    //               <img src="assets/img/icon/quote.svg" alt=""></img>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="swiper-slide">
    //         <div className="testi-grid">
    //           <div className="testi-grid_author">
    //             <img
    //               src="assets/img/testimonial/testi_3_1.jpg"
    //               alt="Avater"
    //             ></img>
    //           </div>
    //           <div className="testi-grid_content">
    //             <h3 className="testi-grid_title">Building Renovations</h3>
    //             <p className="testi-grid_text">
    //               Lectus volpat faucibus placerat eget nulla sodales aliquam
    //               molestie ante, himenaeos fames suscipit arcu cras cenas
    //               penatibus vivamus, aenean primis enim
    //             </p>
    //             <h6 className="testi-grid_name box-title">Martin Danial</h6>
    //             <span className="testi-grid_desig">Disaster Recovery</span>
    //             <div className="testi-quote mt-50">
    //               <img src="assets/img/icon/quote.svg" alt=""></img>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //   </div>
    // </div>
  );
}
