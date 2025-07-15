import Navbar from "@/components/web/navbar/navBarEtudiant";
import Sidebar from "@/components/web/sidebar/sideBar";
import Bandeau from "@/components/web/Ads/FooterPartenaire";
import Footer from "@/components/web/footer/footer";
import MetierComponent from "@/components/web/students/metier/metier";
import MetierHome from "@/components/web/students/metier/homepage";
import BackToTopButton from "@/components/buttonTop";
import MetierHomeMobile from "@/components/mobile/students/metier/homepage";


export default function Metier() {
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <div className="hidden lg:flex flex-col flex-grow">
          <div className="relative flex flex-col min-w-screen min-h-screen h-auto w-auto  bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/backgroundEtudiant.jpeg')" }}>

            <Navbar />
            <div className="flex flex-row">
              <div className="w-[80%]">
                <MetierHome></MetierHome>
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
          <MetierHomeMobile></MetierHomeMobile>
              <BackToTopButton />
        </div>


      </div>
    </div>
  );
}