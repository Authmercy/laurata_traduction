import Navbar from "@/components/web/navbar/navBarEtudiant";
import Sidebar from "@/components/web/sidebar/sideBar";
import Bandeau from "@/components/web/Ads/FooterPartenaire";
import Footer from "@/components/web/footer/footer";
import AtoutComponent from "@/components/web/students/bacAlafac/atout";
import LexiqueComponent from "@/components/web/students/bacAlafac/lexique";
import BackToTopButton from "@/components/buttonTop";
import LexiqueComponentMobile from "@/components/mobile/students/bacAlafac/lexique";



export default function BacFac() {


  return (
    <div> <div className="flex flex-col min-h-screen">
      <div className="hidden lg:flex flex-col flex-grow">
        <div
          className="relative min-h-screen bg-cover bg-center bg-no-repeat flex flex-col"
          style={{ backgroundImage: "url('/images/backgroundEtudiant.jpeg')" }}>

          <Navbar />
          <div className="flex flex-row">
            <div className="w-[80%]">
              <LexiqueComponent></LexiqueComponent>
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
        <LexiqueComponentMobile></LexiqueComponentMobile>
        <BackToTopButton />
      </div>

    </div>



    </div>
  );
}