"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";

import en from '@/i18/en/student/handicap.json';
import fr from '@/i18/fr/student/handicap.json';
import { useRouter } from "next/router";

export default function HandicapComponent() {
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

                        <div className="p-2 px-2  uppercase  w-[35%] text-2xl text-center bg-[#9C824A] hover:bg-[#a19478]  h-20 flex items-center justify-center">

                            <Link href="/students/bacAlafac/bac_fac"> {t.orientation} </Link>
                        </div>


                        <div className="p-3 px-8  uppercase text-xl text-center bg-[#A87A38] h-12 mt-4 flex items-center justify-center">
                            {t.title}


                        </div>
                    </div>

                    <div className="flex flex-row mt-4 gap-1">
                        <div className="flex-1  ">
                        </div>
                        <div className="flex-2 bg-white  text-black p-4 text-end">
                            <p dangerouslySetInnerHTML={{ __html: t.quote }} />
                            <br />  <span className="text-[#4A62AA] font-semibold "> Aimé Césaire</span>


                        </div>
                    </div>

                    <div className="mt-1   text-black bg-white/70 p-8 space-y-4">
                        <p className="text-justify">
                            {t.paragraph1}  </p>
                        <p className="text-justify" dangerouslySetInnerHTML={{ __html: t.paragraph2 }} />


                        <div className="mt-1 space-y-4">
                            <div>
                                <button
                                    className="py-2 px-4 w-full bg-white/80 text-[#4A62AA] text-xl font-bold flex justify-between items-center"
                                    onClick={() => handleToggle(1)}
                                >
                                    <span>{t.handicapTitle}</span>
                                    <span className="text-2xl">{open === 1 ? "▲" : "▼"}</span>
                                </button>

                                {open === 1 && (
                                    <div className="bg-white/80 p-4">
                                        <div className="w-full">
                                            {t.rows.map((row, index) => (
                                                <div
                                                    key={index}
                                                    className={`mt-2 p-2 grid grid-cols-[1fr_3fr] gap-8 ${index % 2 === 0 ? 'bg-[#d1daf7]' : ''
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


                        <div className="mt-1 space-y-4">
                            <div>
                                <button
                                    className="py-2 px-4 w-full bg-white/80 text-[#4A62AA] text-xl font-bold flex justify-between items-center"
                                    onClick={() => handleToggle(2)}
                                >
                                    <span>{t.usefulInfoTitle}</span>
                                    <span className="text-2xl">{open === 2 ? "▲" : "▼"}</span>
                                </button>

                                {open === 2 && (
                                    <div className="bg-white/80 p-4">
                                        <div className="w-full">
                                            <p className="py-4">
                                                <b>{t.exemptionInfo.bold}</b> {t.exemptionInfo.text}
                                            </p>

                                            <p className="bg-[#becbf3] py-4">
                                                <b>{t.distanceLearning.bold}</b> {t.distanceLearning.text}
                                            </p>

                                            <p className="py-4">
                                                <b>{t.disabilityCertification.bold}</b> {t.disabilityCertification.text}
                                                <i> {t.disabilityCertification.italic}</i>
                                            </p>

                                            <p className="bg-[#becbf3] py-4">
                                                <b>{t.ipesExemption.bold}</b> {t.ipesExemption.text}
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>



                       <div className="mt-1 space-y-4">
  <div>
    <button
      className="py-2 px-4 w-full bg-white/80 text-[#4A62AA] text-xl font-bold flex justify-between items-center"
      onClick={() => handleToggle(4)}
    >
      <span>{t.content4.title}</span>
      <span className="text-2xl">{open === 4 ? "▲" : "▼"}</span>
    </button>

    {open === 4 && (
      <div className="bg-white/80">
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
    )}
  </div>
</div>








                        <div className="mt-1 space-y-4">
                            <div>


                                <button
                                    className="py-2 px-4 w-full bg-white/80 text-[#4A62AA]  text-xl font-bold flex justify-between items-center"
                                    onClick={() => handleToggle(5)}
                                >
                                    <span>{t.content5}
                                    </span>
                                    <span className="text-2xl">{open === 5 ? "▲" : "▼"}</span>
                                </button>


                                {open === 5 && (
                                    <div className="bg-white/80 p-4 ">

                                        <div className="w-full space-y-2">
                                            {t.text.map((ref, index) => (
                                                <p key={index} className="mb-3">
                                                    <b>
                                                        {ref.bold}
                                                    </b>
                                                    {ref.text}


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
                                    onClick={() => handleToggle(8)}
                                >
                                    <span>{t.content6}

                                    </span>
                                    <span className="text-2xl">{open === 8 ? "▲" : "▼"}</span>
                                </button>


                                {open === 8 && (
                                    <div className="bg-white/80 p-4 ">

                                        <div className="w-full">
                                            <div className="w-full space-y-2">
                                                {t.references.map((ref, index) => (
                                                    <p key={index} className="mb-3">


                                                        <>
                                                            ‒ {ref.authors} <i className="text-[#3f69e7]"> {ref.title} </i> {ref.publisher}
                                                        </>

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