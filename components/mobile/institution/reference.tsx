"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../navbar/navbar";
import { useState } from "react";
import FooterMobile from "../footer/footerEnd";
import { useRouter } from 'next/router';
import en from '@/i18/en/institution/reference.json';
import fr from '@/i18/fr/institution/reference.json';
export default function ReferenceInstitutionMobile() {

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
            <p>  {t.title}</p>
          </div>


          <div

            className="bg-white  mt-8 p-2 py-4 shadow-sm mb-2 hover:shadow-md transition-shadow"
          >
            <p className="text-[#4A62AA] text-lg  text-center font-bold ">     
            {t.heading}
            </p>

          </div>
          <div className="p-4 md:p-8 lg:pl-8 pt-2">




            <div className="md:pt-8  pt-2">
              <div className="flex flex-col lg:flex-row text-center gap-4 ">
               
                <div className="  bg-white/70 border-2 p-2 border-[#4A62AA]" >
                  <p className="text-[#4A62AA] font-semibold uppercase ">      {t.benefits[0].title}</p>
                  <p className="mt-4 text-black" >
  {t.benefits[0].description}
                  </p>
                </div>

                <div className="  bg-[#b1b3b9]/70 border-2 p-2 border-[#4A62AA]" >
                  <p className="text-white font-semibold ">{t.benefits[1].title}</p>
                  <p className="mt-4 text-black" >
                    {t.benefits[1].description} </p>
                </div>
                <div className="  bg-[#A87A38]/70   border-2 p-2 border-[#4A62AA]" >
                  <p className="text-white uppercase font-semibold ">{t.benefits[2].title}</p>
                  <p className="mt-4 text-black" >
               {t.benefits[2].description}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row flex-grow justify-center mt-6 md:mt-8">
              <div className="w-full">
                <p className="text-white text-center p-3 text-lg md:text-xl ">
             {t.odd.title}
                </p>

                <div className="flex flex-col lg:flex-row gap-2  mt-4">
                  <div className=" items-center flex justify-center text-center text-white">
                    <Image
                      src="/images/odd.png"
                      alt="ODD-odd"
                      width={200}
                      height={130}
                      className="object-contain"
                    />
                  </div>
                  <div className="bg-white mt-2 text-black p-2 text-center ">

                    <p>{t.odd.description}</p>
                  </div>
                  <div className=" items-center -mt-2 flex justify-center  text-white">
                    <Image
                      src="/images/ODD-10.svg"
                      alt="ODD-10"
                      width={180}
                      height={120}
                      className="object-contain"
                    /></div>
                </div>
              </div>
            </div>

            <div className="bg-[#ffff] mt-6 md:mt-8">
              <p className="text-center text-[#4A62AA] text-base md:text-lg p-4">
                <b className="text-lg md:text-xl">
                    <Link href="/misc/nous_contacter" className="hover:text-xl">
                {locale === 'en' ? 'Contact us' : 'Contactez-nous'}
                </Link>
              </b> {t.cta.replace(locale === 'en' ? 'Contact us' : 'Contactez-nous', '')}</p>
            </div>


            <div>
              <div className="bg-[#A87A38] text-white mt-6 md:mt-8 p-3 md:pb-12 text-center">
                <p className="text-center font-bold text-base md:text-lg">
                       {t.options.heading}   </p>
              </div>

              <div className="flex flex-col lg:flex-row justify-between w-full md:w-11/12 mx-auto gap-4 md:gap-8 md:ml-10">
               {t.options.items.map((item, index) => (
                <div key={index} className="bg-white border-2 p-4 border-[#A87A38] flex-1">
                  <p 
                    className="text-[#4A62AA] text-center "
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                </div>
              ))}
               
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