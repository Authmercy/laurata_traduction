"use client";
import React, { useMemo, useRef } from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { URLS } from "@/service/url";


type Glossary = {
  id: number;
  name: string;
  text: string;

};


export default function LexiqueComponent() {
  const [open, setOpen] = useState(null);
 
  const [glossary, setGlossary] = useState<Glossary[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);

  const glossaryByLetter = useMemo(() => {
    const grouped: { [key: string]: Glossary[] } = {};
    glossary.forEach((item) => {
      const firstLetter = item.name[0]?.toUpperCase();
      if (!firstLetter.match(/[A-Z]/)) return;
      if (!grouped[firstLetter]) grouped[firstLetter] = [];
      grouped[firstLetter].push(item);
    });
    return grouped;
  }, [glossary]);

  useEffect(() => {
    async function fetchGlossary() {
      try {
        const BACKEND_URL = URLS.GLOSSARY;
        if (!BACKEND_URL) {
          throw new Error("Environment variable URLS.GLOSSARY is not defined");
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


        setGlossary(Array.isArray(data) ? data : [data]);
      } catch (error) {
        console.error('Error fetching feeds:', error);

      } finally {
        setLoading(false);
      }
    }

    fetchGlossary();
  }, []);


  return (

    <div className="flex flex-col   md:flex-row  ">
      <div className="flex-grow md:w-2/3 p-8">

        <div className="  mt-1">

          <div className="flex w-full gap-2 text-white font-bold">

            <div className="p-2 px-2  uppercase  w-[35%] text-2xl text-center bg-[#9C824A] hover:bg-[#a19478]  h-20 flex items-center justify-center">

              <Link href="/students/bacAlafac/bac_fac"> Orientation</Link>
            </div>


            <div className="p-3 px-8  text-xl text-center bg-[#A87A38] h-12 mt-4 flex items-center justify-center">
              LEXIQUE
            </div>

          </div>

          <div className="flex flex-row my-4 gap-1">
            <div className="flex-1  ">
            </div>
            <div className="flex-2 bg-white  text-black p-4 text-end"> <p className="">
              Si vous ne pouvez pas encore faire de grandes choses, faites de petites choses de façon remarquable.
              <br />  <span className="text-[#4A62AA] font-semibold ">Napoleon Hill</span>
            </p>

            </div>
          </div>

          <div className="mt-1  text-black bg-white/70 p-8 space-y-4">
            <p>Petit lexique des termes usuels pour vous familiariser avec le vocabulaire du supérieur.</p>
            <div className="mt-6 text-black w-full flex-grow">
              <div className="flex flex-col gap-4 w-full">
                <div className="flex flex-row gap-2 w-full flex-wrap">
                  {Array.from({ length: 26 }, (_, index) => {
                    const letter = String.fromCharCode(65 + index);
                    const hasData = glossaryByLetter[letter]?.length > 0;
                    const isSelected = selectedLetter === letter;

                    const buttonClasses = `
              py-2 px-4 border rounded font-bold text-white
              ${isSelected ? 'bg-[#A87A38] hover:bg-orange-500' : hasData ? 'bg-[#6d81be] hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'}
            `;

                    return (
                      <button
                        key={letter}
                        className={buttonClasses}
                        onClick={() => hasData && setSelectedLetter(letter)}
                        disabled={!hasData}
                      >
                        {letter}
                      </button>
                    );
                  })}
                </div>
              </div>

              {selectedLetter && glossaryByLetter[selectedLetter] && (
                <div className="mt-4">
                  <table className="w-full text-left border-2 border-gray-300">
                    <tbody>
                      {glossaryByLetter[selectedLetter].map((entry, index) => (
                        <tr
                          key={entry.id}
                          className={`text-black ${index % 2 === 0 ? 'bg-white' : 'bg-[#becbf3]/70'}`}
                        >
                          <td className="border text-[#4A62AA] font-bold p-2 px-4 align-top">
                            {entry.name}
                          </td>
                          <td className="border p-2 px-4 align-top">{entry.text}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {loading && <p>Chargement du glossaire...</p>}
            </div>
          </div>
        </div>

      </div>
    </div>






  );
}