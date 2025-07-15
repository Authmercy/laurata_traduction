"use client";
import React, { useRef } from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import StudentDestinationsTable from "./tableDestinations";


export default function EtudeComponent() {
    const [open, setOpen] = useState(null);
    const handleToggle = (index: any) => {
        setOpen(open === index ? null : index);
    };



    return (

        <div className="flex flex-col   md:flex-row  ">
            <div className="flex-grow md:w-2/3 p-8">

                <div className="  mt-1">

                    <div className="flex w-full gap-2 text-white font-bold">

                        <div className="p-2 px-2  uppercase  w-[35%] text-2xl text-center bg-[#9C824A]  hover:bg-[#a19478]  h-20 flex items-center justify-center">

                            <Link href="/students/bacAlafac/bac_fac"> Orientation</Link>
                        </div>


                        <div className="p-3 px-8  text-xl text-center bg-[#A87A38] h-12 mt-4 flex items-center justify-center">
                            ÉTUDIER À L’ÉTRANGER
                        </div>

                    </div>

                    <div className="flex flex-row my-4 gap-1">
                        <div className="flex-1  ">
                        </div>
                        <div className="flex-2 bg-white  text-black p-4 text-end"> <p className="">
                            Les voyages forment la jeunesse.
                            <br />  <span className="text-[#4A62AA] font-semibold "> Adage populaire</span>
                        </p>

                        </div>
                    </div>

                    <div className="mt-1  text-black bg-white/70 p-8 space-y-4">
                        <p>Le nombre de bacheliers et d’étudiants camerounais qui choisissent de poursuivre leurs études à
                            l’étranger connaît une progression fulgurante depuis les années 90. Les raisons en sont multiples :
                            <i> formation envisagée n’étant pas proposée au Cameroun ; quête d’un diplôme d’une université
                                prestigieuse ; recherche d’expérience à l’international ; faire de la recherche, se former ou
                                se perfectionner dans des domaines de pointe, etc. </i>

                        </p>

                        <p>
                            Ci-dessous l’essentiel de ce qu’il vous faut savoir, faire et prévoir pour préparer de manière optimale vos études à l’étranger.
                        </p>
                        <div className="mt-1 space-y-4">
                            <div>


                                <button
                                    className="py-2 px-4 w-full bg-white/80 text-[#4A62AA]  text-xl font-bold flex justify-between items-center"
                                    onClick={() => handleToggle(1)}
                                >
                                    <span>Bien préparer ses études  à  l’étranger       </span>
                                    <span className="text-2xl">{open === 1 ? "▲" : "▼"}</span>
                                </button>


                                {open === 1 && (
                                    <div className="flex flex-col ">

                                        <div className="bg-white/60 p-4 ">
                                            <div className="bg-[#ddc19b] p-4 grid grid-cols-[1fr_3fr] gap-8">

                                                <div className=" font-bold  text-[#A87A38] text-center ">
                                                    Choix du pays d’études
                                                </div>
                                                <div className="max-w-4xl">
                                                    <p>Il est subjectif et dépend de votre projet professionnel mais doit cependant être réaliste. Inutile de rêver d’études en Suisse si vous ne disposez pas des moyens pour les financer.  </p>

                                                    <p> ─ <b> Principaux critères à prendre en compte :  </b>
                                                        <i>   le coût des études et de la vie ; les exigences linguistiques ; la présence ou non d’un proche dans le pays hôte ; la possibilité d’y travailler pendant et après ses études ; la facilité ou non d’obtention d’un visa ; la reconnaissance du diplôme obtenu au Cameroun.    </i> </p>
                                                </div>
                                            </div>
                                            <div className="p-4 bg-[#dbe0e7] grid grid-cols-[1fr_3fr] gap-8">

                                                <div className=" font-bold text-[#A87A38] text-end ">
                                                    Choix de l’université et de la formation
                                                </div>
                                                <div className="max-w-4xl">
                                                    <p> ─ <b> Posez-vous les bonnes questions :  </b>
                                                        <i>    Quel type de formation voulez-vous effectuer ? Voulez-vous partir immédiatement après le bac ou après une formation initiale ? Quels sont vos objectifs une fois votre diplôme en poche ? etc.</i>
                                                    </p>
                                                    <p> ─ <b> Consultez les sites Internet des écoles/universités  </b>et parcourez leurs offres de formations et critères d’admission.
                                                    </p>
                                                </div>



                                            </div>
                                            <div className="bg-[#ddc19b] p-2 grid grid-cols-[1fr_3fr] gap-8">

                                                <div className=" font-bold text-[#A87A38]  text-center ">
                                                    Financement des études </div>
                                                <div className="max-w-4xl">
                                                    <p> ─ <b> Aspect le plus important </b>car étudier à l’étranger implique des coûts très élevés,
                                                        <i>    jusqu’à plusieurs millions de Francs CFA en frais de scolarité dans les pays industrialisés. </i>
                                                    </p>
                                                    <p> ─ <b>Assurez-vous que vous ou vos parents pourrez payer votre scolarité  </b>
                                                        mais également faire face aux charges quotidiennes <i> (logement, assurance santé, repas et transport, bibliothèque, loisirs, etc.). </i></p>
                                                </div>
                                            </div>
                                            <div className="p-4 bg-[#dbe0e7]  grid grid-cols-[1fr_3fr] gap-8">

                                                <div className=" font-bold text-[#A87A38] text-center ">
                                                   Obtention du visa
                                                </div>
                                                <div className="max-w-4xl">
                                                    <p> ─ <b> Consultez le site Internet de l’ambassade du pays de destination pour la procédure </b>
                                                        de constitution et dépôt du dossier de demande de visa d’études. Respectez scrupuleusement les délais et les instructions y relatifs !

                                                    </p>
                                                    <p> ─ <b> Assurez-vous que vous remplissez tous les critères et que votre dossier est complet </b>
                                                        à son dépôt.
                                                    </p>
                                                    <p> ─ <b className="text-red-600"> Attention aux arnaques !  </b>
                                                        Évitez de passer par des intermédiaires pour vos démarches, excepté si ces derniers possèdent un mandat officiel valide du pays concerné qu’il faudra impérativement demander à voir.
                                                    </p>
                                                    <p> ─ <b>  Soyez motivé et persévérant </b>
                                                        car la procédure d’admission aux universités étrangères et d’obtention d’un visa, en particulier dans les pays industrialisés, riment avec processus de sélection rigoureux et long et démarches administratives complexes.
                                                    </p>
                                                </div>



                                            </div>
                                            <div className="  mt-8 ">

                                                <p className="text-[#4A62AA] font-bold ">    En perspective de vos études à l’étranger :</p>
                                                <div className="m-6">
                                                    <p> <span className="text-[#4A62AA] text-2xl font-bold "> - </span>
                                                        <b className="uppercase"> Optez</b>  pour une formation initiale dans une université camerounaise ou pour une CPGE ayant conclu un accord bilatéral avec une Grande École étrangère (PrépaVogt, IUC, etc.). Cela vous permettra d’intégrer cette dernière dès la 4ème année.
                                                    </p>
                                                    <p> <span className="text-[#4A62AA] text-2xl font-bold "> - </span>
                                                        <b className="uppercase"> Ciblez  </b> une formation ayant de réels débouchés au Cameroun si vous envisagez d’y retourner après vos études. En effet, bon nombre de filières (énergie nucléaire, beaux-arts, etc.) n’offrent que très peu de débouchés.
                                                    </p>
                                                    <p> <span className="text-[#4A62AA] text-2xl font-bold "> - </span>
                                                        <b className="uppercase"> Recherchez et postulez  </b>aux bourses d’études car elles demeurent un des moyens le plus économique et le moins stressant de faire des études à l’étranger. Cf notre rubrique « Bourses ».
                                                    </p>
                                                </div>

                                            </div>

                                            <div className="  mt-4">

                                                <p className="text-red-500 font-bold "> Avertissement !</p>
                                                <p>
                                                    N’utilisez jamais des faux documents dans vos demandes de visa et d’admission à l’université ; ils sont détectés dans 100% des cas. La conséquence sera le rejet de votre demande et l’interdiction définitive de postuler à nouveau à un visa dans le pays concerné. De plus, cela ternira la réputation de l’ensemble des Camerounais et leur rendra difficile l’obtention d’un visa.
                                                </p>

                                            </div>

                                        </div>





                                    </div>)}








                            </div>


                        </div>


                        <div className="mt-1 space-y-4">
                            <div>


                                <button
                                    className="py-2 px-4 w-full bg-white/80 text-[#4A62AA]  text-xl font-bold flex justify-between items-center"
                                    onClick={() => handleToggle(2)}
                                >
                                    <span>Rentrer au Cameroun après ses études à  l’étranger ou pas ?     </span>
                                    <span className="text-2xl">{open === 2 ? "▲" : "▼"}</span>
                                </button>


                                {open === 2 && (
                                    <div className="bg-white/80 p-4 ">

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
                                       <b>     Si vous envisagez de retourner au Cameroun, nous vous recommandons vivement de minutieusement préparer votre retour. </b>  Ci-dessous les démarches fondamentales à effectuer et les dispositions à prendre avant le retour définitif provenant de nos experts retournés. </p>
                                            <div className="border-y-2 border-[#4A62AA] mt-2">
                                                <p className="p-2 bg-[#dbe0e7]">
                                                    ‒ Enrichissez votre parcours d’un maximum d’expériences professionnelles ;
                                                </p>
                                                <p className="p-2 bg-[#ddc19b]">
                                                    ‒ Effectuez si possible plusieurs voyages au Cameroun pendant ou après votre formation pour évaluer les conditions d’insertion professionnelle (salariat ou entrepreneuriat) ;

                                                </p>
                                                <p className="p-2 bg-[#dbe0e7]">
                                                    ‒ Informez-vous sur l’existence de programmes d’appui au retour des diplômés étrangers comme c’est le cas en Allemagne avec le programme Rückkehrende Fachkräfte du Centrum für internationale Migration und Entwicklung, CIM ;
                                                </p>
                                                <p className="p-2 bg-[#ddc19b]">
                                                    ‒ Si vous avez étudié dans un pays dont la langue n’est ni le français ni l’anglais, contactez l’administration locale chargée de vous délivrer une traduction française/anglaise officielle de votre diplôme que vous ferez ensuite certifier à l’ambassade du Cameroun ;
                                                </p>
                                                <p className="p-2 bg-[#dbe0e7]">
                                                    ‒  <b>    Trouvez impérativement un emploi et/ou mettez en place une activité génératrice de revenus avant votre retour  </b>; cela implique d’avoir constitué une épargne pendant votre séjour à l’extérieur ;
                                                </p>
                                                <p className="p-2 bg-[#ddc19b]">
                                                    ‒ <b>   Contactez l’ambassade du Cameroun pour solliciter la délivrance d’un « certificat de changement définitif de résidence »</b>, indispensable pour l’obtention, lors du retour, d’abattements ou d’exonérations des droits de douanes pour vos effets personnels ;
                                                </p>
                                                <p className="p-2 bg-[#dbe0e7]">
                                                    ‒ Faites un bilan de santé et assurez-vous que vos vaccins sont à jour (en particulier ceux du choléra et de la fièvre jaune) ;
                                                </p>
                                                <p className="p-2 bg-[#ddc19b]">
                                                    ‒ Résiliez tous vos contrats et abonnements (bail, assurances, banques, transports publics, téléphone, bibliothèques, etc.) ; cela empêchera que des voyous usurpent votre identité pour commettre des méfaits ;
                                                </p>
                                                <p className="p-2 bg-[#dbe0e7]">
                                                    ‒ Déclarez votre départ définitif auprès de l’autorité compétente de votre ville de résidence.


                                                </p>


                                            </div>
                                            <p className="mt-4">
                                                <Link href="/misc/nous_contacter" className="  text-[#4A62AA] font-bold hover:text-xl">       Contactez-nous
                                                </Link> si vous souhaitez échanger ou avoir un retour d’expériences de nos experts retournés au Cameroun après leurs études à l’étranger.
                                            </p>
                                        </div>





                                    </div>)}


                            </div>


                        </div>
                        <div className="mt-1 space-y-4">
                            <div>


                                <button
                                    className="py-2 px-4 w-full bg-white/80 text-[#4A62AA]  text-xl font-bold flex justify-between items-center"
                                    onClick={() => handleToggle(8)}
                                >
                                    <span> Destinations de prédilection des étudiants camerounais
                                    </span>
                                    <span className="text-2xl"> {open === 8 ? "▲" : "▼"}</span>
                                </button>


                                {open === 8 && (
                                    <div className="bg-white/80 p-4 ">
                                        <div className="w-full ">
                                            <div className="space-y-4">


                                                <StudentDestinationsTable></StudentDestinationsTable>
                                            </div>






                                        </div>





                                    </div>)}


                            </div>


                        </div>

                        <div className="mt-1 space-y-4">
                            <div>


                                <button
                                    className="py-2 px-4 w-full bg-white/80 text-[#4A62AA]  text-xl font-bold flex justify-between items-center"
                                    onClick={() => handleToggle(7)}
                                >
                                    <span>Liens utiles
                                    </span>
                                    <span className="text-2xl">{open === 7 ? "▲" : "▼"}</span>
                                </button>


                                {open === 7 && (
                                    <div className="bg-white/80 p-4 ">
                                        <div className="w-full ">
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





                                    </div>)}


                            </div>


                        </div>










                    </div>
                </div>
            </div>

        </div>




    );
}