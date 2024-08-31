import React from "react";

const Filter = () => {
  return (
    <div className="border-gray-300 rounded-lg">
      <div className="flex">
        <div className="flex items-center">
          <div className=" w-[300px]">
            <h1 className="font-sans non-italic font-bold text-[1.3rem] text-[#1B2738]">
              Bästa dealsen just nu
            </h1>
          </div>
          <div className="bg-white rounded-md p-[5px] ml-[350px] font-medium">
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
        </div>
        <a className="ml-1" href="#">
          <div className="bg-white border rounded-md">
            <img className="p-2" src="/src/assets/ham-2.svg" alt="" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Filter;
