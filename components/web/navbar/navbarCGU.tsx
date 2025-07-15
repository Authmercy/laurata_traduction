"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import UseLanguageService from "@/service/language_switch";

export default function NavbarCGU() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
   

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const [activeLink, setActiveLink] = useState('#french');
 const {

        changeLanguage, locale


    } = UseLanguageService()


    return (
        <nav className="w-full">
            <div className="flex justify-between w-full">
                {/* Mobile Menu Button */}
                <div className="sm:hidden">
                    <button
                        onClick={toggleMenu}
                        type="button"
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    >
                        <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                <div className="fixed top-0 h-[18%]   mb-24 left-0 w-full bg-[#4A62AA]  flex justify-between items-center px-8">

                    <div className="flex items-center">
                        <Link href="/">
                            <Image src="/images/logolaurata.png" alt="home" width={100} height={70} />
                        </Link>
                    </div>


                    <div className="text-white text-2xl font-bold">
                        <p>CONDITIONS GÉNÉRALES D’UTILISATION</p>
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
