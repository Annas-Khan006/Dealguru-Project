import React from 'react';

const Dealclickpage = () => {
    return (
        <div className="bg-gray-200 hidden lg:block h-[850px]">
            <div className="grid grid-cols-9 gap-4">
        <div className="lg:block hidden bg-white rounded-lg w-full h-full px-4 col-span-4">
          <img
            className="mx-auto pt-3 w-[400px]"
            src="/src/assets/girls.jpg"
            alt="Girls"
          />
          <a href="#">
            <div className="border bg-blue-600 h-[50px] w-full my-5 rounded-md flex items-center justify-center">
              <div className="text-white mr-2">Gå direkt till dealen</div>
              <img
                className="w-[20px] h-[20px]"
                src="/src/assets/page.svg"
                alt="page"
              />
            </div>
          </a>
        </div>
        <div className="lg:block hidden bg-white rounded-lg w-full h-[200px] col-span-5">
          <div className="flex flex-grow justify-between px-4">
            <h1 className="text-black font-bold text-2xl pt-4">
            Gratis Santa Maria Asian Bao Buns
            </h1>
            <div className="pt-3">
              <div className="pl-3 pt-2">
                <a href="#">
                  <div className=" border border-gray-200 bg-gray-200 h-[30px] w-[140px] rounded-md text-center text-blue-600 text-lg font-semibold">
                    74
                  </div>
                </a>
              </div>
              <div className="flex flex-row pt-2 pl-3 ">
                <a href="#">
                  <div className="border bg-gray-200 rounded-md w-[45px] h-[40px] flex items-center justify-center mb-2">
                    <img src="/src/assets/heart.svg" alt="Heart" />
                  </div>
                </a>
                <a href="#">
                  <div className="border bg-gray-200 rounded-md w-[45px] h-[40px] flex items-center justify-center mb-2 ml-1">
                    <img src="/src/assets/thumb.svg" alt="Thumb" />
                  </div>
                </a>
                <a href="#">
                  <div className="border bg-gray-200 rounded-md w-[45px] h-[40px] flex items-center justify-center mb-2 ml-1">
                    <img src="/src/assets/dislike.svg" alt="Dislike" />
                  </div>
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex px-4">
            <h1 className="font-bold text-[#0067e1] pr-2 text-sm">IKEA</h1>
            <div className="border border-l border-gray-200"></div>
            <h1 className="font-bold text-[#0067e1] px-2 text-sm">Möbler</h1>
            <div className="border border-l border-gray-200"></div>
            <h1 className="font-bold text-[#0067e1] pl-2 text-sm">
              Heminredning
            </h1>
          </div>
          <div className="flex flex-grow justify-between pt-5 px-4">
            <div className="flex">
              <a href="#">
                <img
                  className="rounded-full w-[30px] h-[30px]"
                  src="/src/assets/boy.png"
                  alt=""
                />
              </a>
              <a href="#">
                <p className="text-[#637381] text-xs pt-2 font-medium pl-2">
                  Upplagd för 3 dagar sedan av Malin
                </p>
              </a>
            </div>
            <div className="flex pb-4">
              <a
                href="#"
                className="border bg-gray-200 rounded-md w-[45px] h-[40px] flex items-center justify-center"
              >
                <img className="" src="/src/assets/flag.svg" alt="flag" />
              </a>

              <a href="#">
                <div className="border bg-gray-200 rounded-md w-[60px] h-[40px] flex items-center justify-center ml-1 gap-3">
                  <img
                    className="inline-block w-[20px] h-[20px]"
                    src="/src/assets/comment.png"
                    alt="Comment"
                  />
                  <span className="font-sans text-[#1B273899]">0</span>
                </div>
              </a>
              <a
                href="#"
                className="border bg-gray-200 rounded-md w-[45px] h-[40px] flex items-center justify-center ml-1"
              >
                <img
                  className="w-[20px] h-[20px]"
                  src="/src/assets/add.svg"
                  alt="add"
                />
              </a>
            </div>
          </div>
          <div className="py-4">
            <div className="bg-white rounded-lg xl:block px-4">
              <h1 className="font-bold text-black text-xl pt-5">
                Gäller den 31/8 i alla varuhus!
              </h1>
              <h2 className="font-semibold pt-5 text-lg text-[#313131]">
                Världens största pyjamasparty
              </h2>
              <p className="pt-5">
                Lördagen den 31/8 bjuder alla IKEA varuhus in till ett
                pyjamasparty du inte vill somna från. Kom iklädd din pyjamas,
                morgonrock eller en annan mysig sov-accessoar. De första 500
                besökarna i pyjamas får en värdekupong på 150 kr när de handlar
                för minst 500 kr.
              </p>
              <p className="pt-5">
                Detta är ett perfekt tillfälle att uppdatera hemmet med nya
                möbler och inredning. IKEA erbjuder ett brett sortiment av
                produkter som passar alla stilar och budgetar. Passa på att
                handla allt från bekväma sängar och mjuka kuddar till praktiska
                förvaringslösningar och trendiga dekorationer.
              </p>
              <p className="pt-5">
                Förutom att fynda nya favoriter kan du också njuta av en rolig
                dag med familj och vänner. Pyjamaspartyt är en unik upplevelse
                där du kan mingla med andra pyjamasälskare och kanske till och
                med få inspiration till ditt eget sovrum.
              </p>
              <p className="py-5">
                Så sätt på dig din mysigaste pyjamas och bege dig till ditt
                närmaste IKEA varuhus den 31/8. Missa inte chansen att få en
                värdekupong och göra fantastiska fynd. Vem vet, kanske hittar du
                precis det du letat efter för att göra ditt hem ännu mysigare
                🛋️.
              </p>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
}

export default Dealclickpage;
