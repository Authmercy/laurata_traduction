"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "../navbar/navbar";
import FooterMobile from "../footer/footerEnd";
import en from '@/i18/en/student/service.json';
import fr from '@/i18/fr/student/service.json';
import { useRouter } from "next/router";

export default function ServicesComponentMobile() {

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
            <p>    {t.title}</p>
          </div>



          <div className="bg-white w-full px-3 py-6">
            <div className=" ">
              <p className="font-bold  text-lg text-center">
               {t.subtitle}
              </p>
              <p className="mt-6 text-black">
              {t.description}</p>
            </div>

            <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 md:grid-cols-3 mt-2 p-4 sm:px-6 lg:px-10">
              <div className="bg-[#A87A38] rounded-2xl text-white shadow-lg">

                <div className="p-5">
                  <p className="font-semibold text-center ">{t.services.orientation.title}</p>
                  <p className="mt-2 ">
                 {t.services.orientation.description}  </p>
                </div>
              </div>

              <div className="bg-[#3f5eaa]  rounded-2xl text-white shadow-lg">

                <div className="p-5">
                  <p className="font-semibold text-center">{t.services.thesis.title}</p>
                  <p className="mt-2 ">
                {t.services.thesis.description}</p>
                </div>
              </div>

              <div className="bg-[#254745] text-white  rounded-2xl shadow-lg">

                <div className="p-5">
                  <p className="font-semibold  text-center">{t.services.international.title}</p>
                  <p className="mt-2 ">
                  {t.services.international.description}
                  </p>
                </div>
              </div>

              <div className="bg-[#fcdaa7] text-black rounded-2xl shadow-lg">

                <div className="p-5">
                  <p className="font-semibold  text-center">{t.services.professionals.title}</p>
                  <p className="mt-2 ">
                   {t.services.professionals.description}
                  </p>
                </div>
              </div>

              <div className="bg-[#A87A38] rounded-2xl text-white shadow-lg">

                <div className="p-5">
                  <p className="font-semibold text-center ">{t.services.mentoring.title}</p>
                  <p className="mt-2 ">
                  {t.services.mentoring.description}
                  </p>
                </div>
              </div>

              <div className="bg-[#3f5eaa]  rounded-2xl text-white shadow-lg">

                <div className="p-5">
                  <p className="font-semibold  text-center">{t.services.germany.title}</p>
                  <p className="mt-2 ">
                {t.services.germany.description} </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-6 px-4">
              <p className=" text-black ">
                <Link href="/misc/nous_contacter" className="hover:text-xl">
          {t.contact.split(' ')[0]}
        </Link> {t.contact.split(' ').slice(1).join(' ')}
              </p>
            </div>

          </div>


        </div>
      </div>
    <footer className="w-full bg-blue-900    text-white text-center">
                                                        <FooterMobile />
                                                      </footer>
    </div>
  );
}
