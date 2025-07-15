"use client";

import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link"
import Navbar from "../navbar/navbar";
import { useState } from "react";
import FooterMobile from "../footer/footerEnd";


export default function VisibiliteMobile() {

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
                        <p>           PROMOUVOIR SA STRUCTURE </p>
                    </div>


                    <div className=" bg-white/70 pt-2 mt-8">
                        <div className="   border-1 p-3  text-start border-[#4A62AA]" >
                            <p className="text-[#4A62AA] font-bold text-justify text-lg">Soignez votre image employeur auprès des étudiants, des diplômés et des institutions</p>
                        </div>
                        <p className="mt-4 text-black p-3  bg-white " >
                            Tout en assurant une présence numérique accrue à votre structure, <b>
                                nos différents partenariats vous permettront en outre de : </b></p>

                        <div className=" border-4  border-x-0   text-white  border-[#A87A38] " >
                            <div className="grid grid-col-1 mx-3 lg:flex-row flex-grow justify-center gap-1 my-1">
                                <div className="bg-[#4A62AA] rounded-lg  p-6  text-center ">

                                    <p>   <b>
                                        Valoriser
                                        votre image </b> de marque en étant partie prenante à une initiative qui contribue à la réalisation des ODD 4 et 10 de l'ONU </p>
                                </div>
                                <div className="bg-[#093970]  rounded-lg text-center  items-stretch   p-6">

                                    <p>   <b> Faire connaître </b>  vos
                                        produits et services à la
                                        cible « Jeunes »</p>
                                </div>
                                <div className="bg-[#A87A38]  rounded-lg text-center  p-6 ">

                                    <p>   <b>
                                        Obtenir</b>   des CV de diplômés talentueux et motivés  triés sur le volet</p>
                                </div>
                                <div className="bg-[#6e6962]  rounded-lg  text-center p-6 ">

                                    <p>   <b> Communiquer </b>  sur vos
                                        évènements et
                                        programmes</p>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="  bg-white/70  text-center mt-3 border-1 p-3  border-[#4A62AA]" >
                        <p className="text-[#4A62AA] font-bold justify-center text-lg">Communiquez sur une cause ou une thématique qui vous tient à cœur</p>
                    </div>
                    <div className="  bg-white  p-3">
                        <p className=" mt-2  text-black ">Vous êtes une entreprise ou une organisation qui s’implique à travers des projets spécifiques pour une cause ou thématique portant sur l’éducation,
                            l’emploi et la santé des jeunes ? Vous êtes au bon endroit pour le faire savoir : parlez-en à nos milliers d’abonnés sur notre plateforme.
                        </p> </div>
                    <p className=" p-3  bg-white  text-black ">
                        <span className="font-extrabold"><Link href="/misc/nous_contacter" className="  hover:text-xl">     Contactez-nous </Link>
                        </span> pour en savoir davantage.</p>


                </div>

            </div>
            <footer className="w-full bg-blue-900   mt-24 text-white text-center">
                <FooterMobile />
            </footer>
        </div>

    );
}