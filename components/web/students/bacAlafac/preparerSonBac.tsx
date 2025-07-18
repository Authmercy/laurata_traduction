"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import en from '@/i18/en/student/preparerSonBac.json';
import fr from '@/i18/fr/student/preparerSonBac.json';

export default function PreparesonBacComponent() {
    const [open, setOpen] = useState(null);
    const handleToggle = (index: any) => {
        setOpen(open === index ? null : index);
    };

    const router = useRouter();

    const { locale } = router;
    const t = locale === 'en' ? en : fr;



    return (

        <div className="flex flex-col   md:flex-row  ">
            <div className="flex-grow md:w-2/3 p-8">

                <div className="  mt-1">

                    <div className="flex w-full gap-2 uppercase text-white font-bold">

                        <div className="p-2 px-2  uppercase  w-[35%] text-2xl text-center bg-[#9C824A]  hover:bg-[#a19478]  h-20 flex items-center justify-center">

                            <Link href="/students/bacAlafac/bac_fac"> {t.orientation}</Link>
                        </div>


                        <div className="p-3 px-8  text-xl text-center bg-[#A87A38] h-12 mt-4 flex items-center justify-center">
                           {t.prepare}
                        </div>

                    </div>
                    <div className="flex flex-row my-4 gap-1">
                        <div className="flex-1  ">
                        </div>
                        <div className="flex-2 bg-white text-black p-4 text-end"> <p className="">
                           {t.quote.text}
                            <br />  <span className="text-[#4A62AA] font-semibold ">Albert Einstein</span>
                        </p>

                        </div>
                    </div>

                    <div className="mt-1  text-black bg-white/70 p-8 space-y-4">
                        <p>
                         {t.intro[0]}</p>
                        <p className="text-[#4A62AA] font-bold" >
                            {t.intro[1]}
                        </p>
                        <div className="bg-[#A87A38]/20 items-stretch  p-2">
                            <p className="text-[#4A62AA] font-bold ">{t.sections.enClasse.title}</p>
                         {t.sections.enClasse.points.map((point, i) => <p key={i} dangerouslySetInnerHTML={{ __html: point}} />)}
                        </div>
                        <div className="bg-[#A87A38]/30   p-2 ">
                            <p className="text-[#4A62AA] font-bold "> {t.sections.aLaMaison.title}</p>
                           {t.sections.aLaMaison.points.map((point, i) => <p key={i} dangerouslySetInnerHTML={{ __html: point}} />)}
                        </div>
                        <div className="bg-[#A87A38]/40  p-2 ">
                            <p className="text-[#4A62AA]  font-bold">  {t.sections.avecCamarades.title}</p>
                                    <p dangerouslySetInnerHTML={{ __html: t.sections.avecCamarades.text}} />
                        </div>
                        <div className="bg-[#A87A38]/50  p-2 ">
                            <p className="text-[#4A62AA]  font-bold">  {t.sections.internet.title}</p>
                 
                             <p dangerouslySetInnerHTML={{ __html: t.sections.internet.text}} />
                        </div>
                        <div className="bg-[#A87A38]/60  p-2 ">
                            <p className="text-[#4A62AA]  font-bold"> {t.sections.sport.title}</p>
                        
                             <p dangerouslySetInnerHTML={{ __html: t.sections.sport.text}} />
                        </div>
                        <div className="mt-1 space-y-4">
                            <div>


                                <button
                                    className="py-2 px-4 w-full bg-white/80 text-[#4A62AA]  text-xl font-bold flex justify-between items-center"
                                    onClick={() => handleToggle(1)}
                                >
                                    <span>   { t.astuces.title }   </span>
                                    <span className="text-2xl">{open === 1 ? "▲" : "▼"}</span>
                                </button>


                                {open === 1 && (
                                    <div className="bg-white/80 p-4 space-y-2 ">

                                        <div className="w-full">
                                          
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
                        <div className="mt-1 space-y-4">
                            <div>


                                <button
                                    className="py-2 px-4 w-full bg-white/80 text-[#4A62AA]  text-xl font-bold flex justify-between items-center"
                                    onClick={() => handleToggle(2)}
                                >
                                    <span> {t.veilleExam.title}  </span>
                                    <span className="text-2xl">{open === 2 ? "▲" : "▼"}</span>
                                </button>


                                {open === 2 && (
                                    <div className="bg-white/80 p-4 ">

                                        <div className="w-full">

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

                        <div className="mt-1 space-y-4">
                            <div>


                                <button
                                    className="py-2 px-4 w-full bg-white/80 text-[#4A62AA]  text-xl font-bold flex justify-between items-center"
                                    onClick={() => handleToggle(8)}
                                >
                                    <span>{t.references.title}

                                    </span>
                                    <span className="text-2xl">{open === 8 ? "▲" : "▼"}</span>
                                </button>


                                {open === 8 && (
                                    <div className="bg-white/80 p-4 ">

                                        <div className="w-full">
                                            {t.references.list.map((tip, index) => (
                                                <p
                                                    key={index}

                                                >
                                                    -  {tip.name}<i className="text-[#4A62AA]"> {tip.title}</i> {tip.edition}
                                                </p>
                                            ))}



                                        </div>





                                    </div>)}


                            </div>


                        </div>
                        <div className="mt-1 space-y-4">
                            <div>


                                <button
                                    className="py-2 px-4 w-full bg-white/80 text-[#4A62AA]  text-xl font-bold flex justify-between items-center"
                                    onClick={() => handleToggle(7)}
                                >
                                    <span>{t.liensUtiles.title}
                                    </span>
                                    <span className="text-2xl">{open === 7 ? "▲" : "▼"}</span>
                                </button>


                                {open === 7 && (
                                    <div className="bg-white/80 p-4 ">
                                        <div className="w-full ">
                                            <div className="space-y-4">
                                                {t.liensUtiles.links.map((link, i) => (
                                                    <p key={i}>- {link.name} <br />
                                                        <a href={link.url} className="text-blue-600" target="_blank" rel="noopener noreferrer">
                                                            <i>{link.url}</i>
                                                        </a>
                                                    </p>
                                                ))}

                                            </div>






                                        </div>





                                    </div>)}


                            </div>









                        </div>



                    </div>
                </div>
            </div>

        </div>




    );
}