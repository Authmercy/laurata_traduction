
"use client";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
interface NavbarMobileProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
  isMobileMenuOpen2: boolean;
  setIsMobileMenuOpen2: Dispatch<SetStateAction<boolean>>;
}

export default function Navbar({ isMobileMenuOpen, setIsMobileMenuOpen, isMobileMenuOpen2, setIsMobileMenuOpen2 }: NavbarMobileProps) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [isOpen2, setIsOpen2] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsOpen(newState);
    setIsMobileMenuOpen(newState);

  };
  const [clickedLink, setClickedLink] = useState('');
  const [clicked, setClicked] = useState('');
  const links = [
    { href: '/students/offresStage', label: 'Offres de stage' },
    { href: '/students/formations', label: 'Annuaire des formations' },
    { href: '/students/concoursBourse', label: 'Concours & Bourses' },
    { href: '/students/bacAlafac/bac_fac', label: 'Orientation' },
    { href: '/students/metier/metier', label: 'Métiers' },
    { href: '/students/carrier', label: 'Carrière' },
    { href: '/students/entrepreneuriat', label: 'Entrepreneuriat' },
    { href: "/entreprise/employeur", label: 'Employeur à  la une' },
    { href: '/students/classements', label: 'Classements' },
    { href: '/jpo/jpo', label: 'Journées Portes Ouvertes' },
    { href: "/institut/institutAlaUne", label: '        Institution à  la une' },
    { href: '/students/sondage_enquetes', label: 'Sondages' },
    { href: '/femme/femme', label: "Femme d'impact" },
    { href: '/parole_dexpert/parole_expert', label: "Parole d'expert" },
    { href: '/students/service', label: 'Services' },
  ];
  const linksEntreprise = [

    { href: '/entreprise/poster', label: 'Poster un stage' },
    { href: "/entreprise/expertise", label: 'Experts Allemands du SES' },
    { href: '/entreprise/talents', label: 'Trouver des talents' },
    { href: "/entreprise/promotion", label: 'Promouvoir sa structure' },
    { href: "/entreprise/employeur", label: 'Employeur à  la une' },

  ];
  const linksInstituion = [
    { href: "/institut/stage", label: '   Obtenir des stages à ses étudiants' },
    { href: "/institut/referencer", label: ' Référencer ses formations' },
    { href: "/institut/promotion", label: '       Promouvoir son institution' },
    { href: "/institut/institutAlaUne", label: '        Institution à  la une' },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  const toggleSubMenu = (menu: string) => {
    setOpenSubMenu(openSubMenu === menu ? null : menu);
  };

  const toggleMenu2 = () => {
    const newState = !isMobileMenuOpen2;
    setIsOpen2(newState);
    setIsMobileMenuOpen2(newState);

  };

  return (
    <div>
      <div className="flex justify-between  text-sm items-center w-full px-4 py-4">
        {/* Left Links */}
        <div className="text-white flex space-x-3">
          <Link href="/">
            <div className="flex items-center p-2 py-4">
              <Image src="/images/logo.png" alt="home" width={150} height={240} />
            </div>
          </Link>


        </div>


        {/* Hamburger Menu */}
        <div className="flex flex-row gap-8">
          <div className="text-white flex space-x-3 relative">
            <button onClick={toggleMenu2} type="button">
              <img src="/images/avatar.png" alt="" className="w-8 h-auto" />
            </button>

            {isMobileMenuOpen2 && (
              <div className="absolute w-[350%] top-full -left-10 mt-2 bg-white space-y-4 text-[#1f386d] p-2 rounded z-50 bg-opacity-80">

                <p>
                  <Link href="/authentification/login" className="hover:underline mt-2">
                    Se connecter
                  </Link>
                </p>
                <p className="mt-2">
                  <Link href="/authentification/signup" className="hover:underline mt-2">
                    S'inscrire
                  </Link>
                </p>
              </div>
            )}
          </div>

          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center justify-center rounded-md text-white hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#A87A38]"
          >
            <svg
              className="h-10 w-10"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 44 32"
              aria-hidden="true"
            >
              {isOpen ? (
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M10 24L34 8M10 8l24 16"
                />
              ) : (
                <>
                  <line x1="2" y1="6" x2="42" y2="6" stroke="white" strokeWidth="3" strokeLinecap="round" />
                  <line x1="2" y1="16" x2="42" y2="16" stroke="orange" strokeWidth="3" strokeLinecap="round" />
                  <line x1="2" y1="26" x2="42" y2="26" stroke="white" strokeWidth="3" strokeLinecap="round" />
                </>
              )}
            </svg>

          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className=" w-full absolute top-24   text-[#1f386d] p-2 rounded z-50 bg-opacity-80">

          <button


            className={`flex w-full justify-end text-center bg-gray-300   px-4 py-2 mt-2 " `}
          >
            <p>

            </p>
            <p className="text-end text-[#bd7a1d]"> English</p>
          </button>


          {/* Étudiants et diplômés */}
          <div>

            <button
              onClick={() => toggleSubMenu("students")}

              className={`flex justify-between text-lg items-center w-full text-left bg-gray-300 px-4 py-2 mt-1 hover:text-neutral-950 transition  duration-200 " ${openSubMenu === "students" ? "font-bold" : "  font-normal"
                } ${openSubMenu === "students" ? " text-[#bd7a1d] " : "text-[#1f386d]  "
                }`}
            >
              Étudiants et diplômés  <span
                className={`transition-transform  duration-200  ${openSubMenu === "students" ? "rotate-180 font-normal" : " rotate-0 font-bold"
                  }`}
              >
                ▼
              </span>
            </button>
            {openSubMenu === "students" && (
              <div className="bg-gray-300 p-2 pl-6">
                {links.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setClickedLink(href)}
                    className={` block px-2 py-1
            ${clickedLink === href
                        ? " text-[#bd7a1d] " : "text-[#1f386d]  "
                      }
           `}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Entreprises et Organisations */}
          <div>
            <button
              onClick={() => toggleSubMenu("entreprises")}
              className={`flex justify-between text-lg items-center w-full text-left bg-gray-300 px-4 py-2  hover:text-neutral-950 transition  duration-200 " ${openSubMenu === "entreprises" ? "font-bold" : "  font-normal"
                } ${openSubMenu === "entreprises" ? " text-[#bd7a1d] " : "text-[#1f386d]  "
                }`} >
              Entreprises et organisations
              <span
                className={`transition-transform  duration-200  ${openSubMenu === "entreprises" ? "rotate-180" : ""
                  }`}
              >
                ▼
              </span>
            </button>
            {openSubMenu === "entreprises" && (
              <div className="bg-gray-300 p-2 pl-6">
                {linksEntreprise.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setClickedLink(href)}
                    className={` block px-2 py-1
            ${clickedLink === href
                        ? " text-[#bd7a1d] " : "text-[#1f386d]  "
                      }
           `}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>


          {/* Institutions du supérieur */}
          <div>
            <button
              onClick={() => toggleSubMenu("institutions")}
              className={`flex justify-between text-lg items-center w-full text-left bg-gray-300 px-4 py-2  hover:text-neutral-950 transition  duration-200 " ${openSubMenu === "institutions" ? "font-bold" : "  font-normal"
                } ${openSubMenu === "institutions" ? " text-[#bd7a1d] " : "text-[#1f386d]  "
                }`}
            >
              Institutions du supérieur    <span
                className={`transition-transform  duration-200  ${openSubMenu === "institutions" ? "rotate-180" : ""
                  }`}
              >
                ▼
              </span>
            </button>
            {openSubMenu === "institutions" && (
              <div className="bg-gray-300 p-2 pl-6">
                {linksInstituion.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setClickedLink(href)}
                    className={` block px-2 py-1
            ${clickedLink === href
                        ? " text-[#bd7a1d] " : "text-[#1f386d]  "
                      }
           `}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>




          <div>
            <button

              className="flex justify-between text-lg items-center w-full text-left bg-gray-300 px-2 py-2  hover:text-neutral-950 transition  duration-200 "
            >
              <Link href="/zoom" className={` block px-2 py-1
            ${clicked ? " text-[#bd7a1d] " : "text-[#1f386d]  "
                      }
           `}>
                Zoom sur
              </Link>
            </button>

          </div>
          <div>
            <button

              className="flex justify-between  text-lg items-center w-full text-left bg-gray-300 px-2 py-2 hover:text-neutral-950 transition  duration-200 "
            >
              <Link href="/actualite" className={` block px-2 py-1
            ${clicked ? " text-[#bd7a1d] " : "text-[#1f386d]  "
                      }
           `} >
                Actualités
              </Link>
            </button>

          </div>
          <div>
            <button

              className="flex justify-between  text-lg items-center w-full text-left bg-gray-300 px-2 py-2 hover:text-neutral-950 transition  duration-200 "
            >
              <Link href="/partners"   className={` block px-2 py-1
            ${clicked ? " text-[#bd7a1d] " : "text-[#1f386d]  "
                      }
           `}>
                Partenaires
              </Link>
            </button>

          </div>
          <div>
            <button
              onClick={() => toggleSubMenu("autres")}

              className={`flex justify-between text-lg items-center w-full text-left bg-gray-300 px-4 py-2  hover:text-neutral-950 transition  duration-200 " ${openSubMenu === "autres" ? "font-bold" : "  font-normal"
                } ${openSubMenu === "autres" ? " text-[#bd7a1d] " : "text-[#1f386d]  "
                }`}  >
              À propos <span
                className={`transition-transform  duration-200  ${openSubMenu === "autres" ? "rotate-180" : ""
                  }`}
              >
                ▼
              </span>
            </button>
            {openSubMenu === "autres" && (
              <div className=" bg-gray-300 p-2 pl-6 ">
                <Link href="/misc/presentaionDuSite"  className={` block px-2 py-1
            ${clicked ? " text-[#bd7a1d] " : "text-[#1f386d]  "
                      }
           `}>
                  Présentation
                </Link>

                <Link href="/misc/legal" className={` block px-2 py-1
            ${clicked ? " text-[#bd7a1d] " : "text-[#1f386d]  "
                      }
           `}>
                  Mentions Légales
                </Link>
                <Link href="/misc/cgu" className={` block px-2 py-1
            ${clicked ? " text-[#bd7a1d] " : "text-[#1f386d]  "
                      }
           `}>
                  Conditions Générales d'Utilisation
                </Link>

              </div>
            )}
          </div>
        </div>
      )}


    </div>
  )
}