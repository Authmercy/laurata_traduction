import UseRegistrationService from "@/service/service_registration";
import { URLS } from "@/service/url";
import { useState } from "react";
import en from '@/i18/en/auth/register.json';
import fr from '@/i18/fr/auth/register.json';
import { useRouter } from "next/router";


export default function SignInComponent() {
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




  } = UseRegistrationService()

 const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : fr;

return (
  <div className="p-2 md:pl-8 text-black">
    <div className="flex pl-6 gap-1 w-full">
      <div className="flex justify-center flex-col">
        <div className="flex flex-wrap pl-10 pt-6">
          <div className="flex-grow w-[1000px] text-black p-8">
            <div className="bg-[#A87A38] p-3 text-center text-white">
              <p className="text-2xl font-bold uppercase">{t.title}</p>
              <p className="text-lg">{t.subtitle}</p>
            </div>

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

            <div className="mt-2 gap-1">
              <div className="bg-white w-full text-black p-2 py-4 text-end flex gap-4 overflow-x-auto">
                <form onSubmit={handleSubmit} className="flex gap-4 flex-col pl-32 w-[800px] justify-center items-center">
                  <input
                    type="text"
                    name="username"
                    value={elements.username}
                    onChange={handleChange}
                    placeholder={t.username}
                    className="text-center border-2 border-[#7b92d6] placeholder-[#717172] p-2 w-[800px]"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={elements.email}
                    onChange={handleChange}
                    placeholder={t.email}
                    className="text-center border-2 border-[#7b92d6] placeholder-[#717172] p-2 w-[800px]"
                    required
                  />
                  <input
                    type="password"
                    name="password"
                    value={elements.password}
                    onChange={handleChange}
                    placeholder={t.password}
                    className="text-center border-2 border-[#7b92d6] placeholder-[#717172] p-2 w-[800px]"
                    required
                  />
                  <input
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    placeholder={t.confirmPassword}
                    className="text-center border-2 border-[#7b92d6] placeholder-[#717172] p-2 w-[800px]"
                    required
                  />
                  <p>
                    {t.alreadyHaveAccount}{" "}
                    <a href="/authentification/login" className="text-blue-800">
                      {t.login}
                    </a>
                  </p>
                  <button type="submit" className="px-6 py-2 rounded-lg bg-[#A87A38] text-white font-bold">
                    {t.submit}
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
