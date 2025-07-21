"use client";
import React from "react";
import Link from "next/link";


import en from '@/i18/en/student/atout.json';
import fr from '@/i18/fr/student/atout.json';
import { useRouter } from "next/router";


export default function AtoutComponent() {
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
            <div className="p-4 px-8 text-xl text-center bg-[#A87A38] h-14 mt-4 flex items-center justify-center">
              {t.atoutsTitle}
            </div>
          </div>

          <div className="flex flex-row my-4 gap-1">
            <div className="flex-1"></div>
            <div className="flex-2 bg-white text-black p-4 text-end">
              <p>
                {t.quote}
                <br />
                <span className="text-[#4A62AA] font-semibold">
                  {t.quoteAuthor}
                </span>
              </p>
            </div>
          </div>

          <div className="mt-1 text-black bg-white/70 p-8 space-y-4">
            <div>
              <p className="text-[#4A62AA] font-bold text-lg">
             ■    {t.bilinguismeTitle}
              </p>
              <p>{t.bilinguismeText}</p>
            </div>
            <div>
              <p className="text-[#4A62AA] font-bold text-lg">
              ■   {t.lmdTitle}
              </p>
              <p>{t.lmdText}</p>
            </div>
            <div>
              <p className="text-[#4A62AA] font-bold text-lg">
            ■     {t.siegeTitle}
              </p>
              <p>{t.siegeText}</p>
            </div>
            <div>
              <p className="text-[#4A62AA] font-bold text-lg">
          ■       {t.ipesTitle}
              </p>
              <p>{t.ipesText}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};