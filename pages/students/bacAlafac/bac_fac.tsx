import Navbar from "@/components/web/navbar/navBarEtudiant";
import Sidebar from "@/components/web/sidebar/sideBar";
import Bandeau from "@/components/web/Ads/FooterPartenaire";
import Footer from "@/components/web/footer/footer";
import BacAlaFac from "@/components/web/students/bacAlafac/bac_fac";
import BackToTopButton from "@/components/buttonTop";
import BacAlaFacMobile from "@/components/mobile/students/bacAlafac/bac_fac";



export default function BacFac() {
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <div className="hidden lg:flex flex-col flex-grow">
          <div
            className="relative min-h-screen bg-cover bg-center bg-no-repeat flex flex-col"
            style={{ backgroundImage: "url('/images/backgroundEtudiant.jpeg')" }}>

            <Navbar />
            <div className="flex flex-row">
              <div className="w-[80%]">
                <BacAlaFac></BacAlaFac>
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
          <BacAlaFacMobile></BacAlaFacMobile>
          <BackToTopButton />
        </div>
      </div>




    </div>
  );
}