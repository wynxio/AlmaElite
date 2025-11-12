"use client";

import { useEffect, useState } from "react";
import HeaderHome from "./components/HeaderHome";
import HomeIntro from "./components/HomeIntro";
import { PublicLayout } from "./components/PublicLayout";
import Link from "next/link";

export default function Home() {


  return (
    <PublicLayout>
  
      <HomeIntro />

    </PublicLayout>
  );
}
