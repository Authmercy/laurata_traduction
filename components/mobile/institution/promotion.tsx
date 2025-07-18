"use client";


import Link from "next/link";
import Navbar from "../navbar/navbar";
import { useState } from "react";
import FooterMobile from "../footer/footerEnd";


import en from '@/i18/en/institution/promotion.json';
import fr from '@/i18/fr/institution/promotion.json';
import { useRouter } from "next/router";
export default function PromotionInstitutionMobile() {
 const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : fr;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileMenuOpen2, setIsMobileMenuOpen2] = useState(false);

  return (
    <div>
     <div className="min-h-screen   bg-[#34538C]  overflow-auto  w-screen bg-cover  text-justify bg-center bg-no-repeat "  >
        <Navbar
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          isMobileMenuOpen2={isMobileMenuOpen2}
          setIsMobileMenuOpen2={setIsMobileMenuOpen2}
        />
        <div className={`${isMobileMenuOpen ? "blur-sm " : ""
          } ${isMobileMenuOpen2 ? "blur-sm " : ""
          } `}>
          <div className="justify-center p-2 text-center text-xl font-bold uppercase bg-[#9b6e0f] text-white">
            <p>    {t.title} </p>
          </div>


          <div

            className="bg-white  mt-8 p-2 py-4 shadow-sm mb-2 hover:shadow-md transition-shadow"
          >
            <p className="text-[#4A62AA] text-justify "   dangerouslySetInnerHTML={{ __html: t.description }}/>   
                   

          </div>
          <div className="p-2">




            <div className=" pt-2">
              <div className="flex flex-col lg:flex-row flex-grow justify-center   py-2 ">

                <div>
                  <p className="text-white text-center font-bold text-lg ">

                       {t.benefits.heading}
                  </p>
                  <div className="flex flex-col lg:flex-row flex-grow justify-center gap-6 mt-4">
 {t.benefits.items.map((benefit, index) => (
                <div
                  key={index}
                  className={`text-center p-8 text-white ${
                    index === 0 ? 'bg-[#A87A38]' : 
                    index === 1 ? 'bg-[#1941b8]' : 'bg-[#A87A38]/80'
                  }`}
                >
                  <p>{benefit}</p>
                </div>
              ))}
                    


                  </div>


                </div>

              </div>
              <div className="flex mt-8 justify-center w-full">
          <div>
            <p className="text-center text-xl text-white p-4">
              <b className="text-xl">
                <Link href="/misc/nous_contacter" className="hover:text-2xl">
                  {locale === 'en' ? 'Contact us' : 'Contactez-nous'}
                </Link>
              </b> {t.cta.replace('Contactez-nous', '').replace('Contact us', '')}
            </p>
          </div>
        </div>
              </div>
          </div>


        </div>
         <footer className="w-full bg-blue-900   mt-24 text-white text-center">
        <FooterMobile />
      </footer>
      </div>
     
    </div>

  );
}