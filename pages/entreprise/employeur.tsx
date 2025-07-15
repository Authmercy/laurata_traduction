"use client";
import EmployeurALaUNe from "@/components/web/entreprise/employeurUne";
import Footer from "@/components/web/footer/footer";
import Bandeau from "@/components/web/Ads/FooterPartenaire";
import NavbarEntreprise from "@/components/web/navbar/navbarEntreprise";
import SidebarEntreprise from "@/components/web/sidebar/sideBarEntreprise";
import BackToTopButton from "@/components/buttonTop";
import EmployeurALaUNeMobile from "@/components/mobile/entreprise/employeurUne";

export default function PosterUnStage() {



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
                  <EmployeurALaUNe />
                <BackToTopButton />
              </div>
            <div className="w-[20%]">
          <SidebarEntreprise />
              </div>
            </div>
  
            <div className="mt-auto">
              <Bandeau />
              <Footer />
            </div>
          </div>
                </div>
          
                <div className="block lg:hidden">
                   <EmployeurALaUNeMobile></EmployeurALaUNeMobile>
                  <BackToTopButton />
                </div>
          
          
              </div>
            );
}