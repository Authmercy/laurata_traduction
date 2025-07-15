
import { Brand } from "@/service/Brand";
import Image from "next/image";
import { useEffect, useState } from "react";
export default function BandeauMobile() {
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
          path: "/images/logo/BTP.png"
        },
         {
                    id: 1,
                    name: "ipf-psj",
                    url: "",
                    path: "/images/logo/ipf-psj.jpg"
                },


      ];
      setBrand(brand);
    };

    fetchsetBrand();
  }, []);

  return (
  <div className="relative overflow-hidden bg-white h-28">
  <div className="animate-scroll flex whitespace-nowrap min-w-[200%]">
    {[...brand, ...brand].map((item, index) => (
      <div
        key={index}
        className="flex items-center justify-center flex-shrink-0 w-20 mx-2"
      >
        <a href={item.path}>
          <img
            src={item.path}
            alt={item.name}
            className="w-full object-contain"
          />
        </a>
      </div>
    ))}
  </div>
</div>


  );
}