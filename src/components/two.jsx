import React from "react";

const Two = () => {
  return (
    <>
      <div className="left-sider flex pt-10 pl-[20px] h-[800px]">
        <div className="pt-[17px] pl-[20px] w-[600px] h-[430px] border bg-white rounded-lg text-white">
          <img
            className="pl-[120px] h-[300px]"
            src="/src/assets/perfume.jpg"
            alt=""
          />
          <a href="#">
            <div className="border bg-blue-600 h-14 w-[550px] mt-7 rounded-md flex flex-row pl-[170px]">
              <div className="mt-[14px]">Gå direkt till dealen</div>
              <img
                className="w-[20px] h-[50px] ml-[10px]"
                src="/src/assets/page.svg"
                alt="page"
              />
            </div>
          </a>
        </div>

        <div className="ml-[20px]">
          <div className="flex flex-grow justify-between border bg-white rounded-md w-[780px] h-[200px] pl-5">
            <div className="left">
              <div className="mt-[20px] ml-5">
                <div className="text-black font-bold text-2xl">
                  Handla 2, få 50% på deodoranter - parfym.se
                </div>
                <div className="mt-[15px] font-bold text-base">50 % rabatt</div>
                <div className="flex flex-row gap-3 mb-2">
                  <a href="#">
                    <img
                      className="rounded-full w-[30px] h-[30px] mt-[60px]"
                      src="/src/assets/boy.png"
                      alt=""
                    />
                  </a>
                  <a href="#">
                    <p className="text-[#637381] text-sm font-medium mt-[65px] ml-1">
                      Upplagd för 20 timmar sedan av Sarah
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="right pt-3 pr-2">
              <div className="pl-3 pt-2">
                <a href="#">
                  <div className=" border border-gray-200 bg-gray-200 h-[30px] w-[140px] rounded-md text-center text-blue-600 text-lg font-semibold">
                    18
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
              <div className="flex pr-1 pt-[40px]">
                <a
                  href="#"
                  className="border bg-gray-200 rounded-md w-[45px] h-[40px] flex items-center justify-center mb-2"
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
                  className="border bg-gray-200 rounded-md w-[45px] h-[40px] flex items-center justify-center mb-2 ml-1"
                >
                  <img
                    className="w-[20px] h-[20px]"
                    src="/src/assets/add.svg"
                    alt="add"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="pt-5">
            <div className="border border-gray-200 rounded-md bg-white w-[780px] h-[500px] pl-[20px] pr-[20px] py-[20px]">
              <h3 className="font-semibold text-lg">
                Passa på att shoppa loss till din pälskling!
              </h3>
              <h3 className="font-semibold text-base text-gray-900 pt-[20px]">
                Få 15% rabatt på nästan hela sortimentet hos VetZoo
              </h3>
              <h2 className="text-gray-500 pt-[6px] text-sm">
                Är du på jakt efter djurtillbehör? Då är det dags att spetsa
                öronen! Just nu kan du få 15% rabatt på nästan hela sortimentet
                hos VetZoo vid köp över 700 kr. Använd rabattkoden{" "}
                <span className="font-semibold text-gray-600 text-lg">
                  VD15
                </span>{" "}
                i kassan för att ta del av erbjudandet. 🐾 VetZoo är Sveriges
                största djuraffär online och erbjuder ett brett sortiment av
                produkter för alla typer av husdjur. Här hittar du allt från
                foder och leksaker till tillbehör och vårdprodukter. Populära
                varumärken som Royal Canin, Hill's och Eukanuba finns självklart
                i sortimentet.
              </h2>
              <h3 className="font-semibold text-base text-gray-900 pt-[20px]">
                Så här använder du rabattkoden
              </h3>
              <h2 className="text-gray-500 pt-[6px] text-sm">
                Att använda rabattkoden VD15 är enkelt. Lägg varor för minst 700
                kr i varukorgen, gå till kassan och ange koden i fältet för
                rabattkoder. Rabatten dras av automatiskt och du kan njuta av
                dina nya djurprodukter till ett lägre pris. 🛒
              </h2>
              <h3 className="font-semibold text-base text-gray-900 pt-[20px]">
                Snabba leveranser och stort utbud
              </h3>
              <h2 className="text-gray-500 pt-[6px] text-sm">
                VetZoo är känt för sina snabba leveranser, så du behöver inte
                vänta länge på att få hem dina varor. Med ett stort utbud av
                produkter för både hundar, katter, smådjur och fåglar finns det
                något för alla. Passa på att fylla på lagret med foder, köpa nya
                leksaker eller kanske en ny bädd till ditt husdjur. Missa inte
                chansen att spara pengar på dina djurinköp. Använd rabattkoden
                VD15 och få 15% rabatt på nästan hela sortimentet hos VetZoo vid
                köp över 700 kr. Ditt husdjur kommer att tacka dig! 🐶🐱
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Two;
