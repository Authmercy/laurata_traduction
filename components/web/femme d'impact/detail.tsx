"use client";
import en from '@/i18/en/student/femme.json';
import fr from '@/i18/fr/student/femme.json';
import UseFemmeService from '@/service/femme';
import Image from "next/image";

import { useRouter } from "next/router";



export default function DetailFemme() {
  const {
    maxImages,
    handlePrev,
    handleNext,
    displayedImages,
    setSelectedFemme,
    errorMessage,
    selectedFemme,
    setFemmeImpact,
    setErrorMessage,
    handleToggle,
    open,
    setOpen,
    femmeImpact,
    currentIndex,
    setCurrentIndex,
    details,
    handleViewDetails,
    expertDetails, error
  } = UseFemmeService()
  const router = useRouter();

  const { locale } = router;
  const t = locale === 'en' ? en : fr;


  return (
    <div className="flex flex-col   md:flex-row  ">
      <div className="flex-grow md:w-2/3 p-8">

        <div className="   flex flex-col gap-1 pt-2 mt-6">
          <div className="flex justify-center">
            <h1 className=" bg-[#bd307e] text-white  uppercase text-2xl text-center font-extrabold w-full  p-2">


              {t.title}
            </h1></div>


        </div>
        <div className="border-4 mt-4 border-x-0 border-[#bd307e] text-black bg-white/70 p-4 shadow-md relative">


          <div className="flex flex-col gap-6">
            {expertDetails ? (
              <div key={expertDetails.id} className="flex flex-row   p-4 ">

                <div className="flex flex-col items-center w-1/3">
                  <div className="relative w-56 h-56">
                    <Image src={expertDetails.image} alt={expertDetails.lastName} layout="fill" className="object-cover" />
                  </div>
                  <div className="text-center mt-4">
                    <p className="text-lg font-bold">{expertDetails.firstName} {expertDetails.lastName} </p>
                    <p className="text-sm">{expertDetails.title}</p>
                    <p className="text-sm text-blue-600 italic">{expertDetails.linkedin}</p>
                    <p className="text-sm text-blue-600 italic">{expertDetails.website}</p>
                  </div>
                </div>


                <div className="w-2/3 bg-white/20 px-2 flex flex-col justify-center">

                  {expertDetails.interview?.map((item: any, index: any) => (
                    <div key={item.id} className="space-y-2">
                      <h3 className="font-semibold   italic text-[#4A62AA]  mt-6 text-lg">- {item.question}</h3>
                      <p className="">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

            ) : (
              <div>{t.loading}</div>
            )}
          </div>

        </div>
        <div className="flex flex-row gap-8 mt-4  justify-end">
          <button className="px-6 py-2  bg-[#4A62AA] rounded-xl text-white font-bold ">
            {t.ecouter}
          </button>
          <button className="px-6 py-2  bg-[#A87A38] rounded-xl text-white font-bold ">
            {t.retour}
          </button>
        </div>
      </div>
    </div>


  );
}