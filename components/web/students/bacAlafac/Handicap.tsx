"use client";
import React, { useRef } from "react";
import { useEffect, useState } from "react";
import Link from "next/link";


export default function HandicapComponent() {
    const [open, setOpen] = useState(null);
    const handleToggle = (index: any) => {
        setOpen(open === index ? null : index);
    };



    return (

        <div className="flex flex-col   md:flex-row  ">
            <div className="flex-grow md:w-2/3 p-8">

                <div className="  mt-1">
                    <div className="flex w-full gap-2 text-white font-bold">

                        <div className="p-2 px-2  uppercase  w-[35%] text-2xl text-center bg-[#9C824A] hover:bg-[#a19478]  h-20 flex items-center justify-center">

                            <Link href="/students/bacAlafac/bac_fac"> Orientation</Link>
                        </div>


                        <div className="p-3 px-8  text-xl text-center bg-[#A87A38] h-12 mt-4 flex items-center justify-center">

                            HANDICAP ET ÉTUDES SUPÉRIEURES

                        </div>
                    </div>

                    <div className="flex flex-row mt-4 gap-1">
                        <div className="flex-1  ">
                        </div>
                        <div className="flex-2 bg-white  text-black p-4 text-end"> <p className="">
                            Non, jamais dans la balance de la connaissance, <br />le poids de tous les musées du monde ne pèsera autant qu’une étincelle de sympathie humaine.
                            <br />  <span className="text-[#4A62AA] font-semibold "> Aimé Césaire</span>
                        </p>

                        </div>
                    </div>

                    <div className="mt-1   text-black bg-white/70 p-8 space-y-4">
                        <p className="text-justify">
                            Au cours des 20 dernières années, l’État camerounais a adopté un arsenal de textes juridiques en vue d’intégrer l’approche handicap dans l’élaboration des politiques et programmes liés à l’éducation et de faciliter et de garantir aux personnes handicapées l’accès à tous les niveaux d’éducation.  </p>
                        <p className="text-justify"> Aussi, en ce qui concerne le supérieur –  <i>
                            et bien que beaucoup reste à faire, notamment en matière d’accessibilité aux édifices, de disponibilité d’enseignants spécialisés, d’élaboration de matériels didactiques et pédagogiques appropriés (livres en braille ou langue des signes…), de traitement des demandes d’exemption et autres dérogations, d’extension des exemptions des frais universitaires aux IPES, etc.
                        </i> – il convient de relever les acquis majeurs ci-après ayant contribué à accroître au fil des ans le nombre d’étudiants handicapés dans les universités d’État.

                        </p>
                        <div className="mt-1 space-y-4">
                            <div>


                                <button
                                    className="py-2 px-4 w-full bg-white/80 text-[#4A62AA]  text-xl font-bold flex justify-between items-center"
                                    onClick={() => handleToggle(1)}
                                >
                                    <span>Acquis majeurs en faveur des étudiants en situation de handicap            </span>
                                    <span className="text-2xl">{open === 1 ? "▲" : "▼"}</span>
                                </button>


                                {open === 1 && (
                                    <div className="bg-white/80 p-4 ">

                                        <div className="w-full">
                                            <div className="mt-2 bg-[#d1daf7] p-2 grid grid-cols-[1fr_3fr] gap-8">

                                                <div className=" font-bold  text-start ">
                                                    Admission</div>
                                                <div className="max-w-4xl">
                                                    <p> <span className="uppercase text-[#4A62AA] font-bold">Le handicap  </span>d’un étudiant ne saurait constituer un motif de son rejet pour son admission dans un établissement du supérieur ou un centre de formation classique ;   </p>
                                                </div>



                                            </div>
                                            <div className="mt-2  p-2 grid grid-cols-[1fr_3fr] gap-8">

                                                <div className=" font-bold  text-start ">
                                                    Accessibilité aux infrastructures</div>
                                                <div className="max-w-4xl">
                                                    <p> <span className="uppercase text-[#4A62AA] font-bold">Obligation </span>des établissements publics à se conformer afin d’accueillir les étudiants handicapés : intégration de l’approche handicap dans la construction des bâtiments, des édifices publics, etc.  </p>
                                                </div>



                                            </div>
                                            <div className="mt-2 bg-[#d1daf7] p-2 grid grid-cols-[1fr_3fr] gap-8">

                                                <div className=" font-bold  text-start ">
                                                    Aides financières </div>
                                                <div className="max-w-4xl">
                                                    <p> <span className="uppercase text-[#4A62AA] font-bold">Application  </span> effective de l’exemption totale ou partielle des droits universitaires dans les universités d’État ;
                                                    </p>
                                                    <p> <span className="uppercase text-[#4A62AA] font-bold">Prise en compte   </span> de l’approche handicap dans l’octroi des bourses d’excellence académique ;
                                                    </p>
                                                    <p> <span className="uppercase text-[#4A62AA] font-bold">Octroi  </span> de subventions pour l’achat des équipements didactiques appropriés aux besoins éducatifs spéciaux ;
                                                    </p>

                                                </div>



                                            </div>
                                            <div className="mt-2  p-2 grid grid-cols-[1fr_3fr] gap-8">

                                                <div className=" font-bold  text-start ">
                                                    Logement</div>
                                                <div className="max-w-4xl">
                                                    <p> <span className="uppercase text-[#4A62AA] font-bold">Priorisation  </span>des handicapés dans l’attribution des logements étudiants ; </p>
                                                </div>



                                            </div>
                                            <div className="mt-2 bg-[#d1daf7] p-2 grid grid-cols-[1fr_3fr] gap-8">

                                                <div className=" font-bold  text-start ">
                                                    Emploi à la Fonction publique </div>
                                                <div className="max-w-4xl">
                                                    <p> <span className="uppercase text-[#4A62AA] font-bold">Dispense d’Âge   </span>lors des concours administratifs pour le recrutement aux emplois publics ; À qualification égale, la priorité doit être accordée à la personne handicapée.  </p>
                                                </div>



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
                                    <span>Informations utiles   </span>
                                    <span className="text-2xl">{open === 2 ? "▲" : "▼"}</span>
                                </button>


                                {open === 2 && (
                                    <div className="bg-white/80 p-4 ">

                                        <div className="w-full ">

                                            <p className="py-4">
                                                <b>
                                                    Pour bénéficier de l’exonération des droits universitaires,
                                                </b> l’étudiant handicapé doit en faire la demande auprès du recteur. Rapprochez-vous du Centre des Œuvres Universitaires de votre université pour avoir de plus amples informations sur les aides disponibles en fonction de votre handicap et la procédure à engager pour en bénéficier.
                                            </p>
                                            <p className="bg-[#becbf3] py-4">
                                                <b>
                                                    Les formations à distance
                                                </b> sont une solution idoine pour les handicapés moteurs pour pallier les difficultés de déplacement.
                                            </p>
                                            <p className="py-4">
                                                <b>
                                                    La déficience est constatée par un médecin
                                                </b> généraliste de l’administration publique dans un Certificat Médical Spécial et matérialisée par la Carte nationale d’invalidité dont la demande est introduite auprès de la Délégation régionale des Affaires sociales du lieu de résidence.
                                                <i>  (Arrêté N°1011/MINAS du 14 août 2018 fixant les modalités d'établissement et de délivrance de la carte nationale d'invalidité, Art.5).</i>
                                            </p>
                                            <p className="bg-[#becbf3] py-4">
                                                <b>
                                                    L’exonération des droits universitaires ne s’applique malheureusement pas encore aux IPES.
                                                </b> En la matière, chacune a sa politique.
                                            </p>


                                        </div>




                                    </div>)}


                            </div>


                        </div>




                        <div className="mt-1 space-y-4">
                            <div>


                                <button
                                    className="py-2 px-4 w-full bg-white/80 text-[#4A62AA]  text-xl font-bold flex justify-between items-center"
                                    onClick={() => handleToggle(4)}
                                >
                                    <span>Adresses utiles            </span>
                                    <span className="text-2xl">{open === 4 ? "▲" : "▼"}</span>
                                </button>


                                {open === 4 && (
                                    <div className="bg-white/80  ">
                                        <div className="w-full space-y-2">

                                            <p className="p-4 ">
                                                <b className="text-[#A87A38]  ">
                                                    Ministère des Affaires Sociales (MINAS)
                                                </b>
                                            </p>
                                            <p className="px-4 ">
                                                Le MINAS est responsable de l'élaboration, de la mise en œuvre de la politique du Gouvernement en matière de prévention, d'assistance et de protection des personnes socialement vulnérables (Décret N° 2011/408 du 09 décembre 2011). À ce titre, il est entre autres chargé du suivi des personnes âgées et des personnes handicapées en liaison avec les Ministères concernés.
                                            </p>
                                            <p className="px-4 ">
                                                <i>
                                                    Localisation
                                                </i> : Yaoundé, immeuble situé derrière le Musée National (ancienne Présidence).
                                            </p>
                                            <p className="px-4 ">
                                                <i>
                                                    Site web :
                                                </i> <a href="http://www.minas.cm/fr/" className="text-[#4A62AA] "> http://www.minas.cm/fr/</a>
                                            </p>
                                            <div className="bg-[#becbf3] space-y-2 p-4">
                                                <p>
                                                    <b className="text-[#A87A38]  ">
                                                        Centre National de Réhabilitation des Personnes Handicapées Cardinal Paul Émile LEGER (CNRPH)
                                                    </b>
                                                </p>
                                                <p>
                                                    Centre dont la mission est de mettre en œuvre la politique gouvernementale en matière de réhabilitation et de reconversion des personnes handicapées.
                                                </p>
                                                <p className="">
                                                    <i>
                                                        Localisation
                                                    </i> : Yaoundé, quartier Étoug-Ébé.
                                                </p></div>


                                            <div className=" space-y-2 p-4">
                                                <p>
                                                    <b className="text-[#A87A38] ">
                                                        Plateforme Inclusive Society For Persons With Disabilities

                                                    </b>
                                                </p>
                                                <p>
                                                    Réseau National des Organisations de Promotion, de l’Inclusion des Personnes Handicapées : plateforme regroupant près de 90 associations dont la <b>  Coordination des Associations des Étudiants Handicapés des Universités du Cameroun (CAEHUCAM).

                                                    </b></p>
                                                <p className="">
                                                    <i>
                                                        Localisation
                                                    </i> :  Yaoundé, quartier Biyem-assi, montée des Sœurs.
                                                </p>
                                                <p className="">
                                                    <i>
                                                        Tél
                                                    </i> :  (+237) 242 161 044 – 674 978 761
                                                </p>
                                                <p className="">
                                                    <i>
                                                        Site web
                                                    </i> : <a href="https://plateformeinclusivesociety.org/" className="text-[#4A62AA]  "> https://plateformeinclusivesociety.org/</a>
                                                </p>
                                            </div>
                                            <div className="bg-[#becbf3] space-y-2 p-4">
                                                <p>
                                                    <b className="text-[#A87A38] ">
                                                        PROMHANDICAM-Association


                                                    </b>
                                                </p>
                                                <p>
                                                    Œuvre sociale privée pour la promotion des personnes handicapées au Cameroun.
                                                </p>
                                                <p className="">
                                                    <i>
                                                        Localisation
                                                    </i> : Yaoundé, quartier Mimboman, Rond-point petit marché.

                                                </p>
                                                <p className="">
                                                    <i>
                                                        Tél
                                                    </i> :  (+237) 699 886 762
                                                </p>
                                                <p className="">
                                                    <i>
                                                        Site web
                                                    </i> : <a href="http://promhandicam-asso.org/" className="text-[#4A62AA] "> http://promhandicam-asso.org/</a>
                                                </p>
                                            </div>
                                            <div className=" space-y-2 p-4">
                                                <p>
                                                    <b className="text-[#A87A38] ">
                                                        REHABILITATION INSTITUTE FOR THE BLIND IN BUEA.
                                                    </b>
                                                </p>

                                                <p className="">
                                                    <i>
                                                        Localisation
                                                    </i> Along Buea-Mutengene Highway.

                                                </p>
                                                <p className="">
                                                    <i>
                                                        Tél
                                                    </i> : (+237) 677 155 481.
                                                </p></div>


                                            <div className=" bg-[#becbf3] space-y-2 p-4">
                                                <p>
                                                    <b className="text-[#A87A38] ">
                                                        CENTRE ORCHIDÉE HOME

                                                    </b>
                                                </p>
                                                <p>
                                                    Association à but non lucratif reconnue d’utilité publique et, promotrice entre autres, d’un Centre de prise en charge d’enfants autistes mais également de l’Institut Supérieur de Psychopédagogie Appliquée (ISPPA) qui propose une formation de Licence Pro en Éducation Spécialisée.</p>
                                                <p className="">
                                                    <i>
                                                        Localisation
                                                    </i> :  Bonamoussadi, Douala.
                                                </p>

                                                <p className="">
                                                    <i>
                                                        Site web
                                                    </i> : <a href=" https://orchideehome.org/" className="text-[#4A62AA]  ">  https://orchideehome.org/</a>
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
                                    onClick={() => handleToggle(5)}
                                >
                                    <span>Textes fondamentaux
                                    </span>
                                    <span className="text-2xl">{open === 5 ? "▲" : "▼"}</span>
                                </button>


                                {open === 5 && (
                                    <div className="bg-white/80 p-4 ">

                                        <div className="w-full space-y-2">

                                            <p>


                                                Si vous êtes un.e futur.e étudiant.e en situation de handicap, et au cas où vous ne l’aurez pas encore fait, prenez amplement connaissance des textes réglementaires ci-dessous pour connaître vos droits et les obligations imposées aux établissements du supérieur en matière d’inclusion et d’accompagnement ; d’autre part, pour connaître les procédures à engager pour y bénéficier.</p>
                                            <p>
                                                <b>
                                                    - Loi N° 2010/002 du 13 avril 2010
                                                </b> portant protection et promotion des personnes handicapées ;
                                            </p>
                                            <p>
                                                <b>
                                                    - Décret N° 2018/6233/PM du 28 juillet 2018
                                                </b>  fixant les modalités d’application de la Loi N°2010/002 du 13 avril 2010 portant protection et promotion des personnes handicapées ;
                                            </p>

                                            <p>
                                                <b>
                                                    - Lettre-circulaire conjointe N°08/0006/LC/MINESUP/MINAS du 9 juillet 2008
                                                </b> relatif au Renforcement de l’amélioration des conditions d’accueil et d’encadrement des étudiants handicapés ou vulnérables dans les Universités d’État du Cameroun ;
                                            </p>

                                            <p>
                                                <b>
                                                    - Arrêté N° 040/PM du 19 mai 2022
                                                </b> fixant les modalités d'octroi de la dispense d'âge aux personnes handicapées lors des concours administratifs et des recrutements dans la Fonction Publique de l’État.
                                            </p>
                                            <p>
                                                Veuillez nous contacter pour obtenir le Recueil de textes juridiques relatifs à la promotion et à la protection des droits des personnes handicapées et une liste non exhaustive des métiers pour personnes handicapées classés selon le type de handicap.
                                            </p>
                                            <p>
                                                <b>  Nous exhortons les personnes valides à toujours faire preuve de compréhension et de tolérance vis-à-vis des personnes ou étudiants vulnérables ou en situation de handicap,</b> de leurs apporter leur aide sans hésitation ni pitié lorsqu’ils les sollicitent et de ne jamais les discriminer d’aucune façon.
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
                                    <span>Références bibliographiques

                                    </span>
                                    <span className="text-2xl">{open === 8 ? "▲" : "▼"}</span>
                                </button>


                                {open === 8 && (
                                    <div className="bg-white/80 p-4 ">

                                        <div className="w-full">
                                            <p>

                                                ‒
                                                Gabriel Ondoua Abah, (2002).  <i className="text-[#4A62AA] "> Livre blanc sur la condition des personnes handicapées au Cameroun.</i> Presses universitaires d’Afrique.
                                            </p>
                                            <p>

                                                ‒
                                                Rosine Ntsama, (2002).    <i className="text-[#4A62AA] "> Les jeunes et la gestion du handicap en république du Cameroun. Entre modernité et tradition. </i> Paris, Éditions L’Harmattan. In Jeunesse et discrimination, p.183-199, Presses universitaires de Perpignan.
                                            </p>
                                            <p>

                                                ‒
                                                Monique Amor Ndjabo, (2021).   <i className="text-[#4A62AA] ">  Le handicap moteur dans la ville de Yaoundé : trajectoires et expériences de vie.</i> Paris, Éditions L’Harmattan.
                                            </p>

                                            <p>

                                                ‒
                                                Marie-Thérèse Mengue, (2021).  <i className="text-[#4A62AA] "> Les handicaps en contexte africain. De l’éthique aux pratiques. </i> Presses de l’UCAC.
                                            </p>    <p>

                                                ‒
                                                Recueil de textes juridiques relatifs à la promotion et à la protection des droits des personnes handicapées.
                                            </p>




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