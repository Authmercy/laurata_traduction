"use client";
import Link from "next/link"
import { useRouter } from "next/router";

import en from '../../../i18/en/entreprise/promotion.json';
import fr from '../../../i18/fr/entreprise/promotion.json';

export default function Visibilite() {

  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : fr;
   return (
    <div className="flex flex-col md:flex-row">
      <div className="flex-grow md:w-2/3 p-8">
        <h1 className="text-[#A87A38] text-2xl text-center font-extrabold w-full pt-4 md:mx-8">
          {t.title}
        </h1>
        <div className="bg-white/70 pt-2 mt-8">
          <div className="border-1 p-6 text-start border-[#4A62AA]">
            <p className="text-[#4A62AA] text-xl">{t.subtitle1}</p>
            <p className="mt-4 text-black">
              {t.text1}
            </p>
          </div>
          <div className="mt-6 border-4 border-x-0 text-black border-[#A87A38]">
            <div className="flex flex-col lg:flex-row flex-grow justify-center gap-1 my-1">
              <div className="bg-[#A87A38]/10 p-6 w-4/12 text-center">
                <p className="text-[#4A62AA] font-bold">{t.valoriser}</p>
                <p>{t.valoriserText}</p>
              </div>
              <div className="bg-[#A87A38]/30 text-center items-stretch p-6">
                <p className="text-[#4A62AA] font-bold">{t.faireConnaitre}</p>
                <p>{t.faireConnaitreText}</p>
              </div>
              <div className="bg-[#A87A38]/40 text-center p-6">
                <p className="text-[#4A62AA] font-bold">{t.obtenir}</p>
                <p>{t.obtenirText}</p>
              </div>
              <div className="bg-[#A87A38]/50 text-center p-6">
                <p className="text-[#4A62AA] font-bold">{t.communiquer}</p>
                <p>{t.communiquerText}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white/70 p-6">
          <p className="text-[#4A62AA] text-xl">
            {t.subtitle2}
          </p>
          <p className="mt-2 text-black">
            {t.text2}
          </p>
        </div>
        <p className="mt-10 text-white text-center">
          <span className="font-extrabold">
            <Link href="/misc/nous_contacter" className="hover:text-xl">
           {t.contact}
            </Link>
          </span> {t.contactText}
        </p>
      </div>
    </div>


    );
}