
"use client";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import en from '@/i18/en/navbar/navbarMobile.json';
import fr from '@/i18/fr/navbar/navbarMobile.json';
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


    const { locale } = router;
    const t = locale === 'en' ? en : fr;
  const toggleMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsOpen(newState);
    setIsMobileMenuOpen(newState);

  };
  const [clickedLink, setClickedLink] = useState('');
  const [clicked, setClicked] = useState('');
  const links = [
    { href: '/students/offresStage', label: t.links.offresStage },
    { href: '/students/formations', label: t.links.formations },
    { href: '/students/concoursBourse', label: t.links.concoursBourse },
    { href: '/students/bacAlafac/bac_fac', label: t.links.orientation },
    { href: '/students/metier/metier', label: t.links.metier },
    { href: '/students/carrier', label: t.links.carrier },
    { href: '/students/entrepreneuriat', label: t.links.entrepreneuriat },
    { href: "/entreprise/employeur", label: t.links.employeur },
    { href: '/students/classements', label: t.links.classements },
    { href: '/jpo/jpo', label: t.links.jpo },
    { href: "/institut/institutAlaUne", label: t.links.institution },
    { href: '/students/sondage_enquetes', label: t.links.sondage_enquetes },
    { href: '/femme/femme', label: t.links.femme },
    { href: '/parole_dexpert/parole_expert', label: t.links.parole_expert },
    { href: '/students/service', label: t.links.service },
  ];
  
  const linksEntreprise = [
    { href: '/entreprise/poster', label: t.links.poster },
    { href: "/entreprise/expertise", label: t.links.expertise },
    { href: '/entreprise/talents', label: t.links.talents },
    { href: "/entreprise/promotion", label: t.links.promotion },
    { href: "/entreprise/employeur", label: t.links.employeur },
  ];
  
  const linksInstituion = [
    { href: "/institut/stage", label: t.links.stage },
    { href: "/institut/referencer", label: t.links.referencer },
    { href: "/institut/promotion", label: t.links.promotion_institution },
    { href: "/institut/institutAlaUne", label: t.links.institution },
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
      <div className="flex justify-between text-sm items-center w-full px-4 py-4">
 
        <div className="text-white flex space-x-3">
          <Link href="/">
            <div className="flex items-center p-2 py-4">
              <Image 
                src="/images/logo.png" 
                alt="home" 
                width={150} 
                height={240} 
              />
            </div>
          </Link>
        </div>

    
        <div className="flex flex-row gap-8">
          <div className="text-white flex space-x-3 relative">
            <button onClick={toggleMenu2} type="button">
              <img 
                src="/images/avatar.png" 
                alt="User menu" 
                className="w-8 h-auto" 
              />
            </button>

            {isMobileMenuOpen2 && (
              <div className="absolute w-[350%] top-full -left-10 mt-2 bg-white space-y-4 text-[#1f386d] p-2 rounded z-50 bg-opacity-80">
                <p>
                  <Link 
                    href="/authentification/login" 
                    className="hover:underline mt-2"
                  >
                    {t.auth.login}
                  </Link>
                </p>
                <p className="mt-2">
                  <Link 
                    href="/authentification/signup" 
                    className="hover:underline mt-2"
                  >
                    {t.auth.signup}
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
      
     
      {isOpen && (
        <div className="w-full absolute top-24 text-[#1f386d] p-2 rounded z-50 bg-opacity-80">
          <button className="flex w-full justify-end text-center bg-gray-300 px-4 py-2 mt-2">
            <p className="text-end text-[#bd7a1d]">
              {t.menu.switch_language}
            </p>
          </button>

      
          <div>
            <button
              onClick={() => toggleSubMenu("students")}
              className={`flex justify-between text-lg items-center w-full text-left bg-gray-300 px-4 py-2 mt-1 hover:text-neutral-950 transition duration-200 ${
                openSubMenu === "students" 
                  ? "font-bold text-[#bd7a1d]" 
                  : "font-normal text-[#1f386d]"
              }`}
            >
              {t.menu.students}
              <span className={`transition-transform duration-200 ${
                openSubMenu === "students" ? "rotate-180" : ""
              }`}>
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
                    className={`block px-2 py-1 ${
                      clickedLink === href 
                        ? "text-[#bd7a1d]" 
                        : "text-[#1f386d]"
                    }`}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

   
          <div>
            <button
              onClick={() => toggleSubMenu("entreprises")}
              className={`flex justify-between text-lg items-center w-full text-left bg-gray-300 px-4 py-2 hover:text-neutral-950 transition duration-200 ${
                openSubMenu === "entreprises" 
                  ? "font-bold text-[#bd7a1d]" 
                  : "font-normal text-[#1f386d]"
              }`}
            >
              {t.menu.companies}
              <span className={`transition-transform duration-200 ${
                openSubMenu === "entreprises" ? "rotate-180" : ""
              }`}>
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
                    className={`block px-2 py-1 ${
                      clickedLink === href 
                        ? "text-[#bd7a1d]" 
                        : "text-[#1f386d]"
                    }`}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

       
          <div>
            <button
              onClick={() => toggleSubMenu("institutions")}
              className={`flex justify-between text-lg items-center w-full text-left bg-gray-300 px-4 py-2 hover:text-neutral-950 transition duration-200 ${
                openSubMenu === "institutions" 
                  ? "font-bold text-[#bd7a1d]" 
                  : "font-normal text-[#1f386d]"
              }`}
            >
              {t.menu.institutions}
              <span className={`transition-transform duration-200 ${
                openSubMenu === "institutions" ? "rotate-180" : ""
              }`}>
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
                    className={`block px-2 py-1 ${
                      clickedLink === href 
                        ? "text-[#bd7a1d]" 
                        : "text-[#1f386d]"
                    }`}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

     
          <div>
            <button className="flex justify-between text-lg items-center w-full text-left bg-gray-300 px-2 py-2 hover:text-neutral-950 transition duration-200">
              <Link 
                href="/zoom" 
                className={`block px-2 py-1 ${
                  clickedLink === "/zoom" 
                    ? "text-[#bd7a1d]" 
                    : "text-[#1f386d]"
                }`}
              >
                {t.menu.spotlight}
              </Link>
            </button>
          </div>

          <div>
            <button className="flex justify-between text-lg items-center w-full text-left bg-gray-300 px-2 py-2 hover:text-neutral-950 transition duration-200">
              <Link 
                href="/actualite" 
                className={`block px-2 py-1 ${
                  clickedLink === "/actualite" 
                    ? "text-[#bd7a1d]" 
                    : "text-[#1f386d]"
                }`}
              >
                {t.menu.news}
              </Link>
            </button>
          </div>

          <div>
            <button className="flex justify-between text-lg items-center w-full text-left bg-gray-300 px-2 py-2 hover:text-neutral-950 transition duration-200">
              <Link 
                href="/partners" 
                className={`block px-2 py-1 ${
                  clickedLink === "/partners" 
                    ? "text-[#bd7a1d]" 
                    : "text-[#1f386d]"
                }`}
              >
                {t.menu.partners}
              </Link>
            </button>
          </div>

        
          <div>
            <button
              onClick={() => toggleSubMenu("autres")}
              className={`flex justify-between text-lg items-center w-full text-left bg-gray-300 px-4 py-2 hover:text-neutral-950 transition duration-200 ${
                openSubMenu === "autres" 
                  ? "font-bold text-[#bd7a1d]" 
                  : "font-normal text-[#1f386d]"
              }`}
            >
              {t.menu.about}
              <span className={`transition-transform duration-200 ${
                openSubMenu === "autres" ? "rotate-180" : ""
              }`}>
                ▼
              </span>
            </button>
            
            {openSubMenu === "autres" && (
              <div className="bg-gray-300 p-2 pl-6">
                <Link 
                  href="/misc/presentaionDuSite" 
                  className={`block px-2 py-1 ${
                    clickedLink === "/misc/presentaionDuSite" 
                      ? "text-[#bd7a1d]" 
                      : "text-[#1f386d]"
                  }`}
                >
                  {t.about.presentation}
                </Link>

                <Link 
                  href="/misc/legal" 
                  className={`block px-2 py-1 ${
                    clickedLink === "/misc/legal" 
                      ? "text-[#bd7a1d]" 
                      : "text-[#1f386d]"
                  }`}
                >
                  {t.about.legal}
                </Link>
                
                <Link 
                  href="/misc/cgu" 
                  className={`block px-2 py-1 ${
                    clickedLink === "/misc/cgu" 
                      ? "text-[#bd7a1d]" 
                      : "text-[#1f386d]"
                  }`}
                >
                  {t.about.terms}
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}