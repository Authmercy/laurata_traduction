import Navbar from "@/components/web/navbar/navBarEtudiant";
import Sidebar from "@/components/web/sidebar/sideBar";
import Bandeau from "@/components/web/Ads/FooterPartenaire";
import Footer from "@/components/web/footer/footer";
import NavbarSondage from "@/components/web/navbar/navBarSondage";
import SondageComponent from "@/components/web/students/sondage";
import BackToTopButton from "@/components/buttonTop";
import SondageComponentMobile from "@/components/mobile/students/sondage";


export default function Sondage_Enquetes() {
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <div className="hidden lg:flex flex-col flex-grow">
          <div
            className="relative bg-gray-200 min-h-screen bg-cover bg-center bg-no-repeat flex flex-col"

          > <NavbarSondage />
            <div className="flex flex-row mt-24 ">
              <div className="w-[80%]">

                <SondageComponent />
                <BackToTopButton />
              </div>
              <div className="w-[20%] mt-10">
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
          <SondageComponentMobile></SondageComponentMobile>
          <BackToTopButton />
        </div>


      </div>
    </div>
  );
}