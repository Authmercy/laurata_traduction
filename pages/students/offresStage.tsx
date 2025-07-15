
import OffreStageMobile from "@/components/mobile/students/offres_stage/form";
import ButtonStage from "@/components/web/buttons/buttonStage";
import Partenaire from "@/components/web/Ads/nosPartenaire";
import FormulaireStage from "@/components/web/students/offres_stage/form";
import Sidebar from "@/components/web/sidebar/sideBar";
import Navbar from "@/components/web/navbar/navBarEtudiant";
import Footer from "@/components/web/footer/footer";
import BackToTopButton from "@/components/buttonTop";

export default function OffreStage() {
  return (
    <div>

      <div className="hidden lg:flex flex-col flex-grow">
        <div className="relative  min-w-screen min-h-screen  h-auto w-auto  bg-cover bg-center bg-no-repeat flex flex-col" style={{ backgroundImage: "url('/images/backgroundEtudiant.jpeg')" }}>

          <Navbar />
          <div className="flex flex-row items-center justify-center">
            <div className="w-[90%] ml-3">
              <Partenaire />
              <FormulaireStage />


              <ButtonStage />

            </div>

          </div>
          <div className="mt-auto">


            <Footer /></div>
        </div>
      </div>
      {/* Mobile & Tablet view (≤ 1024px) */}
      <div className="block lg:hidden">
        <OffreStageMobile />
        <BackToTopButton />
      </div>


    </div>
  );
}