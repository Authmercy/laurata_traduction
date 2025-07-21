"use client";
import React, { useRef } from "react";
import { useEffect, useState } from "react";
import Navbar from "../../navbar/navbar";
import FooterMobile from "../../footer/footerEnd";

import en from '@/i18/en/student/handicap.json';
import fr from '@/i18/fr/student/handicap.json';
import { useRouter } from "next/router";
export default function HandicapComponentMobile() {
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
                    <div className="justify-center p-2 text-center text-xl font-bold uppercase bg-[#9b6e0f] hover:bg-[#dac393] text-white">

                        <p>
         {t.title}
                        </p>  </div>






                    <div className="mt-8   text-black bg-white/70 p-4 space-y-4">
                        <p>
                           {t.paragraph1}  </p>
                        <p dangerouslySetInnerHTML={{ __html: t.paragraph2 }} />

                   
                    </div>
                    <div className="mt-4 space-y-4">
                        <div>

                            <div className="flex flex-col sm:flex-row gap-1">
                                <button
                                    className="w-full  py-2 px-4  bg-[#4c75f0] text-white flex justify-between "
                                    onClick={() => handleToggle(1)}
                                >
                                    <span className="flex-grow text-start"> {t.handicapTitle}        </span>
                                    <span className="sm:ml-10 text-2xl">{open === 1 ? "▲" : "▼"}</span>
                                </button>


                            </div>

                            {open === 1 && (
                                <div className="bg-white/60 ">
                                      <div className="w-full">
                                            {t.rows.map((row, index) => (
                                                <div
                                                    key={index}
                                                    className={`mt-2  p-2 grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4 ${index % 2 === 0 ? 'bg-white' : ''
                                                        }`}
                                                >
                                                    <div className="font-bold text-start">
                                                        {row.title}
                                                    </div>
                                                    <div className="max-w-4xl">
                                                        {row.content.map((item, itemIndex) => (
                                                            <p key={itemIndex} className="mb-1">
                                                                <span className="uppercase text-[#4A62AA] font-bold">
                                                                    {item.boldText}
                                                                </span> {item.normalText}
                                                            </p>
                                                        ))}
                                                    </div>
                                                </div>
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
                                    onClick={() => handleToggle(4)}
                                >
                                    <span className="flex-grow text-start">{t.usefulInfoTitle}</span>  <span className="sm:ml-10 text-2xl">{open === 4 ? "▲" : "▼"}</span>
                                </button>


                            </div>

                            {open === 4 && (
                                <div className="bg-white/60 p-2">
                                    <div className="w-full bg-white/60 ">
                                        <div className="w-full ">

                                            <p className="py-4 px-2">
                                            <b>{t.exemptionInfo.bold}</b> {t.exemptionInfo.text}   </p>
                                            <p className="bg-[#becbf3]  px-2 py-4">
                                                <b>{t.distanceLearning.bold}</b> {t.distanceLearning.text}
                                            </p>
                                            <p className="py-4  px-2">
                                               <b>{t.disabilityCertification.bold}</b> {t.disabilityCertification.text}
                                                <i> {t.disabilityCertification.italic}</i>  </p>
                                            <p className="bg-[#becbf3]  px-2 py-4">
                                                <b>{t.ipesExemption.bold}</b> {t.ipesExemption.text}
                                            </p>


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
                                    onClick={() => handleToggle(5)}
                                >
                                    <span className="flex-grow text-start">{t.content4.title}
                                    </span>
                                    <span className="sm:ml-10 text-2xl">{open === 5 ? "▲" : "▼"}</span>
                                </button>


                            </div>

                            {open === 5 && (
                                <div className="bg-white/60 p-2">
                                    <div className="w-full bg-white/60 ">
                                         <div className="w-full space-y-2">
          {t.resources.map((resource, index) => (
            <div 
              key={index} 
              className={index % 2 === 1 ? 'bg-[#becbf3] space-y-2 p-4' : 'space-y-2 p-4'}
            >
              <p>
                <b className="text-[#A87A38]">{resource.title}</b>
              </p>
              
              {resource.description && (
                <p>{resource.description}</p>
              )}
              
              {resource.location && (
                <p>
                  <i>Localisation</i>: {resource.location}
                </p>
              )}
              
              {resource.phone && (
                <p>
                  <i>Tél</i>: {resource.phone}
                </p>
              )}
              
              {resource.website && (
                <p>
                  <i>Site web </i>:  <a 
                    href={resource.website.url} 
                    className="text-[#4A62AA]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {resource.website.text}
                  </a>
                </p>
              )}
            </div>
          ))}
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
                                    className="w-full py-2 px-4  text-center bg-[#4c75f0] text-white flex items-center justify-between"
                                    onClick={() => handleToggle(6)}
                                >
                                    <span className="flex-grow text-start">{t.content5}
                                    </span>
                                    <span className="text-2xl">{open === 6 ? "▲" : "▼"}</span>
                                </button>


                            </div>

                            {open === 6 && (
                                <div className="bg-white/60 p-4">
                                    <div className="w-full bg-white/60 p-2 space-y-2 ">
                                       {t.text.map((ref, index) => (
                                                <p key={index} className="mb-3">
                                                    <b>
                                                        {ref.bold}
                                                    </b>
                                                    {ref.text}


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
                                    className="w-full py-2 px-4 text-center bg-[#4c75f0] text-white flex items-center justify-between"
                                    onClick={() => handleToggle(7)}
                                >
                                    <span className="flex-grow text-start"> {t.content6}</span>
                                    <span className="sm:ml-10 text-2xl">{open === 7 ? "▲" : "▼"}</span>
                                </button>


                            </div>

                            {open === 7 && (
                                <div className="bg-white/60 p-4">
                                    <div className="w-full bg-white p-2 space-y-2">
                                       {t.references.map((ref, index) => (
                                                    <p key={index} className="mb-3">


                                                        <>
                                                            ‒ {ref.authors} <i className="text-[#3f69e7]"> {ref.title} </i> {ref.publisher}
                                                        </>

                                                    </p>
                                                ))}

                                    </div>
                                </div>
                            )}
                        </div>

                    </div>


                </div>
                <footer className="w-full bg-blue-900   mt-10 text-white text-center">
                                            <FooterMobile />
                                          </footer>
            </div>
              
        </div>

    );
}