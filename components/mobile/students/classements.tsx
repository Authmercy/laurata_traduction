"use client";


import Navbar from "../navbar/navbar";
import FooterMobile from "../footer/footerEnd";
import React, { useEffect, useState } from "react";
import UseClassementService from "@/service/service_classement";
import { Brand } from "@/service/Brand";
import en from '@/i18/en/student/classement.json';
import fr from '@/i18/fr/student/classement.json';
import { useRouter } from "next/router";


export default function ClassementComponentMobile() {



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
  const [brand, setBrand] = useState<Brand[]>([]);
  useEffect(() => {
    const fetchsetBrand = async () => {
      const brand: Brand[] = [

        {
          id: 1,
          name: "Medicare",
          url: "",
          path: "/images/logo/medicare.png"
        },


      ];
      setBrand(brand);
    };

    fetchsetBrand();
  }, []);
  const router = useRouter();

  const { locale } = router;
  const t = locale === 'en' ? en : fr;
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxImages = 3;
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
            <p className="">
              {t.title} </p>

          </div>


          <div className="bg-white/70 mt-8 p-2 py-4 shadow-sm mb-2 hover:shadow-md transition-shadow">
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
            <div className="bg-white/70 p-2 mt-2">
              <div className="flex flex-wrap pt-4 sm:pt-8 justify-center items-center gap-2 sm:gap-4 md:gap-8">
                {regions.length > 0 ? (
                  regions.map((region) => (
                    <button
                      key={region.code}
                      type="button"
                      onClick={() => {
                        setSelectedRegion(region.name);
                        setCode(region.code);
                      }}
                      className={`px-4 sm:px-6 md:px-10 py-2 w-24 rounded-lg text-sm sm:text-base ${selectedRegion === region.name
                          ? "bg-[#C08B2F] text-white"
                          : "bg-white/70 border-2 border-[#4A62AA]"
                        } hover:bg-[#4A62AA] hover:text-white`}
                    >
                      {region.name}
                    </button>
                  ))
                ) : (
                  <div className="text-center w-full py-4 text-gray-500">

                  </div>
                )}
              </div>
            </div>


            <div className="border-4 border-x-0 border-white text-black flex flex-row items-center bg-white/70 p-2 text-center shadow-md relative w-full">
              {categories.length > 0 ? (
                <div className="slider-container relative w-full h-auto flex justify-center gap-2 transition-opacity duration-200">
                
                         {categories.slice(currentIndex, currentIndex + maxImages).map((cat) => {
  const maxLabelLength = 35; 
  const truncatedLabel = cat.label.length > maxLabelLength
    ? cat.label.slice(0, maxLabelLength) + '...'
    : cat.label;

  return (
    <div key={cat.id}>
      <button
        onClick={() => handleCategoryClick(cat)}
       className={`border rounded-md p-4 border-[#4A62AA] flex items-center w-28 sm:w-44 justify-center h-[80px] text-sm ${selectedCategory?.id === cat.id
                            ? 'bg-[#4A62AA] text-white'
                            : 'bg-white hover:bg-[#c3cbe4] hover:text-black'
                          }`}
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
                        className="absolute top-1/2 -left-2 transform -translate-y-1/2 text-[#4A62AA] text-2xl p-2 rounded-full"
                      >
                        &#10094;
                      </button>
                      <button
                        onClick={() =>
                          setCurrentIndex((prev) => Math.min(prev + maxImages, categories.length - maxImages))
                        }
                        className="absolute top-1/2 -right-2 transform -translate-y-1/2 text-[#4A62AA] text-2xl b p-2 rounded-full"
                      >
                        &#10095;
                      </button>
                    </>
                  )}
                </div>
              ) : (
                <div className="text-center w-full py-4 text-gray-500">
                  {selectedRegion
                    ? `${selectedRegion} n'a pas de catégories de classement`
                    : ""}
                </div>
              )}
            </div>


            <div className="bg-white/70 p-2">
              <div className="bg-white text-center p-2">
                <h2 className="text-[#A87A38] font-bold text-lg sm:text-xl text-center my-2">
                  {selectedCategory ? selectedCategory.label : ''}
                </h2>
              </div>

              <div className="flex p-2 justify-center">
                <div className="w-full overflow-x-auto">
                  {rankings.length > 0 ? (
                    <table className="w-full sm:w-[80%] text-center border-collapse">
                      <thead>
                        <tr>
                          <th className="border-[#A87A38] p-2 text-xs sm:text-base">{t.university}</th>
                          <th className="border-[#A87A38] p-2 text-xs sm:text-base">{t.rank}</th>
                          <th className="border-[#A87A38] bg-[#c7d0e9] p-2 text-xs sm:text-base">
                            {code === 'CM' ? ` ${t.city}` : `${t.country}`}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {rankings.map((uni, index) => (
                          <tr key={index} className="text-center">
                            <td className={`border border-x-0 text-start text-black border-[#A87A38] ${index % 2 === 0 ? 'bg-white' : 'bg-[#f0f0f0]'
                              } p-2 text-xs sm:text-base`}>
                              {uni.institution}
                            </td>
                            <td className={`border border-x-0 border-[#A87A38] ${index % 2 === 0 ? 'bg-white' : 'bg-[#f0f0f0]'
                              } p-2 text-xs sm:text-base`}>
                              {uni.rank}
                            </td>
                            <td className={`border border-x-0 border-[#A87A38] ${index % 2 === 0 ? 'bg-[#c7d0e9]' : 'bg-[#d7e0f9]'
                              } p-2 text-xs sm:text-base`}>
                              {code === 'CM' ? uni.city : uni.country}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <div className="text-center w-full py-8 text-gray-500">
                      {selectedCategory
                        ? `${t.noData} "${selectedCategory.label}"`
                        : ""}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>


        </div>
        <div className="flex  mt-36 bg-white items-center justify-center  ">
          {brand.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center "
            >
              <div className="flex  items-center   justify-center  ">


                <a href={item.path}>

                  <img
                    src={item.path}
                    alt={item.name}
                    width={200}
                    height={150}
                    className="flex  my-10 justify-center  "
                  /> </a>
              </div></div>
          ))}
        </div>
      </div>
      <footer className="w-full bg-blue-900    text-white text-center">
        <FooterMobile />
      </footer>
    </div>
  )
};