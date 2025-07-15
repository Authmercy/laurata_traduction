"use client";
import React, { useRef } from "react";
import { useEffect, useState } from "react";

import ForceArmeComponent from "./forceEtDefence";
import Navbar from "../../navbar/navbar";
import FooterMobile from "../../footer/footerEnd";
import FonctionPubliqueTable from "@/components/web/students/concour_bourse.tsx/tableFonctionPublic";
import InstitutionsPriveTable from "@/components/web/students/concour_bourse.tsx/tableInstitutionPrive";
import InstitutionsPublicTable from "@/components/web/students/concour_bourse.tsx/tableInstitutionPublique";
import InstitutionsTransnationaleTable from "@/components/web/students/concour_bourse.tsx/tableInstitutionTransnationales";
import LiberaleTable from "@/components/web/students/concour_bourse.tsx/tableLiberales";



export default function ConcourComponentMobile() {

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
                    <div className="justify-center p-2 text-center text-xl font-bold uppercase bg-[#9b6e0f] text-white">

                        <p>

                            CONCOURS
                        </p>  </div>







   
                    <div className="flex flex-col mt-4 sm:flex-row gap-1">
                                <button
                                    className="w-full  py-2 px-4  bg-white/70 text-[#9b6e0f] flex justify-between "
                        onClick={() => handleToggle(7)}
                    >
                     <span className="flex-grow text-start">Consignes relatives aux concours</span>
               
                                    <span className="sm:ml-10 text-2xl">{open === 7 ? "▲" : "▼"}</span>
                                </button>

                    </div>
                    {open === 7 && (
                        <div className="bg-white/70   ">


                            <div className="w-full  py-4 px-8 text-black">

                                 <p className=" font-bold mb-4">
                                    Avant de postuler à un concours :
                                </p>
                                <p>  <span className="text-[#4A62AA] font-bold">
                                    i)
                                </span>
                                    &nbsp;&nbsp;    Lisez attentivement le communiqué pour vous assurer que vous remplissez toutes les conditions ;
                                </p>
                                <p> <span className="text-[#4A62AA] font-bold">
                                    ii)
                                </span>
                                    &nbsp;&nbsp;   Montez minutieusement votre dossier de candidature en fournissant toutes les pièces demandées ;
                                </p>
                                <p> <span className="text-[#4A62AA] font-bold">
                                    iii)
                                </span>
                                    &nbsp;&nbsp;    Déposez votre dossier dans les délais et les formats requis ;
                                </p>
                                <p> <span className="text-[#4A62AA] font-bold">
                                    iv)
                                </span>
                                    &nbsp;&nbsp;   Préparez-vous sérieusement à l’aide d’anciennes épreuves ou dans un cours préparatoire.
                                </p>
