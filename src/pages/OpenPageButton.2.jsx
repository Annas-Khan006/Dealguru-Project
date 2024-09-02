import React from "react";
import Top from "../components/top";
import Foot from "../components/foot";
import Copy from "../components/copy";

const OpenPageButton2 = () => {
  return (
    <div>
      <Top />
    <div className="hidden md:block">
      <div className="flex px-4 py-4 bg-gray-200 h-[1000px]">
        <div className="flex flex-col">
          <a href="#">
            <div className="border rounded-md bg-white w-[250px] h-[40px] flex items-center mb-[6px]">
              <img className="pl-5" src="/src/assets/kinto.svg" alt="kinto" />
              <h3 className="pl-2 text-sm font-normal">Mitt konto</h3>
            </div>
          </a>
          <a href="#">
            <div className="border rounded-md bg-white w-[250px] h-[40px] flex items-center mb-[6px]">
              <img className="pl-5" src="/src/assets/deal.svg" alt="Deal" />
              <h3 className="pl-2 text-sm font-normal">Mina deals</h3>
            </div>
          </a>
          <a href="#">
            <div className="border rounded-md bg-white w-[250px] h-[40px] flex items-center mb-[6px]">
              <img className="pl-5" src="/src/assets/addto.svg" alt="Addto" />
              <h3 className="pl-2 text-sm font-normal">Sparade erbjudanden</h3>
            </div>
          </a>
          <a href="#">
            <div className="border rounded-md bg-white w-[250px] h-[40px] flex items-center mb-[6px]">
              <img className="pl-5" src="/src/assets/msg.svg" alt="Msg" />
              <h3 className="pl-2 text-sm font-normal">Mina diskussioner</h3>
            </div>
          </a>
          <a href="#">
            <div className="border rounded-md bg-white w-[250px] h-[40px] flex items-center mb-[6px]">
              <img
                className="pl-5"
                src="/src/assets/setting.svg"
                alt="Setting"
              />
              <h3 className="pl-2 text-sm font-normal">Inställningar</h3>
            </div>
          </a>
          <a href="#">
            <div className="border rounded-md bg-white w-[250px] h-[40px] flex items-center mb-[6px]">
              <img className="pl-5" src="/src/assets/logout.svg" alt="Logout" />
              <h3 className="pl-2 text-sm font-normal">Logga ut</h3>
            </div>
          </a>
        </div>
        <div className="pl-6 flex-grow">
          <div className="flex items-center pl-6 justify-between">
            <h3 className="font-normal text-[23px]">Mina Deals</h3>
            <a href="#">
              <div className="w-[200px] h-[40px] bg-[#0067e1] rounded-md flex justify-center items-center text-white font-medium">
                <h1 className="text-center">Skapa erbjudande</h1>
              </div>
            </a>
          </div>
          <div className="pt-7">
            <div className="border rounded-lg w-full h-[300px] bg-white">
              <div className="border bg-gray-50 h-[50px] mt-2 mx-4 rounded-md">
                <div className="w-full flex items-center pl-5 justify-between pt-3">
                  <div className="flex">
                    <div className="w-[20px] h-[20px] border border-black rounded-md"></div>
                    <h2 className="text-gray-500 text-sm pl-2">Alla</h2>
                  </div>
                  <h2 className="text-gray-500 text-sm">Titel/ID</h2>
                  <h2 className="text-gray-500 text-sm">Pris</h2>
                  <h2 className="text-gray-500 text-sm">Datum tillagt</h2>
                </div>
              </div>
              <div className="flex justify-center items-center h-[300px] bg-white rounded-lg">
                <div className="flex items-center">
                  <img src="/src/assets/box.svg" alt="Box" />
                  <div className="pl-4">
                    <p className="font-medium text-[20px]">Hoppsan!</p>
                    <span className="text-sm text-gray-500">
                      Det verkar som du inte har några erbjudanden ännu...
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="block md:hidden px-4 py-4">
        <div className="pl-6">
          <div className="flex items-center pl-6 justify-between">
            <h3 className="font-normal text-[23px]">Mina Deals</h3>
            <a href="#">
              <div className="w-[200px] h-[40px] bg-[#0067e1] rounded-md flex justify-center items-center text-white font-medium">
                <h1 className="text-center">Skapa erbjudande</h1>
              </div>
            </a>
          </div>
          <div className="py-4">
            <div className="border rounded-lg w-full h-[300px] bg-white">
              <div className="border bg-gray-50 h-[50px] mt-2 mx-4 rounded-md">
                <div className="justify-between w-full flex items-center pl-5 pt-3">
                  <div className="flex">
                    <div className="w-[20px] h-[20px] border border-black rounded-md"></div>
                    <h2 className="text-gray-500 text-sm">Alla</h2>
                  </div>
                  <h2 className="text-gray-500 text-sm">Titel/ID</h2>
                  <h2 className="text-gray-500 text-sm">Pris</h2>
                  <h2 className="text-gray-500 text-sm">Datum tillagt</h2>
                </div>
              </div>
              <div className="flex justify-center items-center h-[300px] bg-white rounded-lg">
                <div className="flex items-center">
                  <img src="/src/assets/box.svg" alt="Box" />
                  <div className="pl-4">
                    <p className="font-medium text-[20px]">Hoppsan!</p>
                    <span className="text-sm text-gray-500">
                      Det verkar som du inte har några erbjudanden ännu...
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
    <Foot />
    <Copy />
    </div>
  );
};

export default OpenPageButton2;
