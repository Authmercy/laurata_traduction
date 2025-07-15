"use client";


import Link from "next/link";
import Navbar from "../navbar/navbar";
import { useState } from "react";
import FooterMobile from "../footer/footerEnd";


export default function PromotionInstitutionMobile() {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileMenuOpen2, setIsMobileMenuOpen2] = useState(false);

  return (
    <div>
     <div className="min-h-screen   bg-[#34538C]  overflow-auto  w-screen bg-cover  text-justify bg-center bg-no-repeat "  >
        <Navbar
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          isMobileMenuOpen2={isMobileMenuOpen2}
          setIsMobileMenuOpen2={setIsMobileMenuOpen2}
        />
        <div className={`${isMobileMenuOpen ? "blur-sm " : ""
          } ${isMobileMenuOpen2 ? "blur-sm " : ""
          } `}>
          <div className="justify-center p-2 text-center text-xl font-bold uppercase bg-[#9b6e0f] text-white">
            <p>     PROMOUVOIR SON INSTITUTION </p>
          </div>


          <div

            className="bg-white  mt-8 p-2 py-4 shadow-sm mb-2 hover:shadow-md transition-shadow"
          >
            <p className="text-[#4A62AA] text-justify ">                 Plusieurs partenariats disponibles pour renforcer la visibilité et l’attractivité de votre institution et de vos évènements auprès des élèves, étudiants, parents et des autres acteurs de l’écosystème éducatif à travers la plateforme et les réseaux sociaux s’y rapportant.

            </p>

          </div>
          <div className="p-2">




            <div className=" pt-2">
              <div className="flex flex-col lg:flex-row flex-grow justify-center   py-2 ">

                <div>
                  <p className="text-white text-center font-bold text-lg ">Ce que vous tirerez d'un partenariat  avec Laurata</p>
                  <div className="flex flex-col lg:flex-row flex-grow justify-center gap-6 mt-4">

                    <div className="bg-[#A87A38] p-8  text-center  text-white">

                      <p>Portrait permanent de votre institution dans la rubrique « Institution à la une »</p>
                    </div>
                    <div className="bg-[#1941b8]  text-center p-8  text-white">

                      <p>Mise à disposition des résultats de nos sondages auprès des étudiants et diplômés</p>
                    </div>
                    <div className="bg-[#A87A38]/80 text-center  items-stretch   p-8 text-white">

                      <p>Communication ciblée de vos évènements, JPO aux parents, élèves, étudiants et diplômés</p>
                    </div>


                  </div>


                </div>

              </div>
              <div className="flex mt-4 justify-center w-full">
                <div className="">
                  <p className="text-center text-white text-xl p-4"><b className="text-xl"><Link href="/misc/nous_contacter" className="  hover:text-2xl">     Contactez-nous </Link>
                  </b> pour en savoir davantage.</p>
                </div>
              </div> </div>
          </div>


        </div>
         <footer className="w-full bg-blue-900   mt-24 text-white text-center">
        <FooterMobile />
      </footer>
      </div>
     
    </div>

  );
}