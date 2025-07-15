"use client";
import UseParoleExpertService from "@/service/parole_expert";
import Image from "next/image";

import router, { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function DetailExpert() {
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

  return (
    <div className="flex flex-col   md:flex-row  ">
      <div className="flex-grow md:w-2/3 p-8">

        <div className="   flex flex-col gap-1 pt-2 mt-6">
          <div className="flex justify-center">
            <h1 className=" bg-[#A87A38] text-white uppercase text-2xl text-center font-extrabold w-full  p-2">


              PAROLE D'Expert
            </h1></div>


        </div>
        <div className="border-4 mt-4 border-x-0 border-[#4A62AA] text-black bg-white/70 p-4 shadow-md relative">

       
          <div className="flex flex-col gap-6">
            {expertDetails ? (
              <div key={expertDetails.id} className="flex flex-row   p-4 ">

                <div className="flex flex-col items-center w-1/3">
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


                <div className="w-2/3 bg-white/20 px-2 flex flex-col justify-center">

                  {expertDetails.interview?.map((item: any, index: any) => (
                    <div key={item.id} className="space-y-2">
                      <h3 className="font-semibold   italic text-[#4A62AA]  mt-6 text-lg">- {item.question}</h3>
                      <p className="">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

            ) : (
              <div>Loading...</div>
            )}
          </div>

        </div>
        <div className="flex flex-row gap-8 mt-4  justify-end">
          <button className="px-6 py-2  bg-[#4A62AA] rounded-xl text-white font-bold ">
            Écouter le texte
          </button>
          <button onClick={handleClick} className="px-6 py-2  bg-[#A87A38] rounded-xl text-white font-bold ">
            Retour à l'accueil
          </button>
        </div>
      </div>
    </div>


  );
}