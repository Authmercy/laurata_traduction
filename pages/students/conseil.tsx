import Navbar from "@/components/web/navbar/navBarEtudiant";
import Sidebar from "@/components/web/sidebar/sideBar";
import Bandeau from "@/components/web/Ads/FooterPartenaire";
import ConseilStage from "@/components/web/students/stage/conseil";
import ConseilStageMobile from "@/components/mobile/stage/conseil";
import ButtonStage2 from "@/components/web/buttons/buttonStage2";
import Footer from "@/components/web/footer/footer";
import BackToTopButton from "@/components/buttonTop";

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
                <ConseilStage />
                <ButtonStage2 />
                <BackToTopButton />
              </div>
              <div className="w-[20%]">
                <Sidebar />
              </div>
            </div>
            <div className="mt-auto">
              <Bandeau />

              <Footer /></div>
          </div>    </div>
        {/* Mobile & Tablet view (≤ 1024px) */}
        <div className="block lg:hidden">
          <ConseilStageMobile />
          <BackToTopButton />
        </div>
      </div>




    </div>
  );
}