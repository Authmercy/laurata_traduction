"use client";
import Image from "next/image";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
interface FemmeImpact {
  image: string;
  id: number;
  text: string;
  poste: string;
  entreprise: string;
  nom: string

}
export default function DetailFemme() {
  const [femmeImpact, setFemmeImpact] = useState<FemmeImpact[]>([]);

  useEffect(() => {
    const fetchFemmeImpact = async () => {
      const data: FemmeImpact[] = [
        {
          id: 1,
          image: "/images/backgroundEtudiant.jpeg",

          text: "« Nous devons promouvoir une société plus juste et plus équitable. Cela passera par la sensibilisation des tout-petits aux inégalités et aux handicaps. »",
          poste: " Présidente ADS",
          entreprise: " Expert en Gestion & Management",
          nom: " XXXX Édith"
        },

      ];
      setFemmeImpact(data);
    };

    fetchFemmeImpact();
  }, []);

  return (
    <div className="flex flex-col   md:flex-row  ">
      <div className="flex-grow md:w-2/3 p-8">

        <div className="   flex flex-col gap-1 pt-2 mt-6">
          <div className="flex justify-center">
            <h1 className=" bg-[#bd307e] text-white  text-2xl text-center font-extrabold w-full  p-2">


              FEMME D'IMPACT
            </h1></div>


        </div>
        <div className="border-4 mt-4 border-x-0 border-[#bd307e] text-black bg-white/70 p-4 shadow-md relative">

          <p className="text-xl text-[#4A62AA] p-2 ">
            L’impact de la culture générale dans la recherche d’idées novatrices.
          </p>
          <div className="flex flex-col gap-6">
            {femmeImpact.map((item) => (
              <div key={item.id} className="flex flex-row   p-4 ">

                <div className="flex flex-col items-center w-1/3">
                  <div className="relative w-56 h-56">
                    <Image src={item.image} alt={item.nom} layout="fill" className="object-cover" />
                  </div>
                  <div className="text-center mt-4">
                    <p className="text-lg font-bold">{item.nom}</p>
                    <p className="text-sm">{item.poste}</p>
                    <p className="text-sm italic">{item.entreprise}</p>
                  </div>
                </div>


                <div className="w-2/3 bg-white/20 flex flex-col justify-center">
                  <p className="text-black text-center f">{item.text}</p>
                  <p className="text-[#4A62AA] text-center font-bold mt-2">{item.nom}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
        <div className="flex flex-row gap-8 mt-4  justify-end">
          <button className="px-6 py-2  bg-[#4A62AA] rounded-xl text-white font-bold ">
            Écouter le texte
          </button>
          <button className="px-6 py-2  bg-[#A87A38] rounded-xl text-white font-bold ">
            Retour à l'accueil
          </button>
        </div>
      </div>
    </div>


  );
}