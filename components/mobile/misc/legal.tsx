"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import BandeauMobile from "../footer/footer";
import Navbar from "../navbar/navbar";
import FooterMobile from "../footer/footerEnd";

export default function LegalSectionMobile() {
  const router = useRouter();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileMenuOpen2, setIsMobileMenuOpen2] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
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
            <p>MENTIONS LÉGALES</p>
          </div>



          <div className="flex p-3 bg-white text-black gap-1 w-full">
            <div className="flex justify-center text-justify flex-col w-full px-4 md:px-0">
              <div className="mb-4">
                <p><span className="text-[#4A62AA] text-xl font-bold"> Laurata.com</span> est édité par la
                  société MOSAIK, immatriculée au Registre de Commerce sous le numéro RC/YAO/2020/A/1319, et
                  dont le siège social est à Yaoundé. </p>
              </div>
              <div className="mb-4">


                <p className="my-2"> L’Éditeur est joignable par courrier électronique à l’adresse suivante :
                  info@laurata.com ou par téléphone au +237 690 707 253. </p>
                <p className="my-2"> Les CGU ont été établies conformément à l’ensemble des dispositions
                  législatives et règlementaires applicables en la matière. </p>
              </div>



             


            </div>

          </div>
        </div>

      </div>
      <div className=" flex flex-row justify-center gap-4">
        <BandeauMobile />
      </div>
      <footer className="w-full bg-blue-900   mt-10 text-white text-center">
        <FooterMobile />
      </footer>
    </div>
  );
}
