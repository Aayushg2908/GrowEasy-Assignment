import { Dispatch, SetStateAction } from "react";
import { AdBanner } from "@/types";
import Image from "next/image";
import EditBannerTemplate from "./EditBannerTemplate";

export const TemplatePostions: {
  [key: string]: {
    title: string;
    description: string;
    image: string;
    cta: string;
  };
} = {
  "https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/5/square.png":
    {
      title:
        "absolute text-white text-2xl font-bold top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center",
      description:
        "mt-3 absolute text-white text-sm top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center",
      image:
        "absolute bottom-14 w-[280px] h-[140px] left-1/2 transform -translate-x-1/2",
      cta: "absolute font-semibold text-lg bottom-8 translate-x-16",
    },
  "https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/9/square.png":
    {
      title:
        "max-w-[140px] absolute text-white text-2xl font-bold top-20 transform translate-x-3 -translate-y-1/2",
      description:
        "max-w-[140px] absolute text-white text-sm top-40 transform translate-x-3 -translate-y-1/2",
      image: "absolute top-24 size-[150px] right-20 rounded-full",
      cta: "absolute bg-white text-blue-500 p-2 rounded-lg bottom-10 translate-x-3 text-sm",
    },
  "https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/1/square.png":
    {
      title:
        "absolute text-2xl font-bold top-16 transform translate-x-3 -translate-y-1/2",
      description:
        "max-w-[150px] absolute text-sm top-36 transform translate-x-3 -translate-y-1/2",
      image:
        "absolute top-24 size-[260px] -right-14 translate-y-9 rounded-full",
      cta: "absolute bg-black text-yellow-500 p-3 text-lg rounded-lg bottom-10 translate-x-5 text-sm",
    },
  "https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/15/square.png":
    {
      title:
        "absolute text-white text-2xl font-bold top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
      description:
        "absolute text-black text-sm top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-16",
      image:
        "absolute top-1/2 translate-x-10 -translate-y-1 rounded-full size-[150px]",
      cta: "",
    },
};

const BannerImageComp = ({
  banner,
  setBanners,
  index,
}: {
  banner: AdBanner;
  setBanners: Dispatch<SetStateAction<AdBanner[]>>;
  index: number;
}) => {
  return (
    <div className="relative w-full h-[350px] mb-2 overflow-hidden">
      <Image
        src={banner.template}
        alt="banner-template"
        className="absolute w-full h-full -z-10"
        width={400}
        height={500}
      />
      <h1 className={TemplatePostions[banner.template].title}>
        {banner.title}
      </h1>
      <p className={TemplatePostions[banner.template].description}>
        {banner.description}
      </p>
      <Image
        src={banner.image}
        alt="banner-image"
        width={300}
        height={300}
        className={TemplatePostions[banner.template].image}
      />
      <div className={TemplatePostions[banner.template].cta}>{banner.cta}</div>
      <EditBannerTemplate
        banner={banner}
        setBanners={setBanners}
        index={index}
      />
    </div>
  );
};

export default BannerImageComp;
