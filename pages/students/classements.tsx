import Navbar from "@/components/web/navbar/navBarEtudiant";
import Sidebar from "@/components/web/sidebar/sideBar";
import Bandeau from "@/components/web/Ads/FooterPartenaire";
import ConseilStageMobile from "@/components/mobile/stage/conseil";
import Footer from "@/components/web/footer/footer";
import ClassementComponent from "@/components/web/students/classements";
import BackToTopButton from "@/components/buttonTop";
import ClassementComponentMobile from "@/components/mobile/students/classements";

export default function Classement() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="hidden lg:flex flex-col flex-grow">
        <div
          className="relative min-h-screen bg-cover bg-center bg-no-repeat flex flex-col"
          style={{ backgroundImage: "url('/images/backgroundEtudiant.jpeg')" }}>

          <Navbar />
          <div className="flex flex-row">
            <div className="w-[80%]">
              <ClassementComponent />
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
        <ClassementComponentMobile />

        <BackToTopButton />

      </div>



    </div>
  );
}