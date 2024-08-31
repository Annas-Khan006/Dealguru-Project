import React from 'react';

const Copy = () => {
  return (
    <div>
      <div>
            <div class="border-t-2 pt-5 pb-16 mb-2 h-[40px]">
          <div class="text-center mx-auto max-w-[1920px] px-4 flex justify-between items-center">
            <p class="text-sm font-normal flex items-center mt-3 ml-8">
              Copyright 2023-2024 DealGuru AB
            </p>
            <div className="hidden md:block">
            <a href="#">
              <span class="pl-4 bg-[#1B2738] text-white rounded-3xl font-sans text-sm font-bold flex items-center h-[40px] w-[120px]">
                Till toppen
                <img className="pl-1" src="/src/assets/top.svg" alt="Top" />
              </span>
            </a>
            </div>
            <div class="footer-links text pt-2 flex mr-8">
              <span class="ml-6 text-sm font-semibold leading-5 text-[#212121]">
                <a
                  class="font-sans text-sm font-normal leading-5"
                  hrefLang="sv-se"
                >
                  Integritetspolicy
                </a>
              </span>
              <span class="ml-6 text-sm font-semibold leading-5 text-[#212121]">
                <a
                  class="font-sans text-sm font-normal leading-5"
                  hrefLang="#"
                >
                  Användarvillkor
                </a>
              </span>
            </div>
          </div>
        </div>
        </div>
    </div>
  );
}

export default Copy;
