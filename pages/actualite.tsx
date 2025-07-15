"use client";
import BackToTopButton from "@/components/buttonTop";
import ActuComponentMobile from "@/components/mobile/actualite/actuComponent";
import ActuComponent from "@/components/web/actualite/actuComponent";
import Footer from "@/components/web/footer/footer";
import NavbarActu from "@/components/web/navbar/navBarActu";


import Sidebar from "@/components/web/sidebar/sideBar";



export default function Mention() {
    return (
        <div>
            <div className="flex flex-col min-h-screen">
                <div className="hidden lg:flex flex-col flex-grow">
                    <div
                        className="relative bg-gray-200 min-h-screen bg-cover bg-center bg-no-repeat flex flex-col"

                    >
                        <NavbarActu />

                        <div className="mt-24 flex flex-grow">
                            <div className="w-[80%]">
                                <ActuComponent />
                                        <BackToTopButton />
                            </div>
                            <div className="w-[20%] mt-10">
                                <Sidebar />
                            </div>
                        </div>

                        <div className="mt-auto">

                            <Footer />
                        </div>
                    </div>
                </div>
                {/* Mobile & Tablet view (≤ 1024px) */}
                <div className="block lg:hidden">
                    <ActuComponentMobile></ActuComponentMobile>
                    <BackToTopButton />
                </div>
            </div>




        </div>
    );
} 