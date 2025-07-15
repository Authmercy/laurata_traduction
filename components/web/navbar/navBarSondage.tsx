"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import UseLanguageService from "@/service/language_switch";

export default function NavbarSondage() {
 
    const [activeLink, setActiveLink] = useState('#french');
 const {

        changeLanguage, locale


    } = UseLanguageService()



    return (
        <nav className="w-full">
            <div className="flex justify-between w-full">


                <div className="fixed top-0 h-[18%]   mb-24 left-0 w-full bg-[#6d3e1f]  flex justify-between items-center px-8">

                    <div className="flex items-center">
                        <Link href="/">
                            <Image src="/images/logolaurata.png" alt="home" width={100} height={70} />
                        </Link>
                    </div>


                    <div className="text-white  uppercase text-2xl font-bold">
                        <p>
      {locale === 'en' ? 'Surveys & Polls' : 'ENQUÊTES ET SONDAGES'}
                            
                        </p>
                    </div>


                    <div className="text-white flex items-center space-x-2">
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


        </nav>
    );
}
