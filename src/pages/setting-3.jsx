import React from 'react';

const Setting3 = () => {
    return (
        <div className="block md:hidden px-4 py-4">
        <div className="pl-6">
          <div className="flex items-center pl-6 justify-between">
            <h3 className="font-normal text-[23px]">Sparade erbjudanden</h3>
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
                  <h2 className="text-gray-500 text-sm">Datum tillagt</h2>
                  <h2 className="text-gray-500 text-sm">Spara / Spara inte</h2>
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
    );
}

export default Setting3;
