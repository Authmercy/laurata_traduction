"use client";
import { URLS } from "@/service/url";
import Link from "next/link";
import router from "next/router";
import React, { useEffect, useMemo, useRef, useState } from "react";
import en from '../../../../i18/en/student/metier.json';
import fr from '../../../../i18/fr/student/metier.json';
import { useRouter } from "next/router";

type Jobsheet = {
  id: number;
  title: string;
  descriptions: string[];
  languageCode: string;
  skills: string[];
  jobsText: string;
  jobs: string[];
  pathToJobOutro: string;
  pathToJobSchools: string[];
  pathToJobDegrees: string;
  pathToJobIntro: string[];

};


export default function MetierComponent() {
  const router = useRouter();

  const { locale } = router;
  const t = locale === 'en' ? en : fr;
  const handleClick = (letter: string) => {

    router.push(`/students/metier/${letter}`);
  };
  const [jobsheet, setJobsheet] = useState<Jobsheet[]>([]);

  const [loading, setLoading] = useState(true);
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);

  const jobsheetByLetter = useMemo(() => {
    const grouped: { [key: string]: Jobsheet[] } = {};
    jobsheet.forEach((item) => {
      const firstLetter = item.title[0]?.toUpperCase();
      if (!firstLetter.match(/[A-Z]/)) return;
      if (!grouped[firstLetter]) grouped[firstLetter] = [];
      grouped[firstLetter].push(item);
    });
    return grouped;
  }, [jobsheet]);

  useEffect(() => {
    async function fetchJobsheet() {
      try {
        const BACKEND_URL = URLS.JOBSHEET;
        if (!BACKEND_URL) {
          throw new Error("Environment variable URLS.JOBSHEET is not defined");
        }
        const url = new URL(BACKEND_URL);

        const response = await fetch(url.toString(), {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            locale: "fr",
          },
        });


        const data = await response.json();


        setJobsheet(Array.isArray(data) ? data : [data]);
        sessionStorage.setItem("letterClicked", JSON.stringify(data));
      } catch (error) {
        console.error('Error fetching feeds:', error);

      } finally {
        setLoading(false);
      }
    }

    fetchJobsheet();
  }, []);

  return (
    <div className="flex flex-col p-2  mt-8 after:md:pl-8 text-black">
      <div className="flex w-full gap-2 ml-12  text-white font-bold">
        <div className="p-2 px-2  uppercase  w-[35%] text-2xl text-center bg-[#9C824A]  hover:bg-[#a19478] h-20 flex items-center justify-center">

          <Link href="/students/metier/metier">
            {t.professions}</Link>
        </div>


        <div className="p-3 px-8  text-xl text-center bg-[#A87A38] h-12 mt-4 flex items-center justify-center">
          {t.jobSheets}
        </div>


      </div>
      <div className="flex flex-grow pl-6 gap-1 w-full">

        <div className="flex justify-center flex-col w-full">
          <div className="flex flex-grow flex-col items-center justify-center w-full p-6">



            <div className="mt-6 bg-white/70 text-black p-4 w-full flex-grow">
              <p>
                {t.jobSheetIntro} </p>
              <div className="flex flex-row mt-4 gap-1">
                <div className="flex-1">
                  <img src="/images/concoursBourse.jpg" alt="" className="h-[100%] " />
                </div>
                <div className=" flex-1  grid grid-cols-4 gap-2 w-full">
                  {Array.from({ length: 26 }, (_, index) => {
                    const letter = String.fromCharCode(65 + index);

                    const hasData = jobsheetByLetter[letter]?.length > 0;
                    const isSelected = selectedLetter === letter;

                    const buttonClasses = `
              py-2 px-4 border rounded font-bold text-white
              ${hasData ? 'bg-[#6d81be] hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'}
            `;
                    return (
                      <button
                        key={letter}
                        id={letter}
                        disabled={!hasData}
                        onClick={() => {
                          if (hasData) {
                            router.push(`/students/metier/${letter}`);
                          }
                        }}
                        className={buttonClasses}
                      >
                        {letter}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};