"use client";

import Image from "next/image";
import Navbar from "../navbar/navbar";
import FooterMobile from "../footer/footerEnd";

import UseInstitutionUneService from "@/service/service_institutionALaUne";
import { useState } from "react";



export default function InstitutionALaUNeMobile() {
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileMenuOpen2, setIsMobileMenuOpen2] = useState(false);

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



    const [currentIndex, setCurrentIndex] = useState(0);

   
    
      
   
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
         <div className="flex justify-center px-2">
  <div className="w-full my-6 mb-10 text-center">
    <div className="flex flex-row sm:flex-row items-center relative w-full">
    
      <h1 className="w-full  text-[#4A62AA] py-2  text-center  border-4 sm:border-r-0 border-[#A87A38] bg-white uppercase font-bold">
        Institution
      </h1>


      <Image
        src="/icons/institutsup2.png"
        alt="Logo Institution"
        width={70}
        height={70}
        className="absolute top-1/2 left-1/2 transform ml-2 -translate-x-1/2 -translate-y-1/2 z-10"
      />

 
      <h1 className="w-full  text-[#4A62AA] py-2 text-center border-4 sm:border-l-0 border-[#A87A38] bg-white uppercase font-bold">
        à la une
      </h1>
    </div>
  </div>
</div>

     <div className="flex flex-col lg:flex-row gap-1">

                        <div className="w-full max-w-md h-44 border-x-0 border-4 border-[#4A62AA]">
                            <div className="pb-10 text-center">
                                <p className="mt- text-white">
                                    LAURATA vous présente à intervalle régulier une institution majeure du supérieur.
                                </p>
                            </div>
                            <div className="-mt-6 mb-2 flex justify-center text-center">
                                <select
                                    onChange={handleSelectChange}
                                    className="p-4 text-[#4A62AA] border border-[#4A62AA] rounded-2xl shadow-sm w-full max-w-xs"
                                >
                                    <option value="">Sélectionner une institution</option>
                                    {institutions.map((company) => (
                                        <option key={company.id} value={company.id}>
                                               {company.shortName || company.name}

                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                    </div>
         <div className="bg-white/70 flex flex-col lg:flex-row gap-1">
 
  {selectedCompany ? (
    <div>
      <div className="flex-1">
        <div className="flex flex-col items-center text-center">
          <div className="flex flex-col h-44 md:flex-row items-center justify-center gap-6 md:gap-36 w-full border-x-0 border-4 border-[#A87A38] my-4 text-[#4A62AA] p-4">
            <p className="font-extrabold text-xl md:text-2xl">
              {selectedCompany.name}<span className="font-normal"> {selectedCompany.shortName}</span>
            </p>
            {selectedCompany.logoId ? (
              <img src={selectedCompany.logoId} alt={selectedCompany.shortName} className="w-40 md:w-56 h-auto pt-2" />
            ) : (
              <div className="w-40 md:w-56 h-auto pt-2 flex items-center justify-center text-gray-500">
                Logo non disponible
              </div>
            )}
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

      <div id="presentation" className="mt-1 p-2 px-4 bg-white/70">
        <button onClick={() => handleToggle(1)} className="text-[#A87A38] flex w-full font-bold">
          <span className="flex-grow uppercase text-left">PRÉSENTATION</span>
          <span className="ml-10 text-2xl">{open === 1 ? "▲" : "▼"}</span>
        </button>

        {open === 1 && (
          <div className="flex border-t border-[#A87A38] flex-col gap-1">
            {Array.isArray(selectedCompany.description) && selectedCompany.description.length > 0 ? (
              <div className="space-y-2 mt-2">
                {selectedCompany.description.map((description, index) => (
                  <p className="text-black" key={index}>{description}</p>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 py-2">Aucune description enregistrée.</p>
            )}
          </div>
        )}
      </div>

      <div id="formation" className="mt-1 p-2 px-4 bg-white/70">
        <button onClick={() => handleToggle(5)} className="text-[#A87A38] flex w-full font-bold">
          <span className="flex-grow uppercase text-left">formations</span>
          <span className="ml-10 text-2xl">{open === 5 ? "▲" : "▼"}</span>
        </button>
        {open === 5 && (
          <div className="border-t border-[#A87A38]">
            {Array.isArray(selectedCompany.portfolio) && selectedCompany.portfolio.length > 0 ? (
              <div className="space-y-4">
                {selectedCompany.portfolio.map((portfolio, index) => (
                  <div key={index} className="space-y-2">
                    <p className="text-[#4A62AA] text-xl font-semibold">
                      <span className="text-[#4A62AA] font-bold">■ </span> {portfolio.category}
                    </p>
                    {portfolio.programs?.length > 0 ? (
                      portfolio.programs.map((program, progIndex) => (
                        <div key={progIndex} className="ml-4 space-y-1">
                          <p className="text-[#4A62AA] text-lg font-medium">
                            <span className="text-[#4A62AA] font-bold">• </span> {program.major}
                          </p>
                          {program.values?.length > 0 ? (
                            <ul className="list-disc list-inside text-black">
                              {program.values.map((val, valIndex) => (
                                <li key={valIndex}>{val}</li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-gray-500 ml-4">Aucun détail disponible</p>
                          )}
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-500 ml-4">Aucun programme disponible</p>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 py-2">Aucune formation enregistrée.</p>
            )}
          </div>
        )}
      </div>

      <div id="infrastructures" className="mt-1 p-2 px-4 bg-white/70">
        <button onClick={() => handleToggle(2)} className="text-[#A87A38] flex w-full font-bold">
          <span className="flex-grow uppercase text-left">Infrastructures</span>
          <span className="ml-10 text-2xl">{open === 2 ? "▲" : "▼"}</span>
        </button>
        {open === 2 && (
          <div className="border-t border-[#A87A38]">
            {Array.isArray(selectedCompany.infrastructure) && selectedCompany.infrastructure.length > 0 ? (
              <div className="space-y-2">
                {selectedCompany.infrastructure.map((infrastructure, index) => (
                  <p className="text-black" key={index}>- {infrastructure}</p>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 py-2">Aucune infrastructure enregistrée.</p>
            )}
          </div>
        )}
      </div>

      <div id="video" className="mt-1 p-2 px-4 bg-white/70">
        <button onClick={() => handleToggle(3)} className="text-[#A87A38] flex w-full font-bold">
          <span className="flex-grow uppercase text-left">VIDEO</span>
          <span className="ml-10 text-2xl">{open === 3 ? "▲" : "▼"}</span>
        </button>
        {open === 3 && (
          <div className="border-t border-[#A87A38]">
            {selectedCompany.video ? (
              <video src={selectedCompany.video} controls className="w-full" />
            ) : (
              <p className="text-gray-500 py-2">Aucune vidéo disponible</p>
            )}
          </div>
        )}
      </div>

      <div id="contact" className="mt-1 p-2 px-4 bg-white/70">
        <button onClick={() => handleToggle(4)} className="text-[#A87A38] flex w-full font-bold">
          <span className="flex-grow uppercase text-left">CONTACT</span>
          <span className="ml-10 text-2xl">{open === 4 ? "▲" : "▼"}</span>
        </button>
        {open === 4 && (
          <div className="flex flex-col gap-1 border-t border-[#A87A38]">
            {Array.isArray(selectedCompany.contact) && selectedCompany.contact.length > 0 ? (
              selectedCompany.contact.map((c) => (
                <div key={c.id}>
                  <div className="flex flex-row w-full bg-white">
                    <p className="p-2"><Image src="/icons/location.svg" alt="icon" width={24} height={20} /></p>
                    <p className=" p-2 text-black">{c.location || <span className="text-gray-500">Non spécifié</span>}</p>
                  </div>
                  <div className="flex flex-row w-full bg-white">
                    <p className="p-2"><Image src="/icons/icons8-telephone-50.png" alt="icon" width={24} height={20} /></p>
                    <p className=" p-2 text-black">{c.phones || <span className="text-gray-500">Non spécifié</span>}</p>
                  </div>
                  <div className="flex flex-row w-full bg-white">
                    <p className="p-2"><Image src="/icons/icons8-email-30.png" alt="icon" width={24} height={20} /></p>
                    <p className=" p-2 text-blue-500">{c.mail || <span className="text-gray-500">Non spécifié</span>}</p>
                  </div>
                  <div className="flex flex-row w-full bg-white">
                    <p className="p-2"><Image src="/icons/icons8-web-50.png" alt="icon" width={20} height={20} /></p>
                    <p className=" p-2">
                      {c.website ? (
                        <a href={c.website} className="md:pl-36 text-blue-500">{c.website}</a>
                      ) : (
                        <span className="text-gray-500">Non spécifié</span>
                      )}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div>
                <div className="flex flex-row w-full bg-white">
                  <p className="p-2"><Image src="/icons/location.svg" alt="icon" width={24} height={20} /></p>
                  <p className=" p-2 text-gray-500">Non spécifié</p>
                </div>
                <div className="flex flex-row w-full bg-white">
                  <p className="p-2"><Image src="/icons/icons8-telephone-50.png" alt="icon" width={24} height={20} /></p>
                  <p className=" p-2 text-gray-500">Non spécifié</p>
                </div>
                <div className="flex flex-row w-full bg-white">
                  <p className="p-2"><Image src="/icons/icons8-email-30.png" alt="icon" width={24} height={20} /></p>
                  <p className="- p-2 text-gray-500">Non spécifié</p>
                </div>
                <div className="flex flex-row w-full bg-white">
                  <p className="p-2"><Image src="/icons/icons8-web-50.png" alt="icon" width={20} height={20} /></p>
                  <p className="p-2 text-gray-500">Non spécifié</p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="flex m-4 flex-row justify-end gap-8">
        <button className="w-64 py-2 px-2 mt-10 text-white bg-[#4A62AA] font-bold rounded-lg">
          Télécharger la fiche de préinscription
        </button>
        <button className="w-64 py-2 mt-10 bg-white/70 text-[#4A62AA] font-bold rounded-lg">
          S'inscrire
        </button>
      </div>
    </div>
  ) : (
    <div className="w-full py-8 text-center text-gray-500">
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
    </div>
  )}
</div>
           </div>
               <footer className="w-full bg-blue-900   mt-24 text-white text-center">
                                                                              <FooterMobile />
                                                                            </footer>
         </div>
                
       </div>
   
     );
   }