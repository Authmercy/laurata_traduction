"use client";

import { useRouter } from "next/router";
import Image from "next/image";


export default function MoreInfosSection() {
    const router = useRouter();
    const handleClickInternships = () => {
        router.push(`/students/offresStage`);
    };
    const handleClickEnterprises = () => {
        router.push(`/entreprise/promotion`);
    };
    const handleClickInstitutions = () => {
        router.push(`/institut/referencer`);
    };
    return (
        <div>
         


            <div className="flex flex-row-3 gap-2 mt-20 p-8">
                <div className=" flex-1 justify-center">
                    <div className="flex flex-row     ml-2 ">
                        <Image src="/icons/etudiantIcon2.png" alt={""} width={130} height={100} />
                        <p className="text-[#A38340] text-xl pt-8 font-bold">Étudiants & Diplômés</p>

                    </div>
                    <div className=" bg-[#9b7d3c] -mt-[1.15rem] space-y-3   h-[350px] px-8 pt-6  text-white text-start">
                        <div className="space-y-3 h-[200px] ">
                            <p>■ Consultez la liste centralisée et vérifiée des offres de stage et optimisez votre temps de recherche.</p>

                            <p className=""> ■
                                Astuces et conseils pratiques pour trouver et réussir son stage ou son premier emploi.</p>

                            <p>
                                ■  Guides d’orientation et de préparation à l’insertion professionnelle.
                            </p>

                        </div>
                        <div className="flex  text-center    items-center justify-center">
                            <button onClick={handleClickInternships}
                                className="px-6 py-2 my-8  bg-white hover:bg-[#e2b758] w-[250px] text-[#9b7d3c] hover:text-white font-bold rounded-lg ">Offres
                                de stage
                            </button>
                        </div>
                    </div>


                </div>
                <div className="mt-4  flex-1 justify-center">
                    <div className="flex flex-row  ml-10 gap-2 "><Image src="/icons/entreprise2.png"
                        alt={""} width={70} height={100} />
                        <p className="text-[#747272]  text-xl pt-4 font-bold">Entreprises & Organisations</p>

                    </div>
                    <div className="bg-[#747272]  space-y-3 h-[350px] -mt-3 pt-6 p-8 text-white text-start">
                        <div className="space-y-3 h-[200px] ">
                            <p className="pt-2"> ■ Déposez gratuitement vos offres de stage et d’emploi pour en décupler la visibilité ; Obtenez des CV de diplômés talentueux.</p>

                            <p >■ Renforcez la présence numérique de vos produits, services, bourses, etc. ;  </p>

                            <p>
                                ■ Communiquez sur votre secteur d’activité, vos métiers, vos faits majeurs.
                            </p>
                        </div>

                        <div className="flex text-center justify-center">
                            <button onClick={handleClickEnterprises}
                                className="px-6 py-2  my-8  bg-white hover:bg-[#999595] text-[#747272] hover:text-white font-bold rounded-lg ">Promouvoir
                                sa structure
                            </button>
                        </div>
                    </div>




                </div>

                <div className="mt-5 flex-1 justify-center">
                    <div className="flex flex-row   ml-9 gap-2  "><Image src="/icons/institutsup2.png" alt={""}
                        width={70} height={100} />
                        <p className="text-[#4A62AA] text-xl  pt-3 font-bold">Institutions du Supérieur</p>

                    </div>
                    <div className=" bg-[#4A62AA] -mt-3 space-y-3   h-[350px] p-8 py-6 text-white text-start">
                        <div className="space-y-3 h-[200px] ">
                            <p className="pt-2">■ Obtenez des opportunités de stages et premiers emplois à vos étudiants et diplômés.</p>

                            <p className=""> ■ Renforcez la présence numérique de vos formations par leur référencement dans l'annuaire des formations.</p>

                            <p>
                                ■ Envoi ciblé de votre offre de formations à nos abonnés élèves, étudiants et parents.
                            </p>
                        </div>

                        <div className="flex  text-center justify-center">
                            <button onClick={handleClickInstitutions}
                                className="px-6 py-2  my-8  bg-white text-[#4A62AA] hover:text-white  hover:bg-[#416beb]   font-bold rounded-lg ">Réferencer
                                ses formations
                            </button>
                        </div>
                    </div>



                </div>

            </div>

        </div>

    );
}
