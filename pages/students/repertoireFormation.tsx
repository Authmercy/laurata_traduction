
import FormulaireFormation from "@/components/web/students/formation/form";
import Partenaire from "@/components/web/students/formation/partenaire";
import Sidebar from "@/components/web/sidebar/sideBar";
import Navbar from "@/components/web/navbar/navBarEtudiant";
import Footer from "@/components/web/footer/footer";
import BackToTopButton from "@/components/buttonTop";
export default function RepertoireFormations() {
  return (
    <div>
      {/* Desktop view (≥ 1024px) */}
      <div className="flex flex-col min-h-screen">
        <div className="hidden lg:flex flex-col flex-grow">
          <div className="relative min-h-screen bg-cover bg-center bg-no-repeat flex flex-col" style={{ backgroundImage: "url('/images/backgroundEtudiant.jpeg')" }}>

            <Navbar />
            <div className="flex flex-row">
              <div className="w-[80%] ">
                <Partenaire />
                <FormulaireFormation />
                <BackToTopButton />
              </div>
              <div className="w-[20%]">
                <Sidebar />

              </div>


            </div>
            <div className="mt-auto">

              <Footer /></div>
          </div>

        </div>




      </div>
      {/* Mobile & Tablet view (≤ 1024px) */}
      <div className="block lg:hidden">

      </div>
    </div>
  );
}
