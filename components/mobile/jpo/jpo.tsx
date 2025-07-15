"use client";

import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Navbar from "../navbar/navbar";
import Image from "next/image";
import FormJPOMobile from "./calendar";
import FooterMobile from "../footer/footerEnd";
import UseJPOService from "@/service/service_jpo";






export default function JPOMobile() {
     
     const {
      errorMessage,
      opendays,
      loading,
      setOpendays,
      setErrorMessage,
    open,
     
     } = UseJPOService()
     
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
                /> <div className={`${isMobileMenuOpen ? "blur-sm " : ""
                    }`}>
                    <div className="flex flex-row">

                        <div
                            className={` text-white text-xl text-center uppercase font-extrabold w-full p-2 cursor-pointer`}
                           
                        >
                            Journées Portes Ouvertes
                        </div>


                       
                    </div>


                    <div className="bg-white/70 mt-8 border-1 p-2  border-[#4A62AA]">

                        <p className="text-[#4A62AA] font-bold text-xl">
                            Vous êtes un (futur) bachelier, une étudiante ou un parent ?
                        </p>

           
                            <p className="mt-2 text-black">
                                Les Journées Portes Ouvertes (JPO) constituent un excellent moyen
                                d’aller à la découverte d’une institution et de ses infrastructures
                                et, le cas échéant, de rencontrer et échanger avec les équipes
                                pédagogiques ou avec des étudiants inscrits. Elles vous permettront
                                assurément de mieux apprécier si l’institution est faite pour vous
                                ou correspond à vos attentes.
                            </p>
                      
                    </div>      </div>
                <div className="">

                    <div className="flex my-10 items-center justify-center ">
                        <FormJPOMobile />
                    </div>



                </div>



                <div className="   ">
                    {opendays.map((item, index) => (
                        <div className="flex flex-col gap-8 bg-[#f0efef] p-4 my-4 border-4 border-x-0 border-[#A87A38]">
                            <div >  <img
                                src={item.logo}
                                alt={item.schoolName}
                                className="w-54 h-52  border-2 border-white shadow-md cursor-pointer"
                            /></div>

                            <div className="max-w-4xl text-black">
                                <p>      <h3 className="text-[#4A62AA] font-bold">{item.schoolName} </h3>
                                    <div className=" flex flex-row gap-4">
                                        <Image src="/icons/timer.svg" alt="icon" width={20} height={20} />
                                        <p className="text-black ">  {item.day} - {item.month} - {item.year} | {item.beginTime}- {item.endTime} | JPO</p>
                                    </div>
                                    <p className="mt-4 ml-9">  <b> Au programme :
                                    </b>  {item.text}  </p>
                                    <div className=" mt-2 flex flex-row gap-4">
                                        <Image src="/icons/location.svg" alt="icon" width={20} height={20} />
                                        <p>{item.city},  {item.address} </p>
                                    </div>
                                    <div className=" flex flex-row gap-4">
                                        <Image src="/icons/icons8-web-50.png" alt="icon" width={20} height={20} />
                                        <a href={item.url} className="text-[#4A62AA]">{item.url} </a>
                                    </div>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
                  <footer className="w-full bg-blue-900     text-white text-center">
                                                        <FooterMobile />
                                                      </footer>
        </div>


    );
}