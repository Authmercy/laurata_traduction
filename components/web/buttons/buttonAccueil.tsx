"use client";

import { useRouter } from "next/router";
import en from '@/i18/en/buttons.json';
import fr from '@/i18/fr/buttons.json';
export default function ButtonAccueil() {



      const router = useRouter();
      const { locale } = router;
      const t = locale === 'en' ? en : fr;
  const handleClick = () => {
    router.push('/moreInfos/');
  };
  const handleClick1 = () => {
    router.push('/students/offresStage');
  };
  return (

    <div className=" flex flex-row gap-2 ml-24  w-full">
      <button
        onClick={() => handleClick()}
        className="bg-[#4A62AA] hover:bg-[#6c88db]   text-xl font-semibold text-white px-8 py-2 rounded-md flex-grow"
      >
    {t.home.buttons.institutions.split('\n').map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </button>

      <button
        onClick={() => handleClick()}
        className="bg-[#969696] hover:bg-[#928282]  text-xl font-semibold text-white px-8 py-2 rounded-md flex-grow"
      >
   {t.home.buttons.companies.split('\n').map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </button>

      <button
        onClick={() => handleClick()}
        className="bg-[#A38340]  hover:bg-[#e9bd5e]  text-xl font-semibold text-white px-12 py-2 rounded-md flex-grow"
      >
        {t.home.buttons.students.split('\n').map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </button>

      <button
        onClick={() => handleClick1()}
        className="bg-[#E1C32F] hover:bg-[#b89f22]  text-xl font-semibold text-white px-6 py-2 rounded-md flex-grow"
      >
        {t.home.buttons.internships}
      </button>
    </div>


  );
}