"use client";

import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import ButtonAccueil from "@/components/web/buttons/buttonAccueil";
import Bandeau from "../Ads/FooterPartenaire";
import UseLanguageService from "@/service/language_switch";
export default function WelcomePage2() {
  const router = useRouter();
  const {

    changeLanguage, locale


  } = UseLanguageService()


  return (
    

      <div
        className="bg-cover  bg-no-repeat flex flex-col min-w-screen min-h-screen"
        style={{ backgroundImage: "url('/images/bgWeb.png')" }}
      >
        <div className="pt-8 ">


          <div className=" flex ml-[20%] pb-8 mt-2">
            <Image src="/images/logo.png" alt="logoSES" width={250} height={150} />
          </div>
          <div className="justify-end mr-8 -mt-16 flex space-x-6 text-white">
            <Link href="/authentification/signup" className="hover:underline font-bold">S'inscrire</Link>
            <span>|</span>
            <Link href="/authentification/login" className="hover:underline font-bold">Se connecter</Link>
            <div className="flex space-x-2">

              <button
                onClick={() => changeLanguage('fr')}
                className={`hover:underline ${locale === 'fr' ? 'font-bold' : 'font-normal'}`}
              >
                Français
              </button>
              <span className="mx-2">|</span>
              <button
                onClick={() => changeLanguage('en')}
                className={`hover:underline ${locale === 'en' ? 'font-bold' : 'font-normal'}`}
              >
                English
              </button>



            </div>
          </div>
        </div>


        <div className=" pt-2 px-4">






          <div className="flex    mt-44   justify-end text-end   text-white ">
            <p className="text-5xl  text-end uppercase ">Vitrine des <b>
          <span className="underline decoration-dotted decoration-[#f1ab49]  ">  offres de stage </span>    </b> <br /> au Cameroun</p>
          </div>

          <div className="flex mr-2   mt-36   justify-end text-end   text-white ">
            <p className=" text-end text-white text-xl ">
              <b>  Étudiants & Jeunes diplômés </b> <br /> Trouve ton stage et jette les bases d’une carrière réussie.
            </p>
          </div>
        </div>

        <div>
           <div className="flex mr-2   px-4 my-20   justify-end text-end   text-[#4A62AA] ">
            <p className=" text-end text-xl ">
              <b>Secteurs public & privé </b> <br /> Ensemble, œuvrons pour leur insertion dans l'emploi.
            </p>
          </div>
        </div>
        <div className="flex  my-4 mb-8 mr-2   px-4   justify-end ">
           <div className=" flex justify-end">
            <ButtonAccueil />
          </div>
        </div>


        <div className="w-full px-6 mt-auto  bg-white">
          <div className="flex justify-end">
            <div className="w-full ">
              <Bandeau />
            </div>
          </div>
        </div>
      </div>



 

  );

}