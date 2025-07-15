"use client";
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import BandeauMobile from "../footer/footer";
import Navbar from "../navbar/navbar";
import FooterMobile from "../footer/footerEnd";
import UseRegistrationService from "@/service/service_registration";

export default function MRegister() {
  const router = useRouter();
      const {
     
     errorMessage,
    handleChange,
    successMessage,
    confirmPassword,
    setErrorMessage,
    setElements,
   setConfirmPassword ,
    setSuccessMessage,
   handleConfirmPasswordChange ,
   handleSubmit ,
  
  elements,
  
  open,
  
  
    } = UseRegistrationService()

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
            <p>S'inscrire</p>
          </div>



          <div className=" p-6">
            {successMessage && (
              <div className="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
                {successMessage}
              </div>
            )}
            {errorMessage && (
              <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                {errorMessage}
              </div>
            )}
            <form onSubmit={handleSubmit} className="text-[#1f386d] space-y-4 mt-4">
              <input
                type="text"


                placeholder="Username"
                className="w-full p-3 placeholder-[#1f386d] bg-white/80"
                required
              />
              <input
                type="email"
                name="email"
                value={elements.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full p-3 placeholder-[#1f386d] bg-white/80"
                required
              />
              <input
                type="password"
                name="password"
                value={elements.password}
                onChange={handleChange}
                placeholder="Mot de passe"
                className="w-full p-3 placeholder-[#1f386d] bg-white/80"
                required
              />
              <input
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                placeholder="Confirmer le mot de passe"
                className="w-full p-3 placeholder-[#1f386d] bg-white/80"
                required
              />

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-white text-[#1f386d] px-4 py-2 font-bold hover:bg-blue-700 hover:text-white transition rounded"
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
