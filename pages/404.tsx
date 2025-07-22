import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import NavBarAccueil from '@/components/web/navbar/navBarAccueil'
import Footer from '@/components/web/footer/footer'
import { usePathname } from 'next/navigation'
import Navbar from '@/components/mobile/navbar/navbar'
import fr from '@/i18/fr/error.json';
import en from '@/i18/en/error.json';
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
      return [{ href: "/students/offresStage", label: t.links.offresStage }];
    }
    if (combined.startsWith('students/formations')) {
      return [{ href: "/students/formations", label:  t.links.formations }];
    }
    if (combined.startsWith('students/bacAlafac') || combined.startsWith('students/bac_fac')) {
      return [{ href: "/students/bacAlafac/bac_fac", label:  t.links.orientation }];
    }
    if (combined.startsWith('students/bourses')) {
      return [{ href: "/students/bourses", label: t.links.concoursBourse}];
    }
    if (combined.startsWith('students/carrier')) {
      return [{ href: "/students/carrier", label:  t.links.carrier }];
    }
    if (combined.startsWith('students/metier') || combined.startsWith('students/met')) {
      return [{ href: "/students/metier/metier", label:  t.links.metier }];
    }
    if (combined.startsWith('students/entrepreneuriat')) {
      return [{ href: "/students/entrepreneuriat", label:  t.links.entrepreneuriat }];
    }
    if (combined.startsWith('students/parole_expert')) {
      return [{ href: "/students/parole_expert", label:  t.links.parole_expert }];
    }
    if (combined.startsWith('students/service')) {
      return [{ href: "/students/service", label:  t.links.service }];
    }

    if (combined.startsWith('entreprise/promotion')) {
      return [{ href: "/entreprise/promotion", label:  t.links.promotion }];
    }
    if (combined.startsWith('entreprise/expertise')) {
      return [{ href: "/entreprise/expertise", label:  t.links.expertise }];
    }
    if (combined.startsWith('entreprise/talents')) {
      return [{ href: "/entreprise/talents", label:  t.links.talents}];
    }
    if (combined.startsWith('entreprise/poster')) {
      return [{ href: "/entreprise/poster", label:  t.links.poster }];
    }

    if (combined.startsWith('institut/stage')) {
      return [{ href: "/institut/stage", label:  t.links.stage }];
    }
    if (combined.startsWith('institut/referencer')) {
      return [{ href: "/institut/referencer", label:  t.links.referencer }];
    }
    if (combined.startsWith('institut/promotion')) {
      return [{ href: "/institut/promotion", label:  t.links.promotion_institution }];
    }

   
    return [
      { href: '/', label:  t.links.home },
      { href: '/misc/nous_contacter', label:  t.links.contact },
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
  const { locale } = router;
  const t = locale === 'en' ? en : fr;
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

                <h1 className="text-6xl font-bold text-red-600 mb-4">       {t.errorCode}</h1>
                <p className="text-2xl font-semibold mb-2" >        {t.pageNotFound} </p>
                <p className="text-gray-600 mb-6">
                     {t.errorMessage}
                </p>

                <Link href="/" className="bg-[#4A62AA] text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition mb-6">
                  {t.backToHome}
                </Link>

                {referrer && (
                  <div className="text-sm text-white mt-2">
               {t.previousPage}{' '}
                    <a href={referrer} className="text-blue-500 underline">
                      {referrer}
                    </a>
                  </div>
                )}

                {prefixSuggestions.length > 0 && (
                  <div className="mt-10">
                    <h2 className="text-lg font-medium mb-3">     {t.suggestionsTitle}</h2>
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
                <p className="text-2xl font-semibold mb-2"> {t.pageNotFound}</p>
                <p className="text-gray-600 mb-6">
                 {t.errorMessage}
                </p>

                <Link href="/" className="bg-[#4A62AA] text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition mb-6">
                {t.backToHome}
                </Link>

                {referrer && (
                  <div className="text-sm text-white mt-2">
                             {t.previousPage}{' '}
                    <a href={referrer} className="text-blue-500 underline">
                      {referrer}
                    </a>
                  </div>
                )}

                {prefixSuggestions.length > 0 && (
                  <div className="mt-10">
                    <h2 className="text-lg font-medium mb-3">     {t.suggestionsTitle}</h2>
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
