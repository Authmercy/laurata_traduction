import router, { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "../../navbar/navbar";
import FooterMobile from "../../footer/footerEnd";
import ServiceInternshipDetail from "@/service/service_Internship_Descriptif";

export default function DetailDescriptifMobile() {
  
const {
goToPreviousOffer,
goToNextOffer,
offerList,
setOfferList,
offerDetails,
setOfferDetails,
errorMessage,
currentOfferIndex,
handleClick1
 
 } = ServiceInternshipDetail()
 
 


  const handleClick = (id: number) => {
    router.push(`/students/postuler/${id}`);
  };
  

  const handleSearch = () => {
    router.push("/students/offresStage");
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
            <p> Descriptif du Poste</p>
          </div>


          <div

            className="bg-white/70   mt-2  p-2 py-4 shadow-sm mb-2 hover:shadow-md transition-shadow"
          >
            {offerDetails ? (
              <div>
                <div
                  key={offerDetails.id}
               
                  
                  className=" p-2 shadow-sm mb-2  cursor-pointer hover:shadow-md transition-shadow"
                >

                  <h2 className="text-lg text-center text-[#4A62AA] font-bold">{offerDetails.title}</h2>


                  <p className="text-orange-700  text-center font-semibold">
                    {offerDetails.companyName}
                  </p>
                  <div className="flex flex-row text-sm items-center mt-2 text-center gap-5">

                    <p className="flex items-center justify-center gap-">
                      <Image src="/icons/timer.svg" alt="icon" width={20} height={20} />
                      {offerDetails.durationText}
                    </p>

                    <p className="flex items-center justify-center gap-">
                      <Image src="/icons/location.svg" alt="icon" width={20} height={20} />
                      {offerDetails.city}
                    </p>
                      <p className="">
                    <span>Publié le : </span>25-06-08
                  </p>
                  </div>
                

                  <div className="bg-white/70 mt-2 p-4">
                    <div className="mt-4 text-black">
                      <h3 className="text-md font-bold  text-[#9b6e0f]">Présentation de l'employeur</h3>
                      <p>{offerDetails.description}</p>
                    </div>
                    <div className="mt-4 text-black">
                      <h3 className="text-md font-bold  text-[#9b6e0f]">Vos Missions</h3>
                      <ul className="list-disc ml-6">
                        {offerDetails.tasks.map((task: string, index: number) => (
                          <li key={index}>{task}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-4 text-black">
                      <h3 className="text-md font-bold  text-[#9b6e0f]">Profil & Compétences recherchés</h3>
                    {offerDetails.degrees ? (
                                      <div>
                                        <p >
                                            Diplôme
                                        </p>
                                        <ul className="list-disc ml-6">
                                          {offerDetails.degrees.map((degree: string, index: number) => (
                                            <li key={index}>{degree}</li>
                                          ))}
                                        </ul>  </div>) : (
                                      <p> </p>
                                    )}
                    
                                  
                                    {offerDetails.skills ? (
                                      <div>
                                        <p >
                                          Compétences
                                        </p>
                                        <ul className="list-disc ml-6">
                                          {offerDetails.skills.map((degree: string, index: number) => (
                                            <li key={index}>{degree}</li>
                                          ))}
                                        </ul>  </div>) : (
                                      <p> </p>
                                    )}
                    </div>

                    {offerDetails.salary ? (
                                    <div className="mt-4 text-black">
                                      <h3 className="text-md font-bold  text-[#9b6e0f]">Rémunération & Avantages divers</h3>
                                      <p> {offerDetails.salary}   {offerDetails.currency}  {offerDetails.payPeriod}</p>
                                    </div>) : (
                                    <p> </p>
                                  )}
                                  {offerDetails.beginDate ? (
                                    <div className="mt-4 text-black">
                                      <h3 className="text-md font-bold  text-[#9b6e0f]">Date de debut</h3>
                                      <p>{offerDetails.beginDate}</p>
                                    </div>) : (
                                    <p> </p>
                                  )}
                    
                    
                                  {offerDetails.deadline ? (
                                    <div className="mt-4 text-black">
                                      <h3 className="text-md font-bold  text-[#9b6e0f]">Date limite de candidature</h3>
                                      <p>{offerDetails.deadline}</p>
                                    </div>) : (
                                    <p> </p>
                                  )}
                    
                    

                  </div>
                     <div className="flex mt-8 justify-between flex-row gap-16">
                  <button key={offerDetails.id} 
                  onClick={() => handleClick(offerDetails.id)} className=" bg-[#9b6e0f]  text-white px-6 py-1  hover:bg-blue-200  hover:text-[#4A62AA]">
                    Postuler
                  </button>
                  <button onClick={handleSearch} className=" bg-[#2848a8]  text-white px-6 py-1 hover:bg-gray-200  hover:text-[#4A62AA]">
                    Nouvelle recherche
                  </button>
                </div>
                <div className="flex justify-center">

 <div className="flex justify-center my-4 font-bold  gap-2">
             <button
                    onClick={goToPreviousOffer}
                  
                    className={`px-4 py-2 rounded-2xl ${currentOfferIndex === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#9b6e0f]  hover:bg-blue-200 hover:text-[#4A62AA]'} text-white`}
                  >
                       ←
                  </button>
                  
              <button onClick={handleClick1} className=" bg-[#5472c9] mt-2   text-white px-6 py-1 rounded-2xl hover:bg-gray-200  hover:text-[#4A62AA]">
                    Retour aux résultats
                  </button>
          
            <button
                    onClick={goToNextOffer}
                    disabled={currentOfferIndex === offerList.length - 1}
                    className={`px-4 py-2 rounded-2xl ${currentOfferIndex === offerList.length - 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#9b6e0f] hover:bg-blue-200 hover:text-[#4A62AA]'} text-white`}
                  >
                      →
                  </button></div>
            
               
                      </div>
                </div>
             
                  </div>
                  

            ) : (
              <div>Loading...</div>
            )}
          </div>
          <div className="flex  mr-10 my-4 justify-end flex-row gap-16">

          </div>  </div>
      </div>
      <footer className="w-full bg-blue-900    text-white text-center">
                                                  <FooterMobile />
                                                </footer>
      
      </div>
  );
};
