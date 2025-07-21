"use client";

import { useRouter } from "next/router";
import Image from "next/image";
import en from '@/i18/fr/moreInfo.json';
import fr from '@/i18/fr/moreInfo.json';

export default function MoreInfosSection() {
    const router = useRouter();
    const handleClickInternships = () => {
        router.push(`/students/offresStage`);
    };
    const handleClickEnterprises = () => {
        router.push(`/entreprise/promotion`);
    };
    const handleClickInstitutions = () => {
        router.push(`/institut/referencer`);
    };
 
    const { locale } = router;
    const t = locale === 'en' ? en : fr;
    return (
        <div>
         

  <div className="flex flex-row-3 gap-2 mt-20 p-8">
     
      <div className="flex-1 justify-center">
        <div className="flex flex-row ml-2">
          <Image 
            src="/icons/etudiantIcon2.png" 
            alt="" 
            width={130} 
            height={100} 
          />
          <p className="text-[#A38340] text-xl pt-8 font-bold">
            {t.sections.students.title}
          </p>
        </div>
        <div className="bg-[#9b7d3c] -mt-[1.15rem] space-y-3 h-[350px] px-8 pt-6 text-white text-start">
          <div className="space-y-3 h-[200px]">
            {t.sections.students.points.map((point, index) => (
              <p key={index}>■ {point}</p>
            ))}
          </div>
          <div className="flex text-center items-center justify-center">
            <button
              onClick={handleClickInternships}
              className="px-6 py-2 my-8 bg-white hover:bg-[#e2b758] w-[250px] text-[#9b7d3c] hover:text-white font-bold rounded-lg"
            >
              {t.sections.students.button}
            </button>
          </div>
        </div>
      </div>

   
      <div className="mt-4 flex-1 justify-center">
        <div className="flex flex-row ml-10 gap-2">
          <Image 
            src="/icons/entreprise2.png" 
            alt="" 
            width={70} 
            height={100} 
          />
          <p className="text-[#747272] text-xl pt-4 font-bold">
            {t.sections.companies.title}
          </p>
        </div>
        <div className="bg-[#747272] space-y-3 h-[350px] -mt-3 pt-6 p-8 text-white text-start">
          <div className="space-y-3 h-[200px]">
            {t.sections.companies.points.map((point, index) => (
              <p key={index}>■ {point}</p>
            ))}
          </div>
          <div className="flex text-center justify-center">
            <button
              onClick={handleClickEnterprises}
              className="px-6 py-2 my-8 bg-white hover:bg-[#999595] text-[#747272] hover:text-white font-bold rounded-lg"
            >
              {t.sections.companies.button}
            </button>
          </div>
        </div>
      </div>

   
      <div className="mt-5 flex-1 justify-center">
        <div className="flex flex-row ml-9 gap-2">
          <Image 
            src="/icons/institutsup2.png" 
            alt="" 
            width={70} 
            height={100} 
          />
          <p className="text-[#4A62AA] text-xl pt-3 font-bold">
            {t.sections.institutions.title}
          </p>
        </div>
        <div className="bg-[#4A62AA] -mt-3 space-y-3 h-[350px] p-8 py-6 text-white text-start">
          <div className="space-y-3 h-[200px]">
            {t.sections.institutions.points.map((point, index) => (
              <p key={index}>■ {point}</p>
            ))}
          </div>
          <div className="flex text-center justify-center">
            <button
              onClick={handleClickInstitutions}
              className="px-6 py-2 my-8 bg-white text-[#4A62AA] hover:text-white hover:bg-[#416beb] font-bold rounded-lg"
            >
              {t.sections.institutions.button}
            </button>
          </div>
        </div>
      </div>
    </div>

        </div>

    );
}
