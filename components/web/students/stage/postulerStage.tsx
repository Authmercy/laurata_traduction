"use client";
import React, { useState, useEffect } from "react";

import { useRouter } from "next/router";
import Link from "next/link";

import fr from '@/i18/fr/student/guide.json';
import en from '@/i18/en/student/guide.json';

export default function PostulerStage() {
    const router = useRouter();
    const handleClick = () => {
        router.push("/students/premierEmploi");
    };

  const { locale } = router;
  const t = locale === 'en' ? en : fr;

    return (
        <div className="p-2 md:pl-8 text-black" >
            <div className="flex pl-6 gap-1 w-full">
                <div className="flex justify-center flex-col">

                    <div className="flex flex-wrap pl-10 pt-6">
                        <div className="flex-grow md:w-2/3  text-black  p-8">
                            <div className="  bg-[#A87A38] p-3 text-center text-2xl font-bold  uppercase text-white ">
                              {t.stage}
                            </div>

                            <div

                                className="bg-white/60     p-2 px-6 shadow-sm mt-2 cursor-pointer hover:shadow-md transition-shadow"
                            >
                                <p className=" py-2">
                                        {t.stageContent.intro}
                                </p>
                            </div>
                            <div className="bg-white w-[102%] -ml-3 p-6">
                                <p>
                                    <span className="text-[#4A62AA] font-bold">
                                        {t.stageContent.consultez} </span>  {t.stageContent.consultezText}
                                </p>

                                <p>
                                    <span className="text-[#4A62AA] font-bold">
                                        {t.stageContent.envoyezText}
                                    </span>   {t.stageContent.envoyezText2}
                                </p>
                            </div>
                            <div

                                className="bg-white/60     p-2 px-6 shadow-sm mb-2 cursor-pointer hover:shadow-md transition-shadow"
                            >
                                <p className="ml-2">
                                    <b>
                                        NB :
                                    </b>  {t.stageContent.depot}.</p>



                            </div>


                            <div className="flex mt-8 gap-1 w-full">
                                <p className="bg-[#4A62AA]  px-32 py-2 uppercase text-white  text-start ">
                             {t.stageContent.postuler}
                                </p>

                            </div>
                            <div className="bg-white/70 p-2 mt-3 grid grid-cols-[1fr_3fr] gap-8">
                                <div className="   mt-2 text-center text-[#4A62AA] ">
                                      {t.stageContent.spontane}</div>
                                <div className="max-w-4xl">
                                    <p>   {t.stageContent.Cantidature}

                                    </p>
                                </div>
                            </div>
                            <div className="bg-white/70 p-2 mt-1 grid grid-cols-[1fr_3fr] gap-8">
                                <div className="   text-center text-[#4A62AA] ">
                                       {t.stageContent.annonce}</div>
                                <div className="max-w-4xl">
                                    <p>   {t.stageContent.format}
                                    </p>
                                </div>
                            </div>
                            <div className="bg-white/50 p-2 text-[#A87A38] text-xl font-bold text-center mt-3">
                             {t.stageContent.redaction}

                            </div>
                            <div className="flex flex-col w-full gap-1 mt-2">
                                <div className="grid grid-cols-[1fr_3fr] gap-4">
                                    <div className=" p-2 text-start text-white h-full  bg-[#A87A38]/70 ">
                                        <p className="font-bold">   {t.stageContent.Curriculum} </p>
                                        <p className=" my-4">
                                              {t.stageContent.CurriculumText}
                                        </p>
                                        <p className=" my-4">
                                            <b>  <Link href="/misc/nous_contacter" className="  hover:text-xl">    {t.stageContent.contact} </Link>
                                            </b>     {t.stageContent.contactText}
                                        </p>
                                    </div>


                                    <div className="w-full  bg-white/60 ">
                                        <div className="p-3">
                                            <p className="text-[#4A62AA]  font-bold">
                                        {t.stageContent.motivationLetter}
                                            </p>

                                            <p className="mt-1">
                                                 {t.stageContent.motivationLetterText}
                                            </p>
                                            <p className="mt-1">
                                                <b>
                                                    {t.stageContent.first} :&nbsp;
                                                </b>
                                               {t.stageContent.firstText}
                                            </p>
                                            <p className="mt-1">
                                                <b>
                                                     {t.stageContent.second} : &nbsp;
                                                </b>
                                               {t.stageContent.secondText}
                                            </p>

                                            <p className="mt-1">
                                                <b>
                                                     {t.stageContent.third}  :&nbsp;
                                                </b>
                                             {t.stageContent.thirdText}
                                            </p>
                                        </div>
                                    </div>

                                </div>
                                <div className=" bg-white p-2 text-center">
                                    <Link href="/misc/nous_contacter" className="  font-bold hover:text-xl">     {t.stageContent.contact} </Link>
                                   {t.stageContent.contactModele}
                                </div>
                                <div className="font-bold text-[#4A62AA]  bg-white/50 p-2 text-center">
                                   {t.stageContent.dossier}
                                </div>
                                <div className=" bg-white/80  pl-24 p-2 text-start">

                                    <p>   - {t.stageContent.lettre}</p>
                                    <p>   - {t.stageContent.cv}</p>
                                    <p>  - {t.stageContent.contion}</p>
                                    <p>    - {t.stageContent.diplome}</p>
                                    <p>   - {t.stageContent.certificat}</p>
                                </div>
                            </div>
                            <p className=" text-white py-3" >
                                <b className="ml-10">NB : </b>
                               {t.stageContent.nb}
                            </p>

                            <div className="flex flex-row">
                                <div className="flex-1"> </div>
                                <button onClick={handleClick} className=" bg-white border border-[#4A62AA] font-bold text-[#4A62AA] p-3 rounded-xl"> {t.stageContent.Postuler} </button>

                            </div>

                        </div>

                    </div>
                </div >



            </div>
        </div>

    );
}
