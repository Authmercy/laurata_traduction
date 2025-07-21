"use client";
import React, { useState, useEffect } from "react";

import Link from "next/link";


import en from '@/i18/en/student/metier.json';
import fr from '@/i18/fr/student/metier.json';
import { useRouter } from "next/router";


export default function MetierHome() {
   const router = useRouter();

    const { locale } = router;
    const t = locale === 'en' ? en : fr;

  return (
    <div className="p-2 md:pl-8 mt-14 text-black" >
      <div className="flex pl-6 gap-1 w-full">
        <div className="flex justify-center flex-col">
          <div className="flex justify-center">
            <h1 className=" bg-[#A87A38] text-white  text-2xl text-center font-extrabold w-full  p-2">


              {t.professions}
            </h1></div>
          <div className="bg-white/70 border-1 p-6 text-start border-[#4A62AA]">
            <div className="flex flex-row mt-4 gap-1">
              <div className="flex-1">
                <img src="/images/metier.jpg" alt="" />
              </div>
              <div className="flex-1 flex items-center justify-center">
                <div className="flex flex-col justify-center gap-4 text-2xl">
                  <Link href="/students/metier/fichesMetier">
                    <div className="flex items-center gap-2 py-2">
                      <img src="/icons/puces_1.png" alt="" className="w-5" />
                      <p className="text-[#4A62AA] font-bold  hover:text-[#A87A38]">
              {t.jobSheets}</p>
                    </div>
                  </Link>
                  <Link href="/students/metier/metierSansFormation">
                    <div className="flex items-center gap-2 py-2">
                      <img src="/icons/puces_1.png" alt="" className="w-5" />
                      <p className="text-[#4A62AA] font-bold  hover:text-[#A87A38]">
              {t.jobsWithoutTraining}</p>
                    </div>
                  </Link>
                  <Link href="/students/metier/metierSansDebouche">
                    <div className="flex items-center gap-2 py-2">
                      <img src="/icons/puces_1.png" alt="" className="w-5" />
                      <p className="text-[#4A62AA] font-bold  hover:text-[#A87A38]">
              {t.jobsWithoutProspects}</p>
                    </div>
                  </Link>

                  <Link href="/students/metier/metierPorteur">
                    <div className="flex items-center gap-2 py-2">
                      <img src="/icons/puces_1.png" alt="" className="w-5" />
                      <p className="text-[#4A62AA] font-bold  hover:text-[#A87A38]">
              {t.promisingJobs}</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>




        </div >



      </div>
    </div>

  );
}
