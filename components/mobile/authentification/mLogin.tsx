"use client";
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import BandeauMobile from "../footer/footer";
import Navbar from "../navbar/navbar";
import FooterMobile from "../footer/footerEnd";

export default function MLogin() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileMenuOpen2, setIsMobileMenuOpen2] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
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
            <p>SE CONNECTER</p>
          </div>



          <div className="absolute p-6">

            <form className=" space-y-4">
              <input
                type="text"
                placeholder="Email ou Nom d'utilisateur *"
                className="w-full p-3   placeholder-[#1f386d]   bg-white/80  " required
              />
              <input
                type="password"
                placeholder="Mot de passe"
                className="w-full p-3   placeholder-[#1f386d]   bg-white/80  " required
              />
              <div className="flex ">
                <button
                  type="submit"
                  className="   bg-white   text-[#1f386d]  px-1 py-2  hover:bg-blue-700 transition"
                >

                  Mot de passe oublié ?
                </button>

                <button
                  type="submit"
                  className="  bg-white ml-[4.5rem]    text-[#1f386d] px-3 py-2 font-bold hover:bg-blue-700 transition"
                >
                  Envoyer
                </button>
              </div>
            </form>
           
          </div>
        </div>

      </div>
     
          <div className=" flex flex-row justify-center gap-4">
                <BandeauMobile />
              </div>
              <footer className="w-full bg-blue-900   mt-10 text-white text-center">
                <FooterMobile />
              </footer>
     
          

    </div>
  );

}
