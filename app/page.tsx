"use client";

import { useState } from "react";
import adBanners from "./ad-banners.json";
import { AdBanner } from "@/types";
import BannerImageComp from "@/components/BannerImageComp";

export default function Home() {
  const [banners, setBanners] = useState<AdBanner[]>(adBanners);

  return (
    <main className="mx-auto max-w-[800px] w-full my-5 h-full grid grid-cols-2 gap-4 place-items-center">
      {banners.map((banner, index) => (
        <BannerImageComp
          key={banner.title}
          banner={banner}
          setBanners={setBanners}
          index={index}
        />
      ))}
    </main>
  );
}
