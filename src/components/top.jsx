import React from "react";

const Top = () => {
  return (
    <div class="head">
      <div class="w-full  max-w-full bg-[#0067e1] px-[18px] py-[5px] max-lg:block">
        <h2 class="text-center font-bold text-white">
          DealGuru - Just nu 12590 deals och rabatter
        </h2>
      </div>
      <div class="bg-white flex items-center justify-between px-4 py-4">
        <div class="flex items-center mr-8">
          <div className="md:block hidden">
            <div class="rounded-md border h-[35px] w-[35px] border-gray-400 flex items-center justify-center">
              <img src="/src/assets/hamline.svg" alt="Hameline" />
            </div>
          </div>
          <div class="pl-2">
            <img
              class="max-w-[160px] h-full"
              src="/src/assets/logo.jpg"
              alt="Logo"
            />
          </div>
        </div>
        <div class="flex-grow relative items-center max-w-[730px] min-w-[200px] mx-4 lg:mx-8 hidden lg:flex">
          <input
            class="h-[40px] w-full rounded-md border border-gray-300 pl-4 pr-[80px] text-sm"
            placeholder="Skriv det du söker..."
          />
          <a
            class="bg-[#0067e1] text-sm text-white py-[8px] px-[15px] absolute right-0 h-[34px] rounded-md mr-[4px]"
            href="#"
          >
            Sök
          </a>
        </div>
        <div class="flex items-center gap-2">
          <a
            href="#"
            class="flex h-[40px] items-center justify-center text-nowrap rounded-md bg-[#0067e1] px-5 text-sm font-bold text-white"
          >
            Gå med gratis
          </a>
          <a
            href="#"
            class="flex h-[40px] items-center justify-center text-nowrap rounded-md border border-[#0067e1] px-5 text-sm font-bold text-[#0067e1]"
          >
            Logga in
          </a>
        </div>
      </div>
    </div>
  );
};

export default Top;
