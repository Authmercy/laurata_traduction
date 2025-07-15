import Navbar from "@/components/web/navbar/navBarEtudiant";
import Sidebar from "@/components/web/sidebar/sideBar";
import Bandeau from "@/components/web/Ads/FooterPartenaire";
import Footer from "@/components/web/footer/footer";
import BourseComponent from "@/components/web/students/concour_bourse.tsx/bourse";
import BackToTopButton from "@/components/buttonTop";
import BourseComponentMobile from "@/components/mobile/students/concour_bourse.tsx/bourse";

export default function Bourse() {
  return (
    <div> <div className="flex flex-col min-h-screen">
      <div className="hidden lg:flex flex-col flex-grow">
        <div
          className="relative min-h-screen bg-cover bg-center bg-no-repeat flex flex-col"
          style={{ backgroundImage: "url('/images/backgroundEtudiant.jpeg')" }}>

          <Navbar />
          <div className="flex flex-row">
            <div className="w-[80%]">
              <BourseComponent></BourseComponent>
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
        <BourseComponentMobile></BourseComponentMobile>
        <BackToTopButton />
      </div>
    </div>




    </div>
  );
}