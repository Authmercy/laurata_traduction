import Navbar from "@/components/web/navbar/navBarEtudiant";
import Sidebar from "@/components/web/sidebar/sideBar";
import Bandeau from "@/components/web/Ads/FooterPartenaire";
import Footer from "@/components/web/footer/footer";
import ParoleDexpert from "@/components/web/parole_d_expert/expert";
import ParoleDexpertMobile from "@/components/mobile/parole_d_expert/expert";
import BackToTopButton from "@/components/buttonTop";

export default function ParoleDexpertPage() {
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <div className="hidden lg:flex flex-col flex-grow">
          <div className="relative flex flex-col min-w-screen min-h-screen h-auto w-auto  bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/backgroundEtudiant.jpeg')" }}>

            <Navbar />
            <div className="flex flex-row">
              <div className="w-[80%]">
                <ParoleDexpert />
                <BackToTopButton />

              </div>
              <div className="w-[20%]">
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
          <ParoleDexpertMobile>

          </ParoleDexpertMobile>
          <BackToTopButton />
        </div>


      </div>
    </div>
  );
}