<div className="space-y-2 mt-4"> 
    <p className="text-red-600 font-bold ">Avertissement ! <br /></p>
                                <p className="  ">
                                    - Nous nous limitons uniquement à publier les communiqués d’ouverture des concours. Pour tout renseignement complémentaire, bien vouloir vous adresser à  l'institution ou  à l’administration concernée.

                                </p>
                                <p> <span className="text-[#4A62AA] font-bold">
                                    -
                                </span>
                                   <span className="text-red-600  "> Ne postulez jamais à un concours avec des faux documents ; ils sont détectés dans 100% des cas. </span>La conséquence sera le rejet votre dossier et l’éventualité de poursuites judiciaires.
                                </p>
                                <p> - En août 2022, le Ministère de la Défense a radié de ses écoles plus de 1 000 recrues en cours de formation ayant postulé avec des faux diplômes !
                                </p>
                            </div>
                         </div>
                       



                        </div>)}

                    <div className="mt-4 space-y-4">
                        <div>

                            <div className="flex flex-col sm:flex-row gap-1">
                                <button
                                    className="w-full  py-2 px-4  bg-[#4c75f0] text-white flex justify-between "
                                    onClick={() => handleToggle(1)}
                                >
                                    <span className="flex-grow text-start">Institutions Publiques</span>
                                    <span className="sm:ml-10 text-2xl">{open === 1 ? "▲" : "▼"}</span>
                                </button>


                            </div>

                            {open === 1 && (
                                <div className="bg-white/60 p-2">
                                    <div className="w-full">
                                        <div className="bg-white/60  pb-0 grid grid-cols-1 sm:grid-cols-[1fr_3fr] gap-8 mt-2">


                                            <div className="w-full  py-4  text-black">

                                             
                                            </div>
                                            <p className="text-lg text-black p-2 bg-white">
                                                Consultez le calendrier des concours <b className="underline text-[#4A62AA] ">
                                                    ici</b>.
                                            </p>
                                            <InstitutionsPublicTable></InstitutionsPublicTable>

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
                                    <span className="flex-grow text-start">Institutions Privées </span>
                                    <span className="sm:ml-10 text-2xl">{open === 2 ? "▲" : "▼"}</span>
                                </button>


                            </div>

                            {open === 2 && (
                                <div className="bg-white/60 p-2">
                                    <div className="w-full bg-white/60 py-2  md:px-0">

                                        <div className="w-full  py-4  text-black">

                                         

                                        </div>

                                        <InstitutionsPriveTable></InstitutionsPriveTable>

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
                                    <span className="flex-grow text-start"> Institutions Transnationales</span>

                                    <span className="sm:ml-10 text-2xl">{open === 3 ? "▲" : "▼"}</span>
                                </button>


                            </div>

                            {open === 3 && (
                                <div className="bg-white/60 p-2">
                                    <div className="w-full bg-white/60 py-2 md:px-0">
                                        <div className="w-full  p-4  text-black">

                                            

                                        </div>
                                        <InstitutionsTransnationaleTable></InstitutionsTransnationaleTable>

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
                                    onClick={() => handleToggle(4)}
                                >
                                    <span className="flex-grow text-start">Professions libérales et réglementées </span>  <span className="sm:ml-10 text-2xl">{open === 4 ? "▲" : "▼"}</span>
                                </button>


                            </div>

                            {open === 4 && (
                                <div className="bg-white/60 p-2">
                                    <div className="w-full bg-white/60 py-2  md:px-0">
                                        <div className="w-full  py-4  text-black">

                                            
                                        </div>
                                        <LiberaleTable></LiberaleTable>
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
                                    onClick={() => handleToggle(5)}
                                >
                                    <span className="flex-grow text-start">Recrutement à la Fonction Publique
                                    </span>
                                    <span className="sm:ml-10 text-2xl">{open === 5 ? "▲" : "▼"}</span>
                                </button>


                            </div>

                            {open === 5 && (
                                <div className="bg-white/60 p-2">
                                    <div className="w-full bg-white/60 py-2">
                                        <div className="w-full  py-4  text-black">

                                          

                                        </div>
                                        <FonctionPubliqueTable></FonctionPubliqueTable>



                                    </div>
                                </div>
                            )}
                        </div>

                    </div>

                    <div className="mt-2 space-y-4">
                        <div>

                            <div className="flex flex-col sm:flex-row gap-1">
                                <button
                                    className="w-full py-2 px-4  text-center bg-[#4c75f0] text-white flex items-center justify-between"
                                    onClick={() => handleToggle(6)}
                                >
                                    <span className="flex-grow text-start">Forces de défense et de sécurité
                                    </span>
                                    <span className="text-2xl">{open === 6 ? "▲" : "▼"}</span>
                                </button>


                            </div>

                            {open === 6 && (
                                <div className="bg-white/60 p-2">
                                    <div className="w-full bg-white/60  ">
                                        <div className="w-full  py-4  text-black">

                                            
                                            <ForceArmeComponent></ForceArmeComponent>
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