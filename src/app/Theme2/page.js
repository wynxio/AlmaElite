"use client";

import HomeIntro from "../components/HomeIntro";
import HomeIntroRedTheme from "../components/HomeIntroRedTheme";

import { PublicLayout } from "../components/PublicLayout";
import './../orangetheme.css';
 

export default function Theme2() {


  return (
    <PublicLayout>
  
      {/* <HomeIntro /> */}
      <HomeIntroRedTheme/>

    </PublicLayout>
  );
}
