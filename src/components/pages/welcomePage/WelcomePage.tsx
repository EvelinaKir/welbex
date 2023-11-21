import React from "react";
import DetailedInfo from "@/components/pages/welcomePage/DetailedInfo";

const WelcomePage = () => {
  return (
    <div
      className={
        "grid grid-cols-2 max-sm:grid-cols-1  max-md:gap-y-[45px] max-md:mt-[40px]"
      }
    >
      <div className={"flex flex-col font-inter"}>
        <h1
          className={
            "text-5xl mb-[15px] max-w-[362px] text-xxl leading-[58px] max-md:text-xl"
          }
        >
          {"Зарабатывайте больше"}
          <br />
          <span
            className={
              "text-[transparent] font-black text-5xl bg-clip-text text-transparent bg-gradient-to-r primary-gradient-title"
            }
          >
            {" с WELBEX"}
          </span>
        </h1>
        <h5 className={"font-montserrant font-normal text-lg max-w-[275px]"}>
          {"Развиваем и контролируем продажи за вас"}
        </h5>
      </div>
      <DetailedInfo />
    </div>
  );
};

export default WelcomePage;
