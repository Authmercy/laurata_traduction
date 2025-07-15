import Navbar from "@/components/web/navbar/navBarEtudiant";
import Sidebar from "@/components/web/sidebar/sideBar";
import Bandeau from "@/components/web/Ads/FooterPartenaire";

import ConseilStageMobile from "@/components/mobile/stage/conseil";

import Footer from "@/components/web/footer/footer";
import Entrepreunariat from "@/components/web/students/entreprenariat";
import BackToTopButton from "@/components/buttonTop";
import EntrepreunariatMobile from "@/components/mobile/students/entreprenariat";

export default function DetailStage() {
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <div className="hidden lg:flex flex-col flex-grow">
          <div
            className="relative min-h-screen bg-cover bg-center bg-no-repeat flex flex-col"
            style={{ backgroundImage: "url('/images/backgroundEtudiant.jpeg')" }}>

            <Navbar />
            <div className="flex flex-row">
              <div className="w-[80%]">
                <Entrepreunariat />



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
          <EntrepreunariatMobile></EntrepreunariatMobile>
          <BackToTopButton />
        </div>


      </div>
    </div>
  );

}