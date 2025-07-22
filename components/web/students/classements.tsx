"use client";
import React, { useState } from "react";

import UseClassementService from "@/service/service_classement";

import en from '@/i18/en/student/classement.json';
import fr from '@/i18/fr/student/classement.json';
import { useRouter } from "next/router";
export default function ClassementComponent() {

  const router = useRouter();

  const { locale } = router;
  const t = locale === 'en' ? en : fr;
  const {
    regions,
    selectedRegion,
    code,
    categories,
    selectedCategory,
    rankings,
    errorMessage,
    setErrorMessage,
    setCode,
    setSelectedRegion,
    handleCategoryClick

  } = UseClassementService()

  const [currentIndex, setCurrentIndex] = useState(0);
  const maxImages = 4;
  return (

    <div className="flex flex-col  mt-8 md:flex-row  ">
      <div className="flex-grow md:w-2/3 p-8">
        <div className="flex justify-center">
          <h1 className=" uppercase bg-[#A87A38] text-white  text-2xl text-center font-extrabold w-full  p-2">

            {t.title}
          </h1></div>

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

        <div className=" bg-white/70 p-2  mt-10">
          <div className="flex pt-8 justify-center items-center gap-12">
            {regions.map((region) => (
              <button
                key={region.code}
                type="button"
                onClick={() => {
                  setSelectedRegion(region.name);
                  setCode(region.code);
                }}
                className={`px-10 py-2 rounded-lg ${selectedRegion === region.name
                  ? "bg-[#C08B2F] text-white"
                  : "bg-white/70 border-2 border-[#4A62AA]"
                  } hover:bg-[#4A62AA] hover:text-white`}
              >
                {region.name}
              </button>
            ))}
          </div>


        </div>
        <div className="border-4 border-x-0 border-white text-black flex flex-row items-center bg-white/70 px-2 text-center shadow-md relative w-full">


          <div className="slider-container relative w-full h-auto flex justify-center gap-2 transition-opacity duration-300">
          {categories.slice(currentIndex, currentIndex + maxImages).map((cat) => {
  const maxLabelLength = 35; 
  const truncatedLabel = cat.label.length > maxLabelLength
    ? cat.label.slice(0, maxLabelLength) + '...'
    : cat.label;

  return (
    <div key={cat.id}>
      <button
        onClick={() => handleCategoryClick(cat)}
        className={`border rounded-md p-4 border-[#4A62AA] flex items-center justify-center h-[100px] w-[150px]
          ${selectedCategory?.id === cat.id
            ? 'bg-[#4A62AA] text-white'
            : 'bg-white hover:bg-[#c3cbe4] hover:text-black'}
        `}
      >
        {truncatedLabel}
      </button>
    </div>
  );
})}


            {categories.length > maxImages && (
              <>
                <button
                  onClick={() => setCurrentIndex((prev) => Math.max(prev - maxImages, 0))}
                  className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-2xl bg-[#4A62AA]/80  p-2 rounded-full"
                >
                  &#10094;
                </button>

                <button
                  onClick={() =>
                    setCurrentIndex((prev) => Math.min(prev + maxImages, categories.length - maxImages))
                  }
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-2xl bg-[#4A62AA]/80 p-2 rounded-full"
                >
                  &#10095;
                </button>
              </>
            )}
          </div>


        </div>

        <div className="bg-white/70 p-2">
          <div className="bg-white text-center p-2">
            <h2 className="text-[#A87A38] font-bold text-xl text-center my-2">
              {selectedCategory ? selectedCategory.label : ''}
            </h2>
          </div>

          <div className="flex p-2 justify-center">
            {rankings.length > 0 ? (
              <table className="w-[80%] text-center text-lg border-collapse">
                <thead>
                  <tr>
                    <th className="border-[#A87A38] text-start p-2"> {t.university}</th>
                    <th className="border-[#A87A38] p-2">{t.rank}</th>
                    <th className="border-[#A87A38] bg-[#c7d0e9] p-2">
                      {code === 'CM' ? ` ${t.city}` : `${t.country}`}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rankings.map((uni, index) => (
                    <tr key={index} className="text-start">
                      <td className="border border-x-0 text-black border-[#A87A38] bg-white p-2">
                        {uni.institution}
                      </td>
                      <td className="border border-x-0 text-center border-[#A87A38] bg-white p-2">
                        {uni.rank}
                      </td>
                      <td className="border border-x-0 border-[#A87A38] text-center bg-[#c7d0e9] p-2">
                        {code === 'CM' ? ` ${uni.city}` : `${uni.country}`}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="w-full py-8 text-center text-gray-500">
                {selectedCategory
                  ? `${t.noData} "${selectedCategory.label}"`
                  : ""}
              </div>
            )}
          </div>
        </div>

      </div>

    </div>

  );
}