
import { useEffect, useState } from 'react'

import NavBarAccueil from '@/components/web/navbar/navBarAccueil'
import Footer from '@/components/web/footer/footer'
import Navbar from '@/components/mobile/navbar/navbar'
import Image from "next/image";
interface Suggestion {
  href: string
  label: string
}

export default function Error() {

  const [errorMessage, setErrorMessage] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileMenuOpen2, setIsMobileMenuOpen2] = useState(false);

  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <div className="hidden lg:flex flex-col flex-grow">
          <div
            className="relative min-h-screen bg-cover bg-center bg-no-repeat flex flex-col"
            style={{ backgroundImage: "url('/images/backgroundEtudiant.jpeg')" }}>
            <NavBarAccueil />
            <div className="mt-24 ">
              <div className="mt-2 text-center w-[80%]">

                <h1 className="text-6xl font-bold text-red-600 mb-4"></h1>
                <p className="text-2xl font-semibold mb-2">Une erreur est survenue</p>
                <p className="text-gray-600 mb-6">
                  {errorMessage || "Une erreur inconnue s'est produite."}
                </p>

              </div>
            </div>
            <div className="mt-auto">

              <Footer />
            </div>
          </div>
        </div>

        
        <div className="block lg:hidden">
          <div>
            <div className="min-h-screen h-auto  overflow-auto  w-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/backgroundmobile.jpeg')" }}>

              <Navbar
                isMobileMenuOpen={isMobileMenuOpen}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
                isMobileMenuOpen2={isMobileMenuOpen2}
                setIsMobileMenuOpen2={setIsMobileMenuOpen2}
              />
              <div className="">
                <div className="justify-center p-2 text-center text-xl font-bold uppercase bg-[#9a2525] text-white">
                  <p>        Une erreur est survenue</p>
                </div>



                <div className=" bg-white/70 pt-2 mt-2">
                  <div className=" border-1 p-6  text-center border-[#4A62AA]" >
                    {errorMessage || "Une erreur inconnue s'est produite."}
                  </div>

                </div>
                <div className="my-7 text-center flex items-center justify-center">
                  <Image src="/images/logolaurata.png" alt="social" width={130} height={10} />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
