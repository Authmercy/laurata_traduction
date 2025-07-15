"use client";

import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Navbar from "../navbar/navbar";
import FooterMobile from "../footer/footerEnd";
interface FemmeImpact {
  image: string;
  id: number;
  nom: string;
  titre: string;
  description: string;
}
export default function FemmeDimpactMobile() {
  const [selectedFemme, setSelectedFemme] = useState<FemmeImpact | null>(null)
  const [femmeImpact, setFemmeImpact] = useState<FemmeImpact[]>([]);

  useEffect(() => {
    const fetchFemmeImpact = async () => {
      const data: FemmeImpact[] = [
        {
          id: 1,
          image: "/images/background.png",
          nom: "XXXX Edith",
          titre: "Présidente Fondation « Un monde plus équitable »",
          description: "L’impact de la culture générale dans la recherche d’idées novatrices."
        },
        {
          id: 2,
          image: "/images/backgroundEtudiant.jpeg",
          nom: "XXXX Edith",
          titre: "Présidente Fondation « Un monde plus équitable »",
          description: "L’impact de la culture générale dans la recherche d’idées novatrices."
        },
        {
          id: 3,
          image: "/images/image.png",
          nom: "XXXX Edith",
          titre: "Présidente Fondation « Un monde plus équitable »",
          description: "L’impact de la culture générale dans la recherche d’idées novatrices."
        },
        {
          id: 4,
          image: "/images/girl.png",
          nom: "XXXXxxxx Edith",
          titre: "Présidente Fondation « Un monde plus équitable »",
          description: "L’impact de la culture générale dans la recherche d’idées novatrices."
        },
        {
          id: 5,
          image: "/images/backgroundEtudiant.jpeg",
          nom: "XXXXxxxxxxxxxx Edith",
          titre: "Présidente Fondation « Un monde plus équitable »",
          description: "L’impact de la culture générale dans la recherche d’idées novatrices."
        },
        {
          id: 6,
          image: "/images/image.png",
          nom: "XXXXxxxxxxxxx Edith",
          titre: "Présidente Fondation « Un monde plus équitable »",
          description: "L’impact de la culture générale dans la recherche d’idées novatrices."
        },
      ];
      setFemmeImpact(data);
    };

    fetchFemmeImpact();
  }, []);
  const maxImages = 3;
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

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileMenuOpen2, setIsMobileMenuOpen2] = useState(false);

  return (
    <div>
     <div className="min-h-screen   bg-[#34538C]  overflow-auto  w-screen bg-cover  text-justify bg-center bg-no-repeat "  >
         
        <Navbar
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          isMobileMenuOpen2={isMobileMenuOpen2}
          setIsMobileMenuOpen2={setIsMobileMenuOpen2}
        />
        <div className={`${isMobileMenuOpen ? "blur-sm " : ""
          } ${isMobileMenuOpen2 ? "blur-sm " : ""
          } `}>
          <div className="justify-center p-2 text-center text-xl font-bold uppercase bg-[#bd307e] text-white">
            <p>          Femme d'impact</p>
          </div>


          <div

            className="bg-white  mt-8  p-2 py-4 shadow-sm mb-2 hover:shadow-md transition-shadow"
          >
            <p className=" font-bold text-[#4A62AA]">
              Embrassez la carrière de vos rêves sans complexe</p>

            <p className="mt-2 text-black">
              En  présentant à intervalle régulier le parcours d’une femme ayant particulièrement réussi dans sa profession ou dans l'entrepreneuriat, Laurata souhaite contribuer d’une part à encourager les jeunes filles à embrasser sans complexe des filières et professions scientifiques, et d’autre part, à les inspirer à viser l’excellence dans l’exercice de la profession qu’elles auront choisie.
            </p>



          </div>
          <div className="border-4 mt-4 border-x-0 border-[#bd307e] text-black bg-white  text-center shadow-md relative">


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
                        className={`w-36 h-36 rounded-full border-2 shadow-md cursor-pointer ${isCenter ? "border-[#bd307e] scale-110" : "border-white"
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

          <div className="flex flex-col items-center mt-20 justify-center px-2">
            {selectedFemme ? (
              <div className="border-2 border-[#bd307e] text-black bg-white p-4 w-full py-12 text-center shadow-md relative">
                <div className="bg-[#bd307e] text-white font-bold px-4  py-1 text-center  w-8/12  absolute -top-8 left-1/2 transform -translate-x-1/2 bg">
                  {selectedFemme.nom}
                  <p className=" font-normal">{selectedFemme.titre}</p>
                </div>

                <p className="font-bold mt-8 ">
                  {selectedFemme.description}
                </p>
              </div>
            ) : null}
          </div>

        </div>
        <footer className="w-full bg-blue-900    mt-10 text-white text-center">
                                                        <FooterMobile />
                                                      </footer>
      </div>
    
    </div>
  );
}