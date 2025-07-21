"use client";

import React, { useEffect, useState } from 'react';

import Navbar from "../../navbar/navbar";
import { Brand } from "@/service/Brand";
import FooterMobile from "../../footer/footerEnd";
import ServiceInternshipFilter from "@/service/service_Internship";

import en from '../../../../i18/en/student/internship.json';
import fr from '../../../../i18/fr/student/internship.json';
import { useRouter } from 'next/router';


export default function OffreStageMobile() {

  const [clicked1, setClicked1] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  const [clicked3, setClicked3] = useState(false);

  const [clicked4, setClicked4] = useState(false);
  const handleClick = () => {
    setClicked2(true);
    router.push("/students/depotCV");

  };
  const handleClick1 = () => {
    setClicked4(true);
    router.push("/students/conseil");

  };
  const handleClick2 = () => {
    setClicked3(true);
    router.push("/students/AccueilDeStage");
  };
  const handleClick3 = () => {
    setClicked1(true);
    router.push("/entreprise/edition");
  };
  const {
    errorMessage,
    setErrorMessage,
    handleToggle,
    router,
    filters,
    setFilters,
    internships,
    setInternships,
    foas,
    setSectors,
    status,
    setStatus,
    degreeLevels,
    setLevels,
    setDurations,
    durations,
    contrats,
    setContrats,
    parutions,
    setParutions,
    open,
    setOpen,
    setSelectedSectors,
    selectedSectors,
    setSelectedLevels,
    selectedLevels,
    selectedContracts,
    setSelectedContracts,
    selectedOrgTypes,
    setSelectedPublication,
    selectedPublication,
    selectedDuration,
    setSelectedDuration,
    handleCheckboxChange,
    handleRadioChange,
    handleChange,
    isSearchDisabled,
    handleSearch,
    handlePresetSelection,
    clicked, isFormEmpty
  } = ServiceInternshipFilter()


  const { locale } = router;
  const t = locale === 'en' ? en : fr;
  const [brand, setBrand] = useState<Brand[]>([]);
  useEffect(() => {
    const fetchsetBrand = async () => {
      const brand: Brand[] = [

        {
          id: 1,
          name: "S2",
          url: "",
          path: "/images/logo/s2.png"
        },

      ];
      setBrand(brand);
    };

    fetchsetBrand();
  }, []);



  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileMenuOpen2, setIsMobileMenuOpen2] = useState(false);

  return (
    <div >
      <div className="min-h-screen   bg-[#34538C]  overflow-auto  w-screen bg-cover  text-justify bg-center bg-no-repeat "  >

        <Navbar
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          isMobileMenuOpen2={isMobileMenuOpen2}
          setIsMobileMenuOpen2={setIsMobileMenuOpen2}
        />

        <main className="flex-grow">
          <div className={`${isMobileMenuOpen ? "blur-sm " : ""
            } ${isMobileMenuOpen2 ? "blur-sm " : ""
            } `}>
            <div className="justify-center p-2 text-center text-xl font-bold uppercase bg-[#9b6e0f] text-white">
              <p> {t.title}</p>
            </div>
            <form onSubmit={handleSearch}>


              <div className="flex flex-col gap-2 mt-8 mx-10  ">

                <button
                  type="button"
                  className="flex items-center  border-b pb-1"
                >
                  <input
                    type="checkbox"
                    name="stage"
                    onClick={() => handlePresetSelection("stage")}


                    className="w-8 h-5 accent-[#0842f0] rounded-md border-2"
                  />
                  <p className="text-white ml-2 font-bold"> {t.searchForm.internship}</p>
                </button>
                <button
                  type="button"
                  className="flex items-center border-b pb-1"
                  onClick={() => handlePresetSelection("emploi")}
                >
                  <input
                    type="checkbox"
                    name="firstJob"



                    className="w-8 h-5 accent-[#0842f0] rounded-md border-2"
                  />
                  <p className="text-white text-start  ml-2 font-bold"> {t.searchForm.firstJob} </p>
                </button>

              </div>

              <div className="grid grid-cols sm:flex  sm:flex-col text-[#4A62AA] md:grid-cols-8 gap-1 p-6 pb-2">
                <input
                  type="text"
                  name="keywords"
                  placeholder={t.searchForm.keyword}
                  value={filters.keywords}
                  onChange={handleChange}
                  className="bg-white/70  placeholder-[#4A62AA] required  p-2 px-6 "
                />


                <div
                  className="bg-white/70 flex justify-between placeholder-[#4A62AA] required p-2 px-6 "
                  onClick={() => handleToggle(1)}
                >
                  <span className="truncate text-sm max-w-[250px]" title={selectedSectors.map(k => foas.find(f => f.key === k)?.text).join(', ')}>
                    {selectedSectors.length
                      ? foas.filter(f => selectedSectors.includes(f.key)).map(f => f.text).join(', ')
                      :  t.searchForm.sector}
                  </span>
                  <span className="text-xl">{open === 1 ? "▲" : "▼"}</span>
                </div>

                {open === 1 && (
                  <div className=" top-full mt-1 left-0  text-black bg-[#d6cec5] p-4  shadow ">
                    <div className="grid grid-cols-2 gap-4">
                      {foas.map((foa, index) => (
                        <label key={foa.key} className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            value={foa.key}
                            checked={selectedSectors.includes(foa.key)}
                            onChange={() => handleCheckboxChange('foa', foa.key)}
                            className="accent-blue-500"
                          />
                          {foa.text}
                        </label>
                      ))}

                    </div>
                  </div>
                )}

                <div
                  className="bg-white/70 flex justify-between placeholder-[#4A62AA] required p-2 px-6 "
                  onClick={() => handleToggle(2)}
                >
                  <span className="truncate  text-sm max-w-[250px]" title={selectedLevels.map(k => degreeLevels.find(d => d.key === k)?.text).join(', ')}>
                    {selectedLevels.length
                      ? degreeLevels.filter(d => selectedLevels.includes(d.key)).map(d => d.text).join(', ')
                      : t.searchForm.level}</span>
                  <span className="text-xl">{open === 2 ? "▲" : "▼"}</span>
                </div>
                {open === 2 && (
                  <div className=" top-full mt-1 left-0  text-black bg-[#d6cec5] p-4  shadow ">
                    <div className="grid grid-cols-2 gap-4">
                      {degreeLevels.map((level, index) => (
                        <label key={level.key} className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            value={level.key}
                            checked={selectedLevels.includes(level.key)}
                            onChange={() => handleCheckboxChange('degreeLevels', level.key)}
                          />
                          {level.text}
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                <div
                  className="bg-white/70 flex justify-between placeholder-[#4A62AA] required p-2 px-6 "
                  onClick={() => handleToggle(3)}
                >
                  <span className="truncate ">
                    {selectedDuration
                      ? durations.find(d => d.key === selectedDuration)?.text
                      : t.searchForm.duration}
                  </span>
                  <span className="text-xl">{open === 3 ? "▲" : "▼"}</span>
                </div>
                {open === 3 && (
                  <div className=" top-full mt-1 left-0  text-black bg-[#d6cec5] p-4  shadow ">
                    <div className="grid grid-cols-2 gap-4">

                      {durations.map((duration, index) => (
                        <label key={duration.key} className="flex items-center gap-2">
                          <input
                            type="radio"
                            checked={selectedDuration === duration.key}
                            onChange={() => handleRadioChange('enumDuration', duration.key)}
                            className="accent-blue-500"
                          />
                          {duration.text}
                        </label>
                      ))}
                    </div>
                  </div>
                )}
                <div
                  className="bg-white/70 flex justify-between placeholder-[#4A62AA] required p-2 px-6 "
                  onClick={() => handleToggle(4)}
                >
                  <span className="truncate text-sm max-w-[250px]" title={selectedOrgTypes.map(k => status.find(s => s.key === k)?.text).join(', ')}>
                    {selectedOrgTypes.length
                      ? status.filter(s => selectedOrgTypes.includes(s.key)).map(s => s.text).join(', ')
                      : t.searchForm.employer}
                  </span>
                  <span className="text-xl">{open === 4 ? "▲" : "▼"}</span>
                </div>
                {open === 4 && (
                  <div className="  mt-1 left-0  text-black bg-[#d6cec5] p-4  shadow ">
                    <div className="grid grid-cols-2 gap-4">
                      {status.map((s, index) => (
                        <label key={s.key} className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            value={s.key}
                            checked={selectedOrgTypes.includes(s.key)}
                            onChange={() => handleCheckboxChange('orgTypes', s.key)}
                            className="accent-blue-500"
                          />
                          {s.text}
                        </label>
                      ))}
                    </div>
                  </div>
                )}


                <div
                  className="bg-white/70 flex justify-between placeholder-[#4A62AA] required p-2 px-6 "
                  onClick={() => handleToggle(5)}
                >   <span className="truncate text-sm max-w-[250px] " title={
                  selectedContracts
                    .map(k => contrats.find(c => c.key === k)?.text || k)
                    .join(', ')
                }
                >
                    {selectedContracts.length
                      ? contrats
                        .flatMap(c => (c.items ? c.items : [c]))
                        .filter(c => selectedContracts.includes(c.key))
                        .map(c => c.text)
                        .join(', ')
                      :  t.searchForm.contract}

                  </span>
                  <span className="text-xl">{open === 5 ? "▲" : "▼"}</span>
                </div>
                {open === 5 && (
                  <div className=" top-full mt-1 left-0  text-black bg-[#d6cec5] p-4  shadow ">
                    <div className="grid grid-cols-1 gap-4">
                      {contrats.map((c) => (
                        <div key={c.key}>

                          <label className="flex items-center gap-2">
                            {c.items ? (
                              <>
                                <input
                                  type="checkbox"
                                  checked={
                                    c.items.every(item => selectedContracts.includes(item.key))
                                  }
                                  onChange={() => {
                                    const allKeys = c.items!.map(item => item.key);
                                    setSelectedContracts(prev =>
                                      allKeys.every(k => prev.includes(k))
                                        ? prev.filter(k => !allKeys.includes(k))
                                        : [...prev, ...allKeys.filter(k => !prev.includes(k))]
                                    );
                                  }}
                                  className="accent-blue-500"
                                />
                                {c.text}
                              </>
                            ) : (
                              <>
                                <input
                                  type="checkbox"
                                  checked={selectedContracts.includes(c.key)}
                                  onChange={() => handleCheckboxChange("adTypes", c.key)}
                                  className="accent-blue-500"
                                />
                                {c.text}
                              </>
                            )}
                          </label>


                          {c.items && (
                            <div className="ml-6 mt-1 flex flex-col gap-1">
                              {c.items.map((sub) => (
                                <label key={sub.key} className="flex items-center gap-2 ">
                                  <input
                                    type="checkbox"
                                    checked={selectedContracts.includes(sub.key)}
                                    onChange={() => handleCheckboxChange("adTypes", sub.key)}
                                    className="accent-blue-500"
                                  />
                                  {sub.text}
                                </label>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}

                    </div>
                  </div>
                )}

                <div
                  className="bg-white/70 flex justify-between placeholder-[#4A62AA] required p-2 px-6 "
                  onClick={() => handleToggle(6)}
                >
                  <span className="truncate ">
                    {selectedPublication
                      ? parutions.find(p => p.key === selectedPublication)?.text
                      :  t.searchForm.publication}
                  </span>
                  <span className="text-xl">{open === 6 ? "▲" : "▼"}</span>
                </div>
                {open === 6 && (
                  <div className=" top-full mt-1 left-0  text-black bg-[#d6cec5] p-4  shadow ">
                    <div className="grid grid-cols-1 gap-4">

                      {parutions.map(p => (
                        <label key={p.key} className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="publication"
                            value={p.key}
                            checked={selectedPublication === p.key}
                            onChange={() => handleRadioChange('enumPublicationDate', p.key)}
                            className="accent-blue-500"
                          />
                          {p.text}
                        </label>
                      ))}
                    </div>
                  </div>
                )}





                <input
                  type="text"
                  name="city"
                 placeholder={t.searchForm.city}
                  className="border bg-white/70 0    p-2 px-4  placeholder-[#4A62AA]  border-[#7b92d6] "
                  value={filters.city}

                  onChange={handleChange}


                />
                {errorMessage && (
                  <div className="text-red-600 text-center w-full py-4 bg-red-100 border border-red-300 rounded relative">
                    <button
                      className="absolute top-1 right-2 text-red-600 font-bold"
                      onClick={() => setErrorMessage(null)}
                    >
                      ×
                    </button>
                    {errorMessage}
                  </div>
                )}
                <div className=" justify-center flex ">
                  <button onClick={handleSearch}
                    type="submit"
                    disabled={isFormEmpty()}
                    className={`w-[62%] sm:w-[50%]       
                            font-bold rounded-md py-1 transition-transform  duration-200 
  ${clicked ? 'bg-orange-400  text-[#293c75] border-white' : ''}
           ${isFormEmpty()
                        ? "bg-gray-400  cursor-not-allowed"
                        : " bg-white  text-[#293c75] hover:text-white"
                      }
         ] '`}
                  >
            {t.searchForm.submit}
                  </button>
                </div>

              </div>




            </form>
            <div className="grid grid-cols-2 gap-4 my-8 mx-4 sm:py-8 py-2">
              <button onClick={handleClick3}
                className={`w-full py-4 text-xs rounded-3xl  font-bold transition-transform  duration-200 
          ${clicked1 ? 'bg-gray-400  text-[#4A62AA] border-white' : ' bg-[#2348b6]  text-white  border-[#4A62AA]'}
         ] '`}>
                POSTER UN STAGE
              </button>
              <button onClick={handleClick}
                className={`w-full py-4 text-xs rounded-3xl  font-bold transition-transform  duration-200 
          ${clicked2 ? 'bg-gray-400  text-[#4A62AA]  border-[#4A62AA]' : 'bg-orange-400  text-white border-white'}
         ] '`}>
                DÉPOSER MON CV
              </button>
              <button onClick={handleClick2}
                className={`w-full py-2 text-xs rounded-3xl  font-bold transition-transform  duration-200 
          ${clicked3 ? 'bg-gray-400  text-[#4A62AA] border-[#4A62AA]' : 'bg-orange-400  text-white border-white'}
         ] '`}>      GUIDE POUR POSTULER À UNE OFFRE
              </button>
              <button onClick={handleClick1}

                className={`w-full py-2 text-xs rounded-3xl  font-bold  transition-transform  duration-200  
          ${clicked4 ? 'bg-gray-400   text-[#4A62AA] border-white' : ' bg-[#2348b6]  text-white  border-[#4A62AA]'}
         ] '`}>
                CONSEILS POUR RÉUSSIR SON STAGE
              </button>
            </div>






          </div>
        </main>



      </div>
      <div className="flex   items-center justify-center  ">
        {brand.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center "
          >
            <div className="flex  items-center   justify-center  ">


              <a href={item.path}>

                <img
                  src={item.path}
                  alt={item.name}
                  width={150}
                  height={150}
                  className="flex  my-4 justify-center  "
                /> </a>
            </div></div>
        ))}
      </div>
      <footer className="w-full bg-blue-900    text-white text-center">
        <FooterMobile />
      </footer>


    </div>




  );
}
