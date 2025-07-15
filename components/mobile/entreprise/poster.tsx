"use client";

import router, { useRouter } from "next/router";
import Image from "next/image";
import Navbar from "../navbar/navbar";
import { useState } from "react";
import FooterMobile from "../footer/footerEnd";


export default function PosterMobile() {
  const handleClick = () => {
    router.push("/entreprise/edition");
  };


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
        <div className="">
          <div className="justify-center p-2 text-center text-xl font-bold uppercase bg-[#414040] text-white">
            <p>     POSTER UN STAGE </p>
          </div>


          <div className={`${isMobileMenuOpen ? "blur-sm " : ""
            } ${isMobileMenuOpen2 ? "blur-sm " : ""
            } `}>
            <div className="grid grid-cols-1 lg:flex-row flex-grow  justify-center mt-8   ">

              



              <div className="flex px-4 my-2  bg-white flex-col lg:flex-row flex-grow justify-center border-4 border-orange-700  gap-8 border-x-0 p-4 ">

                <div className="">
                  <p className="text-[#4A62AA] text-center  font-bold text-lg"> Trois principales raisons de déposer vos offres de stage sur notre plateforme  </p>

                </div>
                <div className="   text-black  " >
                  <div className="flex flex-col  lg:flex-row justify-center gap-1 my-1">

                  </div>
                  <div className="bg-[#facd6c] p-4     offerDetails text-center rounded-md flex-1">
                    <p className=" font-bold  text-[#4A62AA]"> PUBLICATION GRATUITE</p>
                    <p className="pt-2"> de vos offres de stage ou de premiers emplois</p> </div>
                  <div className="bg-[#b1b3b9]/70 text-center      rounded-md   mt-2 p-4 flex-1">
                    <p className="text-[#4A62AA] uppercase mt-1 font-bold ">réalisation des odd 4 & 10</p>
                    <div className="flex flex-row  gap-8 justify-center">
                      <div>
                        <Image
                          src="/images/odd.png"
                          alt="ODD-odd"
                          width={150}
                          height={130}
                          className="object-contain mt-2"
                        />
                      </div>
                      <div>
                        <Image
                          src="/images/ODD-4.svg"
                          alt="ODD-4"
                          width={120}
                          height={120}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <Image
                          src="/images/ODD-10.svg"
                          alt="ODD-10"
                          width={120}
                          height={120}
                          className="object-contain"
                        />
                      </div>

                    </div>
                    <p className="pt-2">En garantissant un accès transparent et équitable à vos offres de stage en ligne </p>
                  </div>
                  <div className="bg-[#A87A38]/70 mt-2   text-white text-center p-4 rounded-md flex-1">
                    <p className=" font-bold">VISIBILITÉ MAXIMALE ET ILLIMITÉE</p>
                    <p className="pt-2">à vos offres de stage et de premiers emplois auprès de leurs cibles</p>


                  </div>


                </div>
                <div className="bg-white pb-2 " >

                  <h1 className="bg-[#4A62AA] text-white text-center  mt-2 p-2  ">
                    COMMENT FAIRE PUBLIER VOS OFFRES ?
                  </h1>
                  <p className="text-black m-2 mt-6"> <span className="text-[#4A62AA]  font-bold">1.</span> Envoyez votre annonce au format PDF à <span className="text-[#4A62AA]  font-bold"> info@laurata.com </span></p>

                  <p className="text-black m-2 "> <span className="text-[#4A62AA] font-bold">2.</span> Éditez vous-même votre annonce à l’aide du formulaire ci-dessous.</p>
                </div>
                <button onClick={handleClick} className="w-[75%]  bg-orange-500  text-white sm:w-[55%]  sm:ml-[20%] ml-[10%]  py-1   font-bold rounded-xl ">
                  ÉDITER VOTRE OFFRE
                </button>
                <div>

                </div>
              </div>     </div>
          
          </div>     
             </div>
              <footer className="w-full bg-blue-900   mt-24 text-white text-center">
                                                              <FooterMobile />
                                                            </footer>
      </div>
      
    </div>
  );
}