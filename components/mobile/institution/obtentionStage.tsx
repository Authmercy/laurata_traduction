"use client";
import Link from "next/link";
import Navbar from "../navbar/navbar";
import { useState } from "react";
import FooterMobile from "../footer/footerEnd";

export default function ObtentionStageMobile() {


  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileMenuOpen2, setIsMobileMenuOpen2] = useState(false);

  return (
  
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
            <p> OBTENIR DES STAGES À SES ÉTUDIANTS ET DIPLÔMÉS</p>
          </div>


          <div

            className="bg-white/70  mt-8  p-2 py-4 shadow-sm mb-2 hover:shadow-md transition-shadow"
          >
            <p className="text-[#4A62AA] text-center text-lg font-bold">Soyez une institution dont les formations mènent véritablement à l’emploi !</p>

          </div>
          <div className="grid grid-cols-1 lg:flex-row flex-grow p-2 justify-center mt-2   ">

            <div>
              <p className="text-white text-center p-3 text-lg bg-[#4A62AA]/90">GRÂCE AU PARTENARIAT AVEC LAURATA</p>

              <div className="flex flex-col lg:flex-row flex-grow justify-center gap-6 mt-4">

                <div
                  className="  rounded-md bg-[#A87A38] p-8 text-center text-white"

                >
                  <p>
                    Obtenez des opportunités de stages et premiers emplois à vos étudiants et diplômés.

                  </p>
                </div>


                <div className="bg-[#A87A38]/70 rounded-md  text-center  p-8   text-white">

                  <p>    Renforcez la présence numérique de vos formations et de votre institution.
                  </p>
                </div>
                <div className="bg-[#A87A38]/50 rounded-md  text-center  items-stretch   p-8 text-white">

                  <p>Envoi ciblé de votre offre de formations à nos abonnés élèves, étudiants et parents.</p>
                </div>


              </div>


            </div>

          </div>
          <div className="flex justify-center mt- w-full">
            <div className="">
              <p className="text-center text-white p-4"><b className="text-xl"><Link href="/misc/nous_contacter" className="  hover:text-2xl">     Contactez-nous </Link>
              </b> pour plus d’informations ou appelez-le  <br />(+237) 690 707 253.</p>
            </div>
          </div>

        </div>
     
      <footer className="w-full bg-blue-900   mt-10 text-white text-center">
        <FooterMobile />
      </footer>
       </div>
     
  

  );
}