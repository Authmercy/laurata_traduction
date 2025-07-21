"use client";
import React, {  useState } from "react";
import Link from "next/link";


import en from '@/i18/en/student/atout.json';
import fr from '@/i18/fr/student/atout.json';
import { useRouter } from "next/router";

import Navbar from "../../navbar/navbar";
import FooterMobile from "../../footer/footerEnd";


export default function AtoutComponentMobile() {
    const [open, setOpen] = useState(null);
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
                    <div className="justify-center p-2 text-center text-xl font-bold uppercase bg-[#9b6e0f] hover:bg-[#dac393] text-white">

                        <p>
                     {t.atoutsTitle}

                        </p>  </div>



                    <div className="mt-8   text-black bg-white/70 p-2 space-y-4">


                        <div className="mt-1  text-black bg-white/60 p-4 space-y-4">
                            <div >
                                <p className="text-[#4A62AA] text-start my-2 font-bold">
                                    ■   {t.bilinguismeTitle}
              </p>
                                     <p>{t.bilinguismeText}</p>
                            </div>
                            <div >
                                <p className="text-[#4A62AA] text-start my-2 font-bold">
                                ■   {t.lmdTitle}
              </p>
              <p>{t.lmdText}</p>
                            </div>
                            <div >
                                <p className="text-[#4A62AA] text-start my-2 font-bold">
                                 ■     {t.siegeTitle}
              </p>
              <p>{t.siegeText}</p>
                            </div>
                            <div >
                                <p className="text-[#4A62AA] text-start my-2 font-bold">
                             ■       {t.ipesTitle}
              </p>
              <p>{t.ipesText}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="w-full bg-blue-900    mt-10 text-white text-center">
                <FooterMobile />
              </footer>
            </div>
 
        </div>

    );
}