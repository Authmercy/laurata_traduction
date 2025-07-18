"use client";
import { useState } from "react";
import en from '@/i18/en/auth/login.json';
import fr from '@/i18/fr/auth/login.json';
import BandeauMobile from "../footer/footer";
import Navbar from "../navbar/navbar";
import FooterMobile from "../footer/footerEnd";
import { useRouter } from "next/router";

export default function MLogin() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileMenuOpen2, setIsMobileMenuOpen2] = useState(false);
 const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : fr;
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
            <p> {t.title}</p>
          </div>



          <div className="absolute p-6">

            <form className=" space-y-4">
              <input
                type="text"
              placeholder={t.username}
                className="w-full p-3   placeholder-[#1f386d]   bg-white/80  " required
              />
              <input
                type="password"
              placeholder={t.password}
                className="w-full p-3   placeholder-[#1f386d]   bg-white/80  " required
              />
               <p className="text-white">
                    {t.noAccount} <a href="/authentification/signup" >{t.signUp}</a>
                  </p>
              <div className="flex ">
                <button   
                  className="   bg-white   text-[#1f386d]  px-1 py-2  hover:bg-blue-700 transition"
                >

                {t.forgotPassword}
                </button>

                <button
                  type="submit"
                  className="  bg-white ml-[4.5rem]    text-[#1f386d] px-3 py-2 font-bold hover:bg-blue-700 transition"
                >
              {t.loginButton}
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
