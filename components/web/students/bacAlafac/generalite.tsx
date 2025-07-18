"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";

import en from '@/i18/en/student/generalite.json';
import fr from '@/i18/fr/student/generalite.json';
import { useRouter } from "next/router";
export default function GeneraliteComponent() {
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


                        <div className="flex w-full gap-2 text-white font-bold">
                            <div className="p-2 px-2 uppercase w-[35%] text-2xl text-center bg-[#9C824A] hover:bg-[#a19478] h-20 flex items-center justify-center">
                                <Link href="/students/bacAlafac/bac_fac">{t.orientation}</Link>
                            </div>
                            <div className="p-3 px-8 text-xl text-center bg-[#A87A38] h-12 mt-4 flex items-center justify-center">
                                {t.generalitesTitle}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row my-4 gap-1">
                        <div className="flex-1  ">
                        </div>
                        <div className="flex-2 bg-white  text-black p-4 text-end"> <p className="">
                            <p dangerouslySetInnerHTML={{ __html: t.quote }} /> <span className="text-[#4A62AA] font-semibold "> Barack Obama</span>
                        </p>

                        </div>
                    </div>

                    <div className="mt-1  text-black bg-white/70 p-8 space-y-4">
                        <p>{t.paragraph1}</p>
                        <p>{t.paragraph2}</p>
                        <p>{t.paragraph3}</p>

                        <div className="mt-1 space-y-4">
                            <div>


                                <button
                                    className="py-2 px-4 w-full bg-white/80 text-[#4A62AA]  text-xl font-bold flex justify-between items-center"
                                    onClick={() => handleToggle(1)}
                                >
                                    <span>{t.accessTitle}</span>
                                    <span className="text-2xl">{open === 1 ? "▲" : "▼"}</span>
                                </button>


                                {open === 1 && (
                                    <div className="bg-white/80 p-4 ">

                                        <div className="w-full">
                                            <p dangerouslySetInnerHTML={{ __html: t.accessIntro }} />
                                            <div >

                                                <div className="m-6">
                                                    <p> <span className="text-[#4A62AA] text-2xl font-bold "> - </span>
                                                        <span dangerouslySetInnerHTML={{ __html: t.diploma1 }} />
                                                    </p>
                                                    <p> <span className="text-[#4A62AA] text-2xl font-bold "> - </span>
                                                        <span dangerouslySetInnerHTML={{ __html: t.diploma2 }} />
                                                    </p>
                                                </div>
                                                <table className="text-start border-2 w-full">
                                                    <thead>
                                                        <tr className="flex">
                                                            <th className="flex-1 p-2 uppercase text-[#4A62AA] bg-[#dbdad9]/70 font-semibold">
                                                                {t.tableHeader2}
                                                            </th>
                                                            <th className="flex-1 py-2 uppercase text-[#4A62AA] bg-[#4A62AA]/20 font-semibold">
                                                                {t.tableHeader1}
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr className="flex">
                                                            <td className="flex-1 border bg-[#dbdad9]/70 p-4">
                                                                -    <span dangerouslySetInnerHTML={{ __html: t.tableRow1Col1 }} />     </td>
                                                            <td className="flex-1 border bg-[#4A62AA]/20 p-2">
                                                                ‒   <span dangerouslySetInnerHTML={{ __html: t.tableRow1Col2 }} />   </td>
                                                        </tr>
                                                        <tr className="flex">
                                                            <td className="flex-1 border bg-[#dbdad9]/70 p-4">
                                                                -   <span dangerouslySetInnerHTML={{ __html: t.tableRow2Col1 }} />   </td>
                                                            <td className="flex-1 border bg-[#4A62AA]/20 p-2">
                                                                ‒  <span dangerouslySetInnerHTML={{ __html: t.tableRow2Col2 }} />   </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <p className="mt-4">
                                                    <span className="underline text-[#4A62AA] font-bold"> NB:</span>  {t.noteText}
                                                </p>

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
                                    <span>{t.content2.title}</span>
                                    <span className="text-2xl">{open === 2 ? "▲" : "▼"}</span>
                                </button>


                                {open === 2 && (
                                    <div className="bg-white/80 p-4 ">

                                        <div className="w-full">
                                            <p className="text-[#4A62AA] font-bold">
                                                {t.content2.paragraph1} </p>
                                            <p dangerouslySetInnerHTML={{ __html: t.content2.paragraph2 }} />


                                            <div className="m-6">
                                                {t.content2.cycle.map((tip, index) => (
                                                    <p
                                                        key={index}

                                                    >
                                                        <span className="text-[#4A62AA] text-2xl font-bold "> - </span>
                                                        <b> {tip.title}</b>  {tip.text}
                                                    </p>
                                                ))}

                                            </div>
                                            <p dangerouslySetInnerHTML={{ __html: t.content2.paragraph3 }} />

                                            <p className="text-[#4A62AA] mt-4 font-bold">
                                                {t.content2.paragraph6} </p>
                                            <p className="mt-2">
                                                {t.content2.paragraph4}    </p>

                                            <p className="my-2">
                                                {t.content2.paragraph5}  </p>

                                            <div className="flex text-center font-bold flex-row gap-4">

                                                <div className="flex-1 p-2 bg-[#b7c5ee]">
                                                    <p>

                                                        {t.content2.credit1}
                                                    </p>
                                                </div>
                                                <div className="flex-1 p-2 bg-[#829dec]">
                                                    <p>
                                                        {t.content2.credit2}

                                                    </p>
                                                </div>
                                                <div className="flex-1 p-2  bg-[#6d81bd]">
                                                    <p>
                                                        {t.content2.credit3}

                                                    </p>
                                                </div>
                                            </div>
                                            <p className="text-[#4A62AA] mt-4 font-bold">
                                                {t.content2.paragraph6}   </p>
                                            <p className="mt-2" dangerouslySetInnerHTML={{ __html: t.content2.paragraph7 }} />
                                            <p className="text-[#4A62AA] mt-4 font-bold">
                                                {t.content2.paragraph8}  </p>
                                            <p className="mt-2" dangerouslySetInnerHTML={{ __html: t.content2.paragraph9 }} />


                                        </div>





                                    </div>)}


                            </div>


                        </div>
                        <div className="mt-1 space-y-4">
                            <div>


                                <button
                                    className="py-2 px-4 w-full bg-white/80 text-[#4A62AA]  text-xl font-bold flex justify-between items-center"
                                    onClick={() => handleToggle(3)}
                                >
                                    <span> Droits universitaires </span>
                                    <span className="text-2xl">{open === 3 ? "▲" : "▼"}</span>
                                </button>


                                {open === 3 && (
                                    <div className="bg-white/80 p-4 ">

                                        <div className="w-full">
                                            <p className="text-[#4A62AA] font-bold">
                                                {t.content3.paragraph1}  </p>
                                            <p>
                                                {t.content3.intro}    </p>

                                            <div className="m-6">
                                                <p> <span className="text-[#4A62AA] text-2xl font-bold "> - </span>
                                                    <span dangerouslySetInnerHTML={{ __html: t.content3.paragraph2 }} /><br />
                                                    <b className="underline"> NB :</b>       <span dangerouslySetInnerHTML={{ __html: t.content3.paragraph3 }} />
                                                </p>
                                                <p> <span className="text-[#4A62AA] text-2xl font-bold "> - </span>
                                                    <span dangerouslySetInnerHTML={{ __html: t.content3.paragraph4 }} />
                                                </p>
                                                <br />
                                                <p>

                                                    <span className="text-[#4A62AA]  font-bold ">
                                                        a) </span>

                                                    <span dangerouslySetInnerHTML={{ __html: t.content3.para }} /> </p>

                                                <p>

                                                    <span className="text-[#4A62AA]  font-bold ">
                                                        b) </span>

                                                    <span dangerouslySetInnerHTML={{ __html: t.content3.paragraph5 }} /> </p>
                                                <p>

                                                    <span className="text-[#4A62AA]  font-bold ">
                                                        c) </span>

                                                    <span dangerouslySetInnerHTML={{ __html: t.content3.paragraph6 }} />   </p> </div>
                                            <p className="text-[#4A62AA] font-bold">
                                                {t.content3.paragraph7}  </p>
                                            <p>

                                                {t.content3.paragraph9}  </p>

                                        </div>





                                    </div>)}


                            </div>


                        </div>



                        <div className="mt-1 space-y-4">
                            <div>


                                <button
                                    className="py-2 px-4 w-full bg-white/80 text-[#4A62AA]  text-xl font-bold flex justify-between items-center"
                                    onClick={() => handleToggle(4)}
                                >
                                    <span> {t.logement.title} </span>
                                    <span className="text-2xl">{open === 4 ? "▲" : "▼"}</span>
                                </button>


                                {open === 4 && (
                                    <div className="bg-white/80 p-4 ">

                                        <div className="w-full">

                                            <p>
                                                - {t.logement.paragraph1}     </p>

                                            <p className="mt-4">
                                                -  <span dangerouslySetInnerHTML={{ __html: t.logement.paragraph2 }} /> 
                                            </p>
                                            <div className="flex  mt-4  flex-row gap-4">
                                                <div className="flex-1 p-2 bg-[#b7c5ee]">
                                                    <p className="font-bold">
                                                   {t.logement.paragraph3} 

                                                    </p>
                                                    <i> {t.logement.paragraph4} 
                                                    </i>
                                                </div>
                                                <div className="flex-1 p-2 bg-[#829dec]">
                                                    <p className="font-bold">

                                                  {t.logement.paragraph5} 
                                                    </p>
                                                    <i> {t.logement.paragraph6}  </i>
                                                </div>
                                                <div className="flex-1 p-2  bg-[#6d81bd]">

                                                    <p className="font-bold ">{t.logement.paragraph7}  </p>


                                                </div>
                                            </div>
                                            <p className="mt-4">
                                             {t.logement.paragraph8} 
                                            </p>
                                            <p className="mt-4">
                                            {t.logement.paragraph9}  </p>

                                        </div>





                                    </div>)}


                            </div>


                        </div>
                        <div className="mt-1 space-y-4">
                            <div>


                                <button
                                    className="py-2 px-4 w-full bg-white/80 text-[#4A62AA]  text-xl font-bold flex justify-between items-center"
                                    onClick={() => handleToggle(5)}
                                >
                                    <span>{t.content4.title}
                                    </span>
                                    <span className="text-2xl">{open === 5 ? "▲" : "▼"}</span>
                                </button>


                                {open === 5 && (
                                    <div className="bg-white/80 p-4 ">

                                        <div className="w-full">

                                            <p>
                                                {t.content4.paragraph1} </p>


                                        </div>





                                    </div>)}


                            </div>


                        </div>
                        <div className="mt-1 space-y-4">
                            <div>


                                <button
                                    className="py-2 px-4 w-full bg-white/80 text-[#4A62AA]  text-xl font-bold flex justify-between items-center"
                                    onClick={() => handleToggle(6)}
                                >
                                    <span>{t.content5}
                                    </span>
                                    <span className="text-2xl">{open === 6 ? "▲" : "▼"}</span>
                                </button>


                                {open === 6 && (
                                    <div className="bg-white/80 p-4 ">

                                        <div className="w-full">

                                            <img src="/images/DuBacALaFac.png" alt="oragnisation" className="w-[80%] h-[50%]" />


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
                                    <div className="bg-white/80 p-4">
                                        <div className="w-full space-y-2">
                                            {t.references.map((ref, index) => (
                                                <p key={index} className="mb-3">
                                                    {ref.prefix && (
                                                        <>
                                                            <span className="text-[#3f69e7]">{ref.prefix} </span>  {ref.text}
                                                        </>
                                                    )}
                                                    {ref.authors && (
                                                        <>
                                                            ‒ {ref.authors} <i className="text-[#3f69e7]"> {ref.title} </i> {ref.publisher}
                                                        </>
                                                    )}
                                                </p>
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
                                    onClick={() => handleToggle(7)}
                                >
                                    <span>{t.ressources.title}
                                    </span>
                                    <span className="text-2xl">{open === 7 ? "▲" : "▼"}</span>
                                </button>


                           {open === 7 && (
  <div className="bg-white/80 p-4">
    <div className="w-full">
      <div className="space-y-4">
        {t.ressources.links.map((link, i) => (
          <p key={i}>
            - {link.name} <br />
            <a
              href={link.url}
              className="text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i>{link.url}</i>
            </a>
          </p>
        ))}
      </div>
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