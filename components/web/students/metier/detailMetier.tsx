"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import en from '../../../../i18/en/student/metier.json';
import fr from '../../../../i18/fr/student/metier.json';

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

export default function MetierDetaille() {
const router = useRouter();

  const { locale } = router;
  const t = locale === 'en' ? en : fr;
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


    return (

        <div className="p-2 mt-8 md:p-8">
            <div className="flex justify-between items-center w-full px-4 md:mx-8">
                <h1 className="bg-[#4A62AA] uppercase text-white text-center  text-xl font-bold w-96 p-2">
                      {t.jobSheets} - {letter}
                </h1>
            </div>

            <div className=" px-4 md:ml-12 border-4 border-[#4A62AA] text-black gap-6 p-2">
                {filteredMetiers.length > 0 ? (
                    filteredMetiers.map((metier) => (
                        <div key={metier.id} className="bg-white/70 p-4 space-y-4 mb-4 ">
                            <div className="text-xl bg-[#A87A38] w-full text-white p-4 font-bold">
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

            </div> </div>
    );
}
