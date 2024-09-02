import React from "react";
import Top from "./top";
import Foot from "./foot";
import Copy from "./copy";

const Profile = () => {
  return (
    <div>
      <Top />
      <div className="hidden lg:block">
  <div className="pt-8 pl-8 pr-8 bg-gray-100 h-[500px]">
    <div className="flex">
      <div className="flex flex-col w-[250px] min-w-[250px] max-w-[300px]">
        <a href="#">
          <div className="border rounded-md bg-white w-full h-[40px] flex items-center mb-[6px]">
            <img className="pl-5" src="/src/assets/kinto.svg" alt="kinto" />
            <h3 className="pl-2 text-sm font-normal">Mitt konto</h3>
          </div>
        </a>
        <a href="#">
          <div className="border rounded-md bg-white w-full h-[40px] flex items-center mb-[6px]">
            <img className="pl-5" src="/src/assets/deal.svg" alt="Deal" />
            <h3 className="pl-2 text-sm font-normal">Mina deals</h3>
          </div>
        </a>
        <a href="#">
          <div className="border rounded-md bg-white w-full h-[40px] flex items-center mb-[6px]">
            <img className="pl-5" src="/src/assets/addto.svg" alt="Addto" />
            <h3 className="pl-2 text-sm font-normal">
              Sparade erbjudanden
            </h3>
          </div>
        </a>
        <a href="#">
          <div className="border rounded-md bg-white w-full h-[40px] flex items-center mb-[6px]">
            <img className="pl-5" src="/src/assets/msg.svg" alt="Msg" />
            <h3 className="pl-2 text-sm font-normal">Mina diskussioner</h3>
          </div>
        </a>
        <a href="#">
          <div className="border rounded-md bg-white w-full h-[40px] flex items-center mb-[6px]">
            <img
              className="pl-5"
              src="/src/assets/setting.svg"
              alt="Setting"
            />
            <h3 className="pl-2 text-sm font-normal">Inställningar</h3>
          </div>
        </a>
        <a href="#">
          <div className="border rounded-md bg-white w-full h-[40px] flex items-center mb-[6px]">
            <img
              className="pl-5"
              src="/src/assets/logout.svg"
              alt="Logout"
            />
            <h3 className="pl-2 text-sm font-normal">Logga ut</h3>
          </div>
        </a>
      </div>

      <div className="pl-4 pr-4 pt-1 flex flex-col flex-1">
        <div className="text-[25px] font-normal mb-3">Mitt Konto</div>
        <div className="border bg-white h-[200px] rounded-lg mt-3 min-w-[300px] max-w-[400px]">
          <h3 className="text-sm font-medium pl-4 pt-4">Inlägg</h3>
          <div className="border-b pt-2 mx-4"></div>
          <div className="pl-4 pt-4">
            <div className="flex">
              <img src="/src/assets/deal.svg" alt="Deal" />
              <h3 className="pl-2 text-sm">
                <span className="font-bold">0</span> Postade deals
              </h3>
            </div>
            <div className="flex pt-3">
              <img src="/src/assets/msg.svg" alt="Msg" />
              <h3 className="pl-2 text-sm">
                <span className="font-bold">0</span> Diskussioner
              </h3>
            </div>
            <div className="flex pt-3">
              <img src="/src/assets/s.msg.svg" alt="Msg" />
              <h3 className="pl-2 text-sm">
                <span className="font-bold">0</span> Kommentarer
              </h3>
            </div>
            <div className="flex pt-3">
              <img src="/src/assets/s.msg.svg" alt="MSg" />
              <h3 className="pl-2 text-sm">
                <span className="font-bold">0</span> Diskussionskommentarer
              </h3>
            </div>
          </div>
        </div>
        <div className="border bg-white h-[140px] rounded-lg mt-4 min-w-[300px] max-w-[400px]">
          <h3 className="text-sm font-medium pl-4 pt-4">Gemenskap</h3>
          <div className="border-b pt-2 mx-4"></div>
          <div className="pl-4 pt-4">
            <div className="flex">
              <img src="/src/assets/good.svg" alt="Good" />
              <h3 className="pl-2 text-sm">
                <span className="font-bold">0</span> Reaktioner
              </h3>
            </div>
            <div className="flex pt-3">
              <img src="/src/assets/friend.svg" alt="Friend" />
              <h3 className="pl-2 text-sm">
                <span className="font-bold">0</span> Följare
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full pr-4 mt-16">
        <div className="bg-white rounded-lg w-full h-[150px] mb-4">
          <div className="w-full h-[40px] rounded-lg bg-[#0067e1] flex items-center justify-center text-white">
            Kommer snart!
          </div>
          <div className="border-b border-gray-300 w-full pt-3"></div>
          <div className="flex flex-col pt-2 px-4">
            <div className="flex items-start">
              <img src="/src/assets/cube.svg" alt="Cube" />
              <div className="flex flex-col pl-2 pt-1 w-full">
                <h1 className="font-semibold text-[#000]">2 nivå</h1>
                <div className="border bg-gray-400 h-[15px] w-full rounded-lg mt-1">
                  <div className="bg-[#0367DD] h-[14px] w-[50%] rounded-lg"></div>
                </div>
                <div className="flex justify-between mt-1">
                  <h2 className="text-black">25</h2>
                  <h2 className="text-black">60</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg w-full h-[150px] mt-2"> {/* Added mt-8 for additional top margin */}
          <h1 className="font-bold text-sm text-gray-400 px-4 pt-3">
            Utmärkelser mottagna
          </h1>
          <div className="border-b border-gray-300 w-full pt-3"></div>
          <img className="pl-4 pt-3" src="/src/assets/tick.svg" alt="Tick" />
        </div>
      </div>
    </div>
  </div>
</div>


      <div className="px-4 py-4">
        <div className="hidden md:block lg:hidden">
          <div className="flex flex-col">
            <a href="#">
              <div className="border rounded-md bg-white w-full h-[40px] flex items-center mb-[6px]">
                <img className="pl-5" src="/src/assets/kinto.svg" alt="kinto" />
                <h3 className="pl-2 text-sm font-normal">Mitt konto</h3>
              </div>
            </a>
            <a href="#">
              <div className="border rounded-md bg-white w-full h-[40px] flex items-center mb-[6px]">
                <img className="pl-5" src="/src/assets/deal.svg" alt="Deal" />
                <h3 className="pl-2 text-sm font-normal">Mina deals</h3>
              </div>
            </a>
            <a href="#">
              <div className="border rounded-md bg-white w-full h-[40px] flex items-center mb-[6px]">
                <img className="pl-5" src="/src/assets/addto.svg" alt="Addto" />
                <h3 className="pl-2 text-sm font-normal">
                  Sparade erbjudanden
                </h3>
              </div>
            </a>
            <a href="#">
              <div className="border rounded-md bg-white w-full h-[40px] flex items-center mb-[6px]">
                <img className="pl-5" src="/src/assets/msg.svg" alt="Msg" />
                <h3 className="pl-2 text-sm font-normal">Mina diskussioner</h3>
              </div>
            </a>
            <a href="#">
              <div className="border rounded-md bg-white w-full h-[40px] flex items-center mb-[6px]">
                <img
                  className="pl-5"
                  src="/src/assets/setting.svg"
                  alt="Setting"
                />
                <h3 className="pl-2 text-sm font-normal">Inställningar</h3>
              </div>
            </a>
            <a href="#">
              <div className="border rounded-md bg-white w-full h-[40px] flex items-center mb-[6px]">
                <img
                  className="pl-5"
                  src="/src/assets/logout.svg"
                  alt="Logout"
                />
                <h3 className="pl-2 text-sm font-normal">Logga ut</h3>
              </div>
            </a>
          </div>
        </div>
        <div className="block lg:hidden">
          <div className="flex flex-col">
            <div className="text-[25px] font-normal pt-5">Mitt Konto</div>
            <div className="border bg-white h-[200px] w-full rounded-lg mt-3">
              <h3 className="text-sm font-medium pl-4 pt-4">Inlägg</h3>
              <div className="border-b pt-2 mx-4"></div>
              <div className="pl-4 pt-4">
                <div className="flex">
                  <img src="/src/assets/deal.svg" alt="Deal" />
                  <h3 className="pl-2 text-sm">
                    <span className="font-bold">0</span> Postade deals
                  </h3>
                </div>
                <div className="flex pt-3">
                  <img src="/src/assets/msg.svg" alt="Msg" />
                  <h3 className="pl-2 text-sm">
                    <span className="font-bold">0</span> Diskussioner
                  </h3>
                </div>
                <div className="flex pt-3">
                  <img src="/src/assets/s.msg.svg" alt="Msg" />
                  <h3 className="pl-2 text-sm">
                    <span className="font-bold">0</span> Kommentarer
                  </h3>
                </div>
                <div className="flex pt-3">
                  <img src="/src/assets/s.msg.svg" alt="MSg" />
                  <h3 className="pl-2 text-sm">
                    <span className="font-bold">0</span> Diskussionskommentarer
                  </h3>
                </div>
              </div>
            </div>
            <div className="border bg-white h-[140px] w-full rounded-lg mt-4">
              <h3 className="text-sm font-medium pl-4 pt-4">Gemenskap</h3>
              <div className="border-b pt-2 mx-4"></div>
              <div className="pl-4 pt-4">
                <div className="flex">
                  <img src="/src/assets/good.svg" alt="Good" />
                  <h3 className="pl-2 text-sm">
                    <span className="font-bold">0</span> Reaktioner
                  </h3>
                </div>
                <div className="flex pt-3">
                  <img src="/src/assets/friend.svg" alt="Friend" />
                  <h3 className="pl-2 text-sm">
                    <span className="font-bold">0</span> Följare
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block lg:hidden">
          <div className="flex flex-col w-full pr-4 mt-16">
        <div className="bg-white rounded-lg w-full h-[150px] mb-4">
          <div className="w-full h-[40px] rounded-lg bg-[#0067e1] flex items-center justify-center text-white">
            Kommer snart!
          </div>
          <div className="border-b border-gray-300 w-full pt-3"></div>
          <div className="flex flex-col pt-2 px-4">
            <div className="flex items-start">
              <img src="/src/assets/cube.svg" alt="Cube" />
              <div className="flex flex-col pl-2 pt-1 w-full">
                <h1 className="font-semibold text-[#000]">2 nivå</h1>
                <div className="border bg-gray-400 h-[15px] w-full rounded-lg mt-1">
                  <div className="bg-[#0367DD] h-[14px] w-[50%] rounded-lg"></div>
                </div>
                <div className="flex justify-between mt-1">
                  <h2 className="text-black">25</h2>
                  <h2 className="text-black">60</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg w-full h-[150px] mt-2"> {/* Added mt-8 for additional top margin */}
          <h1 className="font-bold text-sm text-gray-400 px-4 pt-3">
            Utmärkelser mottagna
          </h1>
          <div className="border-b border-gray-300 w-full pt-3"></div>
          <img className="pl-4 pt-3" src="/src/assets/tick.svg" alt="Tick" />
        </div>
      </div>
        </div>
      </div>
      <Foot />
      <Copy />
    </div>
  );
};

export default Profile;
