"use client";


import UseDepotCVService from "@/service/service_DeposCV";
import { useRouter } from "next/router";
import fr from '@/i18/fr/student/depotCV.json';
import en from '@/i18/en/student/depotCV.json';

export default function DeposerMonCV() {

  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : fr;

  const {

    errorMessage,
    handleChange,
    successMessage,
    setSelectedSectors,
    selectedSectors,
    setErrorMessage,
    setElements,
    handleCheckboxChange,
    updateElement,
    setSuccessMessage,
    showError,
    setShowError,
    setTermsAccepted,
    termsAccepted,
    elements,
    setSectors,
    handleSubmit,

    foas,
    handleToggle,
    open,

  } = UseDepotCVService()


  return (
    <div className="flex flex-wrap pl-10 pt-8">
      <div className="flex-grow md:w-2/3  text-black  p-8">
        <div className="  bg-[#A87A38]  p-3 text-center font-bold uppercase text-2xl text-white ">    {t.cv.title}</div>

        <div

          className="bg-white/70   mt-2  p-2 px-6 shadow-sm mb-2 cursor-pointer hover:shadow-md transition-shadow"
        >
          <p className="font-bold text-[#4A62AA]">{t.cv.infoTitle}</p>
          <p>{t.cv.infoText}</p>


        </div>
        <div className="flex flex-row mt-4 gap-1">
          <div className="flex-4 bg-white/70 text-center font-bold text-[#4A62AA] py-8 px-4">
            {t.cv.altTitle1}<br /> {t.cv.altTitle2}</div>
          <div className="flex-1 bg-white/70 pl-24 h-28 mt-2 mb-2  text-black p-6 ">
            <p>{t.cv.option1}<span className="text-[#4A62AA] font-semibold">cv@laurata.com</span> {t.cv.option11}<br /> </p>
            <p className=" mt-4">{t.cv.option2}</p>

          </div>

        </div>
        <div className="flex flex-row  gap-1">
          <div className="flex-4 w-[14%]  sm:hidden md:block">

          </div>
          <div className="flex-1 text-center">
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
            <form className="mt-6 space-y-1 w-10/12" onSubmit={handleSubmit}>

              <input type="text" name="firstname" value={elements.firstname}
                onChange={handleChange} placeholder={t.cv.input.firstname} className="w-full border placeholder:text-[#4A62AA] bg-white/70  border-gray-300 p-2 px-8 focus:ring-2 focus:ring-[#4A62AA]" required />
              <input type="text" name="lastname" value={elements.lastname}
                onChange={handleChange} placeholder={t.cv.input.lastname} className="w-full border placeholder:text-[#4A62AA] bg-white/70  border-gray-300 p-2 px-8  focus:ring-2 focus:ring-[#4A62AA]" required />
              <input type="email" value={elements.email}
                onChange={handleChange} placeholder={t.cv.input.email} name="email" className="w-full border placeholder:text-[#4A62AA] bg-white/70  border-gray-300 p-2 px-8  focus:ring-2 focus:ring-[#4A62AA]" required />
              <input type="tel" value={elements.phone}
                onChange={handleChange} placeholder={t.cv.input.phone} name="phone" className="w-full border placeholder:text-[#4A62AA] bg-white/70  border-gray-300 p-2 px-8   focus:ring-2 focus:ring-[#4A62AA]" required />



              <div className="relative w-full border placeholder:text-[#4A62AA] text-[#4A62AA] bg-white/70  border-gray-300 p-2 px-8   focus:ring-2 focus:ring-[#4A62AA]">
                <div
                  className="w-full flex justify-between items-center cursor-pointer"
                  onClick={() => handleToggle(1)}
                >      {selectedSectors.length
                  ? foas.filter(f => selectedSectors.includes(f.key)).map(f => f.text).join(', ')
                  : t.cv.input.sector
                  }
                  <span></span>
                  <span className="text-xl">{open === 1 ? "▲" : "▼"}</span>
                </div>
                {open === 1 && (
                  <div className=" text-start mt-2 text-black     z-10">
                    <div className="grid grid-cols-4 gap-4">
                      {foas.map((foa, index) => (
                        <label key={foa.key} className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            value={foa.key}
                            checked={selectedSectors.includes(foa.key)}
                            onChange={() => handleCheckboxChange('sector', foa.key)}
                            className="accent-blue-500"
                          />
                          {foa.text}
                        </label>
                      ))}

                    </div>
                  </div>
                )}

              </div>
              <input type="text" value={elements.job}
                onChange={handleChange} name="job" placeholder={t.cv.input.job} className="w-full placeholder:text-[#4A62AA]  px-8 border bg-white/70  border-gray-300 p-2  focus:ring-2 focus:ring-[#4A62AA]" />


              <div className="p-3 w-4/12 bg-gray-100 border rounded-2xl border-gray-300">
                <label className="   text-[#344474]">
                  <span className="font-bold text-[#4A62AA]">  {t.cv.input.upload} <br /></span> <span className="text-sm"> {t.cv.input.uploadNote}</span>
                </label>
                <input type="file" name="cv"
                  accept=".doc,.docx,.pdf"
                  onChange={handleChange} className="mt-2 w-full border border-gray-300 p-2 " />
              </div>


              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="terms"
                  name="termsAccepted"
                  checked={termsAccepted}
                  onChange={(e) => {
                    setTermsAccepted(e.target.checked);
                    if (showError) setShowError(false);
                  }}
                  className="w-4 h-4 text-[#4A62AA] border-gray-300 rounded focus:ring-[#4A62AA]"
                />
                <label htmlFor="terms" className="ml-2 bg-white/30 px-2 text-[#4A62AA]">
                  {t.cv.terms}
                </label>
              </div>
              {showError && (
                <p className="mt-1 text-red-500 text-sm">{t.cv.termsError}</p>
              )}


              <div className="flex justify-center mt-4">
                <div className="flex w-1/2 pt-8 justify-center items-center gap-4">
                  <button type="submit" className="px-12  bg-[#A87A38]  text-white font-bold py-2 rounded-lg hover:bg-[#C08B2F]">
                    {t.cv.submit}
                  </button>
                  <button onClick={() => router.back()} type="reset" className="px-12 bg-[#4A62AA] text-white  font-bold py-2 rounded-lg hover:bg-gray-400">
                    {t.cv.back}
                  </button>
                </div>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}