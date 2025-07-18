"use client";
import Link from "next/link";
import Navbar from "../navbar/navbar";
import { useEffect, useState } from "react";
import { Brand } from "@/service/Brand";
import FooterMobile from "../footer/footerEnd";
import { useRouter } from "next/router";

export default function Partenaire() {

    const [brand, setBrand] = useState<Brand[]>([]);
 useEffect(() => {
        const fetchsetBrand = async () => {
            const brand: Brand[] = [
                 {
                    id: 1,
                    name: "SES",
                    url: "",
                    path: "/images/logo/SES.jpg"
                },

                   {
                    id: 1,
                    name: "MOSAIK_ok",
                    url: "",
                    path: "/images/Logo MOSAIK_ok.jpg"
                },

                  {
                    id: 1,
                    name: "Medicare",
                    url: "",
                    path: "/images/logo/medicare.png"
                },

                 {
                    id: 1,
                    name: "S2",
                    url: "",
                    path: "/images/logo/s2.png"
                },

                  {
                    id: 1,
                    name: "WoodPivot",
                    url: "",
                    path: "/images/logo/woodpivot.jpg"
                },

{
                  id: 1,
                    name: "Orange",
                    url: "",
                    path: "/images/logo/orange.jpg"
                },

                {
                    id: 2,
                    name: "CEEC",
                    url: "",
                    path: "/images/logo/ceec.jpg"
                },
                 {
                    id: 1,
                    name: "BTP",
                    url: "",
                    path: "/images/logo/BTP.png"
                },

               

                {
                    id: 1,
                    name: "TIPSON",
                    url: "",
                    path: "/images/logo/tipson.png"
                },

                
                
                 {
                    id: 1,
                    name: "cradat",
                    url: "",
                    path: "/images/logo/cradat.jpg"
                },
    {
                    id: 1,
                    name: "istiam",
                    url: "",
                    path: "/images/logo/istiam.jpg"
                },
                
                {
                    id: 1,
                    name: "ICPM",
                    url: "",
                    path: "/images/logo/icpm.jpg"
                },


 {
                    id: 1,
                    name: "ipf-psj",
                    url: "",
                    path: "/images/logo/ipf-psj.jpg"
                },
                {
                    id: 1,
                    name: "DS",
                    url: "",
                    path: "/images/logo/ds-academie.jpg"
                },
                {
                    id: 1,
                    name: "Afrika Development Solutions",
                    url: "",
                    path: "/images/logo/afrik.png"
                },
               
                
                {
                    id: 1,
                    name: "Provac",
                    url: "",
                    path: "/images/logo/provac.jpg"
                },
              
                 {
                    id: 2,
                    name: "FIAA",
                    url: "",
                    path: "/images/logo/fiaa.jpg"
                },
               
              
                  {
                    id: 1,
                    name: "MOSAIK_ok",
                    url: "",
                    path: "/images/Logo MOSAIK_ok.jpg"
                },
                
               
            
               
             

            ];
            setBrand(brand);
        };

        fetchsetBrand();
    }, []);
       const router = useRouter();
           const { locale } = router;
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
                        <p>  {locale === 'en' ? 'Partners' : ' Partenaires'}  </p>
                    </div>



                    <div className="flex flex-wrap mt-8 pt-6">

                        <div className="w-full  py-10  bg-white ">

                            <div className=" grid grid-cols-3 pl-10 gap-y-4 ">

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
                        </div>
                    </div>
                </div>


            </div>
            <footer className="w-full bg-blue-900    text-white text-center">
                <FooterMobile />
            </footer>   </div>


    );
}