"use client";

import Footer from "@/components/web/footer/footer";
import Bandeau from "@/components/web/Ads/FooterPartenaire";
import SidebarInstitut from "@/components/web/sidebar/sideBarInstitution";
import ClassementComponent from "@/components/web/students/classements";
import NavbarInstitut from "@/components/web/navbar/navbarInstitut";
import BackToTopButton from "@/components/buttonTop";

export default function Institut() {


  return (
    <div className="flex flex-col min-h-screen">
      <div className="hidden lg:flex flex-col flex-grow">
        <div
          className="relative min-h-screen bg-cover bg-center bg-no-repeat flex flex-col"
          style={{ backgroundImage: "url('/images/backgroundEntreprise.jpg')" }}
        >
          <NavbarInstitut />

          <div className="flex flex-grow">
            <div className="w-[80%]">
              <ClassementComponent />
              <BackToTopButton />
            </div>
            <div className="w-[20%]">
              <SidebarInstitut />
            </div>
          </div>

          <div className="mt-auto">
            <Bandeau />
            <Footer />
          </div>
        </div>
      </div>
    </div>


  );
}