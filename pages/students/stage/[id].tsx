import Navbar from "@/components/web/navbar/navBarEtudiant";
import DetailDescriptif from "@/components/web/students/offres_stage/descriptifDuPoste";
import DetailDescriptifMobile from "@/components/mobile/students/offres_stage/descriptifDuPoste";
import Footer from "@/components/web/footer/footer";
import BackToTopButton from "@/components/buttonTop";

export default function DetailStage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="hidden lg:flex flex-col flex-grow">
        <div
          className="relative min-h-screen bg-cover bg-center bg-no-repeat flex flex-col"
          style={{ backgroundImage: "url('/images/backgroundEtudiant.jpeg')" }}
        >
          <Navbar />

          <div className="flex flex-row items-center justify-center">
            <div className="w-[95%] ">
              <DetailDescriptif />
              <BackToTopButton />
            </div>

          </div>

          <div className="mt-auto">

            <Footer />
          </div>
        </div>
      </div>

      <div className="block lg:hidden flex-grow">
        <DetailDescriptifMobile />
        <BackToTopButton />
      </div>
    </div>
  );
}
