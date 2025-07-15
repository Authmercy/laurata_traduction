"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../navbar/navbar";
import BandeauMobile from "../footer/footer";
import FooterMobile from "../footer/footerEnd";



export default function CguComponentMobile() {


  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileMenuOpen2, setIsMobileMenuOpen2] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
        <div className="min-h-screen   bg-[#34538C]  overflow-auto  w-screen bg-cover  text-justify bg-center bg-no-repeat "  >
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
            <p>CONDITIONS GÉNÉRALES D’UTILISATION</p>
          </div>



          <div className="flex p-3 bg-white text-black gap-1 w-full">
            <div className="flex justify-center text-justify flex-col w-full px-2 md:px-0">
              <div className="mb-4">
                <p>Le site <b>  Laurata.com </b>est mis en ligne et géré par la société MOSAÏK.</p>
              </div>
              <div className="mb-4">
                <h1 className="mb-4 text-[#4A62AA] font-bold ">1. Acceptation des présentes conditions générales d'utilisation</h1>
                <p>L’utilisation de Laurata.com est soumise au respect des conditions générales décrites ci-après. En accédant à Laurata.com, vous déclarez avoir pris connaissance et avoir accepté, sans la moindre réserve, ces conditions générales d’utilisation.</p>
              </div>
              <div className="mb-4">
                <h1 className="mb-4 text-[#4A62AA] font-bold ">2. Finalité d’information générale du site </h1>
                <p className="mb-2"> Les informations qui figurent sur Laurata.com sont de nature générale. Elles visent à :  </p>
                <p className="mb-2"> ― Donner à chaque élève et étudiant camerounais ou étranger, les informations essentielles sur l’ensemble des formations proposées par les institutions d’enseignement supérieur au Cameroun.  </p>
                <p className="mb-2"> ― Accompagner chaque élève et étudiant camerounais ou étranger, dans l’identification d’une filière d’études et/ou d’un métier qui sied à ses ambitions, ses envies et à ses aptitudes.  </p>

                <p>  ― Aider chaque étudiant ou diplômé camerounais, à trouver un stage ou un premier emploi ainsi qu’à préparer efficacement son insertion professionnelle. </p>
              </div>

              <div className="mb-4">
                <h1 className="mb-4 font-bold">3. Indisponibilité et modification du site  </h1>
                <p className="mb-2">MOSAÏK ne peut pas garantir que Laurata.com soit à l'abri d'interruptions ou de problèmes techniques. Le contenu de Laurata.com (en ce compris les liens hypertextes) peut à tout moment être adapté, modifié, complété ou supprimé, et Laurata.com peut également devenir indisponible temporairement ou définitivement, sans que cela ne fasse l'objet d'une annonce ou d'une communication quelconque.   </p>



              </div>

              <div className="mb-4">
                <h1 className="mb-4 text-[#4A62AA] font-bold ">4. Qualité de l’information et du service </h1>
                <p className="mb-2">  MOSAÏK apporte le plus grand soin à la gestion de Laurata.com. Néanmoins, les informations publiées peuvent contenir des inexactitudes techniques ou des erreurs typographiques. Elles ne sont pas nécessairement complètes ni exhaustives et sont sujettes à modification sans préavis. </p>
                <p className="mb-2">  En utilisant Laurata.com, le visiteur reconnaît avoir eu la possibilité de prendre connaissance de cet avertissement. </p>



              </div>

              <div className="mb-4">
                <h1 className="mb-4 text-[#4A62AA] font-bold "> 5. Limitation de responsabilité </h1>
                <p className="mb-2"> MOSAÏK décline toute responsabilité quant à l’utilisation qui pourrait être faite du contenu de Laurata.com. MOSAÏK n'est pas responsable du contenu de tout autre site auquel vous pourriez avoir accès via les liens hypertextes présents sur Laurata.com ainsi que du contenu de sites référençant Laurata.com.  </p>
                <p className="mb-2">  En aucun cas la responsabilité de MOSAÏK ne peut être engagée pour des dommages quelconques matériels ou immatériels, spéciaux, directs ou indirects qui résulteraient notamment de la consultation et ou de l'utilisation de Laurata.com ou d'autres sites qui y sont liés, comme des utilisations d'informations textuelles, sonores ou visuelles qui auraient pu y être recueillies et notamment de tout préjudice financier ou commercial, de pertes de programmes ou de données dans son système d'information ou autre.  </p>
              </div>
              <div className="mb-4">
                <h1 className="mb-4 text-[#4A62AA] font-bold ">6. Notification en cas d’erreur ou d’infraction </h1>
                <p className="mb-2">  Si des erreurs, manquements, abus ou infractions sont constatés quant au contenu de Laurata.com et aux informations qui y sont fournies, MOSAÏK mettra tout en œuvre pour rectifier la situation au plus vite dès qu’il aura pu en avoir connaissance. </p>
                <p className="mb-2"> Si vous constatez des erreurs, manquements, abus ou infractions, vous pouvez prendre contact avec MOSAÏK en utilisant les coordonnées mentionnées sur le site Laurata.com.  </p>

              </div>
              <div className="mb-4">
                <h1 className="mb-4 text-[#4A62AA] font-bold "> 7. Droits de propriété intellectuelle</h1>
                <p className="mb-2">  Laurata.com est la propriété exclusive de la société MOSAÏK. </p>
                <p className="mb-2"> Sauf mention expresse, l'ensemble des contenus, pages, scripts, vidéos, brochures, charte graphique, applications informatiques, icônes, sons et autres éléments constitutifs de Laurata.com ou accessibles sur Laurata.com sont la propriété exclusive de MOSAÏK.  </p>

                <p className="mb-2">  Toute production, reproduction ou représentation des données mises à disposition, sur quelque support que ce soit, en tout ou en partie, est interdite sans autorisation préalable. Le non-respect de cette interdiction constitue une contrefaçon pouvant engager la responsabilité pénale et civile du contrefacteur. </p>

                <p>  Il est strictement interdit d'utiliser ou de reproduire la marque Laurata ou sa représentation graphique, seule ou associée, à quelque titre que ce soit et notamment à des fins publicitaires sans l'accord écrit préalable de MOSAÏK.
                </p>
              </div>
              <div className="mb-4">
                <h1 className="mb-4 text-[#4A62AA] font-bold ">8. Création d’hyperliens vers le site </h1>
                <p className="mb-2">Sans demande préalable, il est permis de créer des liens qui renvoient aux pages d’accueil de Laurata.com ou à tout autre contenu de Laurata.com. Par contre, le recours à toutes techniques visant à inclure tout ou partie de Laurata.com dans un autre site Internet en masquant, ne serait-ce que partiellement, l’origine exacte de l’information ou pouvant prêter à confusion sur l’origine de l’information, telle que le framing ou l’in-lining, requiert une autorisation écrite.   </p>



              </div>
              <div className="mb-4">
                <h1 className="mb-4 text-[#4A62AA] font-bold "> 9. Vie privée </h1>
                <p className="mb-2"> L’accès à certaines sections de Laurata.com requiert notamment le renseignement d’un identifiant et/ou d’une adresse électronique selon le profil utilisateur et d’un mot de passe propres à chaque utilisateur. Il appartient à l’utilisateur de veiller à la confidentialité de ces renseignements et à leur utilisation non-frauduleuse.  </p>
                <p className="mb-2"> MOSAÏK collecte et traite automatiquement certaines données de connexions (adresse IP, date et heure d’accès au site, pages consultées, type de navigateur utilisé, plate-forme et/ou système d’exploitation installé sur le PC, moteur de recherche, mots-clés utilisés pour retrouver Laurata.com, fichiers téléchargés).  </p>

                <p className="mb-2"> Les données reprises dans nos bases de données sont traitées conformément aux lois en vigueur relatives à la protection des données à caractère personnel et de la vie privée.  </p>


              </div>
              <div className="mb-4">
                <h1 className="mb-4 text-[#4A62AA] font-bold ">10. Charte d’utilisation du module de discussion </h1>
                <p className="mb-2"> Laurata.com utilise le système de commentaires Facebook. Il est donc soumis aux règles de fonctionnement et à la charte déontologique de Facebook.  </p>
                <p className="mb-2"> Nous demandons à l’utilisateur de faire preuve de politesse, de courtoisie, de respect et de faire un effort sur la grammaire et l’orthographe. Le langage SMS est formellement interdit.  </p>

                <p className="mb-2"> Les modérateurs de cet espace de discussion supprimeront ou éditeront tout message répréhensible. Après suppression du/des message(s), si l’utilisateur persiste, il se verra banni de l’espace de discussion.  </p>
                <p className="mb-2">  Les utilisateurs de l’espace de discussion sont pleinement responsables du contenu de leurs messages. En aucun cas la responsabilité de MOSAÏK n’est engagée par les témoignages. </p>
                <p className="mb-2"> Les utilisateurs de cet espace de discussion s’engagent à respecter le droit à la propriété intellectuelle : ils ne posteront que du contenu dont ils sont propriétaires. Le cas échéant, ils devront avoir reçu l’autorisation du propriétaire de ce droit.
                </p>


              </div>
              <div className="mb-4">
                <h1 className="mb-4 text-[#4A62AA] font-bold ">11. Juridiction </h1>
                <p className="mb-2">MOSAÏK est soumis au droit Camerounais.   </p>
                <p className="mb-2">  En cas de litige, seuls les tribunaux de Yaoundé (Cameroun) sont compétents. </p>



                <p>   </p>
              </div>


             
  
            </div>
                        
          </div>
           <div className=" flex flex-row justify-center gap-4">
                <BandeauMobile />
              </div>
           <footer className="w-full bg-blue-900   mt-10 text-white text-center">
                              <FooterMobile />
                          </footer>  
        </div>

      </div>


    </div>
  );
}
