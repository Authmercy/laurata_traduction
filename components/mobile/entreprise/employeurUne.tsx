"use client";

import Image from "next/image";

import {  useState } from "react";
import router, { useRouter } from "next/router";
import Navbar from "../navbar/navbar";
import FooterMobile from "../footer/footerEnd";
import UseEntrepriseUneService from "@/service/service_EntrepriseALaUne";
import en from '@/i18/en/entreprise/entrepriseALaUne.json';
import fr from '@/i18/fr/entreprise/entrepriseALaUne.json';


export default function EmployeurALaUNeMobile() {

 const {
            companies,
    
            errorMessage,
            handleSelectChange,
            selectedCompany,
            setErrorMessage,
             nextSlide,
        prevSlide,
    
    
        } = UseEntrepriseUneService()
    
    
    
    


    const images = [
        "/images/background.png",
        "/images/backgroundEtudiant.jpeg",
        "/images/image.png",
    ];

  const router = useRouter();
      const { locale } = router;
      const t = locale === 'en' ? en : fr;

   

    const [currentIndex, setCurrentIndex] = useState(0);
    const handleClick3 = () => {
        router.push("/entreprise/poster/#editer");
    };

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileMenuOpen2, setIsMobileMenuOpen2] = useState(false);

    return (
        <div>
           <div className="min-h-screen   bg-[#34538C]  overflow-auto  w-screen bg-cover  text-justify bg-center bg-no-repeat "  >
         
                <Navbar
                    isMobileMenuOpen={isMobileMenuOpen}
                    setIsMobileMenuOpen={setIsMobileMenuOpen}
                    isMobileMenuOpen2={isMobileMenuOpen2}
                    setIsMobileMenuOpen2={setIsMobileMenuOpen2}
                />

                <div className={`${isMobileMenuOpen ? "blur-sm " : ""
                    } ${isMobileMenuOpen2 ? "blur-sm " : ""
                    } `}>
                    <div className=" justify-center w-4/12 text-center ">
                        <div className="w-[300%] text-center flex-shrink-0">
                            <div className="relative text  flex flex-row items-center">
                                <h1 className="text-[#A87A38] py-2   border-2 border-r-0 bg-white border-[#4A62AA] uppercase  font-extrabold w-full">
                                        {t.title}
                                </h1>
                                <Image
                                    src="/icons/entreprise.png"
                                    alt=""
                                    width={80}
                                    height={70}
                                    className="absolute left-1/2 py-2  -mt-3 transform -translate-x-1/2 z-16"
                                />
                                <h1 className="text-[#A87A38] py-2  border-2 border-l-0 bg-white border-[#4A62AA] uppercase  font-extrabold w-full">
                                      {t.title2}
                                </h1>
                            </div>
                        </div>
                    </div>


                    <div className="mt-8">
                        <div className="bg-white p-4 pb-10 text-center">
                            <p className="mt-8 text-black">
                             {t.intro}  </p>
                        </div>
                        <div className="-mt-6 flex  justify-center text-center">
                            <select
                                onChange={handleSelectChange}
                                className="p-4 text-white text-center font-bold bg-[#A87A38] rounded-md shadow-sm"
                            >
                                <option value="">    {t.option}</option>
                                {companies.map((company) => (
                                    <option key={company.id} value={company.id}>
                                        {company.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                    </div>
                    <div

                        className="bg-white/70   mt-2  p-2 py-4 shadow-sm mb-2 hover:shadow-md transition-shadow"
                    >
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
                       {selectedCompany ? (
                        selectedCompany && (
                            <div>
                                <div className="flex-1">
                                    <div className="flex flex-col items-center  text-center justify-center">
                                        <div className="flex flex-col mt-4  md:flex-row items-center justify-center gap-6 md:gap-36 w-full max-w-6xl  bg-white my-4 text-[#4A62AA] p-4">

                                            <p className="text-center mt-20 pl-2 font-extrabold text-2xl">
                                                {selectedCompany.name}
                                            </p>

                                            <img src={selectedCompany.logoId} alt={selectedCompany.shortName} className="w-56 pt-2 h-36" />
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
                                    <h1 className="text-[#4A62AA] uppercase pb-8 font-bold">{t.secteur}</h1>

                                    {Array.isArray(selectedCompany.activities) && selectedCompany.activities.length > 0 ? (
                                        <div className="space-y-2">
                                            {selectedCompany.activities.map((activityField, index) => (
                                                <p className="text-black  " key={index}>─ {activityField}</p>
                                            ))}
                                        </div>

                                    ) : (
                                        <p>{t.noProgram}</p>
                                    )}


                                </div>
                                <div id="produits" className="mt-4  p-4  bg-white/70">
                                    <h1 className="text-[#4A62AA] pb-8  font-bold">{t.produit}</h1>


                                    {Array.isArray(selectedCompany.portfolio) && selectedCompany.portfolio.length > 0 ? (
                                        <div className="space-y-2">
                                            {selectedCompany.portfolio.map((portfolio, index) => (
                                                <p className="text-black  " key={index}>─ {portfolio}</p>
                                            ))}
                                        </div>
                                    ) : (
                                        <p>{t.noProduct}</p>
                                    )}

                                </div>

                                <div id="metiers" className="mt-4  p-4 pb-4   bg-white/70">
                                    <h1 className="text-[#4A62AA]  pb-8  font-bold">{t.produit}</h1>


                                    {Array.isArray(selectedCompany.jobs) && selectedCompany.jobs.length > 0 ? (
                                        <div className="space-y-2">
                                            {selectedCompany.jobs.map((jobs, index) => (
                                                <p className="text-black  " key={index}>─ {jobs}</p>
                                            ))}
                                        </div>
                                    ) : (
                                        <p>{t.noProduct}</p>
                                    )}

                                </div>
                                <div id="video" className="mt-4 p-4 pb-4   bg-white/70">
                                    <h1 className="text-[#4A62AA]  pb-8  font-bold">{t.metier}</h1>
                                    <video src={selectedCompany.video}> {selectedCompany.video}</video>
                                </div>
                                <div id="contact" className="mt-10 p-4 bg-white/70">
                                    {Array.isArray(selectedCompany.contact) && selectedCompany.contact.length > 0 ? (
                                        <div>

                                            <h1 className="text-[#4A62AA] font-bold">{t.video}</h1>
                                            <div className="flex flex-col gap-1">
                                                {selectedCompany.contact.map((c) => (
                                                    <div key={c.id}>
                                                        <p className="bg-white p-2">  <Image src="/icons/location.svg" alt="icon" width={24} height={20} /> <span className="text-black md:pl-36">{c.location}</span></p>
                                                        <p className="bg-white p-2"><Image src="/icons/icons8-telephone-50.png" alt="icon" width={24} height={20} />  <span className="text-black md:pl-36">{c.phones}</span></p>
                                                        <p className="bg-white p-2"><Image src="/icons/icons8-email-30.png" alt="icon" width={24} height={20} /> <span className="text-black md:pl-36 text-blue-5">{c.mail}</span></p>
                                                        <p className="bg-white p-2">  <Image src="/icons/icons8-web-50.png" alt="icon" width={20} height={20} /> <a href={c.website} className="md:pl-36 text-blue-500">{c.website}</a></p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                    ) : (<div>
                                        <h1 className="text-[#4A62AA] font-bold">CONTACT</h1>
                                        <div className="flex flex-col gap-1">

                                            <div>
                                                <p className="bg-white p-2">  <Image src="/icons/location.svg" alt="icon" width={24} height={20} /> <span className="text-black md:pl-36"></span></p>
                                                <p className="bg-white p-2"> <Image src="/icons/icons8-telephone-50.png" alt="icon" width={24} height={20} /> <span className="text-black md:pl-36"></span></p>
                                                <p className="bg-white p-2">   <Image src="/icons/icons8-email-30.png" alt="icon" width={24} height={20} />  <span className="text-black md:pl-36 text-blue-5"></span></p>
                                                <p className="bg-white p-2">  <Image src="/icons/icons8-web-50.png" alt="icon" width={20} height={20} /> <a className="md:pl-36 text-blue-500"></a></p>
                                            </div>

                                        </div>
                                    </div>
                                    )}
                                </div>
                                <div className="flex justify-center">
                                    <button onClick={handleClick3} className="px-6 py-2 mt-10  bg-[#4A62AA] text-white font-bold rounded-lg ">
                                        Poster votre stage
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
                   <footer className="w-full bg-blue-900    text-white text-center">
                                                                        <FooterMobile />
                                                                      </footer>
                                                                         
                
        </div>

    );
}