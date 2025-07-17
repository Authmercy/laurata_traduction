"use client";

import UsePosterService from "@/service/service_posterStage";
import { useRouter } from "next/router";
import { useState } from "react";
import en from '@/i18/en/entreprise/Editer.json';
import fr from '@/i18/fr/entreprise/Editer.json';


export default function EditionOffre() {
    const [formData, setFormData] = useState({
        employer: "",
        logo: null,
        status: "",
        jobTitle: "",
        sector: "",
        contract: "",
        level: "",
        duration: "",
        publicationDate: "",
        reference: "",
        city: "",
        employerPresentation: "",
        missions: "",
        profile: "",
        benefits: "",
        applicationDeadline: "",
        applicationInstructions: "",
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        setFormData({ ...formData });
    };
    const {
        foas,
        errorMessage,
        handleRadioChange,
        handleCheckboxChange,
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


    } = UsePosterService()


    const [isEditionOpen, setEditionOpen] = useState(false);



    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : fr;



    return (
        <div id="editer" className="flex-grow pt-2 p-8">
            <div className="flex justify-center">
                <button
                    onClick={() => setEditionOpen(!isEditionOpen)}
                    className=" flex text-center rounded-xl gap-4 font-bold hover:bg-white/70 px-4 py-2 mt-2 text-white hover:text-[#4A62AA] bg-[#ce9545] transition duration-300"
                >
                    <p>      {t.title}</p>
                    <span>{isEditionOpen ? "▲" : "▼"}</span>
                </button></div>
            {isEditionOpen && (
                <div>
                    <div className="grid grid-cols-1  md:ml-10  md:grid-cols-3 gap-6 mt-8 my-4">
                        <div>

                            <input
                                type="text"
                                name="employer"
                                placeholder=  {t.Employeur}
                                value={formData.employer}
                                onChange={handleChange}
                                className="mt-1 w-full font-bold bg-white/70  p-2  placeholder:text-[#4A62AA] shadow-sm   focus:ring-white focus:border-white"
                            />
                        </div>

                        <div>

                            <div className="relative border  bg-white/70    placeholder:text-[#4A62AA] shadow-sm  focus:ring-white focus:border-white font-extrabold text-[#4A62AA] p-2">
                                <div className="w-full flex justify-between items-center cursor-pointer" onClick={() => handleToggle(5)}>
                                    <span className="truncate  text-sm" title={selectedOrgTypes.map(k => status.find(s => s.key === k)?.text).join(', ')}>
                                        {selectedOrgTypes.length
                                            ? status.filter(s => selectedOrgTypes.includes(s.key)).map(s => s.text).join(', ')
                                            : t.Employeur}
                                    </span>
                                    <span className="text-xl">{open === 5 ? "▲" : "▼"}</span>
                                </div>
                                {open === 5 && (
                                    <div className="absolute top-full mt-2 left-0  w-full  text-black bg-white p-4 shadow z-10">
                                        <div className="flex flex-col gap-2">
                                            {status.map((s, index) => (
                                                <label key={s.key} className="flex  font-normal items-center gap-2">
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
                        </div>
                        <div>

                            <input
                                type="text"
                                name="city"
                                placeholder={t.Ville}
                                value={formData.city}
                                onChange={handleChange}
                                className="mt-1 w-full font-bold bg-white/70  p-2  placeholder:text-[#4A62AA] shadow-sm   focus:ring-white focus:border-white"
                            />
                        </div>


                    </div>


                    <div className="flex md:ml-10 text-center">

                        <input
                            type="text"
                            name="jobTitle"
                            value={formData.jobTitle}
                            onChange={handleChange}
                            placeholder={t.Poste}
                            className="mt-1 w-full font-bold bg-white/70  p-2  placeholder:text-[#4A62AA] shadow-sm text-black  focus:ring-white focus:border-white"
                        />


                    </div>
                    <div className="flex md:ml-10 mt-2 text-center">

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
                                <div className="absolute top-full mt-2 left-0 w-full text-black bg-white p-4 shadow z-10">
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

                    </div>
                    <div className="flex md:ml-10  mt-2 font-bold text-center">

                        <input
                            placeholder={t.Ref}
                            type="text"
                            name="reference"
                            value={formData.reference}
                            onChange={handleChange}
                            className="mt-1 w-full  bg-white/70  p-2  placeholder:text-[#4A62AA] shadow-sm   focus:ring-white focus:border-white"
                        />

                    </div>
                    <div className="grid grid-cols-1  md:ml-10  md:grid-cols-3 gap-6 mt-6">
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
                                    <div className="absolute top-full mt-2 left-0 w-full text-black bg-white  px-4 py-2 shadow z-10">
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
                                    <div className="absolute top-full mt-2 left-0 w-full text-black bg-white p-4 shadow z-10">
                                        <div className="flex flex-col gap-2">
                                            {Levels.map((level, index) => (
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
                        </div>
                        <div>
                            <div
                                className="bg-white/70 flex justify-between font-bold placeholder-[#4A62AA] required p-2 px-6 "
                                onClick={() => handleToggle(3)}
                            >
                                <span className="truncate ">
                                    {selectedDuration
                                        ? durations.find(d => d.key === selectedDuration)?.text
                                        : t.Duration}
                                </span>
                                <span className="text-xl">{open === 3 ? "▲" : "▼"}</span>
                            </div>
                            {open === 3 && (
                                <div className=" top-full mt-1 left-0  text-black bg-white p-4  shadow ">
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
                        </div>
                    </div>

                    <div className="mt-6 grid grid-cols-1  md:ml-10  md:grid-cols-3 gap-6">
                        <div>
                            <label className="block text-[#4A62AA] font-bold">{t.Dpublication}</label>
                            <input
                                type="date"
                                name="publicationDate"
                                value={formData.publicationDate}
                                onChange={handleChange}
                                placeholder=""
                                className="mt-1 w-full  bg-white/70  p-2  placeholder:text-[#4A62AA] shadow-sm   focus:ring-white focus:border-white"
                            />
                        </div>
                        <div>
                            <label className=" block font-bold   text-[#4A62AA]">{t.Logo}</label>
                            <input
                                type="file"
                                name="logo"
                                placeholder="Logo"
                                onChange={handleLogoUpload}
                                className="mt-1 w-full  bg-white/70  p-2  placeholder:text-[#4A62AA] shadow-sm  focus:ring-white focus:border-white"
                            />
                        </div>

                    </div>
                    <div className="bg-white/50 md:ml-10 mt-2">
                        <div className="p-2 md:pl-10 text-gray-700">
                            <label className="block   text-[#4A62AA] font-extrabold">{t.Presentation}</label>
                            <textarea
                                name="employerPresentation"
                                value={formData.employerPresentation}
                                onChange={handleChange}
                                rows={4}
                                className="mt-1 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <div className="p-2  md:pl-10">
                            <label className="block   text-[#4A62AA] font-extrabold">{t.missions}</label>
                            <textarea
                                name="missions"
                                value={formData.missions}
                                onChange={handleChange}
                                rows={4}
                                className="mt-1 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <div className="p-2  md:pl-10">
                            <label className="block   text-[#4A62AA] font-extrabold">{t.Profil}</label>
                            <textarea
                                name="profile"
                                value={formData.profile}
                                onChange={handleChange}
                                rows={4}
                                className="mt-1 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <div className="p-2 md:pl-10">
                            <label className="block   text-[#4A62AA] font-extrabold">{t.Payement}</label>
                            <textarea
                                name="benefits"
                                value={formData.benefits}
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
                                    name="applicationDeadline"
                                    value={formData.applicationDeadline}
                                    onChange={handleChange}
                                    className="mt-1 w-full border border-gray-300 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                        </div>
                        <div className="p-2 md:pl-10">
                            <div>
                                <label className="block    text-[#4A62AA] font-extrabold">{t.Instructions}</label>
                                <textarea
                                    name="applicationInstructions"
                                    value={formData.applicationInstructions}
                                   placeholder= {t.InstructionPlaceholder}
                                    onChange={handleChange}
                                    rows={3}
                                    className="mt-1 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-row justify-center mt-10 gap-24">
                        <button className=" bg-[#A87A38] text-white py-3 px-10 rounded-lg font-bold hover:bg-[#855512]">
                        {t.Modifier}
                        </button>

                        <button className=" bg-[#4A62AA] text-white py-3  px-10  rounded-lg font-bold hover:bg-[#3a62d8]">
                          {t.Valider}
                        </button>

                        <button className=" bg-[#5f5d5d] text-white py-3  px-10  rounded-lg font-bold hover:bg-[#a7a2a2]">
                          {t.Annuler}
                        </button>
                    </div>

                </div>)}
        </div>

    );
}

