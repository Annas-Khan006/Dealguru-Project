import React from "react";

const Smallcard = () => {
  return (
    <div className="px-4 py-4">
      <div className="block md:hidden w-full h-full rounded-lg bg-white">
        <div className="flex items-start">
          <img
            className="w-[100px] h-[100px] rounded-l-lg m-4"
            src="/src/assets/bottles.jpg"
            alt="Bottles"
          />
          <div className="flex flex-col justify-center pl-4 pt-4">
            <a href="#">
              <h1 className="font-bold text-sm text-black">
                Tävling - 5 personer vinner varsin läsk!
              </h1>
            </a>
            <span className="font-semibold text-black text-xs pt-1 block">
              Bra deal? Rösta här:
            </span>
            <div className="flex gap-1 pt-3">
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
        </div>
        <div className="flex gap-2 px-4">
                  <h1 className="text-[#0067e1] font-bold text-lg">990 kr</h1>
                  <h1 className="text-[#B1B9C0] decoration-2 line-through font-bold text-lg">1990 kr</h1>
                  <div className="bg-[#0067e1] w-[50px] h-[30px] text-white font-bold rounded-md text-center px-1 py-1">50%</div>
                  <div className="border-l border-gray-400"></div>
                  <h1 className="font-bold pt-1 text-black">Tretti</h1>
                </div>
        <div className="px-4">
          <a href="#">
            <h3 className="font-bold text-sm text-[#0067e1] pt-4">Tävlingar</h3>
          </a>
          <a href="#">
            <h3 className="font-bold text-sm pt-4 text-black">
              Var med och tävla! 🥰
            </h3>
          </a>
        </div>
        <div className="pt-4 flex items-start px-4">
          <a href="#">
            <img
              className="rounded-full w-[35px]"
              src="/src/assets/boy.png"
              alt=""
            />
          </a>
          <div className="pl-2">
            <a href="#">
              <h2 className="text-[#637381] font-bold text-sm">
                Upplagd för 21 timmar sedan
              </h2>
            </a>
            <a href="#">
              <h4 className="font-medium text-black text-sm">Malin</h4>
            </a>
          </div>
          <div className="ml-auto">
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
          </div>
        </div>
        <div className="flex py-4 px-4 gap-2">
          <a href="#" className="flex-grow">
            <div className="flex h-[42px] items-center justify-center rounded-md border bg-[#0067e1] w-full max-w-[650px]">
              <span className="text-base font-medium text-[#fff]">
                Gå direkt till dealen
              </span>
            </div>
          </a>
          <a href="#">
            <span className="flex h-[40px] w-[40px] rounded-md bg-gray-100">
              <img src="/src/assets/list.svg" alt="List" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Smallcard;
