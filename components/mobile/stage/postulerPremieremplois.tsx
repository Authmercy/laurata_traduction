"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Navbar from "../navbar/navbar";
import FooterMobile from "../footer/footerEnd";



export default function PremierEmploisMobile() {
    const [open, setOpen] = useState(null);
    const router = useRouter();
    const handleToggle = (index: any) => {
        setOpen(open === index ? null : index);
    };
    const handleClick2 = () => {
        router.push("/students/postulerStage");
    }; const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileMenuOpen2, setIsMobileMenuOpen2] = useState(false);



    return (
        <div>
            <div className="min-h-screen  text-black  bg-[#4A62AA]  overflow-auto  w-screen bg-cover  text-justify bg-center bg-no-repeat "  >
         
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
                        <p>   pOSTULER à un premier emploi (débutant) </p>
                    </div>



                    <div

                        className="bg-white  mt-8  p-2 py-4 shadow-sm mb-2 hover:shadow-md transition-shadow"
                    >
                        <p className=" py-2">
                            Bien qu’il n’existe aucune recette miracle pour trouver un premier emploi, les recruteurs et DRH chevronnés
                            recommandent de minutieusement cibler les offres qui cadrent avec son profil et de déposer des dossiers de candidature de qualité.    </p>
                        <p className=" ">
                            Aux jeunes diplômés qui postulent pour la première fois à un emploi, ci-dessous la démarche méthodique en 5 étapes la plus
                            efficace.
                        </p>
                    </div>
                    <div

                        className="bg-white/70   mt-2  p-2 py-4 shadow-sm mb-2 hover:shadow-md transition-shadow"
                    >


                        <div className="mt-6 space-y-4">
                            <div>

                                <div className="flex flex-col sm:flex-row gap-1">
                                    <button
                                        className="w-full sm:w-4/12 py-2 px-4  bg-[#4A62AA] text-white flex justify-between items-center sm:justify-center"
                                        onClick={() => handleToggle(1)}
                                    >
                                        <div className="flex gap-2">


                                            <span className="  uppercase font-bold ">  1</span>
                                            <span className="text-start">   Faire votre bilan de compétences
                                            </span>
                                        </div>
                                        <span className="sm:ml-10">{open === 1 ? "▲" : "▼"}</span>
                                    </button>


                                </div>

                                {open === 1 && (
                                    <div className="bg-white/60 p-4">
                                        <div className="w-full">
                                            <p className="text-base">
                                                Le bilan de compétences vous rend apte à citer vos principales compétences et qualités ainsi que les points saillants de votre parcours. D'autre part, il vous permet d'identifier vos points faibles ou les domaines dans lesquels vous devez acquérir de nouvelles connaissances. Nous vous suggérons vivement de le faire avant toute candidature à un premier emploi.
                                            
                                            </p>
                                             <p> <Link href="/misc/nous_contacter" className="  mt-2 sm:mt-0 hover:text-blue-700 transition">
                                                    Contactez-nous
                                                </Link> pour savoir comment faire son bilan de compétences.</p>  
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="mt-2 space-y-4">
                            <div>

                                <div className="flex flex-col sm:flex-row gap-1">
                                    <button
                                        className="w-full sm:w-4/12 py-2 px-4  bg-[#4A62AA] text-white  flex justify-between items-center sm:justify-center"
                                        onClick={() => handleToggle(2)}
                                    ><div className="flex gap-2">
                                        <span className="  uppercase font-bold ">  2</span>
                                        <span className="text-start"> Trouver les offres d’emplois ou les entreprises à contacter
                                        </span>
                                        <span className="sm:ml-10">{open === 2 ? "▲" : "▼"}</span>
                                   </div> </button>


                                </div>

                                {open === 2 && (
                                    <div className="bg-white/60 p-4">
                                        <div className="w-full">
                                            <div className="flex flex-col gap-1">          <div className="bg-white/60 p-4 grid grid-cols-[1fr_3fr] gap-8">

                                                <div className=" text-[#A87A38] text-center  ">  Annonces d’emplois </div>
                                                <div className="max-w-4xl">
                                                    <p> Consultez la liste des annonces dans notre section  <a href="/students/offresStage" className="text-[#4A62AA] font-bold ">« Offres de stage »</a> ou lisez le quotidien CameroonTribune.</p>

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
                                        className="w-full sm:w-4/12 py-2 px-4  bg-[#4A62AA] text-white flex justify-between items-center sm:justify-center"
                                        onClick={() => handleToggle(3)}
                                    >
                                       <div className="flex gap-2">
                                            <span className="  text-start uppercase font-bold "> 3</span>
                                            <span className="text-start">     Rédiger vos CV et lettre de motivation
                                            </span>
                                        </div>
                                        <span className="sm:ml-10">{open === 3 ? "▲" : "▼"}</span>
                                    </button>


                                </div>

                                {open === 3 && (
                                    <div className="bg-white/60 ">
                                        <div className="w-full">
                                            <div className="flex flex-col">
                                                <div className=" pt-4 px-4 grid grid-cols-1 sm:grid-cols-[1fr_3fr] gap-4">
                                                    <div>
                                                        <p className="font-bold text-[#A87A38] text-lg text-center sm:text-start">CURRICULUM VITAE (CV)</p>
                                                        <p className="text-[#4A62AA] font-bold text-lg  text-center sm:text-start">Objectif du CV</p>
                                                        <div className="max-w-4xl">

                                                            <p>Susciter chez le recruteur l’envie de vous rencontrer.</p>
                                                        </div>
                                                        <br />
                                                        <p className="text-[#4A62AA] font-bold  text-lg  text-center sm:text-start">Principales rubriques du CV</p>
                                                    </div>

                                                </div>

                                                <div className="">
                                                    <div className="bg-[#e7c89e] mt-1 p-4 grid grid-cols-1 sm:grid-cols-[1fr_3fr] gap-4">
                                                        <div className="font-bold text-center  ">Informations personnelles</div>
                                                        <div className="max-w-4xl">
                                                            <p>Noms et Prénoms, Téléphone, E-mail (si necessaire statut marital + nombre d’enfant éventuel) ;</p>
                                                        </div>
                                                    </div>

                                                    <div className="p-4 grid grid-cols-1 sm:grid-cols-[1fr_3fr] gap-4">
                                                        <div className="font-bold text-center sm:text-center">Objectif professionnel</div>
                                                        <div className="max-w-4xl">
                                                            <p>Indiquez ce que vous souhaitez réaliser ainsi que votre ambition en une phrase ;</p>
                                                        </div>
                                                    </div>

                                                    <div className="bg-[#e7c89e] p-2 grid grid-cols-1 sm:grid-cols-[1fr_3fr] gap-4">
                                                        <div className="font-bold text-center sm:text-center">Formation</div>
                                                        <div className="max-w-4xl">
                                                            <p>Indiquez vos diplômes et certifications du plus récent au BAC, en précisant les intitulés, années d’obtention et noms des établissements ; précisez les mentions uniquement si elles sont dignes d’intérêt : bien, très bien…</p>
                                                        </div>
                                                    </div>

                                                    <div className="p-2 grid grid-cols-1 sm:grid-cols-[1fr_3fr] gap-4">
                                                        <div className="font-bold text-center sm:text-center">Expérience professionnelle</div>
                                                        <div className="max-w-4xl">
                                                            <p>Listez vos expériences professionnelles (stage ou bénévolat, etc.) en commençant par la plus récente ; Indiquez la période de travail, le nom de l’entreprise, la ville, le poste occupé, vos missions et réalisations dans un style clair et concis ;</p>
                                                        </div>
                                                    </div>

                                                    <div className="bg-[#e7c89e] p-2 grid grid-cols-1 sm:grid-cols-[1fr_3fr] gap-4">
                                                        <div className="font-bold text-center sm:text-center">Compétences informatiques</div>
                                                        <div className="max-w-4xl">
                                                            <p>Listez les logiciels maîtrisés (outils bureautique, programmation, etc.) ;</p>
                                                        </div>
                                                    </div>

                                                    <div className="p-2 grid grid-cols-1 sm:grid-cols-[1fr_3fr] gap-4">
                                                        <div className="font-bold text-center sm:text-center">Compétences linguistiques</div>
                                                        <div className="max-w-4xl">
                                                            <p>Listez les langues maîtrisées en indiquant le niveau de pratique ;</p>
                                                        </div>
                                                    </div>

                                                    <div className="bg-[#e7c89e] p-2 grid grid-cols-1 sm:grid-cols-[1fr_3fr] gap-4">
                                                        <div className="font-bold text-center sm:text-center">Divers</div>
                                                        <div className="max-w-4xl">
                                                            <p>Cette rubrique peut contenir plusieurs sous-rubriques à savoir « Centres d’intérêts » comme la lecture, les jeux de société…, « Sport », « Engagement associatif », etc.</p>
                                                        </div>
                                                    </div>

                                                    <div className="bg-white p-1 mt-1 grid grid-cols-1 sm:grid-cols-[1fr_3fr] gap-4">
                                                        <div className="p-1 text-center font-bold text-white flex justify-center bg-[#A87A38]">
                                                            <p>NOTA BENE</p>
                                                        </div>
                                                        <div className="max-w-4xl">
                                                            <p>- Insérez une photo uniquement si elle est requise (au format 4x4 et prise par un professionnel) ;</p>
                                                            <p>- Insérez en bas de page la date du jour et votre signature ;</p>
                                                            <p>- Adaptez votre CV au profil du poste recherché et à l’entreprise.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className=" p-2 mt-1">
                                                    <div className="text-center">
                                                        <p><b><Link href="/misc/nous_contacter" className="hover:text-xl">Contactez-nous</Link></b> pour obtenir un modèle de CV pour débutant.</p>
                                                    </div>
                                                </div>

                                                <div className="bg-white/60  pt-4 ">
                                                    <div className="font-bold uppercase text-[#A87A38] text-center">lettre de motivation</div>
                                                    <div className="p-1 mt-1 grid grid-cols-1 sm:grid-cols-[1fr_3fr] gap-4">
                                                        <div className="p-1 bg-[#f7debb]">
                                                            La lettre de motivation complète votre CV. Elle doit expliquer les raisons de votre candidature et convaincre le recruteur que vous êtes le candidat idéal. Pour ce faire :
                                                        </div>
                                                        <div className="max-w-4xl mt-4 space-y-2">
                                                            <p>- Étayez vos motivations pour le poste sans exagérations dans un style clair, précis et concis ;</p>
                                                            <p>- Mettez en exergue vos compétences et connaissances indispensables pour le poste et les missions ;</p>
                                                            <p>- Expliquez comment votre expérience pourrait être utile à l’entreprise ;</p>
                                                            <p>- Évitez de reproduire votre CV.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="bg-white/60 pt-4 mt-1">
                                                    <div className="font-bold uppercase text-[#A87A38] text-center">Recommandations</div>
                                                    <div className=" p-1 mt-1 space-y-2">
                                                        <p>- Sauf instructions contraires du recruteur, saisissez votre lettre sur ordinateur ; adoptez une mise en page structurée et une police identique pour l’ensemble du document ;</p>
                                                        <p>- Évitez les fautes (grammaire, orthographe, syntaxe, etc.), l’usage d’un langage familier et les copier-coller ; faites relire votre lettre par une personne plus expérimentée ;</p>
                                                        <p>- Adaptez votre lettre de motivation pour chaque entreprise et poste visés.</p>
                                                        <p>- À toutes fins utiles, ayez toujours sur vous un CV imprimé au quotidien ou dans votre téléphone au format PDF.</p>
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
                                        className="w-full sm:w-4/12 py-2 px-4  bg-[#4A62AA] text-white flex justify-between items-center sm:justify-center"
                                        onClick={() => handleToggle(4)}
                                    ><div className="flex gap-2"> 
                                        <span className="  uppercase font-bold ">  4</span>
                                        <span className="text-start">     Envoyer et suivre votre dossier de candidature
                                        </span>
                                        <span className="sm:ml-10">{open === 4 ? "▲" : "▼"}</span>
                                  </div>  </button>


                                </div>

                                {open === 4 && (
                                    <div className="bg-white/60 ">
                                        <div className="w-full">
                                            <div className="bg-white/60 ">
                                                <div className="bg-[#e7c89e] p-4 grid grid-cols-1 sm:grid-cols-[1fr_3fr] gap-8">
                                                    <div className="font-bold text-center sm:text-end">
                                                        Réponse à une annonce
                                                    </div>
                                                    <div className="max-w-4xl">
                                                        <p>
                                                            Envoyez votre dossier de candidature (CV, Lettre de motivation, copies des diplômes, etc.) dans les délais et par les voies requises : courriel ou dossier physique, en ligne, etc.
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="p-4 grid grid-cols-1 sm:grid-cols-[1fr_3fr] gap-8">
                                                    <div className="font-bold text-center sm:text-end">
                                                        Candidature spontanée
                                                    </div>
                                                    <div className="max-w-4xl">
                                                        <p>
                                                            Envoyez votre candidature au format papier (plus efficace) ou par courriel (plus économique).
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="bg-[#e7c89e]  p-2 grid grid-cols-1 sm:grid-cols-[1fr_3fr] gap-8">
                                                    <div className="font-bold text-center sm:text-end">
                                                        Relancez l’entreprise
                                                    </div>
                                                    <div className="max-w-4xl">
                                                        <p>
                                                            En vous y rendant ou en appelant toutes les deux à trois semaines.
                                                            Astuce : N’hésitez pas à poliment demander à rencontrer le responsable des ressources humaines ; cela attestera de votre assurance mais également de votre intérêt pour le poste.
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="mt-4 p-2">
                                                    <p className="text-red-500 text-center mb-2 font-bold ">Avertissement !</p>
                                                    <p>
                                                        Avant de répondre à une offre, prenez le temps de lire attentivement le profil recherché pour vous assurer que votre formation et vos compétences y correspondent. Si l’entreprise recherche par exemple un candidat bilingue possédant impérativement une première expérience professionnelle et que ce n’est pas votre cas, inutile de postuler.
                                                    </p>
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
                                        className="w-full sm:w-4/12 py-2 px-4  bg-[#4A62AA] text-white  flex justify-between items-center sm:justify-center"
                                        onClick={() => handleToggle(5)}
                                    > <div className="flex gap-2">
                                            <span className="  uppercase font-bold ">  5</span>
                                            <span className="text-start">  Préparer votre entretien d’embauche
                                            </span> </div>
                                        <span className="sm:ml-10">{open === 5 ? "▲" : "▼"}</span>
                                    </button>


                                </div>

                                {open === 5 && (
                                    <div className="bg-white/60  ">
                                        <div className="w-full">
                                            <div className="flex flex-col space-y-4">
                                                <div className=" ">
                                                    <div className="font-bold p-4 uppercase text-[#A87A38] text-center">
                                                        Avant l'entretien
                                                    </div>
                                                    <div className=" p-4  space-y-2">
                                                        <p>
                                                            - &nbsp;&nbsp;Renseignez-vous sur l’entreprise via Internet : historique, secteur d’activités, produits, chiffre d’affaires, concurrents, etc.
                                                        </p>
                                                 
                                                        <p>
                                                            - &nbsp;&nbsp;Exercez-vous à vous présenter en moins de 3 minutes sans répéter votre CV, en synthétisant votre parcours autour de quelques axes majeurs (compétences et qualités, expérience, projet professionnel, etc.) ;
                                                        </p>
                                                        <p>
                                                            - &nbsp;&nbsp;Soyez ponctuel ! Portez une tenue décente et formelle et ne vous parfumez pas à outrance.
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="bg-[#e7c89e]/60 ">
                                                    <div className="font-bold uppercase p-4 text-[#A87A38] text-center">
                                                        Pendant l'entretien
                                                    </div>
                                                    <div className=" p-4  space-y-2">
                                                        <p>
                                                            - &nbsp;&nbsp;Ne vous asseyez pas avant d’y avoir été invité ;
                                                        </p>
                                                        <p>
                                                            - &nbsp;&nbsp;Soyez très attentif aux questions, sachez être à l’écoute et ne coupez pas la parole à vos interlocuteurs ;
                                                        </p>
                                                        <p>
                                                            - &nbsp;&nbsp;Lorsque vous n’avez pas bien entendu ou compris une question ou phrase, demandez toujours poliment à votre interlocuteur de la répéter !
                                                        </p>
                                                        <p>
                                                            - &nbsp;&nbsp;Soyez à même de montrer sans exagérations comment votre expérience, vos compétences et vos qualités vous aideront dans l’accomplissement des missions du poste et font de vous le candidat idéal ; illustrez chaque argument avancé par un exemple précis, des données chiffrées, des faits, etc.
                                                        </p>
                                                        <p>
                                                            - &nbsp;&nbsp;Préparez quelques questions d’intérêt aux recruteurs comme par exemple : Existe-t-il des perspectives d’évolution pour le poste dans l’entreprise ? Existe-t-il des possibilités de perfectionnement du personnel ? etc.
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="bg-white/60 ">
                                                    <div className="font-bold p-4 uppercase text-[#A87A38] text-center">
                                                        Au terme de l'entretien
                                                    </div>
                                                    <div className=" p-4  space-y-2">
                                                        <p>
                                                            - &nbsp;&nbsp;Si elle ne vous a pas été communiquée par vos interlocuteurs, demandez-leur poliment la suite du processus de recrutement : serai-je contacté si je suis retenu ou pas ? Y aura-t-il d’autres entretiens ?
                                                        </p>
                                                        <p>
                                                            - &nbsp;&nbsp;Remerciez (à nouveau) vos interlocuteurs pour l’intérêt porté à votre candidature et dites au revoir en dernier.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                )}
                            </div>
                        </div> <div className="mt-6 space-y-4">
                            <div className="flex flex-col space-y-4 ">


                                <div className="bg-white/60 mt-1 grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4 md:gap-8">
                                    <div className="text-center p-4 font-bold text-white flex items-center justify-center bg-[#4A62AA] uppercase">
                                        Évitez les arnaques !
                                    </div>
                                    <div className="p-2 space-y-2">
                                        <p>- En règle générale, aucun employeur n’exige des paiements préalables en contrepartie d’un emploi.</p>
                                        <p>- Restez vigilant face aux annonces truffées de fautes, demandant des frais d’étude de dossier, de travail à domicile, etc.</p>
                                        <p>- Bien vouloir nous signaler toute annonce qui vous paraît suspecte.</p>
                                    </div>
                                </div>

                                <div className="flex justify-center md:justify-end py-4">
                                    <button
                                        onClick={handleClick2}
                                        className="px-6 py-2 border border-[#4A62AA] bg-white/70 text-[#4A62AA] font-bold rounded-lg"
                                    >
                                        Postuler à un stage
                                    </button>
                                </div>


                                <div className="bg-white/60 p-2 mt-1">
                                    <div className="font-bold uppercase text-[#4A62AA] text-center">Références bibliographiques</div>
                                </div>
                                <div className="bg-white p-4 space-y-2">
                                    <p>- Christel de Foucault et illustré par Benoît Pouydesseau. (2018). <i className="text-blue-500">50 erreurs à éviter pour trouver un job</i>, Eyrolles.</p>
                                    <p>- Hervé Bommelaer, Philippe Douale, et Nicolas Pavesi. (2018). <i className="text-blue-500">Recherche d’emploi : secrets de pros</i>, Eyrolles.</p>
                                    <p>- Karine Averseng. (2015). <i className="text-blue-500">Les 5 minutes qui comptent pour réussir un entretien d'embauche</i>, Larousse.</p>
                                    <p>- Daniel Porot (2018). <i className="text-blue-500">50 erreurs à éviter pour trouver un job</i>, Solar.</p>
                                </div>


                                <div className="bg-white/60 p-2 mt-1">
                                    <div className="font-bold uppercase text-[#4A62AA]text-center">Liens utiles</div>
                                </div>
                                <div className="bg-white p-4 space-y-2">
                                    <p>- Ministère de l’Emploi et de la Formation professionnelle (MINFOP) </p>
                                    
                                    <p>- Fed Africa : <br />
                                        <a href="https://www.fedafrica.com" className="text-blue-500" target="_blank" rel="noopener noreferrer"> https://www.fedafrica.com</a>
                                    </p>
                                    <p>- Michael Page Africa : <br />
                                        <a href="https://www.michaelpageafrica.com" className="text-blue-500" target="_blank" rel="noopener noreferrer"> https://www.michaelpageafrica.com</a>
                                    </p>
                                </div>
                            </div>

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
