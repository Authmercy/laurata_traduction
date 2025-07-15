"use client";
import React, { useState, useEffect } from "react";

import { useRouter } from "next/router";
import Link from "next/link";



export default function PostulerStage() {
    const router = useRouter();
    const handleClick = () => {
        router.push("/students/premierEmploi");
    };

    return (
        <div className="p-2 md:pl-8 text-black" >
            <div className="flex pl-6 gap-1 w-full">
                <div className="flex justify-center flex-col">

                    <div className="flex flex-wrap pl-10 pt-6">
                        <div className="flex-grow md:w-2/3  text-black  p-8">
                            <div className="  bg-[#A87A38] p-3 text-center text-2xl font-bold  uppercase text-white ">
                                pOSTULER à un stage
                            </div>

                            <div

                                className="bg-white/60     p-2 px-6 shadow-sm mt-2 cursor-pointer hover:shadow-md transition-shadow"
                            >
                                <p className=" py-2">
                                    Ci-dessous  deux options   efficaces  pour trouver votre stage :
                                </p>
                            </div>
                            <div className="bg-white w-[102%] -ml-3 p-6">
                                <p>
                                    <span className="text-[#4A62AA] font-bold">
                                        1. Consultez régulièrement notre section « Offres de stage » </span> pour voir les annonces publiées ;
                                </p>

                                <p>
                                    <span className="text-[#4A62AA] font-bold">
                                        2.   Envoyez ou déposez des candidatures spontanées
                                    </span> de qualité à des entreprises ciblées.
                                </p>
                            </div>
                            <div

                                className="bg-white/60     p-2 px-6 shadow-sm mb-2 cursor-pointer hover:shadow-md transition-shadow"
                            >
                                <p className="ml-2">
                                    <b>
                                        NB :
                                    </b> Déposez votre CV pour recevoir gratuitement les nouvelles offres de stages dans votre boîte mail.</p>



                            </div>


                            <div className="flex mt-8 gap-1 w-full">
                                <p className="bg-[#4A62AA]  px-32 py-2 uppercase text-white  text-start ">
                                    Postuler
                                </p>

                            </div>
                            <div className="bg-white/70 p-2 mt-3 grid grid-cols-[1fr_3fr] gap-8">
                                <div className="   mt-2 text-center text-[#4A62AA] ">
                                    Cantidature  spontanée</div>
                                <div className="max-w-4xl">
                                    <p>Envoyez ou déposez votre dossier de candidature au moins 9 à 12 mois avant la date de début souhaitée du stage et relancez régulièrement l’entreprise.

                                    </p>
                                </div>
                            </div>
                            <div className="bg-white/70 p-2 mt-1 grid grid-cols-[1fr_3fr] gap-8">
                                <div className="   text-center text-[#4A62AA] ">
                                    Annonce</div>
                                <div className="max-w-4xl">
                                    <p>Envoyez votre candidature dans les délais et format requis (mail ou dossier physique).
                                    </p>
                                </div>
                            </div>
                            <div className="bg-white/50 p-2 text-[#A87A38] text-xl font-bold text-center mt-3">
                                Rédiger un Curriculum Vitae (CV) et une lettre de motivation convaincants

                            </div>
                            <div className="flex flex-col w-full gap-1 mt-2">
                                <div className="grid grid-cols-[1fr_3fr] gap-4">
                                    <div className=" p-2 text-start text-white h-full  bg-[#A87A38]/70 ">
                                        <p className="font-bold">Curriculum Vitae (CV) </p>
                                        <p className=" my-4">
                                            Votre CV doit susciter chez le recruteur l’envie de vous rencontrer. Pour plus d’informations, consultez la section «  Postuler à un premier emploi  ».
                                        </p>
                                        <p className=" my-4">
                                            <b>  <Link href="/misc/nous_contacter" className="  hover:text-xl">     Contactez-nous </Link>
                                            </b>  pour obtenir un modèle de CV.
                                        </p>
                                    </div>


                                    <div className="w-full  bg-white/60 ">
                                        <div className="p-3">
                                            <p className="text-[#4A62AA]  font-bold">
                                                Lettre de motivation
                                            </p>

                                            <p className="mt-1">
                                                Votre lettre de motivation doit exposer sur une page les raisons de votre demande de stage et convaincre le recruteur de votre motivation. Elle peut se présenter comme suit :
                                            </p>
                                            <p className="mt-1">
                                                <b>
                                                    1ère partie :&nbsp;
                                                </b>
                                                Présentation (diplôme préparé et établissement) et formulation de votre demande de stage (nature du stage, fonction et durée).
                                            </p>
                                            <p className="mt-1">
                                                <b>
                                                    2ème partie : &nbsp;
                                                </b>
                                                Motivation du choix de l’entreprise et de l’intérêt pour le stage en expliquant ce que vous comptez y apprendre et en quoi cela vous aidera pour la suite de votre formation ou de votre parcours. Évoquez votre disposition à apprendre mais également vos qualités, notamment celles appréciées en entreprise : ponctualité, autonomie, fiabilité, minutie dans le travail et sociabilité, etc.
                                            </p>

                                            <p className="mt-1">
                                                <b>
                                                    3ème partie :&nbsp;
                                                </b>
                                                Exprimez vos attentes en relation avec les compétences que vous aurez développées.
                                            </p>
                                        </div>
                                    </div>

                                </div>
                                <div className=" bg-white p-2 text-center">
                                    <Link href="/misc/nous_contacter" className="  font-bold hover:text-xl">     Contactez-nous </Link>
                                    pour obtenir un modèle de lettre de motivation pour stage.
                                </div>
                                <div className="font-bold text-[#4A62AA]  bg-white/50 p-2 text-center">
                                    Pièces du dossier de candidature
                                </div>
                                <div className=" bg-white/80  pl-24 p-2 text-start">

                                    <p>   - Lettre de motivation</p>
                                    <p>   - CV à jour, daté et signé</p>
                                    <p>  - Convention de stage et/ou lettre de recommandation de l’institution de formation</p>
                                    <p>    - Copies des diplômes, de la CNI</p>
                                    <p>   - Copie du certificat de scolarité, des attestations diverses.</p>
                                </div>
                            </div>
                            <p className=" text-white py-3" >
                                <b className="ml-10">NB : </b>
                                les pièces demandées peuvent varier selon le recruteur. En tout état de cause, joignez toujours à votre demande tous les documents permettant une bonne analyse et compréhension de votre dossier.
                            </p>

                            <div className="flex flex-row">
                                <div className="flex-1"> </div>
                                <button onClick={handleClick} className=" bg-white border border-[#4A62AA] font-bold text-[#4A62AA] p-3 rounded-xl"> Postuler  à un premier emploi (débutant uniquement) </button>

                            </div>

                        </div>

                    </div>
                </div >



            </div>
        </div>

    );
}
