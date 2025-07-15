"use client";

import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import ButtonAccueil from "@/components/web/buttons/buttonAccueil";
import Bandeau from "../Ads/FooterPartenaire";

export default function WelcomePage() {
    const router = useRouter();
   
    return (
        <div className="relative h-screen w-screen bg-cover bg-center bg-no-repeat "
            style={{ backgroundImage: "url('/images/background.png')" }}>


            <div className="justify-end p-4 mr-8 flex space-x-6 text-white">
                <Link href="/authentification/signup" className="hover:underline font-bold">S'inscrire</Link>
                <span>|</span>
                <Link href="/authentification/login" className="hover:underline font-bold">Se connecter</Link>
                <div className="flex space-x-2">
                    <Link href="#" className="hover:underline font-bold">Français</Link>
                    <span>|</span>
                    <Link href="#" className="hover:underline">English</Link>
                </div>
            </div>



            <div className="relative pb-28 h-full flex items-center justify-center">
                <div className="absolute top-[7%]  left-[45%] transform -translate-x-1/2">
                    <Image src="/images/logolaurata.png" alt="logoSES" width={200} height={150} />
                </div>


                <div
                    className="absolute top-[8%] left-[80%] transform -translate-x-1/2 text-center text-white w-[25%]">
                    <p className="text-3xl ">Vitrine des offres de stage  au Cameroun</p>

                </div>

                <div className="absolute  left-[45%]  text-center text-white ">
                    <p className="text-2xl pb-2  mt-4">Étudiant(e) & Jeune diplômé(e)</p>
                    <p className="text-xl  text-[#4A62AA] pt-2">Trouve ton stage et jette les bases d’une carrière
                        réussie.</p>
                </div>


                <div className="absolute left-[31%] top-[30%] md:top-[65%]">
                    <ButtonAccueil />
                </div>
            </div>

            <div className="absolute bottom-1 left-[23%]  w-9/12">
                <Bandeau />
            </div>

        </div>
    );

}