"use client";

import { useRouter } from 'next/router';
import en from '../../../i18/en/institution/promotion.json';
import fr from '../../../i18/fr/institution/promotion.json';
import Link from "next/link";
export default function PromotionInstitution() {
 const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : fr;
     return (
    <div className="flex flex-col md:flex-row">
      <div className="flex-grow md:w-2/3 p-8">
        <h1 className="text-[#A87A38] text-2xl text-center font-extrabold w-full pt-4 md:mx-8">
          {t.title}
        </h1>
        
        <div className="sm:p-4 md:p-8 md:pl-6 lg:pl-8 pt-2">
          <div className="bg-white border-1 p-6 border-[#4A62AA]">
            <p className="text-[#4A62AA] text-xl">{t.subtitle}</p>
            <p className="mt-4 text-black">{t.description}</p>
          </div>
          
          <div className="flex flex-col lg:flex-row flex-grow justify-center mt-1 py-2">
            <div>
              <p className="text-white text-center p-3 text-2xl bg-[#4A62AA]">
                {t.benefits.heading}
              </p>
              
              <div className="flex flex-col lg:flex-row flex-grow justify-center gap-6 mt-4">
                {t.benefits.items.map((benefit, index) => (
                  <div
                    key={index}
                    className={`
                      text-center p-8 text-white 
                      ${index === 0 ? 'bg-[#A87A38]' : 
                        index === 1 ? 'bg-[#4A62AA]/70' : 'bg-[#A87A38]/80'}
                    `}
                  >
                    <p>{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex mt-8 justify-center w-full">
            <div>
              <p className="text-center text-[#0f2568] text-xl p-4">
                <b className="text-xl">
                  <Link href="/misc/nous_contacter" className="hover:text-2xl">
                    {locale === 'en' ? 'Contact us' : 'Contactez-nous'}
                  </Link>
                </b> {t.cta.replace(locale === 'en' ? 'Contact us' : 'Contactez-nous', '')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
