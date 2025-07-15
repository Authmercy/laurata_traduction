"use client";

import UsePosterService from "@/service/service_posterStage";
import router, { useRouter } from "next/router";
import { useState } from "react";
import Navbar from "../navbar/navbar";
import FooterMobile from "../footer/footerEnd";

export default function EditionOffreMobile() {
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
    const handleClick = () => {
        router.push("/entreprise/edition");
    };

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileMenuOpen2, setIsMobileMenuOpen2] = useState(false);

 const handleClick1 = () => {
    router.push("/entreprise/edition");
  };
    return (
        <div>
            <div className="min-h-screen h-auto  overflow-auto  w-screen bg-cover  text-justify bg-center bg-no-repeat " style={{ backgroundImage: "url('/images/backgroundmobile.jpeg')" }}>

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
                        <p>     POSTER UN STAGE </p>
                    </div>



                    <div className="p-2  mt-8 ">
                        <div className="grid grid-cols-1 md:ml-10  md:grid-cols-3 gap-2 mt-6">
                            <div>

                                <input
                                    type="text"
                                    name="employer"
                                    placeholder="Employeur"
                                    value={formData.employer}
                                    onChange={handleChange}
                                    className="mt-1 w-full bg-white/70  p-2  placeholder:text-[#4A62AA] shadow-sm   focus:ring-white focus:border-white"
                                />
                            </div>

                            <div>
                               <div
                  className="bg-white/70 flex justify-between placeholder-[#4A62AA] required p-2 "
                  onClick={() => handleToggle(4)}
                >
                  <span className="truncate " title={selectedOrgTypes.map(k => status.find(s => s.key === k)?.text).join(', ')}>
        {selectedOrgTypes.length
          ? status.filter(s => selectedOrgTypes.includes(s.key)).map(s => s.text).join(', ')
          : 'Status'}
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
                            <div>
                                <input
                  type="text"
                  name="city"
                  placeholder=" Ville"
                  className="border bg-white/70 0   w-full  p-2  placeholder-[#4A62AA]  border-[#7b92d6] "
            

                  onChange={handleChange}


                />
                            </div>
                        </div>


                        <div className="flex md:ml-10 mt-1 text-center">

                            <input
                                type="text"
                                name="jobTitle"
                                value={formData.jobTitle}
                                onChange={handleChange}
                                placeholder="Intitulé du poste"
                                className="mt-1 w-full  bg-white/70  p-2  placeholder:text-[#4A62AA] shadow-sm text-black  focus:ring-white focus:border-white"
                            />
                        </div>
                        <div className="flex md:ml-10 mt-2 text-center">

                          <div
                  className="bg-white/70 flex justify-between  w-full placeholder-[#4A62AA] required p-2  "
                  onClick={() => handleToggle(1)}
                >
                <span className="truncate  text-start w-full" title={selectedSectors.map(k => foas.find(f => f.key === k)?.text).join(', ')}>
        {selectedSectors.length
          ? foas.filter(f => selectedSectors.includes(f.key)).map(f => f.text).join(', ')
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
                        <div className="flex md:ml-10  mt-1  text-center">

                            <input
                                placeholder="Référence de l’offre"
                                type="text"
                                name="reference"
                                value={formData.reference}
                                onChange={handleChange}
                                className="mt-1 w-full  bg-white/70  p-2  placeholder:text-[#4A62AA] shadow-sm   focus:ring-white focus:border-white"
                            />

                        </div>
                        <div className="grid grid-cols-1  md:ml-10  md:grid-cols-3 gap-2  mt-2">
                            <div>
                                  <div
                  className="bg-white/70 flex justify-between placeholder-[#4A62AA] required p-2  "
                  onClick={() => handleToggle(5)}
                >   <span className="truncate  " title={
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
  : 'Contrat'}

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
                            </div>
                            <div>
             <div
                  className="bg-white/70 flex justify-between placeholder-[#4A62AA] required p-2  "
                  onClick={() => handleToggle(2)}
                >
                  <span className="truncate " title={selectedLevels.map(k => Levels.find(d => d.key === k)?.text).join(', ')}>
        {selectedLevels.length
          ? Levels.filter(d => selectedLevels.includes(d.key)).map(d => d.text).join(', ')
          : 'Niveau'}</span>
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
                            <div>
                               <div
                  className="bg-white/70 flex justify-between placeholder-[#4A62AA] required p-2  "
                  onClick={() => handleToggle(3)}
                >
          <span className="truncate ">
        {selectedDuration
          ? durations.find(d => d.key === selectedDuration)?.text
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

                        <div className="mt-2 grid grid-cols-1  md:ml-10  md:grid-cols-3 gap-2">
                            <div className=" bg-white/70 ">
                                <label className="block text-[#4A62AA] p-2   font-bold">Date de publication</label>
                                <input
                                    type="date"
                                    name="publicationDate"
                                    value={formData.publicationDate}
                                    onChange={handleChange}
                                    placeholder=""
                                    className="mt-1 w-full   p-2  placeholder:text-[#4A62AA] shadow-sm   focus:ring-white focus:border-white"
                                />
                            </div>
                            <div className=" bg-white/70 ">
                                <label className=" block font-bold p-2   text-[#4A62AA]">Logo</label>
                                <input
                                    type="file"
                                    name="logo"
                                    placeholder="Logo"
                                    onChange={handleLogoUpload}
                                    className="mt-1 w-full  p-2  placeholder:text-[#4A62AA] shadow-sm  focus:ring-white focus:border-white"
                                />
                            </div>

                        </div>
                        <div className="bg-white/50 md:ml-10 mt-2">
                            <div className="p-2 md:pl-10 text-gray-700">
                                <label className="block   text-[#4A62AA] font-extrabold">Présentation de l'employeur</label>
                                <textarea
                                    name="employerPresentation"
                                    value={formData.employerPresentation}
                                    onChange={handleChange}
                                    rows={4}
                                    className="mt-1 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div className="p-2  md:pl-10">
                                <label className="block   text-[#4A62AA] font-extrabold">Vos missions</label>
                                <textarea
                                    name="missions"
                                    value={formData.missions}
                                    onChange={handleChange}
                                    rows={4}
                                    className="mt-1 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div className="p-2  md:pl-10">
                                <label className="block   text-[#4A62AA] font-extrabold">Profil & Compétences recherchés</label>
                                <textarea
                                    name="profile"
                                    value={formData.profile}
                                    onChange={handleChange}
                                    rows={4}
                                    className="mt-1 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div className="p-2 md:pl-10">
                                <label className="block   text-[#4A62AA] font-extrabold">Rémunération et autres avantages</label>
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
                                    <label className="block   text-[#4A62AA] font-extrabold">Date limite de candidature</label>
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
                                    <label className="block    text-[#4A62AA] font-extrabold">Instructions pour postuler</label>
                                    <textarea
                                        name="applicationInstructions"
                                        value={formData.applicationInstructions}
                                        placeholder="Indiquez comment postuler (ex : dossier physique, via mail ou lien url) et, le cas échéant, le nom et les coordonnées de la personne à contacter."
                                        onChange={handleChange}
                                        rows={3}
                                        className="mt-1 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                            </div>

                        </div>
                        <div className="flex flex-row mx-2 justify-center my-10 gap-16">


                            <button className=" bg-[#4A62AA] text-white py-3  px-10  rounded-lg font-bold hover:bg-[#3a62d8]">
                                Valider
                            </button>

                            <button onClick={handleClick1}  className=" bg-[#5f5d5d] text-white py-3  px-10  rounded-lg font-bold hover:bg-[#a7a2a2]">
                                Annuler
                            </button>
                        </div>

                    </div>
                     <footer className="w-full bg-blue-900    text-white text-center">
                            <FooterMobile />
                          </footer>
                </div>       
                 </div>
        </div>

    );
}