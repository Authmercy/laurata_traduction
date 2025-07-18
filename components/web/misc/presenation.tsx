"use client";
import React from "react";
import en from '@/i18/en/misc/apropos.json';
import fr from '@/i18/fr/misc/apropos.json';
import { useRouter } from "next/router";

import Image from "next/image";
import ButtonAccueil from "@/components/web/buttons/buttonAccueil";

export default function PresentaionDuSite() {
    const router = useRouter();
   const { locale } = router;
    const t = locale === 'en' ? en : fr;
    return (
        <div className="p-2  text-black" >
            <div className="flex gap-1 w-full">
                <div className="flex justify-center flex-col">

                    <div className="my-4  ">
                        <p> {t.plateform}<span className="text-[#4A62AA] text-xl font-bold"> LAURATA.COM</span> {t.p1}</p>
                    </div>
                    <div className="mb-4">

                        <p > <span className="text-[#4A62AA]  ">  ▌ </span> {t.p2} <span className="text-[#4A62AA] text-xl font-bold"> LAURATA </span>{t.p22}

 </p>
                    </div>

                    <div className="mb-4">

                        <p > <span className="text-[#4A62AA]  ">  ▌ </span> <span className="text-[#4A62AA] text-xl font-bold"> LAURATA </span>{t.p3}</p>




                    </div>
                   
                    

     
          <div className="mb-4">
            <p className="my-2 text-[#4A62AA] text-xl font-bold">
              {t.importantNotes}
            </p>
            <p className="my-2">{t.note1}</p>
            <p className="my-2">{t.note2}</p>
          </div>

                    <div className="flex flex-col justify-center gap-2 text-center">
                        <div className="text-[#A38340] font-bold pt-8 text-xl ">   {t.shareTitle}</div>
                        <div className="flex flex-row  justify-center gap-2">
                            <img src="/icons/icons8-whatsapp-logo-64(1).png" alt="social" className=" mt-2 w-[52px] h-[52px]" />
                            <img src="/icons/icons8-facebook-logo-64.png" alt="social" className="" />
                            <img src="/icons/icons8-linkedin-logo-64.png" alt="social" className=" mt-1 w-[60px] h-[60px]" />
                            <img src="/icons/icons8-x-64(1).png" alt="social" className=" mt-1 w-[60px] h-[60px]" />
                        </div>
                    </div>

                    <div className="my-10 flex flex-row justify-center gap-4">
                        <ButtonAccueil />
                    </div>
                </div>
            </div>

        </div>
    );
}
