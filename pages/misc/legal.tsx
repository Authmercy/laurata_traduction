"use client";
import BackToTopButton from "@/components/buttonTop";
import LegalSectionMobile from "@/components/mobile/misc/legal";
import Footer from "@/components/web/footer/footer";
import LegalSection from "@/components/web/misc/legal";
import NavbarMention from "@/components/web/navbar/navBarMentionLegale";

export default function Mention() {
    return (
        <div>
            <div className="flex flex-col min-h-screen">
                <div className="hidden lg:flex flex-col flex-grow">
                    <div
                        className="relative bg-gray-200 min-h-screen bg-cover bg-center bg-no-repeat flex flex-col"

                    >
                        <NavbarMention />

                        <div className="mt-24 flex flex-grow">
                            <div className="mt-24 px-6">
                                <LegalSection />
                                <BackToTopButton />
                            </div>

                        </div>

                        <div className="mt-auto">

                            <Footer />
                        </div>
                    </div>
                </div>

                <div className="block lg:hidden">
                    <LegalSectionMobile></LegalSectionMobile>
                </div>


            </div>
        </div>
    );
} 