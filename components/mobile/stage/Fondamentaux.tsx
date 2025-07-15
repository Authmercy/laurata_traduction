"use client";

import Link from "next/link";
import { useRouter } from "next/router";
import Navbar from "../navbar/navbar";
import Image from "next/image";
import { useState } from "react";
import FooterMobile from "../footer/footerEnd";
export default function FondamentauxPourPostulerMobile() {




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
            <p>  GUIDE POUR POSTULER À UNE OFFRE</p>
          </div>


          <div

            className="bg-white/70   mt-8 p-2 py-4 shadow-sm mb-2 hover:shadow-md transition-shadow"
          >
              <Link href="/students/postulerStage">
              <div className="flex items-center gap-2 py-2">
                <img src="/icons/puces_1.png" alt="" className="w-5 " />
                <p className="text-[#4A62AA]  font-bold uppercase hover:text-[#A87A38] "> POstuler À un  stage</p>
              </div>
            </Link>
            
            <Link href="/students/premierEmploi">
              <div className="flex items-center gap-2 py-2">


                <img src="/icons/puces_1.png" alt="" className="w-5" />
                <p className="text-[#4A62AA] font-bold uppercase hover:text-[#A87A38] ">   Postuler À un premier emploi </p>
              </div>
            </Link>
          


          </div>

         

        </div>
        
      </div>
  <footer className="w-full bg-blue-900    text-white text-center">
                                            <FooterMobile />
                                          </footer>
    </div>
  );
}