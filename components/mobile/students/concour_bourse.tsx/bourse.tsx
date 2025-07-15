"use client";
import React from "react";
import {  useState } from "react";
import Navbar from "../../navbar/navbar";
import FooterMobile from "../../footer/footerEnd";
import UseBourseService from "@/service/service_bourse";




export default function BourseComponentMobile() {

 const {

    errorMessage,

    setErrorMessage,
    handleToggle,
    open,
    regions,
    offers,
    handleClick

  } = UseBourseService()



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


            <p>

              BOURSES D'ÉTUDES
            </p>  </div>

              <div

                onClick={() => {
                  handleToggle(10);
                 
                }}
                className="py-2 px-4 mt-2 w-full bg-[#6a83cf] text-white font-bold flex justify-between items-center"
              >
                <span className="font-bold text-center text-xl"> Guide pour postuler à une bourse d’étude</span>
                <span className="text-xl">{open === 10 ? "▲" : "▼"}</span>
              </div>


            {open === 10 && (
   <div className="mt-1  text-black bg-white/70 p-8 space-y-4">
       
            <p> <span className="text-[#4A62AA] "> ■
            </span>
              &nbsp; &nbsp;Commencez vos recherches et démarches le plus tôt possible (au moins un (1) an avant) ;
            </p>
            <p> <span className="text-[#4A62AA] "> ■
            </span>
              &nbsp;&nbsp;      Les critères de sélection des organismes attributaires sont multiples : résultats académiques, motivation personnelle, projet professionnel, genre, talents spécifiques (sports, musiques, etc.) ;
            </p>

            <p> <span className="text-[#4A62AA] "> ■
            </span>
              &nbsp;&nbsp;    Lisez attentivement l’ensemble des critères d’éligibilité pour vous assurer que vous êtes éligible à la bourse ;
            </p>

            <p> <span className="text-[#4A62AA] "> ■
            </span>
              &nbsp;&nbsp;     Remplissez minutieusement et honnêtement les formulaires et questionnaires du dossier de candidature ;
            </p>

            <p> <span className="text-[#4A62AA] "> ■
            </span>
              &nbsp;&nbsp;   Évitez les erreurs dans votre dossier et rangez les pièces et documents dans l’ordre prescrit ;
            </p>
            <p> <span className="text-[#4A62AA] "> ■
            </span>
              &nbsp;&nbsp;    Insérez des lettres de recommandation pour accroître vos chances de sélection ;
            </p>


            <p> <span className="text-[#4A62AA] "> ■
            </span>
              &nbsp;&nbsp;   Déposez votre dossier complet dans les délais et le format requis : e-mail, plateforme en ligne, physique, clé USB, etc. ;
            </p>
            <p> <span className="text-[#4A62AA] "> ■
            </span>
              &nbsp;&nbsp;   Préparez minutieusement votre entretien : passez en revue vos motivations ; exercez-vous à pouvoir vous présenter en 60 ou 90 secondes en exposant l’essentiel de votre parcours, vos objectifs de carrière, vos points forts, soft skills, etc.

            </p>
            <p> <span className="text-[#4A62AA] font-bold">  NB :
            </span>
              &nbsp;   Il existe des bourses complètes (Full Scholarships) couvrant l’intégralité des frais de scolarité et du coût de la vie et des bourses partielles (Part Scholarships) couvrant une partie des frais de scolarité et/ou du coût de la vie.

            </p>
            <p> <span className="text-[#e63636]  font-bold"> Avertissement !
            </span> <br />
              Ne postulez jamais à une bourse avec des faux documents ou des fausses déclarations ; ils sont détectés dans 100% des cas. La conséquence sera le rejet votre dossier et l’interdiction de repostuler.
            </p>



          </div>
)}
          
          <div className="bg-[#4A62AA] text-center p-3 mt-8">
            <p> <span className="text-white  text-lg uppercase font-bold"> Liste non exhaustive des bourses d’Études
            </span>

            </p></div>
          <div className="mt-6 space-y-3" >
              {errorMessage && (
  <div className="text-red-600 text-center w-full py-4 bg-red-100 border border-red-300 rounded relative">
    <button
      className="absolute top-1 right-2 text-red-600 font-bold"
      onClick={() => setErrorMessage(null)}
    >
      
    </button>
    {errorMessage}
  </div>
)}
            {regions.map((region, index) => (
              <div key={index}>


                <div className="flex flex-col sm:flex-row gap-1">
                  <button
                    className="w-full  py-2 px-4   bg-[#f1d9b6]/90  text-[#4A62AA] flex justify-between "

                    onClick={() => {
                      handleToggle(index);
                      handleClick(region);
                    }}
                  >
                    <span className="flex-grow text-center item-center font-bold"> {region.regionName}  ({region.count})  </span>
                    <span className="sm:ml-10 text-xl">{open === index ? "▲" : "▼"}</span>
                  </button>


                </div>

                {open === index && (
                  <div className="">
                    <div className="w-full">
                      <div className="bg-white/60  pb-0 grid grid-cols-1 sm:grid-cols-[1fr_3fr] gap-8 mt-2">




                        <div className="bg-white/70 w-full shadow-sm ">
                          <div className="w-full overflow-x-auto">
                            <table className="text-start border-collapse w-full">
                              <thead>
                                <tr>
                                  <th className="p-4 text-left font-semibold">Pays</th>
                                  <th className="p-2 text-left font-semibold">Organisme attributaire</th>
                                  <th className="p-2 text-left font-semibold">Contenu & Lien  Internet</th>
                                </tr>
                              </thead>
                              <tbody>
                                {offers.map((offer, index) => (
                                  <tr key={index} className={`text-black text-start ${index % 2 === 0 ? 'bg-[#f1d9b6]/50' : 'bg-gray-200'
                                    }`}  >

                                    <td className="border border-x-0 font-bold  p-4">{offer.countryName}</td>
                                    <td className="border border-x-0  p-2">{offer.sponsor}</td>
                                    <td className="border border-x-0  p-2">
                                      <p>{offer.description}</p>
                                      <p> Lien: <a href={offer.website} className="text-[#4A62AA] hover:underline ml-1">{offer.website}</a></p>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>


                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>



        </div>
      </div>
      <footer className="w-full bg-blue-900   text-white text-center">
                                            <FooterMobile />
                                          </footer>
    </div>

  );
}