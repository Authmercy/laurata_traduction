"use client";

import Bandeau from "@/components/web/Ads/FooterPartenaire";
import ObtentionStage from "@/components/web/institution/obtentionStage";
import NavbarInstitut from "@/components/web/navbar/navbarInstitut";
import Footer from "@/components/web/footer/footer";
import SidebarInstitut from "@/components/web/sidebar/sideBarInstitution";
import ObtentionStageMobile from "@/components/mobile/institution/obtentionStage";
import BackToTopButton from "@/components/buttonTop";

export default function ObtenirDesStage() {
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <div className="hidden lg:flex flex-col flex-grow">
          <div
            className="relative min-h-screen bg-cover bg-center bg-no-repeat flex flex-col"
            style={{ backgroundImage: "url('/images/backgroundInstitution.png')" }}
          >
            <NavbarInstitut />

            <div className="flex flex-grow">
              <div className="w-[80%]">
                <ObtentionStage />
                <BackToTopButton />
              </div>
              <div className="w-[20%]">
                <SidebarInstitut />
              </div>
            </div>
            <div className="mt-auto">
              <Bandeau />

              <Footer /></div>
          </div>    </div>
        {/* Mobile & Tablet view (≤ 1024px) */}
        <div className="block lg:hidden">
          <ObtentionStageMobile></ObtentionStageMobile>
          <BackToTopButton />
        </div>
      </div>




    </div>

  );
}
