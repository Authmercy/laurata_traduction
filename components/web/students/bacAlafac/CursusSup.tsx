"use client";
import React, { useRef } from "react";
import { useEffect, useState } from "react";
import Link from "next/link";


export default function CursusSupComponent() {
    const [open, setOpen] = useState(null);
    const handleToggle = (index: any) => {
        setOpen(open === index ? null : index);
    };



    return (

        <div className="flex flex-col   md:flex-row  ">
            <div className="flex-grow md:w-2/3 p-8">

                <div className="  mt-1">


                    <div className="flex w-full gap-2 text-white font-bold">

                        <div className="p-2 px-2  uppercase  w-[35%]  text-2xl text-center  bg-[#9C824A] hover:bg-[#a19478]  h-20 flex items-center justify-center">

                            <Link href="/students/bacAlafac/bac_fac"> Orientation</Link>
                        </div>


                        <div className="p-3 px-8  text-xl text-center bg-[#A87A38] h-12 mt-4 flex items-center justify-center">
                            CHOISIR SON CURSUS SUPÉRIEUR
                        </div>

                    </div>
                    <div className="flex flex-row my-4 gap-1">
                        <div className="flex-1  ">
                        </div>
                        <div className="flex-2 bg-white  text-black p-4 text-end"> <p className="">
                            La vocation, c’est le bonheur d’avoir pour métier sa passion.
                            <br />  <span className="text-[#4A62AA] font-semibold ">Stendahl</span>
                        </p>

                        </div>
                    </div>

                    <div className="mt-1  text-black bg-white/70 p-8 space-y-4">
                        <p>
                            La réussite de vos études supérieures dépend principalement d’une bonne orientation ; ensuite, de votre assiduité en cours, de votre persévérance sans relâchement dans le travail et de votre confiance en vous. À cela, il convient également d’ajouter une forte motivation et une bonne hygiène de vie.
                        </p>
                        <p>Ci-dessous les informations essentielles pour vous aider à choisir aisément votre formation et à réussir votre parcours supérieur.

                        </p>
                        <div className="mt-1 space-y-4">
                            <div>


                                <button
                                    className="py-2 px-4 w-full bg-white/80 text-[#4A62AA]  text-xl font-bold flex justify-between items-center"
                                    onClick={() => handleToggle(1)}
                                >
                                    <span>Orientation académique et professionnelle     </span>
                                    <span className="text-2xl">{open === 1 ? "▲" : "▼"}</span>
                                </button>


                                {open === 1 && (
                                    <div className="bg-white/80 p-4 ">

                                        <div className="w-full">
                                            <p> <span className="text-[#4A62AA] font-bold"> S’orienter c’est choisir une voie </span> – académique et/ou professionnelle – en tenant compte de ses envies, de ses ambitions et, surtout, de ses prédispositions et aptitudes.</p>
                                            <div >

                                                <div className="m-6">
                                                    <p> <span className="text-[#4A62AA] text-2xl font-bold "> - </span>
                                                        Renseignez-vous dès le secondaire sur les domaines d’études auxquels votre baccalauréat vous donne accès (littérature, droit, économie, etc.) ; ensuite, sur les professions envisageables dans votre domaine d’études (avocat, traducteur, médecin, etc.) et comment on y accède (voir nos fiches métiers).
                                                    </p>
                                                    <p> <span className="text-[#4A62AA] text-2xl font-bold "> - </span>
                                                        Entamez également dès que possible la réflexion sur la(les) profession(s) que vous souhaitez exercer en fonction de vos aptitudes et intérêts (idéalement dès le secondaire) ; le choix des études à suivre sera ainsi plus facile à opérer.
                                                    </p>
                                                </div>

                                                <p className="mt-4  font-bold  text-[#4A62AA] ">
                                                    Pour ce faire, vous pouvez :    </p>

                                            </div>


                                            <div className="m-6">
                                                <p> <span className="text-[#4A62AA] text-2xl font-bold "> - </span>
                                                    <b className="uppercase">    Demander  </b>  conseil à vos proches, vos aînés déjà à la fac, vos professeurs et conseillers d’orientation ou à une personne qui exerce la profession à laquelle vous aspirez ou qui effectue les études que vous envisagez poursuivre.
                                                </p>
                                                <p> <span className="text-[#4A62AA] text-2xl font-bold "> - </span>
                                                    <b className="uppercase">     Recourir </b>  à la théorie des intelligences multiples du psychologue américain Howard Gardner (voir encadré ci-dessous ). Elle vous permet de mieux appréhender vos talents et aptitudes et de les mettre en lien avec des professions correspondantes.
                                                </p>
                                                <p> <span className="text-[#4A62AA] text-2xl font-bold "> - </span>
                                                    <b className="uppercase">          Passer </b>   le test RIASEC qui détermine vos centres d’intérêts et vos prédispositions dans le monde professionnel ou celui de la plateforme Oriane.
                                                </p>
                                            </div>
                                            <p className="mt-4  font-bold text-[#4A62AA] ">

                                                Les huit types d’intelligence et leurs principales composantes selon Howard Gardner :
                                            </p>

                                            <table className="w-full text-left border-2 border-gray-300">

                                                <tbody>
                                                    <tr className=" text-black">
                                                        <td className="border border-x-0 font-bold bg-[#f1d9b6]/70 p-4  text-[#4A62AA]">1</td>
                                                        <td className="border border-x-0 bg-[#f1d9b6]/70 p-2 text-start  ">      Logico-mathématique :</td>
                                                        <td className="border border-x-0 bg-[#f1d9b6]/70 p-2 text-start  ">

                                                            Habileté logique, mathématique et scientifique.
                                                            <p>
                                                                <span className="text-[#4A62AA]"> Professions envisageables :
                                                                </span> <i> scientifique, mathématicien, ingénieur, comptable ; </i>
                                                            </p>
                                                        </td>
                                                    </tr>
                                                    <tr className=" text-black">
                                                        <td className="border border-x-0 font-bold p-4 text-start   text-[#4A62AA]">2</td>
                                                        <td className="border border-x-0 p-2 text-start  ">Linguistique :
                                                        </td>
                                                        <td className="border border-x-0 p-2 text-start  ">
                                                            Habiletés reliées à la production du discours, aux fonctions et à l’utilisation du langage.
                                                            <p>
                                                                <span className="text-[#4A62AA]"> Professions envisageables :
                                                                </span> <i> écrivain, journaliste, avocat, enseignant ; </i>
                                                            </p>
                                                        </td>
                                                    </tr>
                                                    <tr className=" text-black">
                                                        <td className="border border-x-0 font-bold bg-[#f1d9b6]/70 p-4 text-start   text-[#4A62AA]">3</td>
                                                        <td className="border border-x-0 bg-[#f1d9b6]/70 p-2 text-start  ">     Musicale :</td>
                                                        <td className="border border-x-0 bg-[#f1d9b6]/70 p-2 text-start  ">

                                                            Habiletés nécessaires à l’accomplissement de tâches de nature musicale : composition, exécution, écoute et discernement.

                                                            <p>
                                                                <span className="text-[#4A62AA]"> Professions envisageables :
                                                                </span> <i> musicien, chanteur, compositeur ;</i>
                                                            </p>
                                                        </td>
                                                    </tr>
                                                    <tr className=" text-black">
                                                        <td className="border border-x-0 font-bold p-4 text-start   text-[#4A62AA]">4</td>
                                                        <td className="border border-x-0 p-2 text-start  ">Kinesthésique:
                                                        </td>
                                                        <td className="border border-x-0 p-2 text-start  ">
                                                            Habileté corporelle ou manuelle, contrôle et harmonisation des mouvements du corps.

                                                            <p>
                                                                <span className="text-[#4A62AA]"> Professions envisageables :
                                                                </span> <i> danseur, sculpteur, acteur ; </i>
                                                            </p>
                                                        </td>
                                                    </tr>
                                                    <tr className=" text-black">
                                                        <td className="border border-x-0 font-bold bg-[#f1d9b6]/70 p-4 text-start   text-[#4A62AA]">5</td>
                                                        <td className="border border-x-0 bg-[#f1d9b6]/70 p-2 text-start  ">     Visuo-spatiale  :</td>
                                                        <td className="border border-x-0 bg-[#f1d9b6]/70 p-2 text-start  ">

                                                            Habiletés associées aux configurations spatiales : perception exacte des formes, possibilité de les recréer et de les modifier.
                                                            <p>
                                                                <span className="text-[#4A62AA]"> Professions envisageables :
                                                                </span> <i> architecte, artiste, ingénieur ; </i>
                                                            </p>
                                                        </td>
                                                    </tr>
                                                    <tr className=" text-black">
                                                        <td className="border border-x-0 font-bold p-4 text-start   text-[#4A62AA]">6</td>
                                                        <td className="border border-x-0 p-2 text-start  ">Naturaliste:
                                                        </td>
                                                        <td className="border border-x-0 p-2 text-start  ">
                                                            Habiletés à reconnaître et à classifier les différentes espèces de la faune et de la flore.

                                                            <p>
                                                                <span className="text-[#4A62AA]"> Professions envisageables :
                                                                </span> <i> biologiste, agriculteur, jardinier ; </i>
                                                            </p>
                                                        </td>
                                                    </tr>
                                                    <tr className=" text-black">
                                                        <td className="border border-x-0 font-bold bg-[#f1d9b6]/70 p-4 text-start   text-[#4A62AA]">7</td>
                                                        <td className="border border-x-0 bg-[#f1d9b6]/70 p-2 text-start  ">     Intrapersonnelle :</td>
                                                        <td className="border border-x-0 bg-[#f1d9b6]/70 p-2 text-start  ">

                                                            Sensibilité aux humeurs, aux tempéraments, aux motivations.
                                                            <p>
                                                                <span className="text-[#4A62AA]"> Professions envisageables :
                                                                </span> <i>  psychologue, philosophe, conseiller, vendeur, politicien ;</i>
                                                            </p>
                                                        </td>
                                                    </tr>
                                                    <tr className=" text-black">
                                                        <td className="border border-x-0 font-bold p-4 text-start   text-[#4A62AA]">8</td>
                                                        <td className="border border-x-0 p-2 text-start  ">Interpersonnelle:
                                                        </td>
                                                        <td className="border border-x-0 p-2 text-start  ">
                                                            Capacités d’introspection, d’auto-analyse, de se représenter une image de soi fidèle et précise et de l’utiliser efficacement. <p>
                                                                <span className="text-[#4A62AA]"> Professions envisageables :
                                                                </span> <i>  philosophe, écrivain, scientifique. </i>
                                                            </p>
                                                        </td>


                                                    </tr>
                                                </tbody>
                                            </table>
                                            <p className="font-bold text-orange-500 uppercase mt-8"> RECOMMANDATIONS importantes</p>
                                            <div className="m-6 ">
                                                <p>-
                                                    <i className="text-[#4A62AA]">
                                                        &nbsp; Ne soyez en aucun cas désespéré si en dépit de vos efforts, vous ne parvenez pas à vous fixer sur un métier à la fin du lycée.
                                                    </i> Il existe des vocations tardives et, de nos jours, il est de plus en plus rare d’exercer un seul métier dans une carrière. 
                                                </p>
                                                <p>-
                                                    <i className="text-[#4A62AA]">
                                                        &nbsp;  Ne laissez personne opérer ou vous imposer un choix de formation ou de profession
                                                    </i>  car si vous n’en avez pas les aptitudes et/ou l’envie ce sera l’échec garanti ; dans le cas contraire, vous vous y ennuierez royalement et n’en tirerez aucune satisfaction.
                                                </p>

                                            

                                                <p>-
                                                    <i className="text-[#4A62AA]">
                                                        &nbsp;  Associez impérativement le parent qui financera vos études avant d’arrêter le choix de l’école
                                                    </i> afin qu’il soit conscient des ressources financières à mobiliser tout au long de votre formation.
                                                </p>

                                                <p>-
                                                    <i className="text-[#4A62AA]">
                                                        &nbsp;  Soyez bien conscient que votre métier de cœur peut avoir très peu ou pas de débouchés
                                                    </i> (conservateur de musée, bibliothécaire, historien…) ou alors être saturé (commercial, juriste…).
                                                </p>

                                              


                                                <p className="  mt-4"><b ><Link href="/misc/nous_contacter" className="  hover:text-2xl">     Contactez-nous </Link>
                                                </b> si vous souhaitez un accompagnement dans le choix de votre profession ou de votre formation.</p>
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
                                    <span>Où étudier : Université, Grande École, IPES, IUT ou Prépa ?     </span>
                                    <span className="text-2xl">{open === 2 ? "▲" : "▼"}</span>
                                </button>


                                {open === 2 && (
                                    <div className="bg-white/80 p-4 ">

                                        <div className="w-full">

                                            <p>
                                                Le choix de l’institution sera d’autant plus facile à opérer que vous aurez préalablement mûrement réfléchi à votre filière d’étude et/ou à votre profession. Ci-après les principaux aspects à prendre en compte :
                                            </p>


                                            <div className="mt-6">

                                                <table className="w-full text-left border-2 border-gray-300">

                                                    <tbody>
                                                        <tr className=" text-black">
                                                            <td className="border  p-2 text-start  font-bold ">    Le type d’études choisi</td>
                                                            <td className="border  p-2 text-start  ">


                                                                <p>
                                                                    <i> Cycle long ou court ; filière générale ou professionnelle ? etc. ;</i>
                                                                </p>
                                                            </td>
                                                        </tr>

                                                        <tr className=" text-black">
                                                            <td className="border  bg-[#becbf3]/70 p-2 text-start   font-bold ">    Les conditions d’admission
                                                            </td>
                                                            <td className="border  bg-[#becbf3]/70 p-2 text-start  ">

                                                                <p>
                                                                    <i> Concours ou étude de dossier, etc. : le concours est-il à ma portée ? Ai-je le profil requis ? etc. ;</i>
                                                                </p>
                                                            </td>
                                                        </tr>


                                                        <tr className=" text-black">
                                                            <td className="border  p-2 text-start  font-bold ">    Le coût de la formation
                                                            </td>
                                                            <td className="border   p-2 text-start  ">


                                                                <p>
                                                                    <i>La formation est-elle à la portée de la bourse de mes parents ? etc. ;
                                                                    </i>
                                                                </p>
                                                            </td>
                                                        </tr>


                                                        <tr className=" text-black">
                                                            <td className="border  bg-[#becbf3]/70 p-2 text-start  font-bold ">  Le taux d’insertion professionnelle de ses diplômés</td>
                                                            <td className="border  bg-[#becbf3]/70 p-2 text-start  ">

                                                                <p>
                                                                    <i>Les diplômes de l’institution ont-ils la cote auprès des entreprises ?</i>
                                                                </p>
                                                            </td>
                                                        </tr>


                                                        <tr className=" text-black">
                                                            <td className="border  p-2 text-start   font-bold ">   La réputation de l’établissement et/ou de son corps professoral</td>
                                                            <td className="border  p-2 text-start  ">

                                                                <p>
                                                                    <i> Certains établissements ont une plus grande notoriété que d’autres</i>
                                                                </p>
                                                            </td>
                                                        </tr>


                                                        <tr className=" text-black">
                                                            <td className="border  bg-[#becbf3]/70 p-2 text-start  font-bold ">    La ville où se trouve l’institution </td>
                                                            <td className="border  bg-[#becbf3]/70 p-2 text-start  ">


                                                                <p>
                                                                    <i> Y a-t-il la possibilité d’y trouver un stage ou un emploi à la fin de la formation ? etc.</i>
                                                                </p>
                                                            </td>
                                                        </tr>



                                                    </tbody>
                                                </table>
                                                <div className="mt-4">
                                                    <table className="table-auto border-collapse border  shadow-lg w-full">
                                                        <thead>
                                                            <tr className="flex">

                                                                <th className="border-y-2 border-[#A87A38] flex-1   px-4 py-2 text-[#4A62AA] uppercase text-center"> IUT</th>
                                                                <th className="border-y-2 border-[#A87A38] flex-1  px-4 py-2 text-[#4A62AA] uppercase text-center">UniversitÉS & Grandes Écoles </th>
                                                                <th className="border-y-2 border-[#A87A38] flex-1  px-4 py-2 text-[#4A62AA] uppercase text-center">PrÉpas </th>
                                                                <th className="border-y-2 border-[#A87A38] flex-1  px-4 py-2 text-[#4A62AA] uppercase text-center"> Centres de formation professionnelle</th>

                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                            <tr className=" flex   text-start ">

                                                                <td className="text-start bg-[#d8c6ad]/90 flex-1 px-4 ">
                                                                    <p>
                                                                        Envisagez une formation courte de type BTS, DUT etc. dans un IUT/IPES si vous :</p>
                                                                    <p className="m-4"> - <i> souhaitez intégrer rapidement le monde du travail après une formation professionnelle ;
                                                                    </i></p>
                                                                    <p className="m-4">  - <i> ne disposez pas de moyens nécessaires pour des études longues.
                                                                    </i></p>
                                                                </td>
                                                                <td className=" bg-[#d8c6ad]/70  px-4 flex-1  ">
                                                                    <p>  Optez pour les cycles universitaires longs si vous envisagez de :</p>
                                                                    <p className="m-4"> - <i> faire de la recherche ou d’enseigner ;
                                                                    </i></p>
                                                                    <p className="m-4"> - <i> d’accéder aux professions libérales réglementées : notaire, pharmacien, etc.
                                                                    </i></p>
                                                                    <p className="m-4"> - <i> préparer les concours d’accès aux Grandes écoles.
                                                                    </i></p>


                                                                </td>
                                                                <td className=" bg-[#d8c6ad]/40 px-4 flex-1">
                                                                    <p>    Les Classes Préparatoires aux Grandes Écoles (CPGE ou Prépas), spécificité française, préparent en deux ans aux concours d’entrée dans les écoles d’ingénieurs, de médecine, etc.
                                                                    </p>
                                                                    <p className="mt-4">  Bien qu’onéreuses, elles constituent un excellent moyen d’intégrer d’office une grande école étrangère.
                                                                    </p>
                                                                </td>
                                                                <td className="bg-[#d8c6ad]/30  flex-1 px-4 py-2 ">
                                                                    <p>Pour les très petites bourses désireuses d’apprendre les rudiments d’un métier en moins d’un an, explorez les formations diplômantes (DT, DTS, CQP) offertes par les Centres de formation professionnelle agréés sous la tutelle du Ministère de l’Emploi et de la Formation Professionnelle.</p>  </td>


                                                            </tr>





                                                        </tbody>
                                                    </table>
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
                                    onClick={() => handleToggle(4)}
                                >
                                    <span>Pour éviter l’abandon ou le décrochage    </span>
                                    <span className="text-2xl">{open === 4 ? "▲" : "▼"}</span>
                                </button>


                                {open === 4 && (
                                    <div className="bg-white/80 p-4 ">

                                        <div className="w-full">

                                            <div className="mt-2 bg-[#becbf3] p-2 grid grid-cols-[1fr_3fr] gap-8">

                                                <div className=" font-bold  text-start ">
                                                    Assiduité en cours </div>
                                                <div className="max-w-4xl">
                                                    <p> Le volume de connaissances à assimiler après les cours magistraux, travaux pratiques etc. est si important que l’étudiant non assidu sera très vite débordé et pourrait avoir un retard irrattrapable avant les partiels. Il est donc impératif d’assister assidûment et de participer activement aux cours tout au long du semestre.
                                                    </p>
                                                </div>



                                            </div>
                                            <div className="mt-2  p-2 grid grid-cols-[1fr_3fr] gap-8">

                                                <div className=" font-bold  text-start ">
                                                    Persévérance acharnée dans le travail </div>
                                                <div className="max-w-4xl">
                                                    <p> Dès le premier jour, élaborez un planning de révision quotidienne ; effectuez des recherches régulières (Internet, bibliothèque) pour approfondir les notions acquises ; au besoin, intégrez un groupe de travail pour vos révisions. Travaillez sans relâche à comprendre et à assimiler chaque cours.   </p>
                                                </div>



                                            </div>
                                            <div className="mt-2 bg-[#becbf3] p-2 grid grid-cols-[1fr_3fr] gap-8">

                                                <div className=" font-bold  text-start ">
                                                    Autodiscipline </div>
                                                <div className="max-w-4xl">
                                                    <p>Respectez scrupuleusement vos horaires de révision, recherche, lecture et détente ; l’autodiscipline est déterminante pour la réussite de vos études. De plus, elle vous conduira vers l’autonomie, qualité indispensable pour la réussite dans la vie professionnelle.
                                                    </p>
                                                </div>



                                            </div>
                                            <div className="mt-2  p-2 grid grid-cols-[1fr_3fr] gap-8">

                                                <div className=" font-bold  text-start ">
                                                    Confiance en soi et forte motivation</div>
                                                <div className="max-w-4xl">
                                                    <p> Restez confiant en votre réussite ; en cas de difficultés, redoublez d’ardeur au travail non sans avoir réévalué votre méthode de travail ; en cas d’échec, ne baissez pas les bras ; analysez les causes et les raisons de l’échec pour y remédier. Restez motivé et déterminé à décrocher votre diplôme. </p>
                                                </div>



                                            </div>
                                            <div className="mt-2 bg-[#becbf3] p-2 grid grid-cols-[1fr_3fr] gap-8">

                                                <div className=" font-bold  text-start ">
                                                    Pratique du sport & Engagement associatif </div>
                                                <div className="max-w-4xl">
                                                    <p> L’adhésion à une association et la pratique régulière d’un sport d’équipe constituent d’excellents moyens pour acquérir des connaissances spécifiques extra-académiques et, surtout, des soft skills indispensables dans la vie professionnelle et sociale, et de plus en plus exigés par les employeurs.
                                                    </p>
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
                                    onClick={() => handleToggle(5)}
                                >
                                    <span>Santé et gestion du stress
                                    </span>
                                    <span className="text-2xl">{open === 5 ? "▲" : "▼"}</span>
                                </button>


                                {open === 5 && (
                                    <div className="bg-white/80 p-4 ">

                                        <div className="w-full">

                                            <p>


                                                Pendant vos études et dans la vie professionnelle, vous serez confronté à des situations de stress découlant par exemple du <i>diktat des parents sur le choix de la formation ou de la profession ; d’une éventuelle précarité financière ; des relations délétères avec un enseignant, un camarade, un collègue ou un supérieur, etc.
                                                </i> </p>

                                            <p className="font-bold mt-2">
                                                Pour combattre le stress :
                                            </p>

                                            <div className="mt-2 bg-[#becbf3] p-2 grid grid-cols-[1fr_3fr] gap-8">

                                                <div className=" font-bold  text-start ">
                                                    Adoptez un mode de vie anti-stress </div>
                                                <div className="max-w-4xl">
                                                    <p> <span className="text-[#4A62AA]"> ■ </span>   &nbsp;&nbsp;
                                                        Soyez bien organisé pour éviter les révisions de dernières minutes stressantes ;
                                                    </p>
                                                    <p> <span className="text-[#4A62AA]"> ■ </span>   &nbsp;&nbsp;
                                                        Déconnectez-vous quotidiennement quelques heures des écrans et surtout des réseaux sociaux ;
                                                    </p>
                                                    <p> <span className="text-[#4A62AA]"> ■ </span>   &nbsp;&nbsp;
                                                        Ayez une alimentation saine et faites régulièrement du sport ;
                                                    </p>
                                                    <p> <span className="text-[#4A62AA]"> ■ </span>   &nbsp;&nbsp;
                                                        Dormez suffisamment pour réduire la fatigue (au moins 7 heures par jour) ;
                                                    </p>
                                                    <p> <span className="text-[#4A62AA]"> ■ </span>   &nbsp;&nbsp;
                                                        Évitez la consommation d’alcool et ne touchez surtout pas au tabac, aux drogues et aux stupéfiants qui nuisent gravement à la santé.
                                                    </p>
                                                </div>



                                            </div>
                                            <div className="mt-2 p-2 grid grid-cols-[1fr_3fr] gap-8">

                                                <div className=" font-bold  text-start ">
                                                    Éliminez les agents stressants </div>
                                                <div className="max-w-4xl">
                                                    <p> <span className="text-[#4A62AA]"> ■ </span>   &nbsp;&nbsp;
                                                        Faites abstraction de ce qui vous entoure lorsque nécessaire et pensez uniquement à vous et à vos objectifs ;
                                                    </p>
                                                    <p> <span className="text-[#4A62AA]"> ■ </span>   &nbsp;&nbsp;
                                                        Focalisez-vous sur les évènements que vous pouvez influencer et laissez tomber les autres.
                                                    </p>
                                                    <p> <span className="text-[#4A62AA]"> ■ </span>   &nbsp;&nbsp;
                                                        Ne vous comparez pas sans cesse à vos camarades car vous n’avez pas les mêmes prédispositions (physiques et mentales) ou moyens, etc. !
                                                    </p>

                                                </div>



                                            </div>
                                            <div className="mt-2 bg-[#becbf3] p-2 grid grid-cols-[1fr_3fr] gap-8">

                                                <div className=" font-bold  text-start ">
                                                    Atténuez vos réactions au stress</div>
                                                <div className="max-w-4xl">
                                                    <p>Par un discours interne positif : relativisez et positivez, voyez le bon côté des choses, etc.</p>
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
                                    onClick={() => handleToggle(6)}
                                >
                                    <span>Réorientation
                                    </span>
                                    <span className="text-2xl">{open === 6 ? "▲" : "▼"}</span>
                                </button>


                                {open === 6 && (
                                    <div className="bg-white/80 p-4 ">

                                        <div className="w-full">

                                            <p>
                                                En cas d’échecs répétés en dépit d’un travail assidu, repensez votre méthode de travail, réévaluez vos motifs pour le choix de la formation et n’hésitez pas à envisager une réorientation académique si cela est nécessaire ; on peut se tromper de voie au premier coup et il existe des vocations tardives. Au besoin, discutez-en avec un responsable pédagogique ou un conseiller d’orientation.      </p>



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
                                                Frédéric Chapelle et Benoît Monié (2007). Bon stress et mauvais stress : mode d’emploi. Édition Odile Jacob.
                                            </p>
                                            <p>

                                                ‒ Howard Gardner (2010). Les formes de l’intelligence. Éditions Odile Jacob.  </p>

                                            <p>

                                                ‒ Christophe Massin et Isabelle Sauvegrain (2006). Réussir sans se détruire : des solutions au stress du travail. Édition Albin Michel.  </p>





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
                                                    - Plateforme RIASEC <br /> <a href="https://www.monemploi.com/riasec" className="text-blue-600" target="_blank" rel="noopener noreferrer"><i> https://www.monemploi.com/riasec </i></a>
                                                </p>
                                                <p>
                                                    - Test d’orientation Oriane <br /> <a href="https://www.oriane.info/je-passe-le-test-dorientation-oriane " className="text-blue-600" target="_blank" rel="noopener noreferrer"><i> https://www.oriane.info/je-passe-le-test-dorientation-oriane</i> </a>
                                                </p>
                                                <p>
                        - What Can I Do With This Major  <br />  <a href="https://whatcanidowiththismajor.com/about/" className="text-blue-600" target="_blank" rel="noopener noreferrer"><i> https://whatcanidowiththismajor.com/about/</i> </a>
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