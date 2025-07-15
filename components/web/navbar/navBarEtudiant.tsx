"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import UseLanguageService from "@/service/language_switch";
import { useRouter } from "next/router";
import en from '../../../i18/en/navbar/etudiant.json';
import fr from '../../../i18/fr/navbar/etudiant.json';

export default function NavBarOffre() {

   const router = useRouter();
  const { pathname, asPath, query } = router;

    

    const {

        changeLanguage, locale,



    } = UseLanguageService()


      const t = locale === 'en' ? en : fr;
 
    const menuItems = [
  { href: "/students/offresStage", label: t.internships },
  { href: "/students/formations", label: t.trainingDirectory },
  { href: "/students/concoursBourse", label: t.competitionsScholarships },
  { href: "/students/bacAlafac/bac_fac", label: t.orientation },
  { href: "/students/carrier", label: t.career },
  { href: "/entreprise/employeur", label: t.featuredEmployer, id: 1 },
  { href: "/students/service", label: t.services }
];
      const isPageInMenu = menuItems.some((item) => item.href === pathname);

 
    return (
        <nav className="w-full">
            <div className="flex  w-full">

                {/* Desktop Menu */}
                <div className="hidden w-full md:flex items-center">
                    <div className=" h-20 px-4 bg-[#4A62AA] md:flex items-center">
                        <div className="flex items-center ">
                            <Link href="/">
                                <Image src="/images/logo.png" alt="home" width={200} height={70} />
                            </Link>
                        </div>
                        <div className="flex items-center ">

                            <Link href="/students/offresStage">
                                <Image src="/icons/etudiantIcon2.png" alt="" width={200} height={70} />
                            </Link>
                        </div>
                    </div>


                    {menuItems.map(({ href, label }) => (
                        <div
                            key={href}
                            className={`flex ml-1 items-center justify-center w-[15%] h-16 p-2 text-[#4A62AA] bg-white/70 hover:text-white hover:bg-[#4A62AA] ${pathname === href ? "!bg-[#596ba0] !text-white !h-[4.5rem]" : ""
                                } ${!isPageInMenu && href === "/institut/stage"
                                    ? "!bg-[#4A62AA] !text-white !h-[4.5rem]"
                                    : ""
                                }`}
                        >
                            <Link href={href} className="block w-full text-center py-1 uppercase">
                                {label}
                            </Link>

                        </div>
                    ))}
                    <div className="flex flex-row gap-2 items-center ">
                        <div className="">
                            <Link href="/entreprise/poster">
                                <Image src="/icons/entreprise2.png" alt="" width={90} height={70} />
                            </Link>  </div>
                        <div className="">

                            <Link href="/institut/stage">

                                <Image src="/icons/institutsup2.png" alt="" width={90} height={70} />
                            </Link>
                        </div>
                    </div>



                     <div className="bg-[#4A62AA] h-16 text-white flex gap-x-0 items-center">
      <div className="items-center flex flex-row gap-x-3 mx-2">
        <div>
          <Link href="/entreprise/poster">
            <Image src="/images/avatar.png" alt="" width={100} height={100} />
          </Link>
        </div>
        <div className="">
          <button
            onClick={() => changeLanguage(locale === 'en' ? 'fr' : 'en')}
            className={`font-bold hover:underline ${locale === 'en' ? 'text-white' : 'text-white'}`}
          >
            {locale === 'en' ? 'FR' : 'EN'}
          </button>
        </div>
      </div>
    </div>
                </div>
            </div>


        </nav>
    );
}
