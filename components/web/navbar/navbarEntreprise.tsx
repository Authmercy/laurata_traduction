"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import UseLanguageService from "@/service/language_switch";
import en from '../../../i18/en/navbar/entreprise.json';
import fr from '../../../i18/fr/navbar/entreprise.json';
export default function NavbarInstitut() {

 const {

        changeLanguage, locale


    } = UseLanguageService()


    const router = useRouter();
  
      const t = locale === 'en' ? en : fr;

   const menuItems = [
    { href: "/entreprise/poster", label: t.post, key: "post" },
    { href: "/entreprise/talents", label: t.talent, key: "talent" },
    { href: "/entreprise/expertise", label: t.expert, key: "expert" },
    { href: "/entreprise/promotion", label: t.promote, key: "promote" },
  ];


    const pathname = usePathname();
    const isPageInMenu = menuItems.some((item) => item.href === pathname);

    return (
        <nav className="w-full">
            <div className="flex justify-between w-full">

             
                <div className="hidden w-full md:flex items-center">
                    <div className=" h-20 bg-[#4A62AA] md:flex items-center">
                        <div className="flex items-center ml-8">
                            <Link href="/">
                                <Image src="/images/logo.png" alt="home" width={200} height={70} />
                            </Link>
                        </div>
                        <div className="flex items-center ml-2">
                            <Link href="/entreprise/poster">
                                <Image src="/icons/entreprise.png" alt="" width={100} height={100} />
                            </Link>
                        </div>
                    </div>

            
                    {menuItems.map(({ href, label }) => (
                        <div
                            key={href}
                            className={`flex ml-1 items-center justify-center w-[28%] h-16 p-2 text-[#4A62AA] bg-white/70 hover:text-white hover:bg-[#4A62AA] ${pathname === href ? "!bg-[#596ba0] !text-white !h-[4.5rem]" : ""
                                } 
                            `}
                        >
                            <Link href={href} className="block w-full text-center py-1 uppercase">
                                {label}
                            </Link>

                        </div>
                    ))}

                    <div className="">

                        <Link href="/institut/stage">

                            <Image src="/icons/institutsup2.png" alt="" width={90} height={70} />
                        </Link></div>
                    <div className="">

                        <Link href="/students/offresStage">
                            <Image src="/icons/etudiantIcon2.png" alt="" width={190} height={70} />
                        </Link>
                    </div>

                    <div className="bg-[#4A62AA] h-16 w-1/12 text-white  flex gap-x-0 items-center">
                       <div className=" items-center flex flex-row gap-x-6 mx-2" > 
                        <div>
                            <Link href="/entreprise/poster">
                                <Image src="/images/avatar.png" alt="" width={50} height={100} />
                            </Link> </div>
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
