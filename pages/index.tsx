
import WelcomePage from "@/components/web/welcome/home";
import MobileHomePage from "@/components/mobile/welcome/mobileHomePage";
import BackToTopButton from "@/components/buttonTop";
import WelcomePage1 from "@/components/web/welcome/homecopy";
import MobileHomePage1 from "@/components/mobile/welcome/mobileHomePage copy";
import WelcomePage2 from "@/components/web/welcome/home2";


export default function Home() {
  return (
    <div>
    {/* Desktop view (≥ 1024px) */}
    <div className="hidden lg:block">
        <WelcomePage2 />
    </div>  
    
    {/* Mobile & Tablet view (≤ 1024px) */}
    <div className="block lg:hidden">
      
        <MobileHomePage />
           <BackToTopButton />  
    </div>
</div>

  );
}
