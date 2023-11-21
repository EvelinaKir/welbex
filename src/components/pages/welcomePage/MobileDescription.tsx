import React from "react";
import { MainPageDetails } from "@/services/constants/welcomePage/details";

const MobileDescription = () => {
  return (
    <div className={"grid grid-cols-2 font-montserrant text-xs gap-y-3.5"}>
      {MainPageDetails.mobile.map((item, index) => (
        <div
          key={index}
          className={"flex flex-row uppercase gap-[5px] md:hidden"}
        >
          <span
            className={
              "text-[transparent] bg-clip-text text-transparent bg-gradient-to-r primary-gradient-text"
            }
          >
            {"—"}
          </span>
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
};

export default MobileDescription;
