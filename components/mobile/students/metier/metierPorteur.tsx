"use client";
import router, { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import Navbar from "../../navbar/navbar";
import BackToTopButton from "@/components/buttonTop";
import FooterMobile from "../../footer/footerEnd";
import en from '@/i18/en/student/metier.json';
import fr from '@/i18/fr/student/metier.json';
import { URLS } from "@/service/url";

type Metier = {
  id: number;
  category: string;
  name: string;
  description: string;
};

export default function MetierPorterComponentMobile() {
  const [metiers, setMetier] = useState<Metier[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchMetier() {
      try {
        const BACKEND_URL = URLS.METIERS;
        if (!BACKEND_URL) {
          throw new Error("Environment variable URLS.METIERS is not defined");
        }
        const url = new URL(BACKEND_URL);
        url.searchParams.append("category", "PROMISING");
        const response = await fetch(url.toString(), {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            locale: "fr",
          },
        });

       
        const data = await response.json();


        setMetier(Array.isArray(data) ? data : [data]);
      } catch (error) {
        console.error('Error fetching feeds:', error);

      } finally {
        setLoading(false);
      }
    }

    fetchMetier();
  }, []);
      const router = useRouter();

    const { locale } = router;
    const t = locale === 'en' ? en : fr;
  const handleClick = (letter: string) => {

    router.push(`/students/metier/${letter}`);
  };
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

            <p>
     {t.promisingJobs} 
            </p>
          </div>


          <div

            className="bg-white/70   mt-2  p-2 py-4 shadow-sm mb-2 hover:shadow-md transition-shadow"
          >
            <p>

              {t.promisingJobsIntro}  </p>


          </div>
          <div className="mt-6 bg-white/70">
            {metiers.map((item, index) => (
              <div
                key={index}
                className="bg-white mt-1 grid grid-cols-1 sm:grid-cols-[1fr_3fr] gap-2 sm:gap-8 border-b border-gray-200"
              >
                <div className="font-bold bg-[#c8cddd] p-3 sm:p-4 text-center sm:text-end text-[#4A62AA]">
                  {item.name || "Métier non spécifié"}
                </div>
                <div className="p-3 sm:p-4 max-w-4xl">
                  <p className="text-black">
                    {item.description || "Aucune description disponible"}
                  </p>
                </div>

              </div>

            ))}
          </div>
          <div className="right-20">

          </div>        <BackToTopButton />
        </div>
      </div>
      <footer className="w-full bg-blue-900    text-white text-center">
              <FooterMobile />
            </footer>

    </div>
  )
};