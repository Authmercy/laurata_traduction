"use client";

import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Navbar from "../navbar/navbar";
import FooterMobile from "../footer/footerEnd";
import UseParoleexpertsService from "@/service/parole_expert";
export default function ParoleDexpertMobile() {
  const {
 maxImages,
handlePrev,
handleNext,
displayedImages,
setSelectedExpert,
  errorMessage,
selectedExpert,
  setExperts,
  setErrorMessage,
handleToggle,
open,
setOpen,
currentIndex,
setCurrentIndex,
handleViewDetails,
  experts,error
   } = UseParoleexpertsService()
 
 

  for (let i = 0; i < maxImages; i++) {
    const index = (currentIndex + i) % experts.length;
    displayedImages.push(experts[index]);
  }

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
          <div className="justify-center p-2 text-center text-xl font-bold uppercase bg-[#9b6e0f] text-white">
            <p>           Parole d'expert </p>
          </div>


          <div

            className="bg-white   mt-6  p-2 py-4 shadow-sm mb-2 hover:shadow-md transition-shadow"
          >
            <p className=" font-bold text-[#4A62AA]">
              Écoutez   un professionnel et montez en compétences</p>
            <p className="mt-2 text-black">
              À intervalle régulier, un de nos experts vous parle d'une thématique en lien avec la formation et/ou le monde du travail.
            </p>



          </div>
          <div className="border-4 mt-4 border-x-0 border-[#A87A38] text-black bg-white  text-center shadow-md relative">
  {error && (
    <div className="p-8 text-center text-red-600">
      <p>Échec du chargement des experts. Veuillez réessayer ultérieurement..</p>
    </div>
  )}

 
  {!error && !experts && (
    <div className="p-8 text-center">
      <p>Chargement xperts...</p>
    </div>
  )}

  {!error && experts?.length === 0 && (
    <div className="p-8 text-center">
      <p>Aucun expert disponible pour le moment.</p>
    </div>
  )}

  {!error && experts?.length > 0 && (
    <>
            <div className="slider-container p-4 relative bg-[#f7e9d6] h-auto flex justify-center gap-4">
              {experts.slice(currentIndex, currentIndex + maxImages).map((femme, index) => {
                const isCenter = index === Math.floor(maxImages / 2);

                if (isCenter && selectedExpert?.id !== femme.id) {
                  setTimeout(() => setSelectedExpert(femme), 0);
                }



                return (
                  <div key={femme.id} className="relative">
                    <Link href={`/parole_dexpert/${femme.id}`}>
                      <img
                        src={femme.image}
                        alt={`slider-${femme.id}`}
                        className={`w-36 h-36 rounded-full border-2 shadow-md cursor-pointer ${isCenter ? "border-[#A87A38] scale-110" : "border-white"
                          }`}
                      />
                    </Link>
                  </div>
                );
              })}

              <button
                onClick={() =>
                  setCurrentIndex((prev) =>
                    (prev - maxImages + experts.length) % experts.length
                  )
                }
                className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-2xl bg-black bg-opacity-50 p-2 rounded-full"
              >
                &#10094;
              </button>

              <button
                onClick={() =>
                  setCurrentIndex((prev) =>
                    (prev + maxImages) % experts.length
                  )
                }
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-2xl bg-black bg-opacity-50 p-2 rounded-full"
              >
                &#10095;
              </button>

            </div>
  
    </>
    
  )}
          </div>

          <div className="flex flex-col items-center mt-20 justify-center px-2">
            {selectedExpert ? (
              <div className="border-2 border-[#A87A38] text-black bg-white p-4 w-full py-12 text-center shadow-md relative">
                <div className="bg-[#A87A38] text-white font-bold px-4  py-1 text-center  w-8/12  absolute -top-8 left-1/2 transform -translate-x-1/2 bg">
                  {selectedExpert.firstName}     {selectedExpert.lastName}
                  <p className=" font-normal">{selectedExpert.title}</p>
                </div>

                <p className="font-bold mt-8 ">
                  {selectedExpert.description}
                </p>
              </div>
            ) : null}
          </div>

        </div>
      </div>
    <footer className="w-full bg-blue-900    text-white text-center">
                                                        <FooterMobile />
                                                      </footer>
    </div>
  );
}