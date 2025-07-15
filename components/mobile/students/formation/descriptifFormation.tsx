import { useRouter } from "next/router";
import React, { useState } from "react";
import Image from "next/image";
import Navbar from "../../navbar/navbar";
import FooterMobile from "../../footer/footerEnd";
import ServiceFormationDetail from "@/service/service_Formation_Descriptif";
export default function DetailDescriptifFormationMobile() {
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
    router.push("/students/formation");
  };

  const handleClick3 = () => {
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
            <p>               Informations sur la Formation </p>
          </div>



            {formationData ? (
<div>
          <div className="flex-grow mt-8 ">

            <div className="  shadow-sm mb-2 cursor-pointer hover:shadow-md transition-shadow">
              <div className="flex flex-col gap-2 w-full">
                <div className=" text-white text-xl px-4 py-1  text-center">
                  <p className="text-center"> {formationData.degreeName}</p>
                </div>
                <div className="flex flex-col justify-end space-y-1 px-3">
                  <div className="  bg-white py-1 px-4 text-center">
                    {formationData.trainingsType}
                  </div>
                  <div className="text-white bg-blue-500 py-1 text-center">
                    {formationData.deliveryMethods}
                  </div>
                </div>
              </div>


              <div className="flex flex-col border-2  my-2 border-[#9b6e0f] md:flex-row bg-white p-2 justify-center gap-4">


                <Image
                  src={formationData.logo}
                  alt="LogoFormation"
                  width={100}
                  height={20}
                  className="mx-auto md:mx-0 object-contain"
                />


                <div className="my-4 text-center">

                  <h3 className="text-lg font-bold mb-2">{formationData.schoolName}</h3>
                  <p className="text-[#4A62AA] ">
                    {formationData.faculty} <br />
                    {formationData.schoolType}
                  </p>
                </div>

              </div>

              <div className="bg-white p-4">
                <div id="domain" className="mb-4">
                  <h4 className="uppercase text-[#1942bd] text-lg">Domaine</h4>
                  <p className="text-black ">{formationData.studyField}</p>
                </div>
                <div id="admission" className="mb-4">
                  <h4 className="uppercase text-[#1942bd] text-lg">Admission & Durée</h4>
                  <p className="text-black ">
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
                <div id="cout" className="mb-4">
                  <h4 className="uppercase text-[#1942bd] text-lg">Pension</h4>
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
                  <h4 className="uppercase text-[#1942bd] text-lg">Langue d’enseignement</h4>
                  <p className="text-black ">{formationData.languages}</p>
                </div>


                <div id="contact" className="mb-6">
                  <h4 className="uppercase text-[#1942bd] text-lg">Contact</h4>
                  <p className="text-black text-justify">
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
          </div>



        </div> ) : (
          <div>Loading...</div>
        )}

 <div className="flex justify-center my-4 font-bold  gap-2">
             <button
                    onClick={goToPreviousOffer}
                  
                    className={`px-4 py-2 rounded-2xl ${currentOfferIndex === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#9b6e0f]  hover:bg-blue-200 hover:text-[#4A62AA]'} text-white`}
                  >
                       ←
                  </button>
                  
             
          
            <button
                    onClick={goToNextOffer}
                    disabled={currentOfferIndex === offerList.length - 1}
                    className={`px-4 py-2 rounded-2xl ${currentOfferIndex === offerList.length - 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#9b6e0f] hover:bg-blue-200 hover:text-[#4A62AA]'} text-white`}
                  >
                      →
                  </button></div>
        <div className="flex   font-bold justify-center items-center flex-row gap-4">

          <button
            onClick={handleSearch}
            className="bg-[#1942bd] text-white  w-44 py-2 rounded-2xl hover:bg-gray-200 hover:text-[#4A62AA]"
          >
            Plaquette
          </button>
          <button className="bg-[#9b6e0f] text-white w-44  py-2 rounded-2xl hover:bg-gray-200 hover:text-[#4A62AA]">
            Fiche d'inscription
          </button>

        </div>
        </div>
        <div className="flex justify-center mt-1 px-1 gap-4 py-5   font-bold ">
          <button onClick={() => handleClick2()} className="bg-[#9b6e0f] text-white w-44  py-2 rounded-2xl hover:bg-gray-200 hover:text-[#4A62AA]">
            Retour aux résultats
          </button>
          <button onClick={() => handleClick3()} className="bg-[#1942bd] text-white w-44  py-2 rounded-2xl hover:bg-gray-200 hover:text-[#4A62AA]">
            Nouvelle recherche
          </button>
        </div>
      </div>
   <footer className="w-full bg-blue-900    text-white text-center">
                <FooterMobile />
              </footer>
    </div>
  );

};
