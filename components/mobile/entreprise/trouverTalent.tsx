"use client";

import Link from "next/link";
import Navbar from "../navbar/navbar";
import Image from "next/image";
import { useState } from "react";
import FooterMobile from "../footer/footerEnd";


export default function TrouverMobile() {
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
          <div className="justify-center p-2 text-center text-xl font-bold uppercase bg-[#414040] text-white">
            <p>        TROUVER DES TALENTS</p>
          </div>



          <div className=" bg-white/70 pt-2 mt-8">
            <div className=" border-1 p-6  text-center border-[#4A62AA]" >
              <p className="text-[#4A62AA] text-xl">Vous avez un recrutement en vue ? Optimisez vos délais de recrutement.</p>
              <p className="mt-4 text-black" >
                N’hésitez pas à nous contacter pour recevoir les CV des diplômés talentueux et ambitieux de notre CVthèque. </p>
              <p className="mt-8 text-[#4A62AA] font-extrabold" >
                <Link href="/misc/nous_contacter" className="  hover:text-xl">       Contactez-nous.
                </Link>

              </p>

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