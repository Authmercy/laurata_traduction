"use client";

import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link"
import Navbar from "../navbar/navbar";
import { useState } from "react";
import FooterMobile from "../footer/footerEnd";

import en from '@/i18/en/entreprise/promotion.json';
import fr from '@/i18/fr/entreprise/promotion.json';
export default function VisibiliteMobile() {
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
                    <div className="justify-center p-2 text-center text-xl font-bold uppercase bg-[#414040] text-white">
                        <p>                 {t.title} </p>
                    </div>


                    <div className=" bg-white/70 pt-2 mt-8">
                        <div className="   border-1 p-3  text-start border-[#4A62AA]" >
                            <p className="text-[#4A62AA] font-bold text-justify text-lg">{t.subtitle1}</p>
                        </div>
                        <p className="mt-4 text-black p-3  bg-white " >
                           {t.text1}</p>

                        <div className=" border-4  border-x-0   text-white  border-[#A87A38] " >
                            <div className="grid grid-col-1 mx-3 lg:flex-row flex-grow justify-center gap-1 my-1">
                                <div className="bg-[#4A62AA] rounded-lg  p-6  text-center ">

                                    <p>   <b>
                              {t.valoriser}
                                       </b> {t.valoriserText} </p>
                                </div>
                                <div className="bg-[#093970]  rounded-lg text-center  items-stretch   p-6">

                                    <p>   <b>{t.faireConnaitre}</b>  {t.faireConnaitreText}</p>
                                </div>
                                <div className="bg-[#A87A38]  rounded-lg text-center  p-6 ">

                                    <p>   <b>
                                        {t.obtenir}</b>  {t.obtenirText}</p>
                                </div>
                                <div className="bg-[#6e6962]  rounded-lg  text-center p-6 ">

                                    <p>   <b> {t.communiquer} </b> {t.communiquerText}</p>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="  bg-white/70  text-center mt-3 border-1 p-3  border-[#4A62AA]" >
                        <p className="text-[#4A62AA] font-bold justify-center text-lg">
                             {t.subtitle2}</p>
                    </div>
                    <div className="  bg-white  p-3">
                        <p className=" mt-2  text-black ">     {t.text2}   </p> </div>
                    <p className=" p-3  bg-white  text-black ">
                    <span className="font-extrabold">   <Link href="/misc/nous_contacter" className="hover:text-xl">
           {t.contact}
            </Link>
          </span> {t.contactText}</p>


                </div>

            </div>
            <footer className="w-full bg-blue-900   mt-24 text-white text-center">
                <FooterMobile />
            </footer>
        </div>

    );
}