"use client";
import React, { useRef } from "react";
import { useEffect, useState } from "react";

import en from '@/i18/en/student/etudieraEtranger.json';
import fr from '@/i18/fr/student/etudieraEtranger.json';
import Link from "next/link";
import StudentDestinationsTable from "./tableDestinations";
import Navbar from "../../navbar/navbar";
import FooterMobile from "../../footer/footerEnd";
import { Brand } from "@/service/Brand";
import { useRouter } from "next/router";


export default function EtudeComponentMobile() {
    const [open, setOpen] = useState(null);
    const handleToggle = (index: any) => {
        setOpen(open === index ? null : index);
    };
 const router = useRouter();

    const { locale } = router;
    const t = locale === 'en' ? en : fr;



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
               <div className="min-h-screen   bg-[#4A62AA]  text-black overflow-auto  w-screen bg-cover  text-justify bg-center bg-no-repeat "  >
       
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

                           {t.studyAbroadTitle}

                        </p>  </div>


                    <div className="bg-white/70 p-2 mt-8   text-black">
                           <p>  {t.intro1}
                            <i>   {t.introItalic}</i>

                        </p>
                    </div>




                    <div className="mt-2 space-y-4">
                        <div>

                            <div className="flex flex-col sm:flex-row gap-1">
                                <button
                                    className="w-full  py-2 px-4  bg-[#4c75f0] text-white flex justify-between "
                                    onClick={() => handleToggle(1)}
                                >
                                    <span className="flex-grow text-start "> {t.prepareTitle}    </span>
                                    <span className="sm:ml-10 text-2xl">{open === 1 ? "▲" : "▼"}</span>
                                </button>


                            </div>

                            {open === 1 && (
                                <div className="bg-white/60 p-2">
                                    <div className="w-full">
                                        <div className="bg-white/60 ">
                                            <div className="bg-[#ddc19b] p-4 grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4 md:gap-8">
                                                <div className="font-bold text-[#2c36be] text-lg text-center md:text-center">
                                                  {t.countryTitle}
                                                </div>
                                                <div className="md:max-w-4xl">
                                                   <p>    {t.countryContent1} </p>

                                                    <p> ─ <span dangerouslySetInnerHTML={{ __html: t.countryContent2 }} /> </p></div>
                                            </div>

                                            <div className="p-4 bg-[#dbe0e7] grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4 md:gap-8">
                                                <div className="font-bold text-[#A87A38]  text-lg  text-center md:text-end">
                                             {t.programTitle}
                                                </div>
                                                <div className="md:max-w-4xl">
                                               <p> ─ <span dangerouslySetInnerHTML={{ __html: t.programContent1 }} />   </p>
                                                    <p> ─ <span dangerouslySetInnerHTML={{ __html: t.programContent2 }} /> </p></div>
                                            </div>

                                            <div className="bg-[#ddc19b] p-4 grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4 md:gap-8">
                                                <div className="font-bold text-[#2c36be] text-lg  text-center md:text-center">
                                                              {t.fundingTitle}</div>
                                              
                                                <div className="md:max-w-4xl">
                                              <p> ─ <span dangerouslySetInnerHTML={{ __html: t.fundingContent1 }} /> 
                                                    </p>
                                                    <p> ─ <span dangerouslySetInnerHTML={{ __html: t.fundingContent2 }} /></p></div>
                                            </div>

                                            <div className="p-4 bg-[#dbe0e7] grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4 md:gap-8">
                                                <div className="font-bold text-[#A87A38] text-lg  text-center md:text-center">
                                                        {t.visaTitle}
                                                </div>
                                                <div className="md:max-w-4xl space-y-2">
                                                    <p> ─ <span dangerouslySetInnerHTML={{ __html: t.visaContent1 }} />


                                                    </p>
                                                    <p>  ─ <span dangerouslySetInnerHTML={{ __html: t.visaContent2 }} />


                                                    </p>
                                                        <p> ─ <b className="text-red-600"> {t.visaWarningTitle} </b>
                                                        {t.visaWarning} </p>
                                                        <p> ─ <span dangerouslySetInnerHTML={{ __html: t.visaContent3 }} />


                                                        </p> </div>
                                            </div>

 <div className=" mt-2 p-2 ">

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

                                            <div className=" mt-2 p-2">

                                                <p className="text-red-500 font-bold">{t.warningTitle}</p>
                                                <p>{t.warningContent}</p>
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
                                    <span className="flex-grow text-start">{t.returnTitle} </span>
                                    <span className="sm:ml-10 text-2xl">{open === 2 ? "▲" : "▼"}</span>
                                </button>


                            </div>

                            {open === 2 && (
                                <div className="bg-white/60 ">
                                    <div className="w-full bg-white/60 py-2 px-4 md:px-0">


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
                                    <span className="flex-grow text-start"> {t.destinationsTitle}  </span>

                                    <span className="sm:ml-10 text-2xl">{open === 3 ? "▲" : "▼"}</span>
                                </button>


                            </div>

                            {open === 3 && (
                                <div className="bg-white/60 ">
                                    <div className="w-full space-y-4 bg-white/60 py-2">



                                        <StudentDestinationsTable></StudentDestinationsTable>

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
                                    <span className="flex-grow text-start">{t.linksTitle}</span>
                                    <span className="sm:ml-10 text-2xl">{open === 8 ? "▲" : "▼"}</span>
                                </button>


                            </div>

                            {open === 8 && (
                                <div className="bg-white/60 p-4">
                                    <div className="w-full bg-white/60 p-2 ">
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

                                </div>
                            )}
                        </div>

                    </div>
             
                </div>
           <div className="flex  mt-10 bg-white items-center justify-center  ">
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