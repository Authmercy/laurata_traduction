"use client";

import { URLS } from "@/service/url";
import Link from "next/link";
import { useEffect, useState } from "react";
interface FemmeImpact {
  image: string;
  id: number;
  nom: string;
  titre: string;
  description: string;
}
export default function FemmeDimpact() {
  const [selectedFemme, setSelectedFemme] = useState<FemmeImpact | null>(null);
    const [loading, setLoading] = useState(true);

  const [femmeImpact, setFemmeImpact] = useState<FemmeImpact[]>([]);
  useEffect(() => {
        async function fetchFemmeImpact() {
            try {
                const BACKEND_URL = URLS.ONDISPLAY_LADIES;
                if (!BACKEND_URL) {
                    throw new Error("Environment variable URLS.ONDISPLAY_LADIES is not defined");
                }

                const response = await fetch(BACKEND_URL, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        locale: "fr",
                    },
                });

                if (!response.ok) throw new Error("Failed to fetch");
                const data = await response.json();
                const femmeList = Array.isArray(data) ? data : [data];
                setFemmeImpact(femmeList);
                setSelectedFemme(femmeList[0]);
            } catch (error) {
                console.error("Error fetching feeds:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchFemmeImpact();
    }, []);


  
  const maxImages = 5;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) =>
      (prev + maxImages) % femmeImpact.length
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      (prev - maxImages + femmeImpact.length) % femmeImpact.length
    );
  };

  const displayedImages = [];

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


              FEMME D'IMPACT
            </h1></div>
          <div className=" bg-white/70 border-1 p-6  text-start border-[#4A62AA]" >
            <p className="text-[#4A62AA] p-2 text-xl">Embrassez la carrière de vos rêves sans complexe</p>
            <p className="p-2  text-black" >

              Dans notre pays, encore beaucoup trop de jeunes filles hésitent, pour différentes raisons, à embrasser certaines professions traditionnellement exercées par les hommes, notamment dans les domaines techniques, technologiques et scientifiques.
            </p>
            <p className="p-2 text-black" > En leur présentant à intervalle régulier le parcours d’une femme ayant particulièrement réussi dans sa profession, Laurata souhaite contribuer d’une part à encourager les jeunes filles à embrasser sans complexe des filières et professions scientifiques, et d’autre part, à les inspirer à viser l’excellence dans l’exercice de la profession qu’elles auront choisie.</p>


          </div>

        </div>
        <div className="border-4 mt-4 border-x-0 border-[#bd307e] text-black bg-white p-4 text-center shadow-md relative">


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

        </div>

        <div className="flex flex-col items-center mt-8 justify-center">

          {selectedFemme ? (
            <div className="border-2 border-[#bd307e] text-black bg-white p-4 w-[80%] py-12 text-center shadow-md relative">
              <div className="bg-[#bd307e] text-white font-bold px-6 py-2 text-center absolute -top-5 left-1/2 transform -translate-x-1/2">
                {selectedFemme.nom}
                <p className="text-sm font-normal">{selectedFemme.titre}</p>
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