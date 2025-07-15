"use client";
import React, { useRef } from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import InstitutionsPriveTable from "./tableInstitutionPrive";
import InstitutionsPublicTable from "./tableInstitutionPublique";
import InstitutionsTransnationaleTable from "./tableInstitutionTransnationales";
import FonctionPubliqueTable from "./tableFonctionPublic";
import LiberaleTable from "./tableLiberales";
import ForceArmeComponent from "./forceEtDefence";



export default function ConcourComponent() {

    const [open, setOpen] = useState(null);

    const handleToggle = (index: any) => {
        setOpen(open === index ? null : index);
    };
    return (

        <div className="flex flex-col   md:flex-row  ">
            <div className="flex-grow md:w-2/3 p-8">

                <div className="  mt-1">
                    <div className="flex w-full gap-2 text-white font-bold">

                        <div className="p-2 px-2  uppercase  w-[35%] text-2xl text-center bg-[#9C824A]  hover:bg-[#a19478] h-20 flex items-center justify-center">

                            <Link href="/students/concoursBourse"> CONCOURS & BOURSES </Link>
                        </div>


                        <div className="p-3 px-8  text-xl text-center bg-[#A87A38] h-12 mt-4 flex items-center justify-center">

                            CONCOURS
                        </div>

                    </div>

                    <div className="flex flex-row mt-4 gap-1">
                        <div className="flex-1  ">
                        </div>
                        <div className="flex-2 bg-white  text-black p-4 text-end"> <p className="">
                            Un jour, tu te réveilleras et tu n’auras plus le temps de faire ce <br /> que tu voulais faire. Fais-le donc maintenant.
                            <br />  <span className="text-[#4A62AA] font-semibold "> Paulo Coelho </span>
                        </p>

                        </div>
                    </div>
                       <div
                        className="py-2 px-8 mt-4 w-full   bg-white/70 text-[#A87A38] font-bold flex justify-between items-center"

                        onClick={() => handleToggle(7)}
                    >
                        <span className=" font-bold text-lg ">Consignes relatives aux concours</span>
                        <span className="text-xl">{open === 7 ? "▲" : "▼"}</span>
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

                                <p className=" mt-4 "> <span className="text-red-600 font-bold ">Avertissement ! <br /></span>
                                    - Nous nous limitons uniquement à publier les communiqués d’ouverture des concours. Pour tout renseignement complémentaire, bien vouloir vous adresser à  l'institution ou  à l’administration concernée.

                                </p>
                                <p> <span className="text-[#4A62AA] font-bold">
                                    -
                                </span>
                                   <span className="text-red-600  "> Ne postulez jamais à un concours avec des faux documents ; ils sont détectés dans 100% des cas. </span>La conséquence sera le rejet votre dossier et l’éventualité de poursuites judiciaires.
                                </p>
                                <p> - En août 2022, le Ministère de la Défense a radié de ses écoles plus de 1 000  recrues en cours de formation ayant postulé avec des faux diplômes !
                                </p>
                            </div>
                         
                       



                        </div>)}

                    <div
                        className="py-2 px-8 mt-4 w-full   bg-white/70 text-[#4A62AA] font-bold flex justify-between items-center"

                        onClick={() => handleToggle(4)}
                    >
                        <span className=" font-bold text-lg ">Institutions Publiques</span>
                        <span className="text-xl">{open === 4 ? "▲" : "▼"}</span>
                    </div>
                    {open === 4 && (
                        <div className="bg-white/70  ">


                            <div className="w-full  py-4 px-8 text-black">


                            </div>
                            <p className="text-lg text-center text-black p-2 bg-white">
                                Consultez le calendrier des concours <b className="underline text-[#4A62AA] ">
                                    ici</b>.
                            </p>
                            <InstitutionsPublicTable></InstitutionsPublicTable>



                        </div>)}



                    <div
                        className="py-2 px-8 mt-2 w-full   bg-white/70 text-[#4A62AA] font-bold flex justify-between items-center"

                        onClick={() => handleToggle(3)}
                    >
                        <span className=" font-bold text-lg">Institutions Privées</span>
                        <span className="text-xl">{open === 3 ? "▲" : "▼"}</span>
                    </div>
                    {open === 3 && (
                        <div className="bg-white/70  ">


                            <div className="w-full  py-4 px-8 text-black">

                              
                            </div>

                            <InstitutionsPriveTable></InstitutionsPriveTable>
                        </div>)}














                    <div
                        className="py-2 px-8 mt-2 w-full   bg-white/70 text-[#4A62AA] font-bold flex justify-between items-center"

                        onClick={() => handleToggle(2)}
                    >
                        <span className=" font-bold text-lg ">Institutions Transnationales</span>
                        <span className="text-xl">{open === 2 ? "▲" : "▼"}</span>
                    </div>
                    {open === 2 && (
                        <div className="bg-white/70  ">


                            <div className="w-full  py-4 px-8 text-black">

                              
                            </div>
                            <InstitutionsTransnationaleTable></InstitutionsTransnationaleTable>
                        </div>)}
                    <div
                        className="py-2 px-8 mt-2 w-full   bg-white/70 text-[#4A62AA] font-bold flex justify-between items-center"

                        onClick={() => handleToggle(1)}
                    >
                        <span className=" font-bold text-lg">Professions libérales et réglementées</span>
                        <span className="text-xl">{open === 1 ? "▲" : "▼"}</span>
                    </div>
                    {open === 1 && (
                        <div className="bg-white/70  ">

                            <div className="w-full  py-4 px-8 text-black">


                            </div>
                            <LiberaleTable></LiberaleTable>     </div>)}

                    <div
                        className="py-2 px-8 mt-2 w-full   bg-white/70 text-[#4A62AA] font-bold flex justify-between items-center"

                        onClick={() => handleToggle(5)}
                    >
                        <span className=" font-bold  text-lg">Recrutement à la Fonction Publique </span>
                        <span className="text-xl">{open === 5 ? "▲" : "▼"}</span>
                    </div>
                    {open === 5 && (
                        <div className="bg-white/70  ">


                            <div className="w-full  py-4 px-8 text-black">

                              
                            </div>
                            <FonctionPubliqueTable></FonctionPubliqueTable>
                        </div>)}

                    <div
                        className="py-2 px-8 mt-2 w-full   bg-white/70 text-[#4A62AA] font-bold flex justify-between items-center"

                        onClick={() => handleToggle(6)}
                    >
                        <span className=" font-bold text-lg">Forces de défense et de sécurité</span>
                        <span className="text-xl">{open === 6 ? "▲" : "▼"}</span>
                    </div>
                    {open === 6 && (
                        <div className="bg-white/70  ">


                            <div className="w-full  py-4 px-8 text-black">

                               
                                <ForceArmeComponent></ForceArmeComponent>
                            </div>     </div>)}



                </div>
            </div>

        </div>




    );
}