"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "../navbar/navbar";
import FooterMobile from "../footer/footerEnd";
import en from '@/i18/en/misc/apropos.json';
import fr from '@/i18/fr/misc/apropos.json';

export default function PresentaionDuSiteMobile() {
      const router = useRouter();
   const { locale } = router;
    const t = locale === 'en' ? en : fr;

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
               <p>
                             {locale === 'en' ? 'About US' : 'À PROPOS'} 
                        </p>
             </div>
   
   
          
             <div className="grid grid-cols-1  bg-white  text-black lg:flex-row flex-grow p-2 justify-center mt-4   ">
                      <div className="my-4  ">
                        <p> {t.plateform}<span className="text-[#4A62AA] text-xl font-bold"> LAURATA.COM</span> {t.p1}</p>
                    </div>
                    <div className="mb-4">

                        <p > <span className="text-[#4A62AA]  ">  ▌ </span> {t.p2} <span className="text-[#4A62AA] text-xl font-bold"> LAURATA </span>{t.p22}

 </p>
                    </div>

                    <div className="mb-4">

                        <p > <span className="text-[#4A62AA]  ">  ▌ </span> <span className="text-[#4A62AA] text-xl font-bold"> LAURATA </span>{t.p3}</p>




                    </div>
                   
                   
                    
                   





          <div className="flex flex-col md:flex-row justify-center md:items-center gap-4 md:gap-16">
            <div className="text-[#A38340] text-center font-bold pt-8 text-xl">  {t.shareTitle}</div>
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
