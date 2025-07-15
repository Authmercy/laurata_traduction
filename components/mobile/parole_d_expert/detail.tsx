"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Navbar from "../navbar/navbar";
import FooterMobile from "../footer/footerEnd";
import UseParoleExpertService from "@/service/parole_expert";
import router from "next/router";
export default function DetailExperMobile() {
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
    experts,
    currentIndex,
    setCurrentIndex,
    details,
    handleViewDetails,
    expertDetails
  } = UseParoleExpertService()

 const handleClick = () => {


    router.push(`/parole_dexpert/parole_expert`);
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
          <div className="justify-center p-2 text-center text-xl font-bold uppercase bg-[#9b6e0f] text-white">
            <p>           Parole d'expert </p>
          </div>


          <div className="border-4 mt-4 border-x-0 border-[#4A62AA] text-black bg-white/70 p-4 shadow-md relative">

            <div className="flex flex-col gap-6">
          {expertDetails ? (
                <div key={expertDetails.id}  className="flex flex-col   p-2 ">

                 <div className="flex flex-col items-center ">
                                   <div className="relative w-56 h-56">
                                     <Image src={expertDetails.image} alt={expertDetails.lastName} layout="fill" className="object-cover" />
                                   </div>
                                   <div className="text-center mt-4">
                                     <p className="text-lg font-bold">{expertDetails.firstName} {expertDetails.lastName} </p>
                                     <p className="text-sm">{expertDetails.title}</p>
                                     <p className="text-sm text-blue-600 italic">{expertDetails.linkedin}</p>
                                     <p className="text-sm text-blue-600 italic">{expertDetails.website}</p>
                                   </div>
                                 </div>


                  <div className=" mt-10 flex flex-col justify-center">
                    {expertDetails.interview?.map((item: any, index: any) => (
                    <div key={item.id}>
                      <h3 className="font-semibold text-[#4A62AA]  text-lg">- {item.question}</h3>
                      <p className="mt-2 italic">{item.answer}</p>
                    </div>
                  ))} </div>
                </div>
             ) : (
              <div>Loading...</div>
            )}
            </div>

          </div>
          <div className="flex flex-row gap-8 mt-4  justify-center">
            <button className="px-3 py-2  bg-[#0e1e4e] rounded-xl text-white font-bold ">
              Écouter le texte
            </button>
            <button  onClick={handleClick}  className="px-3 py-2  bg-[#A87A38] rounded-xl text-white font-bold ">
              Retour à l'accueil
            </button>
          </div>

        </div>
         <footer className="w-full bg-blue-900   mt-10 text-white text-center">
                                                        <FooterMobile />
                                                      </footer>
      </div>
   
    </div>
  );
}