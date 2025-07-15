
import OffreStageMobile from "@/components/mobile/students/offres_stage/form";
import Sidebar from "@/components/web/sidebar/sideBar";
import Bandeau from "@/components/web/Ads/FooterPartenaire";
import Navbar from "@/components/web/navbar/navBarEtudiant";
import Footer from "@/components/web/footer/footer";
import PostulerStage from "@/components/web/students/stage/postulerStage";
import BackToTopButton from "@/components/buttonTop";
import PostulerStageMobile from "@/components/mobile/stage/postulerStage";

export default function PostulerAUnStage() {
  return (
    <div>

      <div className="hidden lg:flex flex-col flex-grow">
        <div className="relative min-h-screen bg-cover bg-center bg-no-repeat flex flex-col" style={{ backgroundImage: "url('/images/backgroundEtudiant.jpeg')" }}>

          <Navbar />
          <div className="flex flex-row">
            <div className="w-[80%]">

              <PostulerStage />

              <BackToTopButton />
            </div>
            <div className="w-[20%]">
              <Sidebar></Sidebar>
            </div>
          </div>
          <div className="mt-auto">
            <Bandeau />

            <Footer /></div>
        </div>
      </div>

      <div className="block lg:hidden">
        <PostulerStageMobile />
        <BackToTopButton />
      </div>


    </div>
  );
}