"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import StudentDestinationsTable from "./tableDestinations";

import en from '@/i18/en/student/etudieraEtranger.json';
import fr from '@/i18/fr/student/etudieraEtranger.json';
import { useRouter } from "next/router";
export default function EtudeComponent() {
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

                    <div className="flex w-full gap-2 text-white font-bold">

                        <div className="p-2 px-2  uppercase  w-[35%] text-2xl text-center bg-[#9C824A]  hover:bg-[#a19478]  h-20 flex items-center justify-center">

                            <Link href="/students/bacAlafac/bac_fac"> {t.orientation}</Link>
                        </div>


                        <div className="p-3 px-8 uppercase text-xl text-center bg-[#A87A38] h-12 mt-4 flex items-center justify-center">
                            {t.studyAbroadTitle}
                        </div>

                    </div>

                    <div className="flex flex-row my-4 gap-1">
                        <div className="flex-1  ">
                        </div>
                        <div className="flex-2 bg-white  text-black p-4 text-end"> <p className="">
                            {t.quote}
                            <br />  <span className="text-[#4A62AA] font-semibold "> Adage populaire</span>
                        </p>

                        </div>
                    </div>

                    <div className="mt-1  text-black bg-white/70 p-8 space-y-4">
                        <p>  {t.intro1}
                            <i>   {t.introItalic}</i>

                        </p>

                        <p>
                            {t.intro2}
                        </p>
                        <div className="mt-1 space-y-4">
                            <div>


                                <button
                                    className="py-2 px-4 w-full bg-white/80 text-[#4A62AA]  text-xl font-bold flex justify-between items-center"
                                    onClick={() => handleToggle(1)}
                                >
                                    <span>  {t.prepareTitle}   </span>
                                    <span className="text-2xl">{open === 1 ? "▲" : "▼"}</span>
                                </button>


                                {open === 1 && (
                                    <div className="flex flex-col ">

                                        <div className="bg-white/60 p-4 ">
                                            <div className="bg-[#ddc19b] p-4 grid grid-cols-[1fr_3fr] gap-8">

                                                <div className=" font-bold  text-[#A87A38] text-center ">
                                      {t.countryTitle}
                                                </div>
                                                <div className="max-w-4xl">
                                                    <p>    {t.countryContent1} </p>

                                                    <p> ─ <span dangerouslySetInnerHTML={{ __html: t.countryContent2 }} /> </p>
                                                </div>
                                            </div>
                                            <div className="p-4 bg-[#dbe0e7] grid grid-cols-[1fr_3fr] gap-8">

                                                <div className=" font-bold text-[#A87A38] text-end ">
                                                      {t.programTitle}
                                                </div>
                                                <div className="max-w-4xl">
                                                    <p> ─ <span dangerouslySetInnerHTML={{ __html: t.programContent1 }} />   </p>
                                                    <p> ─ <span dangerouslySetInnerHTML={{ __html: t.programContent2 }} /> </p>
                                                </div>



                                            </div>
                                            <div className="bg-[#ddc19b] p-2 grid grid-cols-[1fr_3fr] gap-8">

                                                <div className=" font-bold text-[#A87A38]  text-center ">
                                                           {t.fundingTitle}</div>
                                                <div className="max-w-4xl">
                                                    <p> ─ <span dangerouslySetInnerHTML={{ __html: t.fundingContent1 }} /> 
                                                    </p>
                                                    <p> ─ <span dangerouslySetInnerHTML={{ __html: t.fundingContent2 }} /></p>
                                                </div>
                                            </div>
                                            <div className="p-4 bg-[#dbe0e7]  grid grid-cols-[1fr_3fr] gap-8">

                                                <div className=" font-bold text-[#A87A38] text-center ">
                                                    {t.visaTitle}
                                                </div>
                                                <div className="max-w-4xl">
                                                    <p> ─ <span dangerouslySetInnerHTML={{ __html: t.visaContent1 }} />


                                                    </p>
                                                    <p>  ─ <span dangerouslySetInnerHTML={{ __html: t.visaContent2 }} />


                                                    </p>
                                                        <p> ─ <b className="text-red-600"> {t.visaWarningTitle} </b>
                                                        {t.visaWarning} </p>
                                                        <p> ─ <span dangerouslySetInnerHTML={{ __html: t.visaContent3 }} />


                                                        </p>
                                                </div>



                                            </div>
                                            <div className="  mt-8 ">

                                                <p className="text-[#4A62AA] font-bold ">    {t.perspectiveTitle}</p>
                                                <div className="m-6">
                                                    <p> <span className="text-[#4A62AA] text-2xl font-bold "> - </span>
                                                        <b className="uppercase"> {t.optez}</b>   {t.perspective1}
                                                    </p>
                                                    <p> <span className="text-[#4A62AA] text-2xl font-bold "> - </span>
                                                        <b className="uppercase"> {t.ciblez} </b>  {t.perspective2}
                                                    </p>
                                                    <p> <span className="text-[#4A62AA] text-2xl font-bold "> - </span>
                                                        <b className="uppercase">  {t.recherchez}   </b> {t.perspective3}
                                                    </p>
                                                </div>

                                            </div>

                                            <div className="  mt-4">

                                                <p className="text-red-500 font-bold">{t.warningTitle}</p>
                                                <p>{t.warningContent}</p>
                                            </div>

                                        </div>





                                    </div>)}








                            </div>


                        </div>


                        <div className="mt-1 space-y-4">
                            <div>


                                <button
                                    className="py-2 px-4 w-full bg-white/80 text-[#4A62AA]  text-xl font-bold flex justify-between items-center"
                                    onClick={() => handleToggle(2)}
                                >
                                    <span>{t.returnTitle}   </span>
                                    <span className="text-2xl">{open === 2 ? "▲" : "▼"}</span>
                                </button>


                                {open === 2 && (
                                    <div className="bg-white/80 p-4 ">

                                        <div className="w-full">
                                            <p >
                                                {t.returnIntro} </p>
                                            <p>
                                            </p>


                                            <div className="m-3">
                                                <p>
                                                    <span className="text-orange-500 font-bold">
                                                        1.
                                                    </span> {t.returnOption1}

                                                </p>
                                                <p>
                                                    <span className="text-orange-500 font-bold">
                                                        2.
                                                    </span> {t.returnOption2}

                                                </p>
                                                <p>
                                                    <span className="text-orange-500 font-bold">
                                                        3.
                                                    </span> {t.returnOption3}

                                                </p>
                                            </div>

                                            <p className="mt-4 ">
                                                {t.returnStat}  </p>
                                            <p className="mt-4 " dangerouslySetInnerHTML={{ __html: t.returnRecommendation }} />
                                            <div className="border-y-2 border-[#4A62AA] mt-2">
                                                {t.returnSteps.map((step, index) => (
                                                    <p
                                                        key={index}
                                                        className={`p-2 ${index % 2 === 0 ? 'bg-[#dbe0e7]' : 'bg-[#ddc19b]'}`}
                                                    >
                                                        ‒   {step}
                                                    </p>
                                                ))}
                                            </div>
                                            <p className="mt-4">
                                                <Link href="/misc/nous_contacter" className="  text-[#4A62AA] font-bold hover:text-xl">       {t.contactLink}
                                                </Link> {t.contactText}
                                            </p>
                                        </div>





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
                                    <span> {t.destinationsTitle}
                                    </span>
                                    <span className="text-2xl"> {open === 8 ? "▲" : "▼"}</span>
                                </button>


                                {open === 8 && (
                                    <div className="bg-white/80 p-4 ">
                                        <div className="w-full ">
                                            <div className="space-y-4">


                                                <StudentDestinationsTable></StudentDestinationsTable>
                                            </div>






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
                                    <span>{t.linksTitle}
                                    </span>
                                    <span className="text-2xl">{open === 7 ? "▲" : "▼"}</span>
                                </button>


                                {open === 7 && (
                                    <div className="bg-white/80 p-4">
                                        <div className="w-full space-y-4">
                                            <p>
                                                - {t.germanyInfo}
                                                <p>
                                                    <a href={t.germanyLink} className="text-blue-600" target="_blank" rel="noopener noreferrer">
                                                        <i>{t.germanyLink}</i>
                                                    </a>
                                                </p>
                                            </p>

                                            <p>
                                                - {t.franceInfo}
                                                <p>
                                                    <a href={t.franceLink} className="text-blue-600" target="_blank" rel="noopener noreferrer">
                                                        <i>{t.franceLink}</i>
                                                    </a>
                                                </p>
                                            </p>

                                            <p>
                                                - {t.belgiumInfo}
                                                <p>
                                                    <a href={t.belgiumLink} className="text-blue-600" target="_blank" rel="noopener noreferrer">
                                                        <i>{t.belgiumLink}</i>
                                                    </a>
                                                </p>
                                            </p>

                                            <p>
                                                - {t.canadaInfo}
                                                {t.canadaLinks.map((link, index) => (
                                                    <p key={index}>
                                                        <a href={link} className="text-blue-600" target="_blank" rel="noopener noreferrer">
                                                            <i>{link}</i>
                                                        </a>
                                                    </p>
                                                ))}
                                            </p>

                                            <p>
                                                - {t.usaInfo}
                                                {t.usaLinks.map((link, index) => (
                                                    <p key={index}>
                                                        <a href={link} className="text-blue-600" target="_blank" rel="noopener noreferrer">
                                                            <i>{link}</i>
                                                        </a>
                                                    </p>
                                                ))}
                                            </p>
                                        </div>
                                    </div>
                                )}


                            </div>


                        </div>










                    </div>
                </div>
            </div>

        </div>




    );
}