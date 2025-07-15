"use client";

import { Brand } from "@/service/Brand";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link"
import Navbar from "../navbar/navbar";
import { useEffect, useState } from "react";
import FooterMobile from "../footer/footerEnd";


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
                        <p>  EXPERTS ALLEMANDS DU SES</p>
                    </div>



                    <div className="grid grid-cols-1 lg:flex-row flex-grow  justify-center mt-8  ">

                        <div className="  bg-white-70  border-1 p-2  text-start border-[#4A62AA]" >
                            <p className="text-white text-lg font-bold text-center"> Bénéficiez du transfert de technologie et de renforcement de capacités</p>


                        </div>

                        <p className=" text-black p-3 text-justify  bg-white/70 " >
                            Vous cherchez de l’aide pratique, une solution pour vos problèmes techniques ou organisationnels, de nouvelles perspectives ou un conseil individuel ? Les
                            experts allemands du SES vous aideront, vous et vos collaborateurs.  </p>

                        <div className="flex px-4 my-2  bg-white flex-col lg:flex-row flex-grow justify-center border-4 border-orange-700  gap-8 border-x-0 p-4 ">

                            <div className="">    <Image
                                src="/images/logo/SES.jpg"
                                alt="logoSES"
                                width={400}
                                height={80}

                            />
                            </div>
                            <div >
                               

                                <p className=" text-black  mt-5" >      Le SES c’est 12 000 experts dans plus de 50 secteurs d’activités œuvrant au renforcement des compétences
                                    locales et au transfert de savoir-faire.</p>

                            </div>

                        </div>
                        <div className="text-center bg-white p-2 ">
                            <p className="text-[#4A62AA] text-xl">ILS ONT BÉNÉFICIÉ DU SAVOIR-FAIRE DES EXPERTS DU SES</p>
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
                            <p className="text-black py-5">Vous êtes intéressé ou avez des questions ? <span className="font-extrabold text-[#4A62AA]"><Link href="/misc/nous_contacter" className="  hover:text-xl">     Contactez-nous. </Link>
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