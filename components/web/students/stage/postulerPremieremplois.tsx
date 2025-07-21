"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import fr from '@/i18/fr/student/guide.json';
import en from '@/i18/en/student/guide.json';



export default function PremierEmplois() {
    const [open, setOpen] = useState(null);
    const router = useRouter();
    const handleToggle = (index: any) => {
        setOpen(open === index ? null : index);
    };
    const handleClick2 = () => {
        router.push("/students/postulerStage");
    };

    const { locale } = router;
    const t = locale === 'en' ? en : fr;
    return (
        <div className="p-2 md:pl-8 text-black" >
            <div className="flex pl-6 gap-1 w-full">
                <div className="flex justify-center flex-col">

                    <div className="flex flex-wrap pl-10 pt-6">
                        <div className="flex-grow md:w-2/3  text-black  p-8">
                            <div className="  bg-[#A87A38] p-3 text-center text-2xl font-bold  uppercase text-white ">
                                {t.emploi}
                            </div>

                            <div

                                className="bg-white/60      p-2 px-6 shadow-sm my-2 cursor-pointer hover:shadow-md transition-shadow"
                            >
                                <p className=" py-2">
                                    {t.emploiContent.intro}   </p>
                                <p className=" ">
                                    {t.emploiContent.intro2}
                                </p>


                            </div>





                            <div className="mt-6 space-y-4">
                                <div>
                                    <div className="flex flex-row gap-1">

                                        <button
                                            className="w-4/12 py-2 text-center uppercase   bg-[#4A62AA] text-white p  font-bold flex justify-center items-center"
                                            onClick={() => handleToggle(1)}
                                        >
                                            <span>{t.emploiContent.step1.etape}</span>
                                            <span className="text-end ml-10"> {open === 1 ? "▲" : "▼"}</span>
                                        </button>
                                        <div className="w-11/12 text-center   bg-[#4A62AA] text-white font-bold    flex justify-start items-center">
                                            <p className="ml-8">      {t.emploiContent.step1.title}   </p>
                                        </div></div>
                                    {open === 1 && (
                                        <div className="bg-white/60 p-4 ">

                                            <div className="w-full">
                                                <p>    {t.emploiContent.step1.p}
                                                    <Link href="/misc/nous_contacter" className="  hover:text-xl">       {t.emploiContent.step1.contact}</Link>
                                                    {t.emploiContent.step1.info}</p>

                                            </div>
                                        </div>)}









                                </div>


                            </div>
                            <div className="mt-4 space-y-4">
                                <div>
                                    <div className="flex flex-row gap-1">

                                        <button
                                            className="w-4/12 py-2 text-center uppercase   bg-[#4A62AA] text-white p  font-bold flex justify-center items-center"
                                            onClick={() => handleToggle(2)}
                                        >
                                            <span>{t.emploiContent.step2.etape}</span>
                                            <span className="text-end ml-10"> {open === 2 ? "▲" : "▼"}</span>
                                        </button>
                                        <div className="w-11/12 text-center   bg-[#4A62AA] text-white  font-bold    flex justify-start items-center">
                                            <p className="ml-8">    {t.emploiContent.step2.title} </p>
                                        </div></div>
                                    {open === 2 && (
                                        <div className="flex flex-col gap-1">          <div className="bg-white/60 p-4 grid grid-cols-[1fr_3fr] gap-8">

                                            <div className=" font-bold text-[#A87A38] text-center  ">  {t.emploiContent.step2.item1}</div>
                                            <div className="max-w-4xl">
                                                <p> {t.emploiContent.step2.consultez} <a href="/students/offresStage" className="text-[#4A62AA] font-bold ">{t.emploiContent.step2.stage}</a> {t.emploiContent.step2.ou}</p>

                                            </div>
                                        </div>
                                            <div className="bg-white/60 p-4 grid grid-cols-[1fr_3fr] gap-8">

                                                <div className=" font-bold text-[#A87A38] text-center ">
                                                    {t.emploiContent.step2.item2}</div>
                                                <div className="max-w-4xl">
                                                    <p> {t.emploiContent.step2.cherchez}</p>

                                                </div>
                                            </div>
                                            <div className="bg-white/60 p-4">

                                                <div className="  text-center ">


                                                    <p> <b> NB : </b> {t.emploiContent.step2.nb} </p>

                                                </div>
                                            </div>
                                        </div>
                                    )}

                                </div>


                            </div>
                            <div className="mt-4 space-y-4">
                                <div>
                                    <div className="flex flex-row gap-1">

                                        <button
                                            className="w-4/12 py-2 text-center uppercase   bg-[#4A62AA] text-white p  font-bold flex justify-center items-center"
                                            onClick={() => handleToggle(3)}
                                        >
                                            <span>{t.emploiContent.step3.etape}</span>
                                            <span className="text-end ml-10"> {open === 3 ? "▲" : "▼"}</span>
                                        </button>
                                        <div className="w-11/12 text-center   bg-[#4A62AA] text-white font-bold    flex justify-start items-center">
                                            <p className="ml-8">     {t.emploiContent.step3.title} </p>
                                        </div></div>
                                    {open === 3 && (


                                        <div className="flex flex-col ">
                                            <div className="bg-white/60 pt-4 px-4 grid grid-cols-[1fr_3fr] gap-8">

                                                <div > <p className=" font-bold text-[#A87A38] text-center ">{t.emploiContent.step3.cv} </p>
                                                    <p className=" text-[#4A62AA] font-bold text-end"> {t.emploiContent.step3.objectif}</p>
                                                    <br />
                                                    <p className=" text-[#4A62AA] font-bold text-end"> {t.emploiContent.step3.rubriques}</p>
                                                </div>
                                                <div className="max-w-4xl">
                                                    <br />
                                                    <p>{t.emploiContent.step3.p1}</p>

                                                </div>
                                            </div>




                                            <div className="bg-white/60 p-4 ">
                                                {t.emploiContent.step3.content.map((tip, index) => (

                                                    <div key={index} 
                                                     className={`p-4 grid grid-cols-[1fr_3fr] gap-8  ${index % 2 === 0 ? 'bg-white' : ''
                  }`}
                                                  >
                                                        <div className=" font-bold  text-end ">
                                                            {tip.title} </div>
                                                        <div className="max-w-4xl">
                                                            <p>    {tip.text}
                                                            </p>
                                                        </div>
                                                    </div>


                                                ))}


                                                <div className="bg-white p-1 mt-1  grid grid-cols-[1fr_3fr] gap-8">

                                                    <div className=" p-1 text-center font-bold text-white flex justify-center bg-[#A87A38]  ">
                                                        <p>     NOTA BENE  </p> </div>
                                                    <div className="max-w-4xl">
                                                        <p>
                                                            - {t.emploiContent.step3.notabene1}</p>
                                                        <p> - {t.emploiContent.step3.notabene2}</p>
                                                        <p>  - {t.emploiContent.step3.notabene3}</p>


                                                    </div>

                                                </div>

                                            </div>


                                            <div className="bg-white/60 p-2 mt-1">

                                                <div className="  text-center ">


                                                    <p> <b> <Link href="/misc/nous_contacter" className="  hover:text-xl">    {t.emploiContent.step3.contact}</Link>
                                                    </b>  {t.emploiContent.step3.info}</p>

                                                </div>
                                            </div>
                                            <div className="bg-white/60 p-4 mt-1">
                                                <div className=" font-bold uppercase text-[#A87A38] text-start  ">
                                                    {t.emploiContent.step3.lettre} </div>
                                                <div className="bg-white p-1 mt-1  grid grid-cols-[1fr_3fr] gap-8">

                                                    <div className=" p-1 bg-[#f7debb]  ">
                                                        {t.emploiContent.step3.lettreIntro}</div>
                                                    <div className="max-w-4xl mt-4 " >
                                                        <p>
                                                            -    {t.emploiContent.step3.p2} </p>
                                                        <p> - {t.emploiContent.step3.p3}</p>
                                                        <p>  - {t.emploiContent.step3.p4} </p>
                                                        <p>  - {t.emploiContent.step3.p5}
                                                        </p>

                                                    </div>

                                                </div>




                                            </div>

                                            <div className="bg-white/60 p-4 mt-1">
                                                <div className=" font-bold uppercase text-[#A87A38] text-start  ">
                                                    {t.emploiContent.step3.recommandation} </div>
                                                <div className="bg-white p-3 mt-1 ">

                                                    <div className="">
                                                        <p>
                                                            -   {t.emploiContent.step3.r1} </p>
                                                        <p> - {t.emploiContent.step3.r2}</p>
                                                        <p>  - {t.emploiContent.step3.r3} </p>
                                                        <p>  - {t.emploiContent.step3.r4}

                                                        </p>

                                                    </div>

                                                </div>




                                            </div>



                                        </div>







                                    )}

                                </div>


                            </div>
                            <div className="mt-4 space-y-4">
                                <div>
                                    <div className="flex flex-row gap-1">

                                        <button
                                            className="w-4/12 py-2 text-center uppercase   bg-[#4A62AA] text-white p  font-bold flex justify-center items-center"
                                            onClick={() => handleToggle(4)}
                                        >
                                            <span>{t.emploiContent.step4.etape} </span>
                                            <span className="text-end ml-10"> {open === 4 ? "▲" : "▼"}</span>
                                        </button>
                                        <div className="w-11/12 text-center   bg-[#4A62AA] text-white   font-bold  flex justify-start items-center">
                                            <p className="ml-8">   {t.emploiContent.step4.title} </p>
                                        </div></div>
                                    {open === 4 && (
                                        <div className="flex flex-col ">

                                            <div className="bg-white/60 p-4 ">
                                                {t.emploiContent.step4.content.map((tip, index) => (

                                                    <div key={index}                            className={`p-4 grid grid-cols-[1fr_3fr] gap-8  ${index % 2 === 0 ? 'bg-white' : ''
                  }`}
                              >
                                                        <div className=" font-bold  text-end ">
                                                            {tip.title} </div>
                                                        <div className="max-w-4xl">
                                                            <p>    {tip.title}
                                                            </p>
                                                        </div>
                                                    </div>


                                                ))}



                                                <div className="  mt-8 ">

                                                    <p className="text-red-500 font-bold underline"> {t.emploiContent.step4.avertissement}</p>
                                                    <p> {t.emploiContent.step4.conclu}
                                                    </p>

                                                </div>

                                            </div>





                                        </div>)}

                                </div>


                            </div>
                            <div className="mt-4 space-y-4">
                                <div>
                                    <div className="flex flex-row gap-1">

                                        <button
                                            className="w-4/12 py-2 text-center uppercase   bg-[#4A62AA] text-white p  font-bold flex justify-center items-center"
                                            onClick={() => handleToggle(5)}
                                        >
                                            <span>{t.emploiContent.step5.etape}</span>
                                            <span className="text-end ml-10"> {open === 5 ? "▲" : "▼"}</span>
                                        </button>
                                        <div className="w-11/12 text-start   bg-[#4A62AA] text-white  font-bold    flex justify-start items-center"> <p className="ml-8"> 
                                     {t.emploiContent.step5.title}</p>
                                        </div></div>
                                    {open === 5 && (
                                        <div className="flex flex-col ">


                                            <div className="bg-white/60 p-4 mt-1 text-start ">
                                                <div className=" font-bold uppercase text-[#A87A38] text-start  ">
                                                {t.emploiContent.step5.avant} </div>
                                                <div className="bg-white p-3 mt-1 ">

                                                    <div className="">
                                                        {t.emploiContent.step5.avantContent.map((tip, index) => (

                                                            <p key={index} className="  ">
                                                           -     {tip.text} </p>




                                                        ))}



                                                    </div>

                                                </div>




                                            </div>

                                            <div className="bg-white/60 p-4 mt-1 text-start ">
                                                <div className=" font-bold uppercase text-[#A87A38] text-start  ">
                                                    {t.emploiContent.step5.pendant} </div>
                                                <div className="bg-white p-3 mt-1 ">

                                                    <div className="">
                                                       {t.emploiContent.step5.pendantContent.map((tip, index) => (

                                                            <p key={index} className="  ">
                                                             -   {tip.text} </p>




                                                        ))}

  </div>

                                                </div>




                                            </div>
                                            <div className="bg-white/60 p-4 mt-1 text-start ">
                                                <div className=" font-bold uppercase text-[#A87A38] text-start  ">
                                                     {t.emploiContent.step5.auterme}  </div>
                                                <div className="bg-white p-3 mt-1 ">

                                                    <div className="">
                                                       {t.emploiContent.step5.autermContent.map((tip, index) => (

                                                            <p key={index} className="   ">
                                                             -   {tip.text} </p>




                                                        ))}


                                                    </div>

                                                </div>




                                            </div>
                                        </div>)}


                                    <div className="bg-white/60  mt-8 grid grid-cols-[1fr_3fr] gap-8">

                                        <div className=" text-center p-2 font-bold bg-white flex justify-center text-[#e24428]  ">
                                            <div className="flex justify-center text-center items-center uppercase">   {t.emploiContent.step5.arnaque}</div> </div>
                                        <div className="max-w-4xl p-2">
                                            {t.emploiContent.step5.arnaqueContent.map((tip, index) => (

                                                            <p key={index} className="  ">
                                                             -   {tip.text} </p>




                                                        ))}



                                        </div>

                                    </div>


                                </div>
                                <div className="px-6 py-2 flex justify-end ">
                                    <button onClick={handleClick2} className="px-6 py-2 flex   justify-end  ml-16 my-10 md:ml-[50%] bg-[#A87A38] text-white font-bold rounded-lg ">
                                       {t.emploiContent.postuler}
                                    </button>  </div>
                                <div className="bg-white/60 p-2 mt-1">
                                    <div className=" font-bold uppercase text-[#4A62AA] text-center  ">
                                         {t.emploiContent.reference}</div>


                                </div>
                                <div className="bg-white p-4 mt-1">


                                    <div className="">
                                  {t.emploiContent.auteur.map((tip, index) => (
                                                    <p
                                                        key={index}

                                                    >
                                                        -  {tip.name}<i className="text-[#4A62AA]"> {tip.title}</i> {tip.edition}
                                                    </p>
                                                ))}

                                    </div>





                                </div>

                                <div className="bg-white/60 p-2 mt-1">
                                    <div className=" font-bold uppercase text-[#4A62AA] text-center  ">
                                        {t.emploiContent.lien}</div>


                                </div>
                                <div className="bg-white p-4">
                                    <p>-   {t.emploiContent.ministere}</p>
                                    <p>- Fed Africa <br /> <a href="https://www.fedafrica.com" className="text-[#4A62AA]" target="_blank" rel="noopener noreferrer">https://www.fedafrica.com</a></p>
                                    <p>- Michael Page Africa <br /> <a href="https://www.michaelpageafrica.com" className="text-[#4A62AA]" target="_blank" rel="noopener noreferrer">https://www.michaelpageafrica.com</a></p>
                                </div>

                            </div>


                        </div>

                    </div>
                </div >



            </div>
        </div>

    );
}
