"use client";

import UseEntrepriseUneService from "@/service/service_EntrepriseALaUne";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
import en from '@/i18/en/entreprise/entrepriseALaUne.json';
import fr from '@/i18/fr/entreprise/entrepriseALaUne.json';
import { useRouter } from "next/router";

export default function EmployeurALaUNe() {
    const {

        companies,
        errorMessage,
        handleSelectChange,
        selectedCompany,
        setSelectedCompany,
        loading,
        open,
        setLoading,
        setErrorMessage


    } = UseEntrepriseUneService()

   const router = useRouter();
      const { locale } = router;
      const t = locale === 'en' ? en : fr;






    const [activeLink, setActiveLink] = useState('#presentation');
    const handleClick3 = () => {
        router.push("/entreprise/poster/#editer");
    };
    return (
        <div className="flex flex-col   md:flex-row  ">
            <div className=" py-8 px-2">
                <div className="flex justify-center">
                    <div className=" justify-center w-full text-center ">
                        <div className=" text-center flex-shrink-0">
                            <div className="relative text-2xl  flex flex-row items-center">
                                <h1 className="border-[#A87A38] py-2 pr-20 text-end border-2 border-r-0 text-white bg-[#4A62AA] uppercase  font-extrabold w-full">
                                        {t.title}
                                </h1>
                                <Image
                                    src="/icons/entreprise.png"
                                    alt=""
                                    width={100}
                                    height={70}
                                    className="absolute left-1/2 py-2  -mt-3 transform -translate-x-1/2 z-16"
                                />
                                <h1 className="border-[#A87A38] py-2 text-start pl-24 border-2 border-l-0 text-white bg-[#4A62AA] uppercase  font-extrabold w-full">
                                        {t.title2}
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-1">



                  <div className="mt-10 lg:w-1/3">
    <div className="bg-white p-4 pb-10 text-center">
        <p className="mt-8 text-black">
     {t.intro}
        </p>
    </div>
    <div className="-mt-6 flex justify-center text-center">
        <select
            onChange={handleSelectChange}
            className="p-4 text-white text-center font-bold bg-[#A87A38] rounded-md shadow-sm"
        >
            <option value="" disabled selected className="hidden ">     {t.option}</option>
            {companies.map((company) => (
                <option key={company.id} value={company.id}>
                    {company.name}
                </option>
            ))}
        </select>
    </div>
</div>

                    {errorMessage && (

                        <div className="text-red-600 text-center w-full py-4 mt-10 bg-red-100 border border-red-300 rounded relative">
                            <button
                                className="absolute top-1 right-2 text-red-600 font-bold"
                                onClick={() => setErrorMessage(null)}
                            >
                                ×
                            </button>
                            {errorMessage}
                        </div>
                    )}
                       {selectedCompany ? (
                    selectedCompany && (
                        <div className="w-2/3">
                            <div className="flex-1">
                                <div className="flex flex-col items-center  text-center justify-center">
                                    <div className="flex flex-col mt-10  md:flex-row items-center justify-center gap-6 md:gap-36 w-full   bg-white my-4 text-[#4A62AA] p-4">

                                        <p className="text-center mt-20 uppercase pl-2 font-extrabold text-2xl">
                                            {selectedCompany.name}
                                        </p>

                                        <img src={selectedCompany.logoId} alt={selectedCompany.shortName} className="w-56 pt-2 h-36" />
                                    </div>



                                </div>

                            </div>


                            <div className="grid grid-cols-1 sm:grid-cols-1 lg:flex flex-wrap justify-center gap-2 w-full mt-4">
                                {[
                                    { href: '#presentation', label: t.presentation },
                                    { href: '#secteur', label: t.secteur  },
                                    { href: '#produits', label: t.produit  },
                                    { href: '#metiers', label: t.metier  },
                                    { href: '#video', label: t.video  },
                                    { href: '#contact', label: t.contact  },
                                ].map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setActiveLink(link.href)}
                                        className={`border border-[#4A62AA] ${activeLink === link.href
                                            ? 'bg-[#4A62AA] text-white'
                                            : 'bg-white text-[#4A62AA]'
                                            } w-36 h-14 rounded-2xl hover:bg-[#4A62AA] hover:text-white transition-all flex items-center justify-center`}
                                    >
                                        <p className="text-center">{link.label}</p>
                                    </Link>
                                ))}
                            </div>



                            <div id="presentation" className=" p-4 mt-2  bg-white/70">
                                <h1 className="text-[#4A62AA] uppercase font-bold">{t.presentation}</h1>
                                <div className="flex  flex-col gap-1">

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
                            </div>
                            <div id="secteur" className="mt-4  p-4  bg-white/70">
                                <h1 className="text-[#4A62AA]  uppercase pb-8 font-bold">{t.secteur}</h1>

                                {Array.isArray(selectedCompany.activities) && selectedCompany.activities.length > 0 ? (
                                    <div className="space-y-2">
                                        {selectedCompany.activities.map((activityField, index) => (
                                            <p className="text-black  " key={index}>- {activityField}</p>
                                        ))}
                                    </div>

                                ) : (
                                    <p>{t.noProgram}</p>
                                )}


                            </div>
                            <div id="produits" className="mt-4  p-4  bg-white/70">
                                <h1 className="text-[#4A62AA] pb-8 uppercase  font-bold">{t.produit}</h1>


                                {Array.isArray(selectedCompany.portfolio) && selectedCompany.portfolio.length > 0 ? (
                                    <div className="space-y-2">
                                        {selectedCompany.portfolio.map((portfolio, index) => (
                                            <p className="text-black  " key={index}>- {portfolio}</p>
                                        ))}
                                    </div>
                                ) : (
                                    <p>{t.noProduct}</p>
                                )}

                            </div>

                            <div id="metiers" className="mt-4  p-4 pb-4   bg-white/70">
                                <h1 className="text-[#4A62AA]  pb-8 uppercase font-bold">{t.metier}</h1>


                                {Array.isArray(selectedCompany.jobs) && selectedCompany.jobs.length > 0 ? (
                                    <div className="space-y-2">
                                        {selectedCompany.jobs.map((jobs, index) => (
                                            <p className="text-black  " key={index}>- {jobs}</p>
                                        ))}
                                    </div>
                                ) : (
                                    <p>{t.nometier}</p>
                                )}

                            </div>
                            <div id="video" className="mt-4 p-4 pb-4   bg-white/70">
                                <h1 className="text-[#4A62AA]  pb-8 uppercase font-bold"> {t.video}</h1>
                                <video src={selectedCompany.video}> {selectedCompany.video}</video>
                            </div>
                            <div id="contact" className="mt-8 p-4 bg-white/70">
                                {Array.isArray(selectedCompany.contact) && selectedCompany.contact.length > 0 ? (
                                    <div>

                                        <h1 className="text-[#4A62AA] font-bold">CONTACT</h1>
                                        <div className="flex flex-col gap-1">
                                            {selectedCompany.contact.map((c) => (
                                                <div key={c.id}>
                                                    <p className="bg-white p-2">Localisation <span className="text-black md:pl-36">{c.location}</span></p>
                                                    <p className="bg-white p-2">Téléphone <span className="text-black md:pl-36">{c.phones}</span></p>
                                                    <p className="bg-white p-2">Mail <span className="text-black md:pl-36 text-blue-5">{c.mail}</span></p>
                                                    <p className="bg-white p-2">Internet <a href={c.website} className="md:pl-36 text-blue-500">{c.website}</a></p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                ) : (<div>
                                    <h1 className="text-[#4A62AA] font-bold">CONTACT</h1>
                                    <div className="flex flex-col gap-1">

                                        <div>
                                            <p className="bg-white p-2">Localisation <span className="text-black md:pl-36"></span></p>
                                            <p className="bg-white p-2">Téléphone <span className="text-black md:pl-36"></span></p>
                                            <p className="bg-white p-2">Mail <span className="text-black md:pl-36 text-blue-5"></span></p>
                                            <p className="bg-white p-2">Internet <a className="md:pl-36 text-blue-500"></a></p>
                                        </div>

                                    </div>
                                </div>
                                )}
                            </div>
                            <div className="flex justify-center">
                                <button onClick={handleClick3} className="px-6 py-2 mt-10  bg-white/70 text-[#4A62AA] font-bold rounded-lg ">
                                 Poster un stage 
                                </button>
                            </div>


                        </div>

                    )
                 
  
) : (
  <div className="flex flex-col mt-10 items-center justify-center p-8 bg-white/70 ">
    <h2 className="text-2xl text-[#4A62AA] font-bold mb-4">Aucune compagnie presente</h2>
   <button 
      onClick={handleClick3}
      className="px-6 py-2 bg-[#4A62AA] text-white font-bold  hover:bg-[#3a4d8a] transition-colors"
    >
       Poster votre stage
    </button>
  </div>
)}

                </div>
            </div>
        </div>
    );
}