"use client";
import Sidebar from "@/components/web/sidebar/sideBar";
import Bandeau from "@/components/web/Ads/FooterPartenaire";
import ReferenceInstitution from "@/components/web/institution/reference";
import NavbarInstitut from "@/components/web/navbar/navbarInstitut";
import Footer from "@/components/web/footer/footer";
import SidebarInstitut from "@/components/web/sidebar/sideBarInstitution";
import BackToTopButton from "@/components/buttonTop";
import ReferenceInstitutionMobile from "@/components/mobile/institution/reference";

export default function ReferenceInstitut() {
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <div className="hidden lg:flex flex-col flex-grow">
          <div
            className="relative min-h-screen bg-cover bg-center bg-no-repeat flex flex-col"
            style={{ backgroundImage: "url('/images/backgroundInstitution.png')" }}
          >
            <NavbarInstitut />

            <div className="flex flex-grow">
              <div className="w-[80%]">
                <ReferenceInstitution />
                <BackToTopButton />
              </div>
              <div className="w-[20%]">
                <SidebarInstitut />
              </div>
            </div>
            <div className="mt-auto">
              <Bandeau />

              <Footer /></div>
          </div>    </div>
        {/* Mobile & Tablet view (≤ 1024px) */}
        <div className="block lg:hidden">
          <ReferenceInstitutionMobile></ReferenceInstitutionMobile>
          <BackToTopButton />
        </div>
      </div>




    </div>

  );

}
