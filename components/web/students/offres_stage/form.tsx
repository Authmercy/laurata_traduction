"use client";
import React from 'react';


import ServiceInternshipFilter from '@/service/service_Internship';
import en from '../../../../i18/en/student/internship.json';
import fr from '../../../../i18/fr/student/internship.json';


export default function FormulaireStage() {

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
    isFormEmpty, allEmplois, allInternships

  } = ServiceInternshipFilter()



  const { locale } = router;
  const t = locale === 'en' ? en : fr;

  return (
    <div className="flex flex-wrap pt-6">
      <div className="w-full py-2">
        <form onSubmit={handleSearch}>
          <div className="flex text-xl">
            <button
              type="button"
              onClick={() => handlePresetSelection("stage")}
              className={`flex-1 py-2 font-bold flex items-center gap-2 ps-5 ${allInternships.every(v => selectedContracts.includes(v))
                ? "bg-white/70  text-[#4A62AA]"
                : "bg-white/70 text-[#4A62AA]"
                }`}
            >
              <input
                type="checkbox"
                checked={allInternships.every(v => selectedContracts.includes(v))}
                readOnly
                className="w-5 h-5 rounded-md border-2 border-[#4A62AA] focus:ring-[#4A62AA]"
              />
              <p className="flex-1 text-start">       {t.searchForm.internship}</p>
            </button>

            <button
              type="button"
              onClick={() => handlePresetSelection("emploi")}
              className={`flex-1 py-2 font-bold flex items-center gap-2 ps-5 ${allEmplois.every(v => selectedContracts.includes(v))
                ? "bg-[#4A62AA] text-white"
                : "bg-[#4A62AA] text-white"
                }`}
            >
              <input
                type="checkbox"
                checked={allEmplois.every(v => selectedContracts.includes(v))}
                readOnly
                className="w-5 h-5 rounded-md border-2 border-[#4A62AA] focus:ring-[#4A62AA]"
              />
              <p className="flex-1 text-start">       {t.searchForm.firstJob}</p>
            </button>
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="w-full bg-white pt-6  pb-4">
              <div className="grid grid-cols-2 text-[#4A62AA] md:grid-cols-8 gap-1 p-6">


                <input
                  type="text"
                  name="keywords"
                  placeholder={t.searchForm.keyword}
                  value={filters.keywords}
                  onChange={handleChange}
                  className="border border-[#7b92d6] p-2"
                />


                <div className="relative border border-[#7b92d6] p-2 text-[#4A62AA]">
                  <div className="w-full flex justify-between items-center cursor-pointer" onClick={() => handleToggle(1)}>
                    <span className="truncate max-w-[120px] text-sm" title={selectedSectors.map(k => foas.find(f => f.key === k)?.text).join(', ')}>
                      {selectedSectors.length
                        ? foas.filter(f => selectedSectors.includes(f.key)).map(f => f.text).join(', ')
                        : t.searchForm.sector}
                    </span>
                    <span className="text-xl">{open === 1 ? "▲" : "▼"}</span>
                  </div>
                  {open === 1 && (
                    <div className="absolute top-full mt-2 left-0 w-[750%] text-black bg-[#fcc986] p-4 shadow z-10">
                      <div className="grid grid-cols-4 gap-4">
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
                </div>


                <div className="relative border border-[#7b92d6] p-2 text-[#4A62AA]">
                  <div className="w-full flex justify-between items-center cursor-pointer" onClick={() => handleToggle(2)}>
                    <span className="truncate max-w-[120px] text-sm" title={selectedLevels.map(k => degreeLevels.find(d => d.key === k)?.text).join(', ')}>
                      {selectedLevels.length
                        ? degreeLevels.filter(d => selectedLevels.includes(d.key)).map(d => d.text).join(', ')
                        : t.searchForm.level}
                    </span>
                    <span className="text-xl">{open === 2 ? "▲" : "▼"}</span>
                  </div>
                  {open === 2 && (
                    <div className="absolute top-full mt-2 left-0 w-[120%] text-black bg-[#fcc986] p-4 shadow z-10">
                      <div className="flex flex-col gap-2">
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
                </div>


                <div className="relative border border-[#7b92d6] p-2 text-[#4A62AA]">
                  <div className="w-full flex justify-between items-center cursor-pointer" onClick={() => handleToggle(3)}>
                    <span className="truncate max-w-[120px] text-sm">
                      {selectedDuration
                        ? durations.find(d => d.key === selectedDuration)?.text
                        : t.searchForm.duration
                      }
                    </span>
                    <span className="text-xl">{open === 3 ? "▲" : "▼"}</span>
                  </div>
                  {open === 3 && (
                    <div className="absolute top-full mt-2 left-0 w-[120%] text-black bg-[#fcc986] p-4 shadow z-10">
                      <div className="flex flex-col gap-2">
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
                </div>


                <div className="relative border border-[#7b92d6] p-2 text-[#4A62AA]">
                  <div className="w-full flex justify-between items-center cursor-pointer" onClick={() => handleToggle(5)}>
                    <span className="truncate max-w-[120px] text-sm" title={selectedOrgTypes.map(k => status.find(s => s.key === k)?.text).join(', ')}>
                      {selectedOrgTypes.length
                        ? status.filter(s => selectedOrgTypes.includes(s.key)).map(s => s.text).join(', ')
                        : t.searchForm.employer}
                    </span>
                    <span className="text-xl">{open === 5 ? "▲" : "▼"}</span>
                  </div>
                  {open === 5 && (
                    <div className="absolute top-full mt-2 left-0 w-[200%] text-black bg-[#fcc986] p-4 shadow z-10">
                      <div className="flex flex-col gap-2">
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
                </div>


                <div className="relative border border-[#7b92d6] p-2 text-[#4A62AA]">
                  <div className="w-full flex justify-between items-center cursor-pointer" onClick={() => handleToggle(4)}>
                    <span className="truncate max-w-[120px] text-sm" title={
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
                        : t.searchForm.contract}

                    </span>
                    <span className="text-xl">{open === 4 ? "▲" : "▼"}</span>
                  </div>
                  {open === 4 && (
                    <div className="absolute top-full mt-2 left-0 w-[195%] text-black bg-[#fcc986] px-4 py-2 shadow z-10">
                      <div className="flex flex-col gap-2">
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

                </div>


                <div className="relative border border-[#7b92d6] p-2 text-[#4A62AA]">
                  <div className="w-full flex justify-between items-center cursor-pointer" onClick={() => handleToggle(8)}>
                    <span className="truncate max-w-[120px] text-sm">
                      {selectedPublication
                        ? parutions.find(p => p.key === selectedPublication)?.text
                        : t.searchForm.publication}
                    </span>
                    <span className="text-xl">{open === 8 ? "▲" : "▼"}</span>
                  </div>
                  {open === 8 && (
                    <div className="absolute top-full mt-2 left-0 w-[195%] text-black bg-[#fcc986] px-4 py-2 shadow z-10">
                      <div className="flex flex-col gap-2">
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
                </div>


                <input
                  type="text"
                  name="city"
                  placeholder={t.searchForm.city}
                  className="border border-[#7b92d6] p-2"
                  value={filters.city}
                  onChange={handleChange}
                />
              </div>


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
              <div className="my-8 text-center">

                <button
                  type="submit"
                  disabled={isFormEmpty()}
                  className={`px-6 py-2 rounded-lg font-bold  ${isFormEmpty()
                    ? "bg-gray-400 cursor-not-allowed"
                    : " bg-[#4A62AA]  hover:bg-[#8c6630] text-white"
                    }`}
                >
                  {t.searchForm.submit}
                </button>
              </div>
            </div>
          </div>
        </form>

      </div>
    </div>
  );
}