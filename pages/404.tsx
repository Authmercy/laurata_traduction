import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import NavBarAccueil from '@/components/web/navbar/navBarAccueil'
import Footer from '@/components/web/footer/footer'
import { usePathname } from 'next/navigation'
import Navbar from '@/components/mobile/navbar/navbar'

interface Suggestion {
  href: string
  label: string
}

export default function Custom404() {
  const router = useRouter()
  const [referrer, setReferrer] = useState<string | null>(null)
  const [prefixSuggestions, setPrefixSuggestions] = useState<Suggestion[]>([])


  const pathname = usePathname();
  console.log('Full pathname:', pathname);
  if (pathname.startsWith('/students/metier/metier')) { }


  const getSuggestions = (path: string): Suggestion[] => {
    const segments = path.split('/').filter(Boolean);
    const combined = segments.join('/');

    console.log('Segments:', segments);
    console.log('Combined:', combined);

    if (combined.startsWith('students/offresStage')) {
      return [{ href: "/students/offresStage", label: "Offres de stage" }];
    }
    if (combined.startsWith('students/formations')) {
      return [{ href: "/students/formations", label: "Rechercher une formation" }];
    }
    if (combined.startsWith('students/bacAlafac') || combined.startsWith('students/bac_fac')) {
      return [{ href: "/students/bacAlafac/bac_fac", label: "Orientation" }];
    }
    if (combined.startsWith('students/bourses')) {
      return [{ href: "/students/bourses", label: "Concours & Bourses" }];
    }
    if (combined.startsWith('students/carrier')) {
      return [{ href: "/students/carrier", label: "CARRIÈRE" }];
    }
    if (combined.startsWith('students/metier') || combined.startsWith('students/met')) {
      return [{ href: "/students/metier/metier", label: "Métiers" }];
    }
    if (combined.startsWith('students/entrepreneuriat')) {
      return [{ href: "/students/entrepreneuriat", label: "Entrepreneuriat" }];
    }
    if (combined.startsWith('students/parole_expert')) {
      return [{ href: "/students/parole_expert", label: "Parole d'expert" }];
    }
    if (combined.startsWith('students/service')) {
      return [{ href: "/students/service", label: "Services" }];
    }

    if (combined.startsWith('entreprise/promotion')) {
      return [{ href: "/entreprise/promotion", label: "Promouvoir sa structure" }];
    }
    if (combined.startsWith('entreprise/expertise')) {
      return [{ href: "/entreprise/expertise", label: "Expertise allemande du SES" }];
    }
    if (combined.startsWith('entreprise/talents')) {
      return [{ href: "/entreprise/talents", label: "Trouver des talents" }];
    }
    if (combined.startsWith('entreprise/poster')) {
      return [{ href: "/entreprise/poster", label: "Poster un stage" }];
    }

    if (combined.startsWith('institut/stage')) {
      return [{ href: "/institut/stage", label: "OBTENIR DES STAGES À SES ÉTUDIANTS" }];
    }
    if (combined.startsWith('institut/referencer')) {
      return [{ href: "/institut/referencer", label: "RÉFÉRENCER SES FORMATIONS" }];
    }
    if (combined.startsWith('institut/promotion')) {
      return [{ href: "/institut/promotion", label: "PROMOUVOIR SON INSTITUTION" }];
    }

    // Default fallback
    return [
      { href: '/', label: 'Accueil' },
      { href: '/misc/nous_contacter', label: 'Nous Contactez' },
    ];
  };


  useEffect(() => {

    if (typeof window !== 'undefined') {
      setReferrer(document.referrer || null)
    }

    if (router.asPath) {
      const suggestions = getSuggestions(router.asPath)
      setPrefixSuggestions(suggestions)
    }
  }, [router.asPath])

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileMenuOpen2, setIsMobileMenuOpen2] = useState(false);

  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <div className="hidden lg:flex flex-col flex-grow">
          <div
            className="relative min-h-screen bg-cover bg-center bg-no-repeat flex flex-col"
            style={{ backgroundImage: "url('/images/backgroundEtudiant.jpeg')" }}>
            <NavBarAccueil />
            <div className="mt-24 ">
              <div className="mt-2 text-center w-[80%]">

                <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
                <p className="text-2xl font-semibold mb-2">Page not found</p>
                <p className="text-gray-600 mb-6">
                  Désolé, nous n’avons pas pu trouver la page que vous recherchiez.
                </p>

                <Link href="/" className="bg-[#4A62AA] text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition mb-6">
                  ← Retour à l'accueil
                </Link>

                {referrer && (
                  <div className="text-sm text-white mt-2">
                    Page Precedent:{' '}
                    <a href={referrer} className="text-blue-500 underline">
                      {referrer}
                    </a>
                  </div>
                )}

                {prefixSuggestions.length > 0 && (
                  <div className="mt-10">
                    <h2 className="text-lg font-medium mb-3">Peut etre vous recherchez :</h2>
                    <ul className="space-y-2">
                      {prefixSuggestions.map((item, idx) => (
                        <li key={idx}>
                          <Link href={item.href} className="text-[#4A62AA] hover:underline">


                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div className="mt-auto">

              <Footer />
            </div>
          </div>
        </div>

        <div className="block lg:hidden">
          <div>
            <div className="min-h-screen h-auto  overflow-auto  w-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/backgroundmobile.jpeg')" }}>

              <Navbar
                isMobileMenuOpen={isMobileMenuOpen}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
                isMobileMenuOpen2={isMobileMenuOpen2}
                setIsMobileMenuOpen2={setIsMobileMenuOpen2}
              />
              <div className="mt-2 text-center w-[80%]">

                <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
                <p className="text-2xl font-semibold mb-2">Page not found</p>
                <p className="text-gray-600 mb-6">
                  Désolé, nous n’avons pas pu trouver la page que vous recherchiez.
                </p>

                <Link href="/" className="bg-[#4A62AA] text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition mb-6">
                  ← Retour à l'accueil
                </Link>

                {referrer && (
                  <div className="text-sm text-white mt-2">
                    Page Precedent:{' '}
                    <a href={referrer} className="text-blue-500 underline">
                      {referrer}
                    </a>
                  </div>
                )}

                {prefixSuggestions.length > 0 && (
                  <div className="mt-10">
                    <h2 className="text-lg font-medium mb-3">Peut etre vous recherchez :</h2>
                    <ul className="space-y-2">
                      {prefixSuggestions.map((item, idx) => (
                        <li key={idx}>
                          <Link href={item.href} className="text-[#4A62AA] hover:underline">


                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
