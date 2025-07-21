"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Navbar from "../navbar/navbar";
import FooterMobile from "../footer/footerEnd";
import { Brand } from "@/service/Brand";

import en from '@/i18/en/student/entrepreneuriat.json';
import fr from '@/i18/fr/student/entrepreneuriat.json';
export default function EntrepreunariatMobile() {
  const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : fr;

    const [open, setOpen] = useState(null);

    const handleToggle = (index: any) => {
        setOpen(open === index ? null : index);
    };
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileMenuOpen2, setIsMobileMenuOpen2] = useState(false);
   const [brand, setBrand] = useState<Brand[]>([]);
    useEffect(() => {
        const fetchsetBrand = async () => {
            const brand: Brand[] = [
               
                {
                    id: 1,
                    name: "Medicare",
                    url: "",
                    path: "/images/logo/medicare.png"
                },
              

            ];
            setBrand(brand);
        };

        fetchsetBrand();
    }, []);


    return (
        <div>
           <div className="min-h-screen   bg-[#4A62AA]  overflow-auto  text-black  w-screen bg-cover  text-justify bg-center bg-no-repeat "  >
         
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
                        <p>    {t.title}</p>
                    </div>









                    <div className="mt-6 space-y-4">
                        <div>

                            <div className="flex flex-col sm:flex-row gap-1">
                                <button
                                    className="w-full  py-2 px-4  bg-[#4c75f0] text-white flex justify-between "
                                    onClick={() => handleToggle(1)}
                                >
                                    <span className="text-start"> {t.content1.title}</span>
                                    <span className="sm:ml-10 text-2xl">{open === 1 ? "▲" : "▼"}</span>
                                </button>


                            </div>

                            {open === 1 && (
                                <div className="bg-white/60 text-justify ">
                                    <div className="w-full">
                                        <div className="bg-white p-4 grid grid-cols-1 sm:grid-cols-[1fr_3fr] gap-8 mt-2">

                                            <p dangerouslySetInnerHTML={{ __html: t.content1.intro }} />
                                            <div >

                                                 <p className="p-2 bg-[#a2b0db]/70" dangerouslySetInnerHTML={{ __html: t.content1.item1 }} />

                                                    <p className="p-2" dangerouslySetInnerHTML={{ __html: t.content1.item2 }} />

                                                    <p className="p-2 bg-[#a2b0db]/70" dangerouslySetInnerHTML={{ __html: t.content1.item3 }} />

                                                    <p className="p-2" dangerouslySetInnerHTML={{ __html: t.content1.item4 }} />

                                                    <p className="p-2 bg-[#a2b0db]/70" dangerouslySetInnerHTML={{ __html: t.content1.item5 }} />

                                                    <p className="p-2" dangerouslySetInnerHTML={{ __html: t.content1.item6 }} />

                                                    <p className="p-2 bg-[#a2b0db]/70 " dangerouslySetInnerHTML={{ __html: t.content1.item7 }} />

                                                    <p className="p-2" dangerouslySetInnerHTML={{ __html: t.content1.item8 }} />

                                                    <p className="p-2 bg-[#a2b0db]/70" dangerouslySetInnerHTML={{ __html: t.content1.item9 }} />

                                                    <p className="p-2" dangerouslySetInnerHTML={{ __html: t.content1.item10 }} />

                                            </div>

                                         <p>{t.content1.maniere}</p>

                                            <p> <span className="text-[#4A62AA] mr-2 font-bold"> i) </span>{t.content1.maniere1}
                                            </p>
                                            <p> <span className="text-[#4A62AA] mr-2 font-bold "> ii) </span>{t.content1.maniere2}
                                            </p>
                                            <p> <span className="text-[#4A62AA] mr-2 font-bold"> iii) </span>{t.content1.maniere3}
                                            </p>


                                            <p className="my-2"> {t.content1.conclusion}

                                                    <div className="bg-[#e2dfd5]/70 mt-8 p-2">
                                                        <p> {t.content1.majorite}</p>
                                                        <p className=" mx-4 my-2">- <span className="text-[#2551d4] ">{t.content1.majorite1} </span> {t.content1.majorite2} </p>
                                                        <p className=" mx-4 my-2">- <span className="text-[#2551d4] ">{t.content1.majorite3}  </span> {t.content1.majorite4} </p>
                                                        <p className=" mx-4 my-2">  </p>
                                                    </div>

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
                                    className="w-full sm:w-4/12 py-2 px-4  bg-[#4c75f0] text-white  flex justify-between items-center sm:justify-center"
                                    onClick={() => handleToggle(2)}
                                >
                                    <span className="text-start">{t.content2.title} </span>

                                    <span className="sm:ml-10 text-2xl">{open === 2 ? "▲" : "▼"}</span>
                                </button>


                            </div>

                            {open === 2 && (
                                <div className="bg-white/60  text-justify ">
                                    <div className="w-full ">
                                        <div className="bg-white p-4 grid grid-cols-1 gap-4 md:gap-8 mt-2">
                                                   <p> {t.content2.intro}  </p>
                                           

                                            <div className="space-y-2">

                                                <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-2 md:gap-8 p-2">
                                                    <div className="font-bold text-start text-[#4A62AA]">
                                                         {t.content2.item1.title}</div>
                                                    <div>
                                                            <p>  {t.content2.item1.text}   </p>
                                                    </div>
                                                </div>


                                                <div className="bg-[#a2b0db]/70 grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-2 md:gap-8 p-2">
                                                    <div className="font-bold text-start text-[#4A62AA]">
                                                               {t.content2.item2.title}
                                                    </div>
                                                    <div>
                                                        <p> {t.content2.item2.text}</p>
                                                    </div>
                                                </div>


                                                <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-2 md:gap-8 p-2">
                                                    <div className="font-bold text-start text-[#4A62AA]">
                                                           {t.content2.item3.title}
                                                    </div>
                                                    <div>
                                                        <p>{t.content2.item3.text} </p>
                                                    </div>
                                                </div>


                                                <div className="bg-[#a2b0db]/70 grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-2 md:gap-8 p-2">
                                                    <div className="font-bold text-start text-[#4A62AA]">
                                                    {t.content2.item5.title} 
                                                    </div>
                                                    <div>
                                                    <p> {t.content2.item5.text}
                                                        </p>
                                                         </div>
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-2 md:gap-8 p-2">
                                                    <div className="font-bold text-start text-[#4A62AA]">
                                                     {t.content2.item6.title}</div>
                                                    <div>
                                                      <p>{t.content2.item6.text}

                                                        </p>
                                                    </div>
                                                </div>


                                                <div className="bg-[#a2b0db]/70 grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-2 md:gap-8 p-2">
                                                    <div className="font-bold text-start text-[#4A62AA]">
                                                        {t.content2.item7.title}
                                                    </div>
                                                    <div>
                                                          <p> {t.content2.item7.text}</p>
                                                    </div>
                                                </div>


                                               


                                                <div className="bg-[#a2b0db]/70 grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-2 md:gap-8 p-2">
                                                     <div className=" font-bold  text-start text-[#4A62AA] ">
                                                        {t.content2.item8.title}</div>
                                                      <div>
                                                        <p>{t.content2.item8.text}
                                                        </p>
                                                    </div>
                                                </div>


                                                <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-2 md:gap-8 p-2">
                                                    <div className=" font-bold  text-start text-[#4A62AA] ">
                                                        {t.content2.item9.title}</div>
                                               <div>
                                                        <p> {t.content2.item9.text}

                                                        </p>
                                                    </div>
                                                </div>


                                                <div className="bg-[#a2b0db]/70 grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-2 md:gap-8 p-2">
                                                  <div className=" font-bold  text-start text-[#4A62AA] ">
                                                        {t.content2.item10.title}</div>
                                                   <div>
                                                        <p>{t.content2.item10.text}
                                                        </p>
                                                    </div>
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
                                    className="w-full sm:w-4/12 py-2 px-4  bg-[#4c75f0] text-white flex justify-between items-center sm:justify-center"
                                    onClick={() => handleToggle(3)}
                                >
                                    <span className="text-start"> {t.content3.title}</span>

                                    <span className="sm:ml-10 text-2xl">{open === 3 ? "▲" : "▼"}</span>
                                </button>


                            </div>

                            {open === 3 && (
                                <div className="bg-white text-justify p-4">
                                    <div className="w-full">
                                        <p> {t.content3.intro}  </p>
                                        <div className=" gap-1">
                                            <div className="bg-white/60 p-2  gap-8">
                                                <p className="justify-center font-bold text-center  text-[#9b6e0f] uppercase items-center">{t.content3.plus.title} </p>

                                                <div >

                                                    <p className="p-2 bg-[#e6d4bc]/70">
                                                                <b>{t.content3.plus.item1.title}  </b>{t.content3.plus.item1.text}
                                                            </p>
                                                            <p className="p-2">
                                                                <b> {t.content3.plus.item2.title}  </b> {t.content3.plus.item1.text}
                                                            </p>
                                                            <p className="p-2 bg-[#e6d4bc]/70">
                                                                <b> {t.content3.plus.item3.title}   </b>{t.content3.plus.item1.text}
                                                            </p>
                                                            <p className="p-2">
                                                                <b>{t.content3.plus.item4.title} </b> {t.content3.plus.item1.text}

                                                            </p>


                                                </div>
                                            </div>
                                            <div className="bg-white/60 p-2  gap-8">
                                                <div className=" items-center justify-center h-full font-bold bg-[#a2b0db] text-center uppercase">
                                                    <p className="justify-center text-center items-center text-[#9b6e0f] bg-white">{t.content3.moins.title}</p> </div>

                                                <div >

                                              <p className="p-2 bg-[#a2b0db]/70">
                                                                <b>{t.content3.moins.item1.title}  </b> {t.content3.moins.item1.text}
                                                            </p>
                                                            <p className="p-2">
                                                                <b> {t.content3.moins.item2.title}   </b>{t.content3.moins.item2.text}
                                                            </p>
                                                            <p className="p-2 bg-[#a2b0db]/70">
                                                                <b> {t.content3.moins.item3.title}   </b>{t.content3.moins.item3.text}
                                                            </p>

                                                            <p className="p-2">
                                                                <b> {t.content3.moins.item4.title}   </b> {t.content3.moins.item4.text}
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
                                    className="w-full sm:w-4/12 py-2 px-4  bg-[#4c75f0] text-white flex justify-between items-center sm:justify-center"
                                    onClick={() => handleToggle(4)}
                                >
                                    <span className="text-start">  {t.content4.title}</span>
                                    <span className="sm:ml-10 text-2xl">{open === 4 ? "▲" : "▼"}</span>
                                </button>


                            </div>

                            {open === 4 && (
                                <div className="bg-white text-justify ">
                                    <div className="w-full">
                                        <p className="p-4">
                                          —  {t.content4.p1}
  </p>
                                        <p className="p-4">
                                          —  {t.content4.p2}  </p>
                                        <p className="p-4">
                                        {t.content4.p3}  </p>

                                        <div className=" bg-white/70  p-2 grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4 md:gap-8">
                                            <div className="flex items-center justify-center p-2 font-bold bg-[#939497] text-center uppercase">
                                                <p>{t.content4.inconvenient} </p>
                                            </div>
                                            <div className="space-y-2 text-black">
                                                <p className="p-2 bg-[#a2b0db]">
                                                            {t.content4.item1}

                                                        </p>
                                                        <p className="p-2">
                                                            {t.content4.item2}
                                                        </p>
                                                        <p className="p-2 bg-[#a2b0db]">
                                                            {t.content4.item3}  </p>

                                                        <p className="p-2">
                                                            {t.content4.item4}   </p>
                                                        <p className="p-2 bg-[#a2b0db]">
                                                            {t.content4.item5}   </p>

                                            </div>
                                        </div>

                                        <p className="p-2">
                                            <b>  {t.content4.plusLoin} </b>
                                        </p>
                                        <p className="p-2">
                                            <span className="text-[#4A62AA] font-bold">(1)</span>
                                      {t.content4.read} <span className="text-[#4A62AA]">  {t.content4.name} </span>  {t.content4.info}   </p>
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>
                    <div className="mt-2 space-y-4">
                        <div>

                            <div className="flex flex-col sm:flex-row gap-1">
                                <button
                                    className="w-full sm:w-4/12 py-2 px-4  bg-[#4c75f0] text-white flex justify-between items-center sm:justify-center"
                                    onClick={() => handleToggle(5)}
                                >
                                    <span className="text-start">{t.content5.title}</span>
                                    <span className="sm:ml-10 text-2xl">{open === 5 ? "▲" : "▼"}</span>
                                </button>


                            </div>

                            {open === 5 && (
                                <div className="bg-white text-justify p-2">
                                    <div className="w-full">
                                        <p className="p-2"    dangerouslySetInnerHTML={{ __html: t.content5.p1 }} />

                                        <div className="bg-white">
                                            <p className="p-2 my-2 text-white text-center font-bold bg-[#A87A38]">
                                                        {t.content5.p2}
                                            </p>

                                            <div className="p-2 space-y-2">
                                                    <p className="my-2" dangerouslySetInnerHTML={{ __html: t.content5.p3 }} />

                                                <div className="space-y-1 pl-4">

                                                    <p className="flex items-start">  <span className="text-[#4A62AA] font-bold mr-2">   • {t.content5.item1.title}</span>{t.content5.item1.text} </p>
                                                     <p className="flex items-start"><span className="text-[#4A62AA] font-bold mr-2">• {t.content5.item2.title}</span> {t.content5.item2.text} </p>
                                                      <p className="flex items-start"><span className="text-[#4A62AA] font-bold mr-2">• {t.content5.item3.title}</span> {t.content5.item3.text} </p>
                                                     <p className="flex items-start"><span className="text-[#4A62AA] font-bold mr-2">• {t.content5.item4.title} </span> {t.content5.item4.text} </p>
                                                      <p className="flex items-start"><span className="text-[#4A62AA] font-bold mr-2">• {t.content5.item5.title} </span> {t.content5.item5.text} </p>
                                                       <p className="flex items-start"> <span className="text-[#4A62AA] font-bold mr-2">• {t.content5.item6.title}  </span>{t.content5.item6.text}</p>
                                                    <p className="flex items-start"><span className="text-[#4A62AA] font-bold mr-2">• {t.content5.item7.title} </span>{t.content5.item7.text} </p>
                                                     <p className="flex items-start"><span className="text-[#4A62AA] font-bold mr-2">• {t.content5.item8.title} </span>{t.content5.item8.text}  </p>
                                                    
                                                </div>
                                            </div>
                                            <div className="bg-gray-300">


                                                <p className="p-2">
                                                      — <span dangerouslySetInnerHTML={{ __html: t.content5.conclu }} />    </p>
                                                <p className="p-2">
                                                       — {t.content5.conclu2}
                                                </p>
                                            </div>
                                            <p className="p-2">
                                               <b> <Link href="/misc/nous_contacter" className="  hover:text-xl">     {t.content5.contact} </Link>
                                                    </b> {t.content5.info}

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
                                    className="w-full py-2 px-4 text-center bg-[#4c75f0] text-white flex items-center justify-between"
                                    onClick={() => handleToggle(6)}
                                >
                                    <span className="flex-grow text-start">{t.content6.title}  </span>
                                    <span className="text-2xl">{open === 6 ? "▲" : "▼"}</span>
                                </button>


                            </div>

                            {open === 6 && (
                                <div className="bg-white/60 text-justify p-4">
                                    <div className="w-full  py-6">
                                        <div className="bg-white shadow-md  overflow-hidden">
                                            <p className="p-4 my-2 text-white text-center  bg-[#A87A38] md:text-lg lg:text-xl">
                                                Try to become a man of value rather than a man of success.
                                                <span className="text-black font-bold  block sm:inline">Albert Einstein</span>
                                            </p>

                                            <p className="p-4 text-justify leading-relaxed" dangerouslySetInnerHTML={{ __html: t.content6.p1 }} />

                                            <p className="p-4 text-justify leading-relaxed">
                                            {t.content6.p2}</p>

                                            <p className="p-4 text-justify leading-relaxed">
                                           {t.content6.p3}  </p>
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
                                    className="w-full py-2 px-4 text-center bg-[#4c75f0] text-white flex items-center justify-between"
                                    onClick={() => handleToggle(7)}
                                >
                                    <span className="flex-grow text-start"> {t.content7.title}</span>
                                    <span className="sm:ml-10 text-2xl">{open === 7 ? "▲" : "▼"}</span>
                                </button>


                            </div>

                            {open === 7 && (
                                <div className="bg-white/60  text-justify p-4">
                                    <div className="w-full">
                                        <div className="bg-white">
                                            <p className="p-4 my-2 text-white text-center  bg-[#A87A38]  md:text-base">
                                                 {t.content7.quote} <span className=" font-bold text-black"> Léon Trotsky</span>
                                            </p>

                                            <div className="p-4 space-y-4">
                                                <p className="text-[#4A62AA] font-bold text-lg md:text-xl">
                                                {t.content7.p1}
                                                </p>

                                                <p className="text-black">
                                                          {t.content7.p2} </p>

                                             

                                                <p className="text-[#4A62AA] font-bold text-lg md:text-xl mt-6">
                                                     {t.content7.p3} </p>

                                                <p className="text-black">
                                               {t.content7.p4}  </p>

                                                <p className="text-black" dangerouslySetInnerHTML={{ __html: t.content7.p5 }} />

                                                <p className="text-[#4A62AA] font-bold text-lg md:text-xl mt-6">
                                                {t.content7.plusLoin}
                                                </p>

                                                <div className="space-y-4 p-2">
                                                
                                                    <p>
                                                        {t.content7.consulter} <Link className="text-blue-700 font-bold" href="/zoom">
                                                            {t.content7.zoom}  </Link>
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
                                    className="w-full sm:w-4/12 py-2 px-4  bg-[#4c75f0] text-white flex justify-between items-center sm:justify-center"
                                    onClick={() => handleToggle(8)}
                                >
                                    <span className="text-start">  {t.content8.title}</span>
                                    <span className="sm:ml-10 text-2xl">{open === 8 ? "▲" : "▼"}</span>
                                </button>


                            </div>

                            {open === 8 && (
                                <div className="bg-white/60 p-4">
                                    <div className="w-full space-y-4">


                                  
                                          {t.content8.sections.map((section, sectionIndex) => (
                                                <div key={sectionIndex} className="bg-white mt-2">
                                                    <p className="font-bold my-2 text-lg bg-[#dac7ac] p-2">
                                                        {section.title}
                                                    </p>

                                                    <div className="p-4">

                                                        {section.content && <p>{section.content}</p>}


                                                        {section.link && (
                                                            <p>
                                                                {section.link.text}
                                                                <a
                                                                    href={section.link.url}
                                                                    className="text-blue-600"
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                >
                                                                    <i> {section.link.display}</i>
                                                                </a>
                                                            </p>
                                                        )}


                                                        {section.subsections && section.subsections.map((subsection, subIndex) => (
                                                            <div key={subIndex} className="mt-2">
                                                                <p className="font-bold"> ■  {subsection.title}</p>


                                                                {'missions' in subsection && subsection.missions && (
                                                                    <div className="text-black">
                                                                        Missions :
                                                                        <div className="mx-4">
                                                                            {subsection.missions.map((mission, missionIndex) => (
                                                                                <div key={missionIndex}>- {mission}</div>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                )}


                                                                {'description' in subsection && subsection.description && (
                                                                    <p>{subsection.description}</p>
                                                                )}


                                                                {'mission' in subsection && subsection.mission && (
                                                                    <p>{subsection.mission}</p>
                                                                )}


                                                                {'location' in subsection && subsection.location && (
                                                                    <p className="mt-2">{subsection.location}</p>
                                                                )}


                                                                {'link' in subsection && subsection.link && (
                                                                    <p>
                                                                        <a
                                                                            href={subsection.link.url}
                                                                            className="text-blue-600"
                                                                            target="_blank"
                                                                            rel="noopener noreferrer"
                                                                        >
                                                                            <i>{subsection.link.display}</i>
                                                                        </a>
                                                                    </p>
                                                                )}
                                                            </div>
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
                                    className="w-full sm:w-4/12 py-2 px-4  bg-[#4c75f0] text-white flex justify-between items-center sm:justify-center"
                                    onClick={() => handleToggle(9)}
                                >
                                    <span className="text-start">  {t.content9.title}</span>
                                    <span className="sm:ml-10 text-2xl">{open === 9 ? "▲" : "▼"}</span>
                                </button>


                            </div>

                            {open === 9 && (
                                <div className="bg-white text-justify p-4">
                                    <div className="w-full ">
                                       <div className="space-y-4">
                                               < p className="font-bold">
                                                    {t.content9.titleCamerounais}
                                                </p>
                                                {t.content9.aucteurCamerounais.map((tip, index) => (
                                                    <p
                                                        key={index}

                                                    >
                                                        -  {tip.name}<i className="text-[#4A62AA]"> {tip.title}</i> {tip.edition}
                                                    </p>
                                                ))}

                                                 <p className="font-bold pt-4">
                                                    {t.content9.titleEtranger}
                                                </p>
                                                {t.content9.aucteurEtranger.map((tip, index) => (
                                                    <p
                                                        key={index}

                                                    >
                                                        -  {tip.name}<i className="text-[#4A62AA]"> {tip.title}</i> {tip.edition}
                                                    </p>
                                                ))}
                                            </div>






                                    </div>
                                </div>
                            )}
                        </div>

                    </div>
                    <div className="mt-2">
                        <div>

                            <div className="flex flex-col sm:flex-row gap-1">
                                <button
                                    className="w-full sm:w-4/12 py-2 px-4  bg-[#4c75f0] text-white flex justify-between items-center sm:justify-center"
                                    onClick={() => handleToggle(10)}
                                >
                                    <span className="flex-grow text-start">{t.content10.title}</span>
                                    <span className="text-2xl">{open === 10 ? "▲" : "▼"}</span>
                                </button>


                            </div>

                            {open === 10 && (
                                <div className="bg-white text-start p-4">
                                    <div className="w-full ">
                                         <div className="space-y-4">

                                                <p>
                                                    - {t.content10.item1}<br /> <a href="https://www.test-mace.com/accueil/" className="text-blue-600" target="_blank" rel="noopener noreferrer"><i>  https://www.test-mace.com/accueil/ </i></a>
                                                </p>
                                                <p>
                                                    -{t.content10.item2} <br /> <a href="https://business-builder.cci.fr/test-entrepreneur/votre-caractere" className="text-blue-600" target="_blank" rel="noopener noreferrer"><i>  https://business-builder.cci.fr/test-entrepreneur/votre-caractere </i> </a>
                                                </p>
                                                <p>
                                                    - {t.content10.item3} <br /> <a href="https://business-builder.cci.fr/test-entrepreneur/" className="text-blue-600" target="_blank" rel="noopener noreferrer"><i>  https://business-builder.cci.fr/test-entrepreneur/ </i></a>
                                                </p>
                                                <p>
                                                    - {t.content10.item4} <br /> <a href="https://www.minefop.cm" className="text-blue-600" target="_blank" rel="noopener noreferrer"><i> https://www.minefop.cm </i></a>
                                                </p>
                                                <p>
                                                    - {t.content10.item5}  <br /> <a href="https://www.minpmeesa.cm" className="text-blue-600" target="_blank" rel="noopener noreferrer"><i> https://www.minpmeesa.cm </i></a>
                                                </p>
                                                <p>
                                                    - {t.content10.item6}  <br /> <a href="https://www.weforum.org/stories/2020/10/top-10-work-skills-of-tomorrow-how-long-it-takes-to-learn-them/" className="text-blue-600" target="_blank" rel="noopener noreferrer"> <i>  https://www.weforum.org/stories/2020/10/top-10-work-skills-of-tomorrow-how-long-it-takes-to-learn-them/ </i></a>
                                                </p>
                                            </div>





                                    </div>
                                </div>
                            )}
                        </div>

                    </div>

                </div>
                             <div className="flex  mt-24 bg-white items-center justify-center  ">
          {brand.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center "
            >
              <div className="flex  items-center   justify-center  ">


                <a href={item.path}>
                
                  <img
                    src={item.path}
                    alt={item.name}
                        width={200}
            height={150}
            className="flex  my-10 justify-center  "
                  /> </a>
              </div></div>
          ))}
        </div>
            </div>
      <footer className="w-full bg-blue-900    text-white text-center">
                                            <FooterMobile />
                                          </footer>
        </div>

    );
}