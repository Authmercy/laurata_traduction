"use client";

import Visibilite from "@/components/web/entreprise/visibilite";
import Bandeau from "@/components/web/Ads/FooterPartenaire";
import NavbarEntreprise from "@/components/web/navbar/navbarEntreprise";
import SidebarEntreprise from "@/components/web/sidebar/sideBarEntreprise";
import Footer from "@/components/web/footer/footer";
import VisibiliteMobile from "@/components/mobile/entreprise/visibilite";
import BackToTopButton from "@/components/buttonTop";

export default function VisibiliteEntreprise() {

  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <div className="hidden lg:flex flex-col flex-grow">
          <div
            className="relative min-h-screen bg-cover bg-center bg-no-repeat flex flex-col"
            style={{ backgroundImage: "url('/images/backgroundEntreprise.jpg')" }}
          >
            <NavbarEntreprise />

            <div className="flex flex-grow">
              <div className="w-[80%]">
                <Visibilite /> 
                   <BackToTopButton />
              </div>
              <div className="w-[20%]">
                <SidebarEntreprise />
              </div>
            </div>
            <div className="mt-auto">
              <Bandeau />

              <Footer /></div>
          </div>    </div>
        {/* Mobile & Tablet view (≤ 1024px) */}
        <div className="block lg:hidden">
          <VisibiliteMobile></VisibiliteMobile>
          <BackToTopButton />
        </div>
      </div>




    </div>

  );
}
