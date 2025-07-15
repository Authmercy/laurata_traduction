import Image from "next/image";
import {Geist, Geist_Mono} from "next/font/google";
import MoreInfosSection from "@/components/web/welcome/moreInfosSection";
import NavBarAccueil from "@/components/web/navbar/navBarAccueil";
import Bandeau from "@/components/web/Ads/FooterPartenaire";
import Footer from "@/components/web/footer/footer";


export default function MoreInfos() {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="hidden lg:flex flex-col flex-grow">
                <NavBarAccueil/>
                <MoreInfosSection/>
                <div className="mt-auto">
                    <Bandeau/>
                    <Footer/>
                </div>
            </div>
        </div>
    );
}
