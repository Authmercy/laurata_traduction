import { useRouter } from "next/router";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ServiceFormationDetail from "@/service/service_Formation_Descriptif";

export default function DetailDescriptifFormation() {
  const router = useRouter();
  const { id } = router.query;
  const [active, setActive] = useState<string | null>(null);

  const handleClick = (id: string) => {
    setActive(id);
  };
  if (!id) {
    return <p>Loading...</p>;
  }


  const handleSearch = () => {
    router.push("/students/formations");
  };


  const {
 goToPreviousOffer,
 goToNextOffer,
 offerList,
 setOfferList,
 formationData,
 setOfferDetails,
 errorMessage,
 currentOfferIndex,
 handleClick2
  
  } = ServiceFormationDetail()
  




  return (
    <div className="pl-10 pt-10">

      <div className="flex flex-row justify-between items-center mt-3 p-2 w-full ">
        <h1 className="bg-[#4A62AA] text-white text-xl uppercase text-center font-bold w-96 p-2">
          Informations sur la Formation
        </h1>
        <button onClick={handleSearch} className="bg-[#A87A38] text-white px-4  py-2">
          Nouvelle recherche
        </button>
      </div>


      <div className="   mb-10  gap-6 p-2">
        <div className="flex-grow">
               {formationData ? (
          <div className="  shadow-sm mb-2 cursor-pointer hover:shadow-md transition-shadow">
            <div className="flex flex-row gap-2 w-full">
           
              <div className="bg-[#A87A38] text-white text-xl flex justify-center items-center w-10/12  text-center">
                <p className="text-center"> {formationData.degreeName}</p>
              </div>
              <div className="flex flex-col justify-end w-5/12 ">
                <div className="border border-[#4A62AA]  bg-white py-1 px-4 text-center">
                  {formationData.trainingsType}
                </div>
                <div className="text-white bg-[#4A62AA] py-1 text-center">
                 
                        {formationData.deliveryMethods.map((degree: string, index: number) => (
                        <p key={index}>{degree}</p>
                      ))}
                </div>
              </div>
                 
            </div>


            <div className="flex flex-col md:flex-row bg-[#ffff] justify-center gap-8">


              <Image
                src={formationData.logo}
                alt="LogoFormation"
                width={100}
                height={20}
                className="mx-auto md:mx-0 object-contain"
              />


              <div className="my-4 text-center">

                <h3 className="text-xl font-bold mb-2">{formationData.schoolName}</h3>
              {formationData?   (<p className="text-[#4A62AA] ">
                  {formationData.faculty} </p>
                 ) : ( <p></p> ) } 
                   <p className="text-[#4A62AA] ">
                   {formationData.schoolType} </p>
                 
                
              </div>

            </div>
            <div className="w-full flex flex-col lg:flex-row justify-center gap-1 mt-2">
              {[
                { id: "domain", label: "Domaine" },
                { id: "admission", label: "Admission & Durée" },
                { id: "cout", label: "Pension" },
                { id: "langue", label: "Langue d’enseignement" },
                { id: "contact", label: "Contact" },
              ].map(({ id, label }) => (
                <Link
                  key={id}
                  href={`#${id}`}
                  onClick={() => handleClick(id)}
                  className={`
        flex-1 lg:flex-auto  
        min-w-0             
        h-10 border border-[#4A62AA]
        px-4               
        text-center 
        flex items-center justify-center 
        transition-all 
        whitespace-nowrap   
        overflow-hidden text-ellipsis
        ${active === id
                      ? "bg-white text-[#4A62AA]"
                      : "bg-[#4A62AA] text-white"
                    }
      `}
                >
                  <p className="truncate">{label}</p>
                </Link>
              ))}
            </div>
            <div className="bg-white p-4">
              <div id="domain" className="mb-4">
                <h4 className="uppercase">Domaine</h4>
                <p className="text-black ">{formationData.studyField}</p>
              </div>
              <div id="admission" className="mb-4">
                <h4 className="uppercase">Admission & Durée</h4>
              <div className="mx-4">   <p className="text-black ">
                  {formationData.requirements.text} 
               
                </p>
             
               {Array.isArray(formationData.requirements.admissionTypes) && formationData.requirements.admissionTypes.length > 0 ? (
                                    <div className="space-y-2">
                                      <p>
                                        Type d'admissions
                                      </p>
                                        {formationData.requirements.admissionTypes.map((fee:any, index:any) => (
                                            <p className="text-black  " key={index}>- {fee}</p>
                                        ))}
                                    </div>
                                ) : (
                                    <p></p>
                                )}
                    {Array.isArray(formationData.requirements.degrees) && formationData.requirements.degrees.length > 0 ? (
                                    <div className="space-y-2">
                                      <p>
                                        Diplômes requis
                                      </p>
                                        {formationData.requirements.degrees.map((fee:any, index:any) => (
                                            <p className="text-black  " key={index}>- {fee}</p>
                                        ))}
                                    </div>
                                ) : (
                                    <p></p>
                                )}
               </div>
                
              </div>
              <div id="cout" className="mb-4">
                <h4 className="uppercase">Pension</h4>
                <p className="text-black ">{formationData.fees.text}</p>

                                {Array.isArray(formationData.fees.categories) && formationData.fees.categories.length > 0 ? (
                                    <div className="space-y-2">
                                        {formationData.fees.categories.map((fee:any, index:any) => (
                                            <p className="text-black  " key={index}>- {fee}</p>
                                        ))}
                                    </div>
                                ) : (
                                    <p></p>
                                )}
               
              </div>
              <div id="langue" className="mb-4">
                <h4 className="uppercase">Langue d’enseignement</h4>
                <p className="text-black ">{formationData.languages}</p>
              </div>


             <div id="contact" className="mb-8">
  <h4 className="uppercase">Contact</h4>
  <p className="text-black">
    <h2 className=" font-bold mb-2">{formationData.schoolName}</h2>
    Boîte postale : {formationData.contacts?.postalBox || ""}<br />
    Adresse : {formationData.contacts?.address || ""}<br />
    Tél. : {formationData.contacts?.phone || ""}<br />
    Courriel : {formationData.contacts?.email || ""}<br />
    Internet : {formationData.contacts?.website ? (
      <a
        href={`https://${formationData.contacts.website}`}
        className="text-blue-500 hover:underline"
      >
        {formationData.contacts.website}
      </a>
    ) : "Non disponible"}

  </p>
</div>

            </div>
          </div>
             ) : (
          <div>Loading...</div>
        )}
        </div>


        <div className="flex flex-row mt-10 gap-96">
          <div className="flex ml-10  font-bold justify-start flex-row gap-16">

            <button
              onClick={handleSearch}
              className="bg-[#4A62AA] text-white px-6 py-2 rounded-2xl hover:bg-gray-200 hover:text-[#4A62AA]"
            >
              Plaquette
            </button>
            <button className="bg-[#9b6e0f] text-white px-12 py-2 rounded-2xl hover:bg-gray-200 hover:text-[#4A62AA]">
              Fiche d'inscription
            </button>
          </div>
          
          <div className="flex justify-end font-bold  gap-2">
             <button
                    onClick={goToPreviousOffer}
                  
                    className={`px-4 py-2 rounded-2xl ${currentOfferIndex === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#4A62AA]  hover:bg-blue-200 hover:text-[#4A62AA]'} text-white`}
                  >
                       ←
                  </button>
                  
                   <button onClick={() => handleClick2()} className="bg-[#9b6e0f] text-white px-12 py-2 rounded-2xl hover:bg-gray-200 hover:text-[#4A62AA]">
            Retour aux résultats
          </button>
          
            <button
                    onClick={goToNextOffer}
                    disabled={currentOfferIndex === offerList.length - 1}
                    className={`px-4 py-2 rounded-2xl ${currentOfferIndex === offerList.length - 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#4A62AA] hover:bg-blue-200 hover:text-[#4A62AA]'} text-white`}
                  >
                      →
                  </button></div>
        </div></div>
    </div>
  );

};
