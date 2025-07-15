"use client";


import BackToTopButton from "@/components/buttonTop";
import PresentaionDuSiteMobile from "@/components/mobile/misc/presenation";
import Footer from "@/components/web/footer/footer";
import PresentaionDuSite from "@/components/web/misc/presenation";
import NavbarPresentation from "@/components/web/navbar/navbarPresentation";

export default function CGU() {
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <div className="hidden lg:flex flex-col flex-grow">
          <div className="relative flex  flex-col min-w-screen text-justify min-h-screen h-auto w-auto  bg-cover bg-center bg-no-repeat" >

            <NavbarPresentation />
            <div className="flex px-8  ">
              <div className="mt-44 ">

                <PresentaionDuSite />
                <BackToTopButton />

              </div>

            </div>
            <div className="mt-auto">


              <Footer /></div>
          </div>
        </div>
        {/* Mobile & Tablet view (≤ 1024px) */}
        <div className="block lg:hidden">
          <PresentaionDuSiteMobile></PresentaionDuSiteMobile>

          <BackToTopButton />
        </div>


      </div>
    </div>
  );

}
