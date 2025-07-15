"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Navbar from "../navbar/navbar";
import FooterMobile from "../footer/footerEnd";
interface FemmeImpact {
  image: string;
  id: number;
  text: string;
  poste: string;
  entreprise: string;
  nom: string

}
export default function DetailFemmeMobile() {
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
            <p>           FEMME D'IMPACT </p>
          </div>


          <div className="border-4 mt-8 border-x-0 border-[#4A62AA] text-black bg-white/70 p-4 shadow-md relative">

            <p className="text-xl text-[#4A62AA] p-2 ">
              L’impact de la culture générale dans la recherche d’idées novatrices.
            </p>
            <div className="flex flex-col gap-6">
              {femmeImpact.map((item) => (
                <div key={item.id} className="flex flex-col   p-4 ">

                  <div className="flex flex-col items-center ">
                    <div className="relative w-56 h-56">
                      <Image src={item.image} alt={item.nom} layout="fill" className="object-cover" />
                    </div>
                    <div className="text-center mt-4">
                      <p className="text-lg font-bold">{item.nom}</p>
                      <p className="text-sm">{item.poste}</p>
                      <p className="text-sm italic">{item.entreprise}</p>
                    </div>
                  </div>


                  <div className=" 0flex flex-col justify-center">
                    <p className="text-black text-center f">{item.text}</p>
                    <p className="text-[#4A62AA] text-center font-bold mt-2">{item.nom}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
          <div className="flex flex-row gap-8 mt-4  justify-center">
            <button className="px-3 py-2  bg-[#bd307e] rounded-xl text-white font-bold ">
              Écouter le texte
            </button>
            <button className="px-3 py-2  bg-[#A87A38] rounded-xl text-white font-bold ">
              Retour à l'accueil
            </button>
          </div>


        </div>
        <footer className="w-full bg-blue-900    mt-10 text-white text-center">
                                                        <FooterMobile />
                                                      </footer>
      </div>
  
    </div>
  );
}