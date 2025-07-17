"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import UseLanguageService from "@/service/language_switch";
import en from '@/i18/en/navbar/institution.json';
import fr from '@/i18/fr/navbar/institution.json';
export default function NavbarInstitut() {

       const {
    
            changeLanguage, locale
    
    
        } = UseLanguageService()

    const pathname = usePathname();

    const router = useRouter();
  
      const t = locale === 'en' ? en : fr;


    const menuItems = [
        { href: "/institut/stage",  label: t.internship, key: "internship" },
        { href: "/institut/referencer",  label: t.program, key: "program"  },
        { href: "/institut/promotion",  label: t.promote, key: "promote"  },
    ];

  
    const isPageInMenu = menuItems.some((item) => item.href === pathname);


    
    return (
        <nav className="w-full">
            <div className="flex  w-full">

               
                <div className="hidden w-full md:flex items-center">
                    <div className=" h-20 bg-[#4A62AA] md:flex items-center">
                        <div className="flex items-center ml-8">
                            <Link href="/">
                                <Image src="/images/logo.png" alt="home" width={200} height={70} />
                            </Link>
                        </div>
                        <div className="flex items-center ml-2">
                            <Link href="/institut/stage">

                                <Image src="/icons/institutsup2.png" alt="" width={90} height={70} />
                            </Link>
                        </div>
                    </div>

       
                    {menuItems.map(({ href, label }) => (
                        <div
                            key={href}
                            className={`flex ml-1 items-center justify-center w-[30%] h-16 p-2 text-[#4A62AA] bg-white/70 hover:text-white hover:bg-[#4A62AA] ${pathname === href ? "!bg-[#596ba0] !text-white !h-[4.5rem]" : ""
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
<div className="flex flex-row items-center mx-4">
<div className="">
                        <Link href="/entreprise/poster">
                            <Image src="/icons/entreprise2.png" alt="" width={90} height={70} />
                        </Link>  </div>
                    <div className="">

                        <Link href="/students/offresStage">
                            <Image src="/icons/etudiantIcon2.png" alt="" width={200} height={70} />
                        </Link>
                    </div>
</div>
                    


                    <div className="bg-[#4A62AA] h-16 w-1/12 text-white  flex gap-x-0 items-center">
                        <div className=" items-center flex flex-row gap-x-6 mx-2" >
                            <div>
                                <Link href="/entreprise/poster">
                                    <Image src="/images/avatar.png" alt="" width={50} height={100} />
                                </Link> </div>
                            <div className=" ">
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
