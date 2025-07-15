"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "../../navbar/navbar";
import FooterMobile from "../../footer/footerEnd";
import ServiceFormationResult from "@/service/service_Formation_Result";


export default function SearchResultsFormationMobile() {









  const {
    getAllContractOptions,
    errorMessage,
    setErrorMessage,
    handleToggle,
    router,
    pagination,
    setPagination,
    schoolTypes,
    setProgram,
    clicked,
    setClicked,
    training,
    setTraining,
    studyFields,
    setStudyFields,
    degreeLevels,
    setDegreeLevels,
    admission,
    setAdmission,
    disabilities,
    setDisabilities,


    open,
    setOpen,

    trainingMode,
    programs,
    loading,
    setLoading,
    setTotal,
    total,
    setFormValues,
    formValues,
    handleInputChange,
    handlePageChange,
    handleNextPage,
    handleCheckboxChange,
totalElements,
    handlePrevPage,
    SkeletonLoader,
    handleSubmit,
handleClick

  } = ServiceFormationResult()


  const [isFilterOpen, setFilterIsOpen] = useState(false);

  const [isMobileMenuOpenFilter, setIsMobileMenuOpenFilter] = useState(false)



  const toggleFilter = () => {
    setFilterIsOpen(!isFilterOpen);
    setIsMobileMenuOpenFilter(!isMobileMenuOpenFilter);
  };



 
  const handleSearch = () => {
    router.push("/students/formations");
  };



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
          <div className="justify-center p-2 text-center text-xl font-bold uppercase bg-[#9b6e0f] text-white">
            <p>         RÉSULTATS DE LA RECHERCHE</p>
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
                  <div className=" text-[#4A62AA] space-y-1 text-center grid grid-cols w ">
                      

                        <input
                            type="text"
                            name="school"
                            placeholder="Mot clé"
                            value={formValues.school}
                            onChange={handleInputChange}
                            className="border border-[#7b92d6] p-2"
                        />
                        <input
                            type="text"
                            name="city"
                            placeholder="Ville"
                            value={formValues.city}
                            onChange={handleInputChange}
                            className="border border-[#7b92d6] p-2"
                        />

                        <div className="relative border border-[#7b92d6] bg-white p-2 text-[#4A62AA]">
                            <div
                                className="w-full flex justify-between items-center cursor-pointer"
                                onClick={() => handleToggle(1)}
                            >
                                <span
                                    className="truncate text-sm"
                                    title={
                                        getAllContractOptions()
                                            .filter(opt => formValues.degreeLevels?.values.includes(opt.key))
                                            .map(opt => opt.text)
                                            .join(', ')
                                    }
                                >
                                    {formValues.degreeLevels?.values.length
                                        ? getAllContractOptions()
                                            .filter(opt => formValues.degreeLevels?.values.includes(opt.key))
                                            .map(opt => opt.text)
                                            .join(', ')
                                        : 'Diplôme'}
                                </span>
                                <span className="text-xl">{open === 1 ? '▲' : '▼'}</span>
                            </div>

                            {open === 1 && (
                                <div className="absolute top-full mt-2 left-0 w-full text-black bg-white px-4 py-2 shadow z-10">
                                    <div className="grid grid-cols-2 gap-4">
                                        {degreeLevels.map((contrat) => (
                                            <div key={contrat.key}>
                                                {contrat.items ? (
                                                    <>
                                                        <label className="flex items-center gap-2 font-semibold">
                                                            <input
                                                                type="checkbox"
                                                                checked={contrat.items.every(item =>
                                                                    formValues.degreeLevels?.values?.includes(item.key) || false
                                                                )}
                                                                onChange={(e) => {
                                                                    const subKeys = contrat.items!.map(item => item.key);
                                                                    setFormValues(prev => {
                                                                        const current = prev.degreeLevels?.values || [];
                                                                        const newValues = e.target.checked
                                                                            ? [...current, ...subKeys.filter(k => !current.includes(k))]
                                                                            : current.filter(k => !subKeys.includes(k));

                                                                        return {
                                                                            ...prev,
                                                                            degreeLevels: {
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
                                                                        checked={formValues.degreeLevels?.values?.includes(item.key) || false}
                                                                        onChange={(e) => handleCheckboxChange('degreeLevels')(item.key, e.target.checked)}
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
                                                            checked={formValues.degreeLevels?.values?.includes(contrat.key) || false}
                                                            onChange={(e) => handleCheckboxChange('degreeLevels')(contrat.key, e.target.checked)}
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

                        </div>


                        <div className="relative border border-[#7b92d6] bg-white p-2 text-[#4A62AA]">
                            <div className="w-full flex justify-between items-center cursor-pointer" onClick={() => handleToggle(2)}>
                                <span className="truncate text-sm max-w-[250px]" title={formValues.training?.values.map(key => training.find(s => s.key === key)?.text).join(', ')}>
                                    {formValues.training?.values.length
                                        ? training.filter(s => formValues.training?.values.includes(s.key)).map(s => s.text).join(', ')
                                        : 'Formation'}
                                </span>
                                <span className="text-xl">{open === 2 ? "▲" : "▼"}</span>
                            </div>
                            {open === 2 && (
                                <div className="absolute top-full mt-2 left-0 min-w-full w-auto text-black bg-white p-4 shadow z-10">
                                    <div className="grid grid-cols-2 gap-4">
                                        {training.map((statusItem) => (
                                            <label key={statusItem.key} className="flex items-center gap-2">
                                                <input
                                                    type="checkbox"
                                                    checked={formValues.training?.values.includes(statusItem.key) || false}
                                                    onChange={(e) => handleCheckboxChange('training')(statusItem.key, e.target.checked)}
                                                    className="accent-blue-500"
                                                />
                                                {statusItem.text}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="relative border border-[#7b92d6] bg-white p-2 text-[#4A62AA]">
                            <div className="w-full flex justify-between items-center cursor-pointer" onClick={() => handleToggle(3)}>
                                <span className="truncate text-sm max-w-[250px]" title={formValues.studyFields?.values.map(key => studyFields.find(s => s.key === key)?.text).join(', ')}>
                                    {formValues.studyFields?.values.length
                                        ? studyFields.filter(s => formValues.studyFields?.values.includes(s.key)).map(s => s.text).join(', ')
                                        : 'studyFields'}
                                </span>
                                <span className="text-xl">{open === 3 ? "▲" : "▼"}</span>
                            </div>
                            {open === 3 && (
                                <div className="absolute top-full mt-2 left-0 min-w-full w-[350%] text-black bg-white p-4 shadow z-10">
                                    <div className="grid grid-cols-3 gap-2">
                                        {studyFields.map((statusItem) => (
                                            <label key={statusItem.key} className="flex items-start text-start gap-2">
                                                <input
                                                    type="checkbox"
                                                    checked={formValues.studyFields?.values.includes(statusItem.key) || false}
                                                    onChange={(e) => handleCheckboxChange('studyFields')(statusItem.key, e.target.checked)}
                                                    className="accent-blue-500"
                                                />
                                                {statusItem.text}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>



                        <div className="relative border border-[#7b92d6] bg-white p-2 text-[#4A62AA]">
                            <div className="w-full flex justify-between items-center cursor-pointer" onClick={() => handleToggle(4)}>
                                <span className="truncate text-sm max-w-[250px]" title={formValues.admission?.values.map(key => admission.find(f => f.key === key)?.text).join(', ')}>
                                    {formValues.admission?.values.length
                                        ? admission.filter(f => formValues.admission?.values.includes(f.key)).map(f => f.text).join(', ')
                                        : 'Secteur'}
                                </span>
                                <span className="text-xl">{open === 4 ? "▲" : "▼"}</span>
                            </div>
                            {open === 4 && (
                                <div className="absolute top-full mt-2 left-0 min-w-full w-auto text-black bg-white p-4 shadow z-10">
                                    <div className="grid grid-cols-2  text-start gap-2">
                                        {admission.map((admission) => (
                                            <label key={admission.key} className="flex items-center gap-2">
                                                <input
                                                    type="checkbox"
                                                    checked={formValues.admission?.values.includes(admission.key) || false}
                                                    onChange={(e) => handleCheckboxChange('admission')(admission.key, e.target.checked)}
                                                    className="accent-blue-500"
                                                />
                                                {admission.text}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="relative border border-[#7b92d6] bg-white p-2 text-[#4A62AA]">
                            <div className="w-full flex justify-between items-center cursor-pointer" onClick={() => handleToggle(5)}>
                                <span className="truncate text-sm max-w-[250px]" title={formValues.disabilities?.values.map(key => disabilities.find(f => f.key === key)?.text).join(', ')}>
                                    {formValues.disabilities?.values.length
                                        ? disabilities.filter(f => formValues.disabilities?.values.includes(f.key)).map(f => f.text).join(', ')
                                        : 'Handicap'}
                                </span>
                                <span className="text-xl">{open === 5 ? "▲" : "▼"}</span>
                            </div>
                            {open === 5 && (
                                <div className="absolute top-full mt-2 left-0 min-w-full  w-[150%] text-black bg-white p-4 shadow z-10">
                                    <div className="grid grid-cols-2 gap-4">
                                        {disabilities.map((disabilities) => (
                                            <label key={disabilities.key} className="flex items-center gap-2">
                                                <input
                                                    type="checkbox"
                                                    checked={formValues.disabilities?.values.includes(disabilities.key) || false}
                                                    onChange={(e) => handleCheckboxChange('disabilities')(disabilities.key, e.target.checked)}
                                                    className="accent-blue-500"
                                                />
                                                {disabilities.text}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="relative border border-[#7b92d6] bg-white p-2 text-[#4A62AA]">
                            <div className="w-full flex justify-between items-center cursor-pointer" onClick={() => handleToggle(6)}>
                                <span className="truncate text-sm max-w-[250px]" title={formValues.trainingMode?.values.map(key => trainingMode.find(s => s.key === key)?.text).join(', ')}>
                                    {formValues.trainingMode?.values.length
                                        ? trainingMode.filter(s => formValues.trainingMode?.values.includes(s.key)).map(s => s.text).join(', ')
                                        : "Mode d'enseignement"}
                                </span>
                                <span className="text-xl">{open === 6 ? "▲" : "▼"}</span>
                            </div>
                            {open === 6 && (
                                <div className="absolute top-full mt-2 left-0 w-full text-black bg-white p-4 shadow z-10">
                                    <div className="grid grid-cols-2  text-start gap-2">
                                        {trainingMode.map((statusItem) => (
                                            <label key={statusItem.key} className="flex items-center gap-2">
                                                <input
                                                    type="checkbox"
                                                    checked={formValues.trainingMode?.values.includes(statusItem.key) || false}
                                                    onChange={(e) => handleCheckboxChange('trainingMode')(statusItem.key, e.target.checked)}
                                                    className="accent-blue-500"
                                                />
                                                {statusItem.text}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                        <input
                            type="text"
                            name="enumFees"
                            placeholder="Pension"
                            value={formValues.enumFees}
                            onChange={handleInputChange}
                            className="border border-[#7b92d6] p-2"
                        />


                        <input
                            type="text"
                            name="enumLanguage"
                            placeholder="Langue d'enseignement"
                            value={formValues.enumLanguage}
                            onChange={handleInputChange}
                            className="border border-[#7b92d6] p-2"
                        />


                        <div className="relative border border-[#7b92d6] bg-white p-2 text-[#4A62AA]">
                            <div className="w-full flex justify-between items-center cursor-pointer" onClick={() => handleToggle(7)}>
                                <span className="truncate text-sm max-w-[250px]" title={formValues.schoolType?.values.map(key => schoolTypes.find(s => s.key === key)?.text).join(', ')}>
                                    {formValues.schoolType?.values.length
                                        ? schoolTypes.filter(s => formValues.schoolType?.values.includes(s.key)).map(s => s.text).join(', ')
                                        : "Statut de l'institution"}
                                </span>
                                <span className="text-xl">{open === 7 ? "▲" : "▼"}</span>
                            </div>
                            {open === 7 && (
                                <div className="absolute top-full mt-2 left-0 w-full text-black bg-white p-4 shadow z-10">
                                    <div className="grid grid-cols-2  text-start gap-2">
                                        {schoolTypes.map((statusItem) => (
                                            <label key={statusItem.key} className="flex items-center gap-2">
                                                <input
                                                    type="checkbox"
                                                    checked={formValues.schoolType?.values.includes(statusItem.key) || false}
                                                    onChange={(e) => handleCheckboxChange('schoolType')(statusItem.key, e.target.checked)}
                                                    className="accent-blue-500"
                                                />
                                                {statusItem.text}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="flex items-center justify-center my-4">
                            <div className="flex items-center justify-center mt-4">
                                <button
                                    onClick={handleSubmit}
                                             className={`px-6 py-2 flex items-center text-white rounded
    ${clicked ? 'bg-[#9b6e0f] text-white border-white' : 'bg-[#cf6a17]'}
  `} >
                                    Appliquer les filtres
                                </button>
                            </div>
                        </div>
                      
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

          <div className="  mt-8  border-4 border-[#4A62AA]  gap-6 p-2">

            <div className="flex-grow ">
              {loading ? (

                <div className=" text-2xl text-center"><p>Chargement en cours</p>


                </div>
              ) : (programs.length > 0 ? (

                <div className="flex-grow ">
                  <p className=" text-white  text-center text-lg p-2 mb-4">
                    <b>  {totalElements} Formation(s) </b>   trouvée(s)
                  </p>

                </div>


              ) : (<div className="">
                <div className="flex-grow  ">
                  <p className=" text-white  text-center text-lg p-2 mb-4">
                    <b>  {totalElements} Formation(s) </b>   trouvée(s)
                  </p>

                </div>
              </div>
              )
              )}


            </div>
            <div className="flex flex-row ">

              <div className="  w-full gap-10">


                <div className="mb-2">
                 {loading ?
                                (

                                    <div className=" text-2xl text-center"><p></p>
                                        <SkeletonLoader />
                                        <SkeletonLoader />
                                        <SkeletonLoader />
                                    </div>
                                ) : (
programs.length > 0 ? (
                    <>
                      {programs.map((result) => (
                        <div
                          key={result.id}
                          onClick={() => handleClick(result.id)}
                          className="bg-white p-2 shadow-sm mb-2 cursor-pointer hover:shadow-md transition-shadow"
                        >
                          <div className="py-2">
                            <h3 className="text-[#4A62AA] font-bold text-lg">{result.degreeName}</h3>
                            <p className="text-black">{result.schoolName}</p>
                            <p className="text-black ">{result.city}, {result.state.name}</p>
                          </div>
                        </div>
                      ))}


                      <div className="flex justify-center mt-4">

                        {programs.length > 0 ?
                          (

                            <div className="flex justify-center mt-4">
                              <div className="flex justify-center gap-4 mt-4">
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
                          ) : (<div>



                          </div>
                          )}

                      </div>
                      <div className="mt-8 text-center">
                        <button
                          onClick={handleSearch}
                          className="px-6 py-2 bg-[#ac911d] text-white font-bold"
                        >
                          Nouvelle recherche
                        </button>
                      </div>
                    </>
                  ) : (
                    <div>
                      <div className="p-8 border-2 bg-white  mt-10">
                        <p className="text-center text-black justify-center text-lg">
                          Aucune offre ne correspond à vos critères de recherche. <br />
                          Vous pouvez déposer votre CV pour recevoir les nouvelles annonces automatiquement !
                        </p>
                      </div>
                      <div className="mt-4 text-center">
                        <button
                          onClick={handleSearch}
                          className="px-6 py-2 bg-blue-600 text-white font-bold"
                        >
                          Nouvelle recherche
                        </button>
                      </div>
                    </div>
                  )
                                )}
                </div>


              </div>

            </div>
          </div>
        </div>
      </div>
      <footer className="w-full bg-blue-900   text-white text-center">
        <FooterMobile />
      </footer>
    </div>
  );
}
