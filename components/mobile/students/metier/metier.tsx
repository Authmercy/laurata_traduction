"use client";
import router from "next/router";
import React, { useEffect, useMemo, useRef, useState } from "react";
import Navbar from "../../navbar/navbar";
import { URLS } from "@/service/url";
import FooterMobile from "../../footer/footerEnd";


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
export default function MetierComponentMobile() {

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
            <p>             Fiches métiers</p>
          </div>


          <div

            className="bg-white/70   mt-2  p-2 py-4 shadow-sm mb-2 hover:shadow-md transition-shadow"
          >
            <div className="mt-6 bg-white/70 text-black p-4 w-full flex-grow">
              <p>
                Cliquez sur les lettres pour consulter les fiches métiers s'y rapportant.
              </p>
              <div className="flex flex-row mt-4 gap-1">

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
                </div></div>
            </div>

          </div>

        </div>
      </div>
     <footer className="w-full bg-blue-900    text-white text-center">
                                            <FooterMobile />
                                          </footer>
    </div>

  );
};