import React from 'react';

const Installor = () => {
    return (
        <div className="px-4 block md:hidden">
        <div className="pt-10">
          <div className="flex items-center">
            <h3 className="font-normal text-[23px]">Inställningar</h3>
          </div>
          <div className="pt-10">
            <div className="border bg-[#edede9] border-gray-400 rounded-full w-[150px] h-[150px] flex items-center justify-center mx-auto">
              <img
                className="h-[100px] w-[80px]"
                src="/src/assets/gold.png"
                alt="Gold"
              />
            </div>
          </div>
          <div className="pt-4">
            <a href="#">
              <div className="border bg-[#0067e1] w-full h-[50px] rounded-lg flex items-center justify-center">
                <h2 className="font-bold text-sm text-white">
                  Stylea din avatar
                </h2>
              </div>
            </a>
          </div>
        </div>
        <div className="flex-1">
          <div className="pt-20">
            <a href="#">
            <h3>Användarnamn</h3>
            </a>
            <div className="pt-2">
              <div className="border bg-gray-700 rounded-md pt-4 w-full h-[50px]">
                <h2 className="text-sm text-white pl-6">Annas Khan</h2>
              </div>
            </div>
          </div>
          <div className="pt-[20px]">
            <a href="#">
            <h3>Förnamn *</h3>
            </a>
            <div className="pt-2">
              <div className="border bg-white rounded-md pt-4 w-full h-[50px]">
                <h2 className="text-sm text-black pl-6">Annas</h2>
              </div>
            </div>
          </div>
          <div className="pt-[20px]">
            <a href="#">
            <h3>Efternamn *</h3>
            </a>
            <div className="pt-2">
              <div className="border bg-white rounded-md pt-4 w-full h-[50px]">
                <h2 className="text-sm text-black pl-6">Khan</h2>
              </div>
            </div>
          </div>
          <div className="pt-[20px]">
            <a href="#">
            <h3>E-post *</h3>
            </a>
            <div className="pt-2">
              <div className="border bg-white rounded-md pt-4 w-full h-[50px]">
                <h2 className="text-sm text-black pl-6">
                  khanannas006@gmail.com
                </h2>
              </div>
            </div>
          </div>
          <div className="pt-[20px]">
            <a href="#">
            <h3>Telefon</h3>
            </a>
            <div className="pt-2">
              <div className="border bg-white rounded-md pt-4 w-full h-[50px]">
                <h2 className="text-sm text-black pl-6">03039163657</h2>
              </div>
            </div>
            <div className="pt-10">
            <a href="#">
            <div className="border bg-gray-500 rounded-md w-full h-[50px] flex items-center justify-center">
              <h2 className="font-medium text-base text-white">
                Uppdatera din profil
              </h2>
              </div>
            </a>
            </div>
          </div>
        </div>
        </div>
    );
}

export default Installor;
