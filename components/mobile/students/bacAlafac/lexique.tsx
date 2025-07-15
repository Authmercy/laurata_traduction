"use client";
import React, { useMemo, useRef } from "react";
import { useEffect, useState } from "react";
import Navbar from "../../navbar/navbar";
import FooterMobile from "../../footer/footerEnd";
import { URLS } from "@/service/url";

type Glossary = {
    id: number;
    name: string;
    text: string;

};

export default function LexiqueComponentMobile() {
    const [open, setOpen] = useState(null);
    const handleToggle = (index: any) => {
        setOpen(open === index ? null : index);
    };
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



    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileMenuOpen2, setIsMobileMenuOpen2] = useState(false);



    return (
        <div>
            <div className="min-h-screen   bg-[#4A62AA] text-black overflow-auto  w-screen bg-cover  text-justify bg-center bg-no-repeat "  >
       
                <Navbar
                    isMobileMenuOpen={isMobileMenuOpen}
                    setIsMobileMenuOpen={setIsMobileMenuOpen}
                    isMobileMenuOpen2={isMobileMenuOpen2}
                    setIsMobileMenuOpen2={setIsMobileMenuOpen2}
                />

                <div className={`${isMobileMenuOpen ? "blur-sm " : ""
                    } ${isMobileMenuOpen2 ? "blur-sm " : ""
                    } `}>
                    <div className="justify-center p-2 text-center text-xl font-bold uppercase bg-[#9b6e0f] hover:bg-[#dac393] text-white">

                        <p>
                            LEXIQUE
                        </p>  </div>



                    <div className="text-black bg-white/70 p-4 md:p-8 space-y-4">
                        <p>Petit lexique des termes usuels pour vous familiariser avec le vocabulaire du supérieur.</p>
                        <div className="w-full">
                            <div className="flex flex-wrap gap-2 w-full">
                                {Array.from({ length: 26 }, (_, index) => {
                                    const letter = String.fromCharCode(65 + index);
                                    const hasData = glossaryByLetter[letter]?.length > 0;
                                    const isSelected = selectedLetter === letter;

                                    const buttonClasses = `
                  py-2 px-4 border rounded font-bold text-white
                  ${isSelected ? 'bg-[#A87A38] hover:bg-orange-500' : hasData ? 'bg-[#6d81be] hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'}
                `;

                                    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
                                    const [isMobileMenuOpen2, setIsMobileMenuOpen2] = useState(false);

                                    return (
                                        <button
                                            key={letter}
                                            id={letter}
                                            className={buttonClasses}
                                            onClick={() => hasData && setSelectedLetter(letter)}
                                            disabled={!hasData}
                                        >
                                            {letter}
                                        </button>
                                    );
                                })}
                            </div>

                            {selectedLetter && glossaryByLetter[selectedLetter] && (
                                <div className="mt-4 overflow-x-auto">
                                    <table className="w-full text-left border-2 border-gray-300">
                                        <tbody>
                                            {glossaryByLetter[selectedLetter].map((entry, index) => (
                                                <tr
                                                    key={index}
                                                    className={`text-black ${index % 2 === 0 ? 'bg-white' : 'bg-[#becbf3]/70'}`}
                                                >
                                                    <td className="border text-[#4A62AA] font-bold p-2 px-4 align-top">{entry.name}</td>
                                                    <td className="border p-2 px-4 align-top">{entry.text}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
              <footer className="w-full bg-blue-900    text-white text-center">
                            <FooterMobile />
                          </footer>
        </div>
    );
}