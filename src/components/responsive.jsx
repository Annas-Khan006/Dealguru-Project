import React from "react";
import Smallcard from "./smallcard";

const Responsive = () => {
  return (
    <div>
      <Smallcard />
      <div className="grid grid-cols-7 gap-4 py-4 px-4">
        <div className="bg-white h-[300px] w-full rounded-lg col-span-7 xl:col-span-5 hidden md:block px-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <a href="#">
                <img
                  className="w-[250px] my-10 rounded-l-lg"
                  src="/src/assets/bottles.jpg"
                  alt="Bottles"
                />
              </a>
            </div>
            <div className="pl-[20px] pt-5 w-full">
              <div className="flex flex-grow items-start">
                <div className="flex-grow">
                  <a href="#">
                    <h1 className="font-bold text-black text-xl">
                      Tävling - 5 personer vinner varsin läsk!
                    </h1>
                  </a>
                </div>
                <div className="flex flex-col ml-auto items-end">
                  <span className="font-semibold text-black text-base">
                    Bra deal? Rösta här:
                  </span>
                  <div className="mt-2 flex gap-1">
                    <div className="flex h-[40px] w-[45px] items-center justify-center rounded-md border border-[#0367DD] bg-[#fff]">
                      <span className="font-semibold text-black">80</span>
                    </div>
                    <a href="#">
                      <div className="flex h-[40px] w-[45px] items-center justify-center rounded-md border bg-gray-200">
                        <img src="/src/assets/heart.svg" alt="Heart" />
                      </div>
                    </a>
                    <a href="#">
                      <div className="flex h-[40px] w-[45px] items-center justify-center rounded-md border bg-gray-200">
                        <img src="/src/assets/thumb.svg" alt="Thumb" />
                      </div>
                    </a>
                    <a href="#">
                      <div className="flex h-[40px] w-[45px] items-center justify-center rounded-md border bg-gray-200">
                        <img src="/src/assets/dislike.svg" alt="Dislike" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex pt-3">
                <a href="#">
                  <img
                    className="rounded-full w-[30px]"
                    src="/src/assets/boy.png"
                    alt=""
                  />
                </a>
                <a href="#">
                  <h4 className="font-medium text-black text-sm pl-2 pt-1">
                    Malin
                  </h4>
                </a>
                <a href="#">
                  <h2 className="text-[#637381] text-sm pl-2 pt-1">
                    Upplagd för 21 timmar sedan
                  </h2>
                </a>
              </div>

              <div className="pt-3">
                <h3 className="font-bold text-black">Var med och tävla! 🥰</h3>
                <h3 className="font-bold text-[#0067e1] pt-3">Tävlingar</h3>
              </div>
              <div className="pt-10 flex">
                <a href="#">
                  <div className="flex h-[40px] w-[60px] items-center justify-center gap-3 rounded-md bg-gray-100">
                    <img
                      className="inline-block"
                      src="/src/assets/comments.svg"
                      alt="Comment"
                    />
                    <span className="font-sans text-[#1B273899]">0</span>
                  </div>
                </a>
                <div className="pl-2">
                  <a href="#">
                    <span className="flex h-[40px] w-[40px] rounded-md bg-gray-100">
                      <img src="/src/assets/list.svg" alt="List" />
                    </span>
                  </a>
                </div>
                <div className="ml-auto">
                  <a href="#">
                    <div className="flex h-[42px] w-[300px] items-center justify-center rounded-md border bg-[#0067e1]">
                      <span className="text-base font-medium text-[#fff]">
                        Gå direkt till dealen
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white h-full w-full rounded-lg xl:col-span-2 xl:block hidden">
          <div className="py-2">
            <div className="pt-4 px-4 flex items-start">
              <a href="#">
                <img
                  className="min-w-[65px] w-[65px] min-h-[65px] h-[65px]"
                  src="/src/assets/cable.jpg"
                  alt="Cable"
                />
              </a>
              <div className="flex-grow pl-4 max-w-[calc(100%_-_80px)]">
                <a href="#">
                  <p className="text-black font-normal whitespace-nowrap overflow-hidden text-ellipsis">
                    2-Pack - iPhone Laddare Snabbladdare - Adapter + Kabel
                  </p>
                </a>
                <div className="flex pt-2">
                  <h2 className="font-normal text-black pr-2 whitespace-nowrap overflow-hidden text-ellipsis">
                    169 kr
                  </h2>
                  <div className="border border-r border-gray-200"></div>
                  <a href="#">
                    <h2 className="font-normal text-black pl-2 pr-2 whitespace-nowrap overflow-hidden text-ellipsis">
                      Electronik
                    </h2>
                  </a>
                  <div className="border border-r border-gray-200"></div>
                  <img
                    className="pl-2"
                    src="/src/assets/smallthumb.svg"
                    alt="Thumb"
                  />
                  <h2 className="font-normal text-[#637381] pl-2">208</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="border-b border-gray-200 mx-4"></div>
          <div className="py-2">
            <div className="pt-4 px-4 flex items-start">
              <a href="#">
                <img
                  className="min-w-[65px] w-[65px] max-w-full min-h-[65px] h-[65px] rounded-lg"
                  src="/src/assets/couple.jpg"
                  alt="Couple"
                />
              </a>
              <div className="flex-grow pl-4 max-w-[calc(100%_-_80px)]">
                <a href="#">
                  <p className="text-black font-normal whitespace-nowrap overflow-hidden text-ellipsis">
                    Tivoli Köpenhamn - 23% rabatt på paket + 20% på
                    entréavgiften
                  </p>
                </a>
                <div className="flex pt-2">
                  <h2 className="font-normal text-black pr-2 whitespace-nowrap overflow-hidden text-ellipsis">
                    Tivoli Köpenhamn
                  </h2>
                  <div className="border border-r border-gray-200"></div>
                  <img
                    className="pl-2"
                    src="/src/assets/smallthumb.svg"
                    alt="Thumb"
                  />
                  <h2 className="font-normal text-[#637381] pl-2">131</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="border-b border-gray-200 mx-4"></div>
          <div className="py-2">
            <div className="pt-4 px-4 flex items-start">
              <a href="#">
                <img
                  className="min-w-[65px] w-[65px] min-h-[65px] h-[65px] rounded-lg"
                  src="/src/assets/1hg.jpg"
                  alt="1hg"
                />
              </a>
              <div className="flex-grow pl-4 max-w-[calc(100%_-_80px)]">
                <a href="#">
                  <p className="text-black font-normal whitespace-nowrap overflow-hidden text-ellipsis">
                    Hemmakväll - få 1 hg gratis lösgodis!
                  </p>
                </a>
                <div className="flex pt-2">
                  <h2 className="font-normal text-black pr-2 whitespace-nowrap overflow-hidden text-ellipsis">
                    Godis
                  </h2>
                  <div className="border border-r border-gray-200"></div>
                  <img
                    className="pl-2"
                    src="/src/assets/smallthumb.svg"
                    alt="Thumb"
                  />
                  <h2 className="font-normal text-[#637381] pl-2">80</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="border-b border-gray-200 mx-4"></div>
          <div className="py-2">
            <div className="pt-4 px-4 flex items-start">
              <a href="#">
                <img
                  className="min-w-[65px] w-[65px] min-h-[65px] h-[65px]"
                  src="/src/assets/hen.jpg"
                  alt="Hen"
                />
              </a>
              <div className="flex-grow pl-4 max-w-[calc(100%_-_80px)]">
                <a href="#">
                  <p className="text-black font-normal whitespace-nowrap overflow-hidden text-ellipsis">
                    IKEA 25 % på alla varmrätter på vardagar
                  </p>
                </a>
                <div className="flex pt-2">
                  <h2 className="font-normal text-black pr-2 whitespace-nowrap overflow-hidden text-ellipsis">
                    IKEA
                  </h2>
                  <div className="border border-r border-gray-200"></div>
                  <img
                    className="pl-2"
                    src="/src/assets/smallthumb.svg"
                    alt="Thumb"
                  />
                  <h2 className="font-normal text-[#637381] pl-2">52</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Responsive;
