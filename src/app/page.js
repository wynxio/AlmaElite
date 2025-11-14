"use client";

import HomeIntro from "./components/HomeIntro";
import { PublicLayout } from "./components/PublicLayout";
import './greentheme.css';
 

export default function Home() {


  return (
    <PublicLayout>
  
      <HomeIntro />

    </PublicLayout>
  );
}
