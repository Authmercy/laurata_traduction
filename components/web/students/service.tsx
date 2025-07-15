"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import en from '../../../i18/en/student/service.json';
import fr from '../../../i18/fr/student/service.json';

import { useRouter } from "next/router";

export default function ServicesComponent() {
    const router = useRouter();

  const { locale } = router;
    const t = locale === 'en' ? en : fr;

return (
  <div className="p-2 mt-12 md:pl-8">
    <div className="flex flex-row gap-20">
      <div className="flex-1 bg-[#A87A38] font-bold text-center justify-center px-8 py-4 text-2xl uppercase text-white">
        {t.title}
      </div>
    </div>
    <div className="w-5/12 px-8 py-2 text-black"></div>
    <div className="flex flex-row mt-4 gap-1">
      <div className="flex-1"></div>
      <div className="flex-1 bg-white text-black p-2 text-end">
        <p className="">
          {t.quote}
          <span className="text-[#4A62AA] font-bold"> {t.author}</span>
        </p>
      </div>
    </div>
    <div className="mt-2 bg-white">
      <div className="px-10 p-4">
        <p className="font-bold text-lg">{t.subtitle}</p>
        <p className="mt-6 text-black">{t.description}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 gap-y-20 mt-16 p-4 px-10">
        <div className="bg-[#A87A38] rounded-2xl text-white shadow-lg">
          <div className="flex justify-start">
            <Image alt="" className="object-cover -mt-16" src="/icons/img.png" width={100} height={80} />
          </div>
          <div className="p-5">
            <p className="font-semibold">{t.services.orientation.title}</p>
            <p className="mt-2">{t.services.orientation.description}</p>
          </div>
        </div>

        <div className="bg-[#3f5eaa] p-5 rounded-2xl text-white shadow-lg">
          <div className="flex justify-start">
            <Image alt="" className="object-cover -mt-24" src="/icons/img3.png" width={100} height={80} />
          </div>
          <div className="p-5">
            <p className="font-semibold">{t.services.thesis.title}</p>
            <p className="mt-2">{t.services.thesis.description}</p>
          </div>
        </div>

        <div className="bg-[#e0dbd4] p-5 rounded-2xl shadow-lg">
          <div className="flex justify-start">
            <Image alt="" className="object-cover -mt-24" src="/icons/img2.png" width={100} height={80} />
          </div>
          <div className="p-5">
            <p className="font-semibold">{t.services.international.title}</p>
            <p className="mt-2">{t.services.international.description}</p>
          </div>
        </div>

        <div className="bg-[#e3dbcf] p-5 rounded-2xl shadow-lg">
          <div className="flex justify-start">
            <Image alt="" className="object-cover -mt-24" src="/icons/img6.png" width={100} height={80} />
          </div>
          <div className="p-5">
            <p className="font-semibold">{t.services.professionals.title}</p>
            <p className="mt-2">{t.services.professionals.description}</p>
          </div>
        </div>

        <div className="bg-[#A87A38] p-5 rounded-2xl text-white shadow-lg">
          <div className="flex justify-start">
            <Image alt="" className="object-cover -mt-24" src="/icons/img5.png" width={100} height={80} />
          </div>
          <div className="p-5">
            <p className="font-semibold">{t.services.mentoring.title}</p>
            <p className="mt-2">{t.services.mentoring.description}</p>
          </div>
        </div>

        <div className="bg-[#3f5eaa] p-5 rounded-2xl text-white shadow-lg">
          <div className="flex justify-start">
            <Image alt="" className="object-cover -mt-24" src="/icons/img6.png" width={100} height={80} />
          </div>
          <div className="p-5">
            <p className="font-semibold">{t.services.germany.title}</p>
            <p className="mt-2">{t.services.germany.description}</p>
          </div>
        </div>
      </div>
    </div>

    <div className="text-center mt-10">
      <p className="font-bold text-white">
        <Link href="/misc/nous_contacter" className="hover:text-xl">
          {t.contact.split(' ')[0]}
        </Link> {t.contact.split(' ').slice(1).join(' ')}
      </p>
    </div>
  </div>
);
}
