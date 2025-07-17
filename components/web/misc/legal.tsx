"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import ButtonAccueil from "@/components/web/buttons/buttonAccueil";
import en from '@/i18/en/misc/mention.json';
import fr from '@/i18/fr/misc/mention.json';

export default function LegalSection() {
const router = useRouter();
      const { locale } = router;
      const t = locale === 'en' ? en : fr;
  
  return (
    <div className="p-2 md:pl-8 text-black">
      <div className="flex pl-6 gap-1 w-full">
        <div className="flex justify-center flex-col">
        
          <div className="mb-4">
            <p dangerouslySetInnerHTML={{ __html: t.intro }} />
          </div>

          <div className="mb-4">
            <p className="my-2">{t.contact}</p>
            <p className="my-2">{t.terms}</p>
          </div>

          <div className="mt-36 flex flex-row justify-center gap-4">
            <ButtonAccueil />
          </div>
        </div>
      </div>
    </div>
  );
}
