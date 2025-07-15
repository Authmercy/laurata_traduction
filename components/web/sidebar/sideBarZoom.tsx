"use client";

import Link from "next/link";

import Zoom from "../zoom/zoom";
import Actualite from "../actualite/actualité";
import Pub from "./pub";

import { usePathname } from "next/navigation";
export default function SidebarZoom() {
  
    const pathname = usePathname();
    return (
        <div className=" flex flex-col gap-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-1 px-2 pt-16  ">
                {[

                    { href: "/jpo/jpo", label: "JPO & Annonces" },
                    { href: "/students/sondage_enquetes", label: "Sondages & Enquêtes" },
                    { href: "/students/classements", label: "Classements" },
                    { href: "/students/institutAlaUne", label: "Institution À LA UNE" },
                    { href: "/femme/femme", label: "Femme d’impact" },
                ].map((item, index) => (
                    <Link key={index} href={item.href} className="w-full">
                        <div className={`bg-white/70 px-2 py-1 uppercase text-center text-sm hover:bg-[#4A62AA] hover:text-white transition-all ${pathname === item.href ? "!bg-[#596ba0] !text-white " : ""
                            }`}>
                            {item.label}
                        </div>
                    </Link>
                ))}
                <Zoom />
                <Actualite />
                <Pub />
            </div>
        </div>
    );
}
