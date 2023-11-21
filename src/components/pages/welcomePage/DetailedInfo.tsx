import React from "react";
import Description from "@/components/pages/welcomePage/Description";
import MobileDescription from "@/components/pages/welcomePage/MobileDescription";

const DetailedInfo = () => {
  return (
    <div
      className={
        "grid grid-cols-1 gap-[40px] max-sm:gap-y-[20px] my-auto font-inter text-lg text-right  max-md:text-start  md:ml-auto max-sm:mb-[55px]"
      }
    >
      <h2 className={"md:font-bold ml-auto max-md:ml-0 text-lg"}>
        {"Вместе с "}
        <span
          className={
            "md:uppercase text-[transparent] font-bold  bg-clip-text text-transparent bg-gradient-to-r primary-gradient-text"
          }
        >
          {"бесплатной"}
        </span>
        <br />
        <span
          className={
            "md:uppercase text-[transparent] font-bold  bg-clip-text text-transparent bg-gradient-to-r primary-gradient-text"
          }
        >
          {"консультацией"}
        </span>
        {" мы дарим:"}
      </h2>

      <Description />
      <MobileDescription />

      <button
        className={
          "mt-[21px] px-[34px] py-[21px] bg-blue font-inter font-medium text-base max-sm:hidden"
        }
      >
        {"Получить консультацию"}
      </button>
    </div>
  );
};

export default DetailedInfo;
