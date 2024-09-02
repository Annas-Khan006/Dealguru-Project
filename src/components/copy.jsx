import React from "react";

const Copy = () => {
  return (
    <div class="border-t-2 pt-4 pb-2 h-auto">
      <div class="text-center mx-auto max-w-[1920px] px-4 flex justify-between items-center">
        <div className="hidden xs:block">
          <p class="text-sm font-normal flex items-center">
            Copyright 2023-2024 DealGuru AB
          </p>
        </div>
        <div className="hidden md:block">
          <a href="#">
            <span class="pl-4 bg-[#1B2738] text-white rounded-3xl text-sm font-bold flex items-center h-[40px] w-[120px]">
              Till toppen
              <img className="pl-1" src="/src/assets/top.svg" alt="Top" />
            </span>
          </a>
        </div>
        <div class="flex">
          <div className="hidden xs:block">
            <span class="text-sm font-semibold text-[#212121]">
              <a class="text-sm font-normal" hrefLang="#">
                Integritetspolicy
              </a>
            </span>
            <span class="ml-4 text-sm font-semibold text-[#212121]">
              <a class="text-sm font-normal" hrefLang="#">
                Användarvillkor
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center h-full text-center">
        <p className="text-sm font-normal block xs:hidden">
          Copyright 2023-2024 DealGuru AB
        </p>
        <div className="flex mt-2">
          <span className="text-sm font-semibold text-[#212121] block xs:hidden">
            <a className="text-sm font-normal" hrefLang="#">
              Integritetspolicy
            </a>
          </span>
          <span className="ml-4 text-sm font-semibold text-[#212121] block xs:hidden">
            <a className="text-sm font-normal" hrefLang="#">
              Användarvillkor
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Copy;
