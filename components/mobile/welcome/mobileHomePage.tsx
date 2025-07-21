"use client";
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import BandeauMobile from "../footer/footer";
import Navbar2 from "../navbar/navbar2";
import FooterMobile from "../footer/footerEnd";
import Navbar from "../navbar/navbar";
import en from '@/i18/fr/moreInfo.json';
import fr from '@/i18/fr/moreInfo.json';

export default function MobileHomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileMenuOpen2, setIsMobileMenuOpen2] = useState(false);
  const [clicked, setClicked] = useState(false);
  const router = useRouter();
  const handleClickInternships = () => {
    setClicked(true);
    router.push(`/students/offresStage`);

  };
    const { locale } = router;
    const t = locale === 'en' ? en : fr;




  return (
    <div>
      <div>


        <div
          className="relative min-h-screen bg-cover bg-center bg-no-repeat flex flex-col"
          style={{ backgroundImage: "url('/images/bgMobile.png')" }}
        >
          <Navbar
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
            isMobileMenuOpen2={isMobileMenuOpen2}
            setIsMobileMenuOpen2={setIsMobileMenuOpen2}
          />


          <div className={`flex flex-row  h-full ${isMobileMenuOpen ? "blur-sm " : ""
            }`} >
      


            <div className="flex flex-col mt-[40%] w-full ">
             
               <div>

             
              <p className="text-end px-4 pl-[40%]  text-3xl font-bold w-full  text-white mt-4">
               Vitrine  des <br /> offres de  <br />
               stage  au<br />  Cameroun
              </p> 
               </div>
              <div className="flex text-center items-center justify-center">
                <button
                  onClick={handleClickInternships}
                  className={`px-3 py-2 my-8 mt-20 ml-[47%]  font-bold rounded-lg border transition-transform  duration-200 
          ${clicked ? 'bg-white text-[#4A62AA] border-[#4A62AA]' : 'bg-[#34538C] text-white border-white'}
          hover:bg-white hover:text-[#4A62AA] '`}
                >
                  Offres de stage
                </button>
              </div>
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
                   {t.sections.students.title}
                </p>
              </div>


              <div className="bg-[#9b7d3c] text-white text-start    space-y-4  -mt-2 w-full py-4 px-2">
                 {t.sections.students.points.map((point, index) => (
              <p key={index}>■ {point} <br /> </p> 
            ))}
              </div>
            </div>


            <div className="flex-1 flex flex-col  items-center">

              <div className="flex flex-row gap-1">

                <Image src="/icons/entreprise2.png" alt="" width={50} height={100} />


                <p className="text-[#747272] mt-2  font-bold text-center">  {t.sections.companies.title}</p>
              </div>
              <div className="bg-[#747272] space-y-4  text-white text-start w-full py-4 px-2">
                 {t.sections.companies.points.map((point, index) => (
              <p key={index}>■ {point}</p>
            ))}
              </div>
            </div>


            <div className="flex-1 flex flex-col items-center">



              <div className="flex flex-row gap-4 items-center ">

                <Image src="/icons/institutsup2.png" alt="" width={60} height={100} />
                <p className="text-[#4A62AA]  font-bold text-center">{t.sections.institutions.title}</p>
              </div>
              <div className="bg-[#4A62AA]  space-y-4  text-white text-start w-full py-4 px-2">
                 {t.sections.institutions.points.map((point, index) => (
              <p key={index}>■ {point}</p>
            ))}
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
