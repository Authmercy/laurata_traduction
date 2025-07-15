"use client";

import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import ButtonAccueil from "@/components/web/buttons/buttonAccueil";
import Bandeau from "../Ads/FooterPartenaire";

export default function WelcomePage1() {
  const router = useRouter();

  return (
    <div className="flex flex-col max-w-screen min-h-screen">


      <div className="relative h-[60vh] w-full bg-[#4A62AA] bg-cover bg-center bg-no-repeat">

        <div className="justify-end pt-2 mr-8 flex space-x-6 text-white">
          <Link href="/authentification/signup" className="hover:underline font-bold">S'inscrire</Link>
          <span>|</span>
          <Link href="/authentification/login" className="hover:underline font-bold">Se connecter</Link>
          <div className="flex space-x-2">
            <Link href="#" className="hover:underline font-bold">Français</Link>
            <span>|</span>
            <Link href="#" className="hover:underline">English</Link>
          </div>
        </div>


        <div className="relative h-full flex items-center justify-center px-4">


          <div className="absolute left-[-12%]  -top-[10%] hidden md:block">
            <Image src="/images/girl.png" alt="girl" width={750} height={510} className="object-cover" />
          </div>


          <div className="absolute top-[10%] left-1/2 transform -translate-x-1/2">
            <Image src="/images/logolaurata.png" alt="logoSES" width={200} height={120} />
          </div>


          <div className="absolute top-[20%] left-[75%] transform -translate-x-1/2 text-center text-white w-[70%] md:w-[30%]">
            <p className="text-5xl  font-semibold">Vitrine des offres de stage au Cameroun</p>
          </div>

       <div className="absolute top-[20%] left-[75%] transform -translate-x-1/2 text-center text-white w-[70%] md:w-[30%]">
            <p className="text-5xl  font-semibold">Vitrine des offres de stage au Cameroun</p>
          </div>
          <p className="ml-[20%] mt-[20%]  text-white text-xl ">
              Étudiant(e) & Jeune diplômé(e) : Trouve ton stage et jette les bases d’une carrière réussie.
            </p>

        </div>
        
      </div>


      <div className="flex  mt-12 ">
        <div className=" flex  ml-[24%]">
          <ButtonAccueil />
        </div>
      </div>


    <div className="mt-auto w-full px-6 py-4 bg-white">
        <div className="flex justify-end">
          <div className="w-full md:w-[80%]">
            <Bandeau />
          </div>
        </div>
      </div>
    </div>

  );

}