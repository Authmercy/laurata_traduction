"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Navbar from "../navbar/navbar";
import BandeauMobile from "../footer/footer";
import FooterMobile from "../footer/footerEnd";

export default function PresentaionDuSiteMobile() {
  const router = useRouter();

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
              <p>PRÉSENTATION</p>
             </div>
   
   
          
             <div className="grid grid-cols-1  bg-white  text-black lg:flex-row flex-grow p-2 justify-center mt-4   ">
               <div className="my-4  ">
                        <p> La plateforme <span className="text-[#4A62AA] text-xl font-bold"> LAURATA.COM</span> a pour principal objectif de contribuer à améliorer la qualité de la formation et l’employabilité des jeunes (diplômés) Camerounais en vue de leur garantir une insertion professionnelle réussie.
 </p>
                    </div>
                    <div className="mb-4">

                        <p > <span className="text-[#4A62AA]  ">  ▌ </span> Dans cette optique, en collaboration avec les secteurs public et privé et, en droite ligne dans la réalisation des ODD N˚4, 10 et 17 de l’ONU (Éducation de qualité – Inégalités réduites – Partenariats pour les Objectifs), <span className="text-[#4A62AA] text-xl font-bold"> LAURATA</span>  répertorie et centralise les offres de stage et en assure un accès transparent et équitable à la communauté éducative. En outre, elle met  en relation les employeurs avec les étudiants et jeunes diplômés.

 </p>
                    </div>

                    <div className="mb-4">

                        <p > <span className="text-[#4A62AA]  ">  ▌ </span> <span className="text-[#4A62AA] text-xl font-bold"> LAURATA </span>fournit egalement des ressources documentaires de qualité pour aider chaque jeune à identifier une filière d’étude et/ou un métier qui sied à son projet professionnel et à ses aptitudes. </p>




                    </div>
                   
                    
                   





          <div className="flex flex-col md:flex-row justify-center md:items-center gap-4 md:gap-16">
            <div className="text-[#A38340] text-center font-bold pt-8 text-xl">Partager cette page</div>
            <div className="flex flex-row justify-center md:justify-end gap-2">
              <img src="/icons/icons8-whatsapp-logo-64(1).png" alt="social" className=" mt-1 w-[52px] h-[52px]" />
              <img src="/icons/icons8-facebook-logo-64.png" alt="social" className="" />
              <img src="/icons/icons8-linkedin-logo-64.png" alt="social" className=" mt-1 w-[60px] h-[60px]" />
              <img src="/icons/icons8-x-64(1).png" alt="social" className=" mt-1 w-[60px] h-[60px]" />
            </div>
          </div>
   
             </div>
          
   
           </div>   
                </div>
                                  <footer className="w-full bg-blue-900    text-white text-center">
                                                                        <FooterMobile />
                                                                      </footer>
       </div>
  );
}
