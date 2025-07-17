"use client";

import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";
import UseInstitutionUneService from "@/service/service_institutionALaUne";
import { useRouter } from "next/router";
import en from '@/i18/en/institution/institutionALaUne.json';
import fr from '@/i18/fr/institution/institutionALaUne.json';
export default function InstitutionALaUNe() {

    const {
        errorMessage,
        handleSelectChange,
        images,
        nextSlide,
        prevSlide,
        handleToggle,
        open,
        setErrorMessage,
        institutions,
        selectedCompany,
        


    } = UseInstitutionUneService()


const router = useRouter();

    const { locale } = router;
    const t = locale === 'en' ? en : fr;
   

    const [currentIndex, setCurrentIndex] = useState(0);

  
    const [activeLink, setActiveLink] = useState('#presentation');



    return (

        <div className="flex flex-col   md:flex-row  ">
            <div className="flex-grow md:w-2/3 p-8">
                <div className="flex justify-center">
                    <div className=" justify-center  w-full text-center ">
                        <div className=" justify-center w-full my-6 mb-10 text-center ">
                            <div className="w-full text-center flex-shrink-0">
                                <div className="relative text-3xl  flex flex-row items-center">
                                    <h1 className=" py-2 pr-24 text-end  border-4 border-[#4A62AA] text-white bg-[#A87A38] uppercase  font-extrabold w-full">
                                   {t.title}
                                    </h1>
                                    <Image
                                        src="/icons/institutsup2.png"
                                        alt=""
                                        width={100}
                                        height={70}
                                        className="absolute left-1/2 py-2  -mt-3 transform -translate-x-1/2 z-16"
                                    />
                                    <h1 className=" py-2 text-start pl-24  text-white border-4 border-[#4A62AA] bg-[#A87A38] uppercase  font-extrabold w-full">
                                           {t.title2}
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="bg-white/70 flex flex-col lg:flex-row gap-1">

                    <div className="flex flex-col lg:flex-row gap-1">

                        <div className="my-4 w-full max-w-md h-44 border-x-0 border-4 border-[#4A62AA]">
                            <div className="pb-10 text-center">
                                <p className="mt-4 text-black">
                                      {t.intro}
                                </p>
                            </div>
                            <div className="-mt-6 mb-4 flex justify-center text-center">
                                <select
                                    onChange={handleSelectChange}
                                    className="p-4 text-[#4A62AA] border border-[#4A62AA] rounded-2xl shadow-sm w-full"
                                >
                                    <option value="">   {t.option}</option>
                                    {institutions.map((company) => (
                                        <option key={company.id} value={company.id}>
                                            {company.shortName || company.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                    </div>
                    {errorMessage && (
                        <div className="text-red-600 text-center w-full py-4 bg-red-100 border border-red-300 rounded relative">
                            <button
                                className="absolute top-1 right-2 text-red-600 font-bold"
                                onClick={() => setErrorMessage(null)}
                            >
                                ×
                            </button>
                            {errorMessage}
                        </div>
                    )}
                    {selectedCompany && (
                        <div>
                            <div className="flex-1">
                                <div className="flex flex-col items-center text-center px-4">
                                    <div className="flex flex-col h-44 md:flex-row items-center justify-center gap-6 md:gap-36 w-full max-w-6xl border-x-0 border-4 border-[#A87A38] my-4 text-[#4A62AA] p-4">
                                        <p className="font-extrabold text-xl md:text-2xl">
                                            {selectedCompany.name}
                                            {selectedCompany.shortName && (
                                                <span className="font-normal"> {selectedCompany.shortName}</span>
                                            )}
                                        </p>
                                        <img
                                            src={selectedCompany.logoId}
                                            alt={selectedCompany.shortName}
                                            className="w-40 md:w-56 h-auto pt-2"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-1 lg:flex flex-wrap justify-center gap-4 w-full mt-4">
                                        {[
                                            { href: '#presentation', label:    t.presentation },
                                            { href: '#formation', label:   t.formation },
                                            { href: '#infrastructures', label: t.infra },
                                            { href: '#video', label:  t.video },
                                            { href: '#contact', label: t.contact },
                                        ].map((link) => (
                                            <Link
                                                key={link.href}
                                                href={link.href}
                                                onClick={() => setActiveLink(link.href)}
                                                className={`border border-[#4A62AA] ${activeLink === link.href
                                                        ? 'bg-[#4A62AA] text-white'
                                                        : 'bg-white text-[#4A62AA]'
                                                    } w-36 h-10 text-center pt-2 rounded-2xl hover:bg-[#4A62AA] hover:text-white transition-all`}
                                            >
                                                <p>{link.label}</p>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col lg:flex-row gap-1">
                                <div className="flex-1">
                                    <div className="flex flex-col justify-center text-center">
                                        <div className="slider-container relative bg-white h-96 my-8 border-2 border-[#4A62AA] rounded-2xl">
                                            {images.length > 0 ? (
                                                <>
                                                    <img
                                                        src={images[currentIndex]}
                                                        alt="slider"
                                                        className="w-full h-full rounded-lg"
                                                    />
                                                    <button
                                                        onClick={prevSlide}
                                                        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-2xl bg-black bg-opacity-50 p-2 rounded-full"
                                                    >
                                                        &#10094;
                                                    </button>
                                                    <button
                                                        onClick={nextSlide}
                                                        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-2xl bg-black bg-opacity-50 p-2 rounded-full"
                                                    >
                                                        &#10095;
                                                    </button>
                                                </>
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center text-gray-500">
                                                    Aucune image disponible
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>




                            <div id="presentation" className="mt-1 p-2 px-4  bg-white/70">
                                <button onClick={() => handleToggle(1)} className="text-[#A87A38]   flex w-full font-bold">
                                    <span className="flex-grow uppercase text-left">{t.presentation}</span>
                                    <span className="ml-10 text-2xl ">{open === 1 ? "▲" : "▼"}</span>
                                </button>

                                {open === 1 && (<div className="flex  border-t  border-[#A87A38] flex-col gap-1">
                                    {Array.isArray(selectedCompany.description) && selectedCompany.description.length > 0 ? (
                                        <div className="space-y-2 mt-2">
                                            {selectedCompany.description.map((description, index) => (
                                                <p className="text-black  " key={index}> {description}</p>
                                            ))}
                                        </div>

                                    ) : (
                                        <p>{t.noDescription}</p>
                                    )}

                                </div>
                                )}
                            </div>
                            <div id="formation" className="mt-1  p-2 px-4   bg-white/70">
                                <button onClick={() => handleToggle(5)} className="text-[#A87A38]  flex w-full font-bold">
                                    <span className="flex-grow  uppercase text-left">   {t.formation} </span>
                                    <span className="ml-10 text-2xl "> {open === 5 ? "▲" : "▼"}</span></button>
                                {open === 5 && (
                                    <div className="border-t border-[#A87A38]">
                                        {Array.isArray(selectedCompany.portfolio) && selectedCompany.portfolio.length > 0 ? (
                                            <div className="space-y-4">
                                                {selectedCompany.portfolio.map((portfolio, index) => (
                                                    <div key={index} className="space-y-2">
                                                        <p className="text-[#4A62AA] text-xl font-semibold"> <span className="text-[#4A62AA] font-bold">■  </span> {portfolio.category}</p>

                                                        {portfolio.programs.map((program, progIndex) => (
                                                            <div key={progIndex} className="ml-4 space-y-1">
                                                                <p className="text-[#4A62AA] text-lg font-medium">
                                                                    <span className="text-[#4A62AA] font-bold">•  </span> {program.major}</p>

                                                                <ul className="list-disc list-inside text-black">
                                                                    {program.values.map((val, valIndex) => (
                                                                        <li key={valIndex}>{val}</li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        ))}
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <p>{t.noProgram}</p>
                                        )}
                                    </div>


                                )}
                            </div>
                            <div id="infrastructures" className="mt-1 p-2 px-4  bg-white/70">
                                <button onClick={() => handleToggle(2)} className="text-[#A87A38]  flex w-full font-bold">
                                    <span className="flex-grow uppercase text-left">  {t.infra} </span>
                                    <span className="ml-10 text-2xl "> {open === 2 ? "▲" : "▼"}</span></button>
                                {open === 2 &&
                                    (
                                        <div className="border-t  border-[#A87A38] ">
                                            {Array.isArray(selectedCompany.infrastructure) && selectedCompany.infrastructure.length > 0 ? (
                                                <div className="space-y-2">
                                                    {selectedCompany.infrastructure.map((infrastructure, index) => (
                                                        <p className="text-black  " key={index}>- {infrastructure}</p>
                                                    ))}
                                                </div>
                                            ) : (
                                                <p>{t.noInfra}</p>
                                            )}
                                        </div>
                                    )}   </div>


                            <div id="video" className="mt-1  p-2 px-4  bg-white/70">
                                <button onClick={() => handleToggle(3)} className="text-[#A87A38] flex w-full font-bold">
                                    <span className="flex-grow uppercase text-left">    {t.video}</span>
                                    <span className="ml-10 text-2xl "> {open === 3 ? "▲" : "▼"}</span></button>
                                {open === 3 && (<div className="border-t  border-[#A87A38] ">
                                    <video src={selectedCompany.video}> {selectedCompany.video}</video>
                                </div>
                                )} </div>
                            <div id="contact" className="mt-1 p-2 px-4   bg-white/70">
                                <button onClick={() => handleToggle(4)} className="text-[#A87A38]  flex w-full font-bold">
                                    <span className="flex-grow uppercase text-left">     {t.contact}</span>
                                    <span className="ml-10 text-2xl "> {open === 4 ? "▲" : "▼"}</span></button>
                                {open === 4 && (

                                    <div className="flex  flex-col gap-1 border-t  border-[#A87A38] ">

                                        {Array.isArray(selectedCompany.contact) && selectedCompany.contact.length > 0 ? (
                                            <div>


                                                {selectedCompany.contact.map((c) => (
                                                    <div key={c.id}>
                                                        <div className=" flex flex-row w-full bg-white ">
                                                            <p className="bg-white p-2">{t.location} </p>
                                                            <p className="ml-20 p-2 text-black "> {c.location}</p></div>
                                                        <div className=" flex flex-row w-full bg-white ">
                                                            <p className="bg-white p-2">{t.tel} </p>
                                                            <p className="ml-20 p-2 text-black"> {c.phones} </p></div>
                                                        <div className=" flex flex-row w-full bg-white ">
                                                            <p className="bg-white p-2">{t.mail} </p>
                                                            <p className="-ml-3 p-2  text-blue-5"> {c.mail} </p></div>
                                                        <div className=" flex flex-row w-full bg-white ">
                                                            <p className="bg-white p-2">{t.internet} </p>
                                                            <p className="-ml-10 p-2"> <a href={c.website} className="md:pl-36  text-blue-5"> {c.website}</a></p>
                                                        </div>

                                                    </div>
                                                ))}

                                            </div>

                                        ) : (<div>


                                            <div className=" flex flex-row w-full bg-white ">
                                                <p className="bg-white p-2">{t.location} </p>
                                                <p className="ml-20 p-2 text-black "> </p></div>
                                            <div className=" flex flex-row w-full bg-white ">
                                                <p className="bg-white p-2">{t.tel} </p>
                                                <p className="ml-20 p-2 text-black"> </p></div>
                                            <div className=" flex flex-row w-full bg-white ">
                                                <p className="bg-white p-2">{t.mail} </p>
                                                <p className="-ml-3 p-2  text-blue-5">  </p></div>
                                            <div className=" flex flex-row w-full bg-white ">
                                                <p className="bg-white p-2">{t.internet} </p>
                                                <p className="-ml-10 p-2"> <a className="md:pl-36  text-blue-5"> </a></p>
                                            </div>

                                        </div>


                                        )}
                                    </div>


                                )}

                            </div>
                            <div className="flex flex-row justify-center  gap-16">
                                <button className="w-64 py-2 my-10 text-white bg-[#4A62AA] font-bold rounded-lg">
                                    Télécharger la fiche de préinscription
                                </button>
                                <button className="w-64 py-2 my-10 bg-white/70 text-[#4A62AA] font-bold rounded-lg">
                                    S'inscrire
                                </button>
                            </div>
                        </div>

                    )}
                </div>
            </div> </div>
    );
}