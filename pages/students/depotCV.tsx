import Navbar from "@/components/web/navbar/navBarEtudiant";
import Sidebar from "@/components/web/sidebar/sideBar";
import Bandeau from "@/components/web/Ads/FooterPartenaire";
import DeposerMonCV from "@/components/web/students/stage/deposermoncv";
import DeposerMonCVMobile from "@/components/mobile/stage/deposermoncv";
import Footer from "@/components/web/footer/footer";
import BackToTopButton from "@/components/buttonTop";
import OffreFormationMobile from "@/components/mobile/students/formation/form";

export default function DetailStage() {
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <div className="hidden lg:flex flex-col flex-grow">
          <div className="relative flex flex-col min-w-screen min-h-screen h-auto w-auto  bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/backgroundEtudiant.jpeg')" }}>

            <Navbar />
            <div className="flex flex-row">
              <div className="w-[80%]">
                <DeposerMonCV />
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
          <DeposerMonCVMobile />
          <BackToTopButton />
        </div>


      </div>
    </div>
  );
}