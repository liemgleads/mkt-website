// src/components/Banner.tsx

import { Button } from "antd";
import { useTranslations } from "next-intl";
import Image from "next/image";

// It's also good practice to define your props with a type or interface
type BannerProps = {
  title: string;
  desc: string;
  imgSrc: string;
  reverse?: boolean;
  bgSrc?: string;
};

// Use the defined type for your props
export function Banner({
  title,
  desc,
  imgSrc,
  reverse = false,
  bgSrc = "",
}: BannerProps) {
  const t = useTranslations();
  return (
    <section
      className={`relative w-full bg-white py-[40px] lg:py-[80px] px-4 `}
      style={
        bgSrc
          ? {
              backgroundImage: `url(${bgSrc})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPositionY: "center",
            }
          : {}
      }
    >
      <div
        className={`absolute w-full h-full top-0 left-0 ${
          bgSrc ? "opacity-20 bg-black" : ""
        }`}
      ></div>
      <div className="mx-auto xl:max-w-[1000px]">
        <div
          className={`w-full flex gap-2 ${
            reverse ? "flex-row-reverse" : ""
          } justify-between items-center my-[10px]`}
        >
          <div className="flex flex-col gap-8 w-[490px] z-3">
            <div
              className={`font-black text-[36px] ${
                bgSrc ? "text-white" : ""
              }`}
            >
              {t(title)}
            </div>
            <div className="font-medium text-[20px]">{t(desc)}</div>
            <div className="flex gap-4">
              <Button
                className=" !bg-[#0A2E73] !text-white hover:!bg-white hover:!text-[#0A2E73] hover:!border-[#0A2E73]"
                size="large"
              >
                {t("Hero.joinNow")}
              </Button>
              <Button
                size="large"
                className=" bg-[#0A2E73] !text-white hover:!bg-white hover:!text-[#0A2E73] hover:!border-[#0A2E73]"
              >
                {t("Hero.register")}
              </Button>
            </div>
          </div>
          <div
            className={`w-[540px] hidden sm:block ${
              bgSrc ? "opacity-0" : ""
            }`}
          >
            <Image
              src={imgSrc}
              alt="banner-image"
              width={649}
              height={450}
              className="mx-auto rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}