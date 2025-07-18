"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../navbar/navbar";
import BandeauMobile from "../footer/footer";
import FooterMobile from "../footer/footerEnd";

import en from '@/i18/en/misc/cgu.json';
import fr from '@/i18/fr/misc/cgu.json';
import { useRouter } from "next/router";

export default function CguComponentMobile() {

    const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileMenuOpen2, setIsMobileMenuOpen2] = useState(false);
    const { locale } = router;
    const t = locale === 'en' ? en : fr;
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
           <p>{locale === 'en' ? 'Terms of use' : 'CONDITIONS GÉNÉRALES D’UTILISATION'}</p>
                         
          </div>



          <div className="flex p-3 bg-white text-black gap-1 w-full">
            <div className="flex justify-center text-justify flex-col w-full px-2 md:px-0">
              <div className="mb-4">
                        <p dangerouslySetInnerHTML={{ __html: t.intro }} /></div>
              <div className="mb-4">
                <h1 className="mb-4 text-[#4A62AA] font-bold ">
                  
                 {t.sections.acceptance.title}</h1>
               <p>{t.sections.acceptance.content}</p>
               
                </div>


             
          <div className="mb-4">
             <h1 className="mb-4 text-[#4A62AA] font-bold ">{t.sections.purpose.title}</h1>
            <p className="mb-2">{t.sections.purpose.text}</p>
            {t.sections.purpose.points.map((point, index) => (
              <p key={index} className="mb-2">― {point}</p>
            ))}
          </div>

      
          <div className="mb-4">
             <h1 className="mb-4 text-[#4A62AA] font-bold ">{t.sections.availability.title}</h1>
            <p className="mb-2">{t.sections.availability.content}</p>
          </div>

  
          <div className="mb-4">
             <h1 className="mb-4 text-[#4A62AA] font-bold ">{t.sections.quality.title}</h1>
            {t.sections.quality.points.map((point, index) => (
              <p key={index} className="mb-2">{point}</p>
            ))}
          </div>

     
          <div className="mb-4">
             <h1 className="mb-4 text-[#4A62AA] font-bold ">{t.sections.liability.title}</h1>
            {t.sections.liability.points.map((point, index) => (
              <p key={index} className="mb-2">{point}</p>
            ))}
          </div>


          <div className="mb-4">
             <h1 className="mb-4 text-[#4A62AA] font-bold ">{t.sections.notification.title}</h1>
            {t.sections.notification.points.map((point, index) => (
              <p key={index} className="mb-2">{point}</p>
            ))}
          </div>

        
          <div className="mb-4">
             <h1 className="mb-4 text-[#4A62AA] font-bold ">{t.sections.ip.title}</h1>
            {t.sections.ip.points.map((point, index) => (
              <p key={index} className="mb-2">{point}</p>
            ))}
          </div>

        
          <div className="mb-4">
             <h1 className="mb-4 text-[#4A62AA] font-bold ">{t.sections.links.title}</h1>
            <p className="mb-2">{t.sections.links.content}</p>
          </div>

       
          <div className="mb-4">
             <h1 className="mb-4 text-[#4A62AA] font-bold ">{t.sections.privacy.title}</h1>
            {t.sections.privacy.points.map((point, index) => (
              <p key={index} className="mb-2">{point}</p>
            ))}
          </div>

          
          <div className="mb-4">
             <h1 className="mb-4 text-[#4A62AA] font-bold ">{t.sections.forum.title}</h1>
            {t.sections.forum.points.map((point, index) => (
              <p key={index} className="mb-2">{point}</p>
            ))}
          </div>

          <div className="mb-4">
             <h1 className="mb-4 text-[#4A62AA] font-bold ">{t.sections.jurisdiction.title}</h1>
            {t.sections.jurisdiction.points.map((point, index) => (
              <p key={index} className="mb-2">{point}</p>
            ))}
          </div>


             
  
            </div>
                        
          </div>
           <div className=" flex flex-row justify-center gap-4">
                <BandeauMobile />
              </div>
           <footer className="w-full bg-blue-900    text-white text-center">
                              <FooterMobile />
                          </footer>  
        </div>

      </div>


    </div>
  );
}
