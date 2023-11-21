import React from "react";
import { FooterLists } from "@/services/constants/footer/lists";
import { ELogo } from "@/services/enums/logo";
import IconButton from "@/components/buttons/iconButton/IconButton";
import getLogo from "@/services/helpers/getLogo";

const Footer = () => {
  return (
    <div
      className={
        "grid gap-[33px] md:pb-[20px] max-sm:pb-[60px] max-sm:pt-[45px] px-[14px]"
      }
    >
      <div
        className={
          " grid grid-cols-[0.5fr_1fr_1fr] max-md:gap-y-[30px] max-md:grid-cols-1 items-start font-inter text-base"
        }
      >
        <div className={"grid gap-y-5"}>
          <span
            className={"uppercase text-dark text-md max-sm:text-sm font-bold"}
          >
            {"О компании"}
          </span>
          <div className={"grid gap-y-2.5"}>
            {FooterLists.about.map((item, i) => (
              <a key={i} href={item.link}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <div className={"grid gap-y-5"}>
          <span
            className={"uppercase text-dark text-md max-sm:text-sm font-bold"}
          >
            {"Меню"}
          </span>
          <div className={"grid grid-cols-2 gap-y-2.5 max-sm:hidden"}>
            {FooterLists.menu.map((item, i) => (
              <a key={i} href={item.link}>
                {item.label}
              </a>
            ))}
          </div>
          <div className={"grid grid-cols-2 gap-y-2.5 gap-x-3  md:hidden"}>
            {FooterLists.mobileMenu.map((item, i) => (
              <a key={i} href={item.link}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <div className={"grid md:text-right md:content-end   gap-y-5 "}>
          <span
            className={"uppercase text-dark text-md max-sm:text-sm font-bold"}
          >
            {"Контакты"}
          </span>
          <div className={"grid md:gap-y-2.5"}>
            <a className={"font-inter text-base py-2"} href={"/"}>
              {"+7 555 555-55-55"}
            </a>
            <div
              className={
                "flex md:justify-end font-inter text-base space-x-[5px]"
              }
            >
              {Object.values(ELogo).map((s) => (
                <IconButton src={getLogo(s)} alt={s} key={s} />
              ))}
            </div>
            <span className={"font-inter text-base font-normal py-2"}>
              {"Москва, Путевой проезд 3с1, к 902"}
            </span>
          </div>
        </div>
      </div>
      <div className={"grid text-xsPC md:justify-end md:text-end"}>
        <span>{"©WELBEX 2022. Все права защищены."}</span>
        <a href={"/"} className={"underline"} target={"_blank"}>
          {"Политика конфиденциальности"}
        </a>
      </div>
    </div>
  );
};

export default Footer;
