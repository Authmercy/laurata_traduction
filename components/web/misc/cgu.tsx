"use client";
import React, { useState, useEffect } from "react";

import { useRouter } from "next/router";

import en from '@/i18/en/misc/cgu.json';
import fr from '@/i18/fr/misc/cgu.json';

export default function CguComponent() {
    const router = useRouter();
    const handleClick = () => {
        router.push('/moreInfos/');
    };
    const handleClick1 = () => {
        router.push('/students/offresStage');
    };


    const { locale } = router;
    const t = locale === 'en' ? en : fr;
return (
    <div className="p-2 text-black">
      <div className="flex gap-1 w-full">
        <div className="flex justify-center flex-col">
      
          <div className="mb-4">
            <p dangerouslySetInnerHTML={{ __html: t.intro }} />
          </div>

     
          <div className="mb-4">
            <h1 className="mb-4 font-bold">{t.sections.acceptance.title}</h1>
            <p>{t.sections.acceptance.content}</p>
          </div>

     
          <div className="mb-4">
            <h1 className="mb-4 font-bold">{t.sections.purpose.title}</h1>
            <p className="mb-2">{t.sections.purpose.text}</p>
            {t.sections.purpose.points.map((point, index) => (
              <p key={index} className="mb-2">― {point}</p>
            ))}
          </div>

      
          <div className="mb-4">
            <h1 className="mb-4 font-bold">{t.sections.availability.title}</h1>
            <p className="mb-2">{t.sections.availability.content}</p>
          </div>

  
          <div className="mb-4">
            <h1 className="mb-4 font-bold">{t.sections.quality.title}</h1>
            {t.sections.quality.points.map((point, index) => (
              <p key={index} className="mb-2">{point}</p>
            ))}
          </div>

     
          <div className="mb-4">
            <h1 className="mb-4 font-bold">{t.sections.liability.title}</h1>
            {t.sections.liability.points.map((point, index) => (
              <p key={index} className="mb-2">{point}</p>
            ))}
          </div>


          <div className="mb-4">
            <h1 className="mb-4 font-bold">{t.sections.notification.title}</h1>
            {t.sections.notification.points.map((point, index) => (
              <p key={index} className="mb-2">{point}</p>
            ))}
          </div>

        
          <div className="mb-4">
            <h1 className="mb-4 font-bold">{t.sections.ip.title}</h1>
            {t.sections.ip.points.map((point, index) => (
              <p key={index} className="mb-2">{point}</p>
            ))}
          </div>

        
          <div className="mb-4">
            <h1 className="mb-4 font-bold">{t.sections.links.title}</h1>
            <p className="mb-2">{t.sections.links.content}</p>
          </div>

       
          <div className="mb-4">
            <h1 className="mb-4 font-bold">{t.sections.privacy.title}</h1>
            {t.sections.privacy.points.map((point, index) => (
              <p key={index} className="mb-2">{point}</p>
            ))}
          </div>

          
          <div className="mb-4">
            <h1 className="mb-4 font-bold">{t.sections.forum.title}</h1>
            {t.sections.forum.points.map((point, index) => (
              <p key={index} className="mb-2">{point}</p>
            ))}
          </div>

          <div className="mb-4">
            <h1 className="mb-4 font-bold">{t.sections.jurisdiction.title}</h1>
            {t.sections.jurisdiction.points.map((point, index) => (
              <p key={index} className="mb-2">{point}</p>
            ))}
          </div>

      
          <div className="my-10 flex flex-row justify-center gap-4">
            <button 
              onClick={handleClick} 
              className="bg-[#4A62AA] text-white px-12 py-2 rounded-md"
              dangerouslySetInnerHTML={{ __html: t.buttons.institutions }}
            />
            <button 
              onClick={handleClick} 
              className="bg-[#969696] text-white px-12 py-2 rounded-md"
              dangerouslySetInnerHTML={{ __html: t.buttons.companies }}
            />
            <button 
              onClick={handleClick} 
              className="bg-[#A38340] text-white px-12 py-2 rounded-md"
              dangerouslySetInnerHTML={{ __html: t.buttons.students }}
            />
            <button 
              onClick={handleClick1} 
              className="bg-[#E1C32F] text-white px-12 py-2 rounded-md"
              dangerouslySetInnerHTML={{ __html: t.buttons.internships }}
            />
          </div>
        </div>
      </div>
    </div>
    );
}
