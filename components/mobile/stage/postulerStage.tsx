"use client";
import React, { useState, useEffect } from "react";

import { useRouter } from "next/router";
import Link from "next/link";
import Navbar from "../navbar/navbar";
import FooterMobile from "../footer/footerEnd";



export default function PostulerStageMobile() {

  const router = useRouter();

  const handleClick = () => {
    router.push("/students/premierEmploi");
  }; const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileMenuOpen2, setIsMobileMenuOpen2] = useState(false);



  return (
    <div>
         <div className="min-h-screen  text-black  bg-[#4A62AA]  overflow-auto  w-screen bg-cover  text-justify bg-center bg-no-repeat "  >
         
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
            <p>         pOSTULER à un stage</p>
          </div>


          <div

            className="bg-white/70   mt-8  p-2 py-4 shadow-sm mb-2 hover:shadow-md transition-shadow"
          >
            <p className=" py-2">
              Ci-dessous  deux options   efficaces  pour trouver votre stage :
            </p>
            <div className="bg-white  p-6">
              <p>
                <span className="text-[#4A62AA] font-bold">
                  1. Consultez régulièrement notre section « Offres de stage » </span> pour voir les annonces publiées ;
              </p>
              <br />
              <p>
                <span className="text-[#4A62AA] font-bold">
                  2.   Envoyez ou déposez des candidatures spontanées
                </span> de qualité à des entreprises ciblées.
              </p>
            </div>
            <div

              className="     p-2 px-6 shadow-sm mb-2 cursor-pointer hover:shadow-md transition-shadow"
            >
              <p className="m-2">
                <b>
                  NB :
                </b> Déposez votre CV pour recevoir gratuitement les nouvelles offres de stages dans votre boîte mail.</p>



            </div>
            <div className="flex flex-col gap-1 w-full">
              <p className="bg-[#4A62AA] px-4 py-2 uppercase text-white text-start md:px-32">
                Postuler
              </p>
            </div>

            <div className="bg-white/70 p-2 mt-3 grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4 md:gap-8">
              <div className="mt-2 text-center text-[#4A62AA] font-bold">Candidature spontanée</div>
              <div className="max-w-4xl">
                <p>
                  Envoyez ou déposez votre dossier de candidature au moins 9 à 12 mois avant la date de début souhaitée du stage et relancez régulièrement l’entreprise.
                </p>
              </div>
            </div>

            <div className="bg-white/70 p-2 mt-1 grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4 md:gap-8">
              <div className="text-center text-[#4A62AA] font-bold">Annonce</div>
              <div className="max-w-4xl">
                <p>
                  Envoyez votre candidature dans les délais et format requis (mail ou dossier physique).
                </p>
              </div>
            </div>

            <div className="bg-white/50 p-2 text-[#A87A38]  font-bold text-center mt-3">
              Rédiger un Curriculum Vitae (CV) et une lettre de motivation convaincants
            </div>

            <div className="flex flex-col w-full gap-2 mt-2">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4">
                <div className="p-4 text-white h-full bg-[#A87A38]/70">
                  <p className="font-bold">Curriculum Vitae (CV)</p>
                  <p className="mt-4">
                    Votre CV doit susciter chez le recruteur l’envie de vous rencontrer. Pour plus d’informations, consultez la section « Postuler à un premier emploi ».
                  </p>
                  <p className="mt-4">
                    <b>
                      <Link href="/misc/nous_contacter" className="hover:text-xl">Contactez-nous</Link>
                    </b>
                    &nbsp;pour obtenir un modèle de CV.
                  </p>
                </div>

                <div className="w-full bg-white/60">
                  <div className="p-3 space-y-2">
                    <p className="text-[#4A62AA] font-bold">Lettre de motivation</p>
                    <p className="mt-1">
                      Votre lettre de motivation doit exposer sur une page les raisons de votre demande de stage et convaincre le recruteur de votre motivation. Elle peut se présenter comme suit :
                    </p>
                    <p className="mt-1">
                      <b>1ère partie : </b>
                      Présentation (diplôme préparé et établissement) et formulation de votre demande de stage (nature du stage, fonction et durée).
                    </p>
                    <p className="mt-1">
                      <b>2ème partie : </b>
                      Motivation du choix de l’entreprise et de l’intérêt pour le stage en expliquant ce que vous comptez y apprendre et en quoi cela vous aidera pour la suite de votre formation ou de votre parcours. Évoquez votre disposition à apprendre mais également vos qualités, notamment celles appréciées en entreprise : ponctualité, autonomie, fiabilité, minutie dans le travail et sociabilité, etc.
                    </p>
                    <p className="mt-1">
                      <b>3ème partie : </b>
                      Exprimez vos attentes en relation avec les compétences que vous aurez développées.
                    </p>
                  </div>
                </div>
              </div>

              <div className="font-bold bg-white  p-2 text-center">
                <Link href="/misc/nous_contacter" className="hover:text-xl">Contactez-nous</Link>
                &nbsp;pour obtenir un modèle de lettre de motivation pour stage.
              </div>

              <div className="font-bold text-white bg-[#4A62AA]  p-2 text-center">
                Pièces du dossier de candidature
              </div>

              <div className="bg-white/80 px-4 py-2 text-start">
                <p>- Lettre de motivation</p>
                <p>- CV à jour, daté et signé</p>
                <p>- Convention de stage et/ou lettre de recommandation de l’institution de formation</p>
                <p>- Copies des diplômes, de la CNI</p>
                <p>- Copie du certificat de scolarité, des attestations diverses.</p>
              </div>
            </div>

            <p className="bg-white/70 pt-3">
              <b className="ml-4">NB : </b>
              les pièces demandées peuvent varier selon le recruteur. En tout état de cause, joignez toujours à votre demande tous les documents permettant une bonne analyse et compréhension de votre dossier.
            </p>

            <div className="flex justify-center  mt-2">
              <button onClick={handleClick} className="bg-[#A87A38]   border border-[#4A62AA] font-bold text-white p-3 rounded-xl">
                Postuler à un premier emploi (débutant uniquement)
              </button>
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
