"use client";
import Footer from "@/components/web/footer/footer";
import NavbarCGU from "@/components/web/navbar/navbarCGU";
import CguComponent from "@/components/web/misc/cgu";
import BackToTopButton from "@/components/buttonTop";
import CguComponentMobile from "@/components/mobile/misc/cgu";

export default function CGU() {

  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <div className="hidden lg:flex flex-col flex-grow">
          <div
            className=" bg-gray-200 min-h-screen bg-cover bg-center bg-no-repeat flex flex-col"

          >
            <NavbarCGU />
            <div className="px-6 text-justify">
              <div className="mt-44 w-[100%]">

                <CguComponent />
                <BackToTopButton />

              </div>

            </div>
            <div className="mt-auto">


              <Footer /></div>
          </div>
        </div>
        {/* Mobile & Tablet view (≤ 1024px) */}
        <div className="block lg:hidden">
          <CguComponentMobile></CguComponentMobile>
          <BackToTopButton />
        </div>


      </div>
    </div>
  );

}
