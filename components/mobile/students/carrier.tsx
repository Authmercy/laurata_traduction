"use client";
import React, { useRef } from "react";
import { useEffect, useState } from "react";
import Navbar from "../navbar/navbar";
import FooterMobile from "../footer/footerEnd";
import { Brand } from "@/service/Brand";
import en from '@/i18/en/student/career.json';
import fr from '@/i18/fr/student/career.json';
import { useRouter } from "next/router";
export default function CarrierComponentMobile() {
  const router = useRouter();

    const { locale } = router;
    const t = locale === 'en' ? en : fr;
    const [open, setOpen] = useState(null);

    const handleToggle = (index: any) => {
        setOpen(open === index ? null : index);
    };
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileMenuOpen2, setIsMobileMenuOpen2] = useState(false);

    const [brand, setBrand] = useState<Brand[]>([]);
    useEffect(() => {
        const fetchsetBrand = async () => {
            const brand: Brand[] = [

                {
                    id: 1,
                    name: "Medicare",
                    url: "",
                    path: "/images/logo/medicare.png"
                },


            ];
            setBrand(brand);
        };

        fetchsetBrand();
    }, []);

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
                        <p>               {t.title}</p>
                    </div>









                    <div className="mt-8 space-y-4">
                        <div>

                            <div className="flex flex-col sm:flex-row gap-1">
                                <button
                                    className="w-full sm:w-4/12 py-2 px-4  bg-[#4c75f0] text-white flex justify-between items-center sm:justify-center"
                                    onClick={() => handleToggle(4)}
                                >
                                    <span className="text-start">{t.content1.topic1}</span>
                                    <span className="sm:ml-6  text-2xl    ">{open === 4 ? "▲" : "▼"}</span>
                                </button>


                            </div>

                            {open === 4 && (
                                <div className="bg-white text-justify ">
                                    <div className="w-full">
                                      <div className="space-y-4 bg-white/80">
                              
                                        <p className="bg-[#f1d9b6] p-3  py-2" dangerouslySetInnerHTML={{ __html: t.content1.p1 }}/>
                                        <p className=" p-3  py-2" dangerouslySetInnerHTML={{ __html: t.content1.p2 }}/>


                                       
                                        <p className="bg-[#f1d9b6] p-3 py-2" dangerouslySetInnerHTML={{ __html: t.content1.p3 }}/>
                                        <p className=" p-3 py-2" dangerouslySetInnerHTML={{ __html: t.content1.p4 }}/>
                                        <p className="bg-[#f1d9b6] p-3 py-2">
                                            <span dangerouslySetInnerHTML={{ __html: t.content1.p5 }} />

                                            <p dangerouslySetInnerHTML={{ __html: t.content1.p6 }}/>

                                    
                                        </p>
                                        <p className=" p-3 py-2">
                                         <span dangerouslySetInnerHTML={{ __html: t.content1.p7 }}/>
                                            <p>
                                                <b> 1.  </b> SNH (788,3) ;
                                                <b> 2.  </b>  ENEO (394,5) ;
                                                <b> 3.  </b> SABC (362,9) ;     <b> 4.  </b>  Tradex (350) ;
                                                <b> 5.  </b> MTN (282,3) ;     <b> 6.  </b>  Orange (250,2) ;
                                                <b> 7.  </b>  FEICOM (243,7) ;     <b> 8.  </b>  CNPS (242,6) ;
                                                <b> 9.  </b>  SODECOTON (171) ;     <b> 10.  </b>  DANGOTE Cement Cameroon (92,5). <i> {t.content1.i1}  </i>  </p>

                                        </p>
                                    </div>
                                        <div className=" bg-[#f1d9b6]  ">
                                            <p className="text-start p-3 text-[#4A62AA] font-bold">
                                            {t.content1.p8}
                                            </p>
                                            <div className="flex flex-col gap-2 p-4">
                                                <div className="flex-1">
                                                    <img src="/images/statistique.png" alt=" start" />
                                                </div>

                                                <div className="flex-1 text-black flex justify-center">
                                                            {t.content1.p9}
                                                </div></div>

                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>
                    <div className="mt-2 space-y-4">
                        <div>

                            <div className="flex flex-col sm:flex-row gap-1">
                                <button
                                    className="w-full sm:w-4/12 py-2 px-4  bg-[#4c75f0] text-white flex justify-between items-center sm:justify-center"
                                    onClick={() => handleToggle(5)}
                                >
                                    <span className="text-start"> {t.content2.topic2}</span>
                                    <span className="sm:ml-6  text-2xl    ">{open === 5 ? "▲" : "▼"}</span>
                                </button>


                            </div>

                            {open === 5 && (
                                <div className="bg-white text-justify p-2">
                                    <div className="w-full">
                                        <div className="space-y-4 text-black">

                                            <p>
                                        {t.content2.p1} </p>

                                        <p>
                                          {t.content2.p3}
                                        </p>
                                            <div className="overflow-x-auto">
                                                <table className="table-auto border-collapse border min-w-[800px] shadow-lg w-full">
                                                    <thead>
                                                        <tr className="">

                                                            <th className="border-y-2 border-[#A87A38]   px-4 py-2 text-[#4A62AA] text-left"> </th>
                                                    <th className="border-y-2 border-[#A87A38]   px-4 py-2 text-[#4A62AA] text-left"> {t.content2.h1} </th>
                                                    <th className="border-y-2 border-[#A87A38]   px-4 py-2 text-[#4A62AA] text-left"> {t.content2.h2} </th>
                                                    <th className="border-y-2 border-[#A87A38]   px-4 py-2 text-[#4A62AA] text-left">  {t.content2.h3}</th>

                                                        </tr>
                                                    </thead>
                                                    <tbody className="text-start">

                                                         <tr className="  bg-[#d8c6ad] text-justify ">

                                                    <td className="  px-4 py-2  text-center">
                                                        <span className="font-bold  text-[#4A62AA]">
                                                            <p>   1.</p>
                                                          {t.content2.r1}
                                                        </span>
                                                    </td>
                                                    <td className="   px-4 py-2 ">
                                                        <p>         {t.content2.p3}
                                                        </p>
                         <p>         {t.content2.p4}
                                                        </p>

                                                    </td>
                                                    <td className="  px-4 py-2 ">
                                                          <p>         {t.content2.p5}
                                                        </p>
                                                        <p>  <i>  {t.content2.p6}</i>
                                                        </p>
                                                    </td>
                                                    <td className="   px-4 py-2 ">
                                                    {t.content2.p7} </td>


                                                </tr>
                                                <tr className="text-justify ">

                                                    <td className="   px-4 py-2 text-center">
                                                        <span className="font-bold text-center  text-[#4A62AA]">
                                                            <p>   2.</p>
                                                           {t.content2.r2}
                                                        </span>
                                                    </td>
                                                    <td className="   px-4 py-2 text-left">

                                                        <p>   {t.content2.p8}
                                                        </p>
                                                        <p className=" font-bold  text-[#A87A38] "> {t.content2.bon} </p>
                                                        <p>  <span className="text-[#A87A38]">  ► </span>  {t.content2.p9}</p>
                                                        <p>
                                                            <span className="text-[#A87A38]">  ► </span>  {t.content2.p10}</p>
                                                        <p>
                                                            <span className="text-[#A87A38]">  ► </span> {t.content2.p11}
                                                        </p>   </td>
                                                    <td className="   px-4 py-2 text-left">
                                       {t.content2.p12}
                                                        <p className=" font-bold text-[#A87A38]">  {t.content2.bon}</p>
                                                        <p>    < span className="text-[#A87A38]">  ► </span> {t.content2.p13}
                                                        </p>  <p> <span className="text-[#A87A38]">  ► </span> {t.content2.p14}
                                                        </p>
                                                    </td>
                                                    <td className="   px-4 py-2 text-left">
                                                     {t.content2.p15}  <p className=" font-bold text-[#A87A38] ">  {t.content2.bon}</p>
                                                        <p>  <span className="text-[#A87A38]">  ► </span> {t.content2.p15}
                                                        </p>
                                                    </td>


                                                </tr>

                                                <tr className=" bg-[#d8c6ad] text-justify ">

                                                    <td className="   px-4 py-2 text-center">
                                                        <span className=" text-center font-bold text-[#4A62AA]">
                                                            <p>   3.</p>
                                                          {t.content2.r3}
                                                        </span>
                                                    </td>
                                                    <td className="   px-4 py-2 text-left" dangerouslySetInnerHTML={{ __html: t.content2.p17 }}/>
                                                    <td className="   px-4 py-2 text-left" dangerouslySetInnerHTML={{ __html: t.content2.p18 }}/>
                                                    <td className="   px-4 py-2 text-left" dangerouslySetInnerHTML={{ __html: t.content2.p19 }}/>

                                                </tr>

                                                <tr className=" text-justify ">

                                                    <td className="   px-4 py-2 text-center">
                                                        <span className="text-center font-bold text-[#4A62AA]">
                                                            <p>   4.</p>
                                                    {t.content2.r4}
                                                        </span>
                                                    </td>
                                                    <td className="    px-4 py-2 text-left">
                                                        <p>
                                                            {t.content2.p29}
                                                        </p>
                                                        <p>
                                                            <i  dangerouslySetInnerHTML={{ __html: t.content2.p28 }}/>
                                                        </p>

                                                    </td>
                                                    <td className="   px-4 py-2 text-left">
                                                        {t.content2.p22}
                                                    </td>
                                                    <td className="   px-4 py-2 text-left" dangerouslySetInnerHTML={{ __html: t.content2.p23 }}/>


                                                </tr>

                                                <tr className=" bg-[#d8c6ad] text-justify ">

                                                    <td className="   px-4 py-2 text-center ">
                                                        <span className="font-bold text-center text-[#4A62AA]">
                                                            <p>   5.</p>
                                                       {t.content2.r5}
                                                        </span>
                                                    </td>

                                                    <td className="   px-4 py-2 text-left">
                                                        <p dangerouslySetInnerHTML={{ __html: t.content2.p24 }}/>
                                                    </td>
                                                    <td className="   px-4 py-2 text-left">
                                                        <p>
                                           
{t.content2.p25}
                                                        </p>

                                                    </td>
                                                    <td className="   px-4 py-2 text-left">
                                                        <p>{t.content2.p26}

                                                        </p>

                                                        <p>
                                                            <i>
                                                              {t.content2.p27}</i></p>               </td>

                                                </tr>




                                                    </tbody>
                                                </table>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>


                    <div className="mt-2 space-y-4">
                        <div>

                            <div className="flex flex-col sm:flex-row gap-1">
                                <button
                                    className="w-full py-2 px-4 text-center bg-[#4c75f0] text-white flex items-center justify-between"
                                    onClick={() => handleToggle(7)}
                                >
                                    <span className="flex-grow text-start">   {t.topic3} </span>
                                    <span className="sm:ml-6  text-2xl    ">{open === 7 ? "▲" : "▼"}</span>
                                </button>


                            </div>

                            {open === 7 && (
                                <div className="bg-white/60 text-justify ">
                                    <div className="bg-white w-full">

                                        <div className="space-y-4 p-4 text-black">

                                          <p>
                                            <b>{t.skills.intro}</b>
                                        </p>

                                        {t.skills.points.map((point, index) => (
                                            <p key={index}>
                                                <span className="text-[#4A62AA] ml-10">■ </span>
                                                {point.prefix} <b className="text-[#4A62AA]">{point.highlight}</b> {point.suffix}
                                                {point.highlight2 && (
                                                    <> <b className="text-[#4A62AA]">{point.highlight2}</b> {point.suffix2}</>
                                                )}
                                            </p>
                                        ))}

                                        <p dangerouslySetInnerHTML={{ __html: t.skills.conclusion }} />


                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>
                    <div className="mt-2 space-y-4">
                        <div>

                            <div className="flex flex-col sm:flex-row gap-1">
                                <button
                                    className="w-full sm:w-4/12 py-2 px-4  bg-[#4c75f0] text-white flex justify-between items-center sm:justify-center"
                                    onClick={() => handleToggle(8)}
                                >
                                    <span className="text-start">  {t.topic4}  </span>
                                    <span className="sm:ml-6  text-2xl    ">{open === 8 ? "▲" : "▼"}</span>
                                </button>


                            </div>

                            {open === 8 && (
                                <div className="bg-white/60 text-justify ">
                                    <div className="w-full  text-black space-y-2">
                                        {t.tips.map((tip, index) => (
                                            <p
                                                key={index}
                                                className={`${tip.bgColor} p-3`}
                                            >
                                                <span className="text-[#4A62AA] ml-10">■ </span>
                                                <span dangerouslySetInnerHTML={{ __html: tip.text }} />
                                            </p>
                                        ))}
                                       

                                    </div>
                                </div>

                            )}
                        </div>

                    </div>
                    <div className="mt-2 space-y-4">
                        <div>

                            <div className="flex flex-col sm:flex-row gap-1">
                                <button
                                    className="w-full sm:w-4/12 py-2 px-4  bg-[#4c75f0] text-white flex justify-between items-center sm:justify-center"
                                    onClick={() => handleToggle(18)}
                                >
                                    <span className="text-start"> {t.topic5}           </span>
                                    <span className="sm:ml-6  text-2xl    ">{open === 18 ? "▲" : "▼"}</span>
                                </button>


                            </div>

                            {open === 18 && (
                                <div className="bg-white/60 text-justify ">
                                    <div className="w-full  text-black space-y-2">
                                        {t.scam.map((tip, index) => (
                                                    <p
                                                        key={index}
                                                        className={`${tip.bgColor} p-3`}
                                                    >
                                                        <span className="text-[#4A62AA] ml-10">■ </span>
                                                        <span dangerouslySetInnerHTML={{ __html: tip.text }} />
                                                    </p>
                                                ))}

                                    </div>
                                </div>

                            )}
                        </div>

                    </div>


















                    <div className="mt-2 space-y-4">
                        <div>

                            <div className="flex flex-col sm:flex-row gap-1">
                                <button
                                    className="w-full sm:w-4/12 py-2 px-4  bg-[#4c75f0] text-white flex justify-between items-center sm:justify-center"
                                    onClick={() => handleToggle(9)}
                                >
                                    <span> {t.topic6}</span>
                                    <span className="sm:ml-6  text-2xl    ">{open === 9 ? "▲" : "▼"}</span>
                                </button>


                            </div>

                            {open === 9 && (
                                <div className="bg-white text-justify p-4">
                                    <div className="w-full text-black">
                                        <div className="space-y-4">
                                            <p>
                                                <span className="text-[#4A62AA]">■ </span>   Faustine Kede Ndouna, Roger Tsafack Nanfosso et Jean Aristide Biloa Essimi. (2018),<span className="text-[#4c75f0]">  Les déterminants du choix de l’emploi informel dans un marché du travail segmenté dans les pays en développement : cas du Cameroun.</span>
                                            </p>

                                            <p>
                                                <span className="text-[#4A62AA]">■ </span>   Jean-Marie Tchakoua, <span className="text-[#4c75f0]">  Guide du travailleur au Cameroun</span>, BIT à Yaoundé, 2ème édition 2013.
                                            </p>
                                            <p>
                                                <span className="text-[#4A62AA]">■ </span>   Léon Noah Manga,<span className="text-[#4c75f0]">  Pratiques des relations du travail au Cameroun par l’exemple et les chiffres,</span> L’Harmattan, 2010.
                                            </p>
                                            <p>
                                                <span className="text-[#4A62AA]">■ </span>   Deon Filmer et Louise Fox, <span className="text-[#4c75f0]"> L’emploi des jeunes en Afrique Subsaharienne</span>, Publication conjointe AFD et Banque mondiale, 2014.
                                            </p>
                                            <p>
                                                <span className="text-[#4A62AA]">■ </span>  Romain Delès, <span className="text-[#4c75f0]">  Quand on a « que » le diplôme. Les Jeunes diplômés et l’insertion professionnelle</span>, Éditions Pluf, 2018.
                                            </p>
                                            <p>
                                                <span className="text-[#4A62AA]">■ </span>  Michel Huteau, Jean Guichard,  <span className="text-[#4c75f0]">   Orientation et insertion professionnelle</span>, Éditions Dunod, 2022.
                                            </p>
                                            <p>
                                                <span className="text-[#4A62AA]">■ </span> Rapport Principal des résultats du   <span className="text-[#4c75f0]"> Recensement Général des Entreprises (RGE-2)</span> au Cameroun, INS (2018).
                                            </p>
                                        </div>






                                    </div>
                                </div>
                            )}
                        </div>

                    </div>
                    <div className="mt-2">
                        <div>

                            <div className="flex flex-col sm:flex-row gap-1">
                                <button
                                    className="w-full sm:w-4/12 py-2 px-4  bg-[#4c75f0] text-white flex justify-between items-center sm:justify-center"
                                    onClick={() => handleToggle(10)}
                                >
                                    <span className="flex-grow text-start"> {t.intro}</span>
                                    <span className="text-2xl    ">{open === 10 ? "▲" : "▼"}</span>
                                </button>


                            </div>

                            {open === 10 && (
                                <div className="bg-white text-justify p-4">
                                    <div className="w-full ">
                                        <div className="space-y-4 text-black">

                                             {t.liens.map((tip, index) => (
                                            <p
                                                key={index}

                                            >
                                                <span className="text-[#4A62AA]">■ </span>
                                                <span dangerouslySetInnerHTML={{ __html: tip.text }} />
                                                <br />
                                                <a href={tip.link} className="text-blue-600" target="_blank" rel="noopener noreferrer"> <i>{tip.link} </i></a>
                                            </p>
                                        ))}

                                        </div>





                                    </div>
                                </div>
                            )}
                        </div>

                    </div>

                </div>
                <div className="flex  mt-24 bg-white items-center justify-center  ">
                    {brand.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center "
                        >
                            <div className="flex  items-center   justify-center  ">


                                <a href={item.path}>

                                    <img
                                        src={item.path}
                                        alt={item.name}
                                        width={200}
                                        height={150}
                                        className="flex  my-10 justify-center  "
                                    /> </a>
                            </div></div>
                    ))}
                </div>
            </div>
            <footer className="w-full bg-blue-900    text-white text-center">
                <FooterMobile />
            </footer>
        </div>

    );
}