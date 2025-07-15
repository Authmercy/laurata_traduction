"use client";

import EditionOffre from "@/components/web/entreprise/edition";
import Poster from "@/components/web/entreprise/poster";
import Bandeau from "@/components/web/Ads/FooterPartenaire";
import NavbarEntreprise from "@/components/web/navbar/navbarEntreprise";
import SidebarEntreprise from "@/components/web/sidebar/sideBarEntreprise";
import Footer from "@/components/web/footer/footer";
import BackToTopButton from "@/components/buttonTop";
import PosterMobile from "@/components/mobile/entreprise/poster";
import EditionOffreMobile from "@/components/mobile/entreprise/edition";

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
          <PosterMobile></PosterMobile>

          <BackToTopButton />
        </div>
      </div>




    </div>
  );
}
