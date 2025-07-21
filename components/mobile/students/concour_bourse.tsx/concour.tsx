"use client";
import React, { useRef } from "react";
import { useEffect, useState } from "react";

import ForceArmeComponent from "./forceEtDefence";
import Navbar from "../../navbar/navbar";
import FooterMobile from "../../footer/footerEnd";
import FonctionPubliqueTable from "@/components/web/students/concour_bourse.tsx/tableFonctionPublic";
import InstitutionsPriveTable from "@/components/web/students/concour_bourse.tsx/tableInstitutionPrive";
import InstitutionsPublicTable from "@/components/web/students/concour_bourse.tsx/tableInstitutionPublique";
import InstitutionsTransnationaleTable from "@/components/web/students/concour_bourse.tsx/tableInstitutionTransnationales";
import LiberaleTable from "@/components/web/students/concour_bourse.tsx/tableLiberales";
import en from '@/i18/en/student/concous_bourse.json';
import fr from '@/i18/fr/student/concous_bourse.json';
import { useRouter } from "next/router";


export default function ConcourComponentMobile() {
 const router = useRouter();

    const { locale } = router;
    const t = locale === 'en' ? en : fr;
    const [open, setOpen] = useState(null);

    const handleToggle = (index: any) => {
        setOpen(open === index ? null : index);
    };
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

                         {t.concours.subtitle}
                        </p>  </div>







   
                    <div className="flex flex-col mt-4 sm:flex-row gap-1">
                                <button
                                    className="w-full  py-2 px-4  bg-white/70 text-[#9b6e0f] flex justify-between "
                        onClick={() => handleToggle(7)}
                    >
                     <span className="flex-grow text-start">    {t.concours.instructionsTitle}</span>
               
                                    <span className="sm:ml-10 text-2xl">{open === 7 ? "▲" : "▼"}</span>
                                </button>

                    </div>
                    {open === 7 && (
                        <div className="bg-white/70   ">


                           <div className="w-full  py-4 px-8 text-black">

                                <p className=" font-bold mb-4">
                                    {t.concours.avant}
                                </p>
                                {t.concours.instructions.map((item, idx) => (
                                    <p key={idx}>
                                        <span className="text-[#4A62AA] font-bold">{['i)', 'ii)', 'iii)', 'iv)'][idx]}</span>&nbsp;&nbsp;{item}
                                    </p>
                                ))}

                                <p className="mt-4">
                                    <span className="text-red-600 font-bold">{t.concours.warningTitle}<br /></span>
                                    - {t.concours.warning1}
                                </p>
                                <p>
                                    <span className="text-[#4A62AA] font-bold">-</span>
                                    <span className="text-red-600"> {t.concours.warning2} </span>
                                    {t.concours.warning3}
                                </p>
                                <p>- {t.concours.warning4}</p>
                            </div>
                       



                        </div>)}

                    <div className="mt-4 space-y-4">
                        <div>

                            <div className="flex flex-col sm:flex-row gap-1">
                                <button
                                    className="w-full  py-2 px-4  bg-[#4c75f0] text-white flex justify-between "
                                    onClick={() => handleToggle(1)}
                                >
                                    <span className="flex-grow text-start">{t.concours.sections.public}</span>
                                    <span className="sm:ml-10 text-2xl">{open === 1 ? "▲" : "▼"}</span>
                                </button>


                            </div>

                            {open === 1 && (
                                <div className="bg-white/60 p-2">
                                    <div className="w-full">
                                        <div className="bg-white/60  pb-0 grid grid-cols-1 sm:grid-cols-[1fr_3fr] gap-8 mt-2">


                                            <div className="w-full  py-4  text-black">

                                             
                                            </div>
                                            <p className="text-lg text-black p-2 bg-white">
                                                {t.concours.calendarHint}  <b className="underline text-[#4A62AA] ">
                                                      {locale === 'en' ? 'here' : 'ici'}</b>.
                                            </p>
                                            <InstitutionsPublicTable></InstitutionsPublicTable>

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
                                    <span className="flex-grow text-start">{t.concours.sections.private} </span>
                                    <span className="sm:ml-10 text-2xl">{open === 2 ? "▲" : "▼"}</span>
                                </button>


                            </div>

                            {open === 2 && (
                                <div className="bg-white/60 p-2">
                                    <div className="w-full bg-white/60 py-2  md:px-0">

                                        <div className="w-full  py-4  text-black">

                                         

                                        </div>

                                        <InstitutionsPriveTable></InstitutionsPriveTable>

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
                                    <span className="flex-grow text-start"> {t.concours.sections.transnational}</span>

                                    <span className="sm:ml-10 text-2xl">{open === 3 ? "▲" : "▼"}</span>
                                </button>


                            </div>

                            {open === 3 && (
                                <div className="bg-white/60 p-2">
                                    <div className="w-full bg-white/60 py-2 md:px-0">
                                        <div className="w-full  p-4  text-black">

                                            

                                        </div>
                                        <InstitutionsTransnationaleTable></InstitutionsTransnationaleTable>

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
                                    onClick={() => handleToggle(4)}
                                >
                                    <span className="flex-grow text-start">{t.concours.sections.liberal}</span>  <span className="sm:ml-10 text-2xl">{open === 4 ? "▲" : "▼"}</span>
                                </button>


                            </div>

                            {open === 4 && (
                                <div className="bg-white/60 p-2">
                                    <div className="w-full bg-white/60 py-2  md:px-0">
                                        <div className="w-full  py-4  text-black">

                                            
                                        </div>
                                        <LiberaleTable></LiberaleTable>
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
                                    onClick={() => handleToggle(5)}
                                >
                                    <span className="flex-grow text-start">{t.concours.sections.fonction}
                                    </span>
                                    <span className="sm:ml-10 text-2xl">{open === 5 ? "▲" : "▼"}</span>
                                </button>


                            </div>

                            {open === 5 && (
                                <div className="bg-white/60 p-2">
                                    <div className="w-full bg-white/60 py-2">
                                        <div className="w-full  py-4  text-black">

                                          

                                        </div>
                                        <FonctionPubliqueTable></FonctionPubliqueTable>



                                    </div>
                                </div>
                            )}
                        </div>

                    </div>

                    <div className="mt-2 space-y-4">
                        <div>

                            <div className="flex flex-col sm:flex-row gap-1">
                                <button
                                    className="w-full py-2 px-4  text-center bg-[#4c75f0] text-white flex items-center justify-between"
                                    onClick={() => handleToggle(6)}
                                >
                                    <span className="flex-grow text-start">{t.concours.sections.defense}
                                    </span>
                                    <span className="text-2xl">{open === 6 ? "▲" : "▼"}</span>
                                </button>


                            </div>

                            {open === 6 && (
                                <div className="bg-white/60 p-2">
                                    <div className="w-full bg-white/60  ">
                                        <div className="w-full  py-4  text-black">

                                            
                                            <ForceArmeComponent></ForceArmeComponent>
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