"use client";
import React, { useRef } from "react";
import Link from "next/link";
import UseBourseService from "@/service/service_bourse";

import en from '../../../../i18/en/student/concous_bourse.json';
import fr from '../../../../i18/fr/student/concous_bourse.json';
import { useRouter } from "next/router";


export default function BourseComponent() {

  const {

    errorMessage,

    setErrorMessage,
    handleToggle,
    open,
    regions,
    offers,
    handleClick

  } = UseBourseService()

 const router = useRouter();

  const { locale } = router;
  const t = locale === 'en' ? en : fr;

  return (

    <div className="flex flex-col   md:flex-row  ">
      <div className="flex-grow md:w-2/3 p-8">

        <div className="  mt-1">
          <div className="flex w-full gap-2 text-white font-bold">

            <div className="p-2 px-2  uppercase  w-[35%] text-2xl text-center bg-[#9C824A]  hover:bg-[#a19478] h-20 flex items-center justify-center">

              <Link href="/students/concoursBourse">  {t.scholarships.title}</Link>
            </div>


            <div className="p-3 px-8  text-xl text-center bg-[#A87A38] h-12 mt-4 flex items-center justify-center">
 {t.scholarships.subtitle}
            </div>
          </div>

          <div className="flex flex-row mt-4 gap-1">
            <div className="flex-1  ">
            </div>
            <div className="flex-2 bg-white  text-black p-4 text-end"> <p className="">
              {t.scholarships.quote}
              <br />  <span className="text-[#4A62AA] font-semibold "> Gustave Flaubert</span>
            </p>

            </div>
          </div>

          

               <div

                onClick={() => {
                  handleToggle(10);
                 
                }}
                className="py-2 px-4 mt-2 w-full bg-[#4A62AA] text-white font-bold flex justify-between items-center"
              >
                <span className="font-bold text-center text-xl">  {t.scholarships.guideTitle}</span>
                <span className="text-xl">{open === 10 ? "▲" : "▼"}</span>
              </div>


            {open === 10 && (
   <div className="mt-1  text-black bg-white/70 p-8 space-y-4">
       
            {t.scholarships.guideTips.map((tip, index) => (
  <p key={index}>
    <span className="text-[#4A62AA]">■</span>&nbsp;&nbsp;{tip}
  </p>
))}

<p>
  <span className="text-[#4A62AA] font-bold">NB:</span> {t.scholarships.note}
</p>

<p>
  <span className="text-[#e63636] font-bold">{t.scholarships.warningTitle}</span>
  <br />
  {t.scholarships.warningText}
</p>



          </div>
)}
          <div className="bg-[#A87A38] text-center p-3 mt-2">
            <p> <span className="text-white  text-xl uppercase font-bold">  {t.scholarships.tableTitle}
            </span>

            </p></div>

          {errorMessage && (
            <div className="text-red-600 text-center w-full py-4 bg-red-100 border border-red-300 rounded relative">
              <button
                className="absolute top-1 right-2 text-red-600 font-bold"
                onClick={() => setErrorMessage(null)}
              >

              </button>
              {errorMessage}
            </div>
          )}

          {regions.map((region, index) => (
            <div key={index}>

              <div

                onClick={() => {
                  handleToggle(index);
                  handleClick(region);
                }}
                className="py-2 px-4 mt-2 w-full bg-[#f1d9b6]/70 text-[#4A62AA] font-bold flex justify-between items-center"
              >
                <span className="font-bold text-center text-lg">{region.regionName} ({region.count})</span>
                <span className="text-xl">{open === index ? "▲" : "▼"}</span>
              </div>


            {open === index && (
    <div className="bg-white/70 w-full shadow-sm p-4">
        <table className="text-start border-collapse w-full">
            <thead>
                <tr>
                    <th>{t.scholarships.table.country}</th>
    <th>{t.scholarships.table.organization}</th>
    <th>{t.scholarships.table.descriptionLink}</th>
                </tr>
            </thead>
            <tbody>
                {offers
           
                    .map(offer => ({
                        ...offer,
                        countryName: offer.countryName || 'Tous pays'
                    }))
                
                    .sort((a, b) => {
             
                        if (a.countryName === 'Tous pays') return -1;
                        if (b.countryName === 'Tous pays') return 1;
                        return 0;
                        
                      
                    })
                    .map((offer, index) => (
                        <tr 
                            key={index} 
                            className={`text-black text-start ${
                                index % 2 === 0 ? 'bg-[#f1d9b6]/70' : 'bg-gray-200'
                            }`}
                        >
                            <td className="border border-x-0 font-bold p-4">
                                {offer.countryName}
                            </td>
                            <td className="border border-x-0 p-2">
                                {offer.sponsor}
                            </td>
                            <td className="border border-x-0 p-2">
                                <p>{offer.description}</p>
                                <p> {t.scholarships.table.linkLabel}:
                                    <a 
                                        href={offer.website} 
                                        className="text-[#4A62AA] hover:underline ml-1"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {offer.website}
                                    </a>
                                </p>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
)}
            </div>

          ))}
        </div>
      </div>
    </div>


  );
}