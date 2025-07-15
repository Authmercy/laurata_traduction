import Navbar from "@/components/web/navbar/navBarEtudiant";
import Sidebar from "@/components/web/sidebar/sideBar";
import Bandeau from "@/components/web/Ads/FooterPartenaire";
import Footer from "@/components/web/footer/footer";
import AtoutComponent from "@/components/web/students/bacAlafac/atout";
import CursusSupComponent from "@/components/web/students/bacAlafac/CursusSup";
import BackToTopButton from "@/components/buttonTop";
import CursusSupComponentMobile from "@/components/mobile/students/bacAlafac/CursusSup";



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
              <CursusSupComponent></CursusSupComponent>
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
        <CursusSupComponentMobile></CursusSupComponentMobile>
        <BackToTopButton />
      </div>

    </div>



    </div>
  );
}