import React from "react";
import Smallcard from "./smallcard";

const Dealcard = () => {
  return (
    <div>
      <Smallcard />
      <div className="grid grid-cols-7 gap-4 pb-4 px-4">
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
              <div className="flex flex-grow">
                <div className="flex-grow">
                  <a href="#">
                    <h1 className="font-bold text-black text-xl">
                      Tävling - 5 personer vinner varsin läsk!
                    </h1>
                  </a>
                </div>
                <div className="ml-auto flex items-center text-nowrap">
                  <span className="font-semibold text-black text-base pt-1">
                    Bra deal? Rösta här:
                  </span>
                </div>
              </div>

              <div className="pt-4 flex">
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
                <div className="ml-auto flex gap-1">
                  <div className="mb-2 flex h-[40px] w-[45px] items-center justify-center rounded-md border border-[#0367DD] bg-[#fff]">
                    <span className="font-semibold text-black">80</span>
                  </div>
                  <a href="#">
                    <div className="mb-2 flex h-[40px] w-[45px] items-center justify-center rounded-md border bg-gray-200">
                      <img src="/src/assets/heart.svg" alt="Heart" />
                    </div>
                  </a>
                  <a href="#">
                    <div className="mb-2 flex h-[40px] w-[45px] items-center justify-center rounded-md border bg-gray-200">
                      <img src="/src/assets/thumb.svg" alt="Thumb" />
                    </div>
                  </a>
                  <a href="#">
                    <div className="mb-2 flex h-[40px] w-[45px] items-center justify-center rounded-md border bg-gray-200">
                      <img src="/src/assets/dislike.svg" alt="Dislike" />
                    </div>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-black">Var med och tävla! 🥰</h3>
                <h3 className="font-bold text-[#0067e1] pt-1">Tävlingar</h3>
              </div>
              <div className="pt-8 flex">
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
      </div>
    </div>
  );
};

export default Dealcard;
