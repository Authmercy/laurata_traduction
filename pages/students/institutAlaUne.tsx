"use client";

import Footer from "@/components/web/footer/footer";
import Bandeau from "@/components/web/Ads/FooterPartenaire";
import InstitutionALaUNe from "@/components/web/institution/institutionUne";
import NavbarEntreprise from "@/components/web/navbar/navbarEntreprise";
import Sidebar from "@/components/web/sidebar/sideBar";
import Navbar from "@/components/web/navbar/navBarEtudiant";
import BackToTopButton from "@/components/buttonTop";
import { div } from "framer-motion/client";
import InstitutionALaUNeMobile from "@/components/mobile/institution/institutionUne";
export default function Institut() {

 return (
    <div>

      <div className="hidden lg:flex flex-col flex-grow">
        <div className="relative min-h-screen bg-cover bg-center bg-no-repeat flex flex-col" style={{ backgroundImage: "url('/images/backgroundEtudiant.jpeg')" }}>

          <Navbar />
          <div className="flex flex-row">
            <div className="w-[80%]">

          
              <InstitutionALaUNe />
              <BackToTopButton />
            </div>
            <div className="w-[20%]">
              <Sidebar></Sidebar>
            </div>
          </div>
          <div className="mt-auto">
            <Bandeau />

            <Footer /></div>
        </div>
      </div>

      <div className="block lg:hidden">
         <InstitutionALaUNeMobile></InstitutionALaUNeMobile>
        <BackToTopButton />
      </div>


    </div>
  );

}