"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "../../navbar/navbar";
import FooterMobile from "../../footer/footerEnd";


export default function MetierHomeMobile() {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileMenuOpen2, setIsMobileMenuOpen2] = useState(false);

  return (
    <div>
        <div className="min-h-screen   bg-[#4A62AA]  overflow-auto  w-screen bg-cover  bg-center bg-no-repeat "  >
         
        <Navbar
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          isMobileMenuOpen2={isMobileMenuOpen2}
          setIsMobileMenuOpen2={setIsMobileMenuOpen2}
        />
        <div className={`${isMobileMenuOpen ? "blur-sm " : ""
          } ${isMobileMenuOpen2 ? "blur-sm " : ""
          } `}>
          <div className="justify-center p-2 text-center text-xl font-bold uppercase bg-[#9b6e0f] text-white">
            <p>   MÉTIERS </p>
          </div>

          <div className="bg-white/70 mt-8  p-4 shadow-sm mb-2 hover:shadow-md transition-shadow">
            <Link href="/students/metier/fichesMetier">
              <div className="flex items-center gap-2 py-2">
                <img src="/icons/puces_1.png" alt="" className="w-5" />
                <p className="text-[#4A62AA] font-bold uppercase hover:text-[#A87A38]">Fiches métiers</p>
              </div>
            </Link>

            <Link href="/students/metier/metierSansFormation">
              <div className="flex items-center gap-2 py-2">
                <img src="/icons/puces_1.png" alt="" className="w-5" />
                <p className="text-[#4A62AA] font-bold uppercase hover:text-[#A87A38]">Métiers sans offres de formation</p>
              </div>
            </Link>

            <Link href="/students/metier/metierSansDebouche">
              <div className="flex items-center gap-2 py-2">
                <img src="/icons/puces_1.png" alt="" className="w-5" />
                <p className="text-[#4A62AA] font-bold uppercase hover:text-[#A87A38]">Métiers sans débouchés</p>
              </div>
            </Link>

            <Link href="/students/metier/metierPorteur">
              <div className="flex items-center gap-2 py-2">
                <img src="/icons/puces_1.png" alt="" className="w-5" />
                <p className="text-[#4A62AA] font-bold uppercase hover:text-[#A87A38]">Métiers porteurs</p>
              </div>
            </Link>
          </div>






        </div>
      </div>
  <footer className="w-full bg-blue-900    text-white text-center">
                                            <FooterMobile />
                                          </footer>
    </div>
  );
}
