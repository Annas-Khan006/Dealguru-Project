import React from 'react';

const Middle = () => {
    return (
        <div className="grid-cols-7 flex px-4 pt-4">
            <div className="col-span-5 flex">
          <h1 className="font-bold text-[1.3rem] text-[#1B2738]">
              Bästa dealsen just nu
            </h1>
            <div className="bg-white rounded-md p-[5px] ml-auto font-medium">
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
        <div className="col-span-2">
            Lorem ipsum dolor sit.
        </div>
        </div>
    );
}

export default Middle;
