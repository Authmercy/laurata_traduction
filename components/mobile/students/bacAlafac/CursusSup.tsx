"use client";
import React, { useRef } from "react";
import { useEffect, useState } from "react";
import en from '@/i18/en/student/choisirSonCursus.json';
import fr from '@/i18/fr/student/choisirSonCursus.json';
import Link from "next/link";
import Navbar from "../../navbar/navbar";
import FooterMobile from "../../footer/footerEnd";
import { useRouter } from "next/router";


export default function CursusSupComponentMobile() {
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
          <div className="justify-center p-2 text-center text-xl font-bold uppercase bg-[#9b6e0f] text-white">

            <p>
              {t.title}
            </p>  </div>







          <div className="mt-8 space-y-4">
            <div>

              <div className="flex flex-col sm:flex-row gap-1">
                <button
                  className="w-full  py-2 px-4  bg-[#4c75f0] text-white flex justify-between "
                  onClick={() => handleToggle(1)}
                >
                  <span className="flex-grow text-start">{t.academicOrientation.title}      </span>
                  <span className="sm:ml-10 text-2xl">{open === 1 ? "▲" : "▼"}</span>
                </button>


              </div>

              {open === 1 && (
                <div className="bg-white/60 p-2">
                  <div className="w-full">
                    <div className="bg-white/60 p-2 pb-0 grid grid-cols-1 sm:grid-cols-[1fr_3fr] gap-8 mt-2">


                      <div className=" ">
                        <div >

                          <div className="m-2">
                            {t.academicOrientation.points.map((point, index) => (
                              <p key={index} >
                                <span className="text-[#4A62AA] text-2xl font-bold ">-</span>
                                {point}
                              </p>
                            ))}
                          </div>
 <div className="m-2">
                                                {t.academicOrientation.actions.map((action, index) => (
                                                    <p key={index} >
                                                        <span className="text-[#4A62AA] text-2xl font-bold mr-2">-</span>
                                                        <b className="uppercase">{action.verb}</b> {action.text}
                                                    </p>
                                                ))}

                                            </div>
                          <p className="my-4  font-bold  text-[#4A62AA] ">
                                {t.academicOrientation.intelligencesTitle}
 </p>
                          <div className="w-full">
                            <div className="overflow-x-auto">
                              <table className="w-full text-left border-2 border-gray-300 min-w-[600px]">
                                  <tbody>
                                                    {t.academicOrientation.intelligences.map((intelligence, index) => (
                                                        <tr
                                                            key={index}
                                                            className={`text-black ${index % 2 === 0 ? 'bg-[#f1d9b6]/70' : ''}`}
                                                        >
                                                            <td className="border border-x-0 font-bold align-top p-4 text-[#4A62AA]">
                                                                {intelligence.number}
                                                            </td>
                                                            <td className="border border-x-0 p-2 align-top text-start font-semibold">
                                                                {intelligence.type}
                                                            </td>
                                                            <td className="border border-x-0 p-2 align-top text-start">
                                                                <p>{intelligence.description}</p>
                                                                <p className="mt-1">
                                                                    <span className="text-[#4A62AA]">  {t.academicOrientation.profession} </span>
                                                                    <i> {intelligence.professions}</i>
                                                                </p>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                              </table>
                            </div>
                            <div className="bg-white">
                              <p className="font-bold text-orange-500  pt-2 text-center mt-4">{t.academicOrientation.recommendationsTitle} </p>
                              <div className="m-2 space-y-4">
                              {t.academicOrientation.recommendations.map((action, index) => (
                                                    <p key={index} >

                                                        -     <i className="text-[#4A62AA]"> {action.italics}</i> {action.text}
                                                    </p>
                                                ))}

                              </div>
                            </div>
                            <p className="p-4">
                            <b>
                                                        <Link
                                                            href="/misc/nous_contacter"
                                                            className="hover:text-2xl"
                                                        >
                                                            {t.academicOrientation.contactLink}
                                                        </Link>
                                                    </b> {t.academicOrientation.contactText}
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
                  className="w-full    py-2 px-4  bg-[#4c75f0] text-white  flex justify-between items-center sm:justify-center"
                  onClick={() => handleToggle(2)}
                >
                  <span className="flex-grow text-start">{t.whereToStudy.title}    </span>
                  <span className="sm:ml-10 text-2xl">{open === 2 ? "▲" : "▼"}</span>
                </button>


              </div>

              {open === 2 && (
                <div className="bg-white/60 p-4">
                  <div className="w-full bg-white/60 py-2 px-4 md:px-0">
                            <p>{t.whereToStudy.intro}</p>
                    <div className="my-6">

                      <table className="w-full text-left border-2 border-gray-300">

                     <tbody>
                                                        {t.whereToStudy.considerations.map((item, index) => (
                                                            <tr
                                                                key={index}
                                                                className={`text-black ${index % 2 === 1 ? 'bg-[#becbf3]/70' : ''}`}
                                                            >
                                                                <td className="border p-2 align-top text-start font-bold">
                                                                    {item.title}
                                                                </td>
                                                                <td className="border p-2 align-top  text-start">
                                                                    <p><i>{item.text}</i></p>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                      </table>
                      <div className="w-full">
                        <div className="overflow-x-auto">
                          <table className=" border-collapse border  shadow-lg w-full mt-8">
                            <thead>
                             <tr className="flex">
                                                                {t.whereToStudy.institutions.headers.map((header, index) => (
                                                                    <th
                                                                        key={index}
                                                                        className="border-y-2 border-[#A87A38] flex-1 px-4 py-2 text-[#4A62AA] uppercase text-center"
                                                                    >
                                                                        {header}
                                                                    </th>
                                                                ))}
                                                            </tr>
                            </thead>
                            <tbody>

                              <tr className=" flex bg-[#d8c6ad]  text-start ">

                                <td className="text-start flex-1  border-x px-2">
                                 <p>{t.whereToStudy.institutions.iut.intro}</p>
                                                                    {t.whereToStudy.institutions.iut.points.map((point, index) => (
                                                                        <p key={index} className="m-2">
                                                                            - <i>{point}</i>
                                                                        </p>
                                                                    ))}
                                </td>
                                <td className="   px-2 flex-1 border-x ">
                                  <p>{t.whereToStudy.institutions.universities.intro}</p>
                                                                    {t.whereToStudy.institutions.universities.points.map((point, index) => (
                                                                        <p key={index} className="m-2">
                                                                            - <i>{point}</i>
                                                                        </p>
                                                                    ))}


                                </td>
                                <td className="  px-2 flex-1 border-x">
                                 <p>{t.whereToStudy.institutions.prepas.text}</p>
                                                                    <p className="mt-2">{t.whereToStudy.institutions.prepas.additional}</p>
                                </td>
                                <td className="  flex-1 px-4 py-2 ">
                                       <p>{t.whereToStudy.institutions.vocational.text}</p> </td>


                              </tr>





                            </tbody>
                          </table>
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
                  className="w-full    py-2 px-4  bg-[#4c75f0] text-white flex justify-between items-center sm:justify-center"
                  onClick={() => handleToggle(3)}
                >
                  <span className="flex-grow text-start">{t.dropoutPrevention.title}   </span>

                  <span className="sm:ml-10 text-2xl">{open === 3 ? "▲" : "▼"}</span>
                </button>


              </div>

              {open === 3 && (
                <div className="bg-white/60 p-4">
                  <div className="w-full space-y-4 bg-white/60 py-2 px-4 md:px-0">
  {t.dropoutPrevention.points.map((point, index) => (
                                                <div
                                                    key={index}
                                                    className={`mt-2  p-4 rounded shadow grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4 ${index % 2 === 0 ? 'bg-[#becbf3]' : ''
                                                        }`}
                                                >
                                                    <div className="font-bold text-start">
                                                        {point.title}
                                                    </div>
                                                    <div className="max-w-4xl">
                                                        <p>{point.text}</p>
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
                  <span className="flex-grow text-start">{t.stressManagement.title}</span>  <span className="sm:ml-10 text-2xl">{open === 4 ? "▲" : "▼"}</span>
                </button>


              </div>

              {open === 4 && (
                <div className="bg-white/60 p-4">
                  <div className="w-full bg-white/60 py-2 px-4 md:px-0">
                   <p dangerouslySetInnerHTML={{ __html: t.stressManagement.intro }}/>
                       <p className="font-bold mt-2">
                                                {t.stressManagement.combatTitle}
                                            </p>
                    <div className="w-full space-y-4 text-start">

                      <div className="mt-2 bg-[#becbf3] p-4 rounded shadow grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4">
                        <div className="font-bold text-start">
                                    {t.stressManagement.lifestyle.title}
                        </div>
                        <div className="max-w-4xl space-y-2">
                         {t.stressManagement.lifestyle.points.map((point, index) => (
                                                        <p key={index} className="flex items-start">
                                                            <span className="text-[#4A62AA] mr-2">■</span>
                                                            {point}
                                                        </p>
                                                    ))} </div>
                      </div>


                      <div className="mt-2 p-4 rounded shadow grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4">
                        <div className="font-bold text-start">
                          {t.stressManagement.stressors.title}
                        </div>
                        <div className="max-w-4xl space-y-2">
                        {t.stressManagement.stressors.points.map((point, index) => (
                                                        <p key={index} className="flex items-start">
                                                            <span className="text-[#4A62AA] mr-2">■</span>
                                                            {point}
                                                        </p>
                                                    ))} </div>
                      </div>


                      <div className="mt-2 bg-[#becbf3] p-4 rounded shadow grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4">
                        <div className="font-bold text-start">
                     {t.stressManagement.reactions.title}
                        </div>
                        <div className="max-w-4xl">
                    {t.stressManagement.reactions.points.map((point, index) => (
                                                        <p key={index} className="flex items-start">
                                                            <span className="text-[#4A62AA] mr-2">■</span>
                                                            {point}
                                                        </p>
                                                    ))}
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
                  className="w-full    py-2 px-4  bg-[#4c75f0] text-white flex justify-between items-center sm:justify-center"
                  onClick={() => handleToggle(5)}
                >
                  <span className="flex-grow text-start">{t.reorientationTitle}
                  </span>
                  <span className="sm:ml-10 text-2xl">{open === 5 ? "▲" : "▼"}</span>
                </button>


              </div>

              {open === 5 && (
                <div className="bg-white/60 p-4">
                  <div className="w-full bg-white/60 py-2">
                    <p className="p-2">

                    {t.reorientationText}</p>

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
                  <span className="flex-grow text-start"> {t.referencesTitle}</span>
                  <span className="sm:ml-10 text-2xl">{open === 7 ? "▲" : "▼"}</span>
                </button>


              </div>

              {open === 7 && (
                <div className="bg-white/60 p-4">
                  <div className="w-full bg-white/60 space-y-2 p-2">

                    {t.references.map((reference, index) => (
                                                <p key={index} className="mb-2">
                                                    ‒ {reference}
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
                  <span className="flex-grow text-start">{t.usefulLinksTitle}</span>
                  <span className="sm:ml-10 text-2xl">{open === 8 ? "▲" : "▼"}</span>
                </button>


              </div>

              {open === 8 && (
                <div className="bg-white/60 p-4">
                  <div className="w-full bg-white/60 p-2 ">
                    <div className="space-y-4">
                      {t.usefulLinks.map((link, index) => (
                                                <p key={index}>
                                                    - {link.text}<br />
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