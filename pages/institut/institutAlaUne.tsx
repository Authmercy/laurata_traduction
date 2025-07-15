"use client";

import Footer from "@/components/web/footer/footer";
import Bandeau from "@/components/web/Ads/FooterPartenaire";
import InstitutionALaUNe from "@/components/web/institution/institutionUne";
import NavbarEntreprise from "@/components/web/navbar/navbarEntreprise";
import SidebarInstitut from "@/components/web/sidebar/sideBarInstitution";
import BackToTopButton from "@/components/buttonTop";
import InstitutionALaUNeMobile from "@/components/mobile/institution/institutionUne";

export default function Institut() {


  return (
        <div>

   
      <div className="hidden lg:flex flex-col flex-grow">
        <div
          className="relative min-h-screen bg-cover bg-center bg-no-repeat flex flex-col"
          style={{ backgroundImage: "url('/images/backgroundEntreprise.jpg')" }}
        >
          <NavbarEntreprise />

          <div className="flex flex-grow">
            <div className="w-[80%]">
              <InstitutionALaUNe />
              <BackToTopButton />
            </div>
            <div className="w-[20%]">
              <SidebarInstitut />
            </div>
          </div>

          <div className="mt-auto">
            <Bandeau />
            <Footer />
          </div>
        </div>
              </div>
        
              <div className="block lg:hidden">
                 <InstitutionALaUNeMobile></InstitutionALaUNeMobile>
                <BackToTopButton />
              </div>
        
        
            </div>
          );
        
        }

