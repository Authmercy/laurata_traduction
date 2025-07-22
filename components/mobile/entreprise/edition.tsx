"use client";

import UsePosterService from "@/service/service_posterStage";
import { useRouter } from "next/router";

import en from '@/i18/en/entreprise/Editer.json';
import fr from '@/i18/fr/entreprise/Editer.json';

import { useState } from "react";
import Navbar from "../navbar/navbar";
import FooterMobile from "../footer/footerEnd";

export default function EditionOffreMobile() {

    const {
        successMessage,
        elements,
        handleRadioChange,
        handleCheckboxChange,
        errorMessage,
        setErrorMessage,
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
        setSectors,
        status,
        employerSuggestions,
        setEmployerSuggestions,
        showSuggestions,
        setShowSuggestions,
        setStatus,
        Levels,
        handleToggle,
        setLevels,
        setDurations,
        durations,
        contrats,
        setContrats,
        parutions,
        setParutions,
        open,
        setOpen,
        foas, handleSubmit,
        handleChange,
        setSelectedOrgTypes, updateElement,
        setElements,


    } = UsePosterService()


    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : fr;


    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileMenuOpen2, setIsMobileMenuOpen2] = useState(false);

    const handleClick1 = () => {
        router.push("/entreprise/poster");
    };
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
                    <div className="justify-center p-2 text-center text-xl font-bold uppercase bg-[#414040] text-white">
                        <p>     {t.title}</p>
                    </div>




                    <form onSubmit={handleSubmit} className="p-2" >
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
                        <div className="grid grid-cols-1   gap-2 mt-8 ">
                            <div className="relative">

                                <input
                                    type="text"
                                    name="employer"
                                    placeholder={t.Employeur}
                                    value={elements.employer}
                                    onChange={handleChange}
                                    className="mt-1 w-full font-bold bg-white/70  p-2  placeholder:text-[#4A62AA] shadow-sm   focus:ring-white focus:border-white" required
                                />
                                {showSuggestions && employerSuggestions.length > 0 && (
                                    <ul className="absolute z-10 bg-white border w-full mt-1 shadow-md max-h-40 overflow-y-auto">
                                        {employerSuggestions.map(emp => (
                                            <li
                                                key={emp.id}
                                                className="p-2 hover:bg-blue-100 cursor-pointer text-sm"
                                                onClick={() => {
                                                    setElements(prev =>
                                                        updateElement(prev, {
                                                            employer: emp.name,
                                                            city: emp.city,
                                                            employerDesc: emp.description,
                                                            logo: emp.logo,
                                                            employerType: [emp.type]
                                                        })
                                                    );
                                                    setSelectedOrgTypes(emp.type);
                                                    setShowSuggestions(false);
                                                }}
                                            >
                                                {emp.name} — {emp.city}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>

                            <div>

                                <div className="relative border  bg-white/70    placeholder:text-[#4A62AA] shadow-sm  focus:ring-white focus:border-white font-extrabold text-[#4A62AA] p-2">
                                    <div className="w-full flex justify-between items-center cursor-pointer" onClick={() => handleToggle(5)}>
                                        <span className="truncate  text-sm">

                                            {selectedOrgTypes
                                                ? status.find(d => d.key === selectedOrgTypes)?.text
                                                : t.status
                                            }
                                        </span>
                                        <span className="text-xl">{open === 5 ? "▲" : "▼"}</span>
                                    </div>
                                    {open === 5 && (
                                        <div className="absolute top-full  left-0  w-full  text-black bg-white p-4 shadow z-10">
                                            <div className="flex flex-col gap-2">
                                                {status.map((s, index) => (
                                                    <label key={s.key} className="flex  font-normal items-center gap-2">
                                                        <input
                                                            type="radio"
                                                            value={s.key}
                                                            checked={selectedOrgTypes === s.key}
                                                            onChange={() => handleRadioChange('employerType', s.key)}
                                                            className="accent-blue-500"
                                                        />
                                                        {s.text}
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div>

                                <input
                                    type="text"
                                    name="city"
                                    placeholder={t.Ville}
                                    value={elements.city}
                                    onChange={handleChange}
                                    className="w-full font-bold bg-white/70  p-2  placeholder:text-[#4A62AA] shadow-sm   focus:ring-white focus:border-white"
                                />
                            </div>


                        </div>


                        <div className="flex  mt-2 text-center">

                            <input
                                type="text"
                                name="title"
                                value={elements.title}
                                onChange={handleChange}
                                placeholder={t.Poste} required
                                className=" w-full font-bold bg-white/70  p-2  placeholder:text-[#4A62AA] shadow-sm text-black  focus:ring-white focus:border-white"
                            />


                        </div>
                        <div className="flex  mt-2 text-center">

                            <div className="relative border  w-full bg-white/70 p-2 text-[#4A62AA]">
                                <div className="w-full flex justify-between items-center cursor-pointer" onClick={() => handleToggle(1)}>
                                    <span className="truncate  text-start font-bold w-full" title={selectedSectors.map(k => foas.find(f => f.key === k)?.text).join(', ')}>
                                        {selectedSectors.length
                                            ? foas.filter(f => selectedSectors.includes(f.key)).map(f => f.text).join(', ')
                                            : t.Secteur}
                                    </span>
                                    <span className="text-xl">{open === 1 ? "▲" : "▼"}</span>
                                </div>
                                {open === 1 && (
                                    <div className="absolute top-full  left-0 w-full text-black bg-white p-4 shadow z-10">
                                        <div className="grid grid-cols-2 gap-4">
                                            {foas.map((foa, index) => (
                                                <label key={foa.key} className="flex items-center  text-start gap-2">
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

                        </div>
                        <div className="flex   mt-2 font-bold text-center">

                            <input
                                placeholder={t.Ref}
                                type="text"
                                name="reference"
                                value={elements.reference}
                                onChange={handleChange}
                                className=" w-full  bg-white/70  p-2  placeholder:text-[#4A62AA] shadow-sm   focus:ring-white focus:border-white"
                            />

                        </div>
                        <div className="grid grid-cols-1  md:ml-10  md:grid-cols-3 gap-2 mt-2">
                            <div>
                                <div className="relative border bg-white/70  p-2 text-[#4A62AA]">
                                    <div className="w-full flex justify-between items-center cursor-pointer" onClick={() => handleToggle(4)}>
                                        <span className="truncate  font-bold text-sm" title={
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
                                                : t.Contrat}

                                        </span>
                                        <span className="text-xl">{open === 4 ? "▲" : "▼"}</span>
                                    </div>
                                    {open === 4 && (
                                        <div className="absolute top-full  left-0 w-full text-black bg-white  px-4 py-2 shadow z-10">
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
                            </div>
                            <div>
                                <div className="relative border bg-white/70  p-2 text-[#4A62AA]">
                                    <div className="w-full flex justify-between items-center cursor-pointer" onClick={() => handleToggle(2)}>
                                        <span className="truncate font-bold text-sm" title={selectedLevels.map(k => Levels.find(d => d.key === k)?.text).join(', ')}>
                                            {selectedLevels.length
                                                ? Levels.filter(d => selectedLevels.includes(d.key)).map(d => d.text).join(', ')
                                                : t.Niveau}
                                        </span>
                                        <span className="text-xl">{open === 2 ? "▲" : "▼"}</span>
                                    </div>
                                    {open === 2 && (
                                        <div className="absolute top-full  left-0 w-full text-black bg-white p-4 shadow z-10">
                                            <div className="flex flex-col gap-2">
                                                {Levels.map((level, index) => (
                                                    <label key={level.key} className="flex items-center gap-2">
                                                        <input
                                                            type="checkbox"
                                                            value={level.key}
                                                            checked={selectedLevels.includes(level.key)}
                                                            onChange={() => handleCheckboxChange('level', level.key)}
                                                        />
                                                        {level.text}
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div>
                                <div>

                                    <input
                                        type="text"
                                        name="duration"
                                        placeholder={t.Duration}
                                        value={elements.duration}
                                        onChange={handleChange}
                                        className=" w-full font-bold bg-white/70  p-2  placeholder:text-[#4A62AA] shadow-sm   focus:ring-white focus:border-white"
                                    />
                                </div>

                            </div>
                        </div>

                        <div className="mt-2 grid grid-cols-1  md:ml-10  md:grid-cols-3 gap-2">
                            <div>
                                <label className="block text-white font-bold">{t.Dpublication}</label>
                                <input
                                    type="date"
                                    name="publicationDate"
                                    value={
                                        elements.publicationDate instanceof Date && !isNaN(elements.publicationDate.getTime())
                                            ? elements.publicationDate.toISOString().split('T')[0]
                                            : ''
                                    }

                                    onChange={handleChange}
                                    className="mt-1 w-full bg-white/70 p-2 placeholder:text-white shadow-sm focus:ring-white focus:border-white"
                                />

                            </div>
                            <div>
                                <label className=" block font-bold   text-white">{t.Logo}</label>
                                <input
                                    type="file"
                                    name="logo"
                                    placeholder="Logo"
                                    onChange={handleChange}
                                    className="mt-1 w-full  bg-white/70  p-2  placeholder:text-white shadow-sm  focus:ring-white focus:border-white"
                                />
                            </div>

                        </div>
                        <div className="bg-white/50 md:ml-10 mt-2">
                            <div className="p-2 md:pl-10 text-gray-700">
                                <label className="block   text-[#4A62AA] font-extrabold">{t.Presentation}</label>
                                <textarea
                                    name="employerDesc"
                                    value={elements.employerDesc}
                                    onChange={handleChange}
                                    rows={4}
                                    className="mt-1 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div className="p-2  md:pl-10">
                                <label className="block   text-[#4A62AA] font-extrabold">{t.missions}</label>
                                <textarea
                                    name="tasks"
                                    value={elements.tasks}
                                    onChange={handleChange}
                                    rows={4}
                                    className="mt-1 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div className="p-2  md:pl-10">
                                <label className="block   text-[#4A62AA] font-extrabold">{t.Profil}</label>
                                <textarea
                                    name="skills"
                                    value={elements.skills}
                                    onChange={handleChange}
                                    rows={4}
                                    className="mt-1 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div className="p-2 md:pl-10">
                                <label className="block   text-[#4A62AA] font-extrabold">{t.Payement}</label>
                                <textarea
                                    name="benefits"
                                    value={elements.remuneration}
                                    onChange={handleChange}
                                    rows={4}
                                    className="mt-1 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            <div className="p-2  md:pl-10">
                                <div>
                                    <label className="block   text-[#4A62AA] font-extrabold">{t.dLimite}</label>
                                    <input
                                        type="date"
                                        name="deadline"
                                        value={
                                            elements.deadline instanceof Date && !isNaN(elements.deadline.getTime())
                                                ? elements.deadline.toISOString().split('T')[0]
                                                : ''
                                        }

                                        onChange={handleChange}
                                        className="mt-1 w-full border border-gray-300 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                            </div>
                            <div className="p-2 md:pl-10">
                                <div>
                                    <label className="block    text-[#4A62AA] font-extrabold">{t.Instructions}</label>
                                    <textarea
                                        name="apply"
                                        value={elements.apply}
                                        placeholder={t.InstructionPlaceholder}
                                        onChange={handleChange}
                                        rows={3}
                                        className="mt-1 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                            </div>

                        </div>
                        <div className="flex flex-row justify-center my-10 gap-24">

                            <button type="submit" className=" bg-orange-500  text-white py-3  px-10  rounded-lg font-bold hover:bg-[#3a62d8]">
                                {t.Valider}
                            </button>



                            <button onClick={handleClick1} className=" bg-[#5f5d5d] text-white py-3  px-10  rounded-lg font-bold hover:bg-[#a7a2a2]">
                                {t.Annuler}
                            </button>
                        </div>

                    </form>
                    <footer className="w-full bg-blue-900    text-white text-center">
                        <FooterMobile />
                    </footer>
                </div>
            </div>
        </div>

    );
}