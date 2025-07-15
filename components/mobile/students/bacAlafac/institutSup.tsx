"use client";
import React, { useRef } from "react";
import { useEffect, useState } from "react";
import UnivPublique from "./tableUniversieEtat";
import IPESLaiques from "./tableIPESLaiques";
import IPESConfess from "./tableIPESConfess";
import PublicSup from "./tablePublicSup";
import PublicAStatutParticuler from "./tableEtablisseemntPublic";
import Navbar from "../../navbar/navbar";
import TransNational from "@/components/mobile/students/bacAlafac/tableTransnationale";
import FooterMobile from "../../footer/footerEnd";



export default function InstitutionComponentMobile() {
    const [open, setOpen] = useState(null);
    const handleToggle = (index: any) => {
        setOpen(open === index ? null : index);
    };


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
                           INSTITUTIONS du supérieur
                        </p>  </div>

                    <div className="mt-8  space-y-4">
                        <div>

                            <div className="flex flex-col sm:flex-row gap-1">
                                <button
                                    className="w-full  py-2 px-4  bg-[#4c75f0] text-white flex justify-between "
                                    onClick={() => handleToggle(1)}
                                >
                                    <span className="flex-grow text-start"> Institutions publiques  </span>
                                    <span className="sm:ml-10 text-2xl">{open === 1 ? "▲" : "▼"}</span>
                                </button>


                            </div>

                            {open === 1 && (
                                <div className="bg-white/60 p-2">
                                    <div className="w-full">
                                        <div className="bg-white/60 p-2 pb-0 grid grid-cols-1 sm:grid-cols-[1fr_3fr] gap-8 mt-2">




                                            <div className="w-full ">
                                                <p className="p-4 text-black ">
                                                    Elles comprennent les Universités d’État, les Établissements à statut particulier et les autres Établissements non rattachés à une université.
                                                </p>
                                                <p className="p-4  font-bold text-[#d47f2f] text-xl">
                                                    Universités d’État
                                                </p>
                                                <p className="text-black p-4">
                                                    Le Cameroun compte  <b>onze (11) </b> Universités d’État :
                                                </p>                               <UnivPublique></UnivPublique>
                                                <div>

                                                    <p className="p-4 mt-4 font-bold text-[#d47f2f] text-xl">
                                                        Établissements publics à statut particulier
                                                    </p>
                                                    <PublicAStatutParticuler></PublicAStatutParticuler>
                                                </div>
                                                <p className="p-4 mt-4  font-bold text-[#d47f2f] text-xl">
                                                    Autres établissements publics supérieurs
                                                </p>
                                                <PublicSup></PublicSup>

                                            </div>



                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>
                    <div className="mt-2 space-y-4">
                        <div>

                            <div className="flex flex-col sm:flex-row gap-1">
                                <button
                                    className="w-full    py-2 px-4  bg-[#4c75f0] text-white  flex justify-between items-center sm:justify-center"
                                    onClick={() => handleToggle(2)}
                                >
                                    <span className="flex-grow text-start">Institutions privées d’enseignement supérieur (IPES)      </span>
                                    <span className="sm:ml-10 text-2xl">{open === 2 ? "▲" : "▼"}</span>
                                </button>


                            </div>

                            {open === 2 && (
                                <div className="bg-white/60 p-4">
                                    <div className="bg-white/80  ">
                                        <div className="w-full space-y-2 p-2 text-black">

                                            <p>
                                                Le Cameroun compte environ 350 IPES agréées fonctionnant sous le régime de l’autorisation, de l’agrément ou de l’homologation :
                                            </p>
                                            <div className="mt-6">
                                                <p>
                                                    <b> <span className="text-[#4A62AA] ">
                                                        a)
                                                    </span>  L’autorisation </b> habilite à ouvrir une IPES ; cette dernière ne délivre pas de diplôme mais prépare les étudiants aux examens nationaux.
                                                </p>
                                                <p>
                                                    <b> <span className="text-[#4A62AA] ">
                                                        b)
                                                    </span> L’agrément </b> est la reconnaissance du fonctionnement effectif et régulier de l’IPES considérée ; il donne droit à l'ouverture des filières, à la formation et à la présentation des candidats aux diplômes nationaux dans le respect des normes fixées par des textes particuliers.
                                                </p>
                                                <p>
                                                    <b> <span className="text-[#4A62AA] ">
                                                        c)
                                                    </span>  L’homologation </b> autorise l'IPES à délivrer des diplômes nationaux de manière autonome.
                                                </p>



                                            </div>
                                            <p className="mt-10">
                                                Quelques IPES réputées :
                                            </p>
                                            <div className="bg-[#4A62AA]  p-4">
                                                <p className="text-white text-xl text-center   font-bold">

                                                    IPES Laïques

                                                </p>
                                            </div>
                                            <IPESLaiques></IPESLaiques>
                                            <div className="bg-[#9C824A]  p-4">
                                                <p className="text-white text-center  text-xl  font-bold">

                                                    IPES Confessionnelles

                                                </p>

                                            </div>
                                            <IPESConfess></IPESConfess>
                                            <div className="bg-white p-6 space-y-2">

                                                <p className="text-[#4A62AA] uppercase  font-bold">
                                                    Nota Bene
                                                </p>
                                                <p>
                                                    Chaque IPES créée est placée sous la tutelle d’une Université d’État qui garantit la qualité de ses enseignements et la validité de ses diplômes. Toutefois, à la faveur d’accords de siège, l’Université Catholique d’Afrique Centrale et l’Université Adventiste COSENDAI font office d’exception et délivrent leurs propres titres et grades reconnus par l’État (régime de l’homologation).
                                                </p>
                                            </div>
                                            <div className="bg-white p-6 space-y-2">

                                                <p className="text-red-500 uppercase  font-bold">
                                                    Avertissement !
                                                </p>
                                                <p>
                                                    ‒  Au terme de ses sessions annuelles, la Commission Nationale de l’Enseignement Supérieur Privé inflige des sanctions aux IPES qui enfreignent la réglementation : du blâme ou de l’avertissement assorti de la fermeture des cycles et/ou des filières non autorisés, etc.  </p>

                                                <p className="text-red-500 ">
                                                    ‒ Avant de vous inscrire dans une IPES, vérifiez toujours que cette dernière possède une autorisation et un agrément valides pour les programmes, cycles et filières qu’elle propose ! Votre diplôme pourrait ne pas être reconnu par le MINESUP si cela n’est pas le cas.
                                                </p>

                                                <p>
                                                    ‒ <b>  Contactez-nous </b> pour obtenir le communiqué final de la dernière Session de la Commission Nationale de l’Enseignement Supérieur Privé indiquant les IPES sanctionnées.
                                                </p>
                                            </div>
                                        </div>





                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="mt-2 space-y-4">
                        <div>

                            <div className="flex flex-col sm:flex-row gap-1">
                                <button
                                    className="w-full    py-2 px-4  bg-[#4c75f0] text-white flex justify-between items-center sm:justify-center"
                                    onClick={() => handleToggle(3)}
                                >
                                    <span className="flex-grow text-start">Institutions sous-régionales et transnationales </span>

                                    <span className="sm:ml-10 text-2xl">{open === 3 ? "▲" : "▼"}</span>
                                </button>


                            </div>

                            {open === 3 && (
                                <div className="bg-white/60 p-2">
                                    <div className="w-full bg-white p-2  md:px-0">

                                        <p className="text-black p-2">
                                            Le Cameroun en abrite une dizaine, à savoir :
                                        </p>


                                        <TransNational></TransNational>
                                    </div>

                                </div>
                            )}
                        </div>



                    </div>

                    <div className="mt-2 space-y-4">
                        <div>

                            <div className="flex flex-col sm:flex-row gap-1">
                                <button
                                    className="w-full py-2 px-4 text-center bg-[#4c75f0] text-white flex items-center justify-between"
                                    onClick={() => handleToggle(7)}
                                >
                                    <span className="flex-grow text-start"> Références bibliographiques</span>
                                    <span className="sm:ml-10 text-2xl">{open === 7 ? "▲" : "▼"}</span>
                                </button>


                            </div>

                            {open === 7 && (
                                <div className="bg-white/60 p-4">
                                    <div className="bg-white/80 text-black p-4 ">

                                        <div className="w-full">
                                            <p>

                                                ‒ <i className="text-[#4A62AA] "> Répertoire de l’offre de formation de l’Enseignement Supérieur au Cameroun. </i>
                                                Édition 2022.
                                            </p>

                                            <p>

                                                ‒  <i className="text-[#4A62AA] "> Annuaire Statistique 2019  </i>
                                                du Ministère de l’Enseignement Supérieur.
                                            </p>
                                            <p>

                                                ‒
                                                Site web des différents établissements.
                                            </p>



                                        </div>





                                    </div>
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