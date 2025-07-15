"use client";
import BackToTopButton from "@/components/buttonTop";
import ZoomDetailMobile from "@/components/mobile/zoom/zoomDetail";
import Footer from "@/components/web/footer/footer";

import NavbarZoom from "@/components/web/navbar/navBarZoom";
import Sidebar from "@/components/web/sidebar/sideBar";


import ZoomDetail from "@/components/web/zoom/zoomDetail";

export default function Mention() {

    return (
        <div>
            <div className="flex flex-col min-h-screen">
                <div className="hidden lg:flex flex-col flex-grow">
                    <div
                        className="relative bg-gray-200 min-h-screen bg-cover bg-center bg-no-repeat flex flex-col"

                    >
                        <NavbarZoom />

                        <div className="mt-24 flex flex-grow">
                            <div className="w-[80%]">
                                <ZoomDetail />
                                <BackToTopButton />
                            </div>
                            <div className="w-[20%] mt-10">
                                <Sidebar />
                            </div>
                        </div>

                        <div className="mt-auto">

                            <Footer />
                        </div>
                    </div>    </div>

                {/* Mobile & Tablet view (≤ 1024px) */}
                <div className="block lg:hidden">
                    <ZoomDetailMobile></ZoomDetailMobile>
                    <BackToTopButton />
                </div>
            </div>




        </div>
    );

} 