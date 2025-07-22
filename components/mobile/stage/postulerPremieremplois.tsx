"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Navbar from "../navbar/navbar";
import FooterMobile from "../footer/footerEnd";
import fr from '@/i18/fr/student/guide.json';
import en from '@/i18/en/student/guide.json';


export default function PremierEmploisMobile() {
    const [open, setOpen] = useState(null);
    const router = useRouter();
    const handleToggle = (index: any) => {
        setOpen(open === index ? null : index);
    };
    const handleClick2 = () => {
        router.push("/students/postulerStage");
    };
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileMenuOpen2, setIsMobileMenuOpen2] = useState(false);
    const { locale } = router;
    const t = locale === 'en' ? en : fr;


    return (
        <div>
            <div className="min-h-screen  text-black  bg-[#4A62AA]  overflow-auto  w-screen bg-cover  text-justify bg-center bg-no-repeat "  >

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
                        <p>              {t.emploi} </p>
                    </div>



                    <div

                        className="bg-white  mt-8  p-2 py-4 shadow-sm mb-2 hover:shadow-md transition-shadow"
                    >
                        <p className=" py-2">
                            {t.emploiContent.intro}   </p>
                        <p className=" ">
                            {t.emploiContent.intro2}
                        </p>
                    </div>
                    <div

                        className="bg-white/70   mt-2  p-2 py-4 shadow-sm mb-2 hover:shadow-md transition-shadow"
                    >


                        <div className="mt-6 space-y-4">
                            <div>

                                <div className="flex flex-col sm:flex-row gap-1">
                                    <button
                                        className="w-full sm:w-4/12 py-2 px-4  bg-[#4A62AA] text-white flex justify-between items-center sm:justify-center"
                                        onClick={() => handleToggle(1)}
                                    >
                                        <div className="flex gap-2">


                                            <span className="  uppercase font-bold ">  1</span>
                                            <span className="text-start"> {t.emploiContent.step1.title}
                                            </span>
                                        </div>
                                        <span className="sm:ml-10">{open === 1 ? "▲" : "▼"}</span>
                                    </button>


                                </div>

                                {open === 1 && (
                                    <div className="bg-white/60 p-4">
                                        <div className="w-full">
                                            <p className="text-base">
                                                {t.emploiContent.step1.p}
                                            </p>
                                            <p> <Link href="/misc/nous_contacter" className="  mt-2 sm:mt-0 hover:text-blue-700 transition">
                                                {t.emploiContent.step1.contact}</Link>
                                                {t.emploiContent.step1.info}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="mt-2 space-y-4">
                            <div>

                                <div className="flex flex-col sm:flex-row gap-1">
                                    <button
                                        className="w-full sm:w-4/12 py-2 px-4  bg-[#4A62AA] text-white  flex justify-between items-center sm:justify-center"
                                        onClick={() => handleToggle(2)}
                                    ><div className="flex gap-2">
                                            <span className="  uppercase font-bold ">  2</span>
                                            <span className="text-start"> {t.emploiContent.step2.title}
                                            </span>
                                            <span className="sm:ml-10">{open === 2 ? "▲" : "▼"}</span>
                                        </div> </button>


                                </div>

                                {open === 2 && (
                                    <div className="bg-white/60 p-4">
                                        <div className="w-full">
                                            <div className="flex flex-col gap-1">
                                                <div className="bg-white/60 p-4 grid grid-cols-[1fr_3fr] gap-8">

                                                    <div className=" text-[#A87A38] text-center  "> {t.emploiContent.step2.item1}</div>
                                                    <div className="max-w-4xl">
                                                        <p> {t.emploiContent.step2.consultez} <a href="/students/offresStage" className="text-[#4A62AA] font-bold ">{t.emploiContent.step2.stage}</a> {t.emploiContent.step2.ou}</p>

                                                    </div>








                                                </div>



                                            </div>
                                            <div className="bg-white/60 p-4 grid grid-cols-[1fr_3fr] gap-8">

                                                <div className="  text-[#A87A38] text-center ">
                                                    {t.emploiContent.step2.item2}</div>
                                                <div className="max-w-4xl">
                                                    <p> {t.emploiContent.step2.cherchez}</p>

                                                </div>
                                            </div>

                                        </div>
                                        <div className="bg-white/60  p-4">

                                            <div className="  text-center ">


                                                <p> <b> NB : </b> {t.emploiContent.step2.nb} </p>

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
                                        className="w-full sm:w-4/12 py-2 px-4  bg-[#4A62AA] text-white flex justify-between items-center sm:justify-center"
                                        onClick={() => handleToggle(3)}
                                    >
                                        <div className="flex gap-2">
                                            <span className="  text-start uppercase font-bold "> 3</span>
                                            <span className="text-start">     {t.emploiContent.step3.title}
                                            </span>
                                        </div>
                                        <span className="sm:ml-10">{open === 3 ? "▲" : "▼"}</span>
                                    </button>


                                </div>

                                {open === 3 && (
                                    <div className="bg-white/60 ">
                                        <div className="w-full">
                                            <div className="flex flex-col">
                                                <div className=" pt-4 px-4 grid grid-cols-1 sm:grid-cols-[1fr_3fr] gap-4">
                                                    <div>
                                                        <p className="font-bold text-[#A87A38] text-lg text-center sm:text-start uppercase">{t.emploiContent.step3.cv}</p>
                                                        <p className="text-[#4A62AA] font-bold text-lg  text-center sm:text-start">{t.emploiContent.step3.objectif}</p>
                                                        <div className="max-w-4xl">

                                                            <p>{t.emploiContent.step3.p1}</p>
                                                        </div>
                                                        <br />
                                                        <p className="text-[#4A62AA] font-bold  text-lg  text-center sm:text-start"> {t.emploiContent.step3.rubriques}</p>
                                                    </div>

                                                </div>

                                                <div className="">

                                                    {t.emploiContent.step3.content.map((tip, index) => (

                                                        <div key={index}
                                                            className={`mt-1 p-4 grid grid-cols-1 sm:grid-cols-[1fr_3fr] gap-4 ${index % 2 === 0 ? 'bg-[#e7c89e] ' : ''
                                                                }`}
                                                        >
                                                            <div className=" font-bold  text-center ">
                                                                {tip.title} </div>
                                                            <div className="max-w-4xl">
                                                                <p>    {tip.text}
                                                                </p>
                                                            </div>
                                                        </div>


                                                    ))}


                                                    <div className="bg-white p-1 mt-1  grid grid-cols-[1fr_3fr] gap-4">

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

                                                <div className=" p-2 mt-1">
                                                    <div className="text-center">
                                                        <p> <b> <Link href="/misc/nous_contacter" className="  hover:text-xl">    {t.emploiContent.step3.contact}</Link>
                                                        </b>  {t.emploiContent.step3.info}</p> </div>
                                                </div>

                                                <div className="bg-white/60  pt-4 ">
                                                    <div className="font-bold uppercase text-[#A87A38] text-center">   {t.emploiContent.step3.lettre} </div>
                                                    <div className="p-1 mt-1 grid grid-cols-1 sm:grid-cols-[1fr_3fr] gap-4">
                                                        <div className="p-1 bg-[#f7debb]">
                                                            {t.emploiContent.step3.lettreIntro}</div>
                                                        <div className="max-w-4xl mt-4 space-y-2">
                                                            <p>
                                                                -    {t.emploiContent.step3.p2} </p>
                                                            <p> - {t.emploiContent.step3.p3}</p>
                                                            <p>  - {t.emploiContent.step3.p4} </p>
                                                            <p>  - {t.emploiContent.step3.p5}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="bg-white/60 pt-4 mt-1">
                                                    <div className="font-bold uppercase text-[#A87A38] text-center"> {t.emploiContent.step3.recommandation} </div>
                                                    <div className=" p-1 mt-1 space-y-2">
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
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="mt-2 space-y-4">
                            <div>

                                <div className="flex flex-col sm:flex-row gap-1">
                                    <button
                                        className="w-full sm:w-4/12 py-2 px-4  bg-[#4A62AA] text-white flex justify-between items-center sm:justify-center"
                                        onClick={() => handleToggle(4)}
                                    ><div className="flex gap-2">
                                            <span className="  uppercase font-bold ">  4</span>
                                            <span className="text-start">     {t.emploiContent.step4.title}
                                            </span>
                                            <span className="sm:ml-10">{open === 4 ? "▲" : "▼"}</span>
                                        </div>  </button>


                                </div>

                                {open === 4 && (
                                    <div className="bg-white/60 ">
                                        <div className="w-full">
                                            <div className="bg-white/60 ">

                                                {t.emploiContent.step4.content.map((tip, index) => (

                                                    <div key={index} className={`p-4 grid grid-cols-1 sm:grid-cols-[1fr_3fr] gap-8 ${index % 2 === 0 ? 'bg-[#e7c89e]' : ''
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


                                                <div className="mt-4 p-2">
                                                    <p className="text-red-500 text-center mb-2 font-bold ">{t.emploiContent.step4.avertissement}</p>
                                                    <p> {t.emploiContent.step4.conclu}
                                                    </p>

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
                                        className="w-full sm:w-4/12 py-2 px-4  bg-[#4A62AA] text-white  flex justify-between items-center sm:justify-center"
                                        onClick={() => handleToggle(5)}
                                    > <div className="flex gap-2">
                                            <span className="  uppercase font-bold ">  5</span>
                                            <span className="text-start">    {t.emploiContent.step5.title}
                                            </span> </div>
                                        <span className="sm:ml-10">{open === 5 ? "▲" : "▼"}</span>
                                    </button>


                                </div>

                                {open === 5 && (
                                    <div className="bg-white/60  ">
                                        <div className="w-full">
                                            <div className="flex flex-col space-y-4">
                                                  <div className=" ">
                                                     <div className="font-bold p-4 uppercase text-[#A87A38] text-center">
                                                    {t.emploiContent.step5.avant} </div>
                                         <div className=" p-4  space-y-2">

                                                    <div className="">
                                                        {t.emploiContent.step5.avantContent.map((tip, index) => (

                                                            <p key={index} className="  ">
                                                                -     {tip.text} </p>




                                                        ))}



                                                    </div>

                                                </div>




                                            </div>

                                            <div className="bg-[#e7c89e]/60 ">
                                                 <div className="font-bold p-4 uppercase text-[#A87A38] text-center">
                                                    {t.emploiContent.step5.pendant} </div>
                                            <div className=" p-4  space-y-2">
                                                    <div className="">
                                                        {t.emploiContent.step5.pendantContent.map((tip, index) => (

                                                            <p key={index} className="  ">
                                                                -   {tip.text} </p>




                                                        ))}

                                                    </div>

                                                </div>




                                            </div>
                                                        <div className="bg-white/60 ">
                                                   <div className="font-bold p-4 uppercase text-[#A87A38] text-center">
                                                    {t.emploiContent.step5.auterme}  </div>
                                        <div className=" p-4  space-y-2">

                                                    <div className="">
                                                        {t.emploiContent.step5.autermContent.map((tip, index) => (

                                                            <p key={index} className="   ">
                                                                -   {tip.text} </p>




                                                        ))}


                                                    </div>

                                                </div>




                                            </div>
                                             
                                            </div>

                                        </div>
                                    </div>
                                )}
                            </div>
                        </div> <div className="mt-6 space-y-4">
                            <div className="flex flex-col space-y-4 ">


                                <div className="bg-white/60 mt-1 grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4 md:gap-8">
                                    <div className="text-center p-4 font-bold text-white flex items-center justify-center bg-[#4A62AA] uppercase">
                                        {t.emploiContent.step5.arnaque}
                                    </div>
                                    <div className="p-2 space-y-2">
                                        {t.emploiContent.step5.arnaqueContent.map((tip, index) => (

                                                <p key={index} className="  ">
                                                    -   {tip.text} </p>




                                            ))}
                                    </div>
                                </div>

                                <div className="flex justify-center md:justify-end py-4">
                                    <button
                                        onClick={handleClick2}
                                        className="px-6 py-2 border border-[#4A62AA] bg-white/70 text-[#4A62AA] font-bold rounded-lg"
                                    >
                                      {t.emploiContent.postuler}
                                    </button>
                                </div>


                                <div className="bg-white/60 p-2 mt-1">
                                    <div className="font-bold uppercase text-[#4A62AA] text-center">     {t.emploiContent.reference}</div>
                                </div>
                                <div className="bg-white p-4 space-y-2">
                                 {t.emploiContent.auteur.map((tip, index) => (
                                            <p
                                                key={index}

                                            >
                                                -  {tip.name}<i className="text-[#4A62AA]"> {tip.title}</i> {tip.edition}
                                            </p>
                                        ))}  </div>


                                <div className="bg-white/60 p-2 mt-1">
                                    <div className="font-bold uppercase text-[#4A62AA]text-center">    {t.emploiContent.lien}</div>
                                </div>
                                <div className="bg-white p-4 space-y-2">
                                     <p>-   {t.emploiContent.ministere}</p>
                                    <p>- Fed Africa <br /> <a href="https://www.fedafrica.com" className="text-[#4A62AA]" target="_blank" rel="noopener noreferrer">https://www.fedafrica.com</a></p>
                                    <p>- Michael Page Africa <br /> <a href="https://www.michaelpageafrica.com" className="text-[#4A62AA]" target="_blank" rel="noopener noreferrer">https://www.michaelpageafrica.com</a></p>
                                
                                </div>
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
