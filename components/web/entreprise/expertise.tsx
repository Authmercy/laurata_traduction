"use client";
import { Brand } from "@/service/Brand";
import Image from "next/image";
import Link from "next/link"
import en from '../../../i18/en/entreprise/Expert.json';
import fr from '../../../i18/fr/entreprise/Expert.json';
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
export default function Expertise() {
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




      const router = useRouter();
      const { locale } = router;
      const t = locale === 'en' ? en : fr;

    return (

        <div className="flex flex-col   md:flex-row  ">
            <div className="flex-grow md:w-2/3 p-8">
                <h1 className=" text-[#A87A38] text-2xl  text-center font-extrabold w-full  pt-4 md:mx-8">
                {t.title}
                </h1>
                <div className=" pt-2 mt-8">
                    <div className="  bg-white/70  border-1 p-6  text-start border-[#4A62AA]" >
                        <p className="text-[#4A62AA] text-xl">  {t.subtitle1}</p>
                        <p className="mt-4 text-black" >
                        {t.text1} </p> </div>
                    <div className="flex w-[103%] -ml-4  bg-white/70 flex-col lg:flex-row flex-grow justify-center border-4 border-orange-700  gap-8 border-x-0 p-4 ">

                        <div className="">    <Image
                            src="/images/image.png"
                            alt="logoSES"
                            width={400}
                            height={80}

                        />
                        </div>
                        <div  className="justify-center flex items-center">
               

                            <p className=" text-black text-center " >        <b>  {t.expert}</b>  {t.expertText}</p>

                        </div>

                    </div>
                    <div className="text-center bg-white/70 p-2 ">
                        <p className="text-[#4A62AA] text-xl"> {t.IlsOntBeneficier}</p>
                        <div className=" grid grid-cols-4 bg-white pl-10  ">

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
                        <p className="text-black py-5"> {t.contactText}
                            <span className="font-extrabold text-[#4A62AA]">
                                <Link href="/misc/nous_contacter" className="  hover:text-xl">    {t.contact} </Link>
                        </span></p>

                    </div>
                </div>



            </div>

        </div>

    );
}