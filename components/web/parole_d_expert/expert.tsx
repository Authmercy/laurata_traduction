"use client";

import UseParoleExpertService from "@/service/parole_expert";
import { URLS } from "@/service/url";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
export default function ParoleDexpert() {
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
  experts,
  error
   } = UseParoleExpertService()
 
 
  for (let i = 0; i < maxImages; i++) {
    const index = (currentIndex + i) % experts.length;
    displayedImages.push(experts[index]);
  }

  return (
    <div className="flex flex-col   md:flex-row  ">
      <div className="flex-grow md:w-2/3 p-8">

        <div className="   flex flex-col gap-1 pt-2 mt-6">
          <div className="flex justify-center">
            <h1 className=" bg-[#A87A38] text-white  text-2xl text-center uppercase font-extrabold w-full  p-2">

              Parole d'expert
            </h1></div>
          <div className=" bg-white/70 border-1 p-6  text-start border-[#4A62AA]" >
            <p className="text-[#4A62AA] text-xl">  Écoutez   un professionnel et montez en compétences</p>
            <p className=" text-black" >

             À intervalle régulier, un de nos experts vous parle d'une thématique en lien avec la formation et/ou le monde du travail.
            </p>

          </div>

        </div>
      <div className="border-4 mt-4 border-x-0 border-[#A87A38] text-black bg-white p-4 text-center shadow-md relative">
 
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
        {experts.slice(currentIndex, currentIndex + maxImages).map((item, index) => {
          const isCenter = index === Math.floor(maxImages / 2);

          if (isCenter && selectedExpert?.id !== item.id) {
            setTimeout(() => setSelectedExpert(item), 0);
          }

          return (
            <div key={item.id} onClick={() => handleViewDetails(item)} className="relative">
              <img
                src={item.image}
                alt={`${item.lastName}`}
                className={`w-60 h-60 rounded-full border-2 shadow-md cursor-pointer ${
                  isCenter ? "border-[#A87A38] scale-110" : "border-white"
                }`}
              />
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
 <div className="flex flex-col items-center mt-8 justify-center">
        {selectedExpert && (
          <div className="border-2 border-[#A87A38] text-black bg-white p-4 w-[80%] py-12 text-center shadow-md relative">
            <div className="bg-[#A87A38] text-white font-bold px-6 py-2 text-center absolute -top-5 left-1/2 transform -translate-x-1/2">
              {selectedExpert.firstName} {selectedExpert.lastName}
              <p className="text-sm font-normal">{selectedExpert.title}</p>
            </div>
            <p className=" p-2">
              {selectedExpert.description}
            </p>
          </div>
        )}
      </div>

      </div>
    </div>


  );
}