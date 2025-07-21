"use client";
import React from "react";
import { useEffect, useState } from "react";

import en from '@/i18/en/student/generalite.json';
import fr from '@/i18/fr/student/generalite.json';
import Navbar from "../../navbar/navbar";
import FooterMobile from "../../footer/footerEnd";
import { useRouter } from "next/router";


export default function GeneraliteComponentMobile() {
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
   {t.generalitesTitle}
            </p>  </div>









          <div className="mt-8 space-y-4 ">
            <div>

              <div className="flex flex-col sm:flex-row gap-1">
                <button
                  className="w-full  py-2 px-4  bg-[#4c75f0] text-white flex justify-between "
                  onClick={() => handleToggle(1)}
                >
                  <span className="flex-grow text-start"> {t.accessTitle}</span>
                  <span className="sm:ml-10 text-2xl">{open === 1 ? "▲" : "▼"}</span>
                </button>


              </div>

              {open === 1 && (
                <div className="bg-white/60 ">
                  <div className="w-full">
                    <div className="bg-white/60 p-4 pb-0 grid grid-cols-1 sm:grid-cols-[1fr_3fr] gap-8 mt-2">

                               <p dangerouslySetInnerHTML={{ __html: t.accessIntro }} />

                      <div className="px-2 ">
                        <div className="my-2 ">
                            <p> <span className="text-[#4A62AA] text-2xl font-bold "> - </span>
                                                        <span dangerouslySetInnerHTML={{ __html: t.diploma1 }} />
                                                    </p>
                                                    <p> <span className="text-[#4A62AA] text-2xl font-bold "> - </span>
                                                        <span dangerouslySetInnerHTML={{ __html: t.diploma2 }} />
                                                    </p>
                        </div>

                        <div className="overflow-x-auto">
                          <table className="text-start border-2 w-full min-w-[600px]">
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
                                   <td className="flex-1 border bg-[#dbdad9]/70 p-2">
                                                                -    <span dangerouslySetInnerHTML={{ __html: t.tableRow1Col1 }} />     </td>
                                                            <td className="flex-1 border bg-[#4A62AA]/20 p-2">
                                                                ‒   <span dangerouslySetInnerHTML={{ __html: t.tableRow1Col2 }} />   </td>
                                                        </tr>
                                                        <tr className="flex">
                                                            <td className="flex-1 border bg-[#dbdad9]/70 p-2">
                                                                -   <span dangerouslySetInnerHTML={{ __html: t.tableRow2Col1 }} />   </td>
                                                            <td className="flex-1 border bg-[#4A62AA]/20 p-2">
                                                                ‒  <span dangerouslySetInnerHTML={{ __html: t.tableRow2Col2 }} />   </td>
                                                        </tr>
                            </tbody>
                          </table>
                        </div>

                        <p className="my-4 px-2 md:px-0">
                          <span className="underline text-[#4A62AA] font-bold">NB:</span> {t.noteText}
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
                  className="w-full    py-2 px-4  bg-[#4c75f0] text-white  flex justify-between items-center sm:justify-center"
                  onClick={() => handleToggle(2)}
                >
                  <span className="flex-grow text-start">{t.content2.title}</span>
                  <span className="sm:ml-10 text-2xl">{open === 2 ? "▲" : "▼"}</span>
                </button>


              </div>

              {open === 2 && (
                <div className="bg-white/60 ">
                  <div className="w-full bg-white/60 py-2 px-4 md:px-0">
                    <p className="text-[#4A62AA] font-bold">
                     {t.content2.paragraph1} </p>
                                            <p className="mt-2" dangerouslySetInnerHTML={{ __html: t.content2.paragraph2 }} />


                    <div className="m-2 ">
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

                    <div className="flex flex-col md:flex-row text-center  gap-2 md:gap-4 my-4">
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

                </div>
              )}
            </div>
          </div>
          <div className="mt-2 space-y-4">
            <div>

              <div className="flex flex-col sm:flex-row gap-1">
                <button
                  className="w-full    py-2 px-4  bg-[#4c75f0] text-white flex justify-between items-center sm:justify-center"
                  onClick={() => handleToggle(3)}
                >
                  <span className="flex-grow text-start"> Droits universitaires</span>

                  <span className="sm:ml-10 text-2xl">{open === 3 ? "▲" : "▼"}</span>
                </button>


              </div>

              {open === 3 && (
                <div className="bg-white/60 ">
                  <div className="w-full bg-white/60 py-2 px-4 md:px-0">
                    <p className="text-[#4A62AA] font-bold">
                                                {t.content3.paragraph1}  </p>
                                            <p>
                                                {t.content3.intro}    </p>

                    <div className="m-4 md:m-6 space-y-4">
                     
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

                                                {t.content3.paragraph9}  </p>  </div>
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
                  <span className="flex-grow text-start"> {t.logement.title} </span>    <span className="sm:ml-10 text-2xl">{open === 4 ? "▲" : "▼"}</span>
                </button>


              </div>

              {open === 4 && (
                <div className="bg-white/60 ">
                  <div className="w-full bg-white/60 py-2 px-4 md:px-0">
                     <p>
                                                - {t.logement.paragraph1}     </p>

                                            <p className="mt-4">
                                                -  <span dangerouslySetInnerHTML={{ __html: t.logement.paragraph2 }} /> 
                                            </p>

                    <div className="flex flex-col md:flex-row gap-4 mt-4">
                       <div className="flex-1 p-4 bg-[#b7c5ee]">
                                                    <p className="font-bold">
                                                   {t.logement.paragraph3} 

                                                    </p>
                                                    <i> {t.logement.paragraph4} 
                                                    </i>
                                                </div>
                                                <div className="flex-1 p-4 bg-[#829dec]">
                                                    <p className="font-bold">

                                                  {t.logement.paragraph5} 
                                                    </p>
                                                    <i> {t.logement.paragraph6}  </i>
                                                </div>
                                                <div className="flex-1 p-4  bg-[#6d81bd]">

                                                    <p className="font-bold ">{t.logement.paragraph7}  </p>


                                                </div>
                                            </div>
                                            <p className="mt-4">
                                             {t.logement.paragraph8} 
                                            </p>
                                            <p className="mt-4">
                                            {t.logement.paragraph9}  </p>
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
                <div className="bg-white/60 ">
                  <div className="w-full bg-white/60 py-2">
                    <p className="p-4">
                     
                                                {t.content4.paragraph1} </p>


                  </div>
                </div>
              )}
            </div>

          </div>


          <div className="mt-2 space-y-4">
            <div>

              <div className="flex flex-col sm:flex-row gap-1">
                <button
                  className="w-full py-2 px-4 text-start bg-[#4c75f0] text-white flex items-center justify-between"
                  onClick={() => handleToggle(7)}
                >
                  <span className="flex-grow text-start"> {t.content6}</span>
                  <span className="sm:ml-10 text-2xl">{open === 7 ? "▲" : "▼"}</span>
                </button>


              </div>

              {open === 7 && (
                <div className="bg-white/60 text-start">
                  <div className="w-full bg-white/60 p-4 space-y-2">
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
          <div className="mt-2 space-y-4">
            <div>

              <div className="flex flex-col sm:flex-row gap-1">
                <button
                  className="w-full    py-2 px-4  bg-[#4c75f0] text-white flex justify-between items-center sm:justify-center"
                  onClick={() => handleToggle(8)}
                >
                  <span className="flex-grow text-start">{t.ressources.title}</span>
                  <span className="sm:ml-10 text-2xl">{open === 8 ? "▲" : "▼"}</span>
                </button>


              </div>

              {open === 8 && (
                <div className="bg-white/60 ">
                  <div className="w-full bg-white/60 p-4  text-start ">
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
      
    <footer className="w-full bg-blue-900    text-white text-center">
                <FooterMobile />
              </footer>
    </div>

  );
}