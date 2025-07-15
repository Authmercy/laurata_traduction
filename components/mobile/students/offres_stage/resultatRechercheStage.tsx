"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Navbar from "../../navbar/navbar";
import FooterMobile from "../../footer/footerEnd";
import ServiceInternshipResult from "@/service/service_Internship_Result";




export default function SearchResultsMobile() {



  const [isFilterOpen, setFilterIsOpen] = useState(false);

  const [isMobileMenuOpenFilter, setIsMobileMenuOpenFilter] = useState(false)


  
  const handleSearch1 = () => {
    router.push("/students/offresStage");
  };
  const toggleFilter = () => {
    setFilterIsOpen(!isFilterOpen);
    setIsMobileMenuOpenFilter(!isMobileMenuOpenFilter);
  };

  const handleSearch = () => {
    router.push("/students/offresStage");
  };

  const {
    getAllContractOptions,
    errorMessage,
    setErrorMessage,
    handleToggle,
    router,
    pagination,
    setPagination,
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
    setJobOffers,
    jobOffers,
    loading,
    setLoading,
    setTotal,
    total,
    Levels,
    setFormValues,
    formValues,
    handleInputChange,
    handlePageChange,
    handleNextPage,
    handleCheckboxChange,
    handleRadioChange,
    handlePrevPage,
    SkeletonLoader,
    handleSubmit,
    clicked,
    handleClick

  } = ServiceInternshipResult()




  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileMenuOpen2, setIsMobileMenuOpen2] = useState(false);

  return (
    
    <div>
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
          <div className="justify-center p-2 text-center text-xl font-bold uppercase bg-[#9b6e0f] text-white">  <p>RÉSULTATS DE LA RECHERCHE</p>
          </div>
          <div onClick={toggleFilter}

            className={`flex font-bold justify-end space-x-2 mt-4 mx-4 cursor-pointer ${isFilterOpen ? 'text-[#9b6e0f]' : 'text-white'
              }`}
          > <p>Filtres</p>
          </div>
          <div>
            {isMobileMenuOpenFilter && (
              <div>




                <div className="grid grid-cols sm:flex  sm:flex-col text-[#4A62AA] md:grid-cols-8 gap-1 p-6 pb-2">
                  <input
                    type="text"
                    name="keywords"
                    placeholder="Mot clé"
                    id="keywords"
                    value={formValues.keywords}
                    onChange={handleInputChange}
                    className="bg-white/70  placeholder-[#4A62AA] required  p-2 px-6 "
                  />


                  <div
                    className="bg-white/70 flex justify-between placeholder-[#4A62AA] required p-2 px-6 "
                    onClick={() => handleToggle(1)}
                  >
                    <span className="truncate max-w-[120px] text-sm" title={formValues.foa?.values.map(key => foas.find(f => f.key === key)?.text).join(', ')}>
                      {formValues.foa?.values.length
                        ? foas.filter(f => formValues.foa?.values.includes(f.key)).map(f => f.text).join(', ')
                        : 'Secteur'}

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
                              checked={formValues.foa?.values.includes(foa.key) || false}
                              onChange={(e) => handleCheckboxChange('foa')(foa.key, e.target.checked)}
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
                    <span className="truncate max-w-[120px] text-sm" title={formValues.degreeLevels?.values.map(key => Levels.find(l => l.key === key)?.text).join(', ')}>
                      {formValues.degreeLevels?.values.length
                        ? Levels.filter(l => formValues.degreeLevels?.values.includes(l.key)).map(l => l.text).join(', ')
                        : 'Niveau'}
                    </span>
                    <span className="text-xl">{open === 2 ? "▲" : "▼"}</span>
                  </div>
                  {open === 2 && (
                    <div className=" top-full mt-1 left-0  text-black bg-[#d6cec5] p-4  shadow ">
                      <div className="grid grid-cols-2 gap-4">
                        {Levels.map((level, index) => (
                          <label key={level.key} className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              value={level.key}
                              checked={formValues.degreeLevels?.values.includes(level.key) || false}
                              onChange={(e) => handleCheckboxChange('degreeLevels')(level.key, e.target.checked)}
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
                    <span className="truncate max-w-[120px] text-sm">
                      {formValues.enumDuration
                        ? durations.find(d => d.key === formValues.enumDuration)?.text
                        : 'Durée'}
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
                              checked={formValues.enumDuration === duration.key}
                              onChange={() => handleRadioChange('enumDuration')(duration.key)}
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
                    <span className="truncate max-w-[120px] text-sm" title={formValues.orgTypes?.values.map(key => status.find(s => s.key === key)?.text).join(', ')}>
                      {formValues.orgTypes?.values.length
                        ? status.filter(s => formValues.orgTypes?.values.includes(s.key)).map(s => s.text).join(', ')
                        : 'Employeur'}
                    </span>
                    <span className="text-xl">{open === 4 ? "▲" : "▼"}</span>
                  </div>
                  {open === 4 && (
                    <div className=" top-full mt-1 left-0  text-black bg-[#d6cec5] p-4  shadow ">
                      <div className="grid grid-cols-2 gap-4">
                        {status.map((s, index) => (
                          <label key={s.key} className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              value={s.key}
                              checked={formValues.orgTypes?.values.includes(s.key) || false}
                              onChange={(e) => handleCheckboxChange('orgTypes')(s.key, e.target.checked)}
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
                  >
                    <span
                      className="truncate max-w-[120px] text-sm"
                      title={
                        getAllContractOptions()
                          .filter(opt => formValues.adTypes?.values.includes(opt.key))
                          .map(opt => opt.text)
                          .join(', ')
                      }
                    >
                      {formValues.adTypes?.values.length
                        ? getAllContractOptions()
                          .filter(opt => formValues.adTypes?.values.includes(opt.key))
                          .map(opt => opt.text)
                          .join(', ')
                        : 'Contrat'}
                    </span>
                    <span className="text-xl">{open === 5 ? "▲" : "▼"}</span>
                  </div>
                  {open === 5 && (
                    <div className=" top-full mt-1 left-0  text-black bg-[#d6cec5] p-4  shadow ">
                      <div className="grid grid-cols-1 gap-4">
                        {contrats.map((contrat) => (
                          <div key={contrat.key}>

                            {contrat.items ? (
                              <>
                                <label className="flex items-center gap-2 font-semibold">
                                  <input
                                    type="checkbox"
                                    checked={contrat.items.every(item =>
                                      formValues.adTypes?.values.includes(item.key)
                                    )}
                                    onChange={(e) => {
                                      const subKeys = contrat.items!.map(item => item.key);
                                      setFormValues(prev => {
                                        const current = prev.adTypes?.values || [];
                                        const newValues = e.target.checked
                                          ? [...current, ...subKeys.filter(k => !current.includes(k))]
                                          : current.filter(k => !subKeys.includes(k));

                                        return {
                                          ...prev,
                                          adTypes: {
                                            condition: 'anyOf',
                                            values: newValues
                                          }
                                        };
                                      });
                                    }}
                                    className="accent-blue-500"
                                  />
                                  {contrat.text}
                                </label>


                                <div className="ml-6 mt-1 flex flex-col gap-1">
                                  {contrat.items.map(item => (
                                    <label key={item.key} className="flex items-center gap-2 text-sm">
                                      <input
                                        type="checkbox"
                                        checked={formValues.adTypes?.values.includes(item.key) || false}
                                        onChange={(e) => handleCheckboxChange('adTypes')(item.key, e.target.checked)}
                                        className="accent-blue-500"
                                      />
                                      {item.text}
                                    </label>
                                  ))}
                                </div>
                              </>
                            ) : (
                              <label className="flex items-center gap-2">
                                <input
                                  type="checkbox"
                                  checked={formValues.adTypes?.values.includes(contrat.key) || false}
                                  onChange={(e) => handleCheckboxChange('adTypes')(contrat.key, e.target.checked)}
                                  className="accent-blue-500"
                                />
                                {contrat.text}
                              </label>
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
                    <span className="truncate max-w-[120px] text-sm">
                      {formValues.enumPublicationDate
                        ? parutions.find(p => p.key === formValues.enumPublicationDate)?.text
                        : 'Publication'}
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
                              checked={formValues.enumPublicationDate === p.key}
                              onChange={() => handleRadioChange('enumPublicationDate')(p.key)}
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
                    placeholder=" Ville"
                    className="border bg-white/70 0    p-2 px-4  placeholder-[#4A62AA]  border-[#7b92d6] "
                    value={formValues.city}

                    onChange={handleInputChange}


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


                </div>




                <div className="flex items-center justify-center my-4">
                  <div className="flex items-center justify-center">
                  <button
  onClick={handleSubmit}
 
  className={`px-6 py-2 flex items-center text-white rounded
    ${ clicked ? 'bg-[#9b6e0f] text-white border-white' : 'bg-[#cf6a17]'}
  `}
>
  Appliquer les filtres
</button>

                  </div>
                </div>
                {errorMessage && (
                  <div className="text-red-600 px-20   text-center w-full py-4 bg-red-100 border border-red-300 rounded relative">
                    <button
                      className="absolute top-1 right-2 text-red-600 font-bold"
                      onClick={() => setErrorMessage(null)}
                    >
                      ×
                    </button>
                    {errorMessage}
                  </div>
                )}

              </div>

            )}
          </div>



          {jobOffers.length > 0 ? (
            jobOffers.map((offer, index) => (

              <div key={offer.id ? `${offer.id}-${index}` : `offer-${index}`} onClick={() => handleClick(offer.id)}
                className="bg-white/90  m-2 p-2 shadow-sm mb-2 cursor-pointer hover:shadow-md transition-shadow"
              >
                <h2 className="text-lg text-center text-[#4A62AA] font-bold">{offer.title}</h2>


                <p className="text-orange-700  text-center font-semibold">
                  {offer.companyName}
                </p>
                <p className="text-sm  text-center text-[#4A62AA] ">{offer.orgTypeString}</p>

                <div className="flex flex-row items-center justify-between text-center gap-4">
                  <p className="flex items-center justify-center">


                    {offer.typeString}

                  </p>
                  <p className="flex items-center justify-center  gap-2">
                    <Image src="/icons/timer.svg" alt="icon" width={20} height={20} />
                    {offer.durationText}
                  </p>

                  <p className="flex items-center justify-center gap-2">
                    <Image src="/icons/location.svg" alt="icon" width={20} height={20} />
                    {offer.city}
                  </p>
                </div>
                <p className="text-end text-sm w-full ">
                  <span>Publié le :</span> {offer.publishedOn}
                </p>
              </div>))) : (<div>
                <div className="p-8 border-2 bg-white  mt-10">
                  <p className="text-center  justify-center text-lg">
                    Aucune offre ne correspond à vos critères de recherche. <br /><br />
                    Déposez votre CV pour recevoir les nouvelles annonces directement dans votre boîte mail !
                  </p></div>
                <div className="mt-4 text-center">
                  <button onClick={handleSearch} className="px-6 py-2 bg-blue-600 text-white font-bold ">
                    Nouvelle recherche
                  </button>
                </div>
              </div>
          )}
           <div className="">
                         {jobOffers.length > 0 ?
                            (
                                <div className="space-y-2">
                                   <div className="flex gap-4 justify-center mt-8">
                        <div className="flex justify-between gap-4 mt-4">
                            <button
                                onClick={handlePrevPage}
                                disabled={pagination.first}
                                className="px-4 py-2 bg-gray-300 text-black font-bold disabled:opacity-50"
                            >
                                ←
                            </button>
                            <span className="text-sm text-white mt-2">
                                Page {pagination.pageNumber + 1} sur {pagination.totalPages}
                            </span>
                            <button
                                onClick={handleNextPage}
                                disabled={pagination.last}
                                className="px-4 py-2 bg-blue-600 text-white font-bold disabled:opacity-50"
                            >
                                →
                            </button>
                        </div>

                 

                                    </div>
                                          <div className=" px-4 py-1 flex justify-center  text-center">
                                    <button onClick={handleSearch1} className="px-6 py-2  hover:bg-blue-600 bg-[#a88137] rounded-xl text-white font-bold ">
                                        Nouvelle recherche
                                    </button>  </div> </div>
) : (<div>



                                    </div>
                            )}
                    </div>

        </div>
        <footer className="w-full bg-blue-900   mt-10 text-white text-center">
          <FooterMobile />
        </footer>
      </div>

    </div>
  );
}
