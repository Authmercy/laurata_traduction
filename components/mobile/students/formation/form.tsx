"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../navbar/navbar";
import { Brand } from "@/service/Brand";
import FooterMobile from "../../footer/footerEnd";
import ServiceFormationFilter from "@/service/service_Formation";
export default function OffreFormationMobile() {
  

  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileMenuOpen2, setIsMobileMenuOpen2] = useState(false);


   const [brand, setBrand] = useState<Brand[]>([]);
    useEffect(() => {
        const fetchsetBrand = async () => {
            const brand: Brand[] = [
               
                {
                    id: 1,
                    name: "Medicare",
                    url: "",
                    path: "/images/logo/medicare.png"
                },
              

            ];
            setBrand(brand);
        };

        fetchsetBrand();
    }, []);

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
       isFormEmpty,
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
   
     isSearchDisabled
 
 
   } = ServiceFormationFilter()
 


  return (
    <div>
    <div className="min-h-screen   bg-[#34538C]  overflow-auto  w-screen bg-cover  text-justify bg-center bg-no-repeat "  >
         
        <Navbar
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          isMobileMenuOpen2={isMobileMenuOpen2}
          setIsMobileMenuOpen2={setIsMobileMenuOpen2}
        />

        <div className="justify-center p-2 text-center text-xl font-bold uppercase bg-[#9b6e0f] text-white">
          <p>RECHERCHER UNE FORMATION</p>
        </div>
        <form>


          <div className="flex flex-col gap-2   text-white mx-10 mt-8 ">
            <div className=" items-center text-center pb-1">
              Répertoire des formations post-bac offertes par les Universités d'État, les Établissements Publics à Statut Particulier,
              les Institutions Privées d'Enseignement Supérieur agréées et les Institutions  Sous-régionales.

            </div>

          </div>

          <div className="grid grid-cols sm:flex  sm:flex-col text-[#4A62AA] md:grid-cols-8 gap-1 p-6 pb-2">
            <input
              type="text"
                  placeholder="Mot clé (ex : décentralisation)"
                  name="school"
              value={filters.school}
    onChange={handleChange}
              className="bg-white/70  placeholder-[#4A62AA] required:  p-2 px-6 "
            />
  <div className="relative  bg-white/70 p-2 text-[#4A62AA]">
                  <div className="w-full flex justify-between  items-center cursor-pointer " onClick={() => handleToggle(4)}>
                       <span className="truncate w-full px-6 text-sm" title={
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
                        : 'Diplôme'}

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
    placeholder="Ville"
    value={filters.city}
    onChange={handleChange}
      className="bg-white/70  placeholder-[#4A62AA] required:  p-2 px-6 "
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
            <div className="flex justify-center">
                <button onClick={handleSearch}
  type="submit"
    disabled={isFormEmpty()}
                    className={`w-[62%] sm:w-[50%]       
                            font-bold rounded-md py-1 transition-transform  duration-200 
          ${clicked ? 'bg-[#4A62AA]  text-white border-white' : ' '}
           ${isFormEmpty()
                    ? "bg-gray-400 cursor-not-allowed"
                    : " bg-white  text-[#293c75] hover:text-white"
                    }
         ] '`}
                  >
                    Lancer ma recherche
                  </button>
            </div>

          </div>



        </form>

       
        <div className="flex  my-10 bg-white items-center justify-center  ">
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
                        width={200}
            height={150}
            className="flex  mt-10 justify-center  "
                  /> </a>
              </div></div>
          ))}
        </div>
         
      </div>

   <footer className="w-full bg-blue-900    text-white text-center">
                <FooterMobile />
              </footer>






    </div>
  );
}
