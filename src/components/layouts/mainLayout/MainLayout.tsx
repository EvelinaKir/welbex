import React from "react";
import s from "./main.module.scss";
import Header from "@/components/layouts/mainLayout/header/Header";
import Footer from "@/components/layouts/mainLayout/footer/Footer";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main
      className={`text-primary flex w-full font-montserrant text-[10px] relative ${s.background}`}
    >
      <div className={`container flex flex-col h-screen`}>
        <Header />
        <div className={`my-auto  px-[14px] pb-[20px] ${s.contentBackground}`}>
          {children}
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default MainLayout;
