"use client";
import React, { useState, useEffect } from "react";

import { useRouter } from "next/router";
import Link from "next/link";
import Navbar from "../navbar/navbar";
import FooterMobile from "../footer/footerEnd";
import fr from '@/i18/fr/student/guide.json';
import en from '@/i18/en/student/guide.json';
export default function PostulerStageMobile() {

  const router = useRouter();

  const handleClick = () => {
    router.push("/students/premierEmploi");
  }; const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileMenuOpen2, setIsMobileMenuOpen2] = useState(false);
  const { locale } = router;
  const t = locale === 'en' ? en : fr;
  return (
    <div>
         <div className="min-h-screen  text-black  bg-[#4A62AA]  overflow-auto  w-screen bg-cover  text-justify bg-center bg-no-repeat "  >
         
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
            <p>              {t.stage}</p>
          </div>


          <div

            className="bg-white/70   mt-8  p-2 py-4 shadow-sm mb-2 hover:shadow-md transition-shadow"
          >
            <p className=" py-2">
                 {t.stageContent.intro}
            </p>
            <div className="bg-white  p-6">
              <p>
                <span className="text-[#4A62AA] font-bold">
                {t.stageContent.consultez} </span>  {t.stageContent.consultezText}
              </p>
              <br />
              <p>
          <span className="text-[#4A62AA] font-bold">
                                        {t.stageContent.envoyezText}
                                    </span>   {t.stageContent.envoyezText2}
              </p>
            </div>
            <div

              className="     p-2 px-6 shadow-sm mb-2 cursor-pointer hover:shadow-md transition-shadow"
            >
              <p className="m-2">
                <b>
                  NB :
                </b>  {t.stageContent.depot}.</p>



            </div>
            <div className="flex flex-col gap-1 w-full">
              <p className="bg-[#4A62AA] px-4 py-2 uppercase text-white text-start md:px-32">
                      {t.stageContent.postuler}
              </p>
            </div>

            <div className="bg-white/70 p-2 mt-3 grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4 md:gap-8">
              <div className="mt-2 text-center text-[#4A62AA] font-bold">   {t.stageContent.spontane}</div>
              <div className="max-w-4xl">
                 <p>   {t.stageContent.Cantidature}
                </p>
              </div>
            </div>

            <div className="bg-white/70 p-2 mt-1 grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4 md:gap-8">
              <div className="text-center text-[#4A62AA] font-bold">        {t.stageContent.annonce}</div>
              <div className="max-w-4xl">
                           <p>   {t.stageContent.format}
                </p>
              </div>
            </div>

            <div className="bg-white/50 p-2 text-[#A87A38]  font-bold text-center mt-3">
          {t.stageContent.redaction}
            </div>

            <div className="flex flex-col w-full gap-2 mt-2">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4">
                <div className="p-4 text-white h-full bg-[#A87A38]/70">
                  <p className="font-bold">  {t.stageContent.Curriculum}</p>
                  <p className="mt-4">
                  {t.stageContent.CurriculumText}
                  </p>
                  <p className="mt-4">
              <b>  <Link href="/misc/nous_contacter" className="  hover:text-xl">    {t.stageContent.contact} </Link>
                                            </b>     {t.stageContent.contactText}
                  </p>
                </div>

                <div className="w-full bg-white/60">
                  <div className="p-3 space-y-2">
                    <p className="text-[#4A62AA] font-bold">  {t.stageContent.motivationLetter}</p>
                
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

              <div className="font-bold bg-white  p-2 text-center">
               <Link href="/misc/nous_contacter" className="  font-bold hover:text-xl">     {t.stageContent.contact} </Link>
                                   {t.stageContent.contactModele}
              </div>

              <div className="font-bold text-white bg-[#4A62AA]  p-2 text-center">
                    {t.stageContent.dossier}
              </div>

              <div className="bg-white/80 px-4 py-2 text-start">
                 <p>   - {t.stageContent.lettre}</p>
                                    <p>   - {t.stageContent.cv}</p>
                                    <p>  - {t.stageContent.contion}</p>
                                    <p>    - {t.stageContent.diplome}</p>
                                    <p>   - {t.stageContent.certificat}</p>
              </div>
            </div>

            <p className="bg-white/70 pt-3">
              <b className="ml-4">NB : </b>
            {t.stageContent.nb}   </p>

            <div className="flex justify-center  mt-2">
              <button onClick={handleClick} className="bg-[#A87A38]   border border-[#4A62AA] font-bold text-white p-3 rounded-xl">
             {t.stageContent.Postuler}
              </button>
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
