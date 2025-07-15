"use client";
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import BandeauMobile from "../footer/footer";
import FooterMobile from "../footer/footerEnd";
import Navbar from "../navbar/navbar";



export default function MobileHomePage1() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileMenuOpen2, setIsMobileMenuOpen2] = useState(false);
  const [clicked, setClicked] = useState(false);
  const router = useRouter();
  const handleClickInternships = () => {
    setClicked(true);
    router.push(`/students/offresStage`);

  };





  return (
    <div>
      <div>


        <div
          className=" min-h-screen bg-cover bg-center bg-no-repeat flex flex-col"
          style={{ backgroundImage: "url('/images/bgMobile.png')" }}
        >
            <Navbar
                             isMobileMenuOpen={isMobileMenuOpen}
                             setIsMobileMenuOpen={setIsMobileMenuOpen}
                             isMobileMenuOpen2={isMobileMenuOpen2}
                             setIsMobileMenuOpen2={setIsMobileMenuOpen2}
                         />

          <div className={`flex flex-col  h-full ${isMobileMenuOpen ? "blur-sm " : ""
            }`} >
      
 <div className="flex w-full ">
           
               

             
              <p className="text-end px-4  text-2xl font-bold w-full  text-white mt-4">
               Vitrine  des <br /> offres de stages  <br /> au Cameroun
              </p> 
                
             
            </div>

           
 <div className="flex text-center items-center justify-center">
                <button
                  onClick={handleClickInternships}
                  className={`px-3 py-2 my-8 mt-24 ml-[47%]  font-bold rounded-lg border transition-transform  duration-200 
          ${clicked ? 'bg-white text-[#4A62AA] border-[#4A62AA]' : 'bg-[#445ca3] text-white border-white'}
          hover:bg-white hover:text-[#4A62AA] '`}
                >
                  Offres de stage
                </button>
              </div>
          </div>















        </div>
        <div className="  w-full flex justify-center">
          <BandeauMobile></BandeauMobile>


        </div>







        <div className="mt-16 flex text-justify flex-col items-center justify-center">

          <div className="flex flex-col  w-full max-w-[1200px] gap-4  space-y-6 px-10 justify-center items-stretch">

            <div className="flex-1  flex flex-col items-center">

              <div className="flex flex-row  items-center -ml-16 ">

                <Image src="/icons/etudiantIcon2.png" alt="" width={110} height={60} />


                <p className="text-[#A38340] font-bold text-center">
                  Étudiants & Diplômés
                </p>
              </div>


              <div className="bg-[#9b7d3c] text-white text-start -mt-2 w-full py-4 px-2">
                <p> <span className=""> ■
                </span> Consultez la liste centralisée et vérifiée des offres de stage et optimisez votre temps de recherche.</p>
                <br />
         <p className=""> ■
                                Astuces et conseils pratiques pour trouver et réussir son stage ou son premier emploi.</p>

                             <br />
                <p>
                  ■ Guides d’orientation et de préparation à l’insertion professionnelle.
                </p>
              </div>
            </div>


            <div className="flex-1 flex flex-col  items-center">

              <div className="flex flex-row gap-1">

                <Image src="/icons/entreprise2.png" alt="" width={50} height={100} />


                <p className="text-[#747272] mt-2  font-bold text-center">Entreprises & Organisations</p>
              </div>
              <div className="bg-[#747272] text-white text-start w-full py-4 px-2">
                <p className="pt-2">  ■ Déposez gratuitement vos offres de stage et d’emploi pour en décupler la visibilité ; Obtenez des CV de diplômés talentueux.</p>
                <br />
                <p > ■ Renforcez la présence numérique de vos produits, services, bourses, etc. ;  </p>
                <br />
                <p>
                  ■ Communiquez sur votre secteur d’activité, vos métiers, vos faits majeurs.
                </p>
              </div>
            </div>


            <div className="flex-1 flex flex-col items-center">



              <div className="flex flex-row gap-4 items-center ">

                <Image src="/icons/institutsup2.png" alt="" width={60} height={100} />
                <p className="text-[#4A62AA]  font-bold text-center">Institutions du Supérieur</p>
              </div>
              <div className="bg-[#4A62AA] text-white text-start w-full py-4 px-2">
                <p className="pt-2">■  Obtenez des opportunités de stages et premiers emplois à vos étudiants et diplômés.</p>
                <br />
                <p className=""> ■ Renforcez la présence numérique de vos formations et de votre institution.</p>
                <br />
                <p>
                  ■  Envoi ciblé de votre offre de formations à nos abonnés élèves, étudiants et parents.
                </p>
              </div>
            </div>
          </div>


          <div className="w-full bg-blue-900   py-4 text-white text-center mt-10">
            <FooterMobile></FooterMobile>
          </div>



        </div>
      </div>

    </div>
  );
}
