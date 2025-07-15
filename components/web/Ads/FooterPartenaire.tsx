
import { Brand } from "@/service/Brand";
import { useEffect, useState } from "react";
export default function Bandeau() {
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
                    id: 2,
                    name: "MOSAIK_ok",
                    url: "",
                    path: "/images/Logo MOSAIK_ok.jpg"
                },
                {
                    id: 3,
                    name: "Medicare",
                    url: "",
                    path: "/images/logo/medicare.png"
                },
                {
                    id: 4,
                    name: "S2",
                    url: "",
                    path: "/images/logo/s2.png"
                },
                {
                    id: 5,
                    name: "WoodPivot",
                    url: "",
                    path: "/images/logo/woodpivot.jpg"
                },
{
                    id: 6,
                    name: "cradat",
                    url: "",
                    path: "/images/logo/cradat.jpg"
                },
                {
                    id: 7,
                    name: "istiam",
                    url: "",
                    path: "/images/logo/istiam.jpg"
                },
                {
                    id: 8,
                    name: "ICPM",
                    url: "",
                    path: "/images/logo/icpm.jpg"
                },
                
                {
                    id: 9,
                    name: "DS",
                    url: "",
                    path: "/images/logo/ds.jpg"
                },


                {
                    id: 10,
                    name: "TIPSON",
                    url: "",
                    path: "/images/logo/tipson.png"
                },
             

            ];
            setBrand(brand);
        };

        fetchsetBrand();
    }, []);
    return (
        <div className="  bg-white flex items-center justify-center">

            <div className=" grid grid-cols-10 justify-center  gap-1 px-24    ">

                {brand.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-center "
                    >
                        <a href={item.path}>  <img
                            src={item.path}
                            alt={item.name}
                            className="w-7/12 h-4/12 hover:w-9/12 hover:h-10/12"
                        /> </a>
                    </div>
                ))}

            </div>
        </div>



    );
}
