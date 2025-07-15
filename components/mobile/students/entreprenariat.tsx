"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Navbar from "../navbar/navbar";
import FooterMobile from "../footer/footerEnd";

export default function EntrepreunariatMobile() {


    const [open, setOpen] = useState(null);
    const router = useRouter();
    const handleToggle = (index: any) => {
        setOpen(open === index ? null : index);
    };
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileMenuOpen2, setIsMobileMenuOpen2] = useState(false);



    return (
        <div>
           <div className="min-h-screen   bg-[#4A62AA]  overflow-auto  text-black  w-screen bg-cover  text-justify bg-center bg-no-repeat "  >
         
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
                        <p>    Entrepreneuriat</p>
                    </div>









                    <div className="mt-6 space-y-4">
                        <div>

                            <div className="flex flex-col sm:flex-row gap-1">
                                <button
                                    className="w-full  py-2 px-4  bg-[#4c75f0] text-white flex justify-between "
                                    onClick={() => handleToggle(1)}
                                >
                                    <span className="text-start"> Choses à savoir et à faire avant de créer son entreprise</span>
                                    <span className="sm:ml-10 text-2xl">{open === 1 ? "▲" : "▼"}</span>
                                </button>


                            </div>

                            {open === 1 && (
                                <div className="bg-white/60 text-justify ">
                                    <div className="w-full">
                                        <div className="bg-white p-4 grid grid-cols-1 sm:grid-cols-[1fr_3fr] gap-8 mt-2">

                                            <p><b>  Plus de 90% des start-ups camerounaises font faillite au cours des deux premières années d’existence. </b>Si vous ne voulez pas contribuer à faire grossir ce chiffre, avant de vous lancer prenez préalablement le temps et le soin de :
                                            </p>
                                            <div >

                                                <p className="p-2 bg-[#a2b0db]/70">
                                                    <b>Bien évaluer  </b> votre potentiel d’entrepreneur : à travers un bilan de compétences (savoirs, savoir-faire, savoir-être, motivations, réseau relationnel, etc.) ;
                                                </p>
                                                <p className="p-2">
                                                    <b> Mûrir </b>votre projet ou idée d’entreprise ;
                                                </p>
                                                <p className="p-2 bg-[#a2b0db]/70">
                                                    <b> Bien vous renseigner </b>sur votre marché : taille, cible, chiffre d’affaires, concurrence, réglementation, etc. ;
                                                </p>
                                                <p className="p-2">
                                                    <b> D’élaborer</b> au besoin un Business Model Canvas (Matrice d’affaires) et/ou un Business plan (Plan d’affaires) exposant votre business model ;

                                                </p>
                                                <p className="p-2 bg-[#a2b0db]/70">
                                                    <b> Avoir développé et posséder </b> les qualités essentielles de l’entrepreneur ; un mentor ou coach peut vous y aider !
                                                </p>
                                                <p className="p-2">
                                                    <b>D’acquérir </b>
                                                    de bonnes notions en gestion et comptabilité ;
                                                </p>
                                                <p className="p-2 bg-[#a2b0db]/70">
                                                    <b>Vous être informé </b> sur le cadre législatif et réglementaire relatif à la création et à l’accompagnement des PME ;
                                                </p>
                                                <p className="p-2">
                                                    <b>Constituer si possible un capital d’investissement  </b> et de vous être informé sur les sources de financement possibles de vos activités ;

                                                </p>
                                                <p className="p-2 bg-[#a2b0db]/70">
                                                    <b> Planifier minutieusement </b> la mise en œuvre de votre plan d’actions contenant les objectifs (hebdomadaires, mensuels…) à atteindre ;
                                                </p>
                                                <p className="p-2">
                                                    <b>Préparer un plan B  </b> en cas d’échec.
                                                </p>
                                            </div>

                                            <p> De manière plus concrète, il s’agira pour vous :</p>

                                            <p> <span className="text-[#4A62AA] mr-2 font-bold"> i) </span>d’avoir ou de développer une idée originale (d’un produit ou service résolvant un problème ou répondant à un besoin) ainsi qu’un « business model » savamment pensé ;
                                            </p>
                                            <p> <span className="text-[#4A62AA] mr-2 font-bold "> ii) </span>de bien calculer toutes vos charges en prenant en compte les imprévus ;
                                            </p>
                                            <p> <span className="text-[#4A62AA] mr-2 font-bold"> iii) </span>d’estimer de manière réaliste le produit de vos ventes (à partir d’estimations basses).
                                            </p>


                                            <p className="my-2"> Si votre résultat est largement bénéficiaire, il y a de fortes chances que votre affaire soit rentable et pérenne.

                                                <div className="bg-[#e2dfd5]/70 mt-4 p-2">
                                                    <p> Enfin, sachez que la majorité des grands entrepreneurs à succès :</p>
                                                    <p className=" mx-4 my-2">- <span className="text-[#4A62AA] ">ne cite pas la quête du gain (devenir riche) comme moteur principal de leur action mais la passion pour ce qu’ils font et la volonté de rendre meilleur le monde. </span>
                                                        Le milliardaire Dietrich Mateschitz, 1ère fortune d’Autriche et cocréateur de la boisson énergisante Red Bull, déclare ainsi dans une de ses rares interviews que l’argent n’a jamais été un moteur pour lui. Mais plutôt la liberté, l’indépendance et la passion pour ses projets. </p>
                                                    <p className=" mx-4 my-2">- <span className="text-[#4A62AA] ">n’a pas essayé de tout anticiper ou attendu que tout soit prêt ;  </span> Ils sont passés à l’action dès que possible et ont progressé en apprenant de leurs erreurs.</p>
                                                    <p className=" mx-4 my-2">  </p>
                                                </div>
                                               
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
                                    className="w-full sm:w-4/12 py-2 px-4  bg-[#4c75f0] text-white  flex justify-between items-center sm:justify-center"
                                    onClick={() => handleToggle(2)}
                                >
                                    <span className="text-start"> Qualités essentielles de l’entrepreneur </span>

                                    <span className="sm:ml-10 text-2xl">{open === 2 ? "▲" : "▼"}</span>
                                </button>


                            </div>

                            {open === 2 && (
                                <div className="bg-white/60  text-justify ">
                                    <div className="w-full ">
                                        <div className="bg-white p-4 grid grid-cols-1 gap-4 md:gap-8 mt-2">
                                              <p> Le jeune diplômé qui veut réussir  son projet entrepreneurial doit, outre ses compétences, développer les principales aptitudes et qualités suivantes, possédées par la majorité des entrepreneurs à succès :   </p>
                                           

                                            <div className="space-y-2">

                                                <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-2 md:gap-8 p-2">
                                                    <div className="font-bold text-start text-[#4A62AA]">
                                                        Être ambitieux et audacieux
                                                    </div>
                                                    <div>
                                                        <p>Entreprendre c'est avoir de l'ambition, de l'audace et être disposé à prendre des risques ;</p>
                                                    </div>
                                                </div>


                                                <div className="bg-[#a2b0db]/70 grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-2 md:gap-8 p-2">
                                                    <div className="font-bold text-start text-[#4A62AA]">
                                                        Avoir une grande confiance en soi
                                                    </div>
                                                    <div>
                                                        <p>Être confiant en ses capacités à mener à bien son projet ;</p>
                                                    </div>
                                                </div>


                                                <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-2 md:gap-8 p-2">
                                                    <div className="font-bold text-start text-[#4A62AA]">
                                                        Être déterminé et patient
                                                    </div>
                                                    <div>
                                                        <p>Le succès n'arrive pas du jour au lendemain et nécessite parfois beaucoup de temps ;</p>
                                                    </div>
                                                </div>


                                                <div className="bg-[#a2b0db]/70 grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-2 md:gap-8 p-2">
                                                    <div className="font-bold text-start text-[#4A62AA]">
                                                        Leadership
                                                    </div>
                                                    <div>
                                                        <p>Penser aux autres et agir pour le bien commun plutôt que se concentrer sur ses propres intérêts (base de tout leadership à impact positif !) ;</p>
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-2 md:gap-8 p-2">
                                                    <div className="font-bold text-start text-[#4A62AA]">
                                                        Faculté d'adaptation et flexibilité
                                                    </div>
                                                    <div>
                                                        <p>Capacité à se remettre en question et à changer si nécessaire de cap ou ses méthodes de travail ;</p>
                                                    </div>
                                                </div>


                                                <div className="bg-[#a2b0db]/70 grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-2 md:gap-8 p-2">
                                                    <div className="font-bold text-start text-[#4A62AA]">
                                                        Être créatif
                                                    </div>
                                                    <div>
                                                        <p>Nécessaire pour l'innovation et la compétitivité ;</p>
                                                    </div>
                                                </div>


                                                <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-2 md:gap-8 p-2">
                                                    <div className="font-bold text-start text-[#4A62AA]">
                                                        Savoir travailler en équipe
                                                    </div>
                                                    <div>
                                                        <p>Pour garantir la cohésion au sein de ses collaborateurs ;</p>
                                                    </div>
                                                </div>


                                                <div className="bg-[#a2b0db]/70 grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-2 md:gap-8 p-2">
                                                    <div className="font-bold text-start text-[#4A62AA]">
                                                        Être rigoureux et organisé
                                                    </div>
                                                    <div>
                                                        <p>Pour planifier, prioriser les actions et les mettre en œuvre efficacement ;</p>
                                                    </div>
                                                </div>


                                                <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-2 md:gap-8 p-2">
                                                    <div className="font-bold text-start text-[#4A62AA]">
                                                        Être optimiste
                                                    </div>
                                                    <div>
                                                        <p>Pour croire en la réussite du projet et rester positif face à l'adversité et aux revers ;</p>
                                                    </div>
                                                </div>


                                                <div className="bg-[#a2b0db]/70 grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-2 md:gap-8 p-2">
                                                    <div className="font-bold text-start text-[#4A62AA]">
                                                        Être honnête et juste
                                                    </div>
                                                    <div>
                                                        <p>Que ce soit avec vos collaborateurs ou avec vos clients et partenaires, soyez toujours honnête et juste ; ne roulez personne car votre réputation vous suivra partout. « Biens mal acquis ne profitent jamais ! »</p>
                                                    </div>
                                                </div>





                                                <div className=" grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-2 md:gap-8 p-2">
                                                    <div className="font-bold text-start text-[#4A62AA]">
                                                        Être créatif
                                                    </div>
                                                    <div>
                                                        <p>Listez les langues maîtrisées en indiquant le niveau de pratique ;</p>
                                                    </div>
                                                </div>


                                                <div className=" bg-[#a2b0db]/70 grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-2 md:gap-8 p-2">
                                                    <div className="font-bold text-start text-[#4A62AA]">
                                                        Divers
                                                    </div>
                                                    <div>
                                                        <p>Cette rubrique peut contenir plusieurs sous-rubriques à savoir « Centres d'intérêts » comme la lecture, les jeux de société..., « Sport », « Engagement associatif », etc.</p>
                                                    </div>
                                                </div>
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
                                    className="w-full sm:w-4/12 py-2 px-4  bg-[#4c75f0] text-white flex justify-between items-center sm:justify-center"
                                    onClick={() => handleToggle(3)}
                                >
                                    <span className="text-start"> Avantages et inconvénients de l’entrepreneuriat</span>

                                    <span className="sm:ml-10 text-2xl">{open === 3 ? "▲" : "▼"}</span>
                                </button>


                            </div>

                            {open === 3 && (
                                <div className="bg-white text-justify p-4">
                                    <div className="w-full">
                                        <p> L'entrepreneuriat présente des advantages et inconvénients  dont il faut être bien conscient avant de se lancer : </p>
                                        <div className=" gap-1">
                                            <div className="bg-white/60 p-2  gap-8">
                                                <p className="justify-center font-bold text-center  text-[#9b6e0f] uppercase items-center">les plus</p>

                                                <div >

                                                    <p className="p-2 bg-[#e6d4bc]/70">
                                                        <b>Indépendance et liberté :  </b>vous êtes votre propre chef, libre dans vos choix et décisions et mettez en œuvre vos propres idées. Vous organisez vous-même votre emploi du temps.
                                                    </p>
                                                    <p className="p-2">
                                                        <b> Satisfaction : </b> travailler dans un domaine que vous aimez, apporter une solution au besoin d’une clientèle, devenir une source d’inspiration par sa réussite, etc. procurent grande satisfaction et fierté.
                                                    </p>
                                                    <p className="p-2 bg-[#e6d4bc]/70">
                                                        <b> Autonomie financière :  </b>en cas de succès, vos revenus seront conséquents et vous garantiront une autonomie financière.
                                                    </p>
                                                    <p className="p-2">
                                                        <b> Choix de vos collaborateurs </b> vous constituez et recrutez vous-même votre équipe selon vos préférences.

                                                    </p>



                                                </div>
                                            </div>
                                            <div className="bg-white/60 p-2  gap-8">
                                                <div className=" items-center justify-center h-full font-bold bg-[#a2b0db] text-center uppercase">
                                                    <p className="justify-center text-center items-center text-[#9b6e0f] bg-white">Les moins </p> </div>

                                                <div >

                                                    <p className="p-2 bg-[#a2b0db]/70">
                                                        <b>Heures de travail illimitées : </b> vous n’aurez pas d’heures fixes de travail et votre vie privée pourrait en pâtir, d’où l’importance d’une bonne organisation et de l’autodiscipline.
                                                    </p>
                                                    <p className="p-2">
                                                        <b> Insécurité financière : </b>si votre affaire tarde à être rentable, vous aurez un revenu faible et irrégulier ; en cas de faillite, vous perdrez le capital investi et risquerez la précarité financière, qui le cas échéant, mettra en péril le bien-être et la stabilité de votre famille.
                                                    </p>
                                                    <p className="p-2 bg-[#a2b0db]/70">
                                                        <b> Incertitudes :  </b>liée à la recherche de financement, à la fidélité de la clientèle ou des fournisseurs, à la réussite ou à l’échec du projet.
                                                    </p>

                                                    <p className="p-2">
                                                        <b> Pression élevée et situations de stress garanties : </b> découlant de la concurrence ; des nombreuses charges : loyer, salaires ; de vos responsabilités (recherche de partenaires/clients, coordination de l’équipe, comptabilité, etc.) ; voire de la jalousie et la convoitise de l’entourage en cas de succès.
                                                    </p>


                                                </div>
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
                                    className="w-full sm:w-4/12 py-2 px-4  bg-[#4c75f0] text-white flex justify-between items-center sm:justify-center"
                                    onClick={() => handleToggle(4)}
                                >
                                    <span className="text-start"> Obstacles à l’entrepreneuriat formel</span>
                                    <span className="sm:ml-10 text-2xl">{open === 4 ? "▲" : "▼"}</span>
                                </button>


                            </div>

                            {open === 4 && (
                                <div className="bg-white text-justify ">
                                    <div className="w-full">
                                        <p className="p-4">
                                            — La majorité des jeunes (diplômés) qui se lance dans l'entrepreneuriat évolue hélas dans l'informel, principalement dans le commerce, l'artisanat, l'agropastoral et les services. La fiscalité, la corruption et les lourdeurs et tracasseries administratives figurent parmi les obstacles les plus cités par ces entrepreneurs pour justifier le choix de l'informel. (1)
                                        </p>
                                        <p className="p-4">
                                            — Bien qu'ils aient été considérablement abaissés à travers des politiques gouvernementales incitatives, les coûts de formalisation administrative représentent encore un obstacle important : 41 500 FCFA en moyenne pour un Établissement et 54 625 FCFA pour une SARL sous seing privé dans un CFCE, auxquels s'ajoutent les différents précomptes à payer à la création pour l'obtention de l'attestation de conformité fiscale (ACF).
                                        </p>
                                        <p className="p-4">
                                            En conclusion, sachez que l'informel présente son lot d'inconvénients plus ou moins contraignants selon l'activité. Aussi, nous vous recommandons de toujours opter pour la formalisation de votre entreprise au démarrage lorsque cela est possible.
                                        </p>

                                        <div className=" bg-white/70  p-2 grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4 md:gap-8">
                                            <div className="flex items-center justify-center p-2 font-bold bg-[#939497] text-center uppercase">
                                                <p>INCONVÉNIENTS DE L'INFORMEL</p>
                                            </div>
                                            <div className="space-y-2 text-black">
                                                <p className="p-2 bg-[#a2b0db]">
                                                    Exclusion de la quasi-totalité des programmes étatiques d'aide et de soutien à l'entrepreneuriat (formations, coaching, avantages fiscaux, crédits garantis ...);
                                                </p>
                                                <p className="p-2">
                                                    Exclusion de la commande publique;
                                                </p>
                                                <p className="p-2 bg-[#a2b0db]">
                                                    Impossibilité d'accès au crédit bancaire;
                                                </p>
                                                <p className="p-2">
                                                    Non couverture par les assurances;
                                                </p>
                                                <p className="p-2 bg-[#a2b0db]">
                                                    Impossibilité de faire affaires avec des partenaires étrangers; etc.
                                                </p>
                                            </div>
                                        </div>

                                        <p className="p-2">
                                            <b> → Pour aller plus loin </b>
                                        </p>
                                        <p className="p-2">
                                            <span className="text-[#4A62AA] font-bold">(1)</span>
                                            Lire :<span className="text-[#4A62AA]"> « Enquête auprès des entreprises informelles du Cameroun. »</span> sous la direction de Benjamin FOMBA KAMGA, (2017). Bureau International du Travail, Équipe d'Appui Technique de l'Organisation Internationale du Travail (OIT) au travail décent pour l'Afrique centrale.
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
                                    onClick={() => handleToggle(5)}
                                >
                                    <span className="text-start"> Entreprendre sans passer par la case salariat ?</span>
                                    <span className="sm:ml-10 text-2xl">{open === 5 ? "▲" : "▼"}</span>
                                </button>


                            </div>

                            {open === 5 && (
                                <div className="bg-white text-justify p-2">
                                    <div className="w-full">
                                        <p className="p-2">
                                            Bien qu'il existe plusieurs cas de (jeunes) diplômés ayant mené à bien leur projet immédiatement à la sortie des bancs, il n'en demeure pas moins qu'<b>une première expérience professionnelle présente à bien des égards un atout majeur lorsqu'on se lance dans l'entrepreneuriat.</b>
                                        </p>

                                        <div className="bg-white">
                                            <p className="p-2 my-2 text-white text-center font-bold bg-[#A87A38]">
                                                Les avantages de créer son entreprise après une première expérience professionnelle
                                            </p>

                                            <div className="p-2 space-y-2">
                                                <p className="my-2"><b>Une première expérience</b> vous permet :</p>

                                                <div className="space-y-1 pl-4">
                                                    <p className="flex items-start">
                                                        <span className="text-[#4A62AA] font-bold mr-2">•</span>
                                                        <span>De toucher du doigt les réalités, le fonctionnement et « l'écosystème » de l'entreprise ;</span>
                                                    </p>
                                                    <p className="flex items-start">
                                                        <span className="text-[#4A62AA] font-bold mr-2">•</span>
                                                        <span>D'acquérir de nouvelles compétences et connaissances : fiscalité, marketing, gestion etc. ;</span>
                                                    </p>
                                                    <p className="flex items-start">
                                                        <span className="text-[#4A62AA] font-bold mr-2">•</span>
                                                        <span>D'apprendre des personnes ou collègues plus expérimentés ;</span>
                                                    </p>
                                                    <p className="flex items-start">
                                                        <span className="text-[#4A62AA] font-bold mr-2">•</span>
                                                        <span>De bénéficier le cas échéant de formations (comptabilité, fiscalité, ventes, etc.) payées par l'employeur ;</span>
                                                    </p>
                                                    <p className="flex items-start">
                                                        <span className="text-[#4A62AA] font-bold mr-2">•</span>
                                                        <span>De connaître vos futurs concurrents et fournisseurs, les réseaux de distribution, etc. ;</span>
                                                    </p>
                                                    <p className="flex items-start">
                                                        <span className="text-[#4A62AA] font-bold mr-2">•</span>
                                                        <span>De constituer une épargne (qui pourrait servir au financement de votre projet entrepreneurial) ;</span>
                                                    </p>
                                                    <p className="flex items-start">
                                                        <span className="text-[#4A62AA] font-bold mr-2">•</span>
                                                        <span>De constituer un réseau relationnel dans plusieurs secteurs d'activités ;</span>
                                                    </p>
                                                    <p className="flex items-start">
                                                        <span className="text-[#4A62AA] font-bold mr-2">•</span>
                                                        <span>De détecter un besoin non satisfait dans votre domaine ou une nouvelle opportunité d'affaires ; etc.</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="bg-gray-300">


                                                <p className="p-2">
                                                    — Ces divers acquis vous seront indubitablement utiles pour la maturation et la mise en œuvre de votre projet. Aussi, nous vous recommandons, si l'occasion se présente, <b>de ne pas hésiter à acquérir de l'expérience professionnelle avant d'entreprendre</b> (y compris par des stages pendant et après vos études).
                                                </p>
                                                <p className="p-2">
                                                    — Dans le cas contraire, nous vous conseillons de développer pendant vos études, outre votre idée d'entreprise, les principales qualités permettant de faire face aux défis et difficultés que vous rencontrerez en tant que chef d'entreprise.
                                                </p>
                                            </div>
                                            <p className="p-2">
                                                <b><Link href="/misc/nous_contacter" className="hover:text-xl">Contactez-nous</Link></b> si vous souhaitez être accompagné par nos experts dans la mise en œuvre de votre projet entrepreneurial.
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
                                    className="w-full py-2 px-4 text-center bg-[#4c75f0] text-white flex items-center justify-between"
                                    onClick={() => handleToggle(6)}
                                >
                                    <span className="flex-grow text-start">Éthique et morale</span>
                                    <span className="text-2xl">{open === 6 ? "▲" : "▼"}</span>
                                </button>


                            </div>

                            {open === 6 && (
                                <div className="bg-white/60 text-justify p-4">
                                    <div className="w-full  py-6">
                                        <div className="bg-white shadow-md  overflow-hidden">
                                            <p className="p-4 my-2 text-white text-center  bg-[#A87A38] md:text-lg lg:text-xl">
                                                Try to become a man of value rather than a man of success.
                                                <span className="text-black font-bold  block sm:inline">Albert Einstein</span>
                                            </p>

                                            <p className="p-4 text-justify leading-relaxed">
                                                Dans un contexte où  beaucoup de jeunes veulent accéder à la richesse matérielle et au succès au plus vite, et parfois, à tous les prix et sans effort particulier au détriment des valeurs éthiques, il convient de leurs rappeler que, comme le dit si bien le <b>  proverbe Africain, « On ne peut pas labourer, semer, récolter et manger le même jour. »</b>
                                            </p>

                                            <p className="p-4 text-justify leading-relaxed">
                                                                                                 Ainsi, il y a un temps pour étudier et acquérir des connaissances et des compétences et un autre pour déployer ses compétences et savoirs et jouir des retombées des efforts antérieurs. Cet apprentissage doit se faire dans le travail acharné, la discipline, le respect d’autrui, et surtout, sans tricherie et sans causer du tort aux autres. Que vous ayez opté pour le salariat ou l’entrepreneuriat, vous ferez toujours la différence et serez un citoyen utile à votre pays lorsque vous êtes honnête, intègre et juste.
                                            </p>

                                            <p className="p-4 text-justify leading-relaxed">
                                                Aussi, nous vous suggérons vivement de mettre les valeurs éthiques au cœur de tout ce que vous entreprenez et entreprendrez pendant et après vos études et d’y être fidèle, vos accomplissements et succès n’en seront que plus gratifiants.
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
                                    className="w-full py-2 px-4 text-center bg-[#4c75f0] text-white flex items-center justify-between"
                                    onClick={() => handleToggle(7)}
                                >
                                    <span className="flex-grow text-start"> Culture générale</span>
                                    <span className="sm:ml-10 text-2xl">{open === 7 ? "▲" : "▼"}</span>
                                </button>


                            </div>

                            {open === 7 && (
                                <div className="bg-white/60  text-justify p-4">
                                    <div className="w-full">
                                        <div className="bg-white">
                                            <p className="p-4 my-2 text-white text-center  bg-[#A87A38]  md:text-base">
                                                La persévérance, c'est ce qui rend l'impossible possible, le possible probable et le probable réalisé. <span className=" font-bold text-black"> Léon Trotsky</span>
                                            </p>

                                            <div className="p-4 space-y-4">
                                                <p className="text-[#4A62AA] font-bold text-lg md:text-xl">
                                                    L'importance de la lecture et de la culture générale
                                                </p>

                                                <p className="text-black">
                                                    La culture générale est incontournable dans la vie de l'étudiant, et ultérieurement dans la vie professionnelle. En effet, elle permet non seulement de reconnaître le niveau de curiosité de l'étudiant, mais aussi, l'étendue de ses connaissances ne relevant pas de sa formation disciplinaire.
                                                </p>

                                             

                                                <p className="text-[#4A62AA] font-bold text-lg md:text-xl mt-6">
                                                    Développer son niveau de culture générale
                                                </p>

                                                <p className="text-black">
                                                    La curiosité intellectuelle et l'ardent désir d'élargir ses connaissances constituent les principaux moteurs du développement de la culture générale chez l'individu.
                                                </p>

                                                <p className="text-black">
                                                    Un des moyens les plus efficaces pour développer sa culture générale est la lecture quotidienne (livres, Internet ou bibliothèque) car elle amplifie la capacité de mémorisation.<br />
                                                    À côté de la lecture, vous pouvez également enrichir vos connaissances en prenant part à des conférence-débats, à des dédicaces de livres, en visitant le musée national, et même en apprenant à jouer d'un instrument de musique.
                                                </p>

                                                <p className="text-[#4A62AA] font-bold text-lg md:text-xl mt-6">
                                                    Pour aller plus loin
                                                </p>

                                                <div className="space-y-4 p-2">
                                                  <p>
                                                        Consulter le dossier consacré  dans la rubrique <Link  className="text-blue-700 font-bold" href="/zoom">
                                                     Zoom Sur   </Link> 
                                                      </p>
                                                </div>
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
                                    className="w-full sm:w-4/12 py-2 px-4  bg-[#4c75f0] text-white flex justify-between items-center sm:justify-center"
                                    onClick={() => handleToggle(8)}
                                >
                                    <span className="text-start">  Structures et programmes d’accompagnement</span>
                                    <span className="sm:ml-10 text-2xl">{open === 8 ? "▲" : "▼"}</span>
                                </button>


                            </div>

                            {open === 8 && (
                                <div className="bg-white/60 p-4">
                                    <div className="w-full space-y-4">


                                        {/* Section 1 */}
                                        <div className="bg-white rounded-lg shadow-sm">
                                            <p className="font-bold bg-[#dac7ac] p-3 text-lg text-gray-800 text-start">
                                                1. Centre des Formalités de Création d'Entreprises (CFCE)
                                            </p>
                                            <div className="p-4 text-black">
                                                <p>
                                                    Présents dans plusieurs chefs-lieux de région, les CFCE facilitent la création d'entreprises dont le capital est compris entre 100 000 et un million de FCFA ; au-delà, les formalités s'effectuent chez un notaire.
                                                </p>
                                                <p className="mt-2">
                                                    Pour plus d'informations :
                                                    <a href="https://yaounde.eregulations.org/?l=fr"
                                                        className="text-blue-600 hover:underline break-all block mt-1"
                                                        target="_blank"
                                                        rel="noopener noreferrer">
                                                        <i>https://yaounde.eregulations.org/?l=fr</i>
                                                    </a>
                                                </p>
                                            </div>
                                        </div>

                                  
                                        <div className="bg-white rounded-lg shadow-sm">
                                            <p className="font-bold bg-[#dac7ac] p-3 text-lg text-gray-800 text-start">
                                                2. Structures publiques d'accompagnement
                                            </p>
                                            <div className="p-4 space-y-4 text-black">
                                                <div>
                                                    <p className="font-bold text-start " >■ Agence de Promotion des PME (APME)</p>
                                                    <div className="  text-black">
                                              Missions : 
                                              <div className="mx-4"> 
                                        - Soutien aux PME-PMI <br />
                                         - Accompagnement dans les procédures de création 
                                         <br /> - Mentorat et coaching des porteurs de projets <br /> - Incubation des start-up. 
                                              </div>  <p className="mt-2">
                                                   Siège : quartier, Tsinga, Yaoundé.
                                                </p>
                                            </div>
                                                </div>

                                                <div>
                                                    <p className="font-bold text-start ">■ Fonds National de l'Emploi (FNE)</p>
                                                    <p>Mission : Promotion de l'emploi. Siège à Yaoundé (Elig-Essono) et représentations dans les 10 régions.</p>
                                                    <a href="https://www.fnecm.org/index.php/fr"
                                                        className="text-blue-600 hover:underline break-all block mt-1"
                                                        target="_blank"
                                                        rel="noopener noreferrer">
                                                        <i>https://www.fnecm.org/index.php/fr</i>
                                                    </a>
                                                </div>

                                                <div>
                                                    <p className="font-bold text-start ">■ Banque Camerounaise des Petites et Moyennes Entreprises (BC-PME SA)</p>
                                                    <p>Mission : Apporter les concours financiers aux PME et à l'Artisanat. Siège Yaoundé (après la Région du Centre).</p>
                                                    <a href="https://bc-pme.com/"
                                                        className="text-blue-600 hover:underline break-all block mt-1"
                                                        target="_blank"
                                                        rel="noopener noreferrer">
                                                        <i>https://bc-pme.com/</i>
                                                    </a>
                                                </div>

                                                <div>
                                                    <p className="font-bold text-start ">■ Agence de Promotion des Investissements (API)</p>
                                                    <p>Mission : Promotion du site économique « Cameroun ». Siège Yaoundé, nouvelle route Bastos.</p>
                                                    <a href="https://www.investincameroon.net/language/fr/"
                                                        className="text-blue-600 hover:underline break-all block mt-1"
                                                        target="_blank"
                                                        rel="noopener noreferrer">
                                                        <i>https://www.investincameroon.net/language/fr/</i>
                                                    </a>
                                                </div>

                                                <div>
                                                    <p className="font-bold text-start ">■ Centres de gestion agréés (CGA)</p>
                                                    <p>Association agréée par le Ministre chargé des Finances dont le but est d'apporter une assistance en matière de gestion, d'encadrement et d'exécution des obligations fiscales et comptables aux petites entreprises adhérentes réalisant un chiffre d'affaires annuel compris entre 15 et 100 millions de FCFA.</p>
                                                    <a href="https://minfi.gov.cm/les-centres-de-gestion-agrees-cadres-de-partenariat-par-excellence-de-ladministration-fiscale-et-des-pme9/"
                                                        className="text-blue-600 hover:underline break-all block mt-1"
                                                        target="_blank"
                                                        rel="noopener noreferrer">
                                                        <i>https://minfi.gov.cm/les-centres-de-gestion-agrees-cadres-de-partenariat-par-excellence-de-ladministration-fiscale-et-des-pme9/</i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-white rounded-lg shadow-sm">
                                            <p className="font-bold bg-[#dac7ac] p-3 text-lg text-gray-800 text-start">
                                                3. Chambres consulaires et Organisations patronales
                                            </p>
                                            <div className="p-4 space-y-4 text-black">
                                                <div>
                                                    <p className="font-bold text-start ">■ Chambre de Commerce, de l'Industrie, des Mines et de l'Artisanat (CCIMA)</p>
                                                    <p>Organisme consultatif et représentatif des milieux d'affaires dans les domaines du commerce, de l'industrie, des mines et de l'artisanat, il joue le rôle de courroie de transmission entre d'une part, les milieux d'affaires privés et d'autre part, les pouvoirs publics en matière de consultation et de représentation, concernant les nombreux domaines au premier rang desquels se trouve l'économie. Son siège se trouve à Douala.</p>
                                                    <a href="https://www.ccima.cm/interne.php?idsmenu=269"
                                                        className="text-blue-600 hover:underline break-all block mt-1"
                                                        target="_blank"
                                                        rel="noopener noreferrer">
                                                        <i>https://www.ccima.cm/interne.php?idsmenu=269</i>
                                                    </a>
                                                </div>

                                                <div>
                                                    <p className="font-bold text-start ">■ Chambre d'Agriculture, des Pêches, de l'Élevage et des Forêts du Cameroun (CAPEF)</p>
                                                    <p>Organisme de représentation et de défense des intérêts des professionnels de l'agriculture, de la pêche, de l'élevage, de la forêt et de la faune auprès des pouvoirs publics. (Siège : Yaoundé, après SHO).</p>
                                                </div>

                                                <div>
                                                    <p className="font-bold text-start ">■ Groupement des Entreprises du Cameroun (GECAM)</p>
                                                    <p>Basé à Douala, le GECAM est la principale organisation patronale du Cameroun.</p>
                                                    <a href="https://legecam.cm"
                                                        className="text-blue-600 hover:underline break-all block mt-1"
                                                        target="_blank"
                                                        rel="noopener noreferrer">
                                                        <i>https://legecam.cm</i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="bg-white rounded-lg shadow-sm">
                                            <p className="font-bold bg-[#dac7ac] p-3 text-lg text-gray-800 text-start">
                                                4. Quelques programmes en faveur de l'entrepreneuriat et l'emploi des jeunes
                                            </p>
                                            <div className="p-4 space-y-4 text-black">
                                                <div>
                                                    <p className="font-bold text-start ">■ Programme d'appui à la jeunesse rurale et urbaine (PAJER-U).</p>
                                                    <p>Le Pajer-U est mis en place par le biais du ministère de la jeunesse et de l'éducation civique.</p>
                                                    <a href="http://www.pajeru-pifma.com"
                                                        className="text-blue-600 hover:underline break-all block mt-1"
                                                        target="_blank"
                                                        rel="noopener noreferrer">
                                                        <i>www.pajeru-pifma.com</i>
                                                    </a>
                                                </div>

                                                <div>
                                                    <p className="font-bold text-start ">■ Programme de promotion de l'entrepreneuriat agropastoral des jeunes (PEA-Jeune).</p>
                                                    <p>Le PIPMAS promeut l'emploi et l'auto-emploi des jeunes.</p>
                                                    <a href="http://www.pajeru-pifma.com"
                                                        className="text-blue-600 hover:underline break-all block mt-1"
                                                        target="_blank"
                                                        rel="noopener noreferrer">
                                                        <i>www.pajeru-pifma.com</i>
                                                    </a>
                                                </div>
                                              
                                                <div>
                                                    <p className="font-bold text-start ">■ Programme de Promotion de l'Entrepreneuriat des Femmes et des Jeunes au Cameroun (PPEFJC).</p>
                                                    <p>Programme initié par l'OIF, en vue d'appuyer les efforts du Gouvernement en faveur de la recherche des opportunités de création d'emploi.</p>
                                                </div>

                                                <div>
                                                    <p className="font-bold text-start ">■ Programme d'aide au retour et à l'insertion des jeunes de la diaspora (PARU-JEDI).</p>
                                                </div>

                                                <div>
                                                    <p className="font-bold text-start ">■ Programme d'Appui aux acteurs du secteur informel (PIAASI).</p>
                                                    <p>Structure gouvernementale rattachée au ministère de l'emploi et de la formation professionnelle.</p>
                                                </div>

                                                <div>
                                                    <p className="font-bold text-start ">■ Programme Intégré de Renforcement des Capacités des Entrepreneurs Locaux (EMPRETEC).</p>
                                                    <p>Structure gouvernementale rattachée au ministère des PME.</p>
                                                </div>

                                                <div>
                                                    <p className="font-bold text-start ">■ Programme KAIZEN – Amélioration de la Productivité et de la Qualité.</p>
                                                    <p>Structure gouvernementale rattachée au ministère des PME.</p>
                                                </div>

                                                <div>
                                                    <p className="font-bold text-start ">■ Programme National d'Incubation (INCUB'CAM).</p>
                                                    <p>Structure gouvernementale rattachée au ministère des PME.</p>
                                                </div>

                                                <div>
                                                    <p className="font-bold text-start ">■ Pépinière Nationale Pilote d'Entreprises d'Édéa (PNPE).</p>
                                                    <p>Structure gouvernementale rattachée au ministère des PME.</p>
                                                </div>
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
                                    className="w-full sm:w-4/12 py-2 px-4  bg-[#4c75f0] text-white flex justify-between items-center sm:justify-center"
                                    onClick={() => handleToggle(9)}
                                >
                                    <span className="text-start">  Livres de référence en lien avec l’entrepreneuriat</span>
                                    <span className="sm:ml-10 text-2xl">{open === 9 ? "▲" : "▼"}</span>
                                </button>


                            </div>

                            {open === 9 && (
                                <div className="bg-white text-justify p-4">
                                    <div className="w-full ">
                                       <div className="space-y-4">
                                                < p className="font-bold">
                                                    Auteurs Camerounais
                                                </p>
                                                <p>
                                                    - Victor Fotso et Jean-Pierre Guyomard, <i className="text-[#4A62AA]">Le chemin de Hiala</i>. Éd. de Septembre, 1994.
                                                </p>
                                                <p>
                                                    - Jean-Samuel Noutchogouin, <i className="text-[#4A62AA]">À la mesure de mes pas</i>. Monde Global Éditions nouvelles, 2015.
                                                </p>
                                                <p>
                                                    - Lucas Kamdem, <i className="text-[#4A62AA]">De la misère à l’abondance : Les secrets des entrepreneurs libres, riches, heureux et fiers de l’être</i>. Éditions FACOP, 2017.
                                                </p>
                                                <p>
                                                    - Alain Foka, <i className="text-[#4A62AA]">Coffret biographique du Patriarche Kadji Defosso : il a fallu du temps</i>. The Madon. 2018
                                                </p>
                                                <p>
                                                    - Paul Kammogne Fokam et Gervais Koffi Djondo, <i className="text-[#4A62AA]">Deux capitaines d’industrie se racontent</i>, Éditions Afrédit, 2019.
                                                </p>
                                                <p>
                                                    - Louis Kamga Kamga, <i className="text-[#4A62AA]">Fotso Victor : sur les traces d’un milliardaire</i>. 2020.
                                                </p>
                                                <p>
                                                    - Dénis Christian Fouelefack Tsamo, <i className="text-[#4A62AA]"> Paul MONTHE, 1914-1974 : Histoire d’un bâtisseur de l’économie camerounaise</i>. Les Éditions du Schabel, 2021.
                                                </p>
                                                <p>
                                                    - Dieudonné Bougne, <i className="text-[#4A62AA]">Itinéraire d’un destin atypique – Autobiographie d’un opérateur économique camerounais</i>. L’Harmattan Cameroun, 2023.
                                                </p>
                                                <p>
                                                    - Christian Penda Ekoka, <i className="text-[#4A62AA]">Le Guide de l’investisseur</i>. Éd. de Septembre, 1994.
                                                </p>
                                                 <p className="font-bold pt-4">
                                                    Auteurs étrangers
                                                </p>
                                                <p>
                                                    - Jean-Pierre Warnier, <i className="text-[#4A62AA]">L’esprit d’entreprise au Cameroun</i>, Karthala, 1993.
                                                </p>
                                                <p>
                                                    - Peter Geschiere et Piet Konings, <i className="text-[#4A62AA]">Itinéraires d’accumulation au Cameroun</i>, Karthala, 1993.
                                                </p>
                                                <p>
                                                    - T. Harv Eker, <i className="text-[#4A62AA]">Secrets of the Millionaire Mind: Think rich to get rich</i>. Piaktus, 2007.
                                                </p>
                                                <p>
                                                    - W. Chan Kim, Renée Mauborgne, <i className="text-[#4A62AA]">Stratégie océan bleu : comment créer de nouveaux espaces stratégiques</i>. Pearson, 2015.
                                                </p>
                                                <p>
                                                    - Gary Keller, Jay Papasan, <i className="text-[#4A62AA]">Passez à l’essentiel ! Comment réussir tout ce que vous entreprenez</i>, Pearson, 2013.
                                                </p>
                                                <p>
                                                    - Robert Green, <i className="text-[#4A62AA]">Les lois de la nature humaine</i>, Alisio, 2019.
                                                </p>
                                                <p>
                                                    - Robert T. Kiyosaki, <i className="text-[#4A62AA]">Rich Dad, Poor Dad: What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!</i>, Plata Publishing, 2017.
                                                </p>
                                                <p>
                                                    - Stephen R. Covey, <i className="text-[#4A62AA]">Les 7 habitudes de ceux qui réalisent tout ce qu’ils entreprennent</i>. Éditions First, 2017.
                                                </p>
                                                <p>
                                                    - John P. Strelecky, <i className="text-[#4A62AA]">Les 5 grands rêves de vie</i>. Kindle, 2012.
                                                </p>
                                                <p>
                                                    - Jack Canfield, <i className="text-[#4A62AA]">Les succès selon Jack – Les principes du succès pour vous rendre là où vous souhaiteriez être</i>. Un Monde différent, 2005.
                                                </p>
                                                <p>
                                                    - Michael E. Gerber, <i className="text-[#4A62AA]">E-Myth. Le mythe de l’entrepreneur revisité</i>. 2017.
                                                </p>
                                                <p>
                                                    - Eric Ries, <i className="text-[#4A62AA]">Lean Startup : Adoptez l’innovation continue</i>. Pearson, 2017.
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
                                    <span className="text-2xl">{open === 10 ? "▲" : "▼"}</span>
                                </button>


                            </div>

                            {open === 10 && (
                                <div className="bg-white text-start p-4">
                                    <div className="w-full ">
                                        <div className="space-y-4">

                                            <p>
                                                - Pour tester votre esprit entrepreneurial : <br />
                                                <a href="https://www.test-mace.com/accueil/" className="text-blue-600" target="_blank" rel="noopener noreferrer"><i>  https://www.test-mace.com/accueil/ </i></a>
                                            </p>
                                            <p>
                                                - Pour évaluer vos aptitudes à entreprendre : <br /> <a href="https://business-builder.cci.fr/test-entrepreneur/votre-caractere" className="text-blue-600" target="_blank" rel="noopener noreferrer"><i>  https://business-builder.cci.fr/test-entrepreneur/votre-caractere </i> </a>
                                            </p>
                                            <p>
                                                - Pour tester votre détermination : <br /> <a href="https://business-builder.cci.fr/test-entrepreneur/" className="text-blue-600" target="_blank" rel="noopener noreferrer"><i>  https://business-builder.cci.fr/test-entrepreneur/ </i></a>
                                            </p>
                                            <p>
                                                - Ministère de l’Emploi et de la Formation professionnelle (MINEFOP) :<br /> <a href="https://www.minefop.cm" className="text-blue-600" target="_blank" rel="noopener noreferrer"><i> https://www.minefop.cm </i></a>
                                            </p>
                                            <p>
                                                - Ministère des Petites et Moyennes Entreprises, de l'Économie Sociale et de l'Artisanat (MINPMEESA) : <br /> <a href="https://www.minpmeesa.cm" className="text-blue-600" target="_blank" rel="noopener noreferrer"><i> https://www.minpmeesa.cm </i></a>
                                            </p>
                                            <p>
                                                - Les dix compétences du futur d’après le World Economic Forum : <br /> <a href="https://www.weforum.org/stories/2020/10/top-10-work-skills-of-tomorrow-how-long-it-takes-to-learn-them/" className="text-blue-600" target="_blank" rel="noopener noreferrer"> <i>  https://www.weforum.org/stories/2020/10/top-10-work-skills-of-tomorrow-how-long-it-takes-to-learn-them/ </i></a>
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