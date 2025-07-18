"use client";


import { useRouter } from 'next/router';
import en from '@/i18/en/auth/login.json';
import fr from '@/i18/fr/auth/login.json';
export default function LoginComponent() {

 const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : fr;

 return (
  <div className="p-2 md:pl-8 text-black">
    <div className="flex pl-6 gap-1 w-full">
      <div className="flex justify-center flex-col">
        <div className="flex flex-wrap pl-10 pt-6">
          <div className="flex-grow w-[1000px] text-black p-8">
            <div className="bg-[#A87A38] p-3 text-center text-2xl font-bold uppercase text-white">
              {t.title}
            </div>
            <div className="mt-2 gap-1">
              <div className="bg-white w-full text-black p-2 py-4 text-end flex gap-4 overflow-x-auto">
                <form action="" className="flex gap-4 flex-col pl-32 w-[800px] justify-center items-center">
                  <input
                    type="text"
                    placeholder={t.username}
                    className="text-center border-2 border-[#7b92d6] placeholder-[#717172] p-2 w-[800px]" 
                    required
                  />
                  <input
                    type="password"
                    placeholder={t.password}
                    className="text-center border-2 border-[#7b92d6] placeholder-[#717172] p-2 w-[800px]" 
                    required
                  />
                  <p>
                    {t.noAccount} <a href="/authentification/signup" className="text-blue-800">{t.signUp}</a>
                  </p>
                               <button   
                  className="   bg-white   text-[#1f386d]  px-1 py-2  hover:bg-blue-700 transition"
                >

                {t.forgotPassword}
                </button>
                  <button
                    type="submit"
                    className="px-6 py-2 rounded-lg bg-[#A87A38] text-white font-bold"
                  >
                    {t.loginButton}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}
