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
                                        {t.emploiContent.intro}
                                </p>
                            </div>
                            <div className="bg-white w-[102%] -ml-3 p-6">
                                <p>
                                    <span className="text-[#4A62AA] font-bold">
                                        {t.emploiContent.consultez} </span>  {t.emploiContent.consultezText}
                                </p>

                                <p>
                                    <span className="text-[#4A62AA] font-bold">
                                        {t.emploiContent.envoyezText}
                                    </span>   {t.emploiContent.envoyezText2}
                                </p>
                            </div>
                            <div

                                className="bg-white/60     p-2 px-6 shadow-sm mb-2 cursor-pointer hover:shadow-md transition-shadow"
                            >
                                <p className="ml-2">
                                    <b>
                                        NB :
                                    </b>  {t.emploiContent.depot}.</p>



                            </div>


                            <div className="flex mt-8 gap-1 w-full">
                                <p className="bg-[#4A62AA]  px-32 py-2 uppercase text-white  text-start ">
                             {t.emploiContent.postuler}
                                </p>

                            </div>
                            <div className="bg-white/70 p-2 mt-3 grid grid-cols-[1fr_3fr] gap-8">
                                <div className="   mt-2 text-center text-[#4A62AA] ">
                                      {t.emploiContent.spontane}</div>
                                <div className="max-w-4xl">
                                    <p>   {t.emploiContent.Cantidature}

                                    </p>
                                </div>
                            </div>
                            <div className="bg-white/70 p-2 mt-1 grid grid-cols-[1fr_3fr] gap-8">
                                <div className="   text-center text-[#4A62AA] ">
                                       {t.emploiContent.annonce}</div>
                                <div className="max-w-4xl">
                                    <p>   {t.emploiContent.format}
                                    </p>
                                </div>
                            </div>
                            <div className="bg-white/50 p-2 text-[#A87A38] text-xl font-bold text-center mt-3">
                             {t.emploiContent.redaction}

                            </div>
                            <div className="flex flex-col w-full gap-1 mt-2">
                                <div className="grid grid-cols-[1fr_3fr] gap-4">
                                    <div className=" p-2 text-start text-white h-full  bg-[#A87A38]/70 ">
                                        <p className="font-bold">   {t.emploiContent.Curriculum} </p>
                                        <p className=" my-4">
                                              {t.emploiContent.CurriculumText}
                                        </p>
                                        <p className=" my-4">
                                            <b>  <Link href="/misc/nous_contacter" className="  hover:text-xl">    {t.emploiContent.contact} </Link>
                                            </b>     {t.emploiContent.contactText}
                                        </p>
                                    </div>


                                    <div className="w-full  bg-white/60 ">
                                        <div className="p-3">
                                            <p className="text-[#4A62AA]  font-bold">
                                        {t.emploiContent.motivationLetter}
                                            </p>

                                            <p className="mt-1">
                                                 {t.emploiContent.motivationLetterText}
                                            </p>
                                            <p className="mt-1">
                                                <b>
                                                    {t.emploiContent.first} :&nbsp;
                                                </b>
                                               {t.emploiContent.firstText}
                                            </p>
                                            <p className="mt-1">
                                                <b>
                                                     {t.emploiContent.second} : &nbsp;
                                                </b>
                                               {t.emploiContent.secondText}
                                            </p>

                                            <p className="mt-1">
                                                <b>
                                                     {t.emploiContent.third}  :&nbsp;
                                                </b>
                                             {t.emploiContent.thirdText}
                                            </p>
                                        </div>
                                    </div>

                                </div>
                                <div className=" bg-white p-2 text-center">
                                    <Link href="/misc/nous_contacter" className="  font-bold hover:text-xl">     {t.emploiContent.contact} </Link>
                                   {t.emploiContent.contactModele}
                                </div>
                                <div className="font-bold text-[#4A62AA]  bg-white/50 p-2 text-center">
                                   {t.emploiContent.dossier}
                                </div>
                                <div className=" bg-white/80  pl-24 p-2 text-start">

                                    <p>   - {t.emploiContent.lettre}</p>
                                    <p>   - {t.emploiContent.cv}</p>
                                    <p>  - {t.emploiContent.contion}</p>
                                    <p>    - {t.emploiContent.diplome}</p>
                                    <p>   - {t.emploiContent.certificat}</p>
                                </div>
                            </div>
                            <p className=" text-white py-3" >
                                <b className="ml-10">NB : </b>
                               {t.emploiContent.nb}
                            </p>

                            <div className="flex flex-row">
                                <div className="flex-1"> </div>
                                <button onClick={handleClick} className=" bg-white border border-[#4A62AA] font-bold text-[#4A62AA] p-3 rounded-xl"> {t.emploiContent.Postuler} </button>

                            </div>

                        </div>

                    </div>
                </div >



            </div>
        </div>

    );
}
