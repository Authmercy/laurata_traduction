"use client";
import { URLS } from "@/service/url";
import Link from "next/link";
import router from "next/router";
import React, { useEffect, useRef, useState } from "react";
import en from '@/i18/en/student/metier.json';
import fr from '@/i18/fr/student/metier.json';
import { useRouter } from "next/router";
import UseLanguageService from "@/service/language_switch";


type Metier = {
  id: number;
  category: string;
  name: string;
  description: string;
};

export default function MetierPorterComponent() {
   const {

   headers


    } = UseLanguageService()
  const [metiers, setMetier] = useState<Metier[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMetier() {
      try {
        const BACKEND_URL = URLS.METIERS;
        if (!BACKEND_URL) {
          throw new Error("Environment variable URLS.METIERS is not defined");
        }
        const url = new URL(BACKEND_URL);
        url.searchParams.append("category", "PROMISING");
        const response = await fetch(url.toString(), {
          method: "GET",
          headers
        });

       
        const data = await response.json();


        setMetier(Array.isArray(data) ? data : [data]);
      } catch (error) {
        console.error('Error fetching feeds:', error);

      } finally {
        setLoading(false);
      }
    }

    fetchMetier();
  }, []);

    const router = useRouter();

    const { locale } = router;
    const t = locale === 'en' ? en : fr;

  const handleClick = (letter: string) => {

    router.push(`/students/metier/${letter}`);
  };
  return (
    <div className="flex flex-col p-2  mt-8 after:md:pl-8 text-black">
      <div className="flex w-full gap-2 ml-12  text-white font-bold">
        <div className="p-2 px-2  uppercase  w-[35%] text-2xl text-center bg-[#9C824A]  hover:bg-[#a19478] h-20 flex items-center justify-center">

          <Link href="/students/metier/metier">     {t.professions} </Link>
        </div>


        <div className="p-3 px-8  text-xl text-center bg-[#A87A38] h-12 mt-4 uppercase flex items-center justify-center">

            {t.promisingJobs} 
        </div>


      </div>
      <div className="flex flex-row mt-4 gap-1">
        <div className="flex-1  ">
        </div>
        <div className="flex-2 bg-white/70  text-black p-4 text-end"> <p className="">
          Développe une passion pour l’apprentissage ; si tu le fais, tu ne cesseras jamais de grandir.
          <br />  <span className="text-[#4A62AA] font-semibold "> Anthony J. D’Angelo </span>
        </p>

        </div>
      </div>
      <div className="flex flex-grow pl-6 gap-1 w-full">

        <div className="flex justify-center flex-col w-full">
          <div className="flex flex-grow flex-col items-center justify-center w-full pl-6 ">



            <div className="mt-6 bg-white text-black p-4 w-full flex-grow">
              <p>
               {t.promisingJobsIntro}   </p>


              <div className="mt-6">
                {metiers.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white mt-1 grid grid-cols-[1fr_3fr] gap-8 border-b border-gray-200"
                  >
                    <div className="font-bold bg-[#c8cddd]  p-4 text-end text-[#4A62AA]">
                      {item.name || "Métier non spécifié"}
                    </div>
                    <div className="  p-4 max-w-4xl">
                      <p className="text-black">
                        {item.description || "Aucune description disponible"}
                      </p>
                    </div>
                  </div>
                ))}

              </div>   </div>
          </div>
        </div>
      </div>
    </div>
  );
};