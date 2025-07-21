"use client";
import React, { useRef } from "react";
import { useEffect, useState } from "react";
import Navbar from "../../navbar/navbar";
import FooterMobile from "../../footer/footerEnd";
import { useRouter } from "next/router";
import en from '@/i18/en/student/preparerSonBac.json';
import fr from '@/i18/fr/student/preparerSonBac.json';

export default function PreparesonBacComponentMobile() {
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
            <div className="min-h-screen   bg-[#4A62AA] text-black overflow-auto  w-screen bg-cover  text-justify bg-center bg-no-repeat "  >
       
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
                           {t.prepare}
                        </p>  </div>





                    <div className="mt-8   text-black bg-white/70 p-4 space-y-4">
                        <p>
                                         {t.intro[0]}
                        </p>
                        <p className="text-[#4A62AA] text-center text-lg font-bold" >
                                    {t.intro[1]}
                        </p>
                        <div className="overflow-x-auto">
                            <div className="flex gap-4 flex-col px-2">
                                <div className=" bg-[#A87A38]/20 p-4 rounded">
                                    <p className="text-[#4A62AA] text-center font-bold">{t.sections.enClasse.title}</p>
                         {t.sections.enClasse.points.map((point, i) => <p key={i} dangerouslySetInnerHTML={{ __html: point}} />)}
                                </div>

                                <div className=" bg-[#A87A38]/30 p-4 rounded">
                                    <p className="text-[#4A62AA] text-center font-bold">{t.sections.aLaMaison.title}</p>
                           {t.sections.aLaMaison.points.map((point, i) => <p key={i} dangerouslySetInnerHTML={{ __html: point}} />)}
                                </div>

                                <div className=" bg-[#A87A38]/40 p-4 rounded">
                                    <p className="text-[#4A62AA] text-center font-bold">{t.sections.avecCamarades.title}</p>
                                    <p dangerouslySetInnerHTML={{ __html: t.sections.avecCamarades.text}} />
                                </div>

                                <div className=" bg-[#A87A38]/50 p-4 rounded">
                                    <p className="text-[#4A62AA] text-center font-bold">{t.sections.internet.title}</p>
                 
                             <p dangerouslySetInnerHTML={{ __html: t.sections.internet.text}} />
                                </div>

                                <div className=" bg-[#A87A38]/60 p-4 rounded">
                                    <p className="text-[#4A62AA] text-center font-bold"> {t.sections.sport.title}</p>
                        
                             <p dangerouslySetInnerHTML={{ __html: t.sections.sport.text}} />
                                </div>
                            </div>
                        </div>



                        <div className="mt-2 space-y-4">
                            <div>

                                <div className="flex flex-col sm:flex-row gap-1">
                                    <button
                                        className="w-full py-2 px-4 text-center bg-[#4c75f0] text-white flex items-center justify-between"
                                        onClick={() => handleToggle(5)}
                                    >
                                        <span className="flex-grow text-start">  { t.astuces.title } </span>
                                        <span className="sm:ml-10 text-2xl">{open === 5 ? "▲" : "▼"}</span>
                                    </button>


                                </div>

                                {open === 5 && (
                                    <div className="bg-white/60 ">
                                        <div className="w-full bg-white/60  p-2 ">
                                              <p dangerouslySetInnerHTML={{ __html: t.astuces.intro }} />
                                        {t.astuces.profils.map((profil, i) => (
                                            <p key={i}><span className="text-[#4A62AA] font-bold">- {profil.label}</span> {profil.text}</p>
                                        ))}
                                        <p dangerouslySetInnerHTML={{ __html: t.astuces.conclusion }} />
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
                                        onClick={() => handleToggle(6)}
                                    >
                                        <span className="flex-grow text-start">  {t.veilleExam.title}</span>
                                        <span className="sm:ml-10 text-2xl">{open === 6 ? "▲" : "▼"}</span>
                                    </button>


                                </div>

                                {open === 6 && (
                                    <div className="bg-white/60 ">
                                        <div className="w-full bg-white/60 p-2">
                                            <p> <span className="text-[#4A62AA] text-2xl font-bold "> - </span>
                                                {t.veilleExam.points[0]}</p>
                                            <p> <span className="text-[#4A62AA] text-2xl font-bold "> - </span>
                                                {t.veilleExam.points[1]}  </p>

                                            <p> <span className="text-[#4A62AA] text-2xl font-bold "> - </span>
                                                {t.veilleExam.points[2]}<br /> <span className="font-bold "> NB :  </span>
                                                <i>      {t.veilleExam.points[3]}
                                                </i> </p>    </div>







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
                                        <span className="flex-grow text-start"> {t.references.title}</span>
                                        <span className="sm:ml-10 text-2xl">{open === 7 ? "▲" : "▼"}</span>
                                    </button>


                                </div>

                                {open === 7 && (
                                    <div className="bg-white/60 ">
                                        <div className="w-full bg-white p-2 space-y-2">
                                             {t.references.list.map((tip, index) => (
                                                <p
                                                    key={index}

                                                >
                                                    -  {tip.name}<i className="text-[#4A62AA]"> {tip.title}</i> {tip.edition}
                                                </p>
                                            ))}



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
                                        onClick={() => handleToggle(8)}
                                    >
                                        <span className="flex-grow text-start">{t.liensUtiles.title}</span>
                                        <span className="sm:ml-10 text-2xl">{open === 8 ? "▲" : "▼"}</span>
                                    </button>


                                </div>

                                {open === 8 && (
                                    <div className="bg-white/60 ">
                                        <div className="w-full bg-white/60 p-2 ">
                                            <div className="space-y-4 text-start">

{t.liensUtiles.links.map((link, i) => (
                                                    <p key={i}>- {link.name} <br />
                                                        <a href={link.url} className="text-blue-600" target="_blank" rel="noopener noreferrer">
                                                            <i>{link.url}</i>
                                                        </a>
                                                    </p>
                                                ))} </div>






                                        </div>

                                    </div>
                                )}
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
