"use client";
import React, { useRef } from "react";
import { useEffect, useState } from "react";
import Navbar from "../../navbar/navbar";
import FooterMobile from "../../footer/footerEnd";


export default function AtoutComponentMobile() {
    const [open, setOpen] = useState(null);
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
                    <div className="justify-center p-2 text-center text-xl font-bold uppercase bg-[#9b6e0f] hover:bg-[#dac393] text-white">

                        <p>
                            ATOUTS DE L’ENSEIGNEMENT SUPÉRIEUR CAMEROUNAIS

                        </p>  </div>



                    <div className="mt-8   text-black bg-white/70 p-2 space-y-4">


                        <div className="mt-1  text-black bg-white/60 p-4 space-y-4">
                            <div >
                                <p className="text-[#4A62AA] text-start my-2 font-bold">
                                    ■  Bilinguisme & biculturalisme
                                </p>
                                <p>
                                    Le Cameroun a deux langues officielles : l’anglais et le français ; ce double héritage culturel et linguistique rejaillit également dans le système éducatif. Le bilinguisme est consacré au niveau de l’enseignement supérieur. Dans les niveaux inférieurs (maternel, primaire, secondaire), c’est le biculturalisme à travers un sous-système francophone d’inspiration française et un sous-système anglophone d’inspiration anglo-saxonne.
                                </p>
                            </div>
                            <div >
                                <p className="text-[#4A62AA] text-start my-2 font-bold">
                                    ■  Implémentation du Système LMD (Licence – Master – Doctorat)
                                </p>
                                <p>
                                    Le système LMD facilite la mobilité et la flexibilité des étudiants dans la construction des parcours ; d’autre part, la comparaison et les équivalences des enseignements, titres et diplômes à l’étranger.
                                </p>
                            </div>
                            <div >
                                <p className="text-[#4A62AA] text-start my-2 font-bold">
                                    ■       Siège de nombreuses institutions transnationales et Pôles d’excellence régionaux
                                </p>
                                <p>
                                    Le Cameroun abrite plusieurs institutions transnationales (ISSEA, IIA, IAI, etc.) ; mais également, des pôles d’excellence régionaux à l’instar du Centre d’Excellence Africain en Technologies de l’Information et de la Communication, l’AIMS, etc.
                                </p>
                            </div>
                            <div >
                                <p className="text-[#4A62AA] text-start my-2 font-bold">
                                    ■   Offre quantitative et qualitative satisfaisante d’Institutions privées d’enseignement supérieur (IPES)
                                </p>
                                <p>
                                    Le Cameroun compte plus de 340 IPES agréées laïques et confessionnelles dont plusieurs jouissent d’une excellente réputation à l’extérieur, notamment à travers des conventions de partenariat et de coopération avec des universités de nombreux pays d’Afrique ou d’Europe.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="w-full bg-blue-900    mt-10 text-white text-center">
                <FooterMobile />
              </footer>
            </div>
 
        </div>

    );
}