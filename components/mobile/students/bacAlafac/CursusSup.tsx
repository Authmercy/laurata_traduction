"use client";
import React, { useRef } from "react";
import { useEffect, useState } from "react";

import Link from "next/link";
import Navbar from "../../navbar/navbar";
import FooterMobile from "../../footer/footerEnd";


export default function CursusSupComponentMobile() {
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
          <div className="justify-center p-2 text-center text-xl font-bold uppercase bg-[#9b6e0f] text-white">

            <p>
              CHOISIR SON CURSUS SUPÉRIEUR
            </p>  </div>







          <div className="mt-8 space-y-4">
            <div>

              <div className="flex flex-col sm:flex-row gap-1">
                <button
                  className="w-full  py-2 px-4  bg-[#4c75f0] text-white flex justify-between "
                  onClick={() => handleToggle(1)}
                >
                  <span className="flex-grow text-start">Orientation académique et professionnelle   </span>
                  <span className="sm:ml-10 text-2xl">{open === 1 ? "▲" : "▼"}</span>
                </button>


              </div>

              {open === 1 && (
                <div className="bg-white/60 p-2">
                  <div className="w-full">
                    <div className="bg-white/60 p-2 pb-0 grid grid-cols-1 sm:grid-cols-[1fr_3fr] gap-8 mt-2">


                      <div className=" ">
                        <div >

                          <div className="m-2">
                            <p> <span className="text-[#4A62AA] text-2xl font-bold "> - </span>
                              Renseignez-vous dès le secondaire sur les domaines d’études auxquels votre baccalauréat vous donne accès (littérature, droit, économie, etc.) ; ensuite, sur les professions envisageables dans votre domaine d’études (avocat, traducteur, médecin, etc.) et comment on y accède (voir nos fiches métiers).
                            </p>
                            <p> <span className="text-[#4A62AA] text-2xl font-bold "> - </span>
                              Entamez également dès que possible la réflexion sur la(les) profession(s) que vous souhaitez exercer en fonction de vos aptitudes et intérêts (idéalement dès le secondaire) ; le choix des études à suivre sera ainsi plus facile à opérer.
                            </p>
                          </div>

                          <p className="my-4  font-bold  text-[#4A62AA] ">
                            Les huit types d’intelligence et leurs principales composantes selon Howard Gardner :  </p>
                          <div className="w-full">
                            <div className="overflow-x-auto">
                              <table className="w-full text-left border-2 border-gray-300 min-w-[600px]">
                                <tbody>
                                  <tr className="text-black">
                                    <td className="border border-x-0 font-bold bg-[#f1d9b6]/70 p-2 md:p-4 align-top text-[#4A62AA]">1</td>
                                    <td className="border border-x-0 bg-[#f1d9b6]/70 p-2 align-top">Logico-mathématique :</td>
                                    <td className="border border-x-0 bg-[#f1d9b6]/70 p-2 align-top">
                                      Habileté logique, mathématique et scientifique.
                                      <p>
                                        <span className="text-[#4A62AA]">Professions envisageables :</span> <i>scientifique, mathématicien, ingénieur, comptable ;</i>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr className="text-black">
                                    <td className="border border-x-0 font-bold p-2 md:p-4 align-top text-[#4A62AA]">2</td>
                                    <td className="border border-x-0 p-2 align-top">Linguistique :</td>
                                    <td className="border border-x-0 p-2 align-top">
                                      Habiletés reliées à la production du discours, aux fonctions et à l'utilisation du langage.
                                      <p>
                                        <span className="text-[#4A62AA]">Professions envisageables :</span> <i>écrivain, journaliste, avocat, enseignant ;</i>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr className="text-black">
                                    <td className="border border-x-0 font-bold bg-[#f1d9b6]/70 p-2 md:p-4 align-top text-[#4A62AA]">3</td>
                                    <td className="border border-x-0 bg-[#f1d9b6]/70 p-2 align-top">Musicale :</td>
                                    <td className="border border-x-0 bg-[#f1d9b6]/70 p-2 align-top">
                                      Habiletés nécessaires à l'accomplissement de tâches de nature musicale : composition, exécution, écoute et discernement.
                                      <p>
                                        <span className="text-[#4A62AA]">Professions envisageables :</span> <i>musicien, chanteur, compositeur ;</i>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr className="text-black">
                                    <td className="border border-x-0 font-bold p-2 md:p-4 align-top text-[#4A62AA]">4</td>
                                    <td className="border border-x-0 p-2 align-top">Kinesthésique :</td>
                                    <td className="border border-x-0 p-2 align-top">
                                      Habileté corporelle ou manuelle, contrôle et harmonisation des mouvements du corps.
                                      <p>
                                        <span className="text-[#4A62AA]">Professions envisageables :</span> <i>danseur, sculpteur, acteur ;</i>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr className="text-black">
                                    <td className="border border-x-0 font-bold bg-[#f1d9b6]/70 p-2 md:p-4 align-top text-[#4A62AA]">5</td>
                                    <td className="border border-x-0 bg-[#f1d9b6]/70 p-2 align-top">Visuo-spatiale :</td>
                                    <td className="border border-x-0 bg-[#f1d9b6]/70 p-2 align-top">
                                      Habiletés associées aux configurations spatiales : perception exacte des formes, possibilité de les recréer et de les modifier.
                                      <p>
                                        <span className="text-[#4A62AA]">Professions envisageables :</span> <i>architecte, artiste, ingénieur ;</i>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr className="text-black">
                                    <td className="border border-x-0 font-bold p-2 md:p-4 align-top text-[#4A62AA]">6</td>
                                    <td className="border border-x-0 p-2 align-top">Naturaliste :</td>
                                    <td className="border border-x-0 p-2 align-top">
                                      Habiletés à reconnaître et à classifier les différentes espèces de la faune et de la flore.
                                      <p>
                                        <span className="text-[#4A62AA]">Professions envisageables :</span> <i>biologiste, agriculteur, jardinier ;</i>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr className="text-black">
                                    <td className="border border-x-0 font-bold bg-[#f1d9b6]/70 p-2 md:p-4 align-top text-[#4A62AA]">7</td>
                                    <td className="border border-x-0 bg-[#f1d9b6]/70 p-2 align-top">Intrapersonnelle :</td>
                                    <td className="border border-x-0 bg-[#f1d9b6]/70 p-2 align-top">
                                      Sensibilité aux humeurs, aux tempéraments, aux motivations.
                                      <p>
                                        <span className="text-[#4A62AA]">Professions envisageables :</span> <i>psychologue, philosophe, conseiller, vendeur, politicien ;</i>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr className="text-black">
                                    <td className="border border-x-0 font-bold p-2 md:p-4 align-top text-[#4A62AA]">8</td>
                                    <td className="border border-x-0 p-2 align-top">Interpersonnelle :</td>
                                    <td className="border border-x-0 p-2 align-top">
                                      Capacités d'introspection, d'auto-analyse, de se représenter une image de soi fidèle et précise et de l'utiliser efficacement.
                                      <p>
                                        <span className="text-[#4A62AA]">Professions envisageables :</span> <i>philosophe, écrivain, scientifique.</i>
                                      </p>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <div className="bg-white">
                              <p className="font-bold text-orange-500  pt-2 text-center mt-4">CONSEILS</p>
                              <div className="m-2 space-y-4">
                                <p>
                                  - <i className="text-[#4A62AA]">Ne soyez en aucun cas désespéré si en dépit de vos efforts, vous ne parvenez pas à vous fixer sur un métier à la fin du lycée.</i> Il existe des vocations tardives et, de nos jours, il est de plus en plus rare d'exercer un seul métier dans une carrière.
                                </p>
                                <p>
                                  - <i className="text-[#4A62AA]">Ne laissez personne opérer ou vous imposer un choix de formation ou de profession</i> car si vous n'en avez pas les aptitudes et/ou l'envie ce sera l'échec garanti ; dans le cas contraire, vous vous y ennuierez royalement et n'en tirerez aucune satisfaction.
                                </p>
                               
                                <p>
                                  - <i className="text-[#4A62AA]">Associez impérativement le parent qui financera vos études avant d'arrêter le choix de l'école</i> afin qu'il soit conscient des ressources financières à mobiliser tout au long de votre formation.
                                </p>
                                <p>
                                  - <i className="text-[#4A62AA]">Soyez bien conscient que votre métier de cœur peut avoir très peu ou pas de débouchés</i> (conservateur de musée, bibliothécaire, historien…) ou alors être saturé (commercial, juriste…).
                                </p>
                              
                              </div>
                            </div>
                            <p className="p-4">
                              <b>
                                <Link href="/misc/nous_contacter" className="hover:text-2xl">Contactez-nous</Link>
                              </b> si vous souhaitez un accompagnement dans le choix de votre profession ou de votre formation.
                            </p>
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
                  className="w-full    py-2 px-4  bg-[#4c75f0] text-white  flex justify-between items-center sm:justify-center"
                  onClick={() => handleToggle(2)}
                >
                  <span className="flex-grow text-start">Où étudier : Université, Grande École, IPES, IUT ou Prépa ?    </span>
                  <span className="sm:ml-10 text-2xl">{open === 2 ? "▲" : "▼"}</span>
                </button>


              </div>

              {open === 2 && (
                <div className="bg-white/60 p-4">
                  <div className="w-full bg-white/60 py-2 px-4 md:px-0">
                    <p>
                      Le choix de l’institution sera d’autant plus facile à opérer que vous aurez préalablement mûrement réfléchi à votre filière d’étude et/ou à votre profession. Ci-après les principaux aspects à prendre en compte :
                    </p>
                    <div className="my-6">

                      <table className="w-full text-left border-2 border-gray-300">

                        <tbody>
                          <tr className=" text-black">
                            <td className="border  font-bold p-2 align-top">  Le type d’études choisi</td>
                            <td className="border  p-2 align-top">


                              <p>
                                <i> Cycle long ou court ; filière générale ou professionnelle ? etc. ;</i>
                              </p>
                            </td>
                          </tr>

                          <tr className=" text-black">
                            <td className="border  font-bold bg-[#becbf3]/70 p-2 align-top">   Les conditions d’admission
                            </td>
                            <td className="border  bg-[#becbf3]/70 p-2 align-top">

                              <p>
                                <i> Concours ou étude de dossier, etc. : le concours est-il à ma portée ? Ai-je le profil requis ? etc. ;</i>
                              </p>
                            </td>
                          </tr>


                          <tr className=" text-black">
                            <td className="border  font-bold p-2 align-top">    Le coût de la formation
                            </td>
                            <td className="border   p-2 align-top">


                              <p>
                                <i>La formation est-elle à la portée de la bourse de mes parents ? etc. ;
                                </i>
                              </p>
                            </td>
                          </tr>


                          <tr className=" text-black">
                            <td className="border  font-bold bg-[#becbf3]/70 p-2 align-top">  Le taux d’insertion professionnelle de ses diplômés</td>
                            <td className="border  bg-[#becbf3]/70 p-2 align-top">

                              <p>
                                <i>Les diplômes de l’institution ont-ils la cote auprès des entreprises ?</i>
                              </p>
                            </td>
                          </tr>


                          <tr className=" text-black">
                            <td className="border  font-bold p-2 align-top"> La réputation de l’établissement et/ou de son corps professoral</td>
                            <td className="border  p-2 align-top">

                              <p>
                                <i> Certains établissements ont une plus grande notoriété que d’autres</i>
                              </p>
                            </td>
                          </tr>


                          <tr className=" text-black">
                            <td className="border  font-bold bg-[#becbf3]/70 p-2 align-top">   La ville où se trouve l’institution </td>
                            <td className="border  bg-[#becbf3]/70 p-2 align-top">


                              <p>
                                <i> Y a-t-il la possibilité d’y trouver un stage ou un emploi à la fin de la formation ? etc.</i>
                              </p>
                            </td>
                          </tr>



                        </tbody>
                      </table>
                      <div className="w-full">
                        <div className="overflow-x-auto">
                          <table className=" border-collapse border  shadow-lg w-full mt-8">
                            <thead>
                              <tr className="flex">

                                <th className="border-y-2 border-[#A87A38] flex-1   px-4 py-2 text-[#4A62AA]  text-center"> IUT</th>
                                <th className="border-y-2 border-[#A87A38] flex-1  px-4 py-2 text-[#4A62AA]  text-center">Universités & Grandes Écoles </th>
                                <th className="border-y-2 border-[#A87A38] flex-1  px-4 py-2 text-[#4A62AA]  text-center">Prépas </th>
                                <th className="border-y-2 border-[#A87A38] flex-1  px-4 py-2 text-[#4A62AA]  text-center"> Centres de formation professionnelle</th>

                              </tr>
                            </thead>
                            <tbody>

                              <tr className=" flex bg-[#d8c6ad]  text-start ">

                                <td className="text-start flex-1  border-x px-2">
                                  <p>
                                    Envisagez une formation courte de type BTS, DUT etc. dans un IUT/IPES si vous :</p>
                                  <p className="m-2"> - <i> souhaitez intégrer rapidement le monde du travail après une formation professionnelle ;
                                  </i></p>
                                  <p className="m-2">  - <i> ne disposez pas de moyens nécessaires pour des études longues.
                                  </i></p>
                                </td>
                                <td className="   px-2 flex-1 border-x ">
                                  <p>  Optez pour les cycles universitaires longs si vous envisagez de :</p>
                                  <p className="m-2"> - <i> faire de la recherche ou d’enseigner ;
                                  </i></p>
                                  <p className="m-2"> - <i> d’accéder aux professions libérales réglementées : notaire, pharmacien, etc.
                                  </i></p>
                                  <p className="m-2"> - <i> préparer les concours d’accès aux Grandes écoles.
                                  </i></p>


                                </td>
                                <td className="  px-2 flex-1 border-x">
                                  <p>    Les Classes Préparatoires aux Grandes Écoles (CPGE ou Prépas), spécificité française, préparent en deux ans aux concours d’entrée dans les écoles d’ingénieurs, de médecine, etc.
                                  </p>
                                  <p className="mt-2">  Bien qu’onéreuses, elles constituent un excellent moyen d’intégrer d’office une grande école étrangère.
                                  </p>
                                </td>
                                <td className="  flex-1 px-4 py-2 ">
                                  <p>Pour les très petites bourses désireuses d’apprendre les rudiments d’un métier en moins d’un an, explorez les formations diplômantes (DT, DTS, CQP) offertes par les Centres de formation professionnelle agréés sous la tutelle du Ministère de l’Emploi et de la Formation Professionnelle.</p>  </td>


                              </tr>





                            </tbody>
                          </table>
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
                  className="w-full    py-2 px-4  bg-[#4c75f0] text-white flex justify-between items-center sm:justify-center"
                  onClick={() => handleToggle(3)}
                >
                  <span className="flex-grow text-start">Pour éviter l’abandon ou le décrochage    </span>

                  <span className="sm:ml-10 text-2xl">{open === 3 ? "▲" : "▼"}</span>
                </button>


              </div>

              {open === 3 && (
                <div className="bg-white/60 p-4">
                  <div className="w-full space-y-4 bg-white/60 py-2 px-4 md:px-0">

                    <div className="mt-2 bg-[#becbf3] p-4 rounded shadow grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4">
                      <div className="font-bold text-start">
                        Assiduité en cours
                      </div>
                      <div className="max-w-4xl">
                        <p>
                          Le volume de connaissances à assimiler après les cours magistraux, travaux pratiques etc. est si important que l’étudiant non assidu sera très vite débordé et pourrait avoir un retard irrattrapable avant les partiels. Il est donc impératif d’assister assidûment et de participer activement aux cours tout au long du semestre.
                        </p>
                      </div>
                    </div>


                    <div className="mt-2 p-4 rounded shadow grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4">
                      <div className="font-bold text-start">
                        Persévérance acharnée dans le travail
                      </div>
                      <div className="max-w-4xl">
                        <p>
                          Dès le premier jour, élaborez un planning de révision quotidienne ; effectuez des recherches régulières (Internet, bibliothèque) pour approfondir les notions acquises ; au besoin, intégrez un groupe de travail pour vos révisions. Travaillez sans relâche à comprendre et à assimiler chaque cours.
                        </p>
                      </div>
                    </div>


                    <div className="mt-2 bg-[#becbf3] p-4 rounded shadow grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4">
                      <div className="font-bold text-start">
                        Autodiscipline
                      </div>
                      <div className="max-w-4xl">
                        <p>
                          Respectez scrupuleusement vos horaires de révision, recherche, lecture et détente ; l’autodiscipline est déterminante pour la réussite de vos études. De plus, elle vous conduira vers l’autonomie, qualité indispensable pour la réussite dans la vie professionnelle.
                        </p>
                      </div>
                    </div>


                    <div className="mt-2 p-4 rounded shadow grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4">
                      <div className="font-bold text-start">
                        Confiance en soi et forte motivation
                      </div>
                      <div className="max-w-4xl">
                        <p>
                          Restez confiant en votre réussite ; en cas de difficultés, redoublez d’ardeur au travail non sans avoir réévalué votre méthode de travail ; en cas d’échec, ne baissez pas les bras ; analysez les causes et les raisons de l’échec pour y remédier. Restez motivé et déterminé à décrocher votre diplôme.
                        </p>
                      </div>
                    </div>


                    <div className="mt-2 bg-[#becbf3] p-4 rounded shadow grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4">
                      <div className="font-bold text-start">
                        Pratique du sport & Engagement associatif
                      </div>
                      <div className="max-w-4xl">
                        <p>
                          L’adhésion à une association et la pratique régulière d’un sport d’équipe constituent d’excellents moyens pour acquérir des connaissances spécifiques extra-académiques et, surtout, des soft skills indispensables dans la vie professionnelle et sociale, et de plus en plus exigés par les employeurs.
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
                  className="w-full    py-2 px-4  bg-[#4c75f0] text-white flex justify-between items-center sm:justify-center"
                  onClick={() => handleToggle(4)}
                >
                  <span className="flex-grow text-start">Santé et gestion du stress </span>  <span className="sm:ml-10 text-2xl">{open === 4 ? "▲" : "▼"}</span>
                </button>


              </div>

              {open === 4 && (
                <div className="bg-white/60 p-4">
                  <div className="w-full bg-white/60 py-2 px-4 md:px-0">
                    <p>


                      Pendant vos études et dans la vie professionnelle, vous serez confronté à des situations de stress découlant par exemple du <i>diktat des parents sur le choix de la formation ou de la profession ; d’une éventuelle précarité financière ; des relations délétères avec un enseignant, un camarade, un collègue ou un supérieur, etc.
                      </i> </p>

                    <p className="font-bold mt-2">
                      Pour combattre le stress :
                    </p>
                    <div className="w-full space-y-4 text-start">

                      <div className="mt-2 bg-[#becbf3] p-4 rounded shadow grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4">
                        <div className="font-bold text-start">
                          Adoptez un mode de vie anti-stress
                        </div>
                        <div className="max-w-4xl space-y-2">
                          <p><span className="text-[#4A62AA]">■</span>&nbsp;&nbsp;Soyez bien organisé pour éviter les révisions de dernières minutes stressantes ;</p>
                          <p><span className="text-[#4A62AA]">■</span>&nbsp;&nbsp;Déconnectez-vous quotidiennement quelques heures des écrans et surtout des réseaux sociaux ;</p>
                          <p><span className="text-[#4A62AA]">■</span>&nbsp;&nbsp;Ayez une alimentation saine et faites régulièrement du sport ;</p>
                          <p><span className="text-[#4A62AA]">■</span>&nbsp;&nbsp;Dormez suffisamment pour réduire la fatigue (au moins 7 heures par jour) ;</p>
                          <p><span className="text-[#4A62AA]">■</span>&nbsp;&nbsp;Évitez la consommation d’alcool et ne touchez surtout pas au tabac, aux drogues et aux stupéfiants qui nuisent gravement à la santé.</p>
                        </div>
                      </div>


                      <div className="mt-2 p-4 rounded shadow grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4">
                        <div className="font-bold text-start">
                          Éliminez les agents stressants
                        </div>
                        <div className="max-w-4xl space-y-2">
                          <p><span className="text-[#4A62AA]">■</span>&nbsp;&nbsp;Faites abstraction de ce qui vous entoure lorsque nécessaire et pensez uniquement à vous et à vos objectifs ;</p>
                          <p><span className="text-[#4A62AA]">■</span>&nbsp;&nbsp;Focalisez-vous sur les évènements que vous pouvez influencer et laissez tomber les autres.</p>
                          <p><span className="text-[#4A62AA]">■</span>&nbsp;&nbsp;Ne vous comparez pas sans cesse à vos camarades car vous n’avez pas les mêmes prédispositions (physiques et mentales) ou moyens, etc. !</p>
                        </div>
                      </div>


                      <div className="mt-2 bg-[#becbf3] p-4 rounded shadow grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4">
                        <div className="font-bold text-start">
                          Atténuez vos réactions au stress
                        </div>
                        <div className="max-w-4xl">
                          <p>Par un discours interne positif : relativisez et positivez, voyez le bon côté des choses, etc.</p>
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
                  className="w-full    py-2 px-4  bg-[#4c75f0] text-white flex justify-between items-center sm:justify-center"
                  onClick={() => handleToggle(5)}
                >
                  <span className="flex-grow text-start">Réorientation
                  </span>
                  <span className="sm:ml-10 text-2xl">{open === 5 ? "▲" : "▼"}</span>
                </button>


              </div>

              {open === 5 && (
                <div className="bg-white/60 p-4">
                  <div className="w-full bg-white/60 py-2">
                    <p className="p-2">

                      En cas d’échecs répétés en dépit d’un travail assidu, repensez votre méthode de travail, réévaluez vos motifs pour le choix de la formation et n’hésitez pas à envisager une réorientation académique si cela est nécessaire ; on peut se tromper de voie au premier coup et il existe des vocations tardives. Au besoin, discutez-en avec un responsable pédagogique ou un conseiller d’orientation.      </p>



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
                  <div className="w-full bg-white/60 space-y-2 p-2">

                    <p>

                      ‒
                      Frédéric Chapelle et Benoît Monié (2007). <i className="text-blue-500 ">   Bon stress et mauvais stress : mode d’emploi. </i>Édition Odile Jacob.
                    </p>
                    <p>

                      ‒ Howard Gardner (2010). <i className="text-blue-500 "> Les formes de l’intelligence. Éditions Odile Jacob.  </i></p>

                    <p>

                      ‒ Christophe Massin et Isabelle Sauvegrain (2006). <i className="text-blue-500 ">   Réussir sans se détruire : des solutions au stress du travail. Édition Albin Michel.</i>  </p>





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
                        - Plateforme RIASEC 
                         <br /> <a href="https://www.monemploi.com/riasec" className="text-blue-600" target="_blank" rel="noopener noreferrer"><i> https://www.monemploi.com/riasec </i></a>
                      </p>
                      <p>
                        - Test d’orientation Oriane  
                        <br/>  <a href="https://www.oriane.info/je-passe-le-test-dorientation-oriane " className="text-blue-600" target="_blank" rel="noopener noreferrer"><i> https://www.oriane.info/je-passe-le-test-dorientation-oriane</i> </a>
                      </p>
                       <p>
                        - What Can I Do With This Major 
                        <br />  <a href="https://whatcanidowiththismajor.com/about/" className="text-blue-600" target="_blank" rel="noopener noreferrer"><i> https://whatcanidowiththismajor.com/about/</i> </a>
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