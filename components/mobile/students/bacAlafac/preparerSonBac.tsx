"use client";
import React, { useRef } from "react";
import { useEffect, useState } from "react";
import Navbar from "../../navbar/navbar";
import FooterMobile from "../../footer/footerEnd";


export default function PreparesonBacComponentMobile() {
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
                            PRÉPARER SON BACCALAURÉAT
                        </p>  </div>





                    <div className="mt-8   text-black bg-white/70 p-4 space-y-4">
                        <p>
                            L’élève qui a une méthode de révision efficace et optimise son temps de travail, réussira à coup sûr le baccalauréat.
                        </p>
                        <p className="text-[#4A62AA] text-center text-lg font-bold" >
                            Pour une préparation optimale au baccalauréat, l’élève :
                        </p>
                        <div className="overflow-x-auto">
                            <div className="flex gap-4 flex-col px-2">
                                <div className=" bg-[#A87A38]/20 p-4 rounded">
                                    <p className="text-[#4A62AA] text-center font-bold">En classe</p>
                                    <p><b>Est assidu, attentif et participe activement</b> aux cours dès le premier jour</p>
                                    <p><b>Est assidu, attentif et participe activement</b><i> (le bonus d'une matière facultative peut permettre de relever votre note finale) ;</i></p>
                                    <p><b>Est toujours motivé et déterminé à apprendre</b></p>
                                </div>

                                <div className=" bg-[#A87A38]/30 p-4 rounded">
                                    <p className="text-[#4A62AA] text-center font-bold">À la maison</p>
                                    <p><b>Effectue ses révisions</b> sur la base d'un calendrier de révision, qu’il respecte dès la rentrée ;</p>
                                    <p><b>Résume jour après jour l'essentiel</b> avec des fiches de synthèse bien structurées à réviser intelligemment ;</p>
                                </div>

                                <div className=" bg-[#A87A38]/40 p-4 rounded">
                                    <p className="text-[#4A62AA] text-center font-bold">Avec ses camarades</p>
                                    <p><b>Travaille en groupe</b> et s’exerce avec des exercices de classe ou d’anciennes épreuves <i>(voir Annales du Bac)</i></p>
                                </div>

                                <div className=" bg-[#A87A38]/50 p-4 rounded">
                                    <p className="text-[#4A62AA] text-center font-bold">Internet</p>
                                    <p><b>Utilise Internet pour optimiser ses révisions,</b> consulter les Annales et approfondir sa culture.
                                        <i> Évitez les réseaux sociaux ; privilégiez les sources fiables.</i></p>
                                </div>

                                <div className=" bg-[#A87A38]/60 p-4 rounded">
                                    <p className="text-[#4A62AA] text-center font-bold">Sport</p>
                                    <p><b>Prend soin de sa condition physique</b> avec une alimentation saine, un bon sommeil et du sport pour se détendre.</p>
                                </div>
                            </div>
                        </div>



                        <div className="mt-2 space-y-4">
                            <div>

                                <div className="flex flex-col sm:flex-row gap-1">
                                    <button
                                        className="w-full py-2 px-4 text-center bg-[#4c75f0] text-white flex items-center justify-between"
                                        onClick={() => handleToggle(5)}
                                    >
                                        <span className="flex-grow text-start"> Astuces pour les révisions</span>
                                        <span className="sm:ml-10 text-2xl">{open === 5 ? "▲" : "▼"}</span>
                                    </button>


                                </div>

                                {open === 5 && (
                                    <div className="bg-white/60 ">
                                        <div className="w-full bg-white/60  p-2 ">
                                            <p><b>  Identifie ton(tes) profil(s) d’apprentissage et ajuste ta méthode de révision </b> en conséquence : </p>
                                            <br />
                                            <p> <span className="text-[#4A62AA]  font-bold "> - Profil visuel <br /> </span>
                                                Tu apprends et mémorises plus facilement les contenus à l’aide de supports graphiques, schémas, vidéos, fiches de synthèse, etc.
                                            </p>
                                            <p> <span className="text-[#4A62AA]  font-bold "> - Profil auditif  <br /> </span>
                                                Tu retiens plus facilement à l’oral, tu seras porté vers l’apprentissage par cœur ;</p>

                                            <p> <span className="text-[#4A62AA]  font-bold "> - Profil kinesthésique  <br /> </span>
                                                Tu as besoin de pratique pour comprendre et assimiler ;</p>

                                            <p> <span className="text-[#4A62AA]  font-bold "> - Profil communicatif <br /> </span>
                                                Tu apprends plus facilement en binôme ou en groupe.</p>
                                            <br />
                                            <p>

                                                <b>
                                                    Mets à contribution le maximum de canaux d’apprentissage possible à la fois :
                                                </b>  canal visuel, auditif, kinesthésique.
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
                                        onClick={() => handleToggle(6)}
                                    >
                                        <span className="flex-grow text-start"> La veille et le jour de l’examen</span>
                                        <span className="sm:ml-10 text-2xl">{open === 6 ? "▲" : "▼"}</span>
                                    </button>


                                </div>

                                {open === 6 && (
                                    <div className="bg-white/60 ">
                                        <div className="w-full bg-white/60 p-2">
                                            <p> <span className="text-[#4A62AA] text-2xl font-bold "> - </span>
                                                Va tôt au lit après avoir rassemblé les effets à emporter le lendemain (pièce d’identité, calculatrice, stylos, etc.) ; NB : porte une tenue dans laquelle tu seras à ton aise ;
                                            </p>
                                            <p> <span className="text-[#4A62AA] text-2xl font-bold "> - </span>
                                                Le jour de l’examen, prends toutes les dispositions nécessaires pour être à l’heure dans la salle d’examen ; exécute à la lettre les instructions des surveillants ;   </p>

                                            <p> <span className="text-[#4A62AA] text-2xl font-bold "> - </span>
                                                Prends le temps de lire attentivement les énoncés de chaque épreuve, plusieurs fois si nécessaire. Ensuite, traite sans précipitation les sujets en commençant par les plus faciles.
                                            </p>

                                            <p className="mt-2">
                                                <span className="font-bold  "> NB :  </span> <i> Prévoir du temps pour relire ta copie afin d’éviter les fautes, erreurs de calcul, contresens, omissions, etc.
                                                </i>
                                            </p>  </div>






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
                                    <div className="bg-white/60 ">
                                        <div className="w-full bg-white p-2 space-y-2">
                                            <p>

                                                ‒
                                                Jean-François Michel (2005).   <i className="text-blue-500 ">   Les 7 profils d’apprentissage.</i> Ed. Eyrolles.
                                            </p>
                                            <p>

                                                ‒
                                                Howard Gardner (2010).   <i className="text-blue-500 ">   Les formes de l’intelligence.</i> Éditions Odile Jacob
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
                                        <div className="w-full bg-white/60 p-2 ">
                                            <div className="space-y-4 text-start">


                                                <p>
                                                    - Cameroon GCE Board, GCEB : <br /> <a href="https://camgceb.org/" className="text-blue-600" target="_blank" rel="noopener noreferrer"><i>https://camgceb.org/ </i></a>
                                                </p>
                                                <p>
                                                    - Office du Baccalauréat du Cameroun, OBC : <br />   <a href="https://www.obc.cm/ " className="text-blue-600" target="_blank" rel="noopener noreferrer"><i> https://www.obc.cm/ </i> </a>
                                                </p>  </div>






                                        </div>

                                    </div>
                                )}
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
