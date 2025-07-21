"use client";
import React, { useRef } from "react";
import { useEffect, useState } from "react";
import UnivPublique from "./tableUniversieEtat";
import IPESLaiques from "./tableIPESLaiques";
import IPESConfess from "./tableIPESConfess";
import PublicSup from "./tablePublicSup";
import PublicAStatutParticuler from "./tableEtablisseemntPublic";
import Navbar from "../../navbar/navbar";
import TransNational from "@/components/mobile/students/bacAlafac/tableTransnationale";
import FooterMobile from "../../footer/footerEnd";

import en from '@/i18/en/student/institutionSup.json';
import fr from '@/i18/fr/student/institutionSup.json';
import { useRouter } from "next/router";

export default function InstitutionComponentMobile() {
    const [open, setOpen] = useState(null);
    const handleToggle = (index: any) => {
        setOpen(open === index ? null : index);
    };

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
                    <div className="justify-center p-2 text-center text-xl font-bold uppercase bg-[#9b6e0f] hover:bg-[#dac393] text-white">

                        <p>
              {t.institutionsTitle}
                        </p>  </div>

                    <div className="mt-8  space-y-4">
                        <div>

                            <div className="flex flex-col sm:flex-row gap-1">
                                <button
                                    className="w-full  py-2 px-4  bg-[#4c75f0] text-white flex justify-between "
                                    onClick={() => handleToggle(1)}
                                >
                                    <span className="flex-grow text-start">{t.publicInstitutions}  </span>
                                    <span className="sm:ml-10 text-2xl">{open === 1 ? "▲" : "▼"}</span>
                                </button>


                            </div>

                            {open === 1 && (
                                <div className="bg-white/60 p-2">
                                    <div className="w-full">
                                        <div className="bg-white/60 p-2 pb-0 grid grid-cols-1 sm:grid-cols-[1fr_3fr] gap-8 mt-2">




                                            <div className="w-full ">
                                                <p className="p-4 text-black ">
                                                {t.publicInstitutionsIntro}    </p>
                                                <p className="p-4  font-bold text-[#d47f2f] text-xl">
                                                   {t.stateUniversities}
                                                </p>
                                                <p className="text-black p-4"     dangerouslySetInnerHTML={{ __html: t.stateUniversitiesText }}  />                               <UnivPublique></UnivPublique>
                                                <div>

                                                    <p className="p-4 mt-4 font-bold text-[#d47f2f] text-xl">
                                                      {t.specialStatusInstitutions}
                                                    </p>
                                                    <PublicAStatutParticuler></PublicAStatutParticuler>
                                                </div>
                                                <p className="p-4 mt-4  font-bold text-[#d47f2f] text-xl">
                                                 {t.otherPublicInstitutions}
                                                </p>
                                                <PublicSup></PublicSup>

                                            </div>



                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>
                    <div className="mt-2 space-y-4">
                        <div>

                            <div className="flex flex-col sm:flex-row gap-1">
                                <button
                                    className="w-full    py-2 px-4  bg-[#4c75f0] text-white  flex justify-between items-center sm:justify-center"
                                    onClick={() => handleToggle(2)}
                                >
                                    <span className="flex-grow text-start">{t.privateInstitutions}     </span>
                                    <span className="sm:ml-10 text-2xl">{open === 2 ? "▲" : "▼"}</span>
                                </button>


                            </div>

                            {open === 2 && (
                                <div className="bg-white/60 p-4">
                                    <div className="bg-white/80  ">
                                        <div className="w-full space-y-2 p-2 text-black">

                                               <p>{t.privateInstitutionsIntro}</p>
                                           <div className="mt-6">
                    <p>
                      <b><span className="text-[#4A62AA]">{t.authorization}</span></b> {t.authorizationText}
                    </p>
                    <p>
                      <b><span className="text-[#4A62AA]">{t.accreditation}</span></b> {t.accreditationText}
                    </p>
                    <p>
                      <b><span className="text-[#4A62AA]">{t.homologation}</span></b> {t.homologationText}
                    </p>
                  </div>
                                            <p className="mt-10">
                                           {t.reputedIPES}
                                            </p>
                                            <div className="bg-[#4A62AA]  p-4">
                                                <p className="text-white text-xl text-center   font-bold">

                                         {t.secularIPES}

                                                </p>
                                            </div>
                                            <IPESLaiques></IPESLaiques>
                                            <div className="bg-[#9C824A]  p-4">
                                                <p className="text-white text-center  text-xl  font-bold">

                                                 {t.religiousIPES}

                                                </p>

                                            </div>
                                            <IPESConfess></IPESConfess>
                                            <div className="bg-white p-6 space-y-2">

                                                <p className="text-[#4A62AA] uppercase  font-bold">
                                                 {t.notaBeneTitle}
                    </p>
                    <p>{t.notaBeneText}</p>
                                            </div>
                                            <div className="bg-white p-6 space-y-2">

                                              <p className="text-red-500 uppercase font-bold">
                      {t.warningTitle}
                    </p>
                    <p>{t.warningPoint1}</p>
                    <p className="text-red-500">{t.warningPoint2}</p>
                    <p>{t.warningPoint3}</p>
                                            </div>
                                        </div>





                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="mt-2 space-y-4">
                        <div>

                            <div className="flex flex-col sm:flex-row gap-1">
                                <button
                                    className="w-full    py-2 px-4  bg-[#4c75f0] text-white flex justify-between items-center sm:justify-center"
                                    onClick={() => handleToggle(3)}
                                >
                                    <span className="flex-grow text-start">{t.transnationalInstitutions}</span>

                                    <span className="sm:ml-10 text-2xl">{open === 3 ? "▲" : "▼"}</span>
                                </button>


                            </div>

                            {open === 3 && (
                                <div className="bg-white/60 p-2">
                                    <div className="w-full bg-white p-2  md:px-0">

                                        <p className="text-black p-2">
                                          {t.transnationalIntro}
                                        </p>


                                        <TransNational></TransNational>
                                    </div>

                                </div>
                            )}
                        </div>



                    </div>

                    <div className="mt-2 space-y-4">
                        <div>

                            <div className="flex flex-col sm:flex-row gap-1">
                                <button
                                    className="w-full py-2 px-4 text-center bg-[#4c75f0] text-white flex items-center justify-between"
                                    onClick={() => handleToggle(7)}
                                >
                                    <span className="flex-grow text-start"> {t.referencesTitle}</span>
                                    <span className="sm:ml-10 text-2xl">{open === 7 ? "▲" : "▼"}</span>
                                </button>


                            </div>

                            {open === 7 && (
                                <div className="bg-white/60 p-4">
                                    <div className="bg-white/80 text-black p-4 ">

                                        <div className="w-full">
                                           <p  className="text-[#4A62AA] " dangerouslySetInnerHTML={{ __html: t.reference1 }}/>
                  <p  className="text-[#4A62AA] "  dangerouslySetInnerHTML={{ __html: t.reference2 }}/>
                  <p>{t.reference3}</p>



                                        </div>





                                    </div>
                                </div>
                            )}
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