"use client";


import { useEffect, useState } from "react";
import Image from "next/image";
import FormJPO from "./calendar";
import UseJPOService from "@/service/service_jpo";

import en from '@/i18/en/student/jpo.json';
import fr from '@/i18/fr/student/jpo.json';
import { useRouter } from "next/router";



export default function JPO() {


    const router = useRouter();

  const { locale } = router;
    const t = locale === 'en' ? en : fr;
    const {
        errorMessage,
        opendays,
        loading,
        setOpendays,
        setErrorMessage,
        searchResults,
        searchTriggered
    } = UseJPOService()










   
     return (
  <div className="flex flex-col md:flex-row">
    <div className="flex-grow md:w-2/3 p-8">
      <div className="flex flex-col gap-1 pt-2 mt-8">
        <div className="flex flex-row">
          <div className="text-white text-xl text-center font-extrabold w-full uppercase p-2 cursor-pointer">
            {t.jpo.title}
          </div>
        </div>

        <div className="bg-white/70 border-1 p-6 text-start border-[#4A62AA]">
          <p className="text-[#4A62AA] font-bold text-xl">
            {t.jpo.heading}
          </p>
          <p className="p-2 text-black">
            {t.jpo.description}
          </p>
        </div>
      </div>

      <div className="">
        <div className="flex my-10 items-center justify-center">
          <FormJPO />
        </div>

        {searchResults.map((item, index) => (
          <div
            key={item.id || index}
            className="grid grid-cols-[1fr_2fr] gap-8 bg-white p-4 my-4 border-4 border-x-0 border-[#A87A38]"
          >
            <div>
              <img
                src="/images/backgroundEtudiant.jpeg"
                alt=""
                className="w-60 h-40 border-2 border-white shadow-md cursor-pointer"
              />
            </div>
            <div className="max-w-4xl text-black">
              <h3 className="text-[#4A62AA]">{item.schoolName}</h3>
              <div className="flex flex-row gap-4">
                <Image src="/icons/timer.svg" alt="icon" width={20} height={20} />
                <p className="text-black font-bold">
                  {item.day} - {item.month} - {item.year} | {item.beginTime}-{item.endTime} | {t.jpo.title}
                </p>
              </div>
              <p className="mt-8">{item.text}</p>
              <div className="flex flex-row gap-4">
                <Image src="/icons/location.svg" alt="icon" width={20} height={20} />
                <p>{item.city} {item.address}</p>
              </div>
              <div className="flex flex-row gap-4">
                <Image src="/icons/icons8-web-50.png" alt="icon" width={20} height={20} />
                <a href={item.url} className="text-[#4A62AA]">{item.url}</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        {searchTriggered ? (
          searchResults.length > 0 ? (
            <div className="space-y-4 px-4">
              {searchResults.map((item, index) => (
                <div
                  key={item.id || index}
                  className="grid grid-cols-[1fr_2fr] gap-8 bg-white p-4 my-4 border-4 border-x-0 border-[#A87A38]"
                >
                  <div>
                    <img
                      src="/images/backgroundEtudiant.jpeg"
                      alt=""
                      className="w-60 h-40 border-2 border-white shadow-md cursor-pointer"
                    />
                  </div>
                  <div className="max-w-4xl text-black">
                    <h3 className="text-[#4A62AA]">{item.schoolName}</h3>
                    <div className="flex flex-row gap-4">
                      <Image src="/icons/timer.svg" alt="icon" width={20} height={20} />
                      <p className="text-black font-bold">
                        {item.day} - {item.month} - {item.year} | {item.beginTime}-{item.endTime} | {t.jpo.title}
                      </p>
                    </div>
                    <p className="mt-8">{item.text}</p>
                    <div className="flex flex-row gap-4">
                      <Image src="/icons/location.svg" alt="icon" width={20} height={20} />
                      <p>{item.city} {item.address}</p>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Image src="/icons/icons8-web-50.png" alt="icon" width={20} height={20} />
                      <a href={item.url} className="text-[#4A62AA]">{item.url}</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center mt-6 text-black">{t.jpo.noResults}</p>
          )
        ) : (
          <div className="space-y-4 px-4">
            {opendays.map((item, index) => (
              <div
                key={item.id || index}
                className="grid grid-cols-[1fr_2fr] gap-8 bg-white p-4 my-4 border-4 border-x-0 border-[#A87A38]"
              >
                <div>
                  <img
                    src="/images/backgroundEtudiant.jpeg"
                    alt=""
                    className="w-60 h-40 border-2 border-white shadow-md cursor-pointer"
                  />
                </div>
                <div className="max-w-4xl text-black">
                  <h3 className="text-[#4A62AA]">{item.schoolName}</h3>
                  <div className="flex flex-row gap-4">
                    <Image src="/icons/timer.svg" alt="icon" width={20} height={20} />
                    <p className="text-black font-bold">
                      {item.day} - {item.month} - {item.year} | {item.beginTime}-{item.endTime} | {t.jpo.title}
                    </p>
                  </div>
                  <p className="mt-8">{item.text}</p>
                  <div className="flex flex-row gap-4">
                    <Image src="/icons/location.svg" alt="icon" width={20} height={20} />
                    <p>{item.city} {item.address}</p>
                  </div>
                  <div className="flex flex-row gap-4">
                    <Image src="/icons/icons8-web-50.png" alt="icon" width={20} height={20} />
                    <a href={item.url} className="text-[#4A62AA]">{item.url}</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  </div>
);


 
}