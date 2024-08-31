import React from "react";
import { useState } from "react";
import Two from "../components/two";
import Filter from "../components/filter";
import Responsive from "../components/responsive";
import Top from "../components/top";
import Profile from "../components/profile";
import Foot from "../components/foot";
import OpenPageButton2 from "./OpenPageButton.2";
import Setting2 from "./setting-2";
import Openpagebutton3 from "./OpenPageButton.3";
import Setting3 from "./setting-3";
import OpenPageButton4 from "./OpenPageButton.4";
import Setting4 from "./setting-4";
import OpenPageButton5 from "./OpenPageButton.5";
import Installor from "./installor";
import Onclickpage from "../components/onclickpage";
import Copy from "../components/copy";
import Responsive2 from "../components/responsive-2";

function HomePage() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="wrapper bg-gray-100">
        <Top />
        {/* <div className="py-4 px-4">
          <div className="border rounded-md bg-white px-4 sm:px-8 w-full max-w-[730px] mx-auto flex-col block md:hidden">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <img src="/src/assets/handhake.png" alt="" className="pt-5" />
              <div className="flex flex-col justify-between sm:pl-3">
                <h1 className="font-bold text-black text-base sm:text-lg mb-2">
                  Hej!
                </h1>
                <p className="text-[#637381] text-xs sm:text-sm font-normal">
                  Logga in eller bli medlem i Sveriges största shopping
                  community idag!
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-2 mt-4 w-full pb-4">
              <a
                href="#"
                className="text-white font-bold text-xs sm:text-sm border bg-blue-600 rounded-md flex-grow h-[40px] sm:h-[38px] flex items-center justify-center"
              >
                Logga in
              </a>
              <a
                href="#"
                className="border border-blue-600 text-blue-600 text-xs sm:text-sm font-bold rounded-md flex-grow h-[40px] sm:h-[38px] flex items-center justify-center"
              >
                Gå med gratis
              </a>
            </div>
          </div>
        </div> */}

        {/* <Filter /> */}
        <Responsive />
        {/* <Responsive2 /> */}
        {/* this is test */}
        {/* <Profile /> */}
        {/* <OpenPageButton2 /> */}
        {/* <Setting2 /> */}
        {/* <Openpagebutton3 /> */}
        {/* <Setting3 /> */}
        {/* <OpenPageButton4 /> */}
        {/* <Setting4 /> */}
        {/* <OpenPageButton5 /> */}
        {/* <Installor /> */}
        {/* <Onclickpage /> */}
        {/* <Two /> */}
      </div>
      <Foot />
      {/* <Copy /> */}
    </>
  );
}

export default HomePage;
