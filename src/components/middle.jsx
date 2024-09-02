import React from "react";

const Middle = () => {
  return (
    <div className="px-4 pt-4">
      <div className="col-span-7 hidden md:block">
      <div className="col-span-5 flex justify-between">
        <div className="">
          <h1 className="font-bold text-[1.3rem] text-[#1B2738]">
            Bästa dealsen just nu
          </h1>
        </div>
        <div className="flex">
        <div className="bg-white h-[40px] rounded-md p-[5px] justify-end font-medium">
        <ul className="flex gap-1">
              <a href="#">
                <li className="bg-gray-100 text-[#0367DD] p-1 rounded-md text-sm">
                  Utvalda favoriter
                </li>
              </a>
              <a href="#">
                <li className="p-1 rounded-md text-sm">Nyadeals</li>
              </a>
              <a href="#">
                <li className="p-1 rounded-md text-sm">Högst betyg</li>
              </a>
            </ul>
        </div>
        <a className="ml-1" href="#">
          <div className="bg-white border rounded-md">
            <img className="p-2" src="/src/assets/ham-2.svg" alt="" />
          </div>
        </a>
        </div>
      </div>
      <div className="col-span-2">
       <h1 className="text-black text-2xl font-bold text-nowrap">
       Utvalda favoriter
       </h1>
      </div>
    </div>
    <div className="block md:hidden">
        <div className="pt-2">
          <h1 className="font-bold text-[1.3rem] text-[#1B2738]">
            Bästa dealsen just nu
          </h1>
        </div>
        <div className="py-2">
        <div className="bg-white rounded-md w-full block md:hidden px-1">
          <ul className="flex justify-between">
            <a href="#">
              <li className="bg-gray-100 w-[100px] text-[#0367DD] text-center font-semibold p-[7px] m-[4px] rounded-md text-sm">
                Standard
              </li>
            </a>
            <a href="#">
              <li className="p-[7px] m-[4px] rounded-md text-sm font-semibold">
                Nyast
              </li>
            </a>
            <a href="#">
              <li className="p-[7px] m-[4px] rounded-md text-sm font-semibold">
                Popularitet
              </li>
            </a>
          </ul>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Middle;
