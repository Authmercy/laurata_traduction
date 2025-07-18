"use client";
import React, { useState} from "react";
import en from '@/i18/en/misc/mention.json';
import fr from '@/i18/fr/misc/mention.json';
import { useRouter } from "next/router";


import BandeauMobile from "../footer/footer";
import Navbar from "../navbar/navbar";
import FooterMobile from "../footer/footerEnd";

export default function LegalSectionMobile() {
  const router = useRouter();
const { locale } = router;
    const t = locale === 'en' ? en : fr;
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
        <p>
                                    {locale === 'en' ? 'Legal Notice' : 'MENTIONS LÉGALES'} 
                        </p>
          </div>



          <div className="flex p-3 bg-white text-black gap-1 w-full">
            <div className="flex justify-center text-justify flex-col w-full px-4 md:px-0">
                 <div className="mb-4">
            <p dangerouslySetInnerHTML={{ __html: t.intro }} />
          </div>
               <div className="mb-4">
            <p className="my-2">{t.contact}</p>
            <p className="my-2">{t.terms}</p>
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
