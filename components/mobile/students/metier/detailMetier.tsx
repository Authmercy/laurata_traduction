"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import metiersData from '@/public/data/metier.json'
import Navbar from "../../navbar/navbar";
import FooterMobile from "../../footer/footerEnd";
type Jobsheet = {
    id: number;
    title: string;
    descriptions: string[];
    languageCode: string;
    skills: string[];
    jobsText: string;
    jobs: string[];
    pathToJobOutro: string;
    pathToJobSchools: string[];
    pathToJobDegrees: string;
    pathToJobIntro: string[];

};

export default function MetierDetailleMobile() {
   const router = useRouter();
      const [jobOffers, setJobsheets] = useState<Jobsheet[]>([]);
      const [filteredMetiers, setFilteredMetiers] = useState<any[]>([]);
      const [loading, setLoading] = useState(true);
      const { letter } = router.query;
      useEffect(() => {
          if (typeof window === "undefined") return;
          if (!router.isReady) return;
  
          const { letter } = router.query;
  
          const storedResults = sessionStorage.getItem("letterClicked");
  
          if (storedResults && typeof letter === 'string') {
              try {
                  const parsedResults = JSON.parse(storedResults);
                  const filtered = parsedResults.filter((metier: Jobsheet) =>
                      metier.title?.[0]?.toUpperCase() === letter.toUpperCase()
                  );
  
                  setJobsheets(filtered);
                  setFilteredMetiers(filtered);
              } catch (error: any) {
                  console.error("Erreur parsing:", error);
                  router.push({
                      pathname: "/error",
                      query: { message: encodeURIComponent(error.message) },
                  });
              } finally {
                  setLoading(false);
              }
          } else {
              setJobsheets([]);
              setFilteredMetiers([]);
              setLoading(false);
          }
      }, [router.isReady]);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileMenuOpen2, setIsMobileMenuOpen2] = useState(false);

  return (
    <div>
        <div className="min-h-screen   bg-[#4A62AA]  overflow-auto   text-black w-screen bg-cover  text-justify bg-center bg-no-repeat "  >
         
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
            <p>        FICHE MÉTIER - {letter}</p>
          </div>


          <div

            className="bg-white/70   mt-8   p-2 py-4 shadow-sm mb-2 hover:shadow-md transition-shadow"
          >
            {filteredMetiers.length > 0 ? (
              filteredMetiers.map((metier) => (
                <div key={metier.id} className="bg-white/70 p-4 space-y-4 mb-4 ">
                  <div className="text-xl bg-[#4A62AA] w-full text-white p-4 font-bold">
                    {metier.title}
                  </div>

      <p>                                                                  {Array.isArray(metier.skills) ? (
                                metier.descriptions.map((deb: any, index: any) => <p key={index} className="p-4  py-2"> {deb}</p>)

                            ) : metier.descriptions ? (
                                <p> {metier.descriptions}</p>
                            ) : (
                                <p>Aucun description renseigné.</p>
                            )}</p>
                  <div>
                    <div className="bg-[#a1b2f1] font-bold p-4  py-2 text-[#4A62AA] ">
                      Compétences:
                    </div>
                    <div className="p-4  py-2">
                      {Array.isArray(metier.skills) ? (
                                        metier.skills.map((deb: any, index: any) => <p key={index}>- {deb}</p>)
                                    ) : metier.skills ? (
                                        <p>- {metier.skills}</p>
                                    ) : (
                                        <p>Aucune Compétences renseigné.</p>
                                    )}
                    </div>
                  </div>
                   <div>
                    <div className="bg-[#a1b2f1] font-bold p-4  py-2 text-[#4A62AA] ">
                      Formation:
                    </div>
                   <div className="p-4  py-2">
                                    {Array.isArray(metier.pathToJobDegrees) ? (
                                        metier.pathToJobDegrees.map((deb: any, index: any) => <p key={index}>- {deb}</p>)
                                    ) : metier.pathToJobDegrees ? (
                                        <p>- {metier.pathToJobDegrees}</p>
                                    ) : (
                                        <p>Aucun Formation renseigné.</p>
                                    )}
                                </div>
                  </div>
                  <div>
                    <div className="bg-[#a1b2f1] font-bold p-4  py-2 text-[#4A62AA] ">
                      Débouchés:
                    </div>
                    <div className="p-4  py-2">
                                    {metier.jobsText}
                                </div>
                                <div className="p-4  py-2">
                                    {Array.isArray(metier.jobs) ? (
                                        metier.jobs.map((deb: any, index: any) => <p key={index}>- {deb}</p>)
                                    ) : metier.jobs ? (
                                        <p>- {metier.jobs}</p>
                                    ) : (
                                        <p></p>
                                    )}

                    </div>
                  </div>
                 
                </div>
              ))
            ) : (
              <p>Aucun métier trouvé pour la lettre {letter}.</p>
            )}
            <div className="flex justify-end">
              <button
                onClick={() => router.push('/students/metier/metier')}
                className="bg-[#c79c3e] hover:bg-[#9C824A] text-white rounded-md px-4 py-2 mb-4"
              >
                Retour à la liste
              </button>
            </div>


          </div>

        </div>
      </div>
 <footer className="w-full bg-blue-900    text-white text-center">
                                            <FooterMobile />
                                          </footer>
    </div>

  );

}
