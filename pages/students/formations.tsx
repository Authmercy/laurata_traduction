import OffreFormationMobile from "@/components/mobile/students/formation/form";
import FormulaireFormation from "@/components/web/students/formation/form";
import Partenaire from "@/components/web/students/formation/partenaire";
import Sidebar from "@/components/web/sidebar/sideBar";
import Navbar from "@/components/web/navbar/navBarEtudiant";
import Footer from "@/components/web/footer/footer";
import BackToTopButton from "@/components/buttonTop";
export default function OffreStage() {
  return (
    <div>
      {/* Desktop view (≥ 1024px) */}
      <div className="flex flex-col min-h-screen">
        <div className="hidden lg:flex flex-col flex-grow">
          <div className="relative min-h-screen bg-cover bg-center bg-no-repeat flex flex-col" style={{ backgroundImage: "url('/images/backgroundEtudiant.jpeg')" }}>

            <Navbar />
            <div className="flex flex-row items-center justify-center">
              <div className="w-[95%] ">
                <Partenaire />
                <FormulaireFormation />
                <BackToTopButton />
              </div>



            </div>
            <div className="mt-auto">

              <Footer /></div>
          </div>

        </div>
        {/* Mobile & Tablet view (≤ 1024px) */}
        <div className="block lg:hidden">
          <OffreFormationMobile />
          <BackToTopButton />
        </div>




      </div>

    </div>
  );
}
