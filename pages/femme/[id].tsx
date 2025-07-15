"use client";
import DetailFemme from "@/components/web/femme d'impact/detail";
import Footer from "@/components/web/footer/footer";
import Bandeau from "@/components/web/Ads/FooterPartenaire";
import NavBarOffre from "@/components/web/navbar/navBarEtudiant";
import Sidebar from "@/components/web/sidebar/sideBar";
import DetailFemmeMobile from "@/components/mobile/femme d'impact/detail";
import BackToTopButton from "@/components/buttonTop";


export default function CGU() {
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <div className="hidden lg:flex flex-col flex-grow">
          <div className="relative flex flex-col min-w-screen min-h-screen h-auto w-auto  bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/backgroundEtudiant.jpeg')" }}>

            <NavBarOffre />
            <div className="flex flex-row">
              <div className="w-[80%]">
                <DetailFemme />
                <BackToTopButton />

              </div>
              <div className="w-[20%]">
                <Sidebar />
              </div>
            </div>
            <div className="mt-auto">
              <Bandeau />

              <Footer /></div>
          </div>
        </div>
        {/* Mobile & Tablet view (≤ 1024px) */}
        <div className="block lg:hidden">
          <DetailFemmeMobile></DetailFemmeMobile>
        </div>


      </div>
    </div>

  );
}
