"use client";
import React, { useRef } from "react";
import { useEffect, useState } from "react";

import Link from "next/link";
import UnivPublique from "./tableUniversieEtat";
import IPESLaiques from "./tableIPESLaiques";
import IPESConfess from "./tableIPESConfess";
import PublicSup from "./tablePublicSup";
import PublicAStatutParticuler from "./tableEtablisseemntPublic";
import TransNational from "./tableTransnationale";
import { div } from "framer-motion/client";



export default function InstitutionComponent() {
    const [open, setOpen] = useState(null);
    const handleToggle = (index: any) => {
        setOpen(open === index ? null : index);
    };

    const [open1, setOpen1] = useState(null);
    const handleToggle1 = (index: any) => {
        setOpen1(open1 === index ? null : index);
    };

    return (

        <div className="flex flex-col   md:flex-row  ">
            <div className="flex-grow md:w-2/3 p-8">

                <div className="  mt-1">

                    <div className="flex w-full gap-2 text-white font-bold">

                        <div className="p-2 px-2  uppercase  w-[35%] text-2xl text-center bg-[#9C824A] hover:bg-[#a19478]  h-20 flex items-center justify-center">

                            <Link href="/students/bacAlafac/bac_fac"> Orientation</Link>
                        </div>


                        <div className="p-3 px-8  text-xl text-center  uppercase bg-[#A87A38] h-12 mt-4 flex items-center justify-center">
                            INSTITUTIONS du supérieur
                        </div>

                    </div>
                    <div className="flex flex-row my-4 gap-1">
                        <div className="flex-1  ">
                        </div>
                        <div className="flex-2 bg-white  text-black p-4 text-end"> <p className="">
                            Le succès n’est pas la clé du bonheur. Le bonheur est la clé du succès. <br />  Si vous aimez ce que vous faites, vous réussirez.
                            <br />  <span className="text-[#4A62AA] font-semibold "> Albert Schweitzer</span>
                        </p>

                        </div>
                    </div>





                    <div className="mt-12 space-y-4">
                        <div>


                            <button
                                className="py-2 px-4 w-full bg-white/80 text-[#4A62AA]  text-xl font-bold flex justify-between items-center"
                                onClick={() => handleToggle(2)}
                            >
                                <span>Institutions publiques   </span>
                                <span className="text-2xl">{open === 2 ? "▲" : "▼"}</span>
                            </button>


                            {open === 2 && (
                                <div className="bg-white/80  ">

                                    <div className="w-fullp ">
                                        <p className="p-8 text-black ">
                                            Elles comprennent les Universités d’État, les Établissements à statut particulier et les autres Établissements non rattachés à une université.
                                        </p>

                                        <button
                                            className="p-4   my-2  w-full bg-white font-bold text-[#d47f2f] flex gap-8 text-xl  justify-between items-center"
                                            onClick={() => handleToggle1(1)}
                                        >
                                            <div className="flex flex-row  gap-6">
                                                <div>
                                                    <img src="/icons/puces_1.png" alt="" className="w-8" />
                                                </div>  <div>
                                                    Universités d’État
                                                </div>
                                            </div>
                                            <span className="text-2xl">{open1 === 1 ? "▲" : "▼"}</span>
                                        </button>
                                        {open1 === 1 && (
                                            <div>
                                                <p className="text-black p-8">
                                                    Le Cameroun compte  <b>onze (11) </b> Universités d’État :
                                                </p>                               <UnivPublique></UnivPublique>
                                            </div>)}

                                        <button
                                            className="p-4  my-2   w-full bg-white font-bold text-[#d47f2f] flex gap-8 text-xl  justify-between items-center"
                                            onClick={() => handleToggle1(2)}
                                        >
                                              <div className="flex flex-row  gap-6">
                                                <div>
                                                    <img src="/icons/puces_1.png" alt="" className="w-8" />
                                                </div>  <div>
                                           Établissements publics à statut particulier
                                                </div>
                                            </div>
                                          
                                            <span className="text-2xl">{open1 === 2 ? "▲" : "▼"}</span>
                                        </button>
                                        {open1 === 2 && (
                                            <div>
                                                <p className="text-black p-8">

                                                </p>                                   <PublicAStatutParticuler></PublicAStatutParticuler>
                                            </div>)}

                                        <button
                                            className="p-4 my-2  w-full bg-white font-bold text-[#d47f2f] flex gap-8 text-xl  justify-between items-center"
                                            onClick={() => handleToggle1(3)}
                                        >
                                            <div className="flex flex-row  gap-6">
                                                <div>
                                                    <img src="/icons/puces_1.png" alt="" className="w-8" />
                                                </div>  <div>
                          Autres établissements publics supérieurs
                                                </div>
                                            </div>
                                          
                                            <span className="text-2xl">{open1 === 3 ? "▲" : "▼"}</span>
                                        </button>
                                        {open1 === 3 && (
                                            <div>
                                                <p className="text-black p-8">

                                                </p>                                      <PublicSup></PublicSup>
                                            </div>)}


                                    </div>




                                </div>)}


                        </div>


                    </div>




                    <div className="mt-1 space-y-4">
                        <div>


                            <button
                                className="py-2 px-4 w-full bg-white/80 text-[#4A62AA]  text-xl font-bold flex justify-between items-center"
                                onClick={() => handleToggle(4)}
                            >
                                <span>Institutions privées d’enseignement supérieur (IPES)              </span>
                                <span className="text-2xl">{open === 4 ? "▲" : "▼"}</span>
                            </button>


                            {open === 4 && (
                                <div className="bg-white/80  ">
                                    <div className="w-full space-y-2 p-8 text-black">

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
                                        <div className="bg-[#dfe5f8]  p-4">
                                            <p className="text-[#4A62AA] text-xl ml-2  mt-10 font-bold">

                                                IPES Laïques

                                            </p>
                                            <IPESLaiques></IPESLaiques> </div>
                                        <div className="bg-[#f5f2e4]  p-4">
                                            <p className="text-[#9C824A]  ml-3  text-xl mt-10 font-bold">

                                                IPES Confessionnelles

                                            </p>
                                            <IPESConfess></IPESConfess>
                                        </div>
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
                                                ‒ Contactez-nous pour obtenir le communiqué final de la dernière Session de la Commission Nationale de l’Enseignement Supérieur Privé indiquant les IPES sanctionnées.
                                            </p>
                                        </div>
                                    </div>





                                </div>)}


                        </div>


                    </div>
                    <div className="mt-1 space-y-4">
                        <div>


                            <button
                                className="py-2 px-4 w-full bg-white/80 text-[#4A62AA]  text-xl font-bold flex justify-between items-center"
                                onClick={() => handleToggle(5)}
                            >
                                <span>Institutions sous-régionales et transnationales
                                </span>
                                <span className="text-2xl">{open === 5 ? "▲" : "▼"}</span>
                            </button>


                            {open === 5 && (
                                <div className="bg-white/80 p-4 ">

                                    <div className="w-full space-y-2">


                                        <p className="text-black">
                                            Le Cameroun en abrite une dizaine, à savoir :
                                        </p>


                                    </div>

                                    <TransNational></TransNational>














                                </div>)}


                        </div>


                    </div>

                    <div className="mt-1 space-y-4">
                        <div>


                            <button
                                className="py-2 px-4 w-full bg-white/80 text-[#4A62AA]  text-xl font-bold flex justify-between items-center"
                                onClick={() => handleToggle(8)}
                            >
                                <span>Références bibliographiques

                                </span>
                                <span className="text-2xl">{open === 8 ? "▲" : "▼"}</span>
                            </button>


                            {open === 8 && (
                                <div className="bg-white/80 text-black p-4 ">

                                    <div className="w-full">
                                        <p>

                                            ‒

                                            <i className="text-[#4A62AA] "> Répertoire de l’offre de formation de l’Enseignement Supérieur au Cameroun. </i>
                                            Édition 2022.
                                        </p>

                                        <p>

                                            ‒
                                            <i className="text-[#4A62AA] "> Annuaire Statistique 2019  </i>
                                            du Ministère de l’Enseignement Supérieur.
                                        </p>
                                        <p>

                                            ‒
                                            Site web des différents établissements.
                                        </p>



                                    </div>





                                </div>)}


                        </div>


                    </div>

                </div>
            </div>
        </div>





    );
}