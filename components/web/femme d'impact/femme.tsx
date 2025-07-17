"use client";
import en from '@/i18/en/student/femme.json';
import fr from '@/i18/fr/student/femme.json';
import UseFemmeService from '@/service/femme';
import Link from 'next/link';
import { useRouter } from "next/router";

export default function FemmeDimpact() {
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
expertDetails,error
   } = UseFemmeService()
   const router = useRouter();

    const { locale } = router;
    const t = locale === 'en' ? en : fr;
 
  for (let i = 0; i < maxImages; i++) {
    const index = (currentIndex + i) % femmeImpact.length;
    displayedImages.push(femmeImpact[index]);
  }

  return (
    <div className="flex flex-col   md:flex-row  ">
      <div className="flex-grow md:w-2/3 p-8">

        <div className="   flex flex-col gap-1 pt-2 mt-6">
          <div className="flex justify-center">
            <h1 className=" bg-[#bd307e] text-white  text-2xl text-center font-extrabold w-full  p-2">


                            {t.title}
            </h1></div>
          <div className=" bg-white/70 border-1 p-6  text-start border-[#4A62AA]" >
            <p className="text-[#4A62AA] p-2 text-xl">  {t.intro}</p>
            <p className="p-2  text-black" >

             {t.text}</p>
            <p className="p-2 text-black" >    {t.text2}</p>


          </div>

        </div>
        <div className="border-4 mt-4 border-x-0 border-[#bd307e] text-black bg-white p-4 text-center shadow-md relative">

  {error && (
    <div className="p-8 text-center text-red-600">
      <p> {t.erreur}</p>
    </div>
  )}

 
  {!error && !femmeImpact && (
    <div className="p-8 text-center">
      <p> {t.loading}</p>
    </div>
  )}

  {!error && femmeImpact?.length === 0 && (
    <div className="p-8 text-center">
      <p> {t.nodata}</p>
    </div>
  )}
 {!error && femmeImpact?.length > 0 && (
    <>
          <div className="slider-container p-4 relative bg-[#f7e9d6] h-auto flex justify-center gap-4">
            {femmeImpact.slice(currentIndex, currentIndex + maxImages).map((femme, index) => {
              const isCenter = index === Math.floor(maxImages / 2);

              if (isCenter && selectedFemme?.id !== femme.id) {
                setTimeout(() => setSelectedFemme(femme), 0);
              }

              return (
                <div key={femme.id} className="relative">
                  <Link href={`/femme/${femme.id}`}>
                    <img
                      src={femme.image}
                      alt={`slider-${femme.id}`}
                      className={`w-60 h-60 rounded-full border-2 shadow-md cursor-pointer ${isCenter ? "border-[#bd307e] scale-110" : "border-white"
                        }`}
                    />
                  </Link>
                </div>
              );
            })}

            <button
              onClick={() =>
                setCurrentIndex((prev) =>
                  (prev - maxImages + femmeImpact.length) % femmeImpact.length
                )
              }
              className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-2xl bg-black bg-opacity-50 p-2 rounded-full"
            >
              &#10094;
            </button>

            <button
              onClick={() =>
                setCurrentIndex((prev) =>
                  (prev + maxImages) % femmeImpact.length
                )
              }
              className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-2xl bg-black bg-opacity-50 p-2 rounded-full"
            >
              &#10095;
            </button>

          </div>
 </>
    
  )}
        </div>

        <div className="flex flex-col items-center mt-8 justify-center">

          {selectedFemme ? (
            <div className="border-2 border-[#bd307e] text-black bg-white p-4 w-[80%] py-12 text-center shadow-md relative">
              <div className="bg-[#bd307e] text-white font-bold px-6 py-2 text-center absolute -top-5 left-1/2 transform -translate-x-1/2">
                {selectedFemme.firstName} {selectedFemme.lastName}
                <p className="text-sm font-normal">{selectedFemme.title}</p>
              </div>

              <p className="font-bold p-2 ">
                {selectedFemme.description}
              </p>
            </div>
          ) : null}



        </div>


      </div>
    </div>


  );
}