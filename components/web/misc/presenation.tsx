"use client";
import React, { useState, useEffect } from "react";

import { useRouter } from "next/router";

import Image from "next/image";
import ButtonAccueil from "@/components/web/buttons/buttonAccueil";

export default function PresentaionDuSite() {
    const router = useRouter();

    return (
        <div className="p-2  text-black" >
            <div className="flex gap-1 w-full">
                <div className="flex justify-center flex-col">

                    <div className="my-4  ">
                        <p> La plateforme <span className="text-[#4A62AA] text-xl font-bold"> LAURATA.COM</span> a pour principal objectif de contribuer à améliorer la qualité de la formation et l’employabilité des jeunes (diplômés) Camerounais en vue de leur garantir une insertion professionnelle réussie.
 </p>
                    </div>
                    <div className="mb-4">

                        <p > <span className="text-[#4A62AA]  ">  ▌ </span> Dans cette optique, en collaboration avec les secteurs public et privé et, en droite ligne dans la réalisation des ODD N˚4, 10 et 17 de l’ONU (Éducation de qualité – Inégalités réduites – Partenariats pour les Objectifs), <span className="text-[#4A62AA] text-xl font-bold"> LAURATA</span>  répertorie et centralise les offres de stage et en assure un accès transparent et équitable à la communauté éducative. En outre, elle met  en relation les employeurs avec les étudiants et jeunes diplômés.

 </p>
                    </div>

                    <div className="mb-4">

                        <p > <span className="text-[#4A62AA]  ">  ▌ </span> <span className="text-[#4A62AA] text-xl font-bold"> LAURATA </span>fournit egalement des ressources documentaires de qualité pour aider chaque jeune à identifier une filière d’étude et/ou un métier qui sied à son projet professionnel et à ses aptitudes. </p>




                    </div>
                   
                    
                    <div className="mb-4">

                        <p className="my-2"> <span className="text-[#4A62AA] text-xl font-bold ">  NOTES IMPORTANTES </span> </p>
                        <p className="my-2"> ─  L’utilisation du genre masculin a été adoptée dans les différentes sections de notre site afin de faciliter la lecture ; cela n’a aucune intention discriminatoire.</p>
                        <p className="my-2"> ─  Nous respectons tout travail intellectuel. Aussi avons-nous, à chaque fois que cela s’imposait, indiqué les sources de nos textes. </p>

                    </div>


                    <div className="flex flex-col justify-center gap-2 text-center">
                        <div className="text-[#A38340] font-bold pt-8 text-xl "> Partager cette page </div>
                        <div className="flex flex-row  justify-center gap-2">
                            <img src="/icons/icons8-whatsapp-logo-64(1).png" alt="social" className=" mt-2 w-[52px] h-[52px]" />
                            <img src="/icons/icons8-facebook-logo-64.png" alt="social" className="" />
                            <img src="/icons/icons8-linkedin-logo-64.png" alt="social" className=" mt-1 w-[60px] h-[60px]" />
                            <img src="/icons/icons8-x-64(1).png" alt="social" className=" mt-1 w-[60px] h-[60px]" />
                        </div>
                    </div>

                    <div className="my-10 flex flex-row justify-center gap-4">
                        <ButtonAccueil />
                    </div>
                </div>
            </div>

        </div>
    );
}
