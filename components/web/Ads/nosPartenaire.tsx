"use client";

import { Brand } from "@/service/Brand";
import { useEffect, useState } from "react";

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
    return (
        <div className="flex flex-wrap mt-10 pt-6">

            <div className="w-full  h-[35%] py-2 pb-4 bg-white ">
                <p className="text-center  uppercase p-1 pb-4 text-[#4A62AA] ">  Partenaires </p>
                <div className=" grid grid-cols-9 pl-10  ">

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


    );

}