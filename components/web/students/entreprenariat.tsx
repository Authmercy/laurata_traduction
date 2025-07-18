"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import en from '@/i18/en/student/entrepreneuriat.json';
import fr from '@/i18/fr/student/entrepreneuriat.json';

export default function Entrepreunariat() {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : fr;
    const [open, setOpen] = useState(null);

    const handleToggle = (index: any) => {
        setOpen(open === index ? null : index);
    };


    return (
        <div className="p-2 md:pl-8 text-black" >
            <div className="flex pl-6 gap-1 w-full">
                <div className="flex justify-center flex-col">

                    <div className="flex flex-wrap pl-10 pt-6">
                        <div className="flex-grow md:w-2/3  text-black  p-8">
                            <div className="  bg-[#A87A38] p-3 text-center text-2xl font-bold  uppercase text-white ">
                                {t.title}
                            </div>
                            <div className="flex flex-row mt-4 gap-1">
                                <div className="flex-1 ">
                                </div>
                                <div className="flex-1 bg-white  text-black p-2 text-end">

                                    <p className=" ">  {t.quote} <span className="text-[#4A62AA] font-bold ">Daniel Jouve </span></p>

                                </div>

                            </div>
                            <div className="mt-2 bg-white/70  text-black p-2 text-start">

                                <p className=" p-2">  {t.intro}</p>

                            </div>
                            <div className="mt-2 bg-white text-black p-2 text-center"  >

                                <p className=" p-2" dangerouslySetInnerHTML={{ __html: t.intro2 }} />

                            </div>

                            <div className="mt-2 space-y-4">
                                <div>


                                    <button
                                        className="py-2 px-4 w-full bg-white/80 text-[#4A62AA]  text-xl font-bold flex justify-between items-center"
                                        onClick={() => handleToggle(1)}
                                    >
                                        <span>{t.content1.title}</span>
                                        <span className="text-2xl">{open === 1 ? "▲" : "▼"}</span>
                                    </button>


                                    {open === 1 && (
                                        <div className="bg-white/80 p-4 text-black">

                                            <div className="w-full">
                                                <p className="p-2 text-center text-[#A87A38] " dangerouslySetInnerHTML={{ __html: t.content1.intro }} />
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
                                                <div className="m-2">
                                                    <p>{t.content1.maniere}</p>

                                                    <p className="mt-4"><span className="text-[#2551d4]  mr-10"> i) </span>{t.content1.maniere1}
                                                    </p>
                                                    <p> <span className="text-[#2551d4] mr-9 "> ii) </span>{t.content1.maniere2}
                                                    </p>
                                                    <p> <span className="text-[#2551d4] mr-8"> iii) </span>{t.content1.maniere3}
                                                    </p>
                                                </div>

                                                <p className="m-4">{t.content1.conclusion}

                                                    <div className="bg-[#e2dfd5]/70 mt-8 p-2">
                                                        <p> {t.content1.majorite}</p>
                                                        <p className=" mx-4 my-2">- <span className="text-[#2551d4] ">{t.content1.majorite1} </span> {t.content1.majorite2} </p>
                                                        <p className=" mx-4 my-2">- <span className="text-[#2551d4] ">{t.content1.majorite3}  </span> {t.content1.majorite4} </p>
                                                        <p className=" mx-4 my-2">  </p>
                                                    </div>

                                                </p>
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
                                        <span>{t.content2.title} </span>
                                        <span className="text-2xl">{open === 2 ? "▲" : "▼"}</span>
                                    </button>


                                    {open === 2 && (<div className="bg-white/80  p-4 ">

                                        <div className="w-full ">
                                            <p> {t.content2.intro}  </p>
                                            <div className="/60 p-4 ">
                                                <div className=" p-4 grid grid-cols-[1fr_3fr] gap-8">

                                                    <div className=" font-bold  text-start text-[#4A62AA] ">
                                                        {t.content2.item1.title}</div>
                                                    <div className="max-w-4xl">
                                                        <p>  {t.content2.item1.text}   </p>
                                                    </div>
                                                </div>
                                                <div className="bg-[#a2b0db]/70  p-4 grid grid-cols-[1fr_3fr] gap-8">

                                                    <div className="font-bold  text-start text-[#4A62AA] ">
                                                        {t.content2.item2.title}</div>
                                                    <div className="max-w-4xl">
                                                        <p>  {t.content2.item2.text}
                                                        </p>
                                                    </div>



                                                </div>
                                                <div className=" p-4 grid grid-cols-[1fr_3fr] gap-8">

                                                    <div className=" font-bold  text-start text-[#4A62AA] ">
                                                        {t.content2.item3.title}</div>
                                                    <div className="max-w-4xl">
                                                        <p> {t.content2.item3.text}  </p>
                                                    </div>
                                                </div>
                                                <div className="bg-[#a2b0db]/70  p-4 grid grid-cols-[1fr_3fr] gap-8">
                                                    <div className=" font-bold  text-start text-[#4A62AA] ">
                                                        {t.content2.item4.title}</div>
                                                    <div className="max-w-4xl">
                                                        <p>{t.content2.item4.text}
                                                        </p>
                                                    </div>



                                                </div>
                                                <div className=" p-4 grid grid-cols-[1fr_3fr] gap-8">

                                                    <div className=" font-bold  text-start text-[#4A62AA] ">
                                                        {t.content2.item5.title} </div>
                                                    <div className="max-w-4xl">
                                                        <p> {t.content2.item5.text}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="bg-[#a2b0db]/70  p-4 grid grid-cols-[1fr_3fr] gap-8">
                                                    <div className=" font-bold  text-start text-[#4A62AA] ">
                                                        {t.content2.item6.title}</div>
                                                    <div className="max-w-4xl">
                                                        <p>{t.content2.item6.text}

                                                        </p>
                                                    </div>



                                                </div>
                                                <div className="p-4 grid grid-cols-[1fr_3fr] gap-8">

                                                    <div className=" font-bold  text-start text-[#4A62AA] ">
                                                        {t.content2.item7.title}</div>
                                                    <div className="max-w-4xl">
                                                        <p> {t.content2.item7.text}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="bg-[#a2b0db]/70  p-4 grid grid-cols-[1fr_3fr] gap-8">
                                                    <div className=" font-bold  text-start text-[#4A62AA] ">
                                                        {t.content2.item8.title}</div>
                                                    <div className="max-w-4xl">
                                                        <p>{t.content2.item8.text}
                                                        </p>
                                                    </div>



                                                </div>
                                                <div className="p-4 grid grid-cols-[1fr_3fr] gap-8">

                                                    <div className=" font-bold  text-start text-[#4A62AA] ">
                                                        {t.content2.item9.title}</div>
                                                    <div className="max-w-4xl">
                                                        <p> {t.content2.item9.text}

                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="bg-[#a2b0db]/70  p-4 grid grid-cols-[1fr_3fr] gap-8">
                                                    <div className=" font-bold  text-start text-[#4A62AA] ">
                                                        {t.content2.item10.title}</div>
                                                    <div className="max-w-4xl">
                                                        <p>{t.content2.item10.text}
                                                        </p>
                                                    </div>



                                                </div>





                                            </div>





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
                                        <span> {t.content3.title}
                                        </span>
                                        <span className="text-2xl">{open === 5 ? "▲" : "▼"}</span>
                                    </button>


                                    {open === 5 && (<div className="bg-white/80 p-4 ">

                                        <div className="w-full">
                                            <p> {t.content3.intro}  </p>
                                            <div className="flex flex-col gap-1 mt-2">
                                                <div className="bg-white/60 p-2 grid grid-cols-[1fr_3fr] gap-8">
                                                    <div className="flex items-center justify-center h-full font-bold bg-[#d8af76] text-center uppercase">
                                                        <p>{t.content3.plus.title} </p>
                                                    </div>


                                                    <div className="max-w-4xl">
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
                                                </div>
                                                <div className="bg-white/60 p-2  grid grid-cols-[1fr_3fr] gap-8">
                                                    <div className="flex items-center justify-center h-full font-bold bg-[#a2b0db] text-center uppercase">
                                                        <p className="justify-center text-center items-center">{t.content3.moins.title}  </p> </div>
                                                    <div className="max-w-4xl">
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
                                    </div>)}

                                </div>
                            </div>
                            <div className="mt-1 space-y-4">
                                <div>


                                    <button
                                        className="py-2 px-4 w-full bg-white/80 text-[#4A62AA]  text-xl font-bold flex justify-between items-center"
                                        onClick={() => handleToggle(6)}
                                    >
                                        <span> {t.content4.title}
                                        </span>
                                        <span className="text-2xl">{open === 6 ? "▲" : "▼"}</span>
                                    </button>


                                    {open === 6 && (<div className="bg-white/80 p-4 ">

                                        <div className="w-full">
                                            <p className="p-2">
                                                —  {t.content4.p1}

                                            </p>
                                            <p className="p-2">
                                                —  {t.content4.p2}
                                            </p>
                                            <p className="p-2">
                                                {t.content4.p3}

                                            </p>
                                            <div className="bg-white/60 p-2  grid grid-cols-[1fr_3fr] gap-8">

                                                <div className="flex items-center justify-center h-full font-bold bg-[#a2b0db] text-center uppercase">
                                                    <p className="justify-center text-center items-center uppercase"> {t.content4.inconvenient} </p> </div>
                                                <div className="max-w-4xl">
                                                    <div >

                                                        <p className="p-2 bg-[#a2b0db]/70">
                                                            {t.content4.item1}

                                                        </p>
                                                        <p className="p-2">
                                                            {t.content4.item2}
                                                        </p>
                                                        <p className="p-2 bg-[#a2b0db]/70">
                                                            {t.content4.item3}  </p>

                                                        <p className="p-2">
                                                            {t.content4.item4}   </p>
                                                        <p className="p-2 bg-[#a2b0db]/70">
                                                            {t.content4.item5}   </p>

                                                    </div>

                                                </div>
                                            </div>
                                            <p className="p-2">  <b>  {t.content4.plusLoin} </b>
                                            </p>
                                            <p> <span className="text-[#4A62AA] font-bold"> (1) </span>
                                                {t.content4.read} <span className="text-[#4A62AA]">  {t.content4.name} </span>  {t.content4.info}
                                            </p>


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
                                        <span>{t.content5.title}</span>
                                        <span className="text-2xl">{open === 7 ? "▲" : "▼"}</span>
                                    </button>


                                    {open === 7 && (<div className="bg-white/80  p-4 ">

                                        <div className="w-full ">
                                            <p dangerouslySetInnerHTML={{ __html: t.content5.p1 }} />
                                            <div className="bg-white p-2 space-y-2 ">
                                                <p className="p-2 my-2 text-white text-center font-bold bg-[#A87A38]">
                                                    {t.content5.p2}

                                                </p>
                                                <div className="p-2">
                                                    <p className="my-2" dangerouslySetInnerHTML={{ __html: t.content5.p3 }} />

                                                    <p>  <span className="text-[#4A62AA] font-bold">   • {t.content5.item1.title}</span>{t.content5.item1.text} </p>
                                                    <p> <span className="text-[#4A62AA] font-bold">• {t.content5.item2.title}</span> {t.content5.item2.text} </p>
                                                    <p> <span className="text-[#4A62AA] font-bold">• {t.content5.item3.title}</span> {t.content5.item3.text} </p>
                                                    <p> <span className="text-[#4A62AA] font-bold">• {t.content5.item4.title}r </span> {t.content5.item4.text} </p>
                                                    <p> <span className="text-[#4A62AA] font-bold">• {t.content5.item5.title} </span> {t.content5.item5.text} </p>
                                                    <p>  <span className="text-[#4A62AA] font-bold">• {t.content5.item6.title}  </span>{t.content5.item6.text}</p>
                                                    <p> <span className="text-[#4A62AA] font-bold">• {t.content5.item7.title} </span>{t.content5.item7.text} </p>
                                                    <p> <span className="text-[#4A62AA] font-bold">• {t.content5.item8.title} </span>{t.content5.item8.text}  </p>
                                                </div>

                                                <p className="p-2">
                                                    — <span dangerouslySetInnerHTML={{ __html: t.content5.conclu }} />    </p>
                                                <p className="p-2">
                                                    — {t.content5.conclu2}
                                                </p>
                                                <p>
                                                    <b> <Link href="/misc/nous_contacter" className="  hover:text-xl">     {t.content5.contact} </Link>
                                                    </b> {t.content5.info}

                                                </p>
                                            </div>



                                        </div>
                                    </div>)}







                                </div>

                            </div>
                            <div className="mt-1 space-y-4">
                                <div>


                                    <button
                                        className="py-2 px-4 w-full bg-white/80 text-[#4A62AA]  text-xl  flex justify-between items-center"
                                        onClick={() => handleToggle(10)}
                                    >
                                        <p>   <span className="font-bold ">{t.content6.title}  </span> <span className="text-[#A87A38]">  </span> </p>
                                        <span className="text-2xl">{open === 10 ? "▲" : "▼"}</span>
                                    </button>


                                    {open === 10 && (<div className="bg-white/80  p-4 ">

                                        <div className="w-full ">
                                            <p>
                                            </p>
                                            <div className=" ">
                                                <p className="p-2 my-2 text-white text-center font-bold bg-[#A87A38]">
                                                    Try to become a man of value rather than a man of success.  <span >Albert Einstein</span>     </p>
                                                <p className="p-2 " dangerouslySetInnerHTML={{ __html: t.content6.p1 }} />

                                                <p className="p-2">

                                                    {t.content6.p2}
                                                </p>
                                                <p className="p-2">

                                                    {t.content6.p3}  </p>
                                            </div>


                                        </div>
                                    </div>)}







                                </div>

                            </div>
                            <div className="mt-1 space-y-4">
                                <div>


                                    <button
                                        className="py-2 px-4 w-full bg-white/80 text-[#4A62AA]  text-xl  flex justify-between items-center"
                                        onClick={() => handleToggle(11)}
                                    >
                                        <p>   <span className="font-bold "> {t.content7.title}</span>  <span className="text-[#A87A38]">  </span> </p>
                                        <span className="text-2xl">{open === 11 ? "▲" : "▼"}</span>
                                    </button>


                                    {open === 11 && (<div className="bg-white/80  p-4 ">

                                        <div className="w-full ">
                                            <p>
                                            </p>
                                            <div className="">
                                                <p className="p-2 my-2 text-white text-center font-bold bg-[#A87A38]">
                                                    {t.content7.quote}
                                                    <span className="text-black"> Léon Trotsky</span>
                                                </p>
                                                <div className="p-2">
                                                    <p className="text-[#4A62AA] font-bold my-2">
                                                        {t.content7.p1}
                                                    </p>
                                                    <p className="">
                                                        {t.content7.p2}
                                                    </p>
                                                    <p>

                                                    </p>
                                                    <p className="text-[#4A62AA] font-bold my-2">
                                                        {t.content7.p3}

                                                    </p>
                                                    <p className="">
                                                        {t.content7.p4} </p>
                                                    <p dangerouslySetInnerHTML={{ __html: t.content7.p5 }} />

                                                    <p className="text-[#A87A38] font-bold  mt-8 my-2">
                                                        {t.content7.plusLoin}

                                                    </p>

                                                    <p>
                                                        {t.content7.consulter} <Link className="text-blue-700 font-bold" href="/zoom">
                                                            {t.content7.zoom}  </Link>
                                                    </p>

                                                </div>
                                            </div>


                                        </div>
                                    </div>)}







                                </div>




                            </div>
                            <div className="mt-1 space-y-4">
                                <div>


                                    <button
                                        className="py-2 px-4 w-full bg-white/80 text-[#4A62AA]   text-xl font-bold flex justify-between items-center"
                                        onClick={() => handleToggle(8)}
                                    >
                                        <span > {t.content8.title}</span>
                                        <span className="text-2xl">{open === 8 ? "▲" : "▼"}</span>
                                    </button>


                                    {open === 8 && (
                                        <div className="bg-white/80  p-4 ">

                                        <div className="w-full ">
                                            <p  dangerouslySetInnerHTML={{ __html: t.content8.intro }} /> 


                                          
                                        </div>
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
    

                                    </div>)}







                                </div>

                            </div>
                            <div className="mt-1 space-y-4">
                                <div>


                                    <button
                                        className="py-2 px-4 w-full bg-white/80 text-[#4A62AA]  text-xl font-bold flex justify-between items-center"
                                        onClick={() => handleToggle(3)}
                                    >
                                        <span>    {t.content9.title}</span>
                                        <span className="text-2xl">{open === 3 ? "▲" : "▼"}</span>
                                    </button>


                                    {open === 3 && (<div className="bg-white/80  p-4 ">

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
                                    </div>)}







                                </div>

                            </div>


                            <div className="mt-1 space-y-4">
                                <div>


                                    <button
                                        className="py-2 px-4 w-full bg-white/80 text-[#4A62AA] text-xl font-bold flex justify-between items-center"
                                        onClick={() => handleToggle(4)}
                                    >
                                        <span>  {t.content10.title} </span>
                                        <span className="text-2xl">{open === 4 ? "▲" : "▼"}</span>
                                    </button>


                                    {open === 4 && (<div className="bg-white/80  p-4 ">

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
                                    </div>)}







                                </div>

                            </div>


                        </div>


                    </div>


                </div >



            </div>
        </div>

    );
}
