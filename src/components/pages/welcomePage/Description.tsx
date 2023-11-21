import React from "react";

const Description = () => {
  return (
    <div
      className={
        "grid grid-cols-1 align-top gap-y-[30px] max-sm:gap-y-[20px] justify-items-start max-sm:hidden"
      }
    >
      <div className={"grid grid-cols-[130px_140px] gap-x-[31px]"}>
        <div className={"grid grid-cols-1 max-sm:hidden"}>
          <span className={"font-medium uppercase "}>{"Виджеты"}</span>
          <span className={"font-montserrant text-base"}>
            {"30 готовых решений"}
          </span>
        </div>
        <div className={"grid grid-cols-1"}>
          <span className={"font-medium uppercase"}>{"Dashboard"}</span>
          <span className={"font-montserrant text-base"}>
            {"с показателями вашего бизнеса"}
          </span>
        </div>
      </div>
      <div className={"grid grid-cols-[130px_140px] gap-x-[31px]"}>
        <div className={"grid grid-cols-1"}>
          <span className={"font-medium uppercase"}>{"Skype Аудит"}</span>
          <span className={"font-montserrant text-base"}>
            {"отдела продаж и CRM системы"}
          </span>
        </div>
        <div className={"grid grid-cols-1"}>
          <span className={"font-medium uppercase"}>{"35 дней"}</span>
          <span className={"font-montserrant text-base"}>
            {"использования CRM"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Description;
