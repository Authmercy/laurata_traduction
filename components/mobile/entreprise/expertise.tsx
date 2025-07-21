"use client";

import { Brand } from "@/service/Brand";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link"
import Navbar from "../navbar/navbar";
import { useEffect, useState } from "react";
import FooterMobile from "../footer/footerEnd";

import en from '@/i18/en/entreprise/Expert.json';
import fr from '@/i18/fr/entreprise/Expert.json';
export default function ExpertiseMobile() {
    const [brand, setBrand] = useState<Brand[]>([]);
    useEffect(() => {
        const fetchsetBrand = async () => {
            const brand: Brand[] = [

                {
                    id: 1,
                    name: "Beta Construction",
                    url: "",
                    path: "/images/logo/betaConstruction.jpg"
                },
                {
                    id: 1,
                    name: "Bati Confort",
                    url: "",
                    path: "/images/logo/baticonfort.png"
                },

                {
                    id: 1,
                    name: "Provac",
                    url: "",
                    path: "/images/logo/provac.jpg"
                },

                {
                    id: 1,
                    name: "Transimex",
                    url: "",
                    path: "/images/logo/transimex2.jpg"
                },

            ];
            setBrand(brand);
        };

        fetchsetBrand();
    }, []);

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileMenuOpen2, setIsMobileMenuOpen2] = useState(false);
   const router = useRouter();
      const { locale } = router;
      const t = locale === 'en' ? en : fr;
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
                    <div className="justify-center p-2 text-center text-xl font-bold uppercase bg-[#414040] text-white">
                        <p>   {t.title}</p>
                    </div>



                    <div className="grid grid-cols-1 lg:flex-row flex-grow  justify-center mt-8  ">

                        <div className="  bg-white-70  border-1 p-2  text-start border-[#4A62AA]" >
                            <p className="text-white text-lg font-bold text-center"> {t.subtitle1}</p>


                        </div>

                        <p className=" text-black p-3 text-justify  bg-white/70 " >
                            {t.text1}  </p>

                        <div className="flex px-4 my-2  bg-white flex-col lg:flex-row flex-grow justify-center border-4 border-orange-700  gap-8 border-x-0 p-4 ">

                            <div className="">    <Image
                                src="/images/logo/SES.jpg"
                                alt="logoSES"
                                width={400}
                                height={80}

                            />
                            </div>
                            <div >
                               

                                <p className=" text-black  mt-5" >        <b>  {t.expert}</b>  {t.expertText}</p>

                            </div>

                        </div>
                        <div className="text-center bg-white p-2 ">
                            <p className="text-[#4A62AA]  uppercase text-xl">{t.IlsOntBeneficier}</p>
                            <div className="flex justify-center mt-6  ">

                                {brand.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center justify-center "
                                    >
                                        <a href={item.path}>  <img
                                            src={item.path}
                                            alt={item.name}
                                            className="w-8/12 h-9/12 hover:w-9/12 hover:h-10/12"
                                        /> </a>
                                    </div>
                                ))}
                            </div>
                            <p className="text-black py-5">{t.contactText}
                            <span className="font-extrabold text-[#4A62AA]">
                                <Link href="/misc/nous_contacter" className="  hover:text-xl">    {t.contact} </Link>
                        </span></p>
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