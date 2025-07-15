"use client";
import React, { useRef } from "react";
import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import StudentDestinationsTable from "./tableDestinations";
import Navbar from "../../navbar/navbar";
import FooterMobile from "../../footer/footerEnd";


export default function EtudeComponentMobile() {
    const [open, setOpen] = useState(null);
    const handleToggle = (index: any) => {
        setOpen(open === index ? null : index);
    };



    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileMenuOpen2, setIsMobileMenuOpen2] = useState(false);



    return (
        <div>
               <div className="min-h-screen   bg-[#4A62AA]  text-black overflow-auto  w-screen bg-cover  text-justify bg-center bg-no-repeat "  >
       
                <Navbar
                    isMobileMenuOpen={isMobileMenuOpen}
                    setIsMobileMenuOpen={setIsMobileMenuOpen}
                    isMobileMenuOpen2={isMobileMenuOpen2}
                    setIsMobileMenuOpen2={setIsMobileMenuOpen2}
                />


                <div className={`${isMobileMenuOpen ? "blur-sm " : ""
                    } ${isMobileMenuOpen2 ? "blur-sm " : ""
                    } `}>
                    <div className="justify-center p-2 text-center text-xl font-bold uppercase bg-[#9b6e0f] hover:bg-[#dac393] text-white">

                        <p>

                            ÉTUDIER À L’ÉTRANGER

                        </p>  </div>


                    <div className="bg-white/70 p-2 mt-8   text-black">
                        <p>Le nombre de bacheliers et d’étudiants camerounais qui choisissent de poursuivre leurs études à
                            l’étranger connaît une progression fulgurante depuis les années 90. Les raisons en sont multiples :
                            <i>  quête d’un diplôme d’une université prestigieuse ; expérience à l’international ; se perfectionner dans un domaine de pointe, etc. </i>


                        </p>
                    </div>




                    <div className="mt-2 space-y-4">
                        <div>

                            <div className="flex flex-col sm:flex-row gap-1">
                                <button
                                    className="w-full  py-2 px-4  bg-[#4c75f0] text-white flex justify-between "
                                    onClick={() => handleToggle(1)}
                                >
                                    <span className="flex-grow text-start ">Bien préparer ses études  à  l’étranger    </span>
                                    <span className="sm:ml-10 text-2xl">{open === 1 ? "▲" : "▼"}</span>
                                </button>


                            </div>

                            {open === 1 && (
                                <div className="bg-white/60 p-2">
                                    <div className="w-full">
                                        <div className="bg-white/60 ">
                                            <div className="bg-[#ddc19b] p-4 grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4 md:gap-8">
                                                <div className="font-bold text-[#2c36be] text-lg text-center md:text-center">
                                                    Choix du pays d'études
                                                </div>
                                                <div className="md:max-w-4xl">
                                                    <p>Il est subjectif et dépend de votre projet professionnel mais doit cependant être réaliste. Inutile de rêver d'études en Suisse si vous ne disposez pas des moyens pour les financer.</p>
                                                    <p>─ <b>Principaux critères à prendre en compte :</b> <i>le coût des études et de la vie ; les exigences linguistiques ; la présence ou non d'un proche dans le pays hôte ; la possibilité d'y travailler pendant et après ses études ; la facilité ou non d'obtention d'un visa ; la reconnaissance du diplôme obtenu au Cameroun.</i></p>
                                                </div>
                                            </div>

                                            <div className="p-4 bg-[#dbe0e7] grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4 md:gap-8">
                                                <div className="font-bold text-[#A87A38]  text-lg  text-center md:text-end">
                                                    Choix de l'université et de la formation
                                                </div>
                                                <div className="md:max-w-4xl">
                                                    <p>─ <b>Posez-vous les bonnes questions :</b> <i>Quel type de formation voulez-vous effectuer ? Voulez-vous partir immédiatement après le bac ou après une formation initiale ? Quels sont vos objectifs une fois votre diplôme en poche ? etc.</i></p>
                                                    <p>─ <b>Consultez les sites Internet des écoles/universités</b> et parcourez leurs offres de formations  et critères d'admission.</p>
                                                </div>
                                            </div>

                                            <div className="bg-[#ddc19b] p-4 grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4 md:gap-8">
                                                <div className="font-bold text-[#2c36be] text-lg  text-center md:text-center">
                                                    Financement des études
                                                </div>
                                                <div className="md:max-w-4xl">
                                                    <p>─ <b>Aspect le plus important</b> car étudier à l'étranger implique des coûts très élevés, <i>jusqu'à plusieurs millions de Francs CFA en frais de scolarité dans les pays industrialisés.</i></p>
                                                    <p>─ <b>Assurez-vous que vous ou vos parents pourrez payer votre scolarité</b> mais également faire face aux charges quotidiennes <i>(logement, assurance santé, repas et transport, bibliothèque, loisirs, etc.).</i></p>
                                                </div>
                                            </div>

                                            <div className="p-4 bg-[#dbe0e7] grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4 md:gap-8">
                                                <div className="font-bold text-[#A87A38] text-lg  text-center md:text-center">
                                                    Obtention du visa
                                                </div>
                                                <div className="md:max-w-4xl space-y-2">
                                                    <p>─ <b>Consultez le site Internet de l'ambassade du pays de destination pour la procédure</b> de constitution et dépôt du dossier de demande de visa d'études. Respectez scrupuleusement les délais et les instructions y relatifs !</p>
                                                    <p>─ <b>Assurez-vous que vous remplissez tous les critères et que votre dossier est complet</b> à son dépôt.</p>
                                                    <p className=" text-red-500">─ <b>Attention aux arnaques !</b> Évitez de passer par des intermédiaires pour vos démarches, excepté si ces derniers possèdent un mandat officiel valide du pays concerné qu'il faudra impérativement demander à voir.</p>
                                                    <p>─ <b>Soyez motivé et persévérant</b> car la procédure d'admission aux universités étrangères et d'obtention d'un visa, en particulier dans les pays industrialisés, riment avec processus de sélection rigoureux et long et démarches administratives complexes.</p>
                                                </div>
                                            </div>


                                            <div className="mt-2 p-2">
                                                <p className="text-red-500 font-bold text-center">Avertissement !</p>
                                                <p>N'utilisez jamais des faux documents dans vos demandes de visa et d'admission à l'université ; ils sont détectés dans 100% des cas. La conséquence sera le rejet de votre demande et l'interdiction définitive de postuler à nouveau à un visa dans le pays concerné. De plus, cela ternira la réputation de l'ensemble des Camerounais et leur rendra difficile l'obtention d'un visa.</p>
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
                                    className="w-full    py-2 px-4  bg-[#4c75f0] text-white  flex justify-between items-center sm:justify-center"
                                    onClick={() => handleToggle(2)}
                                >
                                    <span className="flex-grow text-start">Rentrer au Cameroun après ses études à  l’étranger ou pas ?   </span>
                                    <span className="sm:ml-10 text-2xl">{open === 2 ? "▲" : "▼"}</span>
                                </button>


                            </div>

                            {open === 2 && (
                                <div className="bg-white/60 ">
                                    <div className="w-full bg-white/60 py-2 px-4 md:px-0">


                                        <div className="w-full">
                                            <p >
                                                Parvenu(e) au terme de sa formation à l’étranger, l’étudiant(e) camerounais(e) a grosso modo trois options :</p>
                                            <p>
                                            </p>



                                            <div className="m-3">
                                                <p>
                                                    <span className="text-orange-500 font-bold">
                                                        1.
                                                    </span> Rester dans son pays d'études pour une formation complémentaire, rechercher un stage ou un emploi.

                                                </p>
                                                <p>
                                                    <span className="text-orange-500 font-bold">
                                                        2.
                                                    </span> Réémigrer vers un autre pays pour les mêmes raisons susmentionnées.

                                                </p>
                                                <p>
                                                    <span className="text-orange-500 font-bold">
                                                        3.
                                                    </span> Retourner au Cameroun.

                                                </p>
                                            </div>

                                            <p className="mt-4 ">
                                                La quasi-totalité choisit néanmoins de rester à l’étranger, en particulier dans les pays industrialisés, car les possibilités d’insertion professionnelle et les conditions de vie y sont le plus souvent meilleures. </p>
                                            <p className="mt-4 ">
                                             <b>  Si vous envisagez de retourner au Cameroun, nous vous recommandons vivement de minutieusement préparer votre retour. </b>  Ci-dessous les démarches fondamentales à effectuer et les dispositions à prendre avant le retour définitif provenant de nos experts retournés. </p>
                                            <div className="border-y-2 bg-white border-[#4A62AA] mt-2">
                                                <p className="p-2 ">
                                                    ‒ Enrichissez votre parcours d’un maximum d’expériences professionnelles ;
                                                </p>
                                                <p className="p-2 bg-[#ddc19b]">
                                                    ‒ Effectuez si possible plusieurs voyages au Cameroun pendant ou après votre formation pour évaluer les conditions d’insertion professionnelle (salariat ou entrepreneuriat) ;

                                                </p>
                                                <p className="p-2 ">
                                                    ‒ Informez-vous sur l’existence de programmes d’appui au retour des diplômés étrangers comme c’est le cas en Allemagne avec le programme Rückkehrende Fachkräfte du Centrum für internationale Migration und Entwicklung, CIM ;
                                                </p>
                                                <p className="p-2 bg-[#ddc19b]">
                                                    ‒ Si vous avez étudié dans un pays dont la langue n’est ni le français ni l’anglais, contactez l’administration locale chargée de vous délivrer une traduction française/anglaise officielle de votre diplôme que vous ferez ensuite certifier à l’ambassade du Cameroun ;
                                                </p>
                                                <p className="p-2 ">
                                                    ‒ Trouvez impérativement un emploi et/ou mettez en place une activité génératrice de revenus avant votre retour ; cela implique d’avoir constitué une épargne pendant votre séjour à l’extérieur ;
                                                </p>
                                                <p className="p-2 bg-[#ddc19b]">
                                                    ‒ Contactez l’ambassade du Cameroun pour solliciter la délivrance d’un « certificat de changement définitif de résidence », indispensable pour l’obtention, lors du retour, d’abattements ou d’exonérations des droits de douanes pour vos effets personnels ;
                                                </p>
                                                <p className="p-2 ">
                                                    ‒ Faites un bilan de santé et assurez-vous que vos vaccins sont à jour (en particulier ceux du choléra et de la fièvre jaune) ;
                                                </p>
                                                <p className="p-2 bg-[#ddc19b]">
                                                    ‒ Résiliez tous vos contrats et abonnements (bail, assurances, banques, transports publics, téléphone, bibliothèques, etc.) ; cela empêchera que des voyous usurpent votre identité pour commettre des méfaits ;
                                                </p>
                                                <p className="p-2 ">
                                                    ‒ Déclarez votre départ définitif auprès de l’autorité compétente de votre ville de résidence.


                                                </p>


                                            </div>
                                            <p className="mt-4">
                                                <Link href="/misc/nous_contacter" className="  text-[#4A62AA] font-bold hover:text-xl">       Contactez-nous
                                                </Link> si vous souhaitez échanger ou avoir un retour d’expériences de nos experts retournés au Cameroun après leurs études à l’étranger.
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
                                    className="w-full    py-2 px-4  bg-[#4c75f0] text-white flex justify-between items-center sm:justify-center"
                                    onClick={() => handleToggle(3)}
                                >
                                    <span className="flex-grow text-start"> Destinations de prédilection des étudiants camerounais   </span>

                                    <span className="sm:ml-10 text-2xl">{open === 3 ? "▲" : "▼"}</span>
                                </button>


                            </div>

                            {open === 3 && (
                                <div className="bg-white/60 ">
                                    <div className="w-full space-y-4 bg-white/60 py-2">



                                        <StudentDestinationsTable></StudentDestinationsTable>

                                    </div>

                                </div>
                            )}
                        </div>



                    </div>





                    <div className="mt-2 space-y-4">
                        <div>

                            <div className="flex flex-col sm:flex-row gap-1">
                                <button
                                    className="w-full    py-2 px-4  bg-[#4c75f0] text-white flex justify-between items-center sm:justify-center"
                                    onClick={() => handleToggle(8)}
                                >
                                    <span className="flex-grow text-start">Liens utiles</span>
                                    <span className="sm:ml-10 text-2xl">{open === 8 ? "▲" : "▼"}</span>
                                </button>


                            </div>

                            {open === 8 && (
                                <div className="bg-white/60 p-4">
                                    <div className="w-full bg-white/60 p-2 ">
                                        <div className="space-y-4">

                                            <p>
                                                - Informations sur les études en Allemagne :
                                                <p>     <a href="https://www.daad.cm/fr/" className="text-blue-600" target="_blank"
                                                    rel="noopener noreferrer"><i> https://www.daad.cm/fr/
                                                    </i></a>
                                                </p>
                                            </p>
                                            <p>
                                                - Informations sur les études en France :
                                                <p> <a href="https://www.cameroun.campusfrance.org/fr " className="text-blue-600" target="_blank"
                                                    rel="noopener noreferrer"><i> https://www.cameroun.campusfrance.org/fr </i> </a>
                                                </p></p>
                                            <p>
                                                - Informations sur les études en Belgique :
                                                <p>    <a href="https://cameroon.diplomatie.belgium.be/fr/venir-en-belgique/etudier-en-belgique" className="text-blue-600" target="_blank"
                                                    rel="noopener noreferrer"><i>  https://cameroon.diplomatie.belgium.be/fr/venir-en-belgique/etudier-en-belgique  </i></a>
                                                </p></p>
                                            <p>
                                                - Informations sur les études au Canada :
                                                <p>     <a href="https://www.canada.ca/fr/immigration-refugies-citoyennete/services/etudier-canada.html" className="text-blue-600" target="_blank"
                                                    rel="noopener noreferrer"><i> https://www.canada.ca/fr/immigration-refugies-citoyennete/services/etudier-canada.html </i></a> </p>
                                                <p>     <a href="https://www.canadainternational.gc.ca/cameroon-cameroun/study-etudie/index.aspx?lang=fra" className="text-blue-600" target="_blank"
                                                    rel="noopener noreferrer"><i> https://www.canadainternational.gc.ca/cameroon-cameroun/study-etudie/index.aspx?lang=fra </i></a> </p>
                                                <p>     <a href="https://www.educanada.ca/programs-programmes/index.aspx?lang=fra" className="text-blue-600" target="_blank"
                                                    rel="noopener noreferrer"><i> https://www.educanada.ca/programs-programmes/index.aspx?lang=fra  </i></a> </p>

                                            </p>
                                            <p>
                                                - Informations sur les études aux États-Unis :
                                                <p>  <a href="https://cm.usembassy.gov/fr/education-culture-fr/study-usa-fr/" className="text-blue-600" target="_blank"
                                                    rel="noopener noreferrer"><i> https://cm.usembassy.gov/fr/education-culture-fr/study-usa-fr/ </i></a></p>
                                                <p>   <a href="https://www.aide.ulaval.ca/vie-scolaire/" className="text-blue-600" target="_blank"
                                                    rel="noopener noreferrer"><i> https://www.aide.ulaval.ca/vie-scolaire/ </i></a></p>
                                            </p>

                                        </div>

                                    </div>

                                </div>
                            )}
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