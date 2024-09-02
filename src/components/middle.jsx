import React from "react";

const Middle = () => {
  return (
    <div className="px-4 pt-4">
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
