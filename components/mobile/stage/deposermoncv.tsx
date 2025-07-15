"use client";


import { useRouter } from "next/router";
import Navbar from "../navbar/navbar";
import { CV_Class } from "@/service/CV";
import FooterMobile from "../footer/footerEnd";
import { URLS } from "@/service/url";

import { useEffect, useState } from "react";
import UseDepotCVService from "@/service/service_DeposCV";

type Sector = {
  id: string;
  text: string;

};
export default function DeposerMonCVMobile() {
  const router = useRouter();

       const {
      
 errorMessage,
  handleChange,
  successMessage,

  setErrorMessage,
  setElements,
handleCheckboxChange,
updateElement,
  setSuccessMessage,
showError,
setShowError,
setTermsAccepted,
termsAccepted,
elements,
setSectors,
 handleSubmit ,

sectors,
handleToggle,
open,
   
     } = UseDepotCVService()

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileMenuOpen2, setIsMobileMenuOpen2] = useState(false);

  return (
    <div>
      <div className="min-h-screen  text-black   bg-[#4A62AA]  overflow-auto  w-screen bg-cover  text-justify bg-center bg-no-repeat "  >

        <Navbar
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          isMobileMenuOpen2={isMobileMenuOpen2}
          setIsMobileMenuOpen2={setIsMobileMenuOpen2}
        />
        <div className={`${isMobileMenuOpen ? "blur-sm " : ""
          }`}>
          <div className="justify-center p-2 text-center text-xl font-bold uppercase bg-[#9b6e0f] text-white">
            <p>Déposer mon cv</p>
          </div>



          <div

            className="bg-white/70 text-justify   mt-8 p-2 py-4 shadow-sm mb-2 hover:shadow-md transition-shadow"
          >
            <p className=" text-center text-lg font-semibold text-[#4A62AA]">
              Ayez la primeur de l’information sur les nouvelles annonces
            </p>
            <p className="mt-2  text-black">
              Déposer votre CV vous permet de recevoir les annonces de stage ou d’emploi pour débutants dans votre boîte mail  d'une part et, de le rendre consultable par  les entreprises et organisations partenaires d'autre part.
            </p>


          </div>
          <p className="text-white  text-center  mt-8 font-bold"> Deux options   pour envoyer votre CV </p>
          <div className="flex flex-row mt-4 gap-1">


            <div className=" bg-white/70 py-2 p-2  text-black pt-8 text-start">
              <b> 1. </b>  Au format PDF, Word ou JPEG à <span className="text-blue-600 font-semibold">cv@laurata.com</span> en précisant vos domaines d'intéret ; OU <br />
              <p className="  mt-4">  <b> 2. </b>  Remplir et envoyer le formulaire ci-dessous.</p>

            </div>

          </div>

          {successMessage && (
            <div className="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
              {successMessage}
            </div>
          )}
          {errorMessage && (
            <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
              {errorMessage}
            </div>
          )}
          <div className="flex justify-center text-center">

            <form className="mt-6 space-y-1 w-10/12" onSubmit={handleSubmit}>

              <input type="text" name="firstname" value={elements.firstname}
                onChange={handleChange} placeholder="Nom *" className="w-full border placeholder:text-[#4A62AA] bg-white/70  border-gray-300 p-2 px-8 focus:ring-2 focus:ring-[#4A62AA]" />
              <input type="text" name="lastname" value={elements.lastname}
                onChange={handleChange} placeholder="Prénom *" className="w-full border placeholder:text-[#4A62AA] bg-white/70  border-gray-300 p-2 px-8  focus:ring-2 focus:ring-[#4A62AA]" />
              <input type="email" value={elements.email}
                onChange={handleChange} placeholder="Email *" name="email" className="w-full border placeholder:text-[#4A62AA] bg-white/70  border-gray-300 p-2 px-8  focus:ring-2 focus:ring-[#4A62AA]" />
              <input type="tel" value={elements.phone}
                onChange={handleChange} placeholder="Téléphone *" name="phone" className="w-full border placeholder:text-[#4A62AA] bg-white/70  border-gray-300 p-2 px-8   focus:ring-2 focus:ring-[#4A62AA]" />


              <div className="relative w-full border placeholder:text-[#4A62AA] text-[#4A62AA] bg-white/70  border-gray-300 p-2 px-8   focus:ring-2 focus:ring-[#4A62AA]">
                <div
                  className="w-full flex justify-between items-center cursor-pointer"
                  onClick={() => handleToggle(1)}
                >
                  <span>Secteur</span>
                  <span className="text-xl">{open === 1 ? "▲" : "▼"}</span>
                </div>
                {open === 1 && (
                  <div className=" text-start mt-2 text-black    ">
                    <div className="grid grid-cols-2 gap-2">
                      {sectors.map(sector => (
                        <label key={sector.id} className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            value={sector.id}
                            checked={elements.sector.includes(sector.id)}
                            onChange={handleCheckboxChange}
                            className="accent-blue-500"
                          />
                          {sector.text}
                        </label>
                      ))}

                    </div>
                  </div>
                )}

              </div>
              <input type="text" value={elements.job}
                onChange={handleChange} name="job" placeholder="Métier recherché" className="w-full placeholder:text-[#4A62AA]  px-8 border bg-white/70  border-gray-300 p-2  focus:ring-2 focus:ring-[#4A62AA]" />


              <div className="p-3  bg-gray-100 border rounded-2xl border-gray-300">
                <label className="   text-[#344474]">
                  <span className="font-bold text-[#4A62AA]">   Télécharger votre CV * <br /></span> <span className="text-sm">(.doc, .docx, .pdf) Taille : Max 2MB</span>
                </label>
                <input type="file" name="cv"
                  accept=".doc,.docx,.pdf"
                  onChange={handleChange} className="mt-2 w-full border border-gray-300 p-2 " />
              </div>


              <div className="flex items-center">
                <input type="checkbox" id="terms" name="termsAccepted" checked={termsAccepted}
                  onChange={(e) => {
                    setTermsAccepted(e.target.checked);
                    if (showError) setShowError(false);
                  }} className="w-4 h-4 text-[#4A62AA] border-gray-300 rounded focus:ring-[#4A62AA]" />
                <label htmlFor="terms" className="ml-2 text-white  px-2">J’accepte les conditions générales d’utilisation</label>
              </div>
              {showError && (
                <p className="mt-1 text-red-500 text-sm">Veuillez accepter les conditions générales d'utilisation</p>
              )}
              {/* Buttons */}
              <div className="flex justify-center mt-4">
                <div className="flex w-1/2 pt-8 justify-center items-center gap-4">
                  <button type="submit" className="px-12  bg-[#A87A38]  text-white font-bold py-2 rounded-lg hover:bg-[#C08B2F]">
                    Envoyer
                  </button>
                  <button onClick={() => router.back()} type="reset" className="px-12 bg-[#1b40ad] text-white  font-bold py-2 rounded-lg hover:bg-gray-400">
                    Annuler
                  </button>
                </div>
              </div>

            </form>
          </div>

        </div>

        <footer className="w-full mt-10 bg-blue-900   text-white text-center">
          <FooterMobile />
        </footer>
      </div>

    </div>

  );
}