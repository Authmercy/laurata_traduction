"use client";
import React, { useRef } from "react";
import { useEffect, useState } from "react";
import Link from "next/link";


export default function PreparesonBacComponent() {
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
                            PRÉPARER SON BACCALAURÉAT
                        </div>

                    </div>
                    <div className="flex flex-row my-4 gap-1">
                        <div className="flex-1  ">
                        </div>
                        <div className="flex-2 bg-white text-black p-4 text-end"> <p className="">
                            S’attendre à obtenir un bon travail sans étudier, c’est comme s’attendre à gagner un marathon sans le courir.
                            <br />  <span className="text-[#4A62AA] font-semibold ">Albert Einstein</span>
                        </p>

                        </div>
                    </div>

                    <div className="mt-1  text-black bg-white/70 p-8 space-y-4">
                        <p>
                            L’élève qui a une méthode de révision efficace et optimise son temps de travail, réussira à coup sûr le baccalauréat.
                        </p>
                        <p className="text-[#4A62AA] font-bold" >
                            Pour une préparation optimale au baccalauréat, l’élève :
                        </p>
                        <div className="bg-[#A87A38]/20 items-stretch  p-2">
                            <p className="text-[#4A62AA] font-bold "> En classe</p>
                            <p>
                                <b>
                                    Est assidu, attentif et participe activement
                                </b> aux cours dès le premier jour ;
                            </p>
                            <p>
                                <b>
                       Ne sous-estime aucune matière 
                                 </b> <i>
                                    (le bonus d'une matière facultative peut permettre de relever votre note finale) ;
                                </i>
                            </p>
                            <p>
                                <b>
                                    Est toujours motivé et déterminé à apprendre.
                                </b>
                            </p>
                        </div>
                        <div className="bg-[#A87A38]/30   p-2 ">
                            <p className="text-[#4A62AA] font-bold "> À la maison</p>
                            <p>
                                <b>
                                    Effectue ses révisions
                                </b> sur la bases d'un calendrier de révision, au besoin réaménagé périodiquement, et qu'il respecte scrupuleusement dès la rentrée ;
                            </p>

                            <p>
                                <b>
                                    Résume jour après jour l'essentiel de chaque leçon pour chaque matière   à  l'aide de fiches de synthèse bien élaborées et structurées qu'il révise ensuite intelligemment.
                                </b>
                            </p>
                        </div>
                        <div className="bg-[#A87A38]/40  p-2 ">
                            <p className="text-[#4A62AA]  font-bold">  Avec ses camarades</p>
                            <p>
                                <b>
                                    Travaille en groupe et séexerce continuellement    à l'aide d'exercices résolus en classe ou d'anciennes épreuves <i>
                                        voir Annales du Bac.
                                    </i>
                                </b>
                            </p>
                        </div>
                        <div className="bg-[#A87A38]/50  p-2 ">
                            <p className="text-[#4A62AA]  font-bold">  Internet</p>
                            <p>
                                <b>
                                    Utilise Internet pour optimiser ses révisions,                                 </b>télécharger ou consulter les Annales d'anciennes épreuves et leur corrigés, densifier ses lectures et approfondir sa culture générale.
                                <i> Consultez uniquement les sites aux contenus vérifiés ; évitez de perdre du temps sur les réseaux sociaux.</i>

                            </p>
                        </div>
                        <div className="bg-[#A87A38]/60  p-2 ">
                            <p className="text-[#4A62AA]  font-bold"> Sport</p>
                            <p>
                                <b>
                                    Prend soin de sa condition physique
                                </b> par une alimentation saine et équilibrée, des heures de repos appropriées et, par une pratique régulière de sport pour se détendre.
                            </p>
                        </div>
                        <div className="mt-1 space-y-4">
                            <div>


                                <button
                                    className="py-2 px-4 w-full bg-white/80 text-[#4A62AA]  text-xl font-bold flex justify-between items-center"
                                    onClick={() => handleToggle(1)}
                                >
                                    <span>   Astuces pour les révisions   </span>
                                    <span className="text-2xl">{open === 1 ? "▲" : "▼"}</span>
                                </button>


                                {open === 1 && (
                                    <div className="bg-white/80 p-4 space-y-2 ">

                                        <div className="w-full">
                                            <p><b>  Identifie ton(tes) profil(s) d’apprentissage et ajuste ta méthode de révision </b> en conséquence : </p>
                                            <p> <span className="text-[#4A62AA]  font-bold "> - Profil visuel : </span>
                                                tu apprends et mémorises plus facilement les contenus à l’aide de supports graphiques, schémas, vidéos, fiches de synthèse, etc.
                                            </p>
                                            <p> <span className="text-[#4A62AA]  font-bold "> - Profil auditif :  </span>
                                                tu retiens plus facilement à l’oral, tu seras porté vers l’apprentissage par cœur ;</p>

                                            <p> <span className="text-[#4A62AA]  font-bold "> - Profil kinesthésique : </span>
                                                tu as besoin de pratique pour comprendre et assimiler ;</p>
                                        </div>
                                        <p> <span className="text-[#4A62AA]  font-bold "> - Profil communicatif: </span>
                                            tu apprends plus facilement en binôme ou en groupe.</p>

                                        <p>
                                            <b>
                                                Mets à contribution le maximum de canaux d’apprentissage possible à la fois :
                                            </b>  canal visuel, auditif, kinesthésique.
                                        </p>
                                    </div>





                                )}
                            </div>
                        </div>
                        <div className="mt-1 space-y-4">
                            <div>


                                <button
                                    className="py-2 px-4 w-full bg-white/80 text-[#4A62AA]  text-xl font-bold flex justify-between items-center"
                                    onClick={() => handleToggle(2)}
                                >
                                    <span> La veille et le jour de l’examen    </span>
                                    <span className="text-2xl">{open === 2 ? "▲" : "▼"}</span>
                                </button>


                                {open === 2 && (
                                    <div className="bg-white/80 p-4 ">

                                        <div className="w-full">

                                            <p> <span className="text-[#4A62AA] text-2xl font-bold "> - </span>
                                                Va tôt au lit après avoir rassemblé les effets à emporter le lendemain (pièce d’identité, calculatrice, stylos, etc.) ; NB : porte une tenue dans laquelle tu seras à ton aise ;
                                            </p>
                                            <p> <span className="text-[#4A62AA] text-2xl font-bold "> - </span>
                                                Le jour de l’examen, prends toutes les dispositions nécessaires pour être à l’heure dans la salle d’examen ; exécute à la lettre les instructions des surveillants ;   </p>

                                            <p> <span className="text-[#4A62AA] text-2xl font-bold "> - </span>
                                                Prends le temps de lire attentivement les énoncés de chaque épreuve, plusieurs fois si nécessaire. Ensuite, traite sans précipitation les sujets en commençant par les plus faciles. <br /> <span className="font-bold "> NB :  </span> <i> Prévoir du temps pour relire ta copie afin d’éviter les fautes, erreurs de calcul, contresens, omissions, etc.
                                                </i> </p>    </div>


                                    </div>





                                )}
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
                                                Jean-François Michel (2005).   <i className="text-[#4A62AA] ">   Les 7 profils d’apprentissage.</i>Ed. Eyrolles.
                                            </p>
                                            <p>

                                                ‒
                                                Howard Gardner (2010).   <i className="text-[#4A62AA] ">   Les formes de l’intelligence.</i> Éditions Odile Jacob
                                            </p>


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
                                                    - Cameroon GCE Board (GCEB) <br /> <a href="https://camgceb.org/" className="text-blue-600" target="_blank" rel="noopener noreferrer"><i>https://camgceb.org/ </i></a>
                                                </p>
                                                <p>
                                                    - Office du Baccalauréat du Cameroun (OBC) <br />  <a href="https://www.obc.cm/ " className="text-blue-600" target="_blank" rel="noopener noreferrer"><i> https://www.obc.cm/ </i> </a>
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