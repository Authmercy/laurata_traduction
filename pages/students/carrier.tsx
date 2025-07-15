import Navbar from "@/components/web/navbar/navBarEtudiant";
import Sidebar from "@/components/web/sidebar/sideBar";
import Bandeau from "@/components/web/Ads/FooterPartenaire";
import ConseilStageMobile from "@/components/mobile/stage/conseil";
import Footer from "@/components/web/footer/footer";
import CarrierComponent from "@/components/web/students/carrier";
import BackToTopButton from "@/components/buttonTop";
import CarrierComponentMobile from "@/components/mobile/students/carrier";

export default function Classement() {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="hidden lg:flex flex-col flex-grow">
                <div
                    className="relative min-h-screen bg-cover bg-center bg-no-repeat flex flex-col"
                    style={{ backgroundImage: "url('/images/backgroundEtudiant.jpeg')" }}>

                    <Navbar />
                    <div className="flex  flex-row">
                        <div className=" mt-6 w-[80%]">
                            <CarrierComponent />
                            <BackToTopButton />
                        </div>
                        <div className="w-[20%]">
                            <Sidebar />
                        </div>
                    </div>

                    <div className="mt-auto">
                        <Bandeau />

                        <Footer />
                    </div>
                </div>
            </div>

            {/* Mobile & Tablet view (≤ 1024px) */}
            <div className="block lg:hidden">
                <CarrierComponentMobile />
                <BackToTopButton />
            </div>


        </div>
    );
}