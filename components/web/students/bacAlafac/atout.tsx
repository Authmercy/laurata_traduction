"use client";
import React, { useRef } from "react";
import Link from "next/link";


export default function AtoutComponent() {




    return (

        <div className="flex flex-col   md:flex-row  ">
            <div className="flex-grow md:w-2/3 p-8">

                <div className="  mt-1">

                    <div className="flex w-full gap-2 text-white font-bold">

                        <div className="p-2 px-2  uppercase  w-[35%] text-2xl text-center bg-[#9C824A] hover:bg-[#a19478] h-20 flex items-center justify-center">

                            <Link href="/students/bacAlafac/bac_fac"> Orientation</Link>
                        </div>


                        <div className="p-4 px-8  text-xl text-center bg-[#A87A38] h-14 mt-4 flex items-center justify-center">
                            ATOUTS DE L’ENSEIGNEMENT SUPÉRIEUR CAMEROUNAIS
                        </div>

                    </div>

                    <div className="flex flex-row my-4 gap-1">
                        <div className="flex-1  ">
                        </div>
                        <div className="flex-2 bg-white  text-black p-4 text-end"> <p className="">
                            Vous devez soit modifier vos rêves ou améliorer vos compétences.
                            <br />  <span className="text-[#4A62AA] font-semibold "> Jim Rohn</span>
                        </p>

                        </div>
                    </div>

                    <div className="mt-1  text-black bg-white/70 p-8 space-y-4">
                        <div >
                            <p className="text-[#4A62AA] font-bold text-lg">
                                Bilinguisme & biculturalisme
                            </p>
                            <p>
                                Le Cameroun a deux langues officielles : l’anglais et le français ; ce double héritage culturel et linguistique rejaillit également dans le système éducatif. Le bilinguisme est consacré au niveau de l’enseignement supérieur. Dans les niveaux inférieurs (maternel, primaire, secondaire), c’est le biculturalisme à travers un sous-système francophone d’inspiration française et un sous-système anglophone d’inspiration anglo-saxonne.
                            </p>
                        </div>
                        <div >
                            <p className="text-[#4A62AA] font-bold text-lg">
                                Implémentation du Système LMD (Licence – Master – Doctorat)
                            </p>
                            <p>
                                Le système LMD facilite la mobilité et la flexibilité des étudiants dans la construction des parcours ; d’autre part, la comparaison et les équivalences des enseignements, titres et diplômes à l’étranger.
                            </p>
                        </div>
                        <div >
                            <p className="text-[#4A62AA] font-bold text-lg">
                                Siège de nombreuses institutions transnationales et Pôles d’excellence régionaux
                            </p>
                            <p>
                                Le Cameroun abrite plusieurs institutions transnationales (ISSEA, IIA, IAI, etc.) ; mais également, des pôles d’excellence régionaux à l’instar du Centre d’Excellence Africain en Technologies de l’Information et de la Communication, l’AIMS, etc.
                            </p>
                        </div>
                        <div >
                          <p className="text-[#4A62AA] font-bold text-lg">
                                Offre quantitative et qualitative satisfaisante d’Institutions privées d’enseignement supérieur (IPES)
                            </p>
                            <p>
                                Le Cameroun compte plus de 340 IPES agréées laïques et confessionnelles dont plusieurs jouissent d’une excellente réputation à l’extérieur, notamment à travers des conventions de partenariat et de coopération avec des universités de nombreux pays d’Afrique ou d’Europe.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>




    );
}