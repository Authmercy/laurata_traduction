import Navbar from "@/components/web/navbar/navBarEtudiant";
import Sidebar from "@/components/web/sidebar/sideBar";
import Bandeau from "@/components/web/Ads/FooterPartenaire";
import DetailDescriptifFormation from "@/components/web/students/formation/descriptifFormation";
import Footer from "@/components/web/footer/footer";
import BackToTopButton from "@/components/buttonTop";
import DetailDescriptifFormationMobile from "@/components/mobile/students/formation/descriptifFormation";

export default function DetailStage() {

  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <div className="hidden lg:flex flex-col flex-grow">
          <div
            className="relative min-h-screen bg-cover bg-center bg-no-repeat flex flex-col"
            style={{ backgroundImage: "url('/images/backgroundEtudiant.jpeg')" }}
          >
            <Navbar />

            <div className="flex flex-row items-center justify-center">
              <div className="w-[95%] ">
                <DetailDescriptifFormation />
                <BackToTopButton />
              </div>

            </div>

            <div className="mt-auto">
              <Bandeau />
              <Footer />
            </div>
          </div>
        </div>

        <div className="block lg:hidden">
          <DetailDescriptifFormationMobile>

          </DetailDescriptifFormationMobile>
          <BackToTopButton />
        </div>


      </div>
    </div>
  );
}
