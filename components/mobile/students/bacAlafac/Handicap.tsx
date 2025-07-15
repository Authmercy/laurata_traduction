"use client";
import React, { useRef } from "react";
import { useEffect, useState } from "react";
import Navbar from "../../navbar/navbar";
import FooterMobile from "../../footer/footerEnd";


export default function HandicapComponentMobile() {
    const [open, setOpen] = useState(null);
    const handleToggle = (index: any) => {
        setOpen(open === index ? null : index);
    };



    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileMenuOpen2, setIsMobileMenuOpen2] = useState(false);

    return (
        <div>
            <div className="min-h-screen   bg-[#4A62AA] text-black overflow-auto  w-screen bg-cover  text-justify bg-center bg-no-repeat "  >
       
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
                            HANDICAP ET ÉTUDES SUPÉRIEURES
                        </p>  </div>






                    <div className="mt-8   text-black bg-white/70 p-4 space-y-4">
                        <p>
                            Au cours des vingt dernières années, l’État camerounais a adopté un arsenal de textes juridiques en vue d’intégrer l’approche handicap dans l’élaboration des politiques liés à l’éducation et de garantir aux personnes handicapées l’accès à tous les niveaux d’éducation.  </p>
                        <p>Concernant le supérieur, et bien que beaucoup reste à faire, il convient de relever les acquis majeurs ci-après ayant contribué à accroître au fil des ans le nombre d’étudiants handicapés dans nos universités d’État :

                        </p>

                    </div>
                    <div className="mt-4 space-y-4">
                        <div>

                            <div className="flex flex-col sm:flex-row gap-1">
                                <button
                                    className="w-full  py-2 px-4  bg-[#4c75f0] text-white flex justify-between "
                                    onClick={() => handleToggle(1)}
                                >
                                    <span className="flex-grow text-start"> Acquis majeurs          </span>
                                    <span className="sm:ml-10 text-2xl">{open === 1 ? "▲" : "▼"}</span>
                                </button>


                            </div>

                            {open === 1 && (
                                <div className="bg-white/60 ">
                                    <div className="w-full">
                                        <div className="mt-2 bg-white p-2 grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4 md:gap-8">
                                            <div className="font-bold text-center text-lg"> Admission</div>
                                            <div className="md:max-w-4xl">
                                                <p><span className="uppercase text-[#4A62AA] font-bold">Le handicap</span> d'un étudiant ne saurait constituer un motif de son rejet pour son admission dans un établissement du supérieur ou un centre de formation classique ;</p>
                                            </div>
                                        </div>

                                        <div className="mt-2 p-2 grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4 md:gap-8">
                                            <div className="font-bold text-center text-lg"> Accessibilité aux infrastructures</div>
                                            <div className="md:max-w-4xl">
                                                <p><span className="uppercase text-[#4A62AA] font-bold">Obligation</span> des établissements publics à se conformer afin d'accueillir les étudiants handicapés : intégration de l'approche handicap dans la construction des bâtiments, des édifices publics, etc.</p>
                                            </div>
                                        </div>

                                        <div className="mt-2 bg-white p-2 grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4 md:gap-8">
                                            <div className="font-bold text-center text-lg"> Aides financières</div>
                                            <div className="md:max-w-4xl">
                                                <p><span className="uppercase text-[#4A62AA] font-bold">Application</span> effective de l'exemption totale ou partielle des droits universitaires dans les universités d'État ;</p>
                                                <p><span className="uppercase text-[#4A62AA] font-bold">Prise en compte</span> de l'approche handicap dans l'octroi des bourses d'excellence académique ;</p>
                                                <p><span className="uppercase text-[#4A62AA] font-bold">Octroi</span> de subventions pour l'achat des équipements didactiques appropriés aux besoins éducatifs spéciaux ;</p>
                                            </div>
                                        </div>

                                        <div className="mt-2 p-2 grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4 md:gap-8">
                                            <div className="font-bold text-center text-lg"> Logement</div>
                                            <div className="md:max-w-4xl">
                                                <p><span className="uppercase text-[#4A62AA] font-bold">Priorisation</span> des handicapés dans l'attribution des logements étudiants ;</p>
                                            </div>
                                        </div>

                                        <div className="mt-2 bg-white p-2 grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4 md:gap-8">
                                            <div className="font-bold text-center text-lg"> Emploi à la Fonction publique</div>
                                            <div className="md:max-w-4xl">
                                                <p><span className="uppercase text-[#4A62AA] font-bold">Dispense d'Âge</span> lors des concours administratifs pour le recrutement aux emplois publics ; À qualification égale, la priorité doit être accordée à la personne handicapée.</p>
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
                                    className="w-full    py-2 px-4  bg-[#4c75f0] text-white flex justify-between items-center sm:justify-center"
                                    onClick={() => handleToggle(4)}
                                >
                                    <span className="flex-grow text-start">Informations utiles</span>  <span className="sm:ml-10 text-2xl">{open === 4 ? "▲" : "▼"}</span>
                                </button>


                            </div>

                            {open === 4 && (
                                <div className="bg-white/60 p-2">
                                    <div className="w-full bg-white/60 ">
                                        <div className="w-full ">

                                            <p className="py-4 px-2">
                                                <b>
                                                    Pour bénéficier de l’exonération des droits universitaires,
                                                </b> l’étudiant handicapé doit en faire la demande auprès du recteur. Rapprochez-vous du Centre des Œuvres Universitaires de votre université pour avoir de plus amples informations sur les aides disponibles en fonction de votre handicap et la procédure à engager pour en bénéficier.
                                            </p>
                                            <p className="bg-[#becbf3]  px-2 py-4">
                                                <b>
                                                    Les formations à distance
                                                </b> sont une solution idoine pour les handicapés moteurs pour pallier les difficultés de déplacement.
                                            </p>
                                            <p className="py-4  px-2">
                                                <b>
                                                    La déficience est constatée par un médecin
                                                </b> généraliste de l’administration publique dans un Certificat Médical Spécial et matérialisée par la Carte nationale d’invalidité dont la demande est introduite auprès de la Délégation régionale des Affaires sociales du lieu de résidence.
                                                <i>  (Arrêté N°1011/MINAS du 14 août 2018 fixant les modalités d'établissement et de délivrance de la carte nationale d'invalidité, Art.5).</i>
                                            </p>
                                            <p className="bg-[#becbf3]  px-2 py-4">
                                                <b>
                                                    L’exonération des droits universitaires ne s’applique malheureusement pas encore aux IPES.
                                                </b> En la matière, chacune a sa politique.
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
                                    onClick={() => handleToggle(5)}
                                >
                                    <span className="flex-grow text-start">Adresses utiles
                                    </span>
                                    <span className="sm:ml-10 text-2xl">{open === 5 ? "▲" : "▼"}</span>
                                </button>


                            </div>

                            {open === 5 && (
                                <div className="bg-white/60 p-2">
                                    <div className="w-full bg-white/60 ">
                                        <div className="w-full space-y-2">

                                            <p className="p-4 ">
                                                <b className="text-[#4A62AA] ">
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
                                                </i> <a href="http://www.minas.cm/fr/" className="text-[#4A62AA] font-bold"> http://www.minas.cm/fr/</a>
                                            </p>
                                            <div className="bg-[#becbf3] space-y-2 p-4">
                                                <p>
                                                    <b className="text-[#4A62AA] ">
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
                                                    <b className="text-[#4A62AA] ">
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
                                                    </i> : <br /> <a href="https://plateformeinclusivesociety.org/" className="text-[#4A62AA] font-bold "> https://plateformeinclusivesociety.org/</a>
                                                </p>
                                            </div>
                                            <div className="bg-[#becbf3] space-y-2 p-4">
                                                <p>
                                                    <b className="text-[#4A62AA] ">
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
                                                    </i> : <br /> <a href="http://promhandicam-asso.org/" className="text-[#4A62AA] font-bold "> http://promhandicam-asso.org/</a>
                                                </p>
                                            </div>
                                            <div className=" space-y-2 p-4">
                                                <p>
                                                    <b className="text-[#4A62AA] ">
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
                                                    <b className="text-[#4A62AA] ">
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
                                                    </i> : <br />
                                                    <a href=" https://orchideehome.org/" className="text-[#4A62AA] font-bold ">  https://orchideehome.org/</a>
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
                                    className="w-full py-2 px-4  text-center bg-[#4c75f0] text-white flex items-center justify-between"
                                    onClick={() => handleToggle(6)}
                                >
                                    <span className="flex-grow text-start">Textes fondamentaux
                                    </span>
                                    <span className="text-2xl">{open === 6 ? "▲" : "▼"}</span>
                                </button>


                            </div>

                            {open === 6 && (
                                <div className="bg-white/60 p-4">
                                    <div className="w-full bg-white/60 p-2 space-y-2 ">
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




                                    </div>
                                    <div className="bg-white p-2 space-y-2">
                                        <p>
                                            Veuillez nous contacter pour obtenir le Recueil de textes juridiques relatifs à la promotion et à la protection des droits des personnes handicapées et une liste non exhaustive des métiers pour personnes handicapées classés selon le type de handicap.
                                        </p>
                                        <p>
                                            <b>  Nous exhortons les personnes valides à toujours faire preuve de compréhension et de tolérance vis-à-vis des personnes ou étudiants vulnérables ou en situation de handicap,</b> de leurs apporter leur aide sans hésitation ni pitié lorsqu’ils les sollicitent et de ne jamais les discriminer d’aucune façon.
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
                                    className="w-full py-2 px-4 text-center bg-[#4c75f0] text-white flex items-center justify-between"
                                    onClick={() => handleToggle(7)}
                                >
                                    <span className="flex-grow text-start"> Références bibliographiques</span>
                                    <span className="sm:ml-10 text-2xl">{open === 7 ? "▲" : "▼"}</span>
                                </button>


                            </div>

                            {open === 7 && (
                                <div className="bg-white/60 p-4">
                                    <div className="w-full bg-white p-2 space-y-2">
                                        <p>

                                            ‒
                                            Gabriel Ondoua Abah, (2002).  <i className="text-blue-500 "> Livre blanc sur la condition des personnes handicapées au Cameroun.</i> Presses universitaires d’Afrique.
                                        </p>
                                        <p>

                                            ‒
                                            Rosine Ntsama, (2002).   <i className="text-blue-500 "> Les jeunes et la gestion du handicap en république du Cameroun. Entre modernité et tradition. </i> Paris, Éditions L’Harmattan. In Jeunesse et discrimination, p.183-199, Presses universitaires de Perpignan.
                                        </p>
                                        <p>

                                            ‒
                                            Monique Amor Ndjabo, (2021).   <i className="text-blue-500 "> Le handicap moteur dans la ville de Yaoundé : trajectoires et expériences de vie.</i> Paris, Éditions L’Harmattan.
                                        </p>

                                        <p>

                                            ‒
                                            Marie-Thérèse Mengue, (2021).  <i className="text-blue-500 "> Les handicaps en contexte africain. De l’éthique aux pratiques. </i> Presses de l’UCAC.
                                        </p>    <p>

                                            ‒
                                            Recueil de textes juridiques relatifs à la promotion et à la protection des droits des personnes handicapées.
                                        </p>


                                    </div>
                                </div>
                            )}
                        </div>

                    </div>


                </div>
                <footer className="w-full bg-blue-900   mt-10 text-white text-center">
                                            <FooterMobile />
                                          </footer>
            </div>
              
        </div>

    );
}