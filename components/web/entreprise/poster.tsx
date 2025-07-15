"use client";
import Image from "next/image";
import en from '../../../i18/en/entreprise/Poster.json';
import fr from '../../../i18/fr/entreprise/Poster.json';
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
export default function Poster() {

      const router = useRouter();
      const { locale } = router;
      const t = locale === 'en' ? en : fr;

return (
    <div className="flex flex-col md:flex-row">
      <div className="flex-grow md:w-2/3 p-8">
        <h1 className="text-[#A87A38] text-2xl text-center font-extrabold w-full pt-4 md:mx-8">
          {t.title}
        </h1>
        <div className="bg-white/70 pt-2 pb-12 mt-8">
          <div className="border-1 p-6 text-center border-[#4A62AA]">
            <p className="text-[#4A62AA] text-xl font-bold">{t.heading}</p>
          </div>
        </div>
        
        <div className="-mt-10 text-black">
          <div className="flex flex-col lg:flex-row justify-center gap-1 my-1">
      
            <div className="bg-white/70 p-8 border-y w-[25%] border-[#A87A38] text-center rounded-md">
              <p className="justify-center -mt-6 text-[#4A62AA]">{t.reasons.free.title}</p>
              <p className="pt-10">{t.reasons.free.text}</p>
            </div>
            
     
            <div className="bg-white/70 text-center border-y flex-1 border-[#A87A38] rounded-md p-4">
              <p className="text-[#4A62AA] -mt-2">{t.reasons.contribute.title}</p>
              <p className="pt-10">{t.reasons.contribute.text}</p>
              <div className="flex flex-col lg:flex-row mt-4 justify-center items-center gap-4">
                <div>
                  <Image
                    src="/images/odd.png"
                    alt="ODD-odd"
                    width={140}
                    height={130}
                    className="object-contain"
                  />
                </div>
                <div>
                  <Image
                    src="/images/ODD-4.svg"
                    alt="ODD-4"
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </div>
                <div>
                  <Image
                    src="/images/ODD-10.svg"
                    alt="ODD-10"
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
            
           
            <div className="bg-white/70 border-y w-[25%] border-[#A87A38] text-center p-4 rounded-md">
              <p className="text-[#4A62AA] -mt-2">{t.reasons.visibility.title}</p>
              <p className="pt-10">{t.reasons.visibility.text}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white/70 pb-2">
          <h1 className="bg-[#4A62AA] text-white text-start pl-10 mt-4 p-2">
            {t.how_to.title}
          </h1>
          <p className="text-black ml-8 mt-6">
            <span className="text-[#4A62AA] font-bold">1.</span> {t.how_to.step1} <span className="text-[#4A62AA] font-bold">{t.how_to.email}</span>
          </p>
          <p className="text-black ml-8">
            <span className="text-[#4A62AA] font-bold">2.</span> {t.how_to.step2}
          </p>
        </div>
      </div>
    </div>


  );
}