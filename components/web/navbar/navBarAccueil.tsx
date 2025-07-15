"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import UseLanguageService from "@/service/language_switch";

export default function NavBarAccueil() {

   const {
  
          changeLanguage, locale
  
  
      } = UseLanguageService()
  
    const [activeLink, setActiveLink] = useState('#french');
    return (
        <div>
            <nav className="bg-[#4A62AA]">
                <div className=" flex items-center justify-between px-10 py-2">


                    <div className="hidden md:flex items-center">
                        <Link href="/">
                            <div className="flex items-center p-2 py-4">
                                <Image src="/images/logo.png" alt="home" width={200} height={240} />
                            </div>
                        </Link>
                    </div>

                    <div className="flex-grow"></div>

                    <div className="flex justify-end items-center text-white gap-x-32">
                        <div className="flex items-center space-x-3">
                            <Link href="/authentification/signup" className="hover:underline font-bold">S'inscrire</Link>
                            <span>|</span>
                            <Link href="/authentification/login" className="hover:underline font-bold">Se connecter</Link>
                        </div>
                        <div className="flex justify-end">
                       <button
            onClick={() => changeLanguage(locale === 'en' ? 'fr' : 'en')}
            className={`font-bold hover:underline ${locale === 'en' ? 'text-white' : 'text-white'}`}
          >
            {locale === 'en' ? 'Français' : 'English'}
          </button>  </div>
                    </div>
                </div>

            </nav>
        </div>
    );
}
