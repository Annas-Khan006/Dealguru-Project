import React from "react";
import Copy from "./copy";

const Foot = () => {
  return (
    <div class="pt-[30px] bg-white">
      <div class="grid grid-cols-2 px-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 pb-9">
        <div class="col-span-2 rounded-lg">
          <div className="first-col">
            <a href="">
              <span>
                <img
                  className="w-[160px]  md:ml-2"
                  alt="Dealguru"
                  src="https://dealguru.se/images/deal_guru_new_logo_new_logo.png"
                  decoding="async"
                  data-nimg="fixed"
                  height="53"
                  width="250"
                />
              </span>
            </a>
            <p className="mt-6 md:ml-2 max-w-prose text-sm font-normal leading-6 text-[#637381] pr-4">
              Dealguru.se är ett community för dig som älskar bra erbjudanden
              och deals. Tillsammans hjälper vi varandra att göra bättre deals
              genom att hitta och dela de bästa erbjudandena genom att dela dem
              med varandra. Det är helt gratis att vara medlem på DealGuru, så
              om du vill göra bättre köpbeslut och spara både tid och pengar,
              bli en DealGuru du också!
            </p>
            <ul className="mt-4 md:ml-2">
              <li className="inline-block mr-4">
                <span>
                  <a
                    hrefLang="sv-se"
                    class="active-buton-transition float-start"
                    href="https://www.tiktok.com/@dealguru.se"
                  >
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.759 6.35115C18.6188 6.28133 18.4823 6.2048 18.3501 6.12184C17.9658 5.87717 17.6135 5.58891 17.3006 5.26325C16.517 4.40022 16.2244 3.52475 16.1174 2.91236H16.1211C16.0315 2.40308 16.0684 2.07422 16.0749 2.07422H12.5075V15.3556C12.5075 15.5334 12.5075 15.7103 12.5002 15.8845C12.5002 15.9058 12.4974 15.9254 12.4965 15.9494C12.4965 15.9583 12.4965 15.9689 12.4937 15.9787V15.9867C12.4562 16.4631 12.2977 16.9234 12.0322 17.3269C11.7666 17.7305 11.4021 18.0651 10.9708 18.3011C10.5207 18.5477 10.0117 18.677 9.49396 18.6762C7.83257 18.6762 6.485 17.3715 6.485 15.76C6.485 14.1478 7.83257 12.843 9.49396 12.843C9.8087 12.843 10.1216 12.891 10.4206 12.9852L10.4253 9.48686C9.51705 9.37402 8.59441 9.44372 7.71557 9.69155C6.83674 9.93937 6.0208 10.3599 5.31926 10.9267C4.70441 11.4409 4.18747 12.0545 3.79171 12.7399C3.64126 12.9896 3.07269 13.9949 3.00439 15.6249C2.96101 16.5493 3.24991 17.5092 3.38744 17.9047V17.9136C3.47327 18.1465 3.80924 18.9429 4.35566 19.6139C4.79629 20.1525 5.31691 20.6257 5.90075 21.0182V21.0093L5.90905 21.0182C7.63505 22.147 9.55026 22.0732 9.55026 22.0732C9.88162 22.0599 10.992 22.0732 12.2528 21.4982C13.6511 20.86 14.4467 19.9099 14.4467 19.9099C14.9554 19.342 15.3599 18.6949 15.6429 17.9963C15.966 17.1786 16.0731 16.1991 16.0731 15.808V8.7607C16.1164 8.78559 16.6933 9.15267 16.6933 9.15267C16.6933 9.15267 17.524 9.66551 18.819 9.99881C19.7475 10.2361 21 10.2868 21 10.2868V6.87644C20.5616 6.92265 19.6709 6.78933 18.758 6.35204L18.759 6.35115Z"
                        fill="#0367DD"
                      ></path>
                    </svg>
                  </a>
                </span>
              </li>
              <li className="inline-block mr-4">
                <span>
                  <a
                    hreflang="sv-se"
                    class="active-buton-transition float-start"
                    href="https://www.instagram.com/dealguru.se"
                  >
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.9976 9.07294C10.345 9.07294 8.99636 10.4216 8.99636 12.0742C8.99636 13.7268 10.345 15.0755 11.9976 15.0755C13.6502 15.0755 14.9988 13.7268 14.9988 12.0742C14.9988 10.4216 13.6502 9.07294 11.9976 9.07294ZM20.999 12.0742C20.999 10.8314 21.0103 9.5998 20.9405 8.35921C20.8707 6.91824 20.5419 5.63937 19.4883 4.58566C18.4323 3.5297 17.1557 3.20323 15.7148 3.13343C14.472 3.06363 13.2404 3.07489 11.9998 3.07489C10.757 3.07489 9.52546 3.06363 8.28489 3.13343C6.84395 3.20323 5.5651 3.53195 4.51141 4.58566C3.45547 5.64162 3.129 6.91824 3.05921 8.35921C2.98941 9.60205 3.00067 10.8336 3.00067 12.0742C3.00067 13.3148 2.98941 14.5486 3.05921 15.7892C3.129 17.2302 3.45772 18.5091 4.51141 19.5628C5.56736 20.6187 6.84395 20.9452 8.28489 21.015C9.52771 21.0848 10.7593 21.0735 11.9998 21.0735C13.2426 21.0735 14.4742 21.0848 15.7148 21.015C17.1557 20.9452 18.4346 20.6165 19.4883 19.5628C20.5442 18.5068 20.8707 17.2302 20.9405 15.7892C21.0125 14.5486 20.999 13.3171 20.999 12.0742ZM11.9976 16.6921C9.44215 16.6921 7.3798 14.6297 7.3798 12.0742C7.3798 9.51874 9.44215 7.45635 11.9976 7.45635C14.553 7.45635 16.6154 9.51874 16.6154 12.0742C16.6154 14.6297 14.553 16.6921 11.9976 16.6921ZM16.8045 8.3457C16.2078 8.3457 15.726 7.86387 15.726 7.26722C15.726 6.67057 16.2078 6.18874 16.8045 6.18874C17.4011 6.18874 17.8829 6.67057 17.8829 7.26722C17.8831 7.4089 17.8554 7.54922 17.8012 7.68015C17.7471 7.81107 17.6677 7.93004 17.5675 8.03022C17.4673 8.1304 17.3483 8.20983 17.2174 8.26397C17.0865 8.3181 16.9462 8.34588 16.8045 8.3457Z"
                        fill="#0367DD"
                      ></path>
                    </svg>
                  </a>
                </span>
              </li>
              <li className="inline-block mr-4">
                <span>
                  <a
                    hreflang="sv-se"
                    class="active-buton-transition float-start"
                    href="https://www.facebook.com/dealguru.se"
                  >
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22 12.135C22 6.57894 17.5225 2.07422 12 2.07422C6.4775 2.07422 2 6.57894 2 12.135C2 17.157 5.65667 21.3188 10.4375 22.0734V15.0434H7.89833V12.1342H10.4375V9.91912C10.4375 7.39805 11.9308 6.00463 14.215 6.00463C15.3083 6.00463 16.4533 6.20166 16.4533 6.20166V8.67745H15.1917C13.9492 8.67745 13.5617 9.45297 13.5617 10.2486V12.135H16.335L15.8917 15.0442H13.5617V22.0742C18.3433 21.3188 22 17.1562 22 12.135Z"
                        fill="#0367DD"
                      ></path>
                    </svg>
                  </a>
                </span>
              </li>
            </ul>
            <div className="">
              <p className="font-sans text-xl md:ml-2 mt-4 font-bold leading-7 text-[#1B2738]">
                Bli medlem
              </p>
              <p className="font-sans text-sm md:ml-2 mt-2 font-normal text-[#637381]">
                Registrera dig och få tillgång till exklusiva deals
              </p>
              <a hrefLang="#">
                <div className="font-sans font-bold text-sm leading-5 md:ml-2 h-10 border mt-5 bg-blue-700 text-white rounded-lg px-4 py-2 inline-block">
                  Registrera dig
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class=" rounded-lg">
          <div className="second-col">
            <h4 className="text-heading text-base font-bold mb-4">Deal Guru</h4>
            <ul className="text-sm flex flex-col space-y-3">
              <li>Deals</li>
              <li>Blogg</li>
              <li>Diskussioner</li>
              <li>Om oss</li>
              <li>Kontakta oss</li>
              <li>DealGuru in media</li>
            </ul>
            <h4 class="text-heading text-base font-bold mb-4 mt-5">
              Community
            </h4>
            <ul class="text-sm flex flex-col space-y-3">
              <li>Kom igång</li>
              <li>FAQ</li>
              <li>Medlemsvillkor</li>
            </ul>
          </div>
        </div>
        <div class=" rounded-lg">
          <div className="third-col">
            <h4 class="text-heading text-base font-bold mb-4">Kategorier</h4>
            <ul class="text-sm flex flex-col space-y-3">
              <li>Gratis saker</li>
              <li>Presenter</li>
              <li>Rabattkoder</li>
              <li>Gratisprover</li>
              <li>Elektronik</li>
              <li>TV</li>
              <li>Grillar</li>
              <li>Skor</li>
              <li>Robotdammsugare</li>
              <li>Kuponger</li>
            </ul>
          </div>
        </div>
        <div class=" rounded-lg">
          <div className="fourth-col">
            <h4 class="text-heading text-base font-bold mb-4">Varumärken</h4>
            <ul class="text-sm flex flex-col space-y-3">
              <li>Yasuragi</li>
              <li>Glowen</li>
              <li>Matsmart</li>
              <li>Nike</li>
              <li>Apple</li>
              <li>IKEA</li>
              <li>Samsung</li>
              <li>Åhléns</li>
              <li>Booking.com</li>
              <li>Hotels.com</li>
            </ul>
          </div>
        </div>
        <div class=" rounded-lg">
          <div className="fifth-col">
            <h4 class="text-heading text-base font-bold mb-4">Butiker</h4>
            <ul class="text-sm flex flex-col space-y-3">
              <li>Swissôtel Hotels & Resorts</li>
              <li>Mövenpick Hotels & Resorts</li>
              <li>Sofitel Hotels & Resorts</li>
              <li>Novotel Hotels & Resorts</li>
              <li>Pullman Hotels & Resorts</li>
              <li>Ibis Hotels</li>
              <li>Raffles Hotels & Resorts</li>
              <li>Mercure Hotels</li>
              <li>Matsmart</li>
              <li>Power</li>
            </ul>
          </div>
        </div>
      </div>
      <Copy />
    </div>
  );
};

export default Foot;
