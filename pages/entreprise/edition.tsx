"use client";

import BackToTopButton from "@/components/buttonTop";
import EditionOffreMobile from "@/components/mobile/entreprise/edition";
import NavbarEntreprise from "@/components/web/navbar/navbarEntreprise";
import Poster from "./poster";
import EditionOffre from "@/components/web/entreprise/edition";
import SidebarEntreprise from "@/components/web/sidebar/sideBarEntreprise";
import Bandeau from "@/components/web/Ads/FooterPartenaire";
import Footer from "@/components/web/footer/footer";


export default function PosterUnStage() {
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
                <Poster />
                <EditionOffre />
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
          <EditionOffreMobile></EditionOffreMobile>

          <BackToTopButton />
        </div>
      </div>




    </div>

  );
}
