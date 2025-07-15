import Navbar from "@/components/web/navbar/navBarEtudiant";
import Sidebar from "@/components/web/sidebar/sideBar";
import Footer from "@/components/web/footer/footer";
import ContactComponent from "@/components/web/misc/contacter";
import ContactComponentMobile from "@/components/mobile/misc/contacter";
import NavBarAccueil from "@/components/web/navbar/navBarAccueil";

export default function NousContacter() {
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <div className="hidden lg:flex flex-col flex-grow">
          <div className="relative flex flex-col min-w-screen min-h-screen h-auto w-auto  bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/backgroundEtudiant.jpeg')" }}>

            <NavBarAccueil />
            <div className="flex justify-center">
              <div className="">

                <ContactComponent></ContactComponent>

              </div>

            </div>
            <div className="mt-auto">


              <Footer /></div>
          </div>
        </div>
        {/* Mobile & Tablet view (≤ 1024px) */}
        <div className="block lg:hidden">
          <ContactComponentMobile></ContactComponentMobile>
        </div>


      </div>
    </div>
  );
}