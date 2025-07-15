"use client";

import MRegister from "@/components/mobile/authentification/mRegister";
import SignInComponent from "@/components/web/authentification/sign";
import NavBarOffre from "@/components/web/navbar/navBarEtudiant";
import Bandeau from "@/components/web/Ads/FooterPartenaire";
import Footer from "@/components/web/footer/footer";
import NavBarAccueil from "@/components/web/navbar/navBarAccueil";


export default function SignIN() {
  return (

    <div>
      <div className="flex flex-col min-h-screen">
        <div className="hidden lg:flex flex-col flex-grow">
          <div className="relative flex flex-col min-w-screen min-h-screen h-auto w-auto  bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/backgroundEtudiant.jpeg')" }}>

            <NavBarAccueil />
            <div className="flex justify-center">
              <div className="">
                <SignInComponent></SignInComponent>


              </div>

            </div>
            <div className="mt-auto">
              <Bandeau />

              <Footer /></div>
          </div>
        </div>
        {/* Mobile & Tablet view (≤ 1024px) */}
        <div className="block lg:hidden">
          <MRegister />
        </div>


      </div>
    </div>
  );
}
