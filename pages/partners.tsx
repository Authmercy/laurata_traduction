"use client";
import BackToTopButton from "@/components/buttonTop";
import Partenaire from "@/components/mobile/partners/partners";

export default function Mention() {
    return (
        <div>
            <div className="flex flex-col min-h-screen">
                <div className="hidden lg:flex flex-col flex-grow">
                    <div
                        className="relative bg-gray-200 min-h-screen bg-cover bg-center bg-no-repeat flex flex-col"

                    >
                     
                    </div>    </div>

                {/* Mobile & Tablet view (≤ 1024px) */}
                <div className="block lg:hidden">
                    <Partenaire></Partenaire>
                    <BackToTopButton />
                </div>
            </div>




        </div>
    );

} 