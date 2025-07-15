"use client";


import { useState } from "react";

export default function ConseilStage() {

    const [open, setOpen] = useState(null);
    const handleToggle = (index: any) => {
        setOpen(open === index ? null : index);
    };


    return (
        <div className="flex flex-wrap pl-10 mt-2 pt-6">
            <div className="flex-grow md:w-2/3  text-black  p-8">
                <div className="  bg-[#A87A38] p-3 text-center  font-bold text-2xl
                 uppercase text-white ">
                    Conseils pour réussir son stage
                </div>

                <div

                    className="bg-white/60   mt-2  p-2 px-6 shadow-sm mb-2 cursor-pointer hover:shadow-md transition-shadow"
                >

                    <p className=" ">
                        Le stagiaire qui veut réussir son stage  : </p>


                </div>





                <div className="mt-6 space-y-4">
                    <div>


                        <button
                            className="py-2 px-4 w-full text-white bg-[#4A62AA]/70    flex justify-between items-center"
                            onClick={() => handleToggle(2)}
                        >
                            <span>AVANT LE DÉBUT DU STAGE   </span>
                            <span className="text-2xl">{open === 2 ? "▲" : "▼"}</span>
                        </button>


                        {open === 2 && (
                            <div className="bg-white/70 p-4 mt-2 ">

                                <div className="w-full ">

                                    <div className="bg-white/60 p-4 grid grid-cols-[1fr_3fr] gap-8">
                                        <div className=" text-[#4A62AA] "> Généralités</div>
                                        <div className="max-w-4xl">
                                            <p><span className="font-bold text-[#4A62AA]">1.</span> S’informe sur l’entreprise, son secteur d’activité et ses concurrents sur Internet.</p>
                                            <p><span className="font-bold text-[#4A62AA]">2.</span> Se renseigne sur les horaires de travail et de pauses lors de l’entretien.</p>
                                            <p><span className="font-bold text-[#4A62AA]">3.</span> Évalue le trajet (en taxi, moto, etc.) entre son domicile et le lieu du stage pour éviter les retards.</p>
                                            <p><span className="font-bold text-[#4A62AA]"> 4.</span> Demande à avoir un accès minimum au matériel de travail et si ce dernier est fourni par l’entreprise.</p>
                                        </div>
                                    </div>


                                    <div className="bg-white/60 p-4 grid grid-cols-[1fr_3fr] gap-8 mt-2">
                                        <div className=" text-[#4A62AA] "> Code vestimentaire</div>
                                        <div className="max-w-4xl">
                                            <p><span className="font-bold text-[#4A62AA]">5.</span> S’informe sur l’existence ou non d’un code vestimentaire au sein de l’entreprise. Si oui, le respecte.</p>
                                        </div>
                                    </div>


                                    <div className="bg-white/60 p-4 grid grid-cols-[1fr_3fr] gap-8 mt-2">
                                        <div className=" text-[#4A62AA] "> Entretien d’embauche</div>
                                        <div className="max-w-4xl">
                                            <p><span className="font-bold text-[#4A62AA]">6.</span> S’exerce à se présenter en moins de 3 minutes, en synthétisant son parcours autour de quelques axes majeurs.</p>
                                            <p><span className="font-bold text-[#4A62AA]">7.</span> Est ponctuel le jour de l’entretien et porte une tenue décente et formelle.</p>
                                            <p><span className="font-bold text-[#4A62AA]">8.</span> Se munit de moyens de montrer son expérience, son savoir-faire et ses compétences ainsi que quelques références en lien avec ses engagements associatifs ou de candidatures idéales.</p>
                                            <p><span className="font-bold text-[#4A62AA]">9.</span> Lorsqu’il ne comprend pas bien une expression ou un terme, il prend des notes et demande à son interlocuteur de la répéter.</p>

                                        </div>
                                    </div>

                                </div>




                            </div>)}


                    </div>




                </div>
                <div className="mt-2">
                    <div>



                        <button
                            className="py-2 px-4 w-full text-white bg-[#4A62AA]/70    flex justify-between items-center"
                            onClick={() => handleToggle(1)}
                        >
                            <span>PENDANT LE STAGE  </span>
                            <span className="text-2xl">{open === 1 ? "▲" : "▼"}</span>
                        </button>


                        {open === 1 && (
                            <div className="bg-white/70 p-4 mt-2 ">

                                <div className="w-full ">

                                    <div className="bg-white/60 p-4 grid grid-cols-[1fr_3fr] gap-8">
                                        <div className=" text-[#4A62AA] "> Ponctualité, retard, absence</div>
                                        <div className="max-w-4xl">
                                            <p><span className="font-bold text-[#4A62AA]">10.</span> Prend ses dispositions pour JAMAIS arriver en retard ou s’absenter sans autorisation préalable.

                                                (Lorsqu’il doit s’absenter pour une raison quelconque (maladie, deuil, etc.), il n’attend pas la veille pour en informer le responsable et demander l’autorisation d’absence mais le fait une semaine avant.
                                                Demande à avoir un accès minimum au matériel de travail et si ce dernier est fourni par l’entreprise.)</p>
                                        </div>
                                    </div>


                                    <div className="bg-white/60 p-4 grid grid-cols-[1fr_3fr] gap-8 mt-2">
                                        <div className=" text-[#4A62AA] "> Habillement & Savoir-être</div>
                                        <div className="max-w-4xl">
                                            <p><span className="font-bold text-[#4A62AA]">11.</span> Est toujours propre sur lui, habillé décemment et sans extravagance dans le respect du code vestimentaire.</p>
                                            <p><span className="font-bold text-[#4A62AA]">12.</span> Est, en toutes circonstances, poli et courtois avec l’ensemble du personnel, du vigile au grand patron.</p>
                                            <p><span className="font-bold text-[#4A62AA]">13.</span> Évite le vol, les intrigues et les ragots.</p>
                                        </div>
                                    </div>


                                    <div className="bg-white/60 p-4 grid grid-cols-[1fr_3fr] gap-8 mt-2">
                                        <div className=" text-[#4A62AA] "> Implication, engagement</div>
                                        <div className="max-w-4xl">
                                            <p><span className="font-bold text-[#4A62AA]">14.</span> Dès le premier jour, s’implique totalement dans l’exécution des tâches qui lui sont confiées. Muni d’un bloc-notes, il note toutes les informations nécessaires à l’exécution de celles-ci. Il prend des initiatives et pose des questions et n’hésite pas à les faire savoir lorsqu’il n’a pas bien compris une tâche ou des explications.</p>


                                        </div>
                                    </div>

                                    <div className="bg-white/60 p-4 grid grid-cols-[1fr_3fr] gap-8 mt-2">
                                        <div className=" text-[#4A62AA] "> Connaissance de l’entreprise</div>
                                        <div className="max-w-4xl">
                                            <p><span className="font-bold text-[#4A62AA]">15.</span> Au bout de la 1ère semaine, il possède une parfaite connaissance de l’entreprise et ses produits et comprend l’organigramme et les différentes directions et leurs fonctions respectives.</p>


                                        </div>
                                    </div>

                                    <div className="bg-white/60 p-4 grid grid-cols-[1fr_3fr] gap-8 mt-2">
                                        <div className=" text-[#4A62AA] "> Pour éviter d’être cantonné au photocopieur ou à la machine à café</div>
                                        <div className="max-w-4xl">
                                            <p><span className="font-bold text-[#4A62AA]">16.</span> Indique dès le premier jour son encadreur son rapport de stage devra expliquer sa contribution à l’exécution d’une tâche quotidienne, hebdomadaire ou à la résolution d’une problématique précise, etc.</p>

                                            <p><span className="font-bold text-[#4A62AA]">17.</span> Se montre disposé à apprendre et intéressé par de nouvelles tâches.</p>
                                        </div>
                                    </div>

                                    <div className="bg-white/60 p-4 grid grid-cols-[1fr_3fr] gap-8 mt-2">
                                        <div className=" text-[#4A62AA] "> Entretien régulier avec l’encadreur</div>
                                        <div className="max-w-4xl">
                                            <p><span className="font-bold text-[#4A62AA]">18.</span> Fait un point régulier avec son encadreur (chaque semaine ou après deux semaines) sur la progression de son apprentissage. Le cas échéant, il lui fait part des difficultés rencontrées.</p>

                                        </div>
                                    </div>

                                    <div className="bg-white/60 p-4 grid grid-cols-[1fr_3fr] gap-8 mt-2">
                                        <div className=" text-[#4A62AA] "> Rédaction du rapport de stage</div>
                                        <div className="max-w-4xl">
                                            <p><span className="font-bold text-[#4A62AA]">19.</span> Élabore dès la première semaine un planning de rédaction et commence dès que possible.</p>
                                            <p><span className="font-bold text-[#4A62AA]">20.</span> Informe l’encadreur dès la 1ère semaine la date butoir pour le dépôt du rapport de stage à l’établissement.</p>
                                            <p><span className="font-bold text-[#4A62AA]">21.</span> Évite le plagiat d’autres rapports sur Internet car il existe de nos jours des logiciels qui détectent les plagiats, allant du simple paragraphe à des pages entières. Pensez aux sanctions académiques voire pénales.</p>

                                        </div>
                                    </div>

                                    <div className="bg-white/60 p-4 grid grid-cols-[1fr_3fr] gap-8 mt-2">
                                        <div className=" text-[#4A62AA] "> Abus, difficultés, etc.</div>
                                        <div className="max-w-4xl">
                                            <p><span className="font-bold text-[#4A62AA]">22.</span>     Se réfère toujours en premier à son encadreur quelle que soit la nature des difficultés ou des soucis qu’il rencontre. S’il s’agit d’un sujet sensible, fais-le par écrit.</p>

                                        </div>
                                    </div>

                                </div>




                            </div>)}


                    </div>

                    <div className="mt-2">
                        <div>



                            <button
                                className="py-2 px-4 w-full text-white bg-[#4A62AA]/70    flex justify-between items-center"
                                onClick={() => handleToggle(3)}
                            >
                                <span>AVANT/À LA FIN DU STAGE </span>
                                <span className="text-2xl">{open === 3 ? "▲" : "▼"}</span>
                            </button>


                            {open === 3 && (
                                <div className="bg-white/70 p-4 mt-2 ">

                                    <div className="w-full ">

                                        <div className="bg-white/60 p-4 grid grid-cols-[1fr_3fr] gap-8">
                                            <div className=" text-[#4A62AA] "> Attestation de stage</div>
                                            <div className="max-w-4xl">
                                                <p><span className="font-bold text-[#4A62AA]">23.</span> Se renseigne assez tôt (au moins 2 semaines avant la fin du stage) des formalités à remplir au sein de l’entreprise pour la délivrance de l’attestation de stage.</p>
                                                <p><span className="font-bold text-[#4A62AA]"> 24.</span> Informe son encadreur et la direction du personnel suffisamment tôt de la date à laquelle il doit être en possession de cette attestation.</p>
                                            </div>
                                        </div>


                                        <div className="bg-white/60 p-4 grid grid-cols-[1fr_3fr] gap-8 mt-2">
                                            <div className=" text-[#4A62AA] "> Nouer des contacts</div>
                                            <div className="max-w-4xl">
                                                <p><span className="font-bold text-[#4A62AA]">25.</span> Noue le maximum de contacts possibles. Ils pourront être d’une grande utilité dans la recherche d’un premier emploi.</p>
                                            </div>
                                        </div>


                                        <div className="bg-white/60 p-4 grid grid-cols-[1fr_3fr] gap-8 mt-2">
                                            <div className=" text-[#4A62AA] "> Recrutement</div>
                                            <div className="max-w-4xl">
                                                <p><span className="font-bold text-[#4A62AA]">26.</span> Se renseigne auprès de son encadreur ou des ressources humaines si un recrutement est envisagé à court ou moyen dans son domaine dans la structure. Fais part de son intérêt le cas échéant.</p>

                                            </div>
                                        </div>

                                        <div className="bg-white/60 p-4 grid grid-cols-[1fr_3fr] gap-8 mt-2">
                                            <div className=" text-[#4A62AA] "> Remerciements</div>
                                            <div className="max-w-4xl">
                                                <p><span className="font-bold text-[#4A62AA]">27.</span> Adresse ses remerciements à son encadreur ainsi qu’à l’équipe au sein de laquelle il a effectué son stage. Voire à la direction générale s’il pense que cela est justifié.</p>

                                            </div>
                                        </div>
                                    </div>





                                </div>)}


                        </div>


                    </div>
                </div>

            </div>
        </div >

    );
}