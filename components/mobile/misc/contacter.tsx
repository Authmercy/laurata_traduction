"use client";
import { useState } from "react";
import Image from "next/image";
import Navbar from "../navbar/navbar";
import FooterMobile from "../footer/footerEnd";
import UseContactService from "@/service/service_Conctact";


export default function ContactComponentMobile() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileMenuOpen2, setIsMobileMenuOpen2] = useState(false);

  const {


    errorMessage,
    handleChange,
    successMessage,

    setErrorMessage,
    setElements,

    setSuccessMessage,

    handleSubmit,

    elements,



  } = UseContactService()


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
            <p>CONTACTEZ-NOUS</p>
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
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Nom et prénom"
                onChange={handleChange}
                name="fullname"
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
                type="text"
                name="phone"
                value={elements.phone}
                onChange={handleChange}
                placeholder="Téléphone (WhatsApp) "
                className="w-full p-3 placeholder-[#1f386d] bg-white/80"
                required
              />
              <input
                type="text"
                placeholder="Sujet"
                name="subject"
                value={elements.subject}
                onChange={handleChange}
                className="w-full p-3 placeholder-[#1f386d] bg-white/80"
                required
              />
              <input
                type="text"
                name="text"
                value={elements.text}
                onChange={handleChange}
                placeholder="Entrez votre message "
                className="w-full p-3 h-20 placeholder-[#1f386d] bg-white/80"
                required
              />
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-white text-[#1f386d] px-3 py-2 font-bold hover:bg-blue-700 transition"
                >
                  Envoyer
                </button>
              </div>
            </form>
          </div>
          <div className="flex text-white text-lg font-bold justify-center gap-2 sm:gap-2 w lg:gap-4 pt-4">
            <Image src="/icons/icons8-call-50.png" alt="" width={20} height={20} className="w-10 h-10" />
            <p>(+237) 679 999 829
              - 690 707 253</p>
          </div>


        </div>

      </div>

      <div className="">


        <FooterMobile></FooterMobile></div>
    </div>
  );
}