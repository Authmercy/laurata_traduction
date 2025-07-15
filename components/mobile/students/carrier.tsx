"use client";
import React, { useRef } from "react";
import { useEffect, useState } from "react";
import Navbar from "../navbar/navbar";
import FooterMobile from "../footer/footerEnd";
import { Brand } from "@/service/Brand";

export default function CarrierComponentMobile() {

    const [open, setOpen] = useState(null);

    const handleToggle = (index: any) => {
        setOpen(open === index ? null : index);
    };
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
                        <p>            CARRIÈRE</p>
                    </div>









                    <div className="mt-8 space-y-4">
                        <div>

                            <div className="flex flex-col sm:flex-row gap-1">
                                <button
                                    className="w-full sm:w-4/12 py-2 px-4  bg-[#4c75f0] text-white flex justify-between items-center sm:justify-center"
                                    onClick={() => handleToggle(4)}
                                >
                                    <span className="text-start">Statistiques clés du marché du travail</span>
                                    <span className="sm:ml-6  text-2xl    ">{open === 4 ? "▲" : "▼"}</span>
                                </button>


                            </div>

                            {open === 4 && (
                                <div className="bg-white text-justify ">
                                    <div className="w-full">
                                        <div className="space-y-4 text-black bg-white/80">
                                            <p className=" p-3  py-2"><b> Le secteur informel </b> est le plus grand pourvoyeur d’emplois ( <b>  90,5%</b> de l’emploi en 2018. Source : 3ème enquête sur l’emploi et le secteur informel 2018, INS).
                                            </p>
                                            <p className="bg-[#f1d9b6] p-3  py-2">
                                                <b>Nombre d’agents publics employés par l’État  en</b> fin 2024 : 411 750. Source : MINFOPRA.

                                            </p>
                                            <p className=" p-3  py-2">
                                                <b>  Nombre de salariés employés par le secteur privé </b>formel en 2023: <b> 1 178 043 </b> répartis dans 438 893 unités économiques.  (Source : 3ème Recensement Général des Entreprises,2023).



                                            </p>
                                            <p className="bg-[#f1d9b6] p-3 py-2">
                                                Nombre de diplômés demandeurs d’emplois arrivant chaque année sur le marché du travail : environ <b> 150 000. </b>


                                            </p>
                                            <p className=" p-3 py-2"><b> Pour un poste à pourvoir, une PME/PMI camerounaise reçoit en moyenne 200 à 500 candidatures. </b> Celles-ci sont encore plus élevées lorsqu’il s’agit de grandes entreprises ou des filiales de multinationales ou pour un recrutement à la fonction publique.
                                            </p>
                                            <p className="bg-[#f1d9b6] p-3 py-2">
                                                <b className="text-[#4A62AA]">10 plus grands employeurs du secteur privé </b> (en nombre de salariés permanents)

                                                <p>
                                                    <b> 1.  </b> CDC (18 989) ; <b>2.  </b>  Société des Plantations du Haut-Penja, PHP (6 000) ;
                                                    <b> 3.  </b>  HEVECAM (4 908) ; <b> 4.  </b>  ENEO (3 700) ;
                                                    <b> 5.  </b>  SABC (3 082) ; <b> 6.  </b> SOCAPALM (2 244) ;
                                                    <b> 7.  </b> SODECOTON (2 000) ; <b> 8.  </b>  CONGELCAM (2 000 env.) ;
                                                    <b> 9.  </b>  Guinness Cameroun S.A. (1 900 env.) ;<b> 10.  </b>  Groupe Fotso Victor (1 850 env.).
                                                </p>

                                            </p>
                                            <p className=" p-3 py-2">
                                                <b className="text-[#4A62AA]">10 entreprises les plus performantes en 2021</b> (chiffre d’affaires en milliards de FCFA)

                                                <p>
                                                    <b> 1.  </b> SNH (788,3) ;
                                                    <b> 2.  </b>  ENEO (394,5) ;
                                                    <b> 3.  </b> SABC (362,9) ;     <b> 4.  </b>  Tradex (350) ;
                                                    <b> 5.  </b> MTN (282,3) ;     <b> 6.  </b>  Orange (250,2) ;
                                                    <b> 7.  </b>  FEICOM (243,7) ;     <b> 8.  </b>  CNPS (242,6) ;
                                                    <b> 9.  </b>  SODECOTON (171) ;     <b> 10.  </b>  DANGOTE Cement Cameroon (92,5). <i> Source : Classement 2022 des 500 premières entreprises africaines, Jeune Afrique, avril 2022.  </i>  </p>

                                            </p>
                                        </div>
                                        <div className=" bg-[#f1d9b6]  ">
                                            <p className="text-start p-3 text-[#4A62AA] font-bold">
                                                Les réseaux personnels sont essentiels pour trouver un emploi salarié
                                            </p>
                                            <div className="flex flex-col gap-2 p-4">
                                                <div className="flex-1">
                                                    <img src="/images/statistique.png" alt=" start" />
                                                </div>

                                                <div className="flex-1 text-black flex justify-center">
                                                    Source : Sur la base des enquêtes de la Banque mondiale auprès des entreprises (statistiques agrégées à partir des enquêtes réalisées en Angola, au Botswana, au Burundi, au Cameroun, en Gambie, en Guinée, en Mauritanie, en Namibie, au Niger, en Ouganda, en République démocratique du Congo, au Rwanda, au Swaziland, en Tanzanie en 2006–07).

                                                </div></div>

                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>
                    <div className="mt-2 space-y-4">
                        <div>

                            <div className="flex flex-col sm:flex-row gap-1">
                                <button
                                    className="w-full sm:w-4/12 py-2 px-4  bg-[#4c75f0] text-white flex justify-between items-center sm:justify-center"
                                    onClick={() => handleToggle(5)}
                                >
                                    <span className="text-start"> Dans quel secteur travailler : public, privé ou profession libérale ?</span>
                                    <span className="sm:ml-6  text-2xl    ">{open === 5 ? "▲" : "▼"}</span>
                                </button>


                            </div>

                            {open === 5 && (
                                <div className="bg-white text-justify p-2">
                                    <div className="w-full">
                                        <div className="space-y-4 text-black">

                                            <p>
                                                Ce choix est subjectif et dépend principalement de la personnalité, des capacités et des ambitions personnelles de chacun. Il est judicieux de s’y pencher au moment de la réflexion sur le choix de votre profession ou dès les premières années d’université. </p>

                                            <p>
                                                Pour vous y aider, ci-dessous un tableau comparatif des 5 points de différences les plus notables entre chaque secteur :
                                            </p>
                                            <div className="overflow-x-auto">
                                                <table className="table-auto border-collapse border min-w-[800px] shadow-lg w-full">
                                                    <thead>
                                                        <tr className="">

                                                            <th className="border-y-2 border-[#A87A38]   px-4 py-2 text-[#4A62AA] text-left"> </th>
                                                            <th className="border-y-2 border-[#A87A38]   px-4 py-2 text-[#4A62AA] text-left">Public </th>
                                                            <th className="border-y-2 border-[#A87A38]   px-4 py-2 text-[#4A62AA] text-left">Privé </th>
                                                            <th className="border-y-2 border-[#A87A38]   px-4 py-2 text-[#4A62AA] text-left"> Profession libérale réglementée</th>

                                                        </tr>
                                                    </thead>
                                                    <tbody className="text-start">

                                                        <tr className="  bg-[#d8c6ad]  ">

                                                            <td className="  px-4 py-2  text-center">
                                                                <span className="font-bold  text-[#4A62AA]">
                                                                    <p>   1.</p>
                                                                    Recrutement
                                                                </span>
                                                            </td>
                                                            <td className="   px-4 py-2 ">
                                                                <p>   <b> Fonction publique </b>: Par voie de concours ou sur titre suivant les modalités précisées par les statuts particuliers ou spéciaux.
                                                                </p>
                                                                <p>  <b> Entreprises publiques</b>: en principe, après appel à candidatures suivi d’étude de dossier et/ou test, et entretien d’embauche.</p>


                                                            </td>
                                                            <td className="  px-4 py-2 ">
                                                                <p>      Liberté pour l’employeur de recruter le collaborateur de son choix et à ce dernier de choisir où postuler.
                                                                </p>

                                                            </td>
                                                            <td className="   px-4 py-2 ">
                                                                Accès et exercice conditionnés à l’obtention du diplôme requis (après concours), à l’inscription à l’ordre de la profession concernée (notaire, huissier, pharmacien, architecte, etc.) et à l’octroi d’un agrément ou d’une autorisation d’exercice par l’autorité compétente.
                                                            </td>


                                                        </tr>
                                                        <tr className=" ">

                                                            <td className="   px-4 py-2 text-center">
                                                                <span className="font-bold text-center  text-[#4A62AA]">
                                                                    <p>   2.</p>
                                                                    Rémunération
                                                                </span>
                                                            </td>
                                                            <td className="   px-4 py-2 text-left">

                                                                <p>    Déterminée par la catégorie et l’indice de l’agent (découlant de l’ancienneté).
                                                                </p>
                                                            </td>
                                                            <td className="   px-4 py-2 text-left">
                                                                Négociée librement entre le salarié et l’employeur et indiquée dans le contrat de travail ; le cas échéant, la Convention collective de branche peut servir de base de négociation.


                                                            </td>
                                                            <td className="   px-4 py-2 text-left">
                                                                Négociée librement entre le spécialiste et son client. Elle est élevée mais proportionnelle à la réputation et fonction du volume d’activité (ce dernier étant impacté par le poids économique de la ville d’exercice) et de la qualité de la clientèle.

                                                            </td>


                                                        </tr>

                                                        <tr className=" bg-[#d8c6ad]  ">

                                                            <td className="   px-4 py-2 text-center">
                                                                <span className=" text-center font-bold text-[#4A62AA]">
                                                                    <p>   3.</p>
                                                                    Sécurité de l’emploi
                                                                </span>
                                                            </td>
                                                            <td className="   px-4 py-2 text-left">

                                                                Très élevée <br />
                                                                <i> (Révocations rares, uniquement en cas de manquements graves ou fautes très lourdes)
                                                                </i>
                                                            </td>
                                                            <td className="   px-4 py-2 text-left">
                                                                Faible dans les PME/PMI (  Contrats de travail non systématiques ; CDD et licenciements abusifs / économiques fréquents).
                                                                <br /> Élevée dans les grandes entreprises et multinationales.
                                                            </td>
                                                            <td className="   px-4 py-2 text-left">
                                                                Très élevée <br />
                                                                <i>  (Révocation et/ou radiation de l’Ordre en cas de fautes lourdes) ;</i>

                                                            </td>


                                                        </tr>

                                                        <tr className=" text-justify ">

                                                            <td className="   px-4 py-2 text-center">
                                                                <span className="text-center font-bold text-[#4A62AA]">
                                                                    <p>   4.</p>
                                                                    Déroulement de carrière
                                                                </span>
                                                            </td>
                                                            <td className="    px-4 py-2 text-left">
                                                                <p>
                                                                    Promotion et avancement organisés par voie réglementaire.

                                                                </p>
                                                                <p>
                                                                    <i>(Base : ancienneté et titre).

                                                                    </i>
                                                                </p>

                                                            </td>
                                                            <td className="   px-4 py-2 text-left">
                                                                Promotion découlant du mérite personnel, des performances, du rendement et/ou de la puissance du réseau relationnel.
                                                            </td>
                                                            <td className="   px-4 py-2 text-left">
                                                                Hausse de la notoriété selon le mérite personnel et les performances <i>  (Processus transparent) </i>;
                                                            </td>


                                                        </tr>

                                                        <tr className=" bg-[#d8c6ad] text-justify ">

                                                            <td className="   px-4 py-2 text-center ">
                                                                <span className="font-bold text-center text-[#4A62AA]">
                                                                    <p>   5.</p>
                                                                    Départ à la retraite
                                                                </span>
                                                            </td>

                                                            <td className="   px-4 py-2 text-left">
                                                                <p>
                                                                    Automatique à l’atteinte de l’âge réglementaire de départ  <i>(sauf prorogation exceptionnelle par l’autorité compétente). </i>
                                                                </p>
                                                            </td>
                                                            <td className="   px-4 py-2 text-left">
                                                                <p>
                                                                    Selon la convention collective de branche ou négocié librement entre l’employeur et le salarié.

                                                                </p>

                                                            </td>
                                                            <td className="   px-4 py-2 text-left">
                                                                <p>Automatique à l’atteinte de l’âge de départ

                                                                </p>

                                                                <p>
                                                                    <i>
                                                                        (sauf prorogation exceptionnelle par l’autorité compétente.). </i></p>               </td>

                                                        </tr>




                                                    </tbody>
                                                </table>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>


                    <div className="mt-2 space-y-4">
                        <div>

                            <div className="flex flex-col sm:flex-row gap-1">
                                <button
                                    className="w-full py-2 px-4 text-center bg-[#4c75f0] text-white flex items-center justify-between"
                                    onClick={() => handleToggle(7)}
                                >
                                    <span className="flex-grow text-start">  Dans la peau d’un employeur ou recruteur</span>
                                    <span className="sm:ml-6  text-2xl    ">{open === 7 ? "▲" : "▼"}</span>
                                </button>


                            </div>

                            {open === 7 && (
                                <div className="bg-white/60 text-justify ">
                                    <div className="bg-white w-full">

                                        <div className="space-y-4 p-4 text-black">

                                            <p>
                                                <b>  Les organisations et entreprises, publiques comme privées, recherchent des diplômés possédant des compétences</b>, autrement dit un mix :
                                            </p>
                                            <p>
                                                <span className="text-[#4A62AA] ml-6  ">■ </span>de connaissances théoriques ou académiques dans un domaine précis : les  <b className="text-[#9b6e0f] ">  savoirs  </b>(exemple : connaissances en informatique, en droit, etc.) ;
                                            </p>
                                            <p>
                                                <span className="text-[#4A62AA] ml-6  ">■ </span>  de connaissances opérationnelles, c’est-à-dire des capacités techniques concrètes à exécuter des tâches précises : les    <b className="text-[#9b6e0f] ">  savoir-faire  </b>(effectuer un audit, rédiger un contrat, etc.) ; et enfin,
                                            </p>
                                            <p>

                                                <span className="text-[#4A62AA] ml-6  ">■ </span> de compétences humaines, indispensables à la réussite dans le monde professionnel : les  <b className="text-[#9b6e0f] ">   soft skills </b>ou  <b className="text-[#9b6e0f] "> savoir-être</b> (exemplarité, créativité, esprit d’équipe, etc.).
                                            </p>
                                            <p>
                                                <b>  Chaque processus de recrutement a donc pour but d’identifier et de choisir le candidat qui possède le plus grand nombre des compétences recherchées pour le poste à pourvoir.</b> Par conséquent, il vous reviendra de démontrer que vous possédez lesdites compétences ; et, d’autre part, que vous saurez les mettre en œuvre efficacement pour mener à bien vos missions.
                                            </p>


                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>
                    <div className="mt-2 space-y-4">
                        <div>

                            <div className="flex flex-col sm:flex-row gap-1">
                                <button
                                    className="w-full sm:w-4/12 py-2 px-4  bg-[#4c75f0] text-white flex justify-between items-center sm:justify-center"
                                    onClick={() => handleToggle(8)}
                                >
                                    <span className="text-start"> Conseils pratiques pour vous préparer au monde du travail </span>
                                    <span className="sm:ml-6  text-2xl    ">{open === 8 ? "▲" : "▼"}</span>
                                </button>


                            </div>

                            {open === 8 && (
                                <div className="bg-white/60 text-justify ">
                                    <div className="w-full  text-black space-y-2">
                                        <p className="bg-[#b3c2ee] p-3">
                                            <span className="text-[#4A62AA] ">■ </span> Choisissez méticuleusement votre profession ; développez et densifiez pendant et après vos études les compétences requises dans votre profession et dans votre branche d’activités.
                                        </p>
                                        <p className="bg-[#f1d9b6] p-3 ">
                                            <span className="text-[#4A62AA] ">■</span>&nbsp; Constituez et développez un réseau relationnel pendant et après vos études.
                                        </p>
                                        <p className="bg-[#b3c2ee] p-3">
                                            <span className="text-[#4A62AA]  ">■</span>&nbsp; &nbsp; &nbsp;  Apprenez à rédiger un CV et une lettre de motivation vendeurs et convaincants.

                                        </p>
                                        <p className="bg-[#f1d9b6] p-3">
                                            <span className="text-[#4A62AA] ">■</span>&nbsp;&nbsp; Lisez impérativement le <b> « Guide du travailleur au Cameroun »   </b> et le  <b> « Code du travail »</b>. Informez-vous sur les prestations de la Caisse Nationale de Prévoyance Sociale (CNPS).
                                        </p>
                                        <p className="bg-[#b3c2ee] p-3 ">
                                            <span className="text-[#4A62AA] ">■</span> &nbsp; &nbsp;Soyez persévérant et flexible pendant la recherche d’emploi.
                                        </p>

                                        <p className="bg-[#f1d9b6] p-3">
                                            <span className="text-[#4A62AA]  ">■ </span> &nbsp; &nbsp;Et si vous étiez fait pour le milieu associatif ? N’hésitez pas à explorer cette voie et à vous engager dans une association qui œuvre pour une cause qui vous tient à cœur (y compris pendant vos études).
                                        </p>
                                        <p className="bg-[#b3c2ee] p-3 ">
                                            <span className="text-[#4A62AA]  ">■</span>&nbsp; &nbsp; N’hésitez pas à envisager une reconversion professionnelle si vous en éprouvez l’envie ou à vous lancer dans l’entrepreneuriat si vous avez une idée originale répondant à un besoin ou identifiez une opportunité d’affaire.
                                        </p>
                                        <p className="bg-[#f1d9b6] p-3">
                                            <span className="text-[#4A62AA]  ">■</span>&nbsp; &nbsp; Inscrivez-vous sur les sites web des cabinets de recrutement et sur les réseaux sociaux professionnels.
                                        </p>

                                    </div>
                                </div>

                            )}
                        </div>

                    </div>
                    <div className="mt-2 space-y-4">
                        <div>

                            <div className="flex flex-col sm:flex-row gap-1">
                                <button
                                    className="w-full sm:w-4/12 py-2 px-4  bg-[#4c75f0] text-white flex justify-between items-center sm:justify-center"
                                    onClick={() => handleToggle(18)}
                                >
                                    <span className="text-start"> Arnaques à l’emploi : les repérer et s’en prémunir             </span>
                                    <span className="sm:ml-6  text-2xl    ">{open === 18 ? "▲" : "▼"}</span>
                                </button>


                            </div>

                            {open === 18 && (
                                <div className="bg-white/60 text-justify ">
                                    <div className="w-full  text-black space-y-2">
                                        <p className="bg-[#b3c2ee] p-3">
                                            <span className="text-[#4A62AA] ">■ </span> Méfiez-vous des offres trop attractives ou des annonces contenant une pléthore de fautes d’orthographe.
                                        </p>
                                        <p className="bg-[#f1d9b6] p-3 ">
                                            <span className="text-[#4A62AA] ">■</span>&nbsp; Méfiez-vous d’un mail ou d’un appel proposant un emploi provenant d’un recruteur ou d'une agence de recrutement que vous n’avez jamais contacté(e).
                                        </p>
                                        <p className="bg-[#b3c2ee] p-3">
                                            <span className="text-[#4A62AA]  ">■</span>&nbsp; &nbsp; &nbsp;  Renseignez-vous toujours sur l’existence légale de l’entreprise à l’origine de l’offre de stage ou d’emploi.

                                        </p>
                                        <p className="bg-[#f1d9b6] p-3">
                                            <span className="text-[#4A62AA] ">■</span>&nbsp;&nbsp;Rendez-vous sur le site Internet du recruteur ou, si nécessaire, à son siège pour vous assurer que l’offre émane bien de lui.
                                        </p>
                                        <p className="bg-[#b3c2ee] p-3 ">
                                            <span className="text-[#4A62AA] ">■</span> &nbsp; &nbsp;Ne versez aucune somme d’argent à un employeur potentiel quel que soit le motif évoqué pendant le processus de recrutement.
                                        </p>

                                        <p className="bg-[#f1d9b6] p-3">
                                            <span className="text-[#4A62AA]  ">■ </span> &nbsp; &nbsp; Ne transmettez jamais vos données personnelles ou bancaires avant un entretien formel et la signature du contrat de travail.

                                        </p>

                                    </div>
                                </div>

                            )}
                        </div>

                    </div>


















                    <div className="mt-2 space-y-4">
                        <div>

                            <div className="flex flex-col sm:flex-row gap-1">
                                <button
                                    className="w-full sm:w-4/12 py-2 px-4  bg-[#4c75f0] text-white flex justify-between items-center sm:justify-center"
                                    onClick={() => handleToggle(9)}
                                >
                                    <span>Références bibliographiques</span>
                                    <span className="sm:ml-6  text-2xl    ">{open === 9 ? "▲" : "▼"}</span>
                                </button>


                            </div>

                            {open === 9 && (
                                <div className="bg-white text-justify p-4">
                                    <div className="w-full text-black">
                                        <div className="space-y-4">
                                            <p>
                                                <span className="text-[#4A62AA]">■ </span>   Faustine Kede Ndouna, Roger Tsafack Nanfosso et Jean Aristide Biloa Essimi. (2018),<span className="text-[#4c75f0]">  Les déterminants du choix de l’emploi informel dans un marché du travail segmenté dans les pays en développement : cas du Cameroun.</span>
                                            </p>

                                            <p>
                                                <span className="text-[#4A62AA]">■ </span>   Jean-Marie Tchakoua, <span className="text-[#4c75f0]">  Guide du travailleur au Cameroun</span>, BIT à Yaoundé, 2ème édition 2013.
                                            </p>
                                            <p>
                                                <span className="text-[#4A62AA]">■ </span>   Léon Noah Manga,<span className="text-[#4c75f0]">  Pratiques des relations du travail au Cameroun par l’exemple et les chiffres,</span> L’Harmattan, 2010.
                                            </p>
                                            <p>
                                                <span className="text-[#4A62AA]">■ </span>   Deon Filmer et Louise Fox, <span className="text-[#4c75f0]"> L’emploi des jeunes en Afrique Subsaharienne</span>, Publication conjointe AFD et Banque mondiale, 2014.
                                            </p>
                                            <p>
                                                <span className="text-[#4A62AA]">■ </span>  Romain Delès, <span className="text-[#4c75f0]">  Quand on a « que » le diplôme. Les Jeunes diplômés et l’insertion professionnelle</span>, Éditions Pluf, 2018.
                                            </p>
                                            <p>
                                                <span className="text-[#4A62AA]">■ </span>  Michel Huteau, Jean Guichard,  <span className="text-[#4c75f0]">   Orientation et insertion professionnelle</span>, Éditions Dunod, 2022.
                                            </p>
                                            <p>
                                                <span className="text-[#4A62AA]">■ </span> Rapport Principal des résultats du   <span className="text-[#4c75f0]"> Recensement Général des Entreprises (RGE-2)</span> au Cameroun, INS (2018).
                                            </p>
                                        </div>






                                    </div>
                                </div>
                            )}
                        </div>

                    </div>
                    <div className="mt-2">
                        <div>

                            <div className="flex flex-col sm:flex-row gap-1">
                                <button
                                    className="w-full sm:w-4/12 py-2 px-4  bg-[#4c75f0] text-white flex justify-between items-center sm:justify-center"
                                    onClick={() => handleToggle(10)}
                                >
                                    <span className="flex-grow text-start">Liens utiles</span>
                                    <span className="text-2xl    ">{open === 10 ? "▲" : "▼"}</span>
                                </button>


                            </div>

                            {open === 10 && (
                                <div className="bg-white text-justify p-4">
                                    <div className="w-full ">
                                        <div className="space-y-4 text-black">

                                            <p>
                                                <span className="text-[#4A62AA]">■ </span>  Ministère du travail et de la sécurité sociale
                                                <br /> <a href="https://www.cnps.cm/index.php/fr/" className="text-blue-600" target="_blank" rel="noopener noreferrer"> <i>http://www.mintss.cm/m/web/</i></a>
                                            </p>

                                            <p>
                                                <span className="text-[#4A62AA]">■ </span>  Organisation Internationale du Travail  <br /> <a href="https://www.ilo.org/global/lang--fr/index.htm" className="text-blue-600" target="_blank" rel="noopener noreferrer"> <i> https://www.ilo.org/global/lang--fr/index.htm</i></a>
                                            </p>
                                            <p>
                                                <span className="text-[#4A62AA]">■ </span> Caisse Nationale de Prévoyance Sociale, CNPS,  <br />    <a href="https://www.cnps.cm/index.php/fr/" className="text-blue-600" target="_blank" rel="noopener noreferrer"> <i> https://www.cnps.cm/index.php/fr/</i></a>
                                            </p>

                                        </div>





                                    </div>
                                </div>
                            )}
                        </div>

                    </div>

                </div>
                <div className="flex  mt-24 bg-white items-center justify-center  ">
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
                                        className="flex  my-10 justify-center  "
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