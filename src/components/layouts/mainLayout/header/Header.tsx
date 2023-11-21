import React from "react";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import IconButton from "@/components/buttons/iconButton/IconButton";
import { ELogo } from "@/services/enums/logo";
import getLogo from "@/services/helpers/getLogo";

const Header = () => {
  return (
    <header>
      <nav
        className={
          "flex px-[14px]  gap-[52px] items-start md:pt-[46px] max-md:bg-primary max-md:py-3 max-md:uppercase"
        }
      >
        <a
          href={"/"}
          className={
            "flex-col py-2 items-start max-w-[140px] gap-2.5 hidden md:flex"
          }
        >
          <Image width={140} height={24} src={logo.src} alt={"welbex logo"} />
          <span className={"font-light text-xxs"}>
            {"крупный интегратор CRM в Росcии и ещё 8 странах"}
          </span>
        </a>
        <div
          className={
            "flex justify-between py-2 items-start font-inter text-base max-md:text-sm gap-x-[30px] max-md:w-full max-md:gap-0"
          }
        >
          <a className={"nav-link"} href={"/"}>
            {"Услуги"}
          </a>
          <a className={"nav-link"} href={"/"}>
            {"Виджеты"}
          </a>
          <a className={"nav-link"} href={"/"}>
            {"Интеграции"}
          </a>
          <a className={"nav-link"} href={"/"}>
            {"Кейсы"}
          </a>
          <a className={"nav-link hidden lg:block"} href={"/"}>
            {"Сертификаты"}
          </a>
        </div>
        <div
          className={
            "md:flex sm:flex-col xl:flex-row hidden justify-between gap-x-[47px] items-start ml-auto"
          }
        >
          <a className={"font-inter flex-nowrap text-base py-2"} href={"/"}>
            {"+7 555 555-55-55"}
          </a>
          <div
            className={
              "flex justify-between items-start mx-auto font-inter text-base gap-x-[16px]"
            }
          >
            {Object.values(ELogo).map((s) => (
              <IconButton src={getLogo(s)} alt={s} key={s} />
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
