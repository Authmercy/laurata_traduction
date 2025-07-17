"use client";
import { useState } from "react";
import { useRouter } from "next/router";
import UseContactService from "@/service/service_Conctact";

import en from '@/i18/en/misc/contact.json';
import fr from '@/i18/fr/misc/contact.json';

export default function ContactComponent() {
    const router = useRouter();
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

      const { locale } = router;
      const t = locale === 'en' ? en : fr;
   return (
  <div className="p-2 text-black">
    <div className="flex gap-1 w-full">
      <div className="flex items-center justify-center">
        <div className="flex flex-wrap pt-6">
          <div className="flex-grow w-full text-black p-8">
            <div className="bg-[#A87A38] p-3 text-center text-2xl font-bold uppercase text-white">
              {t.title}
            </div>

            {successMessage && (
              <div className="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
                {t.success}
              </div>
            )}
            {errorMessage && (
              <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                {t.error}
              </div>
            )}

            <div className="mt-2 gap-1">
              <div className="bg-white w-full text-black p-2 py-4 text-end flex gap-4 overflow-x-auto">
                <form
                  onSubmit={handleSubmit}
                  className="flex gap-4 flex-col justify-center items-center"
                >
                  <input
                    type="text"
                    name="fullname"
                    placeholder={t.form.fullname}
                    value={elements.fullname}
                    onChange={handleChange}
                    className="text-start placeholder:text-center border-2 border-[#7b92d6] placeholder-[#717172] p-2 w-[800px]"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder={t.form.email}
                    value={elements.email}
                    onChange={handleChange}
                    className="text-start border-2 placeholder:text-center border-[#7b92d6] placeholder-[#717172] p-2 w-[800px]"
                    required
                  />
                  <input
                    type="text"
                    name="phone"
                    placeholder={t.form.phone}
                    value={elements.phone}
                    onChange={handleChange}
                    className="text-start border-2 placeholder:text-center border-[#7b92d6] placeholder-[#717172] p-2 w-[800px]"
                    required
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder={t.form.subject}
                    value={elements.subject}
                    onChange={handleChange}
                    className="text-start border-2 placeholder:text-center border-[#7b92d6] placeholder-[#717172] p-2 w-[800px]"
                    required
                  />
                  <input
                    type="text"
                    name="text"
                    placeholder={t.form.message}
                    value={elements.text}
                    onChange={handleChange}
                    className="text-start border-2 placeholder:text-center border-[#7b92d6] placeholder-[#717172] p-2 w-[800px] h-20"
                    required
                  />
                  <button
                    type="submit"
                    className="px-6 py-2 rounded-lg bg-[#A87A38] text-white font-bold"
                  >
                    {t.form.submit}
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
