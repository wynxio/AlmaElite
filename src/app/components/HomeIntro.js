'use client';

import React from "react";
// import HeroArea from "../../../public/HeroArea";
import dynamic from "next/dynamic";

import HomeSideMenu from "./HomeSideMenu";
import MobileMenu from "./MobileMenu";
import TopHeaderBar from "./TopHeaderBar";
import HeroArea from "../../../public/HeroArea";
import HomeFeatures from "./HomeFeatures";
import HomeAboutUs from "./HomeAboutUs";
import HomeServices from "./HomeServices";
import HomeGetConsultation from "./HomeGetConsultation";
import HomeHowWork from "./HomeHowWork";
import HomeWhy from "./HomeWhy";
import TestimonialSlider from "./TestimonialSlider";


import HomeClients from "./HomeClients";
import ContactInformation from "./ContactInformation";
import ContactUsForm from "./ContactUsForm";
import HomeFooter from "./HomeFooter";
// import HomeScrollTop from "./HomeScrollTop";




 

const HomeIntro = () => {
  return (
    <>
      <div id="preloaderLogo" className="preloaderLog">
        <img src="assets/img/logo/Intro.png" alt="Loading..." />
      </div>
      <div id="originalContent" className="hideOriginal">
  
        <HomeSideMenu></HomeSideMenu>

        <MobileMenu></MobileMenu>
        
        <TopHeaderBar></TopHeaderBar>            

        <HeroArea></HeroArea>
        
        <HomeFeatures></HomeFeatures>
         
        <HomeAboutUs></HomeAboutUs>
   
        <HomeServices></HomeServices>              
        
        <HomeGetConsultation></HomeGetConsultation>

        <HomeHowWork></HomeHowWork>

        <HomeWhy></HomeWhy> 

        <TestimonialSlider></TestimonialSlider>  

        

        <HomeClients></HomeClients>

        <ContactInformation></ContactInformation>

        <ContactUsForm></ContactUsForm>

        <HomeFooter></HomeFooter>               
        
        {/* <HomeScrollTop></HomeScrollTop> */}

         
      </div>
    </>
    // <h2>Site is Under Construction</h2>
  );
};

export default HomeIntro;
