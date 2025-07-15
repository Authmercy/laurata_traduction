"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "../navbar/navbar";
import FooterMobile from "../footer/footerEnd";

export default function ServicesComponentMobile() {




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
          <div className="justify-center p-2 text-center text-xl font-bold uppercase bg-[#9b6e0f] text-white">
            <p> Services aux étudiants</p>
          </div>



          <div className="bg-white w-full px-3 py-6">
            <div className=" ">
              <p className="font-bold  text-lg text-center">
                Mieux se connaitre pour bien s'orienter et mieux préparer son insertion professionnelle
              </p>
              <p className="mt-6 text-black">
                Une équipe de professionnels dédiée à vous accompagner dans le choix de la filière d'étude et à faciliter votre insertion professionnelle.
              </p>
            </div>

            <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 md:grid-cols-3 mt-2 p-4 sm:px-6 lg:px-10">
              <div className="bg-[#A87A38] rounded-2xl text-white shadow-lg">

                <div className="p-5">
                  <p className="font-semibold text-center ">ORIENTATION</p>
                  <p className="mt-2 ">
                    Nos conseillers en orientation vous aident à identifier et à choisir la(les) filière(s) ou le(s) métier(s) selon le mieux vos compétences, vos objectifs et votre personnalité.
                  </p>
                </div>
              </div>

              <div className="bg-[#3f5eaa]  rounded-2xl text-white shadow-lg">

                <div className="p-5">
                  <p className="font-semibold text-center">MÉMOIRES & THÈSES</p>
                  <p className="mt-2 ">
                    Relecture et révision des mémoires de fin d’études, thèses et autres travaux par des linguistes et rédacteurs chevronnés en langue anglaise, française, allemande ou espagnole.
                  </p>
                </div>
              </div>

              <div className="bg-[#254745] text-white  rounded-2xl shadow-lg">

                <div className="p-5">
                  <p className="font-semibold  text-center">ÉTUDIANTS ÉTRANGERS</p>
                  <p className="mt-2 ">
                    Assistance pour les démarches concernant : la pré-inscription, l’obtention d’un visa étudiant ; l’installation : recherche de logement, etc.
                  </p>
                </div>
              </div>

              <div className="bg-[#fcdaa7] text-black rounded-2xl shadow-lg">

                <div className="p-5">
                  <p className="font-semibold  text-center">RENCONTRES AVEC DES PROFESSIONNELS</p>
                  <p className="mt-2 ">
                    Découvre les métiers qui t’intéressent et échange avec des professionnels qui les exercent.
                  </p>
                </div>
              </div>

              <div className="bg-[#A87A38] rounded-2xl text-white shadow-lg">

                <div className="p-5">
                  <p className="font-semibold text-center ">MENTORAT & INSERTION PROFESSIONNELLE</p>
                  <p className="mt-2 ">
                    Nos experts vous accompagnent dans la réalisation de votre projet professionnel (techniques de recherche d’emploi, plan d’affaires, etc.).
                  </p>
                </div>
              </div>

              <div className="bg-[#3f5eaa]  rounded-2xl text-white shadow-lg">

                <div className="p-5">
                  <p className="font-semibold  text-center">ÉTUDIER EN ALLEMAGNE</p>
                  <p className="mt-2 ">
                    Notre réseau de professionnels formés en Allemagne vous donne tous les conseils pour postuler et bien préparer vos études dans les universités et écoles d’ingénieurs allemandes.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-6 px-4">
              <p className=" text-black ">
                <Link href="/misc/nous_contacter" className="font-bold hover:text-xl">
                  Contactez-nous
                </Link>{" "}
                pour plus d’informations ou pour faire part d’une requête particulière.
              </p>
            </div>

          </div>


        </div>
      </div>
    <footer className="w-full bg-blue-900    text-white text-center">
                                                        <FooterMobile />
                                                      </footer>
    </div>
  );
}
