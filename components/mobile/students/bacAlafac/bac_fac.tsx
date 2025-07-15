"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "../../navbar/navbar";
import FooterMobile from "../../footer/footerEnd";


export default function BacAlaFacMobile() {

    const [open, setOpen] = useState(null);


    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileMenuOpen2, setIsMobileMenuOpen2] = useState(false);



    return (
        <div>
             <div className="min-h-screen   bg-[#4A62AA]  overflow-auto  w-screen bg-cover  bg-center bg-no-repeat "  >
         
                <Navbar
                    isMobileMenuOpen={isMobileMenuOpen}
                    setIsMobileMenuOpen={setIsMobileMenuOpen}
                    isMobileMenuOpen2={isMobileMenuOpen2}
                    setIsMobileMenuOpen2={setIsMobileMenuOpen2}
                />


                <div className={`${isMobileMenuOpen ? "blur-sm " : ""
                    } ${isMobileMenuOpen2 ? "blur-sm " : ""
                    } `}>
                    <div className="justify-center  p-2 text-center text-xl font-bold uppercase bg-[#9b6e0f] hover:bg-[#dac393] text-white">
                        <p>     Orientation </p>
                    </div>

                    <div className="bg-white/70 mt-8  p-4  uppercase shadow-sm mb-2 hover:shadow-md transition-shadow">
                        <Link href="/students/bacAlafac/generalite">

                            <div className="flex items-center gap-2 py-2">
                                <img src="/icons/puces_1.png" alt="" className="w-5" />
                                <p className="text-[#4A62AA] font-bold hover:text-[#A87A38] ">Généralités sur le supérieur </p>
                            </div>
                        </Link>
 
                        <Link href="/students/bacAlafac/institutSup">

                            <div className="flex items-center gap-2 py-2">
                                <img src="/icons/puces_1.png" alt="" className="w-5" />
                                <p className="text-[#4A62AA] font-bold hover:text-[#A87A38] ">Institutions du supérieur</p>
                            </div>
                        </Link>
 <Link href="/students/bacAlafac/preparerSonBac">

                            <div className="flex items-center gap-2 py-2">
                                <img src="/icons/puces_1.png" alt="" className="w-5" />
                                <p className="text-[#4A62AA] font-bold hover:text-[#A87A38] ">Préparer son baccalauréat</p>  </div>
                        </Link>
                       

                      

                        <Link href="/students/bacAlafac/CursusSup">


                            <div className="flex items-center gap-2 py-2">
                                <img src="/icons/puces_1.png" alt="" className="w-5" />
                                <p className="text-[#4A62AA] font-bold hover:text-[#A87A38] "> Choisir son cursus supérieur </p>
                            </div>
                        </Link>

                        <Link href="/students/bacAlafac/Handicap">
                            <div className="flex items-center gap-2 py-2">
                                <img src="/icons/puces_1.png" alt="" className="w-5" />
                                <p className="text-[#4A62AA] font-bold hover:text-[#A87A38] "> Handicap et études supérieures </p>
                            </div>
                        </Link>

                        <Link href="/students/bacAlafac/etudeEtranger">
                            <div className="flex items-center gap-2 py-2">
                                <img src="/icons/puces_1.png" alt="" className="w-5" />
                                <p className="text-[#4A62AA] font-bold hover:text-[#A87A38] "> Étudier à l’étranger</p>
                            </div>
                        </Link>

 <Link href="/students/bacAlafac/atout">

                            <div className="flex items-center gap-2 py-2">
                                <img src="/icons/puces_1.png" alt="" className="w-5" />
                                <p className="text-[#4A62AA] font-bold hover:text-[#A87A38] "> Atouts du supérieur Camerounais</p>
                            </div>
                        </Link>

                        <Link href="/students/bacAlafac/lexique">

                            <div className="flex items-center gap-2 py-2">
                                <img src="/icons/puces_1.png" alt="" className="w-5" />
                                <p className="text-[#4A62AA] font-bold hover:text-[#A87A38] ">Lexique</p>
                            </div>
                        </Link>
                    </div>






                </div>
                
            </div>
 <footer className="w-full bg-blue-900    text-white text-center">
                                                        <FooterMobile />
                                                      </footer> 
        </div>
    );
}
