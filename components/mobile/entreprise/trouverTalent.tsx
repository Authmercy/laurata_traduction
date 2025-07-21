"use client";

import Link from "next/link";
import Navbar from "../navbar/navbar";
import Image from "next/image";
import { useState } from "react";
import FooterMobile from "../footer/footerEnd";
import en from '@/i18/en/entreprise/talent.json';
import fr from '@/i18/fr/entreprise/talent.json';
import { useRouter } from "next/router";

export default function TrouverMobile() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileMenuOpen2, setIsMobileMenuOpen2] = useState(false);

  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : fr;


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
            <p>            {t.find_talents}</p>
          </div>



          <div className=" bg-white/70 pt-2 mt-8">
            <div className=" border-1 p-6  text-center border-[#4A62AA]" >
              <p className="text-[#4A62AA] text-xl">{t.recruitment_text}</p>
              <p className="mt-4 text-black" >
                   {t.contact_text} </p>
              <p className="mt-8 text-[#4A62AA] font-extrabold" >
                <Link href="/misc/nous_contacter" className="  hover:text-xl">       {t.contact_us}
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