import SearchResultsMobile from "@/components/mobile/students/offres_stage/resultatRechercheStage";
import SearchResults from "@/components/web/students/offres_stage/resultatRechercheStage";
import Sidebar from "@/components/web/sidebar/sideBar";
import Bandeau from "@/components/web/Ads/FooterPartenaire";
import NavBarOffre from "@/components/web/navbar/navBarEtudiant";
import Footer from "@/components/web/footer/footer";
import BackToTopButton from "@/components/buttonTop";

export default function DetailsStage() {
  return (
    <div>

      <div className="hidden lg:flex flex-col flex-grow">
        <div className="relative flex flex-col  min-w-screen min-h-screen h-auto w-auto  bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/backgroundEtudiant.jpeg')" }}>


          <NavBarOffre />
          <div className="flex flex-row items-center justify-center">
            <div className="w-[95%] ">
              <SearchResults />
              <BackToTopButton />
            </div>

          </div>
        </div>
        <div className="mt-4">
          <Bandeau />

          <Footer /></div>
      </div>

      {/* Mobile & Tablet view (≤ 1024px) */}
      <div className="block lg:hidden">

        <SearchResultsMobile />
            <BackToTopButton />
        
      </div>
    </div>

  );
}