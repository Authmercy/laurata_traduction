"use client";
import { useRouter } from 'next/router';
import en from '../../../i18/en/institution/reference.json';
import fr from '../../../i18/fr/institution/reference.json';
import Image from "next/image";
import Link from "next/link";

export default function ReferenceInstitution() {
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
          <div className="bg-white/70 text-[#4A62AA] font-bold p-2 pb-10 text-2xl pl-24 text-center">
            <p className="text-center">{t.heading}</p>
          </div>

          <div className="sm:p-4 md:pt-8 md:pl-6 lg:pl-8 pt-2">
            <div className="flex flex-col -mt-16 text-center lg:flex-row flex-grow gap-2">
              {t.benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className={`
                    p-6 
                    ${index === 0 ? 'bg-[#4A62AA]/70 text-white' : 
                     index === 1 ? 'bg-[#b1b3b9]/70 text-[#4A62AA]' : 
                     'bg-[#A87A38]/70 text-white'}
                  `}
                >
                  <p className={`${index === 0 || index === 2 ? 'uppercase' : ''} text-xl`}>
                    {benefit.title}
                  </p>
                  <p className="mt-4 text-black">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col border-2 border-[#4A62AA] bg-white lg:flex-row flex-grow justify-center">
            <div>
              <div className="flex flex-col lg:flex-row flex-grow justify-center gap-6 mt-4">
                <div className="p-8 text-center text-white">
                  <Image
                    src="/images/odd.png"
                    alt="ODD-odd"
                    width={250}
                    height={130}
                    className="object-contain"
                  />
                </div>

                <div className="text-center p-8 space-y-4 text-black">
                  <p className="text-[#e44795] text-xl font-bold">
                    {t.odd.title}
                  </p>
                  <p>{t.odd.description}</p>
                </div>

                <div className="text-center items-stretch p-8 text-white">
                  <Image
                    src="/images/ODD-10.svg"
                    alt="ODD-10"
                    width={180}
                    height={120}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-[#A87A38] text-[#4A62AA] mt-8 p-2 pb-12 text-center">
              <p className="text-center text-lg text-white">
                {t.options.heading}
              </p>
            </div>

            <div className="flex flex-col justify-between w-11/12 -mt-8 ml-10 lg:flex-row gap-8">
              {t.options.items.map((item, index) => (
                <div key={index} className="bg-white border-2 p-4 border-[#A87A38] flex-1">
                  <p 
                    className="text-[#4A62AA]"
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <p className="text-center text-white text-lg p-4">
              <b className="text-xl">
                <Link href="/misc/nous_contacter" className="hover:text-xl">
                  {locale === 'en' ? 'Contact us' : 'Contactez-nous'}
                </Link>
              </b> {t.cta.replace(locale === 'en' ? 'Contact us' : 'Contactez-nous', '')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}