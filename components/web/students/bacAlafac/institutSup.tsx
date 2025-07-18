"use client";
import React from "react";
import {  useState } from "react";
import en from '@/i18/en/student/institutionSup.json';
import fr from '@/i18/fr/student/institutionSup.json';
import { useRouter } from "next/router";
import Link from "next/link";
import UnivPublique from "./tableUniversieEtat";
import IPESLaiques from "./tableIPESLaiques";
import IPESConfess from "./tableIPESConfess";
import PublicSup from "./tablePublicSup";
import PublicAStatutParticuler from "./tableEtablisseemntPublic";
import TransNational from "./tableTransnationale";




export default function InstitutionComponent() {
    const [open, setOpen] = useState(null);
    const handleToggle = (index: any) => {
        setOpen(open === index ? null : index);
    };

    const [open1, setOpen1] = useState(null);
    const handleToggle1 = (index: any) => {
        setOpen1(open1 === index ? null : index);
    };
    const router = useRouter();

    const { locale } = router;
    const t = locale === 'en' ? en : fr;
   return (
    <div className="flex flex-col md:flex-row">
      <div className="flex-grow md:w-2/3 p-8">
        <div className="mt-1">
          <div className="flex w-full gap-2 text-white font-bold">
            <div className="p-2 px-2 uppercase w-[35%] text-2xl text-center bg-[#9C824A] hover:bg-[#a19478] h-20 flex items-center justify-center">
              <Link href="/students/bacAlafac/bac_fac">{t.orientation}</Link>
            </div>
            <div className="p-3 px-8 text-xl text-center uppercase bg-[#A87A38] h-12 mt-4 flex items-center justify-center">
              {t.institutionsTitle}
            </div>
          </div>
          
          <div className="flex flex-row my-4 gap-1">
            <div className="flex-1"></div>
            <div className="flex-2 bg-white text-black p-4 text-end">
              <p dangerouslySetInnerHTML={{ __html: t.quote }} />
              <span className="text-[#4A62AA] font-semibold">{t.quoteAuthor}</span>
            </div>
          </div>

        
          <div className="mt-12 ">
            <button
              className="py-2 px-4 w-full bg-white/80 text-[#4A62AA] text-xl font-bold flex justify-between items-center"
              onClick={() => handleToggle(2)}
            >
              <span>{t.publicInstitutions}</span>
              <span className="text-2xl">{open === 2 ? "▲" : "▼"}</span>
            </button>

            {open === 2 && (
              <div className="bg-white/80">
                <div className="w-fullp">
                  <p className="p-8 text-black">
                    {t.publicInstitutionsIntro}
                  </p>

                  <button
                    className="p-4 my-2 w-full bg-white font-bold text-[#d47f2f] flex gap-8 text-xl justify-between items-center"
                    onClick={() => handleToggle1(1)}
                  >
                    <div className="flex flex-row gap-6">
                      <div>
                        <img src="/icons/puces_1.png" alt="bullet" className="w-8" />
                      </div>
                      <div>{t.stateUniversities}</div>
                    </div>
                    <span className="text-2xl">{open1 === 1 ? "▲" : "▼"}</span>
                  </button>
                  
                  {open1 === 1 && (
                    <div>
                      <p 
                        className="text-black p-8" 
                        dangerouslySetInnerHTML={{ __html: t.stateUniversitiesText }} 
                      />
                      <UnivPublique />
                    </div>
                  )}

                  <button
                    className="p-4 my-2 w-full bg-white font-bold text-[#d47f2f] flex gap-8 text-xl justify-between items-center"
                    onClick={() => handleToggle1(2)}
                  >
                    <div className="flex flex-row gap-6">
                      <div>
                        <img src="/icons/puces_1.png" alt="bullet" className="w-8" />
                      </div>
                      <div>{t.specialStatusInstitutions}</div>
                    </div>
                    <span className="text-2xl">{open1 === 2 ? "▲" : "▼"}</span>
                  </button>
                  
                  {open1 === 2 && (
                    <div>
                      <p className="text-black p-8"></p>
                      <PublicAStatutParticuler />
                    </div>
                  )}

                  <button
                    className="p-4 my-2 w-full bg-white font-bold text-[#d47f2f] flex gap-8 text-xl justify-between items-center"
                    onClick={() => handleToggle1(3)}
                  >
                    <div className="flex flex-row gap-6">
                      <div>
                        <img src="/icons/puces_1.png" alt="bullet" className="w-8" />
                      </div>
                      <div>{t.otherPublicInstitutions}</div>
                    </div>
                    <span className="text-2xl">{open1 === 3 ? "▲" : "▼"}</span>
                  </button>
                  
                  {open1 === 3 && (
                    <div>
                      <p className="text-black p-8"></p>
                      <PublicSup />
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="mt-1">
            <button
              className="py-2 px-4 w-full bg-white/80 text-[#4A62AA] text-xl font-bold flex justify-between items-center"
              onClick={() => handleToggle(4)}
            >
              <span>{t.privateInstitutions}</span>
              <span className="text-2xl">{open === 4 ? "▲" : "▼"}</span>
            </button>

            {open === 4 && (
              <div className="bg-white/80">
                <div className="w-full space-y-2 p-8 text-black">
                  <p>{t.privateInstitutionsIntro}</p>
                  
                  <div className="mt-6">
                    <p>
                      <b><span className="text-[#4A62AA]">{t.authorization}</span></b> {t.authorizationText}
                    </p>
                    <p>
                      <b><span className="text-[#4A62AA]">{t.accreditation}</span></b> {t.accreditationText}
                    </p>
                    <p>
                      <b><span className="text-[#4A62AA]">{t.homologation}</span></b> {t.homologationText}
                    </p>
                  </div>
                  
                  <p className="mt-10">{t.reputedIPES}</p>
                  
                  <div className="bg-[#dfe5f8] p-4">
                    <p className="text-[#4A62AA] text-xl ml-2 mt-10 font-bold">
                      {t.secularIPES}
                    </p>
                    <IPESLaiques />
                  </div>
                  
                  <div className="bg-[#f5f2e4] p-4">
                    <p className="text-[#9C824A] ml-3 text-xl mt-10 font-bold">
                      {t.religiousIPES}
                    </p>
                    <IPESConfess />
                  </div>
                  
                  <div className="bg-white p-6 space-y-2">
                    <p className="text-[#4A62AA] uppercase font-bold">
                      {t.notaBeneTitle}
                    </p>
                    <p>{t.notaBeneText}</p>
                  </div>
                  
                  <div className="bg-white p-6 space-y-2">
                    <p className="text-red-500 uppercase font-bold">
                      {t.warningTitle}
                    </p>
                    <p>{t.warningPoint1}</p>
                    <p className="text-red-500">{t.warningPoint2}</p>
                    <p>{t.warningPoint3}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

   
          <div className="mt-1 ">
            <button
              className="py-2 px-4 w-full bg-white/80 text-[#4A62AA] text-xl font-bold flex justify-between items-center"
              onClick={() => handleToggle(5)}
            >
              <span>{t.transnationalInstitutions}</span>
              <span className="text-2xl">{open === 5 ? "▲" : "▼"}</span>
            </button>

            {open === 5 && (
              <div className="bg-white/80 p-4">
                <div className="w-full space-y-2">
                  <p className="text-black">{t.transnationalIntro}</p>
                </div>
                <TransNational />
              </div>
            )}
          </div>


          <div className="mt-1 ">
            <button
              className="py-2 px-4 w-full bg-white/80 text-[#4A62AA] text-xl font-bold flex justify-between items-center"
              onClick={() => handleToggle(8)}
            >
              <span>{t.referencesTitle}</span>
              <span className="text-2xl">{open === 8 ? "▲" : "▼"}</span>
            </button>

            {open === 8 && (
              <div className="bg-white/80 text-black p-4">
                <div className="w-full">
                  <p  className="text-[#4A62AA] " dangerouslySetInnerHTML={{ __html: t.reference1 }}/>
                  <p  className="text-[#4A62AA] "  dangerouslySetInnerHTML={{ __html: t.reference2 }}/>
                  <p>{t.reference3}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}