"use client";
import router from "next/router";
import React from "react";
import Image from "next/image";

import ServiceInternshipDetail from "@/service/service_Internship_Descriptif";

import en from '../../../../i18/en/student/internship.json';
import fr from '../../../../i18/fr/student/internship.json';

export default function DetailDescriptif() {


  const {
    goToPreviousOffer,
    goToNextOffer,
    offerList,
    setOfferList,
    offerDetails,
    setOfferDetails,
    errorMessage,
    currentOfferIndex,
    handleClick1

  } = ServiceInternshipDetail()

    const { locale } = router;
    const t = locale === 'en' ? en : fr;



 

  const handleClick = (id: number) => {
    router.push(`/students/postuler/${id}`);
  };


  const handleSearch = () => {
    router.push("/students/offresStage");
  };


  return (
    <div className=" pl-10 pt-10">




      <div className="flex flex-col   md:flex-row  ">
        {offerDetails ? (
          <div className="flex-grow md:w-2/3 p-8">

            <div className="  bg-[#A87A38] p-3  text-xl text-start uppercase pl-8 font-bold text-white ">{t.searchDescription.descriptif}</div>

            <div

              className="bg-white/70   pl-8   p-2 shadow-sm mb-2 cursor-pointer hover:shadow-md transition-shadow"
            >
              <Image
                src={offerDetails.logo}
                alt="logo"
                width={200}
                height={20}
                className="mx-auto md:mx-0 object-contain"
              />

              <div className="flex flex-col  md:flex-row justify-between  gap-24 ">
                <Image
                  src={offerDetails.logo}
                  alt="logo"
                  width={200}
                  height={20}
                  className="mx-auto md:mx-0 object-contain"
                />
                <div className="flex-grow">
                  <div className=" flex flex-col  md:flex-row  gap-1">
                    <div className=" flex-1 pl-4 flex  justify-center items-center">
                      <h2 className="text-lg w-full text-start text-[#4A62AA] font-bold">{offerDetails.title}</h2>


                    </div>


                    {/* Offer Section */}
                    <div className="bg-[#4A62AA]   justify-   items-center">
                      <h2 className="text-lg px-7 text-center text-white ">{offerDetails.typeString}</h2>

                    </div>


                    <div className="bg-[#A87A38]  justify-center items-center">
                      <h2 className="text-lg px-7 text-center text-white ">{offerDetails.orgTypeString}</h2>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-24 sm:grid-cols-2  pl-4  gap-x-4">


                    <div className="flex flex-col items-start justify-center text-start gap-2">

                      <p className="text-[#A87A38] pt-4 text-start font-semibold">
                        {offerDetails.companyName}
                      </p>

                      <p className="flex items-start justify-start gap-x-2">
                        <Image src="/icons/timer.svg" alt="icon" width={24} height={20} />
                        {offerDetails.durationText}
                      </p>

                      <p className="flex items-start justify-center gap-x-2">
                        <Image src="/icons/location.svg" alt="icon" width={24} height={20} />
                        {offerDetails.city}
                      </p>
                    </div>
                    <div className="flex flex-col pt-8 items-end ml-44 mr-8 sm:items-end gap-4">
                      {offerDetails.levels.length > 0 && (
                        <p className="w-full sm:w-auto">
                          <span>{t.searchForm.level} : </span>
                          {offerDetails.levels.map((level: string, index: number) => (
                            <span className="text-sm" key={index}>{level}</span>
                          ))}
                        </p>
                      )}


                      <p className="  w-full sm:w-auto">
                        <span> {t.searchResult.published} :</span> {offerDetails.publishedOn}
                      </p>


                    </div>
                  </div>

                </div>

              </div>


            </div>

            <div className="bg-white pl-8 p-4">
              <div className="mt-4 text-black">
                <h3 className="text-md font-bold  text-[#4A62AA]">{t.searchDescription.presentation}</h3>
                <p>{offerDetails.description}</p>
              </div>
              <div className="mt-4 text-black">
                <h3 className="text-md font-bold  text-[#4A62AA]">{t.searchDescription.mission}</h3>
                <ul className="list-disc ml-6">
                  {offerDetails.tasks.map((task: string, index: number) => (
                    <li key={index}>{task}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 text-black">
                <h3 className="text-md font-bold  text-[#4A62AA]">{t.searchDescription.profil}</h3>
                 {offerDetails.degrees ? (
                  <div>
                    <p >
                      {t.searchDescription.diplome}
                    </p>
                    <ul className="list-disc ml-6">
                      {offerDetails.degrees.map((degree: string, index: number) => (
                        <li key={index}>{degree}</li>
                      ))}
                    </ul>  </div>) : (
                  <p> </p>
                )}

              
                {offerDetails.skills ? (
                  <div>
                    <p >
                     {t.searchDescription.competence}
                    </p>
                    <ul className="list-disc ml-6">
                      {offerDetails.skills.map((degree: string, index: number) => (
                        <li key={index}>{degree}</li>
                      ))}
                    </ul>  </div>) : (
                  <p> </p>
                )}
              </div>

              {offerDetails.salary ? (
                <div className="mt-4 text-black">
                  <h3 className="text-md font-bold  text-[#4A62AA]">{t.searchDescription.payement}</h3>
                  <p> {offerDetails.salary}   {offerDetails.currency}  {offerDetails.payPeriod}</p>
                </div>) : (
                <p> </p>
              )}
              {offerDetails.beginDate ? (
                <div className="mt-4 text-black">
                  <h3 className="text-md font-bold  text-[#4A62AA]">{t.searchDescription.debut}</h3>
                  <p>{offerDetails.beginDate}</p>
                </div>) : (
                <p> </p>
              )}


              {offerDetails.deadline ? (
                <div className="mt-4 text-black">
                  <h3 className="text-md font-bold  text-[#4A62AA]">{t.searchDescription.dLimite}</h3>
                  <p>{offerDetails.deadline}</p>
                </div>) : (
                <p> </p>
              )}


              <div className="  flex flex-row gap-24">
                <div className="flex  mr-10 mt-6 justify-start flex-row gap-12">
                  <button onClick={handleSearch} className=" bg-[#4A62AA]  text-white px-6 py-2 rounded-2xl hover:bg-blue-200  hover:text-[#4A62AA]">
                  {t.searchResult.nexSearch}
                  </button>
                  <button onClick={handleClick1} className=" bg-[#2848a8]  text-white px-6 py-2 rounded-2xl hover:bg-gray-200  hover:text-[#4A62AA]">
                  {t.searchDescription.Retour}
                  </button>
                </div>
                <div className="flex gap-4  mt-6 justify-end">
                  <button
                    onClick={goToPreviousOffer}

                    className={`px-4 py-2 rounded-2xl ${currentOfferIndex === 0 ? 'bg-gray-300 cursor-not-allowed' : ''} bg-[#4A62AA]  hover:bg-blue-200 hover:text-[#4A62AA] text-white`}
                  >
                    ←
                  </button>

                  <button key={offerDetails.id} onClick={() => handleClick(offerDetails.id)} className=" bg-[#A87A38] flex font-bold justify-end text-white px-10 py-2 rounded-2xl hover:bg-blue-200  hover:text-[#4A62AA]">
               {t.searchDescription.Postuler}
                  </button>
                  <button
                    onClick={goToNextOffer}
                    disabled={currentOfferIndex === offerList.length - 1}
                    className={`px-4 py-2 rounded-2xl ${currentOfferIndex === offerList.length - 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#4A62AA] hover:bg-blue-200 hover:text-[#4A62AA]'} text-white`}
                  >
                    →
                  </button>
                </div>

              </div>
            </div>

          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
      <div className="flex  mr-10 my-4 justify-end flex-row gap-16">


      </div></div>
  );
};
