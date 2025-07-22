"use client";
import React from "react";
import Image from "next/image";
import ServiceInternshipResult from "@/service/service_Internship_Result";
import en from '../../../../i18/en/student/internship.json';
import fr from '../../../../i18/fr/student/internship.json';


export default function SearchResults() {


    const {
        handleClick,
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
        isModified,
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


    } = ServiceInternshipResult()

    const { locale } = router;
    const t = locale === 'en' ? en : fr;



    const handleSearch1 = () => {
        router.push("/students/offresStage");
    };







    return (
        <div className="p-2 pt-16 md:pl-8">
            <div className="flex pl-6 gap-1 w-full">
                <p className="bg-[#A87A38] px-8 py-2 uppercase text-white  text-start ">
                  {t.searchResult.result}
                </p>

                {loading ? (

                    <div className=" text-2xl text-center"><p>{t.searchResult.load}</p>


                    </div>
                ) : (jobOffers.length > 0 ? (

                    <p className="py-2 px-2 bg-white text-[#A87A38] text-center flex-1">
                        <b>{total} </b> {t.searchResult.found}
                    </p>


                ) : (<div>
                    <p className="py-2 px-2 bg-white text-[#A87A38] text-center flex-1">
                        <b>{total}  </b> {t.searchResult.found}
                    </p>
                </div>
                )
                )}

            </div>


            <div className="flex flex-col md:flex-row  -mt-1 ">

                <div className="flex-grow ">
                    <div className="grid grid-cols-2 text-[#4A62AA] md:grid-cols-8 gap-1/2 py-6 pl-6 pb-2 pt-2">

                        <input
                            type="text"
                            name="keywords"
                            placeholder="Mot clé"
                            value={formValues.keywords}
                            onChange={handleInputChange}
                            className="border border-[#7b92d6] p-2"
                        />

                        <div className="relative border border-[#7b92d6] bg-white p-2 text-[#4A62AA]">
                            <div className="w-full flex justify-between items-center cursor-pointer" onClick={() => handleToggle(1)}>
                                <span className="truncate max-w-[120px] text-sm" title={formValues.foa?.values.map(key => foas.find(f => f.key === key)?.text).join(', ')}>
                                    {formValues.foa?.values.length
                                        ? foas.filter(f => formValues.foa?.values.includes(f.key)).map(f => f.text).join(', ')
                                        : t.searchForm.sector}
                                </span>
                                <span className="text-xl">{open === 1 ? "▲" : "▼"}</span>
                            </div>
                            {open === 1 && (
                                <div className="absolute top-full mt-2 left-0 w-[750%] text-black bg-[#fcc986] p-4 shadow z-10">
                                    <div className="grid grid-cols-4 gap-4">
                                        {foas.map((foa) => (
                                            <label key={foa.key} className="flex items-center gap-2">
                                                <input
                                                    type="checkbox"
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
                        </div>


                        <div className="relative border border-[#7b92d6] bg-white p-2 text-[#4A62AA]">
                            <div className="w-full flex justify-between items-center cursor-pointer" onClick={() => handleToggle(2)}>
                                <span className="truncate max-w-[120px] text-sm" title={formValues.degreeLevels?.values.map(key => Levels.find(l => l.key === key)?.text).join(', ')}>
                                    {formValues.degreeLevels?.values.length
                                        ? Levels.filter(l => formValues.degreeLevels?.values.includes(l.key)).map(l => l.text).join(', ')
                                        : t.searchForm.level}
                                </span>
                                <span className="text-xl">{open === 2 ? "▲" : "▼"}</span>
                            </div>
                            {open === 2 && (
                                <div className="absolute top-full mt-2 left-0 w-[120%] text-black bg-[#fcc986] p-4 shadow z-10">
                                    <div className="flex flex-col gap-2">
                                        {Levels.map((level) => (
                                            <label key={level.key} className="flex items-center gap-2">
                                                <input
                                                    type="checkbox"
                                                    checked={formValues.degreeLevels?.values.includes(level.key) || false}
                                                    onChange={(e) => handleCheckboxChange('degreeLevels')(level.key, e.target.checked)}
                                                    className="accent-blue-500"
                                                />
                                                {level.text}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>


                        <div className="relative border border-[#7b92d6] bg-white p-2 text-[#4A62AA]">
                            <div className="w-full flex justify-between items-center cursor-pointer" onClick={() => handleToggle(3)}>
                                <span className="truncate max-w-[120px] text-sm">
                                    {formValues.enumDuration
                                        ? durations.find(d => d.key === formValues.enumDuration)?.text
                                        : t.searchForm.duration}
                                </span>
                                <span className="text-xl">{open === 3 ? "▲" : "▼"}</span>
                            </div>
                            {open === 3 && (
                                <div className="absolute top-full mt-2 left-0 w-[120%] text-black bg-[#fcc986] p-4 shadow z-10">
                                    <div className="flex flex-col gap-2">
                                        {durations.map((duration) => (
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
                        </div>


                        <div className="relative border border-[#7b92d6] bg-white p-2 text-[#4A62AA]">
                            <div className="w-full flex justify-between items-center cursor-pointer" onClick={() => handleToggle(5)}>
                                <span className="truncate max-w-[120px] text-sm" title={formValues.orgTypes?.values.map(key => status.find(s => s.key === key)?.text).join(', ')}>
                                    {formValues.orgTypes?.values.length
                                        ? status.filter(s => formValues.orgTypes?.values.includes(s.key)).map(s => s.text).join(', ')
                                        : t.searchForm.employer}
                                </span>
                                <span className="text-xl">{open === 5 ? "▲" : "▼"}</span>
                            </div>
                            {open === 5 && (
                                <div className="absolute top-full mt-2 left-0 w-[200%] text-black bg-[#fcc986] p-4 shadow z-10">
                                    <div className="flex flex-col gap-2">
                                        {status.map((statusItem) => (
                                            <label key={statusItem.key} className="flex items-center gap-2">
                                                <input
                                                    type="checkbox"
                                                    checked={formValues.orgTypes?.values.includes(statusItem.key) || false}
                                                    onChange={(e) => handleCheckboxChange('orgTypes')(statusItem.key, e.target.checked)}
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
                            <div
                                className="w-full flex justify-between items-center cursor-pointer"
                                onClick={() => handleToggle(4)}
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
                                        : t.searchForm.contract}
                                </span>
                                <span className="text-xl">{open === 4 ? '▲' : '▼'}</span>
                            </div>

                            {open === 4 && (
                                <div className="absolute top-full mt-2 left-0 w-[195%] text-black bg-[#fcc986] px-4 py-2 shadow z-10">
                                    <div className="flex flex-col gap-2">
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

                        </div>


                        <div className="relative border border-[#7b92d6] p-2 bg-white text-[#4A62AA]">
                            <div className="w-full flex justify-between items-center cursor-pointer" onClick={() => handleToggle(8)}>
                                <span className="truncate max-w-[120px] text-sm">
                                    {formValues.enumPublicationDate
                                        ? parutions.find(p => p.key === formValues.enumPublicationDate)?.text
                                        : t.searchForm.publication}
                                </span>
                                <span className="text-xl">{open === 8 ? "▲" : "▼"}</span>
                            </div>
                            {open === 8 && (
                                <div className="absolute top-full mt-2 left-0 w-[195%] text-black bg-[#fcc986] px-4 py-2 shadow z-10">
                                    <div className="flex flex-col gap-2">
                                        {parutions.map((p) => (
                                            <label key={p.key} className="flex items-center gap-2">
                                                <input
                                                    type="radio"
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
                        </div>

                        <input
                            type="text"
                            name="city"
                            placeholder={t.searchForm.city}
                            value={formValues.city}
                            onChange={handleInputChange}
                            className="border border-[#7b92d6] p-2"
                        />



                    </div>
                    <div className="flex items-center justify-center my-4">
                        <div className="flex items-center justify-center mt-4">
                            <button
                                onClick={handleSubmit}
                                disabled={!isModified}
                                className={`px-6 py-2 flex items-center text-white rounded ${isModified ? "bg-[#4A62AA] hover:bg-[#aa804a]" : "bg-gray-400 cursor-not-allowed"
                                    }`}

                            > {t.searchResult.filter}
                           
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

                    {loading ?
                        (

                            <div className=" text-2xl text-center"><p>{t.searchResult.load}</p>
                                <SkeletonLoader />
                                <SkeletonLoader />
                                <SkeletonLoader />
                            </div>
                        ) : (

                            jobOffers.length > 0 ? (
                                jobOffers.map((offer, index) => (

                                    <div key={offer.id ? `${offer.id}-${index}` : `offer-${index}`} onClick={() => handleClick(offer.id)}
                                        className="bg-white/70  ml-6 shadow-sm mb-2 cursor-pointer hover:shadow-md transition-shadow"
                                    >

                                        <div className="flex flex-col  md:flex-row justify-between  gap-16 ">
                                            <Image
                                                src={offer.logo}
                                                alt="logo"
                                                width={200}
                                                height={20}
                                                className="mx-auto md:mx-0 object-contain"
                                            />
                                            <div className="flex-grow">
                                                <div className="flex flex-col md:flex-row gap-1">
                                                    <div className="flex-1 pl-4 flex justify-center items-center">
                                                        <h2 className="text-lg w-full text-start text-[#4A62AA] font-bold">
                                                            {offer.title}
                                                        </h2>

                                                    </div>

                                                    <div className="bg-[#4A62AA] justify-center   items-center">
                                                        <h2 className="text-lg px-7 text-center  text-white "> {offer.typeString} </h2>
                                                    </div>

                                                    <div className="bg-[#A87A38]  justify-center    items-center">
                                                        <h2 className="text-lg px-7 text-center text-white ">{offer.orgTypeString}</h2>
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-1 gap-24 sm:grid-cols-2 gap-x-4">


                                                    <div className="flex flex-col items-start  pl-4  justify-center text-center gap-2">

                                                        <p className="text-[#A87A38] pt-4 text-start font-semibold">
                                                            {offer.companyName}
                                                        </p>

                                                        <p className="flex items-start   justify-center gap-x-2">
                                                            <Image src="/icons/timer.svg" alt="icon" width={24} height={20} />
                                                            {offer.durationText}

                                                        </p>

                                                        <p className="flex items-center justify-center gap-x-2">
                                                            <Image src="/icons/location.svg" alt="icon" width={24} height={20} />
                                                            {offer.city}
                                                        </p>
                                                    </div>

                                                    <div className="flex flex-col pt-8 items-end ml-40 sm:items-start gap-4">
                                                        <button
                                                            className="border rounded-lg px-4 py-1 border-[#A87A38] font-bold w-full sm:w-auto hover:bg-[#A87A38] hover:text-white"
                                                        >
                                                           {t.searchResult.description}
                                                        </button>
                                                        <p className="w-full sm:w-auto">
                                                            <span>{t.searchResult.published} :</span> {offer.publishedOn}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (<div>
                                <div className="p-8 border-2  ml-6 text-[#4A62AA] bg-white mt-10">
                                    <p className="text-center  justify-center text-lg" dangerouslySetInnerHTML={{ __html: t.searchResult.noData }}>
                                 
                                    </p>
                                    
                                    </div>
                                <div className="mt-4 text-center">
                                    <button onClick={handleSearch1} className="px-6 py-2 hover:bg-blue-600 bg-[#4A62AA] text-white font-bold ">
                                       {t.searchResult.nexSearch}
                                    </button>
                                </div>
                            </div>
                            )
                        )}




                    <div className="">
                        {jobOffers.length > 0 ?
                            (

                                <div className="flex gap-[50%] justify-start ml-36 mt-16">
                                    <div className="flex justify-between gap-4 mt-4">
                                        <button
                                            onClick={handlePrevPage}
                                            disabled={pagination.first}
                                            className="px-4 py-2 bg-gray-300 text-black font-bold disabled:opacity-50"
                                        >
                                            ←
                                        </button>
                                        <span className="text-sm text-white mt-2">
                                            Page {pagination.pageNumber + 1}   {t.searchResult.sur} {pagination.totalPages}
                                        </span>
                                        <button
                                            onClick={handleNextPage}
                                            disabled={pagination.last}
                                            className="px-4 py-2 bg-blue-600 text-white font-bold disabled:opacity-50"
                                        >
                                            →
                                        </button>
                                    </div>

                                    <div className=" px-4 py-1 flex items-end text-center">
                                        <button onClick={handleSearch1} className="px-6 py-2  hover:bg-blue-600 bg-[#a88137] rounded-xl text-white font-bold ">
                                          {t.searchResult.nexSearch}
                                        </button>  </div>

                                </div>
                            ) : (<div>



                            </div>
                            )}
                    </div>
                </div>

            </div>

        </div>
    );
}
