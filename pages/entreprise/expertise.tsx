"use client";
import OffreStageMobile from "@/components/mobile/students/offres_stage/form";
import Expertise from "@/components/web/entreprise/expertise";
import Bandeau from "@/components/web/Ads/FooterPartenaire";
import NavbarEntreprise from "@/components/web/navbar/navbarEntreprise";
import SidebarEntreprise from "@/components/web/sidebar/sideBarEntreprise";
import Footer from "@/components/web/footer/footer";
import ExpertiseMobile from "@/components/mobile/entreprise/expertise";
import BackToTopButton from "@/components/buttonTop";

export default function ExpertiseAllemande() {

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
                <Expertise />
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
          <ExpertiseMobile></ExpertiseMobile>
          <BackToTopButton />
        </div>
      </div>




    </div>

  );
}
