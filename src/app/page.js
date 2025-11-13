"use client";

import { useEffect, useState } from "react";

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
