"use client";
import Footer from "@/components/web/footer/footer";
import Bandeau from "@/components/web/Ads/FooterPartenaire";
import JPO from "@/components/web/jpo/jpo";
import NavBarOffre from "@/components/web/navbar/navBarEtudiant";
import Sidebar from "@/components/web/sidebar/sideBar";
import BackToTopButton from "@/components/buttonTop";
import JPOMobile from "@/components/mobile/jpo/jpo";


export default function CGU() {
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <div className="hidden lg:flex flex-col flex-grow">
          <div className="relative flex flex-col min-w-screen min-h-screen h-auto w-auto  bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/backgroundEtudiant.jpeg')" }}>

            <NavBarOffre />
            <div className="flex flex-row">
              <div className="w-[80%]">
                <JPO />
                <BackToTopButton />

              </div>
              <div className="w-[20%] mt-2">
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
          <JPOMobile />
        </div>


      </div>
    </div>

  );
}
