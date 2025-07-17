
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router";
import { useState } from "react";
import en from '@/i18/en/footer/footer.json';
import fr from '@/i18/fr/footer/footer.json';
export default function Footer() {
    const router = useRouter();
    const [clicked, setClicked] = useState(false);
const [clicked2, setClicked2] = useState(false);
const [clicked3, setClicked3] = useState(false);
    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setClicked(true);
        setTimeout(() => {
            router.push("/misc/legal");
        }, 150);
    };
      const handleClick2 = (e: React.MouseEvent) => {
        e.preventDefault();
        setClicked2(true);
        setTimeout(() => {
            router.push("/misc/cgu");
        }, 150);
    };
      const handleClick3 = (e: React.MouseEvent) => {
        e.preventDefault();
        setClicked3(true);
        setTimeout(() => {
            router.push("/misc/presentaionDuSite");
        }, 150);
    };

  const { locale } = router;
  const t = locale === 'en' ? en : fr;

    return (
    <footer className="bg-[#ee9313] text-white h-[75px] w-full">
      <div className="flex flex-row w-full h-full justify-between">
      
        <div className="bg-blue-900 w-[70%] flex flex-row justify-center">
          <div className="flex flex-col justify-center text-center items-center">
            <p>{t.copyright}</p>
          </div>

          <div className="justify-center text-center px-10 gap-4 flex">
        
            <div className="flex justify-center gap-2 lg:pl-1 text-center items-center">
              <Image 
                src="/icons/icons8-location-48.png" 
                alt="" 
                width={80} 
                height={20} 
                className="w-5 h-5" 
              />
              <p>{t.address}</p>
            </div>

      
            <div className="flex text-center items-center justify-center gap-2 sm:gap-2 lg:gap-4">
              <Image 
                src="/icons/icons8-call-50.png" 
                alt="" 
                width={20} 
                height={20} 
                className="w-5 h-5" 
              />
              <p>{t.phone}</p>
            </div>

    
            <div className="flex justify-center text-center items-center gap-2 lg:gap-4 px-4">
              <Image 
                src="/icons/icons8-email-30(1).png" 
                alt="" 
                width={20} 
                height={20} 
                className="w-5 h-5" 
              />
              <p>{t.email}</p>
            </div>
          </div>
        </div>


        <div className="flex justify-center w-[15%] h-full text-center items-center bg-[#ce9545] hover:text-[#4A62AA] text-white uppercase">
          <Link href="/misc/nous_contacter">
            <p className="flex items-center justify-center text-center">
              {t.contact}
            </p>
          </Link>
        </div>

     
        <div className="grid bg-blue-900 w-[15%] justify-center text-center">
          <div
            onClick={handleClick3}
            className={`cursor-pointer justify-center text-center px-2 transition-colors duration-150 ${
              clicked3 ? "text-[#ee9313]" : "text-white"
            }`}
          >
            {t.links.about}
          </div>
          <div
            onClick={handleClick}
            className={`cursor-pointer justify-center text-center px-2 transition-colors duration-150 ${
              clicked ? "text-[#ee9313]" : "text-white"
            }`}
          >
            {t.links.legal}
          </div>
          <div
            onClick={handleClick2}
            className={`cursor-pointer justify-center text-center px-2 transition-colors duration-150 ${
              clicked2 ? "text-[#ee9313]" : "text-white"
            }`}
          >
            {t.links.terms}
          </div>
        </div>
      </div>
    </footer>

    )
}
