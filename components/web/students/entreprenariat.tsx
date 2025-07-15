"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";


export default function Entrepreunariat() {

    const [open, setOpen] = useState(null);

    const handleToggle = (index: any) => {
        setOpen(open === index ? null : index);
    };


    return (
        <div className="p-2 md:pl-8 text-black" >
            <div className="flex pl-6 gap-1 w-full">
                <div className="flex justify-center flex-col">

                    <div className="flex flex-wrap pl-10 pt-6">
                        <div className="flex-grow md:w-2/3  text-black  p-8">
                            <div className="  bg-[#A87A38] p-3 text-center text-2xl font-bold  uppercase text-white ">
                                Entrepreneuriat
                            </div>
                            <div className="flex flex-row mt-4 gap-1">
                                <div className="flex-1 ">
                                </div>
                                <div className="flex-1 bg-white  text-black p-2 text-end">

                                    <p className=" "> Ce ne sont pas les études de marché sur la lampe à huile qui ont permis l’invention de l’électricité. <span className="text-[#4A62AA] font-bold ">Daniel Jouve </span></p>
                               
                                </div>

                            </div>
                            <div className="mt-2 bg-white/70  text-black p-2 text-start">

                                <p className=" p-2"> La rareté et la précarité de l’emploi salarié poussent, et continuent de pousser, de plus en plus de jeunes diplômés camerounais à opter pour l’entrepreneuriat. Toutefois, nous suggérons vivement à toutes celles et tous ceux qui veulent se lancer de bien s’y préparer au risque de voir leur projet péricliter dès les premiers mois.</p>

                            </div>
                            <div className="mt-2 bg-white text-black p-2 text-center">

                                <p className=" p-2"> Ci-dessous <b> l’essentiel de ce qu’il faut savoir et faire avant d’entreprendre</b>.</p>

                            </div>

                            <div className="mt-2 space-y-4">
                                <div>


                                    <button
                                        className="py-2 px-4 w-full bg-white/80 text-[#4A62AA]  text-xl font-bold flex justify-between items-center"
                                        onClick={() => handleToggle(1)}
                                    >
                                        <span>Choses à savoir et à faire avant de créer son entreprise</span>
                                        <span className="text-2xl">{open === 1 ? "▲" : "▼"}</span>
                                    </button>


                                    {open === 1 && (
                                        <div className="bg-white/80 p-4 text-black">

                                            <div className="w-full">
                                                 <p className="p-2 text-center text-[#A87A38] "><b>  Plus de 90% des start-ups camerounaises font faillite au cours des deux premières années d’existence. </b>Si vous ne voulez pas contribuer à faire grossir ce chiffre, avant de vous lancer prenez préalablement le temps et le soin de :
                                                </p>
                                                <div >

                                                    <p className="p-2 bg-[#a2b0db]/70">
                                                        <b>Bien évaluer  </b> votre potentiel d’entrepreneur : à travers un bilan de compétences (savoirs, savoir-faire, savoir-être, motivations, réseau relationnel, etc.) ;
                                                    </p>
                                                    <p className="p-2">
                                                        <b> Mûrir </b>votre projet ou idée d’entreprise ;
                                                    </p>
                                                    <p className="p-2 bg-[#a2b0db]/70">
                                                        <b> Bien vous renseigner </b>sur votre marché : taille, cible, chiffre d’affaires, concurrence, réglementation, etc. ;
                                                    </p>
                                                    <p className="p-2">
                                                        <b> D’élaborer</b> au besoin un Business Model Canvas (Matrice d’affaires) et/ou un Business plan (Plan d’affaires) exposant votre business model ;

                                                    </p>
                                                    <p className="p-2 bg-[#a2b0db]/70">
                                                        <b> Avoir développé et posséder </b> les qualités essentielles de l’entrepreneur ; un mentor ou coach peut vous y aider !
                                                    </p>
                                                    <p className="p-2">
                                                        <b>D’acquérir </b>
                                                        de bonnes notions en gestion et comptabilité ;
                                                    </p>
                                                    <p className="p-2 bg-[#a2b0db]/70">
                                                        <b>Vous être informé </b> sur le cadre législatif et réglementaire relatif à la création et à l’accompagnement des PME ;
                                                    </p>
                                                    <p className="p-2">
                                                        <b>Constituer si possible un capital d’investissement  </b> et de vous être informé sur les sources de financement possibles de vos activités ;

                                                    </p>
                                                    <p className="p-2 bg-[#a2b0db]/70">
                                                        <b> Planifier minutieusement </b> la mise en œuvre de votre plan d’actions contenant les objectifs (hebdomadaires, mensuels…) à atteindre ;
                                                    </p>
                                                    <p className="p-2">
                                                        <b>Préparer un plan B  </b> en cas d’échec.
                                                    </p>
                                                </div>
                                                <div className="m-2">
                                                    <p> De manière plus concrète, il s’agira pour vous :</p>

                                                    <p className="mt-4"><span className="text-[#2551d4]  mr-10"> i) </span>d’avoir ou de développer une idée originale (d’un produit ou service résolvant un problème ou répondant à un besoin) ainsi qu’un « business model » savamment pensé ;
                                                    </p>
                                                    <p> <span className="text-[#2551d4] mr-9 "> ii) </span>de bien calculer toutes vos charges en prenant en compte les imprévus ;
                                                    </p>
                                                    <p> <span className="text-[#2551d4] mr-8"> iii) </span>d’estimer de manière réaliste le produit de vos ventes (à partir d’estimations basses).
                                                    </p>
                                                </div>

                                                <p className="m-4"> Si votre résultat est largement bénéficiaire, il y a de fortes chances que votre affaire soit rentable et pérenne.

                                                    <div className="bg-[#e2dfd5]/70 mt-8 p-2">
                                                        <p> Enfin, sachez que la majorité des grands entrepreneurs à succès :</p>
                                                        <p className=" mx-4 my-2">- <span className="text-[#2551d4] ">ne cite pas la quête du gain (devenir riche) comme moteur principal de leur action mais la passion pour ce qu’ils font et la volonté de rendre meilleur le monde. </span>
                                                            Le milliardaire Dietrich Mateschitz, 1ère fortune d’Autriche et cocréateur de la boisson énergisante Red Bull, déclare ainsi dans une de ses rares interviews que l’argent n’a jamais été un moteur pour lui. Mais plutôt la liberté, l’indépendance et la passion pour ses projets. </p>
                                                        <p className=" mx-4 my-2">- <span className="text-[#2551d4] ">n’a pas essayé de tout anticiper ou attendu que tout soit prêt ;  </span> Ils sont passés à l’action dès que possible et ont progressé en apprenant de leurs erreurs.</p>
                                                        <p className=" mx-4 my-2">  </p>
                                                    </div>
                                                  
                                                </p>
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
                                        <span>Qualités essentielles de l’entrepreneur</span>
                                        <span className="text-2xl">{open === 2 ? "▲" : "▼"}</span>
                                    </button>


                                    {open === 2 && (<div className="bg-white/80  p-4 ">

                                        <div className="w-full ">
                                            <p> Le jeune diplômé qui veut réussir  son projet entrepreneurial doit, outre ses compétences, développer les principales aptitudes et qualités suivantes, possédées par la majorité des entrepreneurs à succès :   </p>
                                            <div className="/60 p-4 ">
                                                <div className=" p-4 grid grid-cols-[1fr_3fr] gap-8">

                                                    <div className=" font-bold  text-start text-[#4A62AA] ">
                                                        Être ambitieux et audacieux</div>
                                                    <div className="max-w-4xl">
                                                        <p>  Entreprendre c’est avoir de l’ambition, de l’audace et être disposé à prendre des risques ;     </p>
                                                    </div>
                                                </div>
                                                <div className="bg-[#a2b0db]/70  p-4 grid grid-cols-[1fr_3fr] gap-8">

                                                    <div className="font-bold  text-start text-[#4A62AA] ">
                                                        Avoir une grande confiance en soi</div>
                                                    <div className="max-w-4xl">
                                                        <p>  Être confiant en ses capacités à mener à bien son projet ;
                                                        </p>
                                                    </div>



                                                </div>
                                                <div className=" p-4 grid grid-cols-[1fr_3fr] gap-8">

                                                    <div className=" font-bold  text-start text-[#4A62AA] ">
                                                        Être déterminé et patient</div>
                                                    <div className="max-w-4xl">
                                                        <p> Le succès n’arrive pas du jour au lendemain et nécessite parfois beaucoup de temps ;   </p>
                                                    </div>
                                                </div>
                                                <div className="bg-[#a2b0db]/70  p-4 grid grid-cols-[1fr_3fr] gap-8">
                                                    <div className=" font-bold  text-start text-[#4A62AA] ">
                                                        Leadership</div>
                                                    <div className="max-w-4xl">
                                                        <p>Penser aux autres et agir pour le bien commun plutôt que se concentrer sur ses propres intérêts (base de tout leadership à impact positif !) ;

                                                        </p>
                                                    </div>



                                                </div>
                                                <div className=" p-4 grid grid-cols-[1fr_3fr] gap-8">

                                                    <div className=" font-bold  text-start text-[#4A62AA] ">
                                                        Faculté d’adaptation et flexibilité </div>
                                                    <div className="max-w-4xl">
                                                        <p> Capacité à se remettre en question et à changer si nécessaire de cap ou ses méthodes de travail ;
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="bg-[#a2b0db]/70  p-4 grid grid-cols-[1fr_3fr] gap-8">
                                                    <div className=" font-bold  text-start text-[#4A62AA] ">
                                                        Être créatif</div>
                                                    <div className="max-w-4xl">
                                                        <p>Nécessaire pour l’innovation et la compétitivité ;

                                                        </p>
                                                    </div>



                                                </div>
                                                <div className="p-4 grid grid-cols-[1fr_3fr] gap-8">

                                                    <div className=" font-bold  text-start text-[#4A62AA] ">
                                                        Savoir travailler en équipe</div>
                                                    <div className="max-w-4xl">
                                                        <p> Pour garantir la cohésion au sein de ses collaborateurs ;
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="bg-[#a2b0db]/70  p-4 grid grid-cols-[1fr_3fr] gap-8">
                                                    <div className=" font-bold  text-start text-[#4A62AA] ">
                                                        Être rigoureux et organisé</div>
                                                    <div className="max-w-4xl">
                                                        <p>Pour planifier, prioriser les actions et les mettre en œuvre efficacement ;
                                                        </p>
                                                    </div>



                                                </div>
                                                <div className="p-4 grid grid-cols-[1fr_3fr] gap-8">

                                                    <div className=" font-bold  text-start text-[#4A62AA] ">
                                                        Être optimiste</div>
                                                    <div className="max-w-4xl">
                                                        <p> Pour croire en la réussite du projet et rester positif face à l’adversité et aux revers ;

                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="bg-[#a2b0db]/70  p-4 grid grid-cols-[1fr_3fr] gap-8">
                                                    <div className=" font-bold  text-start text-[#4A62AA] ">
                                                        Être honnête et juste</div>
                                                    <div className="max-w-4xl">
                                                        <p>Que ce soit avec vos collaborateurs ou avec vos clients et partenaires, soyez toujours honnête et juste ; ne roulez personne car votre réputation vous suivra partout. « Biens mal acquis ne profitent jamais ! »
                                                        </p>
                                                    </div>



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
                                        <span>Avantages et inconvénients de l’entrepreneuriat
                                        </span>
                                        <span className="text-2xl">{open === 5 ? "▲" : "▼"}</span>
                                    </button>


                                    {open === 5 && (<div className="bg-white/80 p-4 ">

                                        <div className="w-full">
                                            <p> L'entrepreneuriat présente des advantages et inconvénients  dont il faut être bien conscient avant de se lancer : </p>
                                            <div className="flex flex-col gap-1 mt-2">
                                                <div className="bg-white/60 p-2 grid grid-cols-[1fr_3fr] gap-8">
                                                    <div className="flex items-center justify-center h-full font-bold bg-[#d8af76] text-center uppercase">
                                                        <p>les plus</p>
                                                    </div>


                                                    <div className="max-w-4xl">
                                                        <div >

                                                            <p className="p-2 bg-[#e6d4bc]/70">
                                                                <b>Indépendance et liberté :  </b>vous êtes votre propre chef, libre dans vos choix et décisions et mettez en œuvre vos propres idées. Vous organisez vous-même votre emploi du temps.
                                                            </p>
                                                            <p className="p-2">
                                                                <b> Satisfaction : </b> travailler dans un domaine que vous aimez, apporter une solution au besoin d’une clientèle, devenir une source d’inspiration par sa réussite, etc. procurent grande satisfaction et fierté.
                                                            </p>
                                                            <p className="p-2 bg-[#e6d4bc]/70">
                                                                <b> Autonomie financière :  </b>en cas de succès, vos revenus seront conséquents et vous garantiront une autonomie financière.
                                                            </p>
                                                            <p className="p-2">
                                                                <b> Choix de vos collaborateurs </b> vous constituez et recrutez vous-même votre équipe selon vos préférences.

                                                            </p>


                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="bg-white/60 p-2  grid grid-cols-[1fr_3fr] gap-8">
                                                    <div className="flex items-center justify-center h-full font-bold bg-[#a2b0db] text-center uppercase">
                                                        <p className="justify-center text-center items-center">Les moins </p> </div>
                                                    <div className="max-w-4xl">
                                                        <div >

                                                            <p className="p-2 bg-[#a2b0db]/70">
                                                                <b>Heures de travail illimitées : </b> vous n’aurez pas d’heures fixes de travail et votre vie privée pourrait en pâtir, d’où l’importance d’une bonne organisation et de l’autodiscipline.
                                                            </p>
                                                            <p className="p-2">
                                                                <b> Insécurité financière : </b>si votre affaire tarde à être rentable, vous aurez un revenu faible et irrégulier ; en cas de faillite, vous perdrez le capital investi et risquerez la précarité financière, qui le cas échéant, mettra en péril le bien-être et la stabilité de votre famille.
                                                            </p>
                                                            <p className="p-2 bg-[#a2b0db]/70">
                                                                <b> Incertitudes :  </b>liée à la recherche de financement, à la fidélité de la clientèle ou des fournisseurs, à la réussite ou à l’échec du projet.
                                                            </p>

                                                            <p className="p-2">
                                                                <b> Pression élevée et situations de stress garanties : </b> découlant de la concurrence ; des nombreuses charges : loyer, salaires ; de vos responsabilités (recherche de partenaires/clients, coordination de l’équipe, comptabilité, etc.) ; voire de la jalousie et la convoitise de l’entourage en cas de succès.
                                                            </p>

                                                        </div>

                                                    </div>
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
                                        <span>Obstacles à l’entrepreneuriat formel
                                        </span>
                                        <span className="text-2xl">{open === 6 ? "▲" : "▼"}</span>
                                    </button>


                                    {open === 6 && (<div className="bg-white/80 p-4 ">

                                        <div className="w-full">
                                            <p className="p-2">
                                                — La majorité des jeunes (diplômés) qui se lance dans l’entrepreneuriat évolue hélas dans l’informel, principalement dans le commerce, l’artisanat, l’agropastoral et les services. La fiscalité, la corruption et les lourdeurs et tracasseries administratives figurent parmi les obstacles les plus cités par ces entrepreneurs pour justifier le choix de l’informel. (1)

                                            </p>
                                            <p className="p-2">
                                                — Bien qu’ils aient été considérablement abaissés à travers des politiques gouvernementales incitatives, les coûts de formalisation administrative représentent encore un obstacle important : 41 500 FCFA en moyenne pour un Établissement et 54 625 FCFA pour une SARL sous seing privé dans un CFCE, auxquels s’ajoutent les différents précomptes à payer à la création pour l’obtention de l’attestation de de conformité fiscale (ACF).
                                            </p>
                                            <p className="p-2">
                                                En conclusion, sachez que l’informel présente son lot d’inconvénients plus ou moins contraignants selon l’activité. Aussi, nous vous recommandons de toujours opter pour la formalisation de votre entreprise au démarrage lorsque cela est possible.

                                            </p>
                                            <div className="bg-white/60 p-2  grid grid-cols-[1fr_3fr] gap-8">

                                                <div className="flex items-center justify-center h-full font-bold bg-[#a2b0db] text-center uppercase">
                                                    <p className="justify-center text-center items-center">INCONVÉNIENTS DE L’INFORMEL</p> </div>
                                                <div className="max-w-4xl">
                                                    <div >

                                                        <p className="p-2 bg-[#a2b0db]/70">
                                                            Exclusion de la quasi-totalité des programmes étatiques d’aide et de soutien à l’entrepreneuriat (formations, coaching, avantages fiscaux, crédits garantis …) ;

                                                        </p>
                                                        <p className="p-2">
                                                            Exclusion de la commande publique ;
                                                        </p>
                                                        <p className="p-2 bg-[#a2b0db]/70">
                                                            Impossibilité d’accès au crédit bancaire ;   </p>

                                                        <p className="p-2">
                                                            Non couverture par les assurances ;     </p>
                                                        <p className="p-2 bg-[#a2b0db]/70">
                                                            Impossibilité de faire affaires avec des partenaires étrangers ; etc.  </p>

                                                    </div>

                                                </div>
                                            </div>
                                            <p className="p-2">  <b> → Pour aller plus loin </b>
                                            </p>
                                            <p> <span className="text-[#4A62AA] font-bold"> (1) </span>
                                                Lire :<span className="text-[#4A62AA]"> « Enquête auprès des entreprises informelles du Cameroun. »</span>  sous la direction de Benjamin FOMBA KAMGA, (2017). Bureau International du Travail, Équipe d’Appui Technique de l’Organisation Internationale du Travail (OIT) au travail décent pour l’Afrique centrale.
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
                                        <span> Entreprendre sans passer par la case salariat ?</span>
                                        <span className="text-2xl">{open === 7 ? "▲" : "▼"}</span>
                                    </button>


                                    {open === 7 && (<div className="bg-white/80  p-4 ">

                                        <div className="w-full ">
                                            <p> Bien qu’il existe plusieurs cas de (jeunes) diplômés ayant mené à bien leur projet immédiatement à la sortie des bancs, il n’en demeure pas moins qu’<b>une première expérience professionnelle présente à bien des égards un atout majeur lorsqu’on se lance dans l’entrepreneuriat. </b>
                                            </p>
                                            <div className="bg-white p-2 space-y-2 ">
                                                <p className="p-2 my-2 text-white text-center font-bold bg-[#A87A38]">
                                                    Les avantages de créer son entreprise après une première expérience professionnelle

                                                </p>
                                                <div className="p-2">
                                                    <p className="my-2"> <b> Une première expérience  </b> vous permet : </p>

                                                    <p>  <span className="text-[#4A62AA] font-bold">   • De toucher du doigt les réalités</span>, le fonctionnement et « l’écosystème » de l’entreprise ; </p>
                                                    <p> <span className="text-[#4A62AA] font-bold">• D’acquérir</span> de nouvelles compétences et connaissances : fiscalité, marketing, gestion etc. ; </p>
                                                    <p> <span className="text-[#4A62AA] font-bold">• D’apprendre</span> des personnes ou collègues plus expérimentés ; </p>
                                                    <p> <span className="text-[#4A62AA] font-bold">• De bénéficier </span> le cas échéant de formations (comptabilité, fiscalité, ventes, etc.) payées par l’employeur ; </p>
                                                    <p> <span className="text-[#4A62AA] font-bold">• De connaître </span> vos futurs concurrents et fournisseurs, les réseaux de distribution, etc. ; </p>
                                                    <p>  <span className="text-[#4A62AA] font-bold">• De constituer une épargne  </span>(qui pourrait servir au financement de votre projet entrepreneurial) ; </p>
                                                    <p> <span className="text-[#4A62AA] font-bold">• De constituer </span>un réseau relationnel dans plusieurs secteurs d’activités ; </p>
                                                    <p> <span className="text-[#4A62AA] font-bold">• De détecter </span>un besoin non satisfait dans votre domaine ou une nouvelle opportunité d’affaires ; etc. </p>
                                                </div>

                                                <p className="p-2">
                                                    — Ces divers acquis vous seront indubitablement utiles pour la maturation et la mise en œuvre de votre projet. Aussi, nous vous recommandons, si l’occasion se présente,<b> de ne pas hésiter à acquérir de l’expérience professionnelle avant d’entreprendre  </b> (y compris par des stages pendant et après vos études).
                                                </p>
                                                <p className="p-2">
                                                    — Dans le cas contraire, nous vous conseillons de développer pendant vos études, outre votre idée d’entreprise, les principales qualités permettant de faire face aux défis et difficultés que vous rencontrerez en tant que chef d’entreprise.
                                                </p>
                                                <p>
                                                    <b> <Link href="/misc/nous_contacter" className="  hover:text-xl">     Contactez-nous </Link>
                                                    </b> si vous souhaitez être accompagné par nos experts dans la mise en œuvre de votre projet entrepreneurial.

                                                </p>
                                            </div>



                                        </div>
                                    </div>)}







                                </div>

                            </div>
                            <div className="mt-1 space-y-4">
                                <div>


                                    <button
                                        className="py-2 px-4 w-full bg-white/80 text-[#4A62AA]  text-xl  flex justify-between items-center"
                                        onClick={() => handleToggle(10)}
                                    >
                                        <p>   <span className="font-bold ">  Éthique et morale  </span> <span className="text-[#A87A38]">  </span> </p>
                                        <span className="text-2xl">{open === 10 ? "▲" : "▼"}</span>
                                    </button>


                                    {open === 10 && (<div className="bg-white/80  p-4 ">

                                        <div className="w-full ">
                                            <p>
                                            </p>
                                            <div className=" ">
                                                <p className="p-2 my-2 text-white text-center font-bold bg-[#A87A38]">
                                                    Try to become a man of value rather than a man of success.  <span >Albert Einstein</span>     </p>
                                                <p className="p-2 ">
                                                    Dans un contexte où  beaucoup de jeunes veulent accéder à la richesse matérielle et au succès au plus vite, et parfois, à tous les prix et sans effort particulier au détriment des valeurs éthiques, il convient de leurs rappeler que, comme le dit si bien le <b>  proverbe Africain, « On ne peut pas labourer, semer, récolter et manger le même jour. »</b>
                                                </p>
                                                <p className="p-2">

                                                    Ainsi, il y a un temps pour étudier et acquérir des connaissances et des compétences et un autre pour déployer ses compétences et savoirs et jouir des retombées des efforts antérieurs. Cet apprentissage doit se faire dans le travail acharné, la discipline, le respect d’autrui, et surtout, sans tricherie et sans causer du tort aux autres. Que vous ayez opté pour le salariat ou l’entrepreneuriat, vous ferez toujours la différence et serez un citoyen utile à votre pays lorsque vous êtes honnête, intègre et juste.

                                                </p>
                                                <p className="p-2">

                                                    Aussi, nous vous suggérons vivement de mettre les valeurs éthiques au cœur de tout ce que vous entreprenez et entreprendrez pendant et après vos études et d’y être fidèle, vos accomplissements et succès n’en seront que plus gratifiants.
                                                </p>
                                            </div>


                                        </div>
                                    </div>)}







                                </div>

                            </div>
                            <div className="mt-1 space-y-4">
                                <div>


                                    <button
                                        className="py-2 px-4 w-full bg-white/80 text-[#4A62AA]  text-xl  flex justify-between items-center"
                                        onClick={() => handleToggle(11)}
                                    >
                                        <p>   <span className="font-bold "> Culture générale</span>  <span className="text-[#A87A38]">  </span> </p>
                                        <span className="text-2xl">{open === 11 ? "▲" : "▼"}</span>
                                    </button>


                                    {open === 11 && (<div className="bg-white/80  p-4 ">

                                        <div className="w-full ">
                                            <p>
                                            </p>
                                            <div className="">
                                                <p className="p-2 my-2 text-white text-center font-bold bg-[#A87A38]">
                                                    La persévérance, c’est ce qui rend l’impossible possible, le possible probable et le probable réalisé.
                                                    <span className="text-black"> Léon Trotsky</span>
                                                </p>
                                                <div className="p-2">
                                                    <p className="text-[#4A62AA] font-bold my-2">
                                                        L’importance de la lecture et de la culture générale
                                                    </p>
                                                    <p className="">
                                                        La culture générale est incontournable dans la vie de l’étudiant, et ultérieurement dans la vie professionnelle. En effet, elle permet non seulement de reconnaître le niveau de curiosité de l’étudiant,  mais aussi, l’étendue de ses connaissances ne relevant pas de sa formation disciplinaire.
                                                    </p>
                                                    <p>
                                                        
                                                    </p>
                                                    <p className="text-[#4A62AA] font-bold my-2">

                                                        Développer son niveau de culture générale

                                                    </p>
                                                    <p className="">
                                                        La curiosité intellectuelle et l’ardent désir d’élargir ses connaissances constituent les principaux moteurs du développement de la culture générale chez l’individu. </p>
                                                    <p>
                                                        Un des moyens les plus efficaces pour développer sa culture générale est la lecture quotidienne (livres,  Internet ou bibliothèque) car elle amplifie la capacité de mémorisation.  <br />
                                                        À côté de la lecture, vous pouvez également enrichir vos connaissances en prenant part à des conférence-débats, à des dédicaces de livres, en visitant le musée national, et même en apprenant à jouer d’un instrument de musique.

                                                    </p>
                                                    <p className="text-[#A87A38] font-bold  mt-8 my-2">

                                                        Pour aller plus loin

                                                    </p>
                                                  
                                                      <p>
                                                        Consulter le dossier consacré  dans la rubrique <Link  className="text-blue-700 font-bold" href="/zoom">
                                                     Zoom Sur   </Link> 
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
                                        className="py-2 px-4 w-full bg-white/80 text-[#4A62AA]   text-xl font-bold flex justify-between items-center"
                                        onClick={() => handleToggle(8)}
                                    >
                                        <span>Structures et programmes d’accompagnement à l’entrepreneuriat</span>
                                        <span className="text-2xl">{open === 8 ? "▲" : "▼"}</span>
                                    </button>


                                    {open === 8 && (<div className="bg-white/80  p-4 ">

                                        <div className="w-full ">
                                            <p> Bien qu’il existe plusieurs cas de (jeunes) diplômés ayant mené à bien leur projet immédiatement à la sortie des bancs, il n’en demeure pas moins qu’<b>une première expérience professionnelle présente à bien des égards un atout majeur lorsqu’on se lance dans l’entrepreneuriat. </b>
                                            </p>
                                            <div className="bg-white ">
                                                <p className="font-bold my-2 text-lg bg-[#dac7ac] p-2">
                                                    1. Centre des Formalités de Création d’Entreprises (CFCE) </p>
                                                <p className="p-4 ">
                                                    Présents dans plusieurs chefs-lieux de région, les CFCE facilitent la création d’entreprises dont le capital est compris entre 100 000 et un million de FCFA ; au-delà, les formalités s’effectuent chez un notaire.
                                                    Pour plus d’informations : <a href="https://yaounde.eregulations.org/?l=fr" className="text-blue-600" target="_blank" rel="noopener noreferrer"> <i>  https://yaounde.eregulations.org/?l=fr </i></a>



                                                </p>

                                            </div>

                                            <div className="bg-white mt-2 ">
                                                <p className="font-bold text-lg bg-[#dac7ac] p-2">
                                                    2.	Structures publiques d’accompagnement
                                                </p>
                                                <div className="p-4 ">
                                                    <p className=" font-bold">
                                                        ■ Agence de Promotion des PME (APME)

                                                    </p>
                                                     <div className=" text-black">
                                              Missions : 
                                              <div className="mx-4"> 
                                      -  Soutien aux PME-PMI <br />
                                        - Accompagnement dans les procédures de création <br /> - Mentorat et coaching des porteurs de projets
                                          <br /> - Incubation des start-up. 
                                              </div>  <p className="mt-2">
                                                   Siège : quartier, Tsinga, Yaoundé.
                                                </p>
                                            </div>
                                                    <p className=" mt-2 font-bold">
                                                        ■  Fonds National de l’Emploi (FNE)

                                                    </p>
                                                    <p>
                                                        Mission : Promotion de l’emploi. Siège à Yaoundé (Elig-Essono) et représentations dans les 10 régions.
                                                    </p>
                                                    <p>
                                                        <a href="https://www.fnecm.org/index.php/fr" className="text-blue-600" target="_blank" rel="noopener noreferrer"> <i>  https://www.fnecm.org/index.php/fr </i></a>
                                                    </p>

                                                    <p className=" mt-2 font-bold">
                                                        ■ Banque Camerounaise des Petites et Moyennes Entreprises (BC-PME SA)

                                                    </p>
                                                    <p>

                                                        Mission : Apporter les concours financiers aux PME et à l’Artisanat. Siège Yaoundé (après la Région du Centre).
                                                    </p>
                                                    <p>
                                                        <a href="https://bc-pme.com/" className="text-blue-600" target="_blank" rel="noopener noreferrer"> <i>  https://bc-pme.com/ </i></a>
                                                    </p>

                                                    <p className=" mt-2 font-bold">
                                                        ■   Agence de Promotion des Investissements (API)

                                                    </p>
                                                    <p>
                                                        Mission : Promotion du site économique « Cameroun ». Siège Yaoundé, nouvelle route Bastos.   </p>
                                                    <p>
                                                        <a href="https://www.investincameroon.net/language/fr/" className="text-blue-600" target="_blank" rel="noopener noreferrer"> <i>  https://www.investincameroon.net/language/fr/ </i></a>
                                                    </p>
                                                    <p className=" mt-2 font-bold">
                                                        ■   Centres de gestion agréés (CGA)

                                                    </p>
                                                    <p>
                                                        Association agréée par le Ministre chargé des Finances dont le but est d’apporter une assistance en matière de gestion, d’encadrement et d’exécution des obligations fiscales et comptables aux petites entreprises adhérentes réalisant un chiffre d’affaires annuel compris entre 15 et 100 millions de FCFA.
                                                    </p>
                                                    <p>
                                                        <a href="https://minfi.gov.cm/les-centres-de-gestion-agrees-cadres-de-partenariat-par-excellence-de-ladministration-fiscale-et-des-pme9/" className="text-blue-600" target="_blank" rel="noopener noreferrer"> <i>  https://minfi.gov.cm/les-centres-de-gestion-agrees-cadres-de-partenariat-par-excellence-de-ladministration-fiscale-et-des-pme9/ </i></a>
                                                    </p></div>
                                            </div>
                                            <div className="bg-white mt-2">
                                                <p className="font-bold  text-lg bg-[#dac7ac] p-2">
                                                    3.	Chambres consulaires et Organisations patronales
                                                </p>
                                                <div className="p-4 ">
                                                    <p className=" mt-2 font-bold">
                                                        ■ Chambre de Commerce, de l’Industrie, des Mines et de l’Artisanat (CCIMA)

                                                    </p>
                                                    <p>
                                                        Organisme consultatif et représentatif des milieux d’affaires dans les domaines du commerce, de l’industrie, des mines et de l’artisanat, il joue le rôle de courroie de transmission entre d’une part, les milieux d’affaires privés et d’autre part, les pouvoirs publics en matière de consultation et de représentation, concernant les nombreux domaines au premier rang desquels se trouve l’économie. Son siège se trouve à Douala.    </p>
                                                    <p>
                                                        <a href="https://www.ccima.cm/interne.php?idsmenu=269" className="text-blue-600" target="_blank" rel="noopener noreferrer"> <i>  https://www.ccima.cm/interne.php?idsmenu=269</i></a>
                                                    </p>

                                                    <p className=" mt-2 font-bold">
                                                        ■ Chambre d’Agriculture, des Pêches, de l’Élevage et des Forêts du Cameroun (CAPEF)

                                                    </p>
                                                    <p>
                                                        Organisme de représentation et de défense des intérêts des professionnels de l’agriculture, de la pêche, de l’élevage, de la forêt et de la faune auprès des pouvoirs publics. (Siège : Yaoundé, après SHO).
                                                    </p>

                                                    <p className=" mt-2 font-bold">
                                                        ■ Groupement des Entreprises du Cameroun (GECAM)

                                                    </p>
                                                    <p>
                                                        Basé à Douala, le GECAM est la principale organisation patronale du Cameroun.    </p>
                                                    <p>
                                                        <a href="https://legecam.cm" className="text-blue-600" target="_blank" rel="noopener noreferrer"> <i>  https://legecam.cm </i></a>
                                                    </p>





                                                </div>



                                            </div>

                                            <div className="bg-white mt-2">
                                                <p className="font-bold text-lg bg-[#dac7ac] p-2">
                                                    4.	Quelques programmes en faveur de l’entrepreneuriat et l’emploi des jeunes

                                                </p>
                                                <div className="p-4 ">
                                                    <p className=" mt-2 font-bold">
                                                        ■  Programme d’appui à la jeunesse rurale et urbaine (PAJER-U).

                                                    </p>
                                                    <p>
                                                        Le Pajer-U est mis en place par le biais du ministère de la jeunesse et de l’éducation civique.    </p>
                                                    <p>
                                                        <a href="www.pajeru-pifma.com" className="text-blue-600" target="_blank" rel="noopener noreferrer"> <i> www.pajeru-pifma.com</i></a>
                                                    </p>

                                                    <p className=" mt-2 font-bold">
                                                        ■ Programme de promotion de l’entrepreneuriat agropastoral des jeunes (PEA-Jeune).

                                                    </p>
                                                    <p>
                                                        Le PIPMAS promeut l’emploi et l’auto-emploi des jeunes.    </p>
                                                    <p>
                                                        <a href="www.pajeru-pifma.com" className="text-blue-600" target="_blank" rel="noopener noreferrer"> <i> www.pajeru-pifma.com</i></a>
                                                    </p>


                                                    <p className=" mt-2 font-bold">
                                                        ■ Programme de Promotion de l’Entrepreneuriat des Femmes et des Jeunes au Cameroun (PPEFJC).

                                                    </p>
                                                    <p>
                                                        Programme initié par l’OIF, en vue d’appuyer les efforts du Gouvernement en faveur de la recherche des opportunités de création d’emploi.   </p>
                                                    <p>

                                                    </p>
                                                    <p className=" mt-2 font-bold">

                                                        ■ Programme d’aide au retour et à l’insertion des jeunes de la diaspora (PARU-JEDI).
                                                    </p>
                                                    <p className="font-bold">
                                                        ■ Programme d’Appui aux acteurs du secteur informel (PIAASI).
                                                    </p>
                                                    <p>
                                                        Structure gouvernementale rattachée au ministère de l’emploi et de la formation professionnelle.
                                                    </p>
                                                    <p className="font-bold">
                                                        ■ Programme Intégré de Renforcement des Capacités des Entrepreneurs Locaux (EMPRETEC).
                                                    </p>
                                                    <p>
                                                        Structure gouvernementale rattachée au ministère des PME.
                                                    </p>
                                                    <p className="font-bold">
                                                        ■ Programme KAIZEN – Amélioration de la Productivité et de la Qualité.
                                                    </p>
                                                    <p>
                                                        Structure gouvernementale rattachée au ministère des PME.
                                                    </p>
                                                    <p className="font-bold">
                                                        ■ Programme National d’Incubation (INCUB’CAM).
                                                    </p>
                                                    <p>
                                                        Structure gouvernementale rattachée au ministère des PME.
                                                    </p>
                                                    <p className="font-bold">
                                                        ■ Pépinière Nationale Pilote d’Entreprises d’Édéa (PNPE).
                                                    </p>
                                                    <p>
                                                        Structure gouvernementale rattachée au ministère des PME.
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
                                        onClick={() => handleToggle(3)}
                                    >
                                        <span> Livres de référence en lien avec l’entrepreneuriat</span>
                                        <span className="text-2xl">{open === 3 ? "▲" : "▼"}</span>
                                    </button>


                                    {open === 3 && (<div className="bg-white/80  p-4 ">

                                        <div className="w-full ">
                                            <div className="space-y-4">
                                                < p className="font-bold">
                                                    Auteurs Camerounais
                                                </p>
                                                <p>
                                                    - Victor Fotso et Jean-Pierre Guyomard, <i className="text-[#4A62AA]">Le chemin de Hiala</i>. Éd. de Septembre, 1994.
                                                </p>
                                                <p>
                                                    - Jean-Samuel Noutchogouin, <i className="text-[#4A62AA]">À la mesure de mes pas</i>. Monde Global Éditions nouvelles, 2015.
                                                </p>
                                                <p>
                                                    - Lucas Kamdem, <i className="text-[#4A62AA]">De la misère à l’abondance : Les secrets des entrepreneurs libres, riches, heureux et fiers de l’être</i>. Éditions FACOP, 2017.
                                                </p>
                                                <p>
                                                    - Alain Foka, <i className="text-[#4A62AA]">Coffret biographique du Patriarche Kadji Defosso : il a fallu du temps</i>. The Madon. 2018
                                                </p>
                                                <p>
                                                    - Paul Kammogne Fokam et Gervais Koffi Djondo, <i className="text-[#4A62AA]">Deux capitaines d’industrie se racontent</i>, Éditions Afrédit, 2019.
                                                </p>
                                                <p>
                                                    - Louis Kamga Kamga, <i className="text-[#4A62AA]">Fotso Victor : sur les traces d’un milliardaire</i>. 2020.
                                                </p>
                                                <p>
                                                    - Dénis Christian Fouelefack Tsamo,<i className="text-[#4A62AA]"> Paul MONTHE, 1914-1974 : Histoire d’un bâtisseur de l’économie camerounaise</i>. Les Éditions du Schabel, 2021.
                                                </p>
                                                <p>
                                                    - Dieudonné Bougne, <i className="text-[#4A62AA]">Itinéraire d’un destin atypique – Autobiographie d’un opérateur économique camerounais</i>. L’Harmattan Cameroun, 2023.
                                                </p>
                                                <p>
                                                    - Christian Penda Ekoka, <i className="text-[#4A62AA]">Le Guide de l’investisseur</i>. Éd. de Septembre, 1994.
                                                </p>
                                                 <p className="font-bold pt-4">
                                                    Auteurs étrangers
                                                </p>
                                                <p>
                                                    - Jean-Pierre Warnier, <i className="text-[#4A62AA]">L’esprit d’entreprise au Cameroun</i>, Karthala, 1993.
                                                </p>
                                                <p>
                                                    - Peter Geschiere et Piet Konings, <i className="text-[#4A62AA]">Itinéraires d’accumulation au Cameroun</i>, Karthala, 1993.
                                                </p>
                                                <p>
                                                    - T. Harv Eker, <i className="text-[#4A62AA]">Secrets of the Millionaire Mind: Think rich to get rich</i>. Piaktus, 2007.
                                                </p>
                                                <p>
                                                    - W. Chan Kim, Renée Mauborgne, <i className="text-[#4A62AA]">Stratégie océan bleu : comment créer de nouveaux espaces stratégiques</i>. Pearson, 2015.
                                                </p>
                                                <p>
                                                    - Gary Keller, Jay Papasan, <i className="text-[#4A62AA]">Passez à l’essentiel ! Comment réussir tout ce que vous entreprenez</i>, Pearson, 2013.
                                                </p>
                                                <p>
                                                    - Robert Green, <i className="text-[#4A62AA]">Les lois de la nature humaine</i>, Alisio, 2019.
                                                </p>
                                                <p>
                                                    - Robert T. Kiyosaki, <i className="text-[#4A62AA]">Rich Dad, Poor Dad: What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!</i>, Plata Publishing, 2017.
                                                </p>
                                                <p>
                                                    - Stephen R. Covey, <i className="text-[#4A62AA]">Les 7 habitudes de ceux qui réalisent tout ce qu’ils entreprennent</i>. Éditions First, 2017.
                                                </p>
                                                <p>
                                                    - John P. Strelecky, <i className="text-[#4A62AA]">Les 5 grands rêves de vie</i>. Kindle, 2012.
                                                </p>
                                                <p>
                                                    - Jack Canfield, <i className="text-[#4A62AA]">Les succès selon Jack – Les principes du succès pour vous rendre là où vous souhaiteriez être</i>. Un Monde différent, 2005.
                                                </p>
                                                <p>
                                                    - Michael E. Gerber, <i className="text-[#4A62AA]">E-Myth. Le mythe de l’entrepreneur revisité</i>. 2017.
                                                </p>
                                                <p>
                                                    - Eric Ries, <i className="text-[#4A62AA]">Lean Startup : Adoptez l’innovation continue</i>. Pearson, 2017.
                                                </p>
                                            </div>






                                        </div>
                                    </div>)}







                                </div>

                            </div>


                            <div className="mt-1 space-y-4">
                                <div>


                                    <button
                                        className="py-2 px-4 w-full bg-white/80 text-[#4A62AA] text-xl font-bold flex justify-between items-center"
                                        onClick={() => handleToggle(4)}
                                    >
                                        <span>  Liens utiles</span>
                                        <span className="text-2xl">{open === 4 ? "▲" : "▼"}</span>
                                    </button>


                                    {open === 4 && (<div className="bg-white/80  p-4 ">

                                        <div className="w-full ">
                                            <div className="space-y-4">

                                                <p>
                                                    - Pour tester votre esprit entrepreneurial : <br /> <a href="https://www.test-mace.com/accueil/" className="text-blue-600" target="_blank" rel="noopener noreferrer"><i>  https://www.test-mace.com/accueil/ </i></a>
                                                </p>
                                                <p>
                                                    - Pour évaluer vos aptitudes à entreprendre :  <br /> <a href="https://business-builder.cci.fr/test-entrepreneur/votre-caractere" className="text-blue-600" target="_blank" rel="noopener noreferrer"><i>  https://business-builder.cci.fr/test-entrepreneur/votre-caractere </i> </a>
                                                </p>
                                                <p>
                                                    - Pour tester votre détermination :  <br /> <a href="https://business-builder.cci.fr/test-entrepreneur/" className="text-blue-600" target="_blank" rel="noopener noreferrer"><i>  https://business-builder.cci.fr/test-entrepreneur/ </i></a>
                                                </p>
                                                <p>
                                                    - Ministère de l’Emploi et de la Formation professionnelle (MINEFOP) : <br /> <a href="https://www.minefop.cm" className="text-blue-600" target="_blank" rel="noopener noreferrer"><i> https://www.minefop.cm </i></a>
                                                </p>
                                                <p>
                                                    - Ministère des Petites et Moyennes Entreprises, de l'Économie Sociale et de l'Artisanat (MINPMEESA) :  <br /> <a href="https://www.minpmeesa.cm" className="text-blue-600" target="_blank" rel="noopener noreferrer"><i> https://www.minpmeesa.cm </i></a>
                                                </p>
                                                <p>
                                                    - Les dix compétences du futur d’après le World Economic Forum :  <br /> <a href="https://www.weforum.org/stories/2020/10/top-10-work-skills-of-tomorrow-how-long-it-takes-to-learn-them/" className="text-blue-600" target="_blank" rel="noopener noreferrer"> <i>  https://www.weforum.org/stories/2020/10/top-10-work-skills-of-tomorrow-how-long-it-takes-to-learn-them/ </i></a>
                                                </p>
                                            </div>






                                        </div>
                                    </div>)}







                                </div>

                            </div>


                        </div>


                    </div>


                </div >



            </div>
        </div>

    );
}
