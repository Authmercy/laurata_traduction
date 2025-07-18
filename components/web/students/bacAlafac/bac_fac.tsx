"use client";
import React from "react";
import Link from "next/link";
import en from '@/i18/en/student/orientation.json';
import fr from '@/i18/fr/student/orientation.json';
import { useRouter } from "next/router";


export default function BacAlaFac() {
    const router = useRouter();

    const { locale } = router;
    const t = locale === 'en' ? en : fr;

    return (
    <div className="p-2 md:pl-8 text-black">
      <div className="flex pl-6 gap-1 w-full">
        <div className="flex justify-center flex-col">
          <div className="flex flex-wrap pl-4 pt-6">
            <div className="flex-grow md:w-2/3 text-black p-8 pl-1">
              <div className="bg-[#A87A38] p-3 text-center text-2xl font-bold uppercase text-white">
                {t.orientation}
              </div>
              <div className="bg-white/70 border-1 p-6 text-start border-[#4A62AA]">
                <div className="flex flex-row mt-4 gap-1">
                  <div className="flex-1">
                    <img src="/images/bacAlaFac.png" alt="Higher Education" />
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <div className="flex flex-col justify-center gap-2 text-2xl">
                      <Link href="/students/bacAlafac/generalite">
                        <div className="flex items-center gap-2 py-2">
                          <img src="/icons/puces_1.png" alt="bullet" className="w-5" />
                          <p className="text-[#4A62AA] font-bold hover:text-[#A87A38]">
                            {t.generalites}
                          </p>
                        </div>
                      </Link>
                      
                      <Link href="/students/bacAlafac/institutSup">
                        <div className="flex items-center gap-2 py-2">
                          <img src="/icons/puces_1.png" alt="bullet" className="w-5" />
                          <p className="text-[#4A62AA] font-bold hover:text-[#A87A38]">
                            {t.institutions}
                          </p>
                        </div>
                      </Link>
                      
                      <Link href="/students/bacAlafac/preparerSonBac">
                        <div className="flex items-center gap-2 py-2">
                          <img src="/icons/puces_1.png" alt="bullet" className="w-5" />
                          <p className="text-[#4A62AA] font-bold hover:text-[#A87A38]">
                            {t.preparerBac}
                          </p>
                        </div>
                      </Link>
                      
                      <Link href="/students/bacAlafac/CursusSup">
                        <div className="flex items-center gap-2 py-2">
                          <img src="/icons/puces_1.png" alt="bullet" className="w-5" />
                          <p className="text-[#4A62AA] font-bold hover:text-[#A87A38]">
                            {t.choisirCursus}
                          </p>
                        </div>
                      </Link>
                      
                      <Link href="/students/bacAlafac/Handicap">
                        <div className="flex items-center gap-2 py-2">
                          <img src="/icons/puces_1.png" alt="bullet" className="w-5" />
                          <p className="text-[#4A62AA] font-bold hover:text-[#A87A38]">
                            {t.handicap}
                          </p>
                        </div>
                      </Link>
                      
                      <Link href="/students/bacAlafac/etudeEtranger">
                        <div className="flex items-center gap-2 py-2">
                          <img src="/icons/puces_1.png" alt="bullet" className="w-5" />
                          <p className="text-[#4A62AA] font-bold hover:text-[#A87A38]">
                            {t.etudeEtranger}
                          </p>
                        </div>
                      </Link>
                      
                      <Link href="/students/bacAlafac/atout">
                        <div className="flex items-center gap-2 py-2">
                          <img src="/icons/puces_1.png" alt="bullet" className="w-5" />
                          <p className="text-[#4A62AA] font-bold hover:text-[#A87A38]">
                            {t.atouts}
                          </p>
                        </div>
                      </Link>
                      
                      <Link href="/students/bacAlafac/lexique">
                        <div className="flex items-center gap-2 py-2">
                          <img src="/icons/puces_1.png" alt="bullet" className="w-5" />
                          <p className="text-[#4A62AA] font-bold hover:text-[#A87A38]">
                            {t.lexique}
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
