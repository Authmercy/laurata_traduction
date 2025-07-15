"use client";
import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";

import Navbar from "../../navbar/navbar";
import FooterMobile from "../../footer/footerEnd";


export default function GeneraliteComponentMobile() {
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
              GÉNÉRALITÉS SUR LE SUPÉRIEUR
            </p>  </div>









          <div className="mt-8 space-y-4 ">
            <div>

              <div className="flex flex-col sm:flex-row gap-1">
                <button
                  className="w-full  py-2 px-4  bg-[#4c75f0] text-white flex justify-between "
                  onClick={() => handleToggle(1)}
                >
                  <span className="flex-grow text-start"> Accès aux études supérieures</span>
                  <span className="sm:ml-10 text-2xl">{open === 1 ? "▲" : "▼"}</span>
                </button>


              </div>

              {open === 1 && (
                <div className="bg-white/60 ">
                  <div className="w-full">
                    <div className="bg-white/60 p-4 pb-0 grid grid-cols-1 sm:grid-cols-[1fr_3fr] gap-8 mt-2">

                      <p>Deux sous-systèmes éducatifs coexistent au Cameroun :
                        un <b> sous-système anglophone </b>  d’inspiration anglo-saxonne en vigueur principalement dans les régions du
                        Nord-Ouest et du Sud-Ouest et un <b> sous-système francophone </b>  d’inspiration française en
                        vigueur dans les huit autres régions. De ce fait,
                        deux diplômes sanctionnant la fin des études secondaires donnent accès aux études supérieures :</p>

                      <div className="px-2 ">
                        <div className="my-2 ">
                          <p>
                            <span className="text-[#4A62AA] text-2xl font-bold"> - </span>
                            Le <b>General Certificate of Education Advanced Level – GCE A/L</b>– (général ou technique) pour le sous-système anglophone ;
                          </p>
                          <p>
                            <span className="text-[#4A62AA] text-2xl font-bold"> - </span>
                            Le <b>Baccalauréat</b> de l'enseignement secondaire (général ou technique) pour le sous-système francophone.
                          </p>
                        </div>

                        <div className="overflow-x-auto">
                          <table className="text-start border-2 w-full min-w-[600px]">
                            <thead>
                              <tr className="flex ">
                                <th className="flex-1 p-2  text-[#4A62AA] bg-[#dbdad9]/70 font-semibold">
                                  Admission en première année du 1er cycle
                                </th>
                                <th className="flex-1 p-2  text-[#4A62AA] bg-[#4A62AA]/20 font-semibold">
                                  Admission en master et doctorat
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="flex">
                                <td className="flex-1 border bg-[#dbdad9]/70 p-2 ">
                                  - Sur <b>demande d'admission</b> suivie ou non d'étude de dossier pour les filières généralistes dans les universités publiques et les IPES — une corrélation entre la filière choisie et la série du baccalauréat ou du GCE A/L étant généralement indispensable ; ou,
                                </td>
                                <td className="flex-1 border bg-[#4A62AA]/20 p-2">
                                  ‒ Sur <b>concours ou étude de dossier</b> suivie d'entretien au sein des Écoles doctorales des différents établissements.
                                </td>
                              </tr>
                              <tr className="flex">
                                <td className="flex-1 border bg-[#dbdad9]/70 p-2 md:p-4">
                                  - Sur <b>concours national</b> pour les filières technologiques et professionnelles des universités publiques, des Écoles d'ingénieurs, de commerce, de médecine et des institutions transnationales et privées.
                                </td>
                                <td className="flex-1 border bg-[#4A62AA]/20 p-2">
                                  ‒ <b>Processus très sélectif</b> dans le public comme dans le privé (relevés de notes et parcours académiques excellents).
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                        <p className="my-4 px-2 md:px-0">
                          <span className="underline text-[#4A62AA] font-bold">NB:</span> Les diplômes admis équivalents au baccalauréat ou au GCE A/L et la Validation des Acquis de l'Expérience (VAE) dans quelques cas spécifiques, peuvent également permettre d'accéder au supérieur.
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
                  className="w-full    py-2 px-4  bg-[#4c75f0] text-white  flex justify-between items-center sm:justify-center"
                  onClick={() => handleToggle(2)}
                >
                  <span className="flex-grow text-start">Organisation et architecture des enseignements </span>
                  <span className="sm:ml-10 text-2xl">{open === 2 ? "▲" : "▼"}</span>
                </button>


              </div>

              {open === 2 && (
                <div className="bg-white/60 ">
                  <div className="w-full bg-white/60 py-2 px-4 md:px-0">
                    <p className="text-[#4A62AA] font-bold">
                      Les cycles de formation
                    </p>
                    <p className="mt-2">
                      Les études supérieures sont organisées autour du <b>système LMD</b> (Licence, Master, Doctorat) s'articulant en trois cycles de formation à savoir :
                    </p>

                    <div className="m-2 ">
                      <p>
                        <span className="text-[#4A62AA] text-2xl font-bold"> - </span>
                        <b>1er Cycle</b> : grade de Licence (Bac+3) ;
                      </p>
                      <p>
                        <span className="text-[#4A62AA] text-2xl font-bold"> - </span>
                        <b>2nd Cycle : </b> grade de Master (Bac+5) ;
                      </p>
                      <p>
                        <span className="text-[#4A62AA] text-2xl font-bold"> - </span>
                        <b>3ème Cycle : </b> grade de Doctorat/PhD (Bac+8).
                      </p>
                    </div>

                    <p>
                      Outre ces trois cycles, il existe également des <b>formations courtes</b> de type <b>BAC+2</b> à finalité professionnelle, sanctionnées par le Brevet de Technicien Supérieur <b>(BTS)</b> et le Diplôme Universitaire de Technologie <b>(DUT)</b>. Les Universités d'État proposent généralement l'ensemble des cycles tandis que la majorité des Institutions Privées d'Enseignement Supérieur (IPES) se limitent aux cycles courts et éventuellement associé au 1er cycle.
                    </p>

                    <p className="text-[#4A62AA] mt-4 font-bold">
                      Le régime des études
                    </p>
                    <p className="mt-2">
                      Au sein du système LMD, les contenus des formations sont organisés en parcours-types et déclinés en domaines, mentions et spécialités.
                    </p>

                    <p className="my-2">
                      Les enseignements et la formation reçus sont mesurés en crédits ; ces derniers sont transférables et capitalisables d'un parcours à un autre. La période de formation couvre un semestre équivalent à 30 crédits.
                    </p>

                    <div className="flex flex-col md:flex-row text-center  gap-2 md:gap-4 my-4">
                      <div className="flex-1 p-2 bg-[#b7c5ee]">
                        <p> Licence = 180 crédits</p>
                      </div>
                      <div className="flex-1 p-2 bg-[#829dec]">
                        <p>Master = 120 crédits après la Licence</p>
                      </div>
                      <div className="flex-1 p-2 bg-[#6d81bd]">
                        <p>Doctorat = 180 crédits après le Master</p>
                      </div>
                    </div>

                    <p className="text-[#4A62AA] mt-4 font-bold">
                      Le régime des études
                    </p>
                    <p className="mt-2">
                      Il existe les <b>filières généralistes</b> <i>(non professionnelles ou académiques)</i> et les <b>filières professionnelles</b>, dont le nombre et la durée varient en fonction des établissements et de la nature des études.
                    </p>

                    <p className="text-[#4A62AA] mt-4 font-bold">
                      L'offre de formation
                    </p>
                    <p className="mt-2">
                      Elle est diversifiée mais ne couvre pas encore de nombreux domaines technologiques et scientifiques de pointe, comme <i>les nanotechnologies, la robotique, l'aérospatiale, etc.</i>
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
                  className="w-full    py-2 px-4  bg-[#4c75f0] text-white flex justify-between items-center sm:justify-center"
                  onClick={() => handleToggle(3)}
                >
                  <span className="flex-grow text-start"> Droits universitaires</span>

                  <span className="sm:ml-10 text-2xl">{open === 3 ? "▲" : "▼"}</span>
                </button>


              </div>

              {open === 3 && (
                <div className="bg-white/60 ">
                  <div className="w-full bg-white/60 py-2 px-4 md:px-0">
                    <p className="text-[#4A62AA] my-2 font-bold">
                      Institutions publiques
                    </p>
                    <p>
                      Le décret N°93/033 du 19 janvier 1993 fixe les taux de paiement des droits universitaires dans les établissements publics comme suit :
                    </p>

                    <div className="m-4 md:m-6 space-y-4">
                      <p>
                        <span className="text-[#4A62AA] text-2xl font-bold"> - </span>
                        <b>Camerounais</b> :
                        Cinquante mille (50 000) francs CFA (environ 85 USD) par année académique, payables en une seule fois ou en deux tranches. <b className="underline">NB</b> : Ce montant s'applique en grande partie aux formations des filières généralistes ; le coût des formations professionnelles est généralement plus élevé.
                      </p>
                      <p>
                        <span className="text-[#4A62AA] text-2xl font-bold"> - </span>
                        <b>Étudiants étrangers : </b>
                        Sous réserve de réciprocité et des conventions en vigueur, les étudiants de nationalité étrangère s'acquittent des droits dont les taux sont fixés comme suit :
                      </p>

                      <div className="pl-6 space-y-2">
                        <p>
                          <span className="text-[#4A62AA] font-bold">a) </span>
                          Trois cent mille (300 000) francs CFA <i>(environ 500 USD)</i> dans les Facultés des Lettres, des Sciences Humaines, Juridiques, Politiques, Économiques et de Gestion.
                        </p>
                        <p>
                          <span className="text-[#4A62AA] font-bold">b) </span>
                          Six cent mille (600 000) francs CFA <i>(environ 1 000 USD)</i> dans les Facultés des Sciences et des Instituts Universitaires de Technologie.
                        </p>
                        <p>
                          <span className="text-[#4A62AA] font-bold">c) </span>
                          Un million (1 000 000) de francs CFA <i>(environ 1 700 USD)</i> dans les Facultés de Médecine et de Pharmacie, dans les Écoles et Établissements de Formation professionnelle (Art. 3).
                        </p>
                      </div>
                    </div>

                    <p className="text-[#4A62AA] mb-2 font-bold">
                      Institutions privées
                    </p>
                    <p>
                      Les frais de scolarité des institutions privées et transnationales sont nettement plus élevés que ceux des institutions publiques. Ils varient d'un établissement à l'autre et commencent autour de 200 000 francs CFA (env. 400 USD) par an pour les institutions à faible cote pour aller jusqu'à plusieurs millions de francs CFA (plus de 1500 USD) pour les institutions prestigieuses.
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
                  className="w-full    py-2 px-4  bg-[#4c75f0] text-white flex justify-between items-center sm:justify-center"
                  onClick={() => handleToggle(4)}
                >
                  <span className="flex-grow text-start">Population estudiantine & Logement </span>    <span className="sm:ml-10 text-2xl">{open === 4 ? "▲" : "▼"}</span>
                </button>


              </div>

              {open === 4 && (
                <div className="bg-white/60 ">
                  <div className="w-full bg-white/60 py-2 px-4 md:px-0">
                    <p>
                      - La population estudiantine est en progression constante au fil des ans. 413 888 étudiants étaient inscrits dans les universités camerounaises à la rentrée 2022/2023, dont 294 189 dans les établissements publics et 119 699 dans le privé. Les étudiants étrangers représentaient 10% de l'effectif global.
                    </p>

                    <p className="mt-4">
                      - <b>Trois alternatives</b> se présentent aux étudiants camerounais pour leur logement :
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 mt-4">
                      <div className="flex-1 p-4 bg-[#b7c5ee]">
                        <p className="font-bold">
                          1. Les résidences universitaires privées jouxtant les campus.
                        </p>
                        <i>(Loyer mensuel généralement homologué de concert avec l'Université et oscillant entre 15 000 et 35 000 francs CFA selon la ville et le standing.)</i>
                      </div>

                      <div className="flex-1 p-4 bg-[#829dec]">
                        <p className="font-bold">
                          2. Les résidences publiques sur les campus.
                        </p>
                        <i>(Capacités d'accueil faibles mais loyers les plus bas)</i>
                      </div>

                      <div className="flex-1 p-4 bg-[#6d81bd]">
                        <p className="font-bold">3. En famille.</p>
                      </div>
                    </div>

                    <p className="mt-4">
                      La grande majorité des étudiants loge dans les résidences universitaires privées et en famille.
                    </p>

                    <p className="mt-4">
                      Les logements des résidences publiques, aux capacités d'accueil limitées, sont attribués prioritairement aux étudiants handicapés ou issus des couches sociales défavorisées et étrangers. Le Service des œuvres sociales de l'université est à contacter pour les demandes y relatives.
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
                  className="w-full    py-2 px-4  bg-[#4c75f0] text-white flex justify-between items-center sm:justify-center"
                  onClick={() => handleToggle(5)}
                >
                  <span className="flex-grow text-start">Reconnaissance des diplômes camerounais à l’étranger
                  </span>
                  <span className="sm:ml-10 text-2xl">{open === 5 ? "▲" : "▼"}</span>
                </button>


              </div>

              {open === 5 && (
                <div className="bg-white/60 ">
                  <div className="w-full bg-white/60 py-2">
                    <p className="p-4">
                      <p>
                        En règle générale, les diplômes camerounais ne sont pas automatiquement reconnus à l’extérieur. En conséquence, l’étudiant qui souhaite poursuivre ses études à l’étranger devra faire reconnaître son diplôme camerounais par l’organisme compétent du pays d’accueil si l’université pour laquelle il postule ne reconnait pas ce dernier. La procédure de reconnaissance est relativement longue (entre 4 et 6 mois selon le pays) et payante.   </p>

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
                  className="w-full py-2 px-4 text-start bg-[#4c75f0] text-white flex items-center justify-between"
                  onClick={() => handleToggle(7)}
                >
                  <span className="flex-grow text-start"> Références bibliographiques</span>
                  <span className="sm:ml-10 text-2xl">{open === 7 ? "▲" : "▼"}</span>
                </button>


              </div>

              {open === 7 && (
                <div className="bg-white/60 text-start">
                  <div className="w-full bg-white/60 p-4 space-y-2">
                    <p>

                      <span className="text-[#4A62AA] font-bold"> ‒ Annuaire Statistique 2019  </span>
                      du Ministère de l’Enseignement Supérieur.
                    </p>
                    <p>

                      <span className="text-[#4A62AA] font-bold"> ‒ Décret N°93/033 du 19 janvier 1993  </span>
                      modifiant certaines dispositions du décret n°79/186 du 17 mai 1979 fixant les taux de paiement des droits universitaires.
                    </p>

                    <p>

                      <span className="text-[#4A62AA] font-bold">  ‒ Directive 01/06-UEAC-019-CM-14 du 11 mars 2006 </span>
                      portant application du système LMD (Licence, Master, Doctorat) dans les Universités et Établissements d’Enseignement Supérieur de l’espace CEMAC ;
                    </p>
                    <p>

                      <span className="text-[#4A62AA] font-bold"> ‒ Directive 02/06-UEAC-019-CM-14 du 11 mars 2006 </span>
                      portant organisation des études universitaires dans l’espace ‒ dans le cadre du système LMD (Licence, Master, Doctorat).
                    </p>
                    <p>

                      <span className="text-[#4A62AA] font-bold"> ‒ Loi N°005/2001 du 16 avril 2001 portant </span>
                      Orientation de l’Enseignement Supérieur au Cameroun.
                    </p>
                    <p>

                      <span className="text-[#4A62AA] font-bold">  ‒ Loi N°2018/10 du 11 juillet 2018 régissant  </span>
                      la Formation professionnelle au Cameroun.
                    </p>
                    <p>
                      ‒ Luc Ngwe, Hilaire De Prince Pokam,
                      <i className="text-[#4A62AA] font-bold"> L'enseignement supérieur au Cameroun depuis la réforme de 1993 : dynamiques et perspectives </i>
                      . Éditions CODESRIA, 2022.
                    </p>
                    <p>

                      <span className="text-[#4A62AA] font-bold"> ‒ Rapport d’analyse de l’annuaire statistique du secteur de l’éducation et de la formation au Cameroun.  </span>
                      Édition 2023.
                    </p>

                    <p>

                      <span className="text-[#4A62AA] font-bold"> ‒ Répertoire de l’offre de formation de l’Enseignement Supérieur au Cameroun. </span>
                      Édition 2022.
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
                  className="w-full    py-2 px-4  bg-[#4c75f0] text-white flex justify-between items-center sm:justify-center"
                  onClick={() => handleToggle(8)}
                >
                  <span className="flex-grow text-start">Liens utiles</span>
                  <span className="sm:ml-10 text-2xl">{open === 8 ? "▲" : "▼"}</span>
                </button>


              </div>

              {open === 8 && (
                <div className="bg-white/60 ">
                  <div className="w-full bg-white/60 p-4  text-start ">
                    <div className="space-y-4">

                      <p>
                        - Cameroon GCE Board (GCEB) <br />
                        <a href="https://camgceb.org/" className="text-blue-600" target="_blank" rel="noopener noreferrer"><i> https://camgceb.org/</i></a>
                      </p>
                      <p>
                        - Ministère des Enseignements Secondaires (Minesec)<br /> <a href="https://www.minesec.gov.cm/ " className="text-blue-600" target="_blank" rel="noopener noreferrer"><i> https://www.minesec.gov.cm/ </i> </a>
                      </p>
                      <p>
                        - Ministère de l’Enseignement Supérieur (Minesup)<br /> <a href="https://www.minesup.gov.cm/ " className="text-blue-600" target="_blank" rel="noopener noreferrer"><i>  https://www.minesup.gov.cm/  </i></a>
                      </p>
                      <p>
                        - Ministère de l’Emploi et de la Formation professionnelle (MINEFOP) <br /> <a href="https://www.minefop.cm" className="text-blue-600" target="_blank" rel="noopener noreferrer"><i> https://www.minefop.cm/fr/  </i></a>
                      </p>
                      <p>
                        - Ministère de la Jeunesse et de l’Éducation Civique (Minjec) <br /> <a href="https://minjec.gov.cm/site/" className="text-blue-600" target="_blank" rel="noopener noreferrer"><i> https://minjec.gov.cm/site/ </i></a>
                      </p>
                      <p>
                        - Office du Baccalauréat du Cameroun (OBC) <br /> <a href="https://www.obc.cm/" className="text-blue-600" target="_blank" rel="noopener noreferrer"> <i> https://www.obc.cm/  </i></a>
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