"use client";

import ServiceFormationFilter from "@/service/service_Formation";

import en from '../../../../i18/en/student/formation.json';
import fr from '../../../../i18/fr/student/formation.json';

export default function FormulaireFormation() {
  const {
    errorMessage,
    setErrorMessage,
    router,
    error,
    setError,
    filters,
    setFilters,
    program,
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
    schoolType,
    setSchoolType,
    open,
    setOpen,
    selectedTraining,
    setSelectedTraining,
    selectedDegreeLevels,
    setSelectedDegreeLevels,
    selectedDisabilities,
    setSelectedDisabilities,
    selectedAdmission,
    setSelectedAdmission,
    selectedSchoolType,
    setSelectedSchoolType,
    selectedStudyFields,
    setSelectedStudyFields,
    handleToggle,
    setTrainingMode,
    trainingMode,
    selectedTrainingMode,
    setSelectedTrainingMode,
    handleCheckboxChange,
    handleChange,
    handleSearch,
    isFormEmpty,
    isSearchDisabled


  } = ServiceFormationFilter()
  const { locale } = router;
  const t = locale === 'en' ? en : fr;


  return (
    <div className="flex flex-wrap pl-4 pt-6">
      <div className="w-full   justify-center items-center h-[35%] py-2 ">
        <form onSubmit={handleSearch}>

          <p className="flex w-px-4  text-xl justify-center py-2 bg-[#A87A38]  uppercase text-white ps-5 text-center ">

           {t.searchForm.formation}
          </p>





          <div className="flex flex-col md:flex-row ">
            <div className="w-full bg-white  pb-10">




              <div className="grid grid-cols-2  text-[#4A62AA] md:grid-cols-3 gap-1 p-6 px-16">
                <input
                  type="text"
                  name="school"
                  placeholder=   {t.searchForm.keyword}
                  value={filters.school}
                  onChange={handleChange}
                  className="text-center border-2 border-[#7b92d6] placeholder-[#717172] p-2"
                />
                <div className="relative border-2 border-[#7b92d6] p-2 text-[#4A62AA]">
                  <div className="w-full flex justify-between items-center cursor-pointer " onClick={() => handleToggle(4)}>
                    <span className="truncate w-full text-sm" title={
                      selectedDegreeLevels
                        .map(k => degreeLevels.find(c => c.key === k)?.text || k)
                        .join(', ')
                    }
                    >
                      {selectedDegreeLevels.length
                        ? degreeLevels
                          .flatMap(c => (c.items ? c.items : [c]))
                          .filter(c => selectedDegreeLevels.includes(c.key))
                          .map(c => c.text)
                          .join(', ')
                        : t.searchForm.diplome}

                    </span>
                    <span className="text-xl">{open === 4 ? "▲" : "▼"}</span>
                  </div>
                  {open === 4 && (
                    <div className="absolute top-full mt-2 left-0  text-black bg-white w-full px-4 py-2 shadow z-10">
                      <div className="flex flex-col gap-2">
                        {degreeLevels.map((c) => (
                          <div key={c.key}>

                            <label className="flex items-center gap-2">
                              {c.items ? (
                                <>
                                  <input
                                    type="checkbox"
                                    checked={
                                      c.items.every(item => selectedDegreeLevels.includes(item.key))
                                    }
                                    onChange={() => {
                                      const allKeys = c.items!.map(item => item.key);
                                      setSelectedDegreeLevels(prev =>
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
                                    checked={selectedDegreeLevels.includes(c.key)}
                                    onChange={() => handleCheckboxChange("degreeLevels", c.key)}
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
                                      checked={selectedDegreeLevels.includes(sub.key)}
                                      onChange={() => handleCheckboxChange("degreeLevels", sub.key)}
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

                </div>

                <input
                  type="text"
                  name="city"
                  placeholder=   {t.searchForm.city}
                  value={filters.city}
                  onChange={handleChange}
                  className="text-center border-2 border-[#7b92d6] placeholder-[#717172] p-2"
                />
              </div>
              <p className="text-center px-16 my-2">
                 <b>  {t.searchForm.repertoire}</b> {t.searchForm.text}</p>

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
              <div className="  text-center">

                <button onClick={handleSearch}
                  type="submit"
                  disabled={isFormEmpty()}
                  className={`px-6 mt-2 text-xl py-2 rounded-md text-white transition-transform  duration-200 
          ${clicked ? 'bg-[#4A62AA]  text-white border-white' : ' '}
           ${isFormEmpty()
                      ? "bg-gray-400 cursor-not-allowed"
                      : " bg-[#A87A38]  hover:bg-[#7b92d6]"
                    }
         ] '`}
                >
                {t.searchForm.submit}
                </button>
              </div>
            </div></div>



        </form>
      </div>
    </div>
  );
